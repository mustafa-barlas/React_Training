import { likesArr } from "../../utils/util";
import { LikesAction } from "../actions/LikesAction";
import { LikesType } from "../types/LikesType";

export const LikesReducer = (state: number[] = [], action: LikesAction) => {

    switch (action.type) {
        case LikesType.LIKE_ADD:
            return likesArr()

        case LikesType.LIKE_REMOVE:
            return likesArr()

        default:
            return state
    }
}