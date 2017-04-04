import ICategory from '../category/category'

export interface IType{
    _id: string,
    name: string,
    categories: ICategory[]
}