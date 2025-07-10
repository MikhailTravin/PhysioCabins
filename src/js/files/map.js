//Яндекс карта
const map = document.querySelector('#map');

if (map) {
	ymaps.ready(init);

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [55.699781, 37.619423],
			zoom: 8,
			controls: ['zoomControl'],
			behaviors: ['drag']
		}, {
			searchControlProvider: 'yandex#search'
		});
		
		myMap.geoObjects
			.add(new ymaps.Placemark([55.694843, 37.435023], {
				iconCaption: 'Очень длиннный, но невероятно интересный текст',
				iconColor: '#0c8ce9',
				iconImageSize: [105, 140],
				iconImageOffset: [-57, -137],
			}))
			.add(new ymaps.Placemark([55.831903, 37.411961], {
				iconCaption: 'Очень длиннный, но невероятно интересный текст',
				iconColor: '#0c8ce9',
				iconImageSize: [105, 140],
				iconImageOffset: [-57, -137],
			}))
			.add(new ymaps.Placemark([55.763338, 37.565466], {
				iconCaption: 'Очень длиннный, но невероятно интересный текст',
				iconColor: '#0c8ce9',
				iconImageSize: [105, 140],
				iconImageOffset: [-57, -137],
			}))
			.add(new ymaps.Placemark([55.763338, 37.565466], {
				iconCaption: 'Очень длиннный, но невероятно интересный текст',
				iconColor: '#0c8ce9',
				iconImageSize: [105, 140],
				iconImageOffset: [-57, -137],
			}))
			.add(new ymaps.Placemark([55.744522, 37.616378], {
				iconCaption: 'Очень длиннный, но невероятно интересный текст',
				iconColor: '#0c8ce9',
				iconImageSize: [105, 140],
				iconImageOffset: [-57, -137],
			}))

	};
}