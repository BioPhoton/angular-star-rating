import {SingleController} from "./single.controller";
import singleTpl = require('./single.view.html');


export class SingleComponent implements ng.IComponentOptions {

    public bindings;
    public controller;
    public controllerAs:string;
    public templateUrl: string;
    public replace: boolean;

    constructor() {
        this.templateUrl = singleTpl;
        this.controller = SingleController;
        this.controllerAs = 'single';
        this.replace = true;
    }

}