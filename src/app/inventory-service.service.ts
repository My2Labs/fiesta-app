import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

type FiestaResponse = {
  fiestas: Fiesta[];
  fiesta: Fiesta[];
};

export type Fiesta = {
  id: number;
  name: string;
  color: string;
  type: string;
  description: string;
  value: number;  
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})

export class InventoryServiceService {
  fiesta: Fiesta[] = [];
  findAll: any;

  constructor(private http: HttpClient) { }

  fetchFiesta() {
    return this.http.get<FiestaResponse>(`${environment.fiestaEndpoint}/`);
  }
  addFiesta(fiesta: Fiesta) {
    return this.http.post<Fiesta>(`${environment.fiestaEndpoint}/`, fiesta);
  }
  deleteFiesta(fiesta: Fiesta) {
    return this.http.delete(`${environment.fiestaEndpoint}/${fiesta.id}`);
  }
  updateFiesta(fiesta: Fiesta) {
    return this.http.put<FiestaResponse>(
      `${environment.fiestaEndpoint}/${fiesta.id}`,
      fiesta
    );
  }
  search(searchTerm: string) {
    return this.http.get<FiestaResponse>(
      `${environment.fiestaEndpoint}/search?search=${searchTerm}`
    );
  }
}

