let menu = document.querySelectorAll('li'),
    warp = document.querySelector('ul'),
    li = document.createElement('li'),
    adv = document.querySelector(".adv"),
    answer = document.getElementById("prompt"),
    changeText = document.getElementById("title");

warp.insertBefore(menu[2], menu[1]); // Востанавливаю порядок в меню
li.classList.add("menu-item"); //Добавляю клас эдементу li
warp.appendChild(li); //Добавляю пятый пункт
li.textContent = "Пятый пункт"; // Довляю в него текст
document.body.style.backgroundImage = "url(./img/apple_true.jpg)"; // меняю фоновую картинку
changeText.textContent = "Мы продаем только подлинную технику Apple"; //меняю текст заголовка
adv.remove(); //удаляю рекламу
answer.textContent = prompt("Как вы относитесь к технике Apple"); //задаю вопрос и вписываю его в поле