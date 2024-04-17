import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ListarTarefaComponent } from '../listar-tarefa/listar-tarefa.component';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css'
})
export class EditarTarefaComponent implements OnInit {
  myuuid = uuidv4();
  date = new Date();
  today = this.date.getDate();
  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  diaAtual = this.today + "/" + this.currentMonth + "/" + this.currentYear;
  listaTarefas: any;
  mensagemAlertaSucesso = false;
  mensagemAlertaErro = false;
  dadosParaEditar : any;
  listaAntiga : any;
  novaLista: any = new Set<JSON>();
  tarefas: any = [];

  constructor(
    private HttpClient: HttpClient, //inicializacao automatica

  ) {
  }

ngOnInit(): void {
  this.dadosParaEditar = JSON.parse(localStorage.getItem("item-lista-edicao") as string);
  
  console.log("item para ser editado:" ,this.dadosParaEditar)
  this.dadosParaEditar

  

}

  // objeto para capturar o formulário
  formEditarTarefa = new FormGroup({
    tarefa: new FormControl('',
      [Validators.required,]),

  })


  // onjeto para executar as validações
  get form(): any {
    return this.formEditarTarefa.controls;

  }

  // funcao para capturar um SUBMIT do formulario
  onSubmit(): void {

    try {
      var dados = JSON.parse(localStorage.getItem("lista") as string);
      this.tarefas.push(dados)
      this.tarefas.push(this.formEditarTarefa.value)
      for (let i = 0; i < this.tarefas.length; i++) {
        //console.log("tarefas: ", this.tarefas[i][0])
        this.novaLista.add(this.tarefas[i][0])
      }
      this.ngOnInit();

      this.mensagemAlertaSucesso = true;
      this.formEditarTarefa.reset();
      setTimeout(() => {
        this.mensagemAlertaSucesso = false;
      }, 1500);


    } catch (e) {

      console.log("Falha ao tentar cadastrar tarefa", e)
    }


  }
}