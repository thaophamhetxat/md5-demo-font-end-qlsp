import {Injectable} from '@angular/core';
import {Person} from "../model/person";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [];

  constructor(private http: HttpClient) {
  }


  getProduct() {
    this.http.get<Person[]>('http://localhost:8080/api/products').subscribe((data) => {
      this.persons = data;
    })
  }


  // getAll(){
  //   return this.persons;
  // }
  //
  // saveProduct(person: Person) {
  //   this.persons.push(person);
  // }
  //
  //
  // findById(id: number | undefined) {
  //   return this.persons.find(person =>
  //     person.id === id
  //   )
  //
  // }
  //
  // updateProduct(id: number | undefined, product: any) {
  //   for (let i = 0; i < this.persons.length; i++) {
  //     if (this.persons[i].id === id) {
  //       this.persons[i] = product;
  //     }
  //   }
  // }
}
