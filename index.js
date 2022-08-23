const validName = (nameField) => {
    const nameFormat = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (nameField.value.match(nameFormat)) {
        console.log(nameField.value)
        return true;
    } else {
        document.getElementById('container').innerHTML = 'Проверьте правильность введенного имени';
        return false;
    }}

let inputs = document.querySelectorAll(".checkbox-cat-food"); //получаем все инпуты

let a = 0;

const validCheckBox = (input) => {
    if (input.checked == true){
        a++
    }}

for (let input of inputs) { //перебираем их и на каждый вызываем функцию валидации
    validCheckBox(input);
}
console.log(a);

const  validFood = () => {
if (a==0){
    document.getElementById('container2').innerHTML = 'Должен быть выбран как минимум 1 пункт';
    //надпись должна появляться по клику на кнопку, написать функцию
}}

const callValidName = () => {
    validName(document.getElementById("petsname"));
    validName(document.getElementById("ownername"));
    validCheckBox();
    validFood();
}

button.addEventListener(`click`, callValidName);