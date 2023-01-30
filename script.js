
// (_____1_____)

// const removeButton = document.getElementById('start_btn');

// removeButton.addEventListener('click', () => {
//     removeButton.remove();
// })


// (_____2_____)

// const image = document.createElement('img');

// image.setAttribute(
//     'src',
//     'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg',
// );

// image.style.borderRadius = '25px';
// image.style.height = '250px';
// image.style.width = '250px';

// const box = document.getElementById('box');
// box.appendChild(image);


// (_____3_____)

// let users = [];
// function addUsers() {
//     let template = users.map(user => `<p>${user}</p>`).join('\n');
//     document.querySelector('p').innerHTML = template;
// }
// addUsers();
// let btnAdd = document.querySelector('button');
// let input = document.querySelector('input');
// btnAdd.addEventListener('click', () => {
//     users.push(input.value);
//     input.value = '';
//     addUsers();
//     console.log(users);
// });


// const table = document.getElementsByClassName('table')[0];
// console.log(table);

// function createCard(number) {
//     const card = document.createElement('div');
//     card.className = "card";

//     const topNumber = document.createElement('div');
//     topNumber.innerText = number;

//     const bottomNumber = document.createElement('div');
//     bottomNumber.innerText = number;
//     bottomNumber.className = "right";
//     card.append(topNumber);
//     card.append(bottomNumber);

//     return card;
// }


// table.appendChild(createCard(4));

// (_____4_____)

// const users = [
//     {
//         id: 7,
//         email: "michael.lawson@reqres.in",
//         first_name: "Michael",
//         last_name: "Lawson",
//         avatar: "https://reqres.in/img/faces/7-image.jpg&quot",
//     },
//     {
//         id: 8,
//         email: "lindsay.ferguson@reqres.in",
//         first_name: "Lindsay",
//         last_name: "Ferguson",
//         avatar: "https://reqres.in/img/faces/8-image.jpg&quot",
//     },
//     {
//         id: 9,
//         email: "tobias.funke@reqres.in",
//         first_name: "Tobias",
//         last_name: "Funke",
//         avatar: "https://reqres.in/img/faces/9-image.jpg&quot",
//     },
//     {
//         id: 10,
//         email: "byron.fields@reqres.in",
//         first_name: "Byron",
//         last_name: "Fields",
//         avatar: "https://reqres.in/img/faces/10-image.jpg&quot",
//     },
//     {
//         id: 11,
//         email: "george.edwards@reqres.in",
//         first_name: "George",
//         last_name: "Edwards",
//         avatar: "https://reqres.in/img/faces/11-image.jpg&quot",
//     },
//     {
//         id: 12,
//         email: "rachel.howell@reqres.in",
//         first_name: "Rachel",
//         last_name: "Howell",
//         avatar: "https://reqres.in/img/faces/12-image.jpg&quot",
//     }
// ];


// const main = document.querySelector('.main');

// const card = document.createElement('div');
// card.classList = 'card';

// const movieCard = `

//     <img src ="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg">


// `;