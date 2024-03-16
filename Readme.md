### Homework #30. Функції V3

Даний масив чисел const arr = [1, 2, 3, -1, -2, -3];

Потрібно написати функцію, яка поверне новий масив, що містить лише позитивні числа. Для цього:

Створюємо функцію з довільною назвою.
Функція приймає масив як параметр.
В тілі функції створюємо порожній масив (приклад: const exampleArr = []).
Якщо масив, переданий як параметр у функцію, є порожнім, то повертаємо відповідне повідомлення.
Перебираємо циклом масив, який передано як параметр (використовуємо цикл for).
В тілі циклу перевіряємо, чи є поточний елемент позитивним числом чи від'ємним (if).
Якщо число позитивне, то додаємо його до раніше створеного масиву за допомогою функції push (приклад exampleArr.push(currentPositiveNumber)).
Після виконання циклу перевіряємо масив, який наповнили лише позитивними значеннями.
Якщо він не є порожнім, то повертаємо цей масив.
Якщо він порожній, повертаємо null.
Посилання на додатковий матеріал: