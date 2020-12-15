let temp = 55;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('meh');
}


let isGuest1Vegan = true;
let isGuest2Vegan = false;

if (isGuest1Vegan && isGuest2Vegan) {
    console.log('Only offer up vegan dishes');
} else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('Make sure to offer up some vegan options');
} else {
    console.log('Offer up anything on the menu');
}