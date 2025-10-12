// Шиномонтаж
const radiusTire1 = document.getElementById('radius-tire-1')
const priceTire1 = document.getElementById('price-tire-1')
radiusTire1.addEventListener('change', () => {
	priceTire1.textContent = radiusTire1.value
})

const radiusTire2 = document.getElementById('radius-tire-2')
const priceTire2 = document.getElementById('price-tire-2')
radiusTire2.addEventListener('change', () => {
	priceTire2.textContent = radiusTire2.value
})

//Реставрация
const radiusTire4 = document.getElementById('radius-tire-4')
const priceTire4 = document.getElementById('price-tire-4')
radiusTire4.addEventListener('change', () => {
	priceTire4.textContent = radiusTire4.value
})
