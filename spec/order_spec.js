import { Order } from '../Order.js';

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Eddies Pizzaria. Our menu today is pepperoni, veggie, or canadian pizza. What kind of pizza would you like?");
    });
    it("test pepperoni", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("pepperoni");
        expect(aResults[0]).toBe("Pepperoni pizza! Excellent choice. What size do you want that (small, medium, large)?");
    });
    it("test veggie", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("veggie");
        expect(aResults[0]).toBe("Veggie pizza! Excellent choice. What size do you want that (small, medium, large)?");
    });
    it("test canadian", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("canadian");
        expect(aResults[0]).toBe("Canadian pizza! Excellent choice. What size do you want that (small, medium, large)?");
    });
    it("test small", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("small");
        expect(aResults[0]).toBe("Small. Would you like normal or thin crust?");
    });
    it("test medium", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("medium");
        expect(aResults[0]).toBe("Medium. Would you like normal or thin crust?");
    });
    it("test small", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("small");
        expect(aResults[0]).toBe("Small. Would you like normal or thin crust?");
    });
    it("test large", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("large");
        expect(aResults[0]).toBe("Large. Would you like normal or thin crust?");
    });
    it("test normal crust", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("normal");
        expect(aResults[0]).toBe("Normal crust! Would you like to add our signature spicy BQQ wings for an extra $4.99??");
    });
    it("test thin crust", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("thin");
        expect(aResults[0]).toBe("Thin crust! Would you like to add our signature spicy BQQ wings for an extra $4.99??");
    });
    it("test wing true", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Wings were added to your order! Your order has been placed! That you for ordering from Eddies Pizzaria, we hope you enjoy.");
    });
    it("test wing false", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("No wings were added to your order. Your order has been placed! That you for ordering from Eddies Pizzaria, we hope you enjoy.");
    });
    });