import { Component, OnInit } from '@angular/core';
import {Person} from "../../model/person";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../service/person.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  persons:Person[]=[];

  personForm: FormGroup = new FormGroup({
    id: new FormControl(),
    idCode: new FormControl(),
    name: new FormControl('',Validators.minLength(6)),
    address : new FormControl('',Validators.required),
    gmail : new FormControl(),
    phone: new FormControl()
  })
  constructor(private personService:PersonService,
              private router: Router,
              private http :HttpClient) { }

  ngOnInit(): void {

  }
  submit() {
    this.http.post<Person>('http://localhost:8080/api/products/', this.personForm.value).subscribe((data) => {
      alert("create thành công - " + data.name)
      this.router.navigate(['/person/list']);
    })
  }
}
