import { Component, OnInit } from '@angular/core';
import { items } from '../interfaces';
import { ItemsServiceService } from '../services/itemsService/itemsService.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private http: ItemsServiceService) { }
  items: items[] = []
  paginatedItem: any[] = []

  ngOnInit() {
    debugger
    this.http.get((response: any) => {
      this.items = response;

    })
  }

  addToCar(id: number) {
    debugger
    var arrayOfItems;
    if (sessionStorage.getItem('itemsInCar')) {
      var item = JSON.parse(sessionStorage.getItem('itemsInCar')!)
      
      sessionStorage.setItem('itemsInCar', JSON.stringify(this.items.find(x => x.id == id)?.id))

    } else {
      

      sessionStorage.setItem('itemsInCar', JSON.stringify(this.items.find(x => x.id == id)))

    }
    this.items.splice(this.items.findIndex(x => x.id == id), 1)

  }

}
