'use strict';

/**
 * Функция, сортирующая строки по длине(если равны, то по алфавитному порядку)
 * @param {Array<String>} strings - массив строк
 * 
 * @example
 * // returns ["h", "cat", "hello"]
 * sortByLength(["hello", "h", "cat"]);
 * 
 * @returns {Array<String>}
 */
function sortByLength(strings){
    return strings.sort(srav);
}

/**
 * Компаратор для сравнения строк по длине, потом по алфавиту
 * @param {string} a - первая строка для сравнения
 * @param {string} b - вторая строка для сравнения
 * 
 * @example
 * // returns отрицательное число
 * srav("a", "bb")
 * 
 * @returns {number}
 */
function srav(a, b){
    if (a.length !== b.length){
        return a.length - b.length;
    }else if (a > b){
        return 1;
    }else if (a < b){
        return -1;
    }else{
        return 0; // Если строки полностью идентичны
    }
}

