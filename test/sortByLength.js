'use strict';

QUnit.module("Тестируем функцию sortByLength", function() {
    QUnit.test("Правильно сортирует строки по длине", function(assert) {
        const result = sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);

        assert.deepEqual(result, ["fig", "kiwi", "apple", "grape", "banana"], "Строки должны быть отсортированы по длине.");
    });

    QUnit.test("Правильно сортирует строки с одинаковой длиной", function(assert) {
        const result = sortByLength(["cat", "bat", "ant", "dog"]);

        assert.deepEqual(result, ["ant", "bat", "cat", "dog"], "Строки с одинаковой длиной должны быть отсортированы в алфавитном порядке.");
    });

    QUnit.test("Правильно сортирует массив с одной строкой", function(assert) {
        const result = sortByLength(["hello"]);

        assert.deepEqual(result, ["hello"], "Массив с одной строкой должен вернуть ту же строку.");
    });
    QUnit.test("Правильно сортирует массив с числовой строкой", function(assert) {
        const result = sortByLength(["hello", "1", "25", "10"]);

        assert.deepEqual(result, ["1", "10", "25", "hello"], "Массив с одной строкой должен вернуть ту же строку.");
    });
    QUnit.test("Правильно сортирует массив со знаками", function(assert) {
        const result = sortByLength(["Help-me", "Help me"]);

        assert.deepEqual(result, ["Help me", "Help-me"], "Учитывает сортировку со знаками.");
    });
    QUnit.test("Правильно сортирует массив строки с разым регистром", function(assert) {
        const result = sortByLength(["hello", "Rock", "Hello", "rock"]);

        assert.deepEqual(result, ["Rock", "rock", "Hello", "hello"], "Массив с со строками разных регистров должен сортировать сначала по длине, потом по регистру.");
    });
    QUnit.test("Правильно сортирует массив с одинаковыми строками", function(assert) {
        const result = sortByLength(["Danger", "Danger", "Danger", "Danger"]);

        assert.deepEqual(result, ["Danger", "Danger", "Danger", "Danger"], "Массив должен остаться неизменным.");
    });
});
