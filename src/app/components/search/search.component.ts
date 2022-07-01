import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router) {}

  searchFiesta({ searchTerm }: { searchTerm: string }) {
    console.log(searchTerm);
    this.router.navigate(['/Results'], { queryParams: { search: searchTerm } });
  }
}
