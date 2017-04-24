import {Injectable} from '@angular/core'
import ICategory from './category'
import {PostCategoryModel} from './post-category.component/model'
import {Http, Response, Headers} from '@angular/http'
import {HttpClient} from '../httpclient'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import {AppConfig} from '../codes/secrect'

@Injectable()
export class CategoryService{
    private _hostApi: string;
    constructor(private _http: Http, private _httpauth: HttpClient){
        this._hostApi = AppConfig.hostApi;

    }
    getList(Qty: number): Observable<ICategory[]>{
        return this._http.get(`${this._hostApi}categories/`)
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
    }
    getListForHome(order: string, orderby: string):  Observable<ICategory[]>{
         return this._http.get(this._hostApi + `categories?order=${order}&orderby=${orderby}`)
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
    }
    getMoreForHome(order: string, orderby: string, offset: number): Observable<ICategory[]>{

         return this._http.get(this._hostApi + `categories?order=${order}&orderby=${orderby}&skip=${offset}`)
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
    }
    getListByUser(type: number = undefined): Observable<ICategory[]>{
        if (type == undefined){
             return this._httpauth.get(`${this._hostApi}categories/getbyuser`)
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
        }
        else
        {
             return this._httpauth.get(`${this._hostApi}categories/getbyuser?type=${type}`)
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
        }
       
    }
    getListForNav(): Observable<ICategory[]>{
        return this._http.get(this._hostApi + 'categories/fornav')
            .map((response: Response) => <ICategory[]> response.json())
            .catch(this.handleError);
    }

    getCategoryById(catID: string): Observable<ICategory>{
        return this._http.get(this._hostApi + 'categories/' +  catID)
            .map((response: Response) => <ICategory> response.json())
            .catch(this.handleError);
    }
    createCategory(model: PostCategoryModel) :Observable<ICategory>{

       
        var formData =  new FormData();
        formData.append('imgcat', model.imgcat);
        model.imgcat = undefined;
        formData.append('model', JSON.stringify(model));
        return this._httpauth.putData(`${this._hostApi}categories/`, formData)
            .map((response: Response) => <ICategory> response.json())
            .catch(this.handleError);
    }
   
    private handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}