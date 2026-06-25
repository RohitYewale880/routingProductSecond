import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToUsers() {
    this.userService.getusers().subscribe(users => {
      if (users.length) {
        this.router.navigate(['/users', users[0].userId]);
      } else {
        this.router.navigate(['/users']);
      }
    });
  }

}
