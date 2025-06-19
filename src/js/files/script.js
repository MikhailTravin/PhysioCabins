function indents() {
    const header = document.querySelector('.header');
    const page = document.querySelector('.page');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));

    page.style.paddingTop = hHeader + 'px';

    //выпадающее меню
    const menuBody = document.querySelector('.menu__body');
    if (document.documentElement.clientWidth < 991.98) {
        menuBody.style.top = hHeader + 'px';
        menuBody.style.minHeight = `calc(100vh - ${hHeader}px)`;
        menuBody.style.height = `calc(100vh - ${hHeader}px)`;
    } else {
        menuBody.style.top = '0px';
        menuBody.style.minHeight = 'auto';
        menuBody.style.height = 'auto';
    }
}

window.addEventListener('scroll', () => {
    indents();
});

window.addEventListener('resize', () => {
    indents();
});

window.addEventListener('load', () => {
    indents();
});

indents();

//========================================================================================================================================================

//Фильтр 

const filters = '.filter';
if (filters) {
    const buttonsSelector = `${filters} .filter__navigation`;
    const buttonSelector = `${buttonsSelector} [data-filter]`;
    const buttonActiveClass = '_active';

    const itemsSelector = `${filters} .filter-content`;
    const itemSelector = `${itemsSelector} .filter-column`;
    const itemHiddenClass = '_hide';
    const itemFilterClassPrefix = 'filter__column_';

    if (buttonsSelector) {

        document.querySelectorAll(buttonSelector).forEach(n => {
            n.addEventListener('click', onFilterButtonClick);
        });

        function onFilterButtonClick({ currentTarget: { dataset: { filter } } }) {
            const activeItemClass = itemFilterClassPrefix + filter;

            this.closest(buttonsSelector).querySelectorAll(buttonSelector).forEach(n => {
                n.classList.toggle(buttonActiveClass, n === this);
            });

            this.closest(filters).querySelectorAll(itemSelector).forEach(({ classList: cl }) => {
                cl.toggle(itemHiddenClass, filter !== 'all' && !cl.contains(activeItemClass));
            })

        }
    }

};

//========================================================================================================================================================

//Прикрепить фото

let input = document.querySelector('input[type="file"]');

if (input) {
    // Блок предпросмотра
    const preview = document.querySelector('.form-popup__previews');
    // Список файлов
    const fileList = [];

    // Вешаем функцию onChange на событие change у <input>
    input.addEventListener('change', onChange);

    function onChange() {
        // По каждому файлу <input>
        [...input.files].forEach(file => {
            // Создаём читателя
            const reader = new FileReader;
            // Вешаем событие на читателя
            reader.addEventListener('loadend', () => {
                // Элемент списка .preview
                const item = document.createElement('div');
                item.classList.add('form-popup__preview');
                // Картинка для предпросмотра
                const image = new Image;
                // URI картинки
                image.src = `data:${file.type};base64,${btoa(reader.result)}`;
                // Ссылка на исключение картинки из списка выгрузки
                const remove = document.createElement('div');
                remove.classList.add('form-popup__preview-close');
                remove.classList.add('_icon-close');
                // Элемент массива fileList
                const fileItem = {
                    name: file.name,
                    modified: file.lastModified,
                    size: file.size,
                    data: reader.result
                };
                // Добавляем элемент в список выгрузки
                fileList.push(fileItem);
                // Обработчик клика по ссылке исключения картинки
                remove.addEventListener('click', () => {
                    // Исключаем элемент с картинкой из списка выгрузки
                    fileList.splice(fileList.indexOf(fileItem), 1);
                    // Удаляем элемент списка (<li>) из <ul> 
                    item.classList.add('removing');
                    setTimeout(() => item.remove(), 100);
                });
                item.appendChild(remove);
                item.appendChild(image);
                preview.appendChild(item);
            });
            // Запускаем чтение файла
            reader.readAsBinaryString(file);
        });
        // Сбрасываем значение <input>
        input.value = '';
        // Создаем клон <input>
        const newInput = input.cloneNode(true);
        // Заменяем <input> клоном
        input.replaceWith(newInput);
        // Теперь input будет указывать на клона
        input = newInput;
        // Повесим функцию onChange на событие change у нового <input>
        input.addEventListener('change', onChange);
    }
}

