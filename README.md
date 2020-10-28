# Запуск
npm run serve


## Требуется:

Создать интернет-магазин-пиццерию

## Приложение должно включать:
- Страница №1 - каталог [x]
- Страница №2 - корзина (страница заказа) [x]

### Страница №1 должна включать:

- Карточки товара
- Фильтрацию 

### Страница №2 должна включать:

- Карточки товара, добавленные в корзину [x]
- Кнопку заказа [x]

#### Привила визуализации:

Если корзина пуста, должно появляться информационное сообщение об этом [x]

В корзине должна быть показана общая стоимость, которая пересчитывается реактивно, после удаления товаров из корзины [x]

### Карточка товара должна включать:

- Изображение товара [x]
- Иконку добавления или удаления товара из корзины [x]
- Стоимость [x]
- Список ингредиентов [x]

### Элементы фильтрации должны включать
- поиск товаров [x]
- фильтрация по стоимости ( от дешёвых к дорогим \ от дорогих к дешёвым ) [x]


### Требованию к стеку технологий
#### Front-end:
 - [VUE JS](https://vuejs.org/v2/guide/) [x]
 - [VUE-ROUTER](https://router.vuejs.org/) [x]
 - [VUEX](https://vuex.vuejs.org/ru/guide/) [x]
 - [SCSS](https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B0%D0%B9%D0%B4-%D0%BF%D0%BE-scss-sass-b09ae0c87afe) [sass]

Требуется также реализовать элементы адаптивной вёрстки []

#### Back-end:
Реализация бэка не обязательна, но желательна. [x]

Можно обойтись простейшими вариантам, например хранить JSON - файл в рядом с компонентами и импортировать его для визуализации товаров [-]


### Общие советы

- Адаптивную сетку реализовать тем проще, чем проще интерфейс десктопа, не стоит усложнять []

- Для сетки можно использовать bootstap, однако настоятельно рекомендую обойтись без фреймфорков и сделать всё на flex-box или css-grid [x]

- Дизайн должен соответствовать тематике приложения [x]

- После отправки заказа (если бэкэнд не реализован) можно вывести в консоль информационное сообщение [x]

- Было бы интересно добавить в проект систему скидок ( включение скидочной стоимости в карточку товара и вывод общей скидки в корзине ) [x]

- Было бы желательно регулярно делать коммиты в репозиторий и давать им осмысленные имена [x]
