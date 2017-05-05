/**
 * A list of Charades.
 */
const CHARADES = [

// Books
{charade: "Alice in Wonderland"},
{charade: "A Series of Unfortunate Events"},
{charade: "Charlotte’s Web"},
{charade: "Charlie and the Chocolate Factory"},
{charade: "Chicken Soup for the Soul"},
{charade: "Diary of a Wimpy Kid"},
{charade: "Fifty Shades of Grey", ratedR: "true"},
{charade: "Fight Club"},
{charade: "Gone with the Wind"},
{charade: "Goosebumps"},
{charade: "Harry Potter"},
{charade: "The Da Vinci Code"},
{charade: "The Great Gatsby"},
{charade: "The Hobbit"},
{charade: "The Hunger Games"},
{charade: "The Kite Runner"},
{charade: "The Lord of the Rings"},
{charade: "To Kill a Mockingbird", ratedR: "true"},
{charade: "Twilight"},


// Creatures
{charade: "Alligator"},
{charade: "Bald Eagle"},
{charade: "Black Bear"},
{charade: "Blue Whale"},
{charade: "Butterfly"},
{charade: "Elephant"},
{charade: "French Bulldog"},
{charade: "German Shepherd"},
{charade: "Giraffe"},
{charade: "Golden Retriever"},
{charade: "Grizzly Bear"},
{charade: "Hippopotamus"},
{charade: "Jellyfish"},
{charade: "Killer Whale"},
{charade: "Mountain Lion"},
{charade: "Octopus"},
{charade: "Peacock"},
{charade: "Pikachu"},
{charade: "Polar Bear"},
{charade: "Poodle"},
{charade: "Sea Monster"},
{charade: "Seahorse"},
{charade: "Sloth"},
{charade: "Sperm Whale"},
{charade: "Snowy Owl"},
{charade: "Starfish"},
{charade: "Wild Boar"},

// Movies
{charade: "E.T. the Extra-Terrestrial"},
{charade: "Finding Dory"},
{charade: "Finding Nemo"},
{charade: "Forrest Gump"},
{charade: "How to Train Your Dragon"},
{charade: "Ice Age"},
{charade: "Inception"},
{charade: "Interstellar"},
{charade: "Monsters, Inc."},
{charade: "My Girl"},
{charade: "Pulp Fiction", ratedR: true},
{charade: "Rocky"},
{charade: "Shrek"},
{charade: "Star Wars"},
{charade: "The Dark Knight"},
{charade: "The Dark Knight Rises"},
{charade: "The Godfather", ratedR: true},
{charade: "The Incredibles"},
{charade: "The Lion King"},
{charade: "The Matrix"},
{charade: "The Sound of Music"},
{charade: "The Wizard of Oz"},
{charade: "Scarface", ratedR: true},
{charade: "Titanic"},
{charade: "Toy Story 3"},
{charade: "Up"},
{charade: "WALL-E"},

// Shows
{charade: "Arthur"},
{charade: "Breaking Bad", ratedR: true},
{charade: "Curious George"},
{charade: "Family Guy", ratedR: true},
{charade: "Friends"},
{charade: "Game of Thrones", ratedR: true},
{charade: "Grey’s Anatomy"},
{charade: "House of Cards"},
{charade: "How I Met Your Mother"},
{charade: "Pretty Little Liars"},
{charade: "Prison Break"},
{charade: "Rick and Morty", ratedR: true},
{charade: "The Big Bang Theory"},
{charade: "13 Reasons Why"},

// Music
{charade: "Cheap Thrills"},
{charade: "Hotline Bling"},
{charade: "I Took A Pill In Ibiza"},
{charade: "Lose Yourself"},
{charade: "One Dance"},
{charade: "Pillowtalk"},
{charade: "Stairway To Heaven"},
{charade: "Stand By Me"},
{charade: "Stayin’ Alive"},
{charade: "Thriller"},
{charade: "TiK ToK"},
{charade: "Work"},
{charade: "Wrecking Ball"},

// Stories
{charade: "Aladdin"},
{charade: "Beauty and the Beast"},
{charade: "Cinderella"},
{charade: "Hansel and Gretel"},
{charade: "Little Red Riding Hood"},
{charade: "Pinocchio"},
{charade: "Rapunzel"},
{charade: "Snow White"},
{charade: "The Little Mermaid"},
{charade: "The Ugly Duckling"},

// Places Around The World
{charade: "Buckingham Palace"},
{charade: "Burj Khalifa"},
{charade: "Colosseum"},
{charade: "Disney Land"},
{charade: "Eiffel Tower"},
{charade: "Empire State Building"},
{charade: "Great Wall of China"},
{charade: "London Eye"},
{charade: "Machu Picchu"},
{charade: "Niagara Falls"},
{charade: "Taj Mahal"},
{charade: "Times Square"},


// Games
{charade: "Battlefield"},
{charade: "Call of Duty"},
{charade: "Mario Kart"},
{charade: "Mortal Kombat"},
{charade: "Pokemon GO"},

// People
{charade: "Adele"},
{charade: "Albert Einstein"},
{charade: "Barack Obama"},
{charade: "Donald Trump"},
{charade: "Drake"},
{charade: "Ellen DeGeneres"},
{charade: "Elvis Presley"},
{charade: "Gigi Hadid"},
{charade: "John Legend"},
{charade: "Justin Bieber"},
{charade: "Kim Kardashian"},
{charade: "Michael Jackson"},
{charade: "Oprah Winfrey"},
{charade: "William Shakespeare"},

// Other
{charade: "Broom"},
{charade: "Cat Food"},
{charade: "Gold Digger"},
{charade: "Google Search"},
{charade: "Graduation"},
{charade: "Message In A Bottle"},
{charade: "Nail Polish Remover"},
{charade: "Perfume"},
{charade: "Ski Lift"},
{charade: "Sunscreen"},
{charade: "Time Machine"},
{charade: "Wikipedia"}
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
