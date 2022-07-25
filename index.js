const validName = (nameField) => {
    const nameFormat = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (nameField.value.match(nameFormat)) {
        console.log(nameField.value)
        return true;
    } else {
        alert("Еще раз проверьте!");
        console.log("Валидация завалена! Иди переделывай!")
        return false;
    }
}

// сначала eventlistener, а в нем вызов
// eventlistener  - событие клика по кнопке запускает действие функции,
// которая проверяет валидацию полей формы.

// element.addEventListener("click", validName)

