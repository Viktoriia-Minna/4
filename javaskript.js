// 1. Дві текстові змінні та перевірка на порожність
const textField1 = 'Приклад тексту';
const textField2 = 'Ще один текст';

if (textField1 !== '' && textField2 !== '') {
  console.log('Обидва поля заповнені');
} else {
  console.log('Не всі поля заповнені');
}

// 2. Дві числові змінні та сума
const number1 = 7;
const number2 = 5;
const sum = number1 + number2;

if (sum > 10) {
  console.log('Сума більша за 10');
} else {
  console.log('Сума менша або дорівнює 10');
}

// 3. Змінна з текстом, перевірка на слово "JavaScript"
const sampleText = 'Я вчу JavaScript і мені подобається';

if (sampleText.includes('JavaScript')) {
  console.log('Текст містить слово JavaScript');
} else {
  console.log('Текст не містить слово JavaScript');
}

// 4. Змінна з числом, перевірка діапазону від 10 до 20
const value = 15;

if (value > 10 && value < 20) {
  console.log('Число входить в діапазон від 10 до 20');
} else {
  console.log('Число не входить в діапазон від 10 до 20');
}

// 5. Поля ім'я, email, пароль та їх валідація
const nameField = 'vika';
const emailField = 'vika@gmail.com';
const passwordField = '111111111';

const isNameValid = nameField.length >= 3;
const emailAtIndex = emailField.indexOf('@');
const emailDotIndex = emailField.indexOf('.', emailAtIndex + 1);
const isEmailValid = emailAtIndex > 0 && emailDotIndex > emailAtIndex + 1;
const isPasswordValid = passwordField.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log('Перенаправлення на іншу сторінку');
} else {
  console.log('Помилка: неправильне заповнення');
}
