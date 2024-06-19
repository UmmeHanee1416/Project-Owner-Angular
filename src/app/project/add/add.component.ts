import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private userService: UserServiceService, private projectService: ProjectServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.loggedIn();
    this.getAllUsers();
  }

  projectForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    intro: new FormControl(''),
    owner: new FormControl(''),
    status: new FormControl(''),
    startDateTime: new FormControl(''),
    endDateTime: new FormControl(''),
    members: new FormControl(''),
  });

  onsubmit() {
    this.projectService.addData(this.projectForm.value).subscribe((val: any) => {
      this.router.navigateByUrl("/listProject");
    });
  }

  userList: User[] = [];

  getAllUsers() {
    this.userService.getData().subscribe((res: any) => {
      this.userList = res;
    });
  }
}