import { BlockModel } from "./blockModel";

export interface AreaModel {
    name: string;
    id: number;
    blocks: BlockModel[]
}