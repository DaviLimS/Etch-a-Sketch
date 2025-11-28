let = gridSize = 16;

function createGrid(size) {
    let color;
    const container = document.querySelector('#container');

    function colorSet() {
        color = `${Math.round(Math.random() * 100)}, ${Math.round(Math.random() * 100)}, ${Math.round(Math.random() * 100)}`;
    }
    colorSet();

    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)
    container.style.setProperty('--color', color)

    for (let i =0; i < size * size; i++) {
        const pixel = document.createElement('div')
        container.appendChild(pixel);
        pixel.classList.add('pixel');
    }
}

createGrid(gridSize);