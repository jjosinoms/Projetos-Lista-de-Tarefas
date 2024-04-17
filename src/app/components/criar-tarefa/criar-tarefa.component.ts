import { Component, input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ListarTarefaComponent } from '../listar-tarefa/listar-tarefa.component';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.css'
})
export class CriarTarefaComponent implements OnInit {
  myuuid = uuidv4();

  date = new Date();
  today = this.date.getDate();
  currentMonth = this.date.getMonth() + 1;
  currentYear = this.date.getFullYear();
  diaAtual = this.today + "/" + this.currentMonth + "/" + this.currentYear;

  mensagemAlertaSucesso = false;
  mensagemAlertaErro = false;


  //itensCheckList: any = new Set<JSON>()
  itensCheckList: any = []
  tarefaCompleta: any = []
  tituloTarefa: any;
  idCampoIndividual: any;
  campoCheckList: any;
  meuForm: any;
  mensagemErro: any
  descricao : any

  constructor(
    private HttpClient: HttpClient, //inicializacao automatica
    public listaTarefaComponent: ListarTarefaComponent,
  ) {
  }
  ngOnInit(): void {
   
  }


  onSubmit(): void {

    this.tarefaCompleta.push({
      id: this.idCampoIndividual = uuidv4(),
      titulo: this.tituloTarefa,
      lista: this.itensCheckList,
      data: this.diaAtual,
      descricao : this.descricao

    })

    this.mensagemAlertaSucesso = true;
    localStorage.setItem("lista", JSON.stringify(this.tarefaCompleta));
    this.listaTarefaComponent.mostrarLista();
    localStorage.setItem("tamanhoCheck", this.itensCheckList.length);
   

    this.tituloTarefa = ""
    this.itensCheckList = []
    this.campoCheckList = ""
    this.descricao = ""
    setTimeout(() => {
      this.mensagemAlertaSucesso = false;
    }, 2000);
    this.ngOnInit()
  }

  removerCheckList(item: any) {
    this.itensCheckList.splice(this.itensCheckList.indexOf(item), 1);
  }

  addCheckList() {

    this.itensCheckList.push(this.campoCheckList)
    this.campoCheckList = ""

  }
}