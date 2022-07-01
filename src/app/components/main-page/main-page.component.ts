import { Component, Input, OnInit } from '@angular/core';
import { Fiesta, InventoryServiceService } from '../../inventory-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() fiesta: Fiesta[] = [];

  postFiesta: string[] = [];
  fiestas: any;
  name = '';

    post() {
    this.postFiesta.push(this.fiestas);
  }

  constructor(
    private inventoryService: InventoryServiceService,
    private router: Router
  ) { }

  ngOnInit() {

   this.inventoryService.fetchFiesta().subscribe((theresponse: any) => {
      console.log(theresponse.fiestas);
      this.fiesta = theresponse.fiestas;
      return theresponse;
    });
  }
}




