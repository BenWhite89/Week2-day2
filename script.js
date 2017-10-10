$(document).ready(function() {

  var Dice = function(index, value) {
    this.index = index;
    this.value = value;
    this.div = $('#container').append(`<div class='die' id='${index}'><p id='p${index}'>${value}</p></div>`);
    this.click = $(`#${index}`).click( function() {
      var diceIndex = searchIndex(index, diceArray);
      
      if (index  === 0) {
        diceArray[0].roll();
      } else {
        diceArray[diceIndex].roll();
      }
    });
    this.dblClick = $(`#${index}`).dblclick( function() {
      var diceIndex = searchIndex(index,diceArray);
      if (index === 0) {
        $(`#0`).remove();
        diceArray.splice(0, 1);
      } else {
        $(`#${index}`).remove();
        diceArray.splice(diceIndex, 1);
      }
    });
  };

  Dice.prototype.roll = function() {
    let newRandom = Math.floor(Math.random() * 6) + 1;
    this.value = newRandom;
    $(`#p${this.index}`).empty();
    $(`#p${this.index}`).append(newRandom);
  }

  var searchIndex = function(a,b) {
    for (let i = 0; i < b.length; i++){
      if (b[i].index === a) {
        return i;
      }
    }
  }

  let dieCounter = 0,
      diceArray = [];

  $('#generate').click(function() {
    var init = Math.floor(Math.random() * 6) + 1,
        par = new Dice(dieCounter, init);
    
    dieCounter++;    
    
    diceArray.push(par);

  })

  $('#roll').click(function() {
    for (let i = 0; i < diceArray.length; i++) {
      diceArray[i].roll();
    }
  })

  $('#sum').click(function() {
    let sumDice = 0;
    for (let i = 0; i < diceArray.length; i++) {
      
        sumDice = sumDice + diceArray[i].value;
    };
    alert(sumDice);    
  })

})