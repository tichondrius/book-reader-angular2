import {Component} from '@angular/core'
import {IProduct} from './product'
import {ActivatedRoute, Router} from '@angular/router'
import {OnInit} from '@angular/core'
import {ProductService} from './product.service'
@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService){
        
    }

    pageTitle: string = 'Product Detail'
    product: IProduct
    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        this._productService.getProductById(id).subscribe(productdetail => {
            this.product = productdetail
            console.log(this.product);
        });


    }
    onBack(): void{
        this._router.navigate(['/products']);
    }
     onRatingClicked(message: string): void{
        this.pageTitle = `Product List: ${message}`;
    }



}