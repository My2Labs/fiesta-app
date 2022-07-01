import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InventoryInputComponent } from './components/inventory-input/inventory-input.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryRemoveComponent } from './components/inventory-remove/inventory-remove.component';
import { InventoryServiceService } from './inventory-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InventoryInputComponent,
    InventoryListComponent,
    InventoryComponent,
    InventoryRemoveComponent,
    NavigationComponent,
    SearchComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [InventoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



