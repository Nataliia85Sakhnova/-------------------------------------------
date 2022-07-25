const validPetsname = (nameField) => {
    var nameFormat = /^[a-zA-Zа-яёА-ЯЁ]+$/u;
    if (nameField.value.match(nameFormat)) {
        return true;
    } else {
        alert("Еще раз проверьте!");
        return false;
    }
}