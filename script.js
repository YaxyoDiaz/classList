// const color = prompt('Choose color: red, blue, or green')

// const box = document.querySelector('.box')
// console.log(box);

// if (color === 'red') {
//     box.classList.add('red')
// } else if (color === 'green') {
//     box.classList.add('green')
// } else if (color === 'blue') {
//     box.classList.add('blue')
// } else {
//     alert('Вы ввели некоректный цвет!')
// }



// const title = document.querySelector('h1')

// const newText = prompt('Введите новый текст для заголовок:')

// if(newText) {
//     title.textContent = newText
// } else {
//     alert('Вы ничего не ввели.')
// }

const name = document.querySelector('.box h1')
const surname = document.querySelector('.box h2')
const age = document.querySelector('.box h3')
const image = document.querySelector('.box img')

const firstName = prompt('Your name:')
const lastName = prompt('Your surname:')
const enterAge = prompt('Your age:')
const enterImage = prompt('Your image:')

name.textContent = firstName
surname.textContent = lastName
age.textContent = enterAge
image.src = enterImage