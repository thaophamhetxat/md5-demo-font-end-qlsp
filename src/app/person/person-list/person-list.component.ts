import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../service/person.service";
import {Person} from "../../model/person";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService,
              private http : HttpClient) {
  }

  ngOnInit(): void {
   this.getProduct();
  }

  deleteProduct(id: any) {
    this.http.delete(`http://localhost:8080/api/products/${id}`).subscribe((data) => {
      alert("xóa thành công");
      this.getProduct();
    })
  }

  getProduct() {
    this.http.get<Person[]>('http://localhost:8080/api/products/').subscribe((data) => {
      this.persons = data;
    })
  }


}
