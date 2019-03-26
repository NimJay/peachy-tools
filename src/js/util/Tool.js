/**
 * Tool
 *  - url: Unique URL.
 *  - name: Unique name.
 *  - description: Describe function of Tool.
 *  - keywords: Array of keywords. Keywords cannot contain whitespace.
 *  - disabled: true iff the Tool is temporarily disabled.
 *
 * Below is the list of ALL Tools.
 */
const TOOLS = [
    {
        url: 'character-counter',
        name: 'Character Counter',
        description: 'Count the number of characters in some text.',
        keywords: [
            'text', 'letters', 'characters', 'counter', 'tally', 'total',
            'words', 'lines', 'length'
        ]
    },
    {
        url: 'charades-generator',
        name: 'Charades Generator',
        description: 'Generate words and phrases for Charades party game.',
        keywords: [
            'charades', 'generator', 'generate', 'random', 'group',
            'party', 'game', 'word'
        ]
    },
    {
        url: 'combinations-generator',
        name: 'Combinations Generator',
        description: 'Generate all combinations of any size from a set of items.',
        keywords: [
            'combination', 'generator', 'generate', 'n', 'choose', 'k',
            'permutations', 'subsets', 'pick', 'selection'
        ]
    },
    {
        url: 'exam-timer',
        name: 'Exam Timer',
        description: 'Countdown the time in hours and minutes for an exam.',
        keywords: [
            'exam', 'timer', 'countdown', 'clock', 'hour', 'test', 'minute',
            'stopwatch', 'quiz'
        ]
    },
    {
        url: 'pearson-correlation-coefficient-calculator',
        name: 'Pearson Correlation Coefficient Calculator',
        description:
            'Calculate the Pearson Correlation Coefficient between two ' +
            'variables.',
        keywords: [
            'pearson', 'correlation', 'calculate', 'calculator', 'pcc',
            'product', 'moment', 'ppmcc'
        ],
        disabled: true
    },
    {
        url: 'permutations-generator',
        name: 'Permutations Generator',
        description: 'Generate all permutations of any size from a set of items.',
        keywords: [
            'permutation', 'generator', 'generate', 'permute', 'arrange', 'order', 'sequence'
        ]
    },
    {
        url: 'pictionary-generator',
        name: 'Pictionary Generator',
        description: 'Generate words and phrases for Pictionary word game.',
        keywords: [
            'pictionary', 'generator', 'picture', 'generate', 'random', 'word',
            'phrase', 'game', 'party'
        ]
    },
    {
        url: 'random-number-generator',
        name: 'Random Number Generator',
        description: 'Generate random numbers.',
        keywords: [
            'random', 'number', 'generator', 'generate', 'integer'
        ]
    },
    {
        url: 'recipe-converter',
        name: 'Recipe Converter',
        description: 'Scale a recipe from one serving size to another.',
        keywords: [
            'recipe', 'scale', 'convert', 'serving', 'divide', 'multiply', 'ingredients', 'cook',
            'ratio', 'portion'
        ]
    }
];


/**
 * Return the Tool with the given URL, or undefined on error.
 * Note: Each Tool has a unique URL.
 */
function getToolByUrl(url) {
    return TOOLS.find(t => t.url == url);
}


/**
 * Return the list of Tools that matches the given searchString.
 * TODO: Improve scoring system.
 */
function searchTools(searchString) {

    // Empty string.
    if (/^\s*$/.test(searchString))
        return TOOLS.filter(t => t.disabled !== true);

    let ss = searchString.toLowerCase().trim()
        .split(/\s+/); // Split in whitespace.

    let computeScore = (tool) => {
        let score = 2 - (ss.length * 1);
        for (var i in ss) {
            let s = ss[i]; // Current word of searchString.
            score += tool.url.includes(s) * 3;
            score += tool.name.toLowerCase().includes(s);
            score += tool.description.toLowerCase().includes(s);
            score += tool.keywords.filter(k => k.includes(s)).length * 0.5;
        }
        return score;
    };

    return TOOLS
        .filter(t => t.disabled !== true) // Ignore disabled.
        .filter(t => computeScore(t) >= 2) // Only keep matches.
        .sort((a, b) => computeScore(a) < computeScore(b)); // Sort.
}


export { getToolByUrl, searchTools, TOOLS };
