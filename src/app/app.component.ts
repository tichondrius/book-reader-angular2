import {Component, OnInit} from '@angular/core'
import {ProductService} from './products/product.service'


declare var Layout: any

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{
    pageTitle: string = `Acme Product Manament`;
    ngAfterViewInit(): void{
        document.addEventListener("DOMContentLoaded", function(event) {
            Layout.init();
        });
    }
}