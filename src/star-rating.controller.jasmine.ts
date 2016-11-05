    import './index.ts';
    import 'angular';
    import 'angular-mocks';

    import {StarRatingController} from "./star-rating.controller";
    import IRootScopeService = angular.IRootScopeService;

    describe('Controller Test', () => {

        let controller: StarRatingController;
        let $rootScope:IRootScopeService;

       beforeEach(angular.mock.module('star-rating'));

        beforeEach(() => {
            angular.mock.inject(function ($controller, _starRatingCtrl_, _$rootScope_) {

                $rootScope = _$rootScope_;
                controller =_starRatingCtrl_;

                var scope = $rootScope.$new();
                var createController = function() {
                    return $controller('starRatingCtrl', {
                        '$scope': scope
                    });
                };

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