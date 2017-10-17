/*  eslint-disable no-unused-vars */

/**
 * @see http://stackoverflow.com/a/117891/1433400
 */

/**
 * @example
 *
 *  'Only Bob Ate Fresh Gummy Karate Monkeys' => 'syeknoM etaraK ymmuG hserF etA boB ylnO'
 *  'Only Bob Ate Fresh Gummy Karate Monkeys' => 'Monkeys Karate Gummy Fresh Ate Bob Only'
 *
 * Question 1: Reverse a string.
 * Question 2: Reverse only the words in a string.
 *
 * @param {string} string - String to reverse.
 * @param {string} [separator=''] - Character to reverse on.
 * @return {string} - Joined, reversed string.
 */

function reverse(string, separator = '') {
    return string.split(separator).reverse().join(separator);
}

/**
 * @example
 *
 *  [1, 1, 2, 3, 4, 4, 4, 5, 5] => 5
 *
 * Question 3: Find the maximum value in a list of numbers.
 *
 * @param {number[]} list - Number list to evaluate.
 * @return {number} - Maximum value.
 */

function maximum(list) {
    return list.reduce((acc, val) => {
        if (val > acc) {
            return val;
        } else {
            return acc;
        }
    });
}

/**
 * @example
 *
 *  [1, 1, 2, 3, 4, 4, 4, 5, 5] => 1
 *
 * Question 4: Find the minimum value in a list of numbers.
 *
 * @param {number[]} list - Number list to evaluate.
 * @return {number} - Minimum value.
 */

function minimum(list) {
    return list.reduce((acc, val) => {
        if (val < acc) {
            return val;
        } else {
            return acc;
        }
    });
}

/**
 * @example
 *
 *  25 % 5 = 5
 *
 * Question 5: Calculate the remainder, given a numerator and denominator,
 * without using the modulo (%) operator.
 *
 * @param {number} numerator
 * @param {number} denominator
 * @return {number} - Actual remainder amount.
 */

function remainder(numerator, demoninator) {
    const leftover = numerator / demoninator;
    return Math.ceil(demoninator * (leftover - Math.floor(leftover)));
}

/**
 * @example
 *
 *  [1, 1, 2, 3, 4, 4, 4, 5, 5] => [1, 2, 3, 4, 5]
 *
 * Question 6: Return only unique/distinct values from a list.
 *
 * @param {number[]} list - Number list to evaluate.
 * @return {number[]} - Unique numbers from evaluated list.
 */

function unique(list) {
    return list.reduce((acc, val) => {
        if (acc.includes(val)) {
            return acc;
        } else {
            return acc.concat(val);
        }
    }, []);
}

/**
 * @example
 *
 *  [1, 1, 2, 3, 4, 4, 4, 5, 5] => '1(2) 2(1) 3(1) 4(3) 5(2)'
 *
 * Question 7: Return the distinct values from a list as a string, including the
 * count of occurrences.
 *
 * @param {number[]} list - Number list to evaluate.
 * @return {string} - Paired number/occurrances.
 */

function distinctCount(list) {
    const count = list.reduce((acc, val) => {
        if (acc.hasOwnProperty(val)) {
            acc[val] += 1;
        } else {
            acc[val] = 1;
        }

        return acc;
    }, {});

    return Object.keys(count).map(key => `${key}(${count[key]})`).join(' ');
}

/**
 * @example
 *
 *  'a=9 b=1 c=5 d=2 e=9 a / -b + c * d % e' => -8
 *
 * Question 8: Given a string of expressions (variable assignments and operators)
 * only, and which adheres to the above format, return the results of the
 * expressions.
 *
 * @param {string} string - String to evaluate.
 * @param {number} - Result of evaluation.
 */

function evalEquation(string) {
    return eval(string.replace(/[A-Za-z]+=[0-9]+/g, 'const $&;'));
}
