import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'

import  {Router} from '@angular/router'
import {OnInit} from '@angular/core'
import ICategory from '../category'
import {AppConfig} from '../../codes/secrect'


@Component({
    templateUrl: './category-box.component.html',
    selector: 'category-box',
    styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent implements OnInit {
    public urlImg: string;
    @Input() category: ICategory;
    constructor(
        private _router: Router){   
            this.urlImg = AppConfig.urlImg;
    }
    
    ngOnInit(): void{
       
    }
}