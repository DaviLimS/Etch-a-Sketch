let = gridSize = 16;

function createGrid(size) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)

    for (let i =0; i < size * size; i++) {
        const pixel = document.createElement('div')
        container.appendChild(pixel);
        pixel.classList.add('pixel');
    }
    
}

createGrid(gridSize);