import { EditarTarefaComponent } from './../editar-tarefa/editar-tarefa.component';
import { Component, OnInit } from '@angular/core';
import { CriarTarefaComponent } from '../criar-tarefa/criar-tarefa.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css'
})
export class ListarTarefaComponent implements OnInit {

  tarefas: any = [];
  novaLista: any = new Set<JSON>();
  editarPost = false
  criarPost = true
  quantidadeCheckList: any;
  listaSoParaTeste: any = new Set<JSON>();

  // construtor para injecao de dependencia
  constructor(
    private HttpClient: HttpClient, //inicializacao automatica
  ) {
  }

  ngOnInit() {

    this.novaLista
  }

  mostrarLista() {
    var dados = JSON.parse(localStorage.getItem("lista") as string);
    this.tarefas.push(dados)
    var qnt = JSON.parse(localStorage.getItem("tamanhoCheck") as string);
    this.quantidadeCheckList = Number(qnt)
    for(let i = 0; i < this.quantidadeCheckList; i++) {
      this.listaSoParaTeste.add({numeroTeste:i})
    }
    for (let i = 0; i < this.tarefas.length; i++) {
      console.log("tarefas: ", this.tarefas[i][0])
      this.novaLista.add(this.tarefas[i][0])
    }

    this.ngOnInit();
  }

  excluirTarefa(data: any) {
    if (window.confirm("Deseja excluir essa tarefa?")) {
      this.novaLista.delete(data)
    }
  }

  editarTarefa(data: any) {
    localStorage.setItem("item-lista-edicao", JSON.stringify(data));

    this.editarPost = true
    this.criarPost = false
  }

  cancelarEditar() {
    this.editarPost = false
    this.criarPost = true
  }

}

