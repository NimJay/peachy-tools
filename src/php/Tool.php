<?php

/**
 * Tool
 * Contains static function, getToolByURL($url).
 */
class Tool {

    const TOOLS = [
        [
            'url' => 'character-counter',
            'name' => 'Character Counter',
            'description' => 'Count the number of characters in some text.'
        ],

        [
            'url' => 'charades-generator',
            'name' => 'Charades Generator',
            'description' => 'Generate words and phrases for Charades party ' .
                'game.',
        ],

        [
            'url' => 'pearson-correlation-coefficient-calculator',
            'name' => 'Pearson Correlation Coefficient Calculator',
            'description' => 'Calculate the Pearson Correlation Coefficient ' .
                'between two variables.'
        ],

        [
            'url' => 'random-number-generator',
            'name' => 'Random Number Generator',
            'description' => 'Generate random numbers.'
        ]
    ];


    /**
     * Return the Tool with the given $url.
     * Return NULL if no tool matches the $url.
     */
    public static function getToolByURL($url) {
        foreach (self::TOOLS as $tool) {
            if ($tool['url'] == $url)
                return $tool;
        }
        return NULL;
    }
}
