let = gridSize = 16;
const container = document.querySelector('#container');
const numberInput = document.querySelector('#number-input');
const btnCreateGrid = document.querySelector('#create-grid');

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

createGrid(gridSize);