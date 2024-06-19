import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  project!: any

  projectForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    intro: new FormControl(''),
    owner: new FormControl(''),
    ownerName: new FormControl(''),
    status: new FormControl(''),
    startDateTime: new FormControl(''),
    endDateTime: new FormControl(''),
    members: new FormControl(),
    memberNames: new FormControl(''),
  });
  onsubmit() {
    this.projectService.addData(this.projectForm.value).subscribe((val: any) => {
      this.router.navigateByUrl("/listProject");
    });
  }

  constructor(private userService: UserServiceService, private projectService: ProjectServiceService, private router: Router, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id);
    this.getAllUsers();
  }

  id: any;

  getByID(id: any) {
    this.projectService.getById(id).subscribe((val: any) => {
      this.project = val;
      console.log(this.project);
      this.projectForm.value.members = this.project.members
      this.projectForm.patchValue(this.project);
    })
  }

  userList: User[] = [];

  getAllUsers() {
    this.userService.getData().subscribe((res: any) => {
      this.userList = res;
    });
  }
}
