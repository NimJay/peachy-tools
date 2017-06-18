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

// Clothing
{pictionary: "Ballet Slippers"},
{pictionary: "Baseball Cap"},
{pictionary: "Cowboy Hat"},
{pictionary: "Dress Shirt"},
{pictionary: "Gym Shorts"},
{pictionary: "High Heels"},
{pictionary: "Overalls"},
{pictionary: "Rubber Boots"},
{pictionary: "Running Shoes"},
{pictionary: "Scarf"},
{pictionary: "Socks"},
{pictionary: "Spring Jacket"},
{pictionary: "Stockings"},
{pictionary: "Sundress"},
{pictionary: "Sweater"},
{pictionary: "Tie"},
{pictionary: "Turtleneck"},
{pictionary: "Tuxedo"},
{pictionary: "Underwear"},
{pictionary: "Watch"},

// Home
{pictionary: "Blender"},
{pictionary: "Bookcase"},
{pictionary: "Butter Knife"},
{pictionary: "Carpet"},
{pictionary: "Coffee Maker"},
{pictionary: "Dish Washer"},
{pictionary: "Jug"},
{pictionary: "Juicer"},
{pictionary: "Kettle"},
{pictionary: "Vacuum Cleaner"},
{pictionary: "Microwave"},
{pictionary: "Oven"},
{pictionary: "Pressure Cooker"},
{pictionary: "Printer"},
{pictionary: "Refrigerator"},
{pictionary: "Smart TV"},
{pictionary: "Sofa"},
{pictionary: "Stool"},
{pictionary: "Stove"},
{pictionary: "Table Cloth"},
{pictionary: "Toaster"},
{pictionary: "Waffle Iron"},
{pictionary: "Washing Machine"},

// People
{pictionary: "Donald Trump"},
{pictionary: "Kim Kardashian"},
{pictionary: "Steve Jobs"},
{pictionary: "Albert Einstein"},

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
{pictionary: "Disney Land"},
{pictionary: "Eiffel Tower"},
{pictionary: "Empire State Building"},
{pictionary: "Great Wall of China"},
{pictionary: "London Eye"},
{pictionary: "Niagara Falls"},
{pictionary: "Taj Mahal"},
{pictionary: "The Colosseum"},
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
