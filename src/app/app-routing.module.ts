import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produto', component:ProdutoComponent},
  {path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
