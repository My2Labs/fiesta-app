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
  values: any;
  name = '';
  filteredProducts: any[] = [];

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

    

  

    // this.inventoryService.fetchFiesta().subscribe((response: any) => {
    //   let sum = 0;
    //   let vallen = response.fiestas.value;
    //   let quanlen = response.fiestas.quantity;
    //   this.values = sum += (vallen * quanlen);
    //   console.log(response.values);
    //   return response;
    // });
  }

  getTotal() {
		var total = 0;
		for(var i = 0; i < this.fiesta.length; i++) {
			var product = this.fiesta[i];
			total += (product.value * product.quantity);
		}
		return total;
	}
}




