import { UserModel } from "./userModel";
import { replyModel } from "./replyModel";

export interface IssueModel {
    title: string;
    replyCount: number;
    author: UserModel;
    replies: replyModel[];
    id: number;
    publishDate: string;
}