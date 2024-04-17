"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarTarefaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var uuid_1 = require("uuid");
var EditarTarefaComponent = /** @class */ (function () {
    function EditarTarefaComponent(HttpClient) {
        this.HttpClient = HttpClient;
        this.myuuid = uuid_1.v4();
        this.date = new Date();
        this.today = this.date.getDate();
        this.currentMonth = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        this.diaAtual = this.today + "/" + this.currentMonth + "/" + this.currentYear;
        this.mensagemAlertaSucesso = false;
        this.mensagemAlertaErro = false;
        this.novaLista = new Set();
        this.tarefas = [];
        // objeto para capturar o formulário
        this.formEditarTarefa = new forms_1.FormGroup({
            tarefa: new forms_1.FormControl('', [forms_1.Validators.required,])
        });
    }
    EditarTarefaComponent.prototype.ngOnInit = function () {
        this.dadosParaEditar = JSON.parse(localStorage.getItem("item-lista-edicao"));
        console.log("item para ser editado:", this.dadosParaEditar);
        this.dadosParaEditar;
    };
    Object.defineProperty(EditarTarefaComponent.prototype, "form", {
        // onjeto para executar as validações
        get: function () {
            return this.formEditarTarefa.controls;
        },
        enumerable: false,
        configurable: true
    });
    // funcao para capturar um SUBMIT do formulario
    EditarTarefaComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            var dados = JSON.parse(localStorage.getItem("lista"));
            this.tarefas.push(dados);
            this.tarefas.push(this.formEditarTarefa.value);
            for (var i = 0; i < this.tarefas.length; i++) {
                //console.log("tarefas: ", this.tarefas[i][0])
                this.novaLista.add(this.tarefas[i][0]);
            }
            this.ngOnInit();
            this.mensagemAlertaSucesso = true;
            this.formEditarTarefa.reset();
            setTimeout(function () {
                _this.mensagemAlertaSucesso = false;
            }, 1500);
        }
        catch (e) {
            console.log("Falha ao tentar cadastrar tarefa", e);
        }
    };
    EditarTarefaComponent = __decorate([
        core_1.Component({
            selector: 'app-editar-tarefa',
            templateUrl: './editar-tarefa.component.html',
            styleUrl: './editar-tarefa.component.css'
        })
    ], EditarTarefaComponent);
    return EditarTarefaComponent;
}());
exports.EditarTarefaComponent = EditarTarefaComponent;
