/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
	let numbers = []
	let sum = 0

	while (true) {
		let value = prompt('Введите число', ' ')
		if (value === null || value === '' || !isFinite(value)) break
		numbers.push(+value)
	}

	for (let number of numbers) {
		sum += number
	}
	return sum
}

alert(sumInput())
