/**
 * A list words/phrases for Pictionary.
 */
const PICTIONARIES = [

// Creatures
{pictionary: "Alligator"},
{pictionary: "Bald Eagle"},
{pictionary: "Black Bear"},
{pictionary: "Blue Whale"},
{pictionary: "Butterfly"},
{pictionary: "Elephant"},
{pictionary: "French Bulldog"},
{pictionary: "German Shepherd"},
{pictionary: "Giraffe"},
{pictionary: "Golden Retriever"},
{pictionary: "Grizzly Bear"},
{pictionary: "Hippopotamus"},
{pictionary: "Jellyfish"},
{pictionary: "Killer Whale"},
{pictionary: "Mountain Lion"},
{pictionary: "Octopus"},
{pictionary: "Peacock"},
{pictionary: "Pikachu"},
{pictionary: "Polar Bear"},
{pictionary: "Poodle"},
{pictionary: "Sea Monster"},
{pictionary: "Seahorse"},
{pictionary: "Sloth"},
{pictionary: "Snowy Owl"},
{pictionary: "Starfish"},
{pictionary: "Whale"},
{pictionary: "Wild Boar"},

// Food
{pictionary: "Apple Tree"},
{pictionary: "Alphabet Soup"},
{pictionary: "Banana"},
{pictionary: "Blackberry"},
{pictionary: "Carrot Cake"},
{pictionary: "Cheesecake"},
{pictionary: "Cherry Bush"},
{pictionary: "Chocolate Chip Cookie"},
{pictionary: "Coconut"},
{pictionary: "Doughnut"},
{pictionary: "French Fries"},
{pictionary: "Egg Roll"},
{pictionary: "Grapes"},
{pictionary: "Hot dog"},
{pictionary: "Ketchup"},
{pictionary: "Kiwifruit"},
{pictionary: "Lemon"},
{pictionary: "Meatballs"},
{pictionary: "Mustard"},
{pictionary: "Nachos"},
{pictionary: "Noodles"},
{pictionary: "Nutella Sandwich"},
{pictionary: "Onion Ring"},
{pictionary: "Orange Juice"},
{pictionary: "Pancake"},
{pictionary: "Pasta"},
{pictionary: "Peach"},
{pictionary: "Peanut"},
{pictionary: "Pear"},
{pictionary: "Pineapple"},
{pictionary: "Pumpkin Pie"},
{pictionary: "Rice Pudding"},
{pictionary: "Salad"},
{pictionary: "Spaghetti"},
{pictionary: "Starberry Milkshake"},
{pictionary: "Waffle"},
{pictionary: "Sundae"},
{pictionary: "Taco"},
{pictionary: "Watermelon"},
{pictionary: "Yogurt"},

// Clothing
{pictionary: "Turtleneck"},

// People
{pictionary: "Steve Jobs"},
{pictionary: "Kim Kardashian"},

// Stationery
{pictionary: "Calculator"},
{pictionary: "Pen"},
{pictionary: "Pencil"},
{pictionary: "Eraser"},
{pictionary: "Ruler"},
{pictionary: "Pencil Case"},

// Stories
{pictionary: "Aladdin"},
{pictionary: "Beauty and the Beast"},
{pictionary: "Chicken Little"},
{pictionary: "Cinderella"},
{pictionary: "Hansel and Gretel"},
{pictionary: "Little Red Riding Hood"},
{pictionary: "Pinocchio"},
{pictionary: "Rapunzel"},
{pictionary: "Snow White"},
{pictionary: "The Little Mermaid"},
{pictionary: "The Ugly Duckling"},

// Places Around The World
{pictionary: "Buckingham Palace"},
{pictionary: "Burj Khalifa"},
{pictionary: "Colosseum"},
{pictionary: "Disney Land"},
{pictionary: "Eiffel Tower"},
{pictionary: "Empire State Building"},
{pictionary: "James Bond"},
{pictionary: "Great Wall of China"},
{pictionary: "London Eye"},
{pictionary: "Machu Picchu"},
{pictionary: "Niagara Falls"},
{pictionary: "Taj Mahal"},
{pictionary: "Times Square"},

// Games
{pictionary: "Battlefield"},
{pictionary: "Call of Duty"},
{pictionary: "Mario Kart"},
{pictionary: "Mortal Kombat"},
{pictionary: "Pokemon GO"},

// Comic Characters
{pictionary: "Batman"},
{pictionary: "Deadpool"},
{pictionary: "Iron Man"},
{pictionary: "Superman"},
{pictionary: "Spider-Man"},
{pictionary: "Teenage Mutant Ninja Turtles"},

// Outdoors
{pictionary: "Earthquake"},
{pictionary: "Rainbow"},
{pictionary: "Tornado"},
{pictionary: "Tsunami"},


// Other
{pictionary: "Broom"},
{pictionary: "Cat Food"},
{pictionary: "Gold Digger"},
{pictionary: "Google Search"},
{pictionary: "Goosebumps"},
{pictionary: "Graduation"},
{pictionary: "Message In A Bottle"},
{pictionary: "Nail Polish"},
{pictionary: "Perfume"},
{pictionary: "Ski Lift"},
{pictionary: "Sunscreen"},
{pictionary: "Time Machine"}
];


let pictionaries = []; // This array is used as a stack.


/**
 * Retrieve the next Pictionary.
 */
function getNextPictionary() {
    if (pictionaries.length == 0) // Reload stack.
        pictionaries = PICTIONARIES.map(c => c.pictionary).slice(0);
    let i = Math.floor(Math.random() * pictionaries.length); // Random index.
    return pictionaries.splice(i, 1)[0]; // Return removal.
}


export { getNextPictionary };
