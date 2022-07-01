import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fiesta, InventoryServiceService } from '../../inventory-service.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
})
export class SearchresultsComponent implements OnInit {
  @Input() fiesta: Fiesta[] = [];
  searchTerm = '';
  fiestas: any;
  name = '';

  constructor(
    private route: ActivatedRoute,
    private fiestaService: InventoryServiceService
  ) {}

  ngOnInit() {
    return this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['search'];
      this.fiestaService.search(this.searchTerm).subscribe((response) => {
        console.log(response);
        this.fiesta = response.fiestas;
        return response;
      
      });
    });
  }
}
