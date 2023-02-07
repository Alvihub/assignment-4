// problem 1
// /In this function, whichever number is input, various types of calculations are performed on that number and output is given.

function mindGame(number){ if(typeof number !== 'number'||number<0){
    return 'please enter a Positive number';
 }
    const result = ((((number*3)+10)/2)-5);
    return result;
}
// console.log(mindGame(33))

// // problem 2
// If a string is input to this function ,bassed on the character of that string ,will given output 'Even or Odd'.

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
// console.log(evenOdd('77'))


// problem 3
// Any number given as input to this function. Different numbers will be output based on the difference between that number and 7.
 
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
// console.log(isLGSeven(15))

// problem 4
// If  a array of some numbers is given as input to this function,how many negtive numbers are there will be outfut .

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
// console.log(findingBadData(  [-4, -9, -5, -33, -55 ] ))


// problem 5
// This function does some complicated calculations.
// In this function the number of gems will be given in 3 parameters. Then those gems will be converted to diamonds. Then the total diamonds output of 3 parameters will be given

function gemsToDiamond(firstFriendGems, secondFriendGems,thirdFriendGems){
    if(typeof firstFriendGems !== 'number' ||typeof secondFriendGems !== 'number'||typeof thirdFriendGems !== 'number' || firstFriendGems <0 || secondFriendGems < 0 ||thirdFriendGems <0){
                return 'please enter a  number';}

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
// console.log(gemsToDiamond(  20, 200, 50))