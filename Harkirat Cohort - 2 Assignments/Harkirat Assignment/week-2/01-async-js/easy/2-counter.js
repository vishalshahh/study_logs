// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)


let counter = 0;
const intervalId = setTimeout(() => {
    console.log("Counter:", counter);
    counter++;

    if (counter > 10) {
        clearTimeout(intervalId); // stop after 10
    }
}, 1000);






































































