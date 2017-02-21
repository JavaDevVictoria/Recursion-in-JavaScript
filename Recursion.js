var change = 0;
function howManyQuarters(howMuchMoney) {
    //fill this in
    if (howMuchMoney < 0.25)
    {
        change = howMuchMoney;
        return 0;
    }
    else
    {
        answer = howManyQuarters(howMuchMoney - 0.25);
        return answer + 0.25 * 4;
    }
}
change = 0.99;
console.log ("Pay out " + howManyQuarters(change) + " quarters");
console.log ("And you'll have " + change * 100 + " pennies left over");


//Extended version:

function howManyDollars(dollarsSoFar) {
    if (change < 1.00) {
		console.log (dollarsSoFar + " dollar bills");
	} else {
		change -= 1.00;
		return howManyDollars(dollarsSoFar + 1);
	}
}
function howManyQuarters(quartersSoFar) {
    //fill this in using this log as the base case
      
    if (change < 0.25) 
    {
      console.log (quartersSoFar + " quarters");
    } 
    else 
    {
      change -= 0.25;
      return howManyQuarters(quartersSoFar + 1);
    }
}
function howManyDimes(dimesSoFar) {
    //fill this in using this log as the base case
    
    if (change < 0.10) 
    {
      console.log(dimesSoFar + " dimes");
    } 
    else 
    {
      change -= 0.10;
      return howManyDimes(dimesSoFar + 1);
    }
}
function howManyNickels(nickelsSoFar) {
    //fill this in using this log as the base case
    
    if (change < 0.05) 
    {
      console.log(nickelsSoFar + " nickels");
    } 
    else 
    {
      change -= 0.05;
      return howManyNickels(nickelsSoFar + 1);
    }
    
}
function howManyPennies(penniesSoFar) {
    //fill this in using this log as the base case
    
    
    if (change < 0.01) 
    {
      console.log(penniesSoFar + " pennies");
    } 
    else 
    {
      change -= 0.01;
      return howManyPennies(penniesSoFar + 1);
    }
}

change = 4.94;
console.log("Give them:");
howManyDollars(0); //passing in "so far" parameters of 0
howManyQuarters(0);
howManyDimes(0);
howManyNickels(0);
howManyPennies(0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));


//Enhanced version:

function howManyCoins (coinName, coinAmount, coinsSoFar) {
    //fill this in
    if (change < coinAmount)
    {
        console.log(coinsSoFar + " " + coinName);
    }
    else
    {
        change -= coinAmount;
    	return howManyCoins(coinName,coinAmount,coinsSoFar + 1);   
    } 
}

change = 4.94;
console.log("Give them:");
howManyCoins("dollar bills", 1.00, 0);
howManyCoins("quarters", 0.25, 0);
howManyCoins("dimes", 0.10, 0);
howManyCoins("nickels",0.05,0);
howManyCoins("pennies",0.01,0);
console.log("And the amount of change left to give should be $0.00. It actually is $" + change.toFixed(2));

//Incorporating the function back into the cash register:
var cashRegisterWithChange = {
	total: 0,
	change: 0,
	setTotal: function (amount) {
		this.total = amount;
	},
	getPaid: function (amountPaid) {
		if (this.total > amountPaid) {
			console.log ("Not enough!");
		} else {
			this.change = amountPaid - this.total;
			console.log ("Give them:");
			this.howManyCoins("dollar bills", 1.00, 0);
			this.howManyCoins("quarters", 0.25, 0);
			this.howManyCoins("dimes", 0.10, 0);
			this.howManyCoins("nickels",0.05,0);
			this.howManyCoins("pennies",0.01,0);
		}
	},
	howManyCoins: function (coinName,coinAmount,coinsSoFar) {
        //and this!
        
        if (this.change < coinAmount) {
    	console.log(coinsSoFar + " " + coinName);
	} else {
		this.change -= coinAmount;
		this.howManyCoins(coinName, coinAmount, coinsSoFar + 1);
	}
	}
};

//leave these two lines in!
cashRegisterWithChange.setTotal(5.06);
cashRegisterWithChange.getPaid(10.00); //to get our $4.94 of change!