//========================================================================================================================================================

const quizzes = document.querySelectorAll(".quiz__questions");

if (quizzes) {
    quizzes.forEach(quiz => {
        const steps = quiz.querySelectorAll(".quiz__question");
        let index = 0; // Индекс для текущего блока

        show(steps[index]); // Показываем первый шаг

        const buttonPrevSteps = quiz.querySelectorAll('.quiz__arrow-prev');
        const buttonNextSteps = quiz.querySelectorAll('.quiz__arrow-next');

        // Шаги вперед
        buttonNextSteps.forEach(buttonNextStep => {
            buttonNextStep.addEventListener("click", function () {
                hide(steps[index]);
                index++; // Переход к следующему шагу

                if (index >= steps.length) {
                    index = steps.length - 1; // Ограничиваем максимальный индекс
                }

                show(steps[index]);
            });
        });

        // Шаги назад
        buttonPrevSteps.forEach(buttonPrevStep => {
            buttonPrevStep.addEventListener("click", function () {
                hide(steps[index]);
                index--; // Переход к предыдущему шагу

                if (index < 0) {
                    index = 0; // Ограничиваем минимальный индекс
                }

                show(steps[index]);
            });
        });

        // Функция для показа шага
        function show(el) {
            if (el) el.classList.add("_active");
        }

        // Функция для скрытия шага
        function hide(el) {
            if (el) el.classList.remove("_active");
        }
    });
}

//========================================================================================================================================================

const buttonsConfigurator = document.querySelectorAll('.filter-configurator__nav-title');
if (buttonsConfigurator) {
    const columns = document.querySelectorAll('.filter-configurator__column');

    let activeId = document.querySelector('.filter-configurator__nav-title._active')?.getAttribute('data-id');

    // Функция для обновления видимости колонок
    function handleColumnVisibility() {
        const screenWidth = window.innerWidth;

        columns.forEach(column => {
            const columnId = column.getAttribute('data-id');

            if (screenWidth <= 991.98) {
                if (columnId === activeId) {
                    column.classList.remove('_hide');
                } else {
                    column.classList.add('_hide');
                }
            } else {
                column.classList.remove('_hide');
            }
        });
    }

    // Обработчик клика по кнопкам
    buttonsConfigurator.forEach(button => {
        button.addEventListener('click', function () {
            // Убираем _active со всех кнопок
            buttonsConfigurator.forEach(btn => btn.classList.remove('_active'));

            // Добавляем _active на текущую кнопку
            this.classList.add('_active');

            // Обновляем activeId
            activeId = this.getAttribute('data-id');

            // Обновляем отображение блоков
            handleColumnVisibility();
        });
    });

    // Отслеживаем изменение размера экрана
    window.addEventListener('resize', handleColumnVisibility);

    // Инициализация при загрузке страницы
    handleColumnVisibility();
}

let optionInputs = document.querySelectorAll('.options__input');
if (optionInputs) {
    optionInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (this.checked) {
                const imagePath = this.getAttribute('data-image');
                const imageElement = document.querySelector('.configurator__image img');

                if (imagePath && imageElement) {
                    imageElement.src = imagePath;
                }
            }
        });
    });
};

let optionsTypes = document.querySelectorAll('.options-type');
if (optionsTypes) {
    optionsTypes.forEach(radio => {
        radio.addEventListener('change', function () {
            const selectedType = this.getAttribute('data-type');

            // Перебираем все .swiper-wrapper внутри .color-slider
            document.querySelectorAll('.color-slider .swiper-wrapper').forEach(wrapper => {
                const wrapperType = wrapper.getAttribute('data-type');

                if (wrapperType == selectedType) {
                    wrapper.classList.remove('_hide');
                } else {
                    wrapper.classList.add('_hide');
                }
            });
            
        });
    });
}
