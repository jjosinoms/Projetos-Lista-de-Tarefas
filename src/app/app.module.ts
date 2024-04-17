import { UUID } from 'crypto';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CriarTarefaComponent } from './components/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './components/listar-tarefa/listar-tarefa.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';


// mapeamento das rotas do projeto
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: ListarTarefaComponent},
   
]
@NgModule({
  declarations: [
    AppComponent,
    CriarTarefaComponent,
    ListarTarefaComponent,
    EditarTarefaComponent,
    RodapeComponent,
    NavbarComponent,
    RedesSociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
