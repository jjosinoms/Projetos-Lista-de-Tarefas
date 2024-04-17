"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var criar_tarefa_component_1 = require("./components/criar-tarefa/criar-tarefa.component");
var listar_tarefa_component_1 = require("./components/listar-tarefa/listar-tarefa.component");
var editar_tarefa_component_1 = require("./components/editar-tarefa/editar-tarefa.component");
var rodape_component_1 = require("./components/rodape/rodape.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var redes_sociais_component_1 = require("./components/redes-sociais/redes-sociais.component");
// mapeamento das rotas do projeto
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: listar_tarefa_component_1.ListarTarefaComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                criar_tarefa_component_1.CriarTarefaComponent,
                listar_tarefa_component_1.ListarTarefaComponent,
                editar_tarefa_component_1.EditarTarefaComponent,
                rodape_component_1.RodapeComponent,
                navbar_component_1.NavbarComponent,
                redes_sociais_component_1.RedesSociaisComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot(routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            providers: [
                platform_browser_1.provideClientHydration()
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
