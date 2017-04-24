import {Injectable} from '@angular/core'
import {IStory} from './story'
import {Http, Response} from '@angular/http'
import {HttpClient} from '../httpclient'
import {Observable} from 'rxjs/Observable'
import {IPostStoryModel} from '../story/post-story.component/poststory'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import {AppConfig} from '../codes/secrect'

@Injectable()
export class StoryService{
    private _hostApi: string;
    constructor(private _http: Http, private httpClient: HttpClient){
        this._hostApi = AppConfig.hostApi;
        
    }
    getListStoryForHome(order: string, orderby: string): Observable<IStory[]>{
        return this._http.get(this._hostApi + `stories?order=${order}&orderby=${orderby}&type=1`)
            .map((response: Response) => <IStory[]> response.json())
            .catch(this.handleError);
    }
    getMoreStoryForHome(order: string, orderby: string, offset: number): Observable<IStory[]>{

        return this._http.get(this._hostApi + `stories?order=${order}&orderby=${orderby}&skip=${offset}&type=1`)
            .map((response: Response) => <IStory[]> response.json())
            .catch(this.handleError);
    }
    getDetailStory(storyID: string) : Observable<IStory>{
        return this._http.get(`${this._hostApi}stories/${storyID}`)
            .map((response: Response) => <IStory> response.json())
            .catch(this.handleError);
    }
    getStoryByCategoryID(catID: string): Observable<IStory[]>{
        return this._http.get(`${this._hostApi}stories?category=${catID}`)
            .map((response: Response) => <IStory[]> response.json())
       
            .catch(this.handleError);
    }
    saveStory(model: IPostStoryModel): Observable<Response>{
        var formData = new FormData();
        formData.append('file_pre', model.file_pre);
        for (let i = 0; i < model.file_main.length; i++)
        {
            formData.append('file_main', model.file_main[i]);
        }
        formData.append('model', JSON.stringify(model));
        return this.httpClient.putData(`${this._hostApi}stories`, formData)
            .map((response: Response) => response)
            .catch(this.handleError);
    }
    private handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}