export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVINGPIZZA;
          aReturn.push("Welcome to Eddies Pizzaria. Our menu today is pepperoni, veggie, or canadian pizza. What kind of pizza would you like?");
          return aReturn;
        },
        RESERVINGPIZZA: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SELECTINGSIZE;
          if (sInput.toLowerCase().startsWith('c')) {
            aReturn.push(`Canadian pizza! Excellent choice. What size do you want that (small, medium, large)?`);
          } else if (sInput.toLowerCase().startsWith('p')) {
            aReturn.push(`Pepperoni pizza! Excellent choice. What size do you want that (small, medium, large)?`);
          } else if (sInput.toLowerCase().startsWith('v')) {
            aReturn.push(`Veggie pizza! Excellent choice. What size do you want that (small, medium, large)?`);
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        },
        SELECTINGSIZE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.SELECTCRUST;
          if (sInput.toLowerCase().startsWith('s')) {
            aReturn.push(`Small. Would you like normal or thin crust?`);
          } else if (sInput.toLowerCase().startsWith('m')){
            aReturn.push('Medium. Would you like normal or thin crust?');
          } else if (sInput.toLowerCase().startsWith('l')){
            aReturn.push('Large. Would you like normal or thin crust?');
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        },
        SELECTCRUST: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.ADDINGWINGS;
          if (sInput.toLowerCase().startsWith('n')) {
            aReturn.push(`Normal crust! Would you like to add our signature spicy BQQ wings for an extra $4.99??`);
          } else if (sInput.toLowerCase().startsWith('t')){
            aReturn.push('Thin crust! Would you like to add our signature spicy BQQ wings for an extra $4.99??');
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        },
        ADDINGWINGS: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push(`Wings were added to your order! Your order has been placed! That you for ordering from Eddies Pizzaria, we hope you enjoy.`);
          } else if (sInput.toLowerCase().startsWith('n')){
            aReturn.push('No wings were added to your order. Your order has been placed! That you for ordering from Eddies Pizzaria, we hope you enjoy.');
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        },
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }