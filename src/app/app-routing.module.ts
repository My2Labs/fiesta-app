import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../app/components/main-page/main-page.component';
import { InventoryInputComponent } from '../app/components/inventory-input/inventory-input.component';
import { InventoryRemoveComponent } from '../app/components/inventory-remove/inventory-remove.component';
import { SearchresultsComponent } from '../app/components/searchresults/searchresults.component';
import { NavigationComponent } from '../app/components/navigation/navigation.component';


const routes: Routes = [

  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'Inventory',
    component: MainPageComponent,
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
