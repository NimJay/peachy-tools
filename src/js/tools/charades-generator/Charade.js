/**
 * A list of Charades.
 */
const CHARADES = [

// Books
{charade: "Alice in Wonderland"},
{charade: "A Series of Unfortunate Events"},
{charade: "Berenstain Bears"},
{charade: "Bridget Jones"},
{charade: "Captain Underpants"},
{charade: "Charlotte’s Web"},
{charade: "Charlie and the Chocolate Factory"},
{charade: "Chicken Soup for the Soul"},
{charade: "Clifford the Big Red Dog"},
{charade: "Curious George"},
{charade: "Diary of a Wimpy Kid"},
{charade: "Fifty Shades of Grey", ratedR: "true"},
{charade: "Fight Club"},
{charade: "Gone with the Wind"},
{charade: "Goosebumps"},
{charade: "Harry Potter"},
{charade: "Noddy"},
{charade: "Tarzan"},
{charade: "The Da Vinci Code"},
{charade: "The Great Gatsby"},
{charade: "The Hobbit"},
{charade: "The Hunger Games"},
{charade: "The Jungle Book"},
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
{charade: "Ant-Man"},
{charade: "American Sniper"},
{charade: "Big Hero 6"},
{charade: "Captian America"},
{charade: "Doctor Strange"},
{charade: "Despicable Me"},
{charade: "E.T. the Extra-Terrestrial"},
{charade: "Fast and Furious"},
{charade: "Finding Dory"},
{charade: "Finding Nemo"},
{charade: "Forrest Gump"},
{charade: "Frozen"},
{charade: "Furious 7"},
{charade: "Gone Girl"},
{charade: "Ghostbusters"},
{charade: "Guardians of the Galaxy"},
{charade: "Hotel Transylvania"},
{charade: "How to Train Your Dragon"},
{charade: "Ice Age"},
{charade: "Inception"},
{charade: "Inside Out"},
{charade: "Interstellar"},
{charade: "Jurassic Park"},
{charade: "Jurassic World"},
{charade: "Kung Fu Panda"},
{charade: "Man of Steel"},
{charade: "Monsters University"},
{charade: "Monsters, Inc."},
{charade: "My Girl"},
{charade: "Minions"},
{charade: "Now You See Me"},
{charade: "Planet of the Apes"},
{charade: "Pitch Perfect"},
{charade: "Pulp Fiction", ratedR: true},
{charade: "Ride Along"},
{charade: "Rocky"},
{charade: "Scarface", ratedR: true},
{charade: "Shrek"},
{charade: "Star Wars"},
{charade: "Suicide Squad"},
{charade: "The Avengers"},
{charade: "The Conjuring", ratedR: true},
{charade: "The Croods"},
{charade: "The Dark Knight"},
{charade: "The Dark Knight Rises"},
{charade: "The Godfather", ratedR: true},
{charade: "The Good Dinosaur"},
{charade: "The Hangover", ratedR: true},
{charade: "The Incredibles"},
{charade: "The Lego Movie"},
{charade: "The Lion King"},
{charade: "The Martian"},
{charade: "The Matrix"},
{charade: "The Revenant"},
{charade: "The Sound of Music"},
{charade: "The Wizard of Oz"},
{charade: "Transformers"},
{charade: "Titanic"},
{charade: "Toy Story 3"},
{charade: "Up"},
{charade: "WALL-E"},
{charade: "World War Z"},
{charade: "Zootopia"},


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
{charade: "James Bond"},
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


// Comic Characters
{charade: "Batman"},
{charade: "Deadpool"},
{charade: "Iron Man"},
{charade: "Superman"},
{charade: "Spider-Man"},
{charade: "Teenage Mutant Ninja Turtles"},


// Other
{charade: "Broom"},
{charade: "Cat Food"},
{charade: "Gold Digger"},
{charade: "Google Search"},
{charade: "Goosebumps"},
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
