/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров

//Отзывы
if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 20,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				spaceBetween: 13,
			},
			479.98: {
				slidesPerView: 1.8,
				spaceBetween: 13,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			991.98: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
}

//Товары
document.querySelectorAll('.products').forEach(n => {
	const productsSlider = new Swiper(n.querySelector('.products-slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 10,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.products-arrow-prev'),
			nextEl: n.querySelector('.products-arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			1100: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
		},
	});
});

document.querySelectorAll('.filter__products').forEach(n => {
	const productsSlider = new Swiper(n.querySelector('.products-image-slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 800,

		// Пагинация
		pagination: {
			el: n.querySelector('.products-image-slider-pagination'),
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.products-image-slider-arrow-prev'),
			nextEl: n.querySelector('.products-image-slider-arrow-next'),
		},
	});
});

//С этим товаром используют
document.querySelectorAll('.used-products').forEach(n => {
	const productsUsedSlider = new Swiper(n.querySelector('.used-products-slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 10,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.used-products-arrow-prev'),
			nextEl: n.querySelector('.used-products-arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			991.98: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
		},
	});
});

//Продукты картинки
document.querySelectorAll('.cabin-types__column').forEach(n => {
	const thumbsSwiper = new Swiper(n.querySelector('.cabin-types__thumb'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 8,
		spaceBetween: 20,
		speed: 400,
		preloadImages: true,
		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			479.98: {
				slidesPerView: 7,
				spaceBetween: 10,
			},
			767.98: {
				slidesPerView: 6,
			},
			991.98: {
				slidesPerView: 6,
			},
			1100: {
				slidesPerView: 8,
			},
		},
	});
	const productsImageSlider = new Swiper(n.querySelector('.products-image-slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 800,

		// Пагинация
		pagination: {
			el: n.querySelector('.products-image-slider-pagination'),
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.products-image-slider-arrow-prev'),
			nextEl: n.querySelector('.products-image-slider-arrow-next'),
		},
	});
});

//Документы
if (document.querySelector('.documents__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.documents__slider', { // Указываем скласс нужного слайдера
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 10,
		speed: 800,

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 10,
			},
			479.98: {
				slidesPerView: 2.5,
				spaceBetween: 10,
			},
			767.98: {
				slidesPerView: 4.5,
				spaceBetween: 10,
			},
			1100: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
	});
}

//Электрические щитки
if (document.querySelector('.electrical-panels-card__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.electrical-panels-card__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.electrical-panels-card__arrow-prev',
			nextEl: '.electrical-panels-card__arrow-next',
		},

		// Пагинация
		pagination: {
			el: '.electrical-panels-card__pagination',
			clickable: true,
		},

	});
}

//Цвет фильтр
let colorSliderInstance = null;

function initColorSlider() {
	// Уничтожаем предыдущий экземпляр Swiper
	if (colorSliderInstance) {
		colorSliderInstance.destroy();
		colorSliderInstance = null;
	}

	const activeSlider = document.querySelector('.color-slider.swiper:not(._hide)');
	if (!activeSlider) return;

	// Находим стрелки внутри .filter-configurator
	const prevEl = document.querySelector('.filter-configurator__arrow-prev');
	const nextEl = document.querySelector('.filter-configurator__arrow-next');

	// Создаём новый экземпляр Swiper только на активном слайдере
	colorSliderInstance = new Swiper(activeSlider, {
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 5,
		speed: 400,

		navigation: {
			prevEl: prevEl,
			nextEl: nextEl,
		},
	});
}

let optionsTypes = document.querySelectorAll('.options-type');
if (optionsTypes) {
	optionsTypes.forEach(radio => {
		radio.addEventListener('change', function () {
			const selectedType = this.getAttribute('data-type');

			// Скрыть все слайдеры
			document.querySelectorAll('.color-slider.swiper').forEach(slider => {
				slider.classList.add('_hide');
			});

			// Показать нужный
			const targetSlider = document.querySelector(`.color-slider.swiper[data-type="${selectedType}"]`);
			if (targetSlider) {
				targetSlider.classList.remove('_hide');
			}

			// Пересоздать Swiper
			initColorSlider();
		});
	});
}

window.addEventListener('DOMContentLoaded', () => {
	const firstChecked = document.querySelector('.options-type:checked');
	if (firstChecked) {
		firstChecked.dispatchEvent(new Event('change'));
	}
});