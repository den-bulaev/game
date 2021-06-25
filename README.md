[DEMO](https://den-bulaev.github.io/game/)

[DESIGN](https://www.figma.com/file/rRiodUBWSBHXdHYyuqF1z7/test?node-id=0%3A1)

//

# Тестовое задание SweetSoft (frontend)
Необходимо разработать мини-игру "Кубики". Задача пользователя - выбрать все кубики одинакового цвета за минимальное количество времени.

## Скрипт приложения
* Пользователь заходит в веб-приложение, вводит свое имя.
* Перед ним появляется окно в котором в хедере располагается логотип (Cube), таймер.
* В основной части экрана располагается информация о его имени, его лучшее время игры, кнопка начать.
* При нажатии на кнопку начать - запускается таймер игры, в верхней части экрана появляется кнопка перемешать (при нажатии на которую таймер сбрасывается и запускается по новой, кубики перемешиваются) и кнопка завершить (результат не засчитывается, таймер сбрасывается).
* В основной части экрана контент меняется на поле 5х5 с кубиками одинаковой ширины и высоты но различного цвета (всего 5). 
* **Обязательное условие**, минимальное кол-во кубиков одного и того же цвета - 2, при генерации кубиков необходимо чтобы использовались все 5 цветов (Т.е. при генерации кубиков обязательно должны быть минимум 2 кубика каждого цвета). При выборе необходимо учитывать что нельзя оставить только один кубик одного цвета (обязательно минимум 2), так как при повторной попытке будет ошибка.  Также ниже поля располагается кнопка проверить которая изначально заблокирована. 
* При клике на кубик он выделяется каким-либо цветом. Задача пользователя - выбирать кубики одинакового цвета, нажимать кнопку "проверить", если они действительно одного цвета - удалять их из поля.
* Валидация кнопки "Проверить" - заблокирована изначально, при выборе минимум 2х кубиков любого цвета - разблокирована. При корректном выборе кубиков одного цвета - текст меняется на - "Успешно" и заливка зеленая, при некорректном выборе - "Ошибка", заливка красная
* Как только все кубики выбраны из поля корректно - игра завершается на экране выводится информация о том сколько времени человек потратил на игру.
* Лучший результат за все время пользователя должен где-либо храниться и быть доступен при повторном входе на сайт.
* Бонус. Если в процессе игры пользователь закрыл вкладку браузера с игрой - игра ставится на паузу и при повторном входе у пользоветеля есть возможность продолжить игру.

 ## Макеты
 Макет доступен в [Фигме](https://www.figma.com/file/rRiodUBWSBHXdHYyuqF1z7/test?node-id=0%3A1).<br>
 Игра должна поддерживаться устройствами с разрешением от 320 до 992px ширины.<br>
  На десктопе выводить просто мобильный экран, пустое место просто залить цветом.<br>
 
 ## Ассеты
 В этом репозитории находятся svg изображения которые вам будут необходимы, все необходимые данные замокать.
 
 ## Стек
 Typescript<br>
 Любое удобное решение для вас<br>
 
 ## Деплой
 Проект должен быть залит на любой удобный сервис (github pages, heroku, etc)
 
 ## Оценка работы
 Во внимание будет принято помимо результата и качества кода
 * Структура проекта
 * Работа со статической типизацией
 * Именование веток и коммитов
 * Наличие комментариев в коде
 * Покрытие тестами
 
 ## Контакты 
 По всем вопросам писать сюда [@cevcode](https://t.me/cevcode)
