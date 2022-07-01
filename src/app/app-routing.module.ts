import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../app/components/main-page/main-page.component';
import { InventoryListComponent } from '../app/components/inventory-list/inventory-list.component';
import { InventoryInputComponent } from '../app/components/inventory-input/inventory-input.component';
import { InventoryRemoveComponent } from '../app/components/inventory-remove/inventory-remove.component';
import { SearchresultsComponent } from '../app/components/searchresults/searchresults.component';



const routes: Routes = [
  {
    path: 'Main',
    component: MainPageComponent,
  },
  {
    path: 'List',
    component: InventoryListComponent,
  },
  {
    path: 'Input',
    component: InventoryInputComponent,
  },
  {
    path: 'Remove',
    component: InventoryRemoveComponent,
  },
  {
    path: 'Results',
    component: SearchresultsComponent,
  },
  // { path: 'create', component: ErrorpageComponent },
  // { path: 'edit/:postID', component: ErrorpageComponent },


  // {
  //   path: '**',
  //   component: ErrorpageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
