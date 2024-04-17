"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TarefasComponent = void 0;
var core_1 = require("@angular/core");
var ListaTarefa_1 = require("../../Models/ListaTarefa");
var TarefasComponent = /** @class */ (function () {
    function TarefasComponent() {
        this.listaTarefas = [];
    }
    TarefasComponent.prototype.salvarTarefa = function () {
        if (this.novaTarefa) {
            var tarefa = new ListaTarefa_1["default"];
            tarefa.nome = this.novaTarefa;
            tarefa.isCompleted = true;
            this.listaTarefas.push(tarefa);
            this.novaTarefa = "";
        }
        else {
            alert("Por favor, digite uma tarefa");
        }
    };
    TarefasComponent.prototype.excluirTarefa = function (id) {
        this.listaTarefas = this.listaTarefas.filter(function (e, i) { return i !== id; });
    };
    TarefasComponent.prototype.tarefaCompleta = function (id) {
        this.listaTarefas[id].isCompleted = !this.listaTarefas[id].isCompleted;
    };
    TarefasComponent = __decorate([
        core_1.Component({
            selector: 'app-tarefas',
            templateUrl: './tarefas.component.html',
            styleUrl: './tarefas.component.css'
        })
    ], TarefasComponent);
    return TarefasComponent;
}());
exports.TarefasComponent = TarefasComponent;
