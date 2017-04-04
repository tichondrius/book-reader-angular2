import {IType} from '../../type/type'

export interface PostCategoryModel{
    name: string,
    author: string,
    img: string,
    type: number,
    introduce: string,
    types: IType[],
    imgcat: any
}