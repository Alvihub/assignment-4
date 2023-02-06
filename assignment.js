// problem 1
function mindGame(number){ if(typeof number !== 'number'||number<0){
    return 'please enter a Positive number';
 }
    const result = ((((number*3)+10)/2)-5);
    return result;
}
const result = mindGame(23);
console.log(result)

// problem 2
function evenOdd(string){
    if(typeof string != 'string' || string.length == 0){
        return "Provide valid input"
    }
     else if(string.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
const result = evenOdd('Problem 3');
console.log(result)


// problem 3

function isLGSeven(number){if(typeof number !== 'number'){
        return 'please enter a  number';
     }
 let different = number - 7;
  if(different < 7){
    return different
  } 
  else{
    return number*2;
  }
}
const result = isLGSeven(15);
console.log(result)

// problem 4
function findingBadData(array){
    if(Array.isArray(array) !== true){
                return 'please enter a  array';
             }
    let countBadData = 0;
    for(let i = 0; i < array.length; i++){
        const number = array[i]
        if(typeof number !== 'number'){
                    return 'please enter a  number';
                 }
         else if( number < 0){
            countBadData = countBadData + 1;
        }
    }
    return countBadData;
}
console.log(findingBadData(  [3,8, 7, -13] ))


// problem 5

function gemsToDiamond(firstFriendGems, secondFriendGems,thirdFriendGems){
    const firstFriendDiamondConvert = 21;
    const secondFriendDiamondConvert = 32;
    const thirdFriendDiamondConvert = 43;
    let firstFriendTotalDiamond = firstFriendGems * firstFriendDiamondConvert;
    let secondFriendTotalDiamond = secondFriendGems * secondFriendDiamondConvert;
    let thirdFriendTotalDiamonds = thirdFriendGems * thirdFriendDiamondConvert;

    let totalDiamond = firstFriendTotalDiamond + secondFriendTotalDiamond +thirdFriendTotalDiamonds;
    
    if(totalDiamond > 1000*2){
        let returnDiamond = totalDiamond - (1000*2);
        return returnDiamond;
    }
    return totalDiamond;
}
console.log(gemsToDiamond( 1, 1, 1))