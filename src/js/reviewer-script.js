document.addEventListener('DOMContentLoaded', function () {
	const reviews = [
		//Массив отзывов
		{
			name: 'Алексей Попенков',
			date: '29 августа 2025',
			rating: 5,
			text: 'Это настоящий колёсный сервис. Да дольше. Шиномонтажки тихо курят в стороне. Отдавал диск в правку, теперь остальные по сравнению с ним чуть бьют - хотя и в допуске.',
			avatar: 'АП',
		},
		{
			name: 'Сергей Афанасьев',
			date: '18 августа 2025',
			rating: 5,
			text: 'Ребята молодцы очень аккуратно, быстро и качественно работают! Знают свое дело! Консультируют, не нагибают на увеличение чека, а именно грамотно объясняют что тебе нужно, и чего не хватает, внутри бокса чистота бережное отношение, молодцы очень доволен.',
			avatar: 'СА',
		},
		{
			name: 'Константин',
			date: '7 августа 2025',
			rating: 5,
			text: 'Делали реставрацию и покраску дисков! Шиномонтаж! Индивидуальный подход! Всё на высшем уровне! Рекомендую 💯 Результат 🔥 Ребята лучшие в своём деле! Плюс есть вибростенд - это Топ!',
			avatar: 'К',
		},
		{
			name: 'Владимир Козлов',
			date: '6 июля 2025',
			rating: 5,
			text: 'Выполнили работу на 5 баллов. Очень педантичный подход и отношение к работе которую выполняют. Обратился с просьбой, без дефектов и царапин собрать шины на новые диски. Я доволен, буду приезжать еще!',
			avatar: 'ВК',
		},
		{
			name: 'Алексей Акатов',
			date: '20 декабря 2023',
			rating: 5,
			text: 'Обратился в данный сервис после неоднократных ремонтов дисков в других. Причина: после предыдущей варки дисков - диск снова лопнул именно в месте варки. И так трижды. Здесь результатом доволен, исключительное отношение и качество работы, рекомендую.',
			avatar: 'АА',
		},
	]

	const reviewCard = document.querySelector('.review-card') //Карта отзыва
	const prevBtn = document.getElementById('prevBtn') //Кнопка назад
	const nextBtn = document.getElementById('nextBtn') //Кнопка вперед
	const currentEl = document.getElementById('current') //Номер отзыва (из 5)
	const totalEl = document.getElementById('total') //Количество отзывов всего
	const dots = document.querySelectorAll('.dot') //Точки внизу отзывов

	let currentReview = 0
	let autoPlayInterval
	const AUTO_PLAY_DELAY = 15 * 1000 // Время прокрутки

	totalEl.textContent = reviews.length

	function showReview(index) {
		const review = reviews[index]

		reviewCard.innerHTML = `
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="avatar">${review.avatar}</div>
                            <div>
                                <div class="reviewer-name">${review.name}</div>
                                <div class="review-date">${review.date}</div>
                            </div>
                        </div>
                        <div class="review-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(
															review.rating
														)}
                            ${'<i class="far fa-star"></i>'.repeat(
															5 - review.rating
														)}
                        </div>
                    </div>
                    <div class="review-text">
                        ${review.text}
                    </div>
                    <div class="review-footer">
                        <div>Отзыв оставлен через 2ГИС</div>
                    </div>
                `

		currentEl.textContent = index + 1

		// Обновление dots
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === index)
		})

		// Обновление статуса кнопок
		prevBtn.disabled = index === 0
		nextBtn.disabled = index === reviews.length - 1
	}

	function goToNextReview() {
		if (currentReview < reviews.length - 1) {
			currentReview++
		} else {
			currentReview = 0 // Возврат к первому отзыву
		}
		showReview(currentReview)
	}

	function startAutoPlay() {
		if (autoPlayInterval) clearInterval(autoPlayInterval)

		autoPlayInterval = setInterval(() => {
			goToNextReview()
		}, AUTO_PLAY_DELAY)
	}

	//Прослушивание событий
	prevBtn.addEventListener('click', () => {
		if (currentReview > 0) {
			currentReview--
			showReview(currentReview)
		}
	})

	nextBtn.addEventListener('click', () => {
		goToNextReview()
	})

	//Dot навигации
	dots.forEach(dot => {
		dot.addEventListener('click', () => {
			currentReview = parseInt(dot.getAttribute('data-index'))
			showReview(currentReview)
		})
	})

	//Первоначальный просмотр и запуск автозапуска
	showReview(currentReview)
	startAutoPlay()
})
