import {PostCategoryModel} from './model'
import {Component, OnInit} from '@angular/core'
import {IType} from '../../type/type'
import {TypeService} from '../../type/type.service'
import {AuthService} from '../../auth/auth.service'
import {CategoryService} from '../category.service'
@Component({

    selector: 'post-cat-cpt',
    styleUrls: ['./post-category.component.css'],
    templateUrl: './post-category.component.html'
})
export class PostCategoryComponent{
    public model: PostCategoryModel;
    public success: boolean = false;
    public waitRequest: boolean = false;
    public messages: string[];
    public types: IType[] = [];
    public choosetype: string = "-1";

    constructor(private typeService: TypeService,
     private authService: AuthService,
     private categoryService: CategoryService){

        this.model = {
            name: '',
            author: '',
            img: '',
            type: 1,
            introduce: '',
            types: [],
            imgcat: undefined
        };

    }
    ngOnInit(): void{
        this.typeService.getListForNav().subscribe(types => this.types = types,
                                                   error => console.log(error));
    }
    onChange(_id: string): void{
        if (_id != '-1'){
            this.choosetype = "-1";
            var index = this.types.findIndex((value) => value._id == _id);
            if (index >= 0)
            {
                var type: IType = this.types[index];
                this.types.splice(index, 1);
                this.model.types.push(type);
            }
            
        }
    }
    onChangeFile(files): void{
        if (files)
        {
            this.model.imgcat = files[0];
        }
    }
    removeType(type: IType): void{
        if (type){
            this.types.push(type);
            var index = this.model.types.findIndex((value) => value._id == type._id);
            if (index >= 0)
            {
                this.model.types.splice(index, 1);
            }
        }
    }
    onSubmit(): void{
        this.waitRequest = true;
        this.success = false;
        this.messages = [];
        this.categoryService.createCategory(this.model)
            .subscribe(category => {
                this.success = true;
                this.waitRequest = false;
                 this.model = {
                    name: '',
                    author: '',
                    img: '',
                    type: 1,
                    introduce: '',
                    types: [],
                    imgcat: undefined
                };
                  setTimeout(() => {
                    this.success = false;
                }, 2000);
            }, error => {
                this.messages = error.lstMessErr
                this.waitRequest = false;
                console.log(error);
            })
    }
}