// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
}
return gifts;
}

wrapGifts(gifts);


const names = ["Allie", "Rachel", "Becca"];
const event = "anniversary";
*/
function writeCards(array, string) {
    
    const messages = []
    for (let i = 0; i < array.length; i++) {
    messages.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    
    }
    return messages
} 
writeCards(array, string)

function countDown(number) {
    while (number >=0) {
        console.log(number--)
    }
}
