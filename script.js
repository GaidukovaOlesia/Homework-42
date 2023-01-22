// Реалізовуємо форму для реєстрації.
//
//     Поля:
//
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
//
//
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
const form = document.getElementById("form");
const container = document.querySelector(".container");
const button = document.getElementById("button");

form.addEventListener("submit", e => {
    e.preventDefault();
})

const fieldForTable = {
    name: "Name",
    lastName: "Last Name",
    data: "Date of birthday",
    gender: "Gender",
    city: "City",
    adress: "Adress",
    language: "Language"
}

function renderAfterClick(obj) {
    const TRs = [];
    for(let key in fieldForTable) {
        TRs.push(`<tr>
            <td>${fieldForTable[key]}</td>
            <td>${obj[key]}</td>
</tr>`)
    }
    container.innerHTML = `<table>${TRs.join("")}</table>`
}


button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("last-name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector(`input[name="rad"]:checked`).value;
    const city = document.getElementById("city").value;
    const adress = document.getElementById("adress").value;
    const language = document.querySelectorAll(`input[name="check"]:checked`);

    const obj = {
        name: name,
        lastName: lastName,
        data: date,
        gender: gender,
        city: city,
        adress: adress,
        language: [],
    }

    language.forEach(el => {
        obj.language.push(el.value);
    })
    renderAfterClick(obj);
})