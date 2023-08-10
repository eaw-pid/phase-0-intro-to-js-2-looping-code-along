// Code your solutions in this fi
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(array, event) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        
    }
    return newArr
}

function countDown(num) {
    while (num >= 0) {
    console.log(num--)
}
}