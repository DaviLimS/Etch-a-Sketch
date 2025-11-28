let = gridSize;
const container = document.querySelector('#container');
const form = document.querySelector('#control-form');
const numberInput = document.querySelector('#number-input');
const btnCreateGrid = document.querySelector('#create-grid');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    createGrid(numberInput.value)
});

function createGrid(size) {
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)

    for(let i = 0; i < Math.pow(size, 2); i++) {
        const pixel = document.createElement('div');
        container.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'black';
        })
    }
}

function createColorful(size) {
    function colorSet() {
        let r = Math.round(Math.random() * 256);
        let g = Math.round(Math.random() * 256);
        let b = Math.round(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)

    for (let i =0; i < Math.pow(size, 2); i++) {
        const pixel = document.createElement('div')
        container.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = colorSet();
        })
    }
}