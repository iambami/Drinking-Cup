const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const persentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highLightCups(idx))

})

function highLightCups(idx) {
    console.log(idx)
}