import {InitController} from "./init.controller";
import initTpl = require('./init.view.html');

export class InitComponent implements ng.IComponentOptions {

    public bindings;
    public controller;
    public controllerAs:string;
    public templateUrl: string;
    public replace: boolean;

    constructor() {
        this.templateUrl = initTpl;
        this.controller = InitController;
        this.controllerAs = 'init';
        this.replace = true;
    }

}