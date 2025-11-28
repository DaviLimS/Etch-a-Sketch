let = gridSize = 16;

function createGrid(size) {
    let color;
    const container = document.querySelector('#container');

    function colorSet() {
        let r = Math.round(Math.random() * 100);
        let g = Math.round(Math.random() * 100);
        let b = Math.round(Math.random() * 100);
        color = `rgb: "${r}, ${g}, ${b}"`;
    }
    colorSet();

    container.innerHTML = '';
    container.style.setProperty('--grid-size', size)
    container.style.setProperty('--color', color)

    for (let i =0; i < size * size; i++) {
        const pixel = document.createElement('div')
        container.appendChild(pixel);
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = color;
    })
    }
}

createGrid(gridSize);