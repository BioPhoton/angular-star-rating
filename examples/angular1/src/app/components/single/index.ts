import singleTpl = require('./single.view.html');
import {SingleComponent} from "./single.component";

export const singlePage = angular
    .module('single-page', [])
    .component('singlePageComp', new SingleComponent())
    .config(($stateProvider) => {
        $stateProvider
            .state('single', <ng.ui.IState> {
                    url: '/single',
                    template: '<single-page-comp></single-page-comp>'
                }
            );
    })
    .name;
