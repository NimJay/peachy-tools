<?php

$TOOLS = [
    [
        'url' => 'character-counter',
        'name' => 'Character Counter',
        'description' => 'Count the number of characters in some text.'
    ],

    [
        'url' => 'charades-generator',
        'name' => 'Charades Generator',
        'description' => 'Generate words and phrases for Charades party game.'
    ],

    [
        'url' => 'combinations-generator',
        'name' => 'Combinations Generator',
        'description' => 'Generate all combinations of any size from a group of items.'
    ],

    [
        'url' => 'exam-timer',
        'name' => 'Exam Timer',
        'description' => 'Countdown the time in hours and minutes for an exam.'
    ],

    [
        'url' => 'pearson-correlation-coefficient-calculator',
        'name' => 'Pearson Correlation Coefficient Calculator',
        'description' => 'Calculate the Pearson Correlation Coefficient between two variables.'
    ],

    [
        'url' => 'permutations-generator',
        'name' => 'Permutations Generator',
        'description' => 'Generate all permutations of any size from a set of items.'
    ],

    [
        'url' => 'pictionary-generator',
        'name' => 'Pictionary Generator',
        'description' => 'Generate words and phrases for Pictionary word game.'
    ],

    [
        'url' => 'random-number-generator',
        'name' => 'Random Number Generator',
        'description' => 'Generate random numbers.'
    ],

    [
        'url' => 'recipe-converter',
        'name' => 'Recipe Converter',
        'description' => 'Scale a recipe from one serving size to another.'
    ]
];


/**
 * Tool
 * Contains static function, getToolByURL($url).
 */
class Tool {
    /**
     * Return the Tool with the given $url.
     * Return NULL if no tool matches the $url.
     */
    public static function getToolByURL($url) {
        global $TOOLS;
        foreach ($TOOLS as $tool) {
            if ($tool['url'] == $url)
                return $tool;
        }
        return NULL;
    }
}
