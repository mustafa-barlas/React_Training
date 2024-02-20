import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { singleProduct } from '../api'
import { IProduct } from '../models/IProducts'
import ImageGallery from "react-image-gallery";
import { Helmet } from 'react-helmet';
import { addRemoveLike, likeControl } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../useRedux/store';
import { LikesAction } from '../useRedux/actions/LikesAction';
import { LikesType } from '../useRedux/types/LikesType';


function ProductDetail() {

  // for redux
  const likesArr = useSelector((item: StateType) => item.LikesReducer)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [item, setItem] = useState<IProduct>()
  const [imageArr, setImageArr] = useState<any[]>([])


  // likes control 
  const [isLike, setIsLike] = useState(false)
  const fncLike = () => {
    const status = !isLike
    setIsLike(status)
    addRemoveLike(item!.id)

    const sendItem : LikesAction = {
      type : LikesType.LIKE_ADD,
      payload : []
    }
    dispatch(sendItem)
  }

  const params = useParams()
  useEffect(() => {
    const id = params.id
    if (id) {
      singleProduct(id).then(ress => {
        setItem(ress.data)
        parseImage(ress.data.images)
        const statusLike = likeControl(ress.data.id)
        setIsLike(statusLike)
      }).catch(error => {
        navigate('/home', { replace: true })

      })
    }
  }, [])


  const parseImage = (arr: string[]) => {
    var imageArr: any[] = []

    arr.forEach((item, index) => {
      const obj = {
        original: item,
        thumbnail: item
      }
      imageArr.push(obj)
    })
    setImageArr(imageArr)
  }


  return (
    <>
      <Helmet >
        <title>{item?.title}</title>
        <meta name='description' content='Product Details' />
      </Helmet>
      {item &&
        <>
          <div className='row my-3'>
            <div className='col-sm-6'>
              <h3> <span className='badge rounded-pill text-bg-danger'>{item.discountPercentage} %</span></h3>
              <ImageGallery items={imageArr} />
            </div>
            <div className='col-sm-6 my-5'>
              <div style={{ fontSize: 30, float: 'right' }} role='button' onClick={fncLike}>
                <i className={isLike === true ? " bi bi-suit-heart-fill" : " bi bi-suit-heart"} style={{ color: 'red' }}></i></div>
              <h2 className='mt-2'>{item.title}</h2>
              <h3 className="my-3">{item.price} ₺</h3>
              <p className='lead'>{item.description}</p>

            </div>

          </div>
        </>
      }


    </>
  )
}

export default ProductDetail

