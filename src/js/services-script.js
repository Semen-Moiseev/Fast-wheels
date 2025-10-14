const prices = {
	standard: {
		R13: 3600,
		R14: 3600,
		R15: 4400,
		R16: 4400,
		R17: 5600,
		R18: 5600,
		R19: 6200,
		R20: 6200,
		R21: 7200,
		R22: 7800,
		R23: 8800,
		R24: 9400,
		R25: 10200,
	},
	comfort: {
		R13: 5200,
		R14: 5200,
		R15: 5800,
		R16: 5800,
		R17: 7200,
		R18: 7200,
		R19: 7800,
		R20: 7800,
		R21: 8800,
		R22: 9400,
		R23: 10400,
		R24: 11000,
		R25: 12000,
	},
	painting: {
		R13: 7500,
		R14: 7500,
		R15: 7500,
		R16: 7500,
		R17: 12000,
		R18: 14000,
		R19: 16000,
		R20: 19000,
		R21: 22000,
		R22: 25000,
		R23: 30000,
		R24: 30000,
		R25: 30000,
	},
}

const select = document.getElementById('radius')
const cards = document.querySelectorAll('.card')

select.addEventListener('change', () => {
	const selectedRadius = select.value

	cards.forEach(card => {
		const type = card.dataset.type
		if (!type) return

		const price = prices[type][selectedRadius]
		if (price) {
			card.querySelector('.price span').textContent = price
		}
	})
})
