import { UnknownAction } from "redux";
import { LikesType } from "../types/LikesType";

export interface LikesAction extends UnknownAction {
    type : LikesType,
    payload : number[]
}