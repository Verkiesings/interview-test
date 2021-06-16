import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/Services/api.service";
import { Hero } from "src/app/Models/hero";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  heros: Hero[];

  getContacts(){
    this.apiService.getContacts()
    .subscribe((data: Hero[]) =>{
      for (const iterator of data) {
        this.heros.push(new Hero(iterator.name, iterator.power, iterator.stats));
      }
    })  ;
  }

}
