// Отсортируйте массив по убыванию.
// Использовать встроенные методы массивов — нельзя.

////////////////// Задание //////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// [6,5,4,3,2,1]

////////////////// Решение //////////////////

const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 6; ++i)
{
    let temp;
    let sorted = true;
    for (let j = i + 1; j < 6; ++j)
    {
        if (arr[i] < arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j]
            arr[j] = temp;
            sorted = false;
        }
    }

    if (sorted)
        break;
}
