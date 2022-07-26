const ValidName = (nameField) => {
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
    ValidNamedocument.getElementById("petsname");
    ValidNamedocument.getElementById("ownername");
}




