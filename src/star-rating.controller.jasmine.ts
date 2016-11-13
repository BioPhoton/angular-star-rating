import angular = require('angular');
import ngMock = require('angular-mocks');


import IRootScopeService = angular.IRootScopeService;

import './index.ts';
import IComponentController = angular.IComponentController;
import {StarRatingController, IStarRatingCompBindings, starRatingColors} from "./star-rating.controller";

describe('Controller Test', () => {

    let $componentController;
    let starRatingCtrl;
    let scope;

    let negativeValue: number = -1;

    let negativeColor: starRatingColors = "negative";
    let okColor: starRatingColors = "middle";
    let positiveColor: starRatingColors = "positive";

    beforeEach(angular.mock.module('star-rating'));

    beforeEach(inject(($rootScope, _$componentController_) => {
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it('should expose a `starRatingComp` object', () => {
        starRatingCtrl = getStarRatingCtrl();

        expect(starRatingCtrl).toBeDefined();
        expect(typeof starRatingCtrl.calculateColor).toBe('function');
    });

    it('should contain proper default values if no bindings are set', () => {
        starRatingCtrl = getStarRatingCtrl();

        //bindings
        //@
        expect(starRatingCtrl.id).toBe(undefined);
        //<
        expect(starRatingCtrl.text).toBe(undefined);
        expect(typeof starRatingCtrl.color).toBe("string");
        expect(starRatingCtrl.color).toBe(starRatingCtrl.calculateColor(starRatingCtrl.rating, starRatingCtrl.numOfStars));
        expect(starRatingCtrl.labelPosition).toBe(undefined);
        expect(starRatingCtrl.speed).toBe(undefined);
        expect(starRatingCtrl.size).toBe(undefined);
        expect(starRatingCtrl.starType).toBe(undefined);
        expect(starRatingCtrl.spread).toBe(undefined);
        expect(starRatingCtrl.readOnly).toBe(undefined);
        expect(starRatingCtrl.disabled).toBe(undefined);
        expect(starRatingCtrl.rating).toBe(undefined);
        expect(starRatingCtrl.numOfStars).toBe(StarRatingController.DefaultNumOfStars);
        //&
        expect(typeof starRatingCtrl.getColor).toBe("function");
        expect(typeof starRatingCtrl.onUpdate).toBe("function");
        expect(typeof starRatingCtrl.onClick).toBe("function");

        //ctrl only
        expect(starRatingCtrl.classEmpty).toBe(StarRatingController.DefaultClassEmpty);
        expect(starRatingCtrl.classFilled).toBe(StarRatingController.DefaultClassFilled);
        expect(starRatingCtrl.pathEmpty).toBe(StarRatingController.DefaultSvgPathEmpty);
        expect(starRatingCtrl.pathFilled).toBe(StarRatingController.DefaultSvgPathFilled);
        expect(typeof starRatingCtrl.stars).toBe("object");
        expect(starRatingCtrl.stars.length).toBe(StarRatingController.DefaultNumOfStars);
        expect(starRatingCtrl.stars[0]).toBe(1);
        expect(starRatingCtrl.staticColor).toBe(undefined);
    });

    it('should set custom bindings properly', () => {
        let bindings = <IStarRatingCompBindings>{
            //@
            id: 'custom-id'
            //<
            , text: 'custom-text'
            , color: 'positive'
            , labelPosition: 'right'
            , speed: 'immediately'
            , size: 'small'
            , starType: 'icon'
            , spread: true
            , readOnly: true
            , disabled: true
            , rating: 3
            , numOfStars: 8
            //&
            , getColor: function () {
                return this.color
            }
            , onClick: function () {
                return 'onClick'
            }
            , onUpdate: function () {
                return 'onUpdate'
            }
        };

        starRatingCtrl = getStarRatingCtrl(bindings);

        expect(starRatingCtrl.id).toBe(bindings.id);
        expect(starRatingCtrl.text).toBe(bindings.text);
        expect(starRatingCtrl.color).toBe(bindings.color);
        expect(starRatingCtrl.labelPosition).toBe(bindings.labelPosition);
        expect(starRatingCtrl.speed).toBe(bindings.speed);
        expect(starRatingCtrl.size).toBe(bindings.size);
        expect(starRatingCtrl.starType).toBe(bindings.starType);
        expect(starRatingCtrl.spread).toBe(bindings.spread);
        expect(starRatingCtrl.readOnly).toBe(bindings.readOnly);
        expect(starRatingCtrl.disabled).toBe(bindings.disabled);
        expect(starRatingCtrl.rating).toBe(bindings.rating);
        expect(starRatingCtrl.getColor()).toBe(bindings.getColor());
        expect(starRatingCtrl.onClick()).toBe(bindings.onClick());
        expect(starRatingCtrl.onUpdate()).toBe(bindings.onUpdate());
    });

    it("should return proper values when firing calculateColor function", () => {

        let lowRating = 1;
        let okRating = 6;
        let highRating = 15;

        let testValues = {};
        testValues[negativeValue] = negativeColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;

        let bindings = <IStarRatingCompBindings>{
            numOfStars: highRating
        };

        //default return values
        for (let value in testValues) {
            bindings.rating = parseInt(value);
            starRatingCtrl = getStarRatingCtrl(bindings);
            expect(starRatingCtrl.calculateColor(starRatingCtrl.rating, starRatingCtrl.numOfStars, starRatingCtrl.color)).toBe(testValues[value]);
        }

        //return values when staticColor is given
        let staticColor = testValues[negativeValue];
        bindings.color = staticColor;
        for (let value in testValues) {
            bindings.rating = parseInt(value);
            starRatingCtrl = getStarRatingCtrl(bindings);
            expect(starRatingCtrl.calculateColor(starRatingCtrl.rating, starRatingCtrl.numOfStars, staticColor)).toBe(staticColor);
        }

    });

    it("should return proper values when firing updateNumOfStars function", () => {

        let lowNumOfStars = 1;
        let defaultNumOfStars = 6;
        let highNumOfStars = 15;

        let testValues = {};
        testValues[negativeValue] = okColor;
        testValues[lowNumOfStars] = positiveColor;
        testValues[defaultNumOfStars] = okColor;
        testValues[highNumOfStars] = negativeColor;

        let bindings = <IStarRatingCompBindings>{
            rating: 3
        };

        for (let numOfStars in testValues) {
            bindings.numOfStars = parseInt(numOfStars);
            starRatingCtrl = getStarRatingCtrl(bindings);
            starRatingCtrl.updateNumOfStars(starRatingCtrl.numOfStars);

            //@TODO spy on StarRatingController.getStarsArray
            let expectedNumOfStars = (numOfStars && parseInt(numOfStars) > 0)?parseInt(numOfStars):StarRatingController.DefaultNumOfStars;
            expect(starRatingCtrl.numOfStars).toBe(expectedNumOfStars);
            //@TODO spy on getColor
            expect(starRatingCtrl.color).toBe(testValues[numOfStars]);
            expect(typeof starRatingCtrl.stars).toBe("object");
            expect(starRatingCtrl.stars.length).toBe(parseInt(starRatingCtrl.numOfStars));
            expect(starRatingCtrl.stars[0]).toBe(1);
        }
    });

    it("should return proper values when firing updateRating function", () => {

        let lowRating = 1;
        let okRating = 3;
        let highRating = 5;

        let testValues = {};
        testValues[negativeValue] = negativeColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;

        let newRatingValue;
        let bindings:IStarRatingCompBindings = {
            onUpdate : onUpdate
        };

        starRatingCtrl = getStarRatingCtrl(bindings);

        for (let rating in testValues) {
            starRatingCtrl.updateRating(rating);

            expect(starRatingCtrl.rating).toBe(rating);
            expect(newRatingValue).toBe(starRatingCtrl.rating);
            //@TODO spy on getColor
            expect(starRatingCtrl.color).toBe(testValues[rating]);
            //@TODO spy on onUpdate
        }

        function onUpdate(updateObject) {
            newRatingValue = updateObject.rating;
        }

    });

    it("should return proper values when firing onStarClicked function", () => {

        let lowRating = 1;
        let okRating = 3;
        let highRating = 5;

        let testValues = {};
        testValues[negativeValue] = negativeColor;
        testValues[lowRating] = negativeColor;
        testValues[okRating] = okColor;
        testValues[highRating] = positiveColor;

        starRatingCtrl = getStarRatingCtrl();

        //default values
        for (let rating in testValues) {
            starRatingCtrl.onStarClicked(rating);

            expect(starRatingCtrl.rating).toBe(rating);
            //@TODO spy on updateRating
            expect(starRatingCtrl.color).toBe(testValues[rating]);
            //@TODO spy on onClick
        }

        //@TODO custom onClick function

        //@TODO with readOnly

        //@TODO with disabled
    });

    //@TODO implement test
    //it("should return proper values when firing $onChange function", () => {});

    /**
     * getStarRatingCtrl
     *
     * A factory for StarRatingController
     *
     * @param bindingsProperties
     * @returns {*}
     */
    function getStarRatingCtrl(bindingsProperties?: IStarRatingCompBindings): any {
        bindingsProperties = bindingsProperties || <IStarRatingCompBindings>{};

        return $componentController('starRatingComp', null, bindingsProperties);
    }

});