import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InventoryInputComponent } from './components/inventory-input/inventory-input.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryRemoveComponent } from './components/inventory-remove/inventory-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InventoryInputComponent,
    InventoryListComponent,
    InventoryComponent,
    InventoryRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
