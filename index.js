const ValidName = (nameField) => {
    console.log(`it works`)
    const nameFormat = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (nameField.value.match(nameFormat)) {
        console.log(nameField.value)
        return true;
    } else {
        document.getElementById('container').innerHTML = 'Проверьте правильность введенного имени';
        console.log("Валидация завалена! Иди переписывай!")
        return false;
    }
}

const CallValidName = () => {
    console.log(`it works as well`)
    ValidName(document.getElementById("petsname"));
    ValidName(document.getElementById("ownername"));
}

button.addEventListener(`click`, CallValidName);

// событие остановка отправки формы на сервер js ("event.preventDefault()")
// если не прошло валидация - то  форма не отправляется и выводится сообщение