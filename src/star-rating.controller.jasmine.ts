    import * as angular from 'angular';
    import 'angular-mocks';
    import * as mocks from 'angular-mocks';

    import {StarRatingController} from "./star-rating.controller";
    import IRootScopeService = angular.IRootScopeService;


    describe('Controller Test', () => {

        let controller: StarRatingController;
        let $rootScope:IRootScopeService;

        beforeEach(angular.mock.module('app'));

        beforeEach(() => {
            angular.mock.inject(function (_starRatingController_, _$rootScope_) {

                $rootScope = _$rootScope_;
                controller =_starRatingController_;
            });

        });

        afterEach(function () {
            $rootScope.$digest();
        });

        it("should initialize correctly", () => {
            expect(controller).toBeDefined();
        });

        it('Should succeed', () => {
            expect(1).toBe(1);
        });

    });

