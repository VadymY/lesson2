// Напишите код, который посчитает сумму всех парных элементов в массиве.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const array = [1, 2, 3, 4];

////////////////// Решение //////////////////

const array = [1, 2, 3, 4];

var sum = 0;
for (var i = 0; i < 4; ++i)
{
    if (array[i] % 2 === 0)
        sum += array[i];
}
