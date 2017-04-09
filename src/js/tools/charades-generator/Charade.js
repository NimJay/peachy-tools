// A list of charades.
const CHARADES = [
    "Inception", "Ski Lift", "Lion King", "Message In A Bottle",
    "Cat Food", "Ice Age", "Sloth", "Pikachu", "Time Machine",
    "Harry Potter", "Computer Bug", "Google Search", "Graduation",
    "Gold Digger", "Broom"
];



let charades = []; // This array is used as a stack.


/**
 * Retrieve the next Charade.
 */
function getNextCharade() {
    if (charades.length == 0)
        charades = CHARADES.slice(0); // Reload stack.
    let index = Math.floor(Math.random() * charades.length); // Random index.
    return charades.splice(index, 1)[0]; // Return removal.
}


export { getNextCharade };
