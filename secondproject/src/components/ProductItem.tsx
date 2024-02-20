import { IProduct } from '../models/IProducts'
import { NavLink } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

function ProductItem(props: { item: IProduct }) {

    return (
        <>
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4  my-3">
                <div className="card" >
                    <img src={props.item.thumbnail} style={{ height: 230 }} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{props.item.title}</h5>
                        <p className="card-text" style={{ height: 70 }}>{props.item.description}</p>
                        <div className='d-flex justify-content-between'>
                            <NavLink className={'btn btn-primary'} to={'/productDetail/' + props.item.id}> Detail</NavLink>
                            <div className='text-end'>{props.item.price}₺</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductItem