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
    getListStoryForHome(): Observable<IStory[]>{
        return this._http.get(this._hostApi + 'stories/')
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
        return this.httpClient.put(`${this._hostApi}stories`, model)
            .map((response: Response) => response)
            .catch(this.handleError);
    }
    private handleError(error: Response)
    {
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}