let = gridSize = 16;

function createGrid(size) {
}

function createColorful(size) {
    const container = document.querySelector('#container');

    function colorSet() {
        let r = Math.round(Math.random() * 256);
        let g = Math.round(Math.random() * 256);
        let b = Math.round(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)

    for (let i =0; i < size * size; i++) {
        const pixel = document.createElement('div')
        container.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = colorSet();
        })
    }
}

createGrid(gridSize);