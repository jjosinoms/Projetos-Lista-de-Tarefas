import { Component } from '@angular/core';
import ListaTarefa from '../../Models/ListaTarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  listaTarefas: ListaTarefa[] = [];
  novaTarefa: string;

  salvarTarefa() {
    if (this.novaTarefa) {
      let tarefa = new ListaTarefa;
      tarefa.nome = this.novaTarefa;
      tarefa.isCompleted = true;

      this.listaTarefas.push(tarefa)
      this.novaTarefa = "";

    } else {
      alert("Por favor, digite uma tarefa");
    }
  }

  excluirTarefa(id: number) {
    this.listaTarefas =  this.listaTarefas.filter((e, i) => i !== id);
  }

  tarefaCompleta(id: number) {
    this.listaTarefas[id].isCompleted = !this.listaTarefas[id].isCompleted;
  }

}
