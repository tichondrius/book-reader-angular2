import {IUser} from '../user/user'
import {IType} from '../type/type'
import {IStory} from '../story/story'
 
interface ICategory{
    _id: string,
    name: string
    author: string,
    stories: IStory[],
    type:number,
    img: string
    totalchap: number,
    postby: IUser,
    introduce: string,
    types: IType[]
}
export default ICategory;