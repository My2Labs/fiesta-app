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
  descriptors: string;
  description: string;
  value: number;  
  quantity: number;
};

const fiestaEndpoint = environment.fiestaEndpoint;

@Injectable({
  providedIn: 'root'
})

export class InventoryServiceService {
  fiesta: Fiesta[] = [];
  findAll: any;

  constructor(private http: HttpClient) { }

  fetchFiesta() {
    return this.http.get<FiestaResponse>(`${fiestaEndpoint}/`);
  }
  addFiesta(fiesta: Fiesta) {
    return this.http.post<Fiesta>(`${fiestaEndpoint}/`, fiesta);
  }
  deleteFiesta(fiesta: Fiesta) {
    return this.http.delete(`${fiestaEndpoint}/${fiesta.id}`);
  }
  updateFiesta(fiesta: Fiesta) {
    return this.http.put<FiestaResponse>(
      `${fiestaEndpoint}/${fiesta.id}`,
      fiesta
    );
  }
  search(searchTerm: string) {
    return this.http.get<FiestaResponse>(
      `${fiestaEndpoint}/search?search=${searchTerm}`
    );
  }
}

