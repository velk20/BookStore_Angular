import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CrudService} from "../../service/crud.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private ngZone:NgZone,
              private crudApi:CrudService) {
    this.userForm = this.formBuilder.group({
      username:[''],
      password:[''],
      email:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.crudApi.registerUser(this.userForm.value)
      .subscribe((res:any)=>{
        console.log(`User register successful`);
        this.ngZone.run(()=>{
          this.router.navigateByUrl('/book-list')
        },(err:any)=>{
          console.log(err);
        })
      })
  }

}
