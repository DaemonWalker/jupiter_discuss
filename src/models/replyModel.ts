import { UserModel } from "./userModel";

export interface replyModel {
    author: UserModel;
    content: string;
    id: number;
    refer: number;
    agree: number;
    disagree: number;
    index: number;
}