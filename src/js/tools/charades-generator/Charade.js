/**
 * A list of Charades.
 */
const CHARADES = [

// Books
{charade: "Harry Potter"},
{charade: "Titanic"},

// Creatures
{charade: "Blue Whale"},
{charade: "Pikachu"},
{charade: "Sea Monster"},
{charade: "Sloth"},

// Movies
{charade: "Inception"},
{charade: "The Lion King"},
{charade: "Ice Age"},

// Shows
{charade: "How I Met Your Mother"},

// Music
{charade: "Cheap Thrills"},
{charade: "I Took A Pill In Ibiza"},

// People
{charade: "Albert Einstein"},

// Other
{charade: "Broom"},
{charade: "Cat Food"},
{charade: "Computer Bug"},
{charade: "Gold Digger"},
{charade: "Google Search"},
{charade: "Graduation"},
{charade: "Message In A Bottle"},
{charade: "Ski Lift"},
{charade: "Time Machine"}
];



let charades = []; // This array is used as a stack.


/**
 * Retrieve the next Charade.
 */
function getNextCharade() {
    if (charades.length == 0)
        charades = CHARADES.map(c => c.charade).slice(0); // Reload stack.
    let index = Math.floor(Math.random() * charades.length); // Random index.
    return charades.splice(index, 1)[0]; // Return removal.
}


export { getNextCharade };
