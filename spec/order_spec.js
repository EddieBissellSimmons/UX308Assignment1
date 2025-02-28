import { Order } from '../Order.js';

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Eddie's Pizzaria. Our menu today is pepperoni, veggie, or canadian pizza. What kind of pizza would you like?");
    });
    it("test yes", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("pepperoni");
        expect(aResults[0]).toBe("Pepperoni pizza! Excellent choice. Would you like to add wings to that?");
    });
    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("veggie");
        expect(aResults[0]).toBe("Veggie pizza! Excellent choice. Would you like to add wings to that?");
    });
    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("canadian");
        expect(aResults[0]).toBe("Canadian pizza! Excellent choice. Would you like to add wings to that?");
    });
    it("test yes", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("pepperoni");
        expect(aResults[0]).toBe("Pepperoni pizza! Excellent choice. Would you like to add wings to that?");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Wings!");
    });