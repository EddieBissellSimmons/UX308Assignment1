export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVINGPIZZA;
          aReturn.push("Welcome to Eddie's Pizzaria. Our menu today is pepperoni, veggie, or canadian pizza. What kind of pizza would you like?");
          return aReturn;
        },
        RESERVINGPIZZA: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.ORDERINGSIDE;
          if (sInput.toLowerCase().startsWith('c')) {
            aReturn.push(`Canadian pizza! Excellent choice. Would you like to add wings to that?`);
          } else if (sInput.toLowerCase().startsWith('p')) {
            aReturn.push(`Pepperoni pizza! Excellent choice. Would you like to add wings to that?`);
          } else if (sInput.toLowerCase().startsWith('v')) {
            aReturn.push(`Veggie pizza! Excellent choice. Would you like to add wings to that?`);
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        },
        ORDERINGSIDE: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push(`Wings!`);
          } else if (sInput.toLowerCase().startsWith('n')){
            aReturn.push('Ok. Would you like anything else?');
          } else {
            aReturn.push("Sorry we didn't quite get that.");
            aReturn.push("Please refresh and try again.");
          }
          return aReturn;
        }
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