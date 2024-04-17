"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListarTarefaComponent = void 0;
var core_1 = require("@angular/core");
var ListarTarefaComponent = /** @class */ (function () {
    // construtor para injecao de dependencia
    function ListarTarefaComponent(HttpClient) {
        this.HttpClient = HttpClient;
        this.tarefas = [];
        this.novaLista = new Set();
        this.editarPost = false;
        this.criarPost = true;
        this.listaSoParaTeste = new Set();
    }
    ListarTarefaComponent.prototype.ngOnInit = function () {
        this.novaLista;
    };
    ListarTarefaComponent.prototype.mostrarLista = function () {
        var dados = JSON.parse(localStorage.getItem("lista"));
        this.tarefas.push(dados);
        var qnt = JSON.parse(localStorage.getItem("tamanhoCheck"));
        this.quantidadeCheckList = Number(qnt);
        for (var i = 0; i < this.quantidadeCheckList; i++) {
            this.listaSoParaTeste.add({ numeroTeste: i });
        }
        for (var i = 0; i < this.tarefas.length; i++) {
            console.log("tarefas: ", this.tarefas[i][0]);
            this.novaLista.add(this.tarefas[i][0]);
        }
        this.ngOnInit();
    };
    ListarTarefaComponent.prototype.excluirTarefa = function (data) {
        if (window.confirm("Deseja excluir essa tarefa?")) {
            this.novaLista["delete"](data);
        }
    };
    ListarTarefaComponent.prototype.editarTarefa = function (data) {
        localStorage.setItem("item-lista-edicao", JSON.stringify(data));
        this.editarPost = true;
        this.criarPost = false;
    };
    ListarTarefaComponent.prototype.cancelarEditar = function () {
        this.editarPost = false;
        this.criarPost = true;
    };
    ListarTarefaComponent = __decorate([
        core_1.Component({
            selector: 'app-listar-tarefa',
            templateUrl: './listar-tarefa.component.html',
            styleUrl: './listar-tarefa.component.css'
        })
    ], ListarTarefaComponent);
    return ListarTarefaComponent;
}());
exports.ListarTarefaComponent = ListarTarefaComponent;
