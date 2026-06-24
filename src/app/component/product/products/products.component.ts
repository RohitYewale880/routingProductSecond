import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 productdata !:Array<Iproduct>
  constructor(
    private productService:ProductService,
    private routes: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getchdata()
  }

  getchdata(){
    this.productdata = this.productService.productsArr
  }

  trackByfun(index:number,product:Iproduct){
    return product.pid
  }

  Singlaproduct(id : string){
    this.router.navigate(['product',id])
  }

}
