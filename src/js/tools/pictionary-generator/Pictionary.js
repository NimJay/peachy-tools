/**
 * A list words/phrases for Pictionary.
 */
const PICTIONARIES = [

// Creatures
{pictionary: "Alligator"},
{pictionary: "Bald Eagle"},
{pictionary: "Black Bear"},
{pictionary: "Blue Whale"},
{pictionary: "Butterfly", isEasy: true},
{pictionary: "Elephant", isEasy: true},
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
{pictionary: "Zebra"},

// Food
{pictionary: "Apple Tree", isEasy: true},
{pictionary: "Alphabet Soup", isEasy: true},
{pictionary: "Banana", isEasy: true},
{pictionary: "Blackberry"},
{pictionary: "Carrot Cake", isEasy: true},
{pictionary: "Cheesecake"},
{pictionary: "Cherry Bush", isEasy: true},
{pictionary: "Chocolate Chip Cookie", isEasy: true},
{pictionary: "Coconut"},
{pictionary: "Doughnut", isEasy: true},
{pictionary: "French Fries", isEasy: true},
{pictionary: "Egg Roll"},
{pictionary: "Grapes", isEasy: true},
{pictionary: "Hot dog", isEasy: true},
{pictionary: "Ketchup"},
{pictionary: "Kiwifruit"},
{pictionary: "Lemon", isEasy: true},
{pictionary: "Meatballs"},
{pictionary: "Mustard"},
{pictionary: "Nachos", isEasy: true},
{pictionary: "Noodles", isEasy: true},
{pictionary: "Nutella Sandwich"},
{pictionary: "Onion Ring"},
{pictionary: "Orange Juice", isEasy: true},
{pictionary: "Pancake"},
{pictionary: "Pasta"},
{pictionary: "Peach"},
{pictionary: "Peanut"},
{pictionary: "Pear", isEasy: true},
{pictionary: "Pineapple"},
{pictionary: "Pumpkin Pie"},
{pictionary: "Rice Pudding"},
{pictionary: "Salad"},
{pictionary: "Spaghetti"},
{pictionary: "Strawberry Milkshake"},
{pictionary: "Waffle"},
{pictionary: "Sundae"},
{pictionary: "Taco"},
{pictionary: "Watermelon", isEasy: true},

// Clothing
{pictionary: "Ballet Slippers"},
{pictionary: "Baseball Cap", isEasy: true},
{pictionary: "Cowboy Hat", isEasy: true},
{pictionary: "Diamond Ring"},
{pictionary: "Dress Shirt"},
{pictionary: "Gym Shorts"},
{pictionary: "High Heels", isEasy: true},
{pictionary: "Overalls"},
{pictionary: "Pearl Necklace"},
{pictionary: "Rubber Boots", isEasy: true},
{pictionary: "Running Shoes"},
{pictionary: "Scarf", isEasy: true},
{pictionary: "Socks", isEasy: true},
{pictionary: "Spring Jacket"},
{pictionary: "Stockings", isEasy: true},
{pictionary: "Sundress"},
{pictionary: "Sweater", isEasy: true},
{pictionary: "Tie", isEasy: true},
{pictionary: "Turtleneck"},
{pictionary: "Tuxedo"},
{pictionary: "Underwear", isEasy: true},
{pictionary: "Watch", isEasy: true},

// Home
{pictionary: "Blender"},
{pictionary: "Bookcase", isEasy: true},
{pictionary: "Butter Knife"},
{pictionary: "Carpet", isEasy: true},
{pictionary: "Coffee Maker", isEasy: true},
{pictionary: "Dish Washer"},
{pictionary: "Jug", isEasy: true},
{pictionary: "Juicer"},
{pictionary: "Kettle", isEasy: true},
{pictionary: "Vacuum Cleaner"},
{pictionary: "Microwave"},
{pictionary: "Oven"},
{pictionary: "Pressure Cooker"},
{pictionary: "Printer"},
{pictionary: "Refrigerator"},
{pictionary: "Smart TV", isEasy: true},
{pictionary: "Sofa"},
{pictionary: "Stool", isEasy: true},
{pictionary: "Stove", isEasy: true},
{pictionary: "Table Cloth", isEasy: true},
{pictionary: "Toaster", isEasy: true},
{pictionary: "Waffle Iron"},
{pictionary: "Washing Machine", isEasy: true},

// Instruments
{pictionary: "Accordion"},
{pictionary: "Bagpipes"},
{pictionary: "Banjo", isEasy: true},
{pictionary: "Bass Guitar"},
{pictionary: "Bongo"},
{pictionary: "Cello"},
{pictionary: "Clarinet", isEasy: true},
{pictionary: "Drums", isEasy: true},
{pictionary: "Harmonica"},
{pictionary: "Harp"},
{pictionary: "Flute", isEasy: true},
{pictionary: "French Horn", isEasy: true},
{pictionary: "Piano"},
{pictionary: "Recorder"},
{pictionary: "Saxophone"},
{pictionary: "Synthesizer"},
{pictionary: "Triangle", isEasy: true},
{pictionary: "Trombone"},
{pictionary: "Trumpet", isEasy: true},
{pictionary: "Violin", isEasy: true},
{pictionary: "Ukulele"},
{pictionary: "Xylophone"},

// Occupations
{pictionary: "Accountant"},
{pictionary: "Actor"},
{pictionary: "Architect"},
{pictionary: "Artist"},
{pictionary: "Astronomer"},
{pictionary: "Biologist"},
{pictionary: "Botanist"},
{pictionary: "Chemists"},
{pictionary: "Chiropractor"},
{pictionary: "Dentist", isEasy: true},
{pictionary: "Dietitian"},
{pictionary: "Doctors", isEasy: true},
{pictionary: "Engineer"},
{pictionary: "Geologist"},
{pictionary: "Firefighter"},
{pictionary: "Judge"},
{pictionary: "Librarian"},
{pictionary: "Meteorologist"},
{pictionary: "Musician", isEasy: true},
{pictionary: "Nurse"},
{pictionary: "Optometrist"},
{pictionary: "Pharmacists"},
{pictionary: "Philosopher"},
{pictionary: "Physician"},
{pictionary: "Physicist"},
{pictionary: "Pilot", isEasy: true},
{pictionary: "Police Officer"},
{pictionary: "Professor"},
{pictionary: "Programmer", isEasy: true},
{pictionary: "Psychologist"},
{pictionary: "Sea Captain"},
{pictionary: "Scientist", isEasy: true},
{pictionary: "Teacher"},
{pictionary: "Zoologist"},
{pictionary: "Writer"},

// People
{pictionary: "Donald Trump"},
{pictionary: "Kim Kardashian"},
{pictionary: "Steve Jobs"},
{pictionary: "Albert Einstein"},

// Stationery
{pictionary: "Calculator", isEasy: true},
{pictionary: "Pen", isEasy: true},
{pictionary: "Pencil", isEasy: true},
{pictionary: "Eraser", isEasy: true},
{pictionary: "Ruler", isEasy: true},
{pictionary: "Pencil Case"},

// Stories
{pictionary: "Aladdin"},
{pictionary: "Beauty and the Beast"},
{pictionary: "Chicken Little"},
{pictionary: "Cinderella", isEasy: true},
{pictionary: "Hansel and Gretel"},
{pictionary: "Little Red Riding Hood"},
{pictionary: "Pinocchio", isEasy: true},
{pictionary: "Rapunzel", isEasy: true},
{pictionary: "Robin Hood"},
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

// Video Games
{pictionary: "Battlefield"},
{pictionary: "Call of Duty"},
{pictionary: "Mario Kart"},
{pictionary: "Mortal Kombat"},
{pictionary: "Pokemon GO"},

// Comic Characters
{pictionary: "Aquaman", isEasy: true},
{pictionary: "Batman", isEasy: true},
{pictionary: "Deadpool"},
{pictionary: "Iron Man"},
{pictionary: "Superman", isEasy: true},
{pictionary: "Spider-Man"},
{pictionary: "Teenage Mutant Ninja Turtles"},

// Outdoors
{pictionary: "Earthquake"},
{pictionary: "Rainbow", isEasy: true},
{pictionary: "Tornado", isEasy: true},
{pictionary: "Tsunami", isEasy: true},

// Sports, Games, & Activities
{pictionary: "American Football", isEasy: true},
{pictionary: "Badminton Racquet"},
{pictionary: "Baseball Bat", isEasy: true},
{pictionary: "Basketball", isEasy: true},
{pictionary: "Bowling", isEasy: true},
{pictionary: "Boxing Gloves", isEasy: true},
{pictionary: "Chessboard", isEasy: true},
{pictionary: "Cricket"},
{pictionary: "Cycling", isEasy: true},
{pictionary: "Fishing Rod", isEasy: true},
{pictionary: "Golf Stick", isEasy: true},
{pictionary: "Gymnastics"},
{pictionary: "Hockey", isEasy: true},
{pictionary: "Ice Skating"},
{pictionary: "Juggling", isEasy: true},
{pictionary: "Karate"},
{pictionary: "Parachute"},
{pictionary: "Rugby", isEasy: true},
{pictionary: "Sailboat", isEasy: true},
{pictionary: "Skateboard", isEasy: true},
{pictionary: "Snowboard", isEasy: true},
{pictionary: "Ski Lift"},
{pictionary: "Skydiving"},
{pictionary: "Soccer Ball", isEasy: true},
{pictionary: "Surfing", isEasy: true},
{pictionary: "Swimming Pool", isEasy: true},
{pictionary: "Tennis Ball", isEasy: true},
{pictionary: "Volleyball Net"},
{pictionary: "Weightlifting", isEasy: true},

// Other
{pictionary: "Broom", isEasy: true},
{pictionary: "Cat Food", isEasy: true},
{pictionary: "Gold Digger"},
{pictionary: "Google Search", isEasy: true},
{pictionary: "Goosebumps"},
{pictionary: "Graduation"},
{pictionary: "Message In A Bottle", isEasy: true},
{pictionary: "Nail Polish"},
{pictionary: "Perfume"},
{pictionary: "Pirate Ship"},
{pictionary: "Sunscreen"},
{pictionary: "Time Machine", isEasy: true}
];


let pictionaries = []; // This array is used as a stack.


/**
 * Retrieve the next Pictionary.
 */
function getNextPictionary() {
    if (pictionaries.length == 0) // Reload stack.
        pictionaries = PICTIONARIES.slice(0);
    let i = Math.floor(Math.random() * pictionaries.length); // Random index.
    return pictionaries.splice(i, 1)[0]; // Return removal.
}


export { getNextPictionary };
