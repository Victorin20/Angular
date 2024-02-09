import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './user/add/add.component';
import { IndexComponent } from './user/index/index.component';
import { EditComponent } from './user/edit/edit.component';

export const routes: Routes = [
    {path:'add', component:AddComponent},
    {path:'', component:IndexComponent},
    {path: 'edit', component:EditComponent}
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


