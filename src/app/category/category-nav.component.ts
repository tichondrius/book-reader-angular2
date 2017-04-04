import {Component, OnInit} from '@angular/core'
import {CategoryService} from './category.service'
import {Router} from '@angular/router'
import ICategory from './category'
@Component({
    selector: '[categoryNav]',
    templateUrl: './category-nav.component.html'
})

export class CategoryNavComponent implements OnInit{
    public categories: ICategory[];

    constructor(private _categoryService: CategoryService, private _router: Router){


    }
    ngOnInit(): void{
        this._categoryService.getListForNav().subscribe(categories => this.categories = categories);

    }
    
}