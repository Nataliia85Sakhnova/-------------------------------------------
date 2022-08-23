const validName = (nameField) => {
    console.log(`it works`)
    const nameFormat = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (nameField.value.match(nameFormat)) {
        console.log(nameField.value)
        return true;
    } else {
        console.log("Валидация завалена! Иди переписывай!")
        // ("event.preventDefault()")стандартный метод отмены действия браузера
        document.getElementById('container').innerHTML = 'Проверьте правильность введенного имени';
        return false;
    }
}



let inputs = document.querySelectorAll(".checkbox-cat-food"); //получаем все инпуты
// console.log(inputs[0].checked);
// console.log(inputs[1].checked);
// console.dir(document);

let a = 0;

const validCheckBox = (input) => {
    if (input.checked == true){
        a++
    }
}

for (let input of inputs) { //перебираем их и на каждый вызываем функцию валидации
    validCheckBox(input);
}
console.log(a);

if (a==0){
    document.getElementById('container2').innerHTML = 'Должен быть выбран как минимум 1 пункт';
    //надпись должна появляться по клику на кнопку, написать функцию
}



    // document.querySelectorAll(`.checkbox-cat-food`).checkbox-cat-food
    // [document.querySelectorAll(`input[type=checkbox]`)].some(el=>el.checked)



const callValidName = () => {
    console.log(`it works as well`)
    validName(document.getElementById("petsname"));
    validName(document.getElementById("ownername"));
    validCheckBox();
}

button.addEventListener(`click`, callValidName);

// событие остановка отправки формы на сервер js ("event.preventDefault()")
// если не прошло валидация - то  форма не отправляется и выводится сообщение