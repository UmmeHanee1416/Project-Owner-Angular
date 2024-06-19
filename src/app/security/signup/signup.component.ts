import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private userService: UserServiceService, private router: Router) { }

  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  onsubmit() {
    console.log(this.userForm.value);
    this.userService.addData(this.userForm.value).subscribe((val: any) => {
      this.router.navigateByUrl("/login");
    })
  }
}
