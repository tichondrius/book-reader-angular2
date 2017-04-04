import Category from '../category/category'


interface IImage{
    url: string
}
export interface IStory{
    _id: string,
    name: string,
    part: number,
    cat: Category
    date: Date,
    img_pre: string,
    text_pre: string,
    img_main: IImage[]
}
