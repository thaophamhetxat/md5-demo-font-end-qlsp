import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PersonService} from "../../service/person.service";
import {HttpClient} from "@angular/common/http";
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  personForm!: FormGroup;
  id!: number;


  constructor(private personService: PersonService,
              private activatedRoute: ActivatedRoute,
              private http :HttpClient,
              private router :Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      this.getProduct(this.id);
    });
  }

  ngOnInit() {

  }

  getProduct(id: number) {
    this.http.get<Person>(`http://localhost:8080/api/products/${id}`).subscribe((data) => {
      this.personForm = new FormGroup({
        name: new FormControl(data.name),
        id: new FormControl(data.id),
        idCode: new FormControl(data.idCode),
        gmail: new FormControl(data.gmail),
        phone: new FormControl(data.phone),
        address: new FormControl(data.address),
      });
    })
  }

  saveProduct() {
    this.http.post<Person>('http://localhost:8080/api/products/', this.personForm.value).subscribe((data) => {
      alert("create thành công - " + data.name)
      this.router.navigate(['/person/list']);
    })
  }


}
