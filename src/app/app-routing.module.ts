import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaperfilComponent } from './paginaperfil/paginaperfil.component';
import { AppComponent } from './app.component';


const routes: Routes = [

      {
        path: 'perfil',    component: PaginaperfilComponent  
      }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
