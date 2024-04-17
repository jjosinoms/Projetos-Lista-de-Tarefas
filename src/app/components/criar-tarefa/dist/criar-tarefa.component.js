"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriarTarefaComponent = void 0;
var core_1 = require("@angular/core");
var uuid_1 = require("uuid");
var CriarTarefaComponent = /** @class */ (function () {
    function CriarTarefaComponent(HttpClient, //inicializacao automatica
    listaTarefaComponent) {
        this.HttpClient = HttpClient;
        this.listaTarefaComponent = listaTarefaComponent;
        this.myuuid = uuid_1.v4();
        this.date = new Date();
        this.today = this.date.getDate();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        this.diaAtual = this.today + "/" + this.currentMonth + "/" + this.currentYear;
        this.mensagemAlertaSucesso = false;
        this.mensagemAlertaErro = false;
        //itensCheckList: any = new Set<JSON>()
        this.itensCheckList = [];
        this.tarefaCompleta = [];
    }
    CriarTarefaComponent.prototype.ngOnInit = function () {
    };
    CriarTarefaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.tarefaCompleta.push({
            id: this.idCampoIndividual = uuid_1.v4(),
            titulo: this.tituloTarefa,
            lista: this.itensCheckList,
            data: this.diaAtual
        });
        this.mensagemAlertaSucesso = true;
        localStorage.setItem("lista", JSON.stringify(this.tarefaCompleta));
        this.listaTarefaComponent.mostrarLista();
        localStorage.setItem("tamanhoCheck", this.itensCheckList.length);
        this.tituloTarefa = "";
        this.itensCheckList = [];
        this.campoCheckList = "";
        setTimeout(function () {
            _this.mensagemAlertaSucesso = false;
        }, 1500);
        this.ngOnInit();
    };
    CriarTarefaComponent.prototype.removerCheckList = function (item) {
        this.itensCheckList.splice(this.itensCheckList.indexOf(item), 1);
    };
    CriarTarefaComponent.prototype.addCheckList = function () {
        this.itensCheckList.push(this.campoCheckList);
        this.campoCheckList = "";
    };
    CriarTarefaComponent = __decorate([
        core_1.Component({
            selector: 'app-criar-tarefa',
            templateUrl: './criar-tarefa.component.html',
            styleUrl: './criar-tarefa.component.css'
        })
    ], CriarTarefaComponent);
    return CriarTarefaComponent;
}());
exports.CriarTarefaComponent = CriarTarefaComponent;
