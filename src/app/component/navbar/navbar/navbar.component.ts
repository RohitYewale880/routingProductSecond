import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FairsService } from 'src/app/services/fairs.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private productservice : ProductService,
    private fairservice : FairsService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToUsers() {
    this.userService.getusers().subscribe(users => {
      if (users.length) {
        this.router.navigate(['/users', users[0].userId], {
          queryParams: {
            userRole: users[0].userRole
          }
        });
      }
    });
  }

  goToProduct(){
    this.productservice.getProducts()
      .subscribe(res => {
        if(res.length > 0){
          this.router.navigate(['/product', res[0].pid])
        }
      })
  }

  goToFairs(){
    this.fairservice.getfairsArr()
      .subscribe(res => {
        if(res.length > 0){
          this.router.navigate(['/fairs', res[0].fairId])
        }
      })
  }
}
