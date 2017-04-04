import {Component, OnInit} from '@angular/core'
import {TypeService} from './type.service'
import {Router} from '@angular/router'
import {IType} from './type'
@Component({
    selector: '[typeNav]',
    templateUrl: './type-nav.component.html'
})

export class TypeNavComponent implements OnInit{
    types: IType[];

    constructor(private _typeService: TypeService, private _router: Router){

    }
    ngOnInit(): void{
        this._typeService.getListForNav().subscribe(types => this.types = types);
    }
    
}