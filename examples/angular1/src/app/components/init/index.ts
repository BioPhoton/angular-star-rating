import initTpl = require('./init.view.html');
import {InitController} from "./init.controller";

export const initPage = angular
    .module('init-page', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('init', <ng.ui.IState> {
                    url: '/init',
                    controller: InitController,
                    controllerAs: 'init',
                    templateUrl: initTpl
                }
            );
    })
    .name;

