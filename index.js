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

const validCheckBox = (input) => {
    console.log("Че б сожрать?")
    // тут напишем крутую функцию, которая будет проверять
    // что как мимимум 1 из чекбоксов выбран
    //я хз как это делать
    // вот прям совсем
    // но кто мешает мечтать
    document.getElementById('container2').innerHTML = 'Должен быть выбран как минимум 1 пункт';
}

const callValidName = () => {
    console.log(`it works as well`)
    validName(document.getElementById("petsname"));
    validName(document.getElementById("ownername"));
    validCheckBox();
}

button.addEventListener(`click`, callValidName);

// событие остановка отправки формы на сервер js ("event.preventDefault()")
// если не прошло валидация - то  форма не отправляется и выводится сообщение