import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { instructor } from '../../models/instructor.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
id!:number
user!:any
loggedIn:any;

constructor(private userService: UserService,private activeroute:Router) {
}
ngOnInit(): void {

 { this.userService.isUserLoggedIn().subscribe(
   ( status) => {this.loggedIn = status
    console.log('isLogged', this.loggedIn);
   this.userService.userlogin().subscribe(res=>this.user=res)
  }

  );}


}


logout(): void {
  this.userService.logout();
  //this.activeroute.navigate(['/login'])
}
 myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
 }



  // ========== Navbar Toggle
 open = false;
//  fade = false;
 toggle = false;

 toggleClass() {
   this.open = !this.open;
  //  this.fade = !this.fade;
   this.toggle = !this.toggle;
 }

}

