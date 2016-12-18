import initTpl = require('./init.view.html');
import {InitController} from "./init.controller";
import {InitComponent} from "./init.component";

export const initPage = angular
    .module('init-page', [])
    .component('initPageComp', new InitComponent())
    .config(($stateProvider) => {
        $stateProvider
            .state('init', <ng.ui.IState> {
                    url: '/init',
                    template: '<init-page-comp></init-page-comp>'
                }
            );
    })
    .name;

