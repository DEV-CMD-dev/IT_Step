const blocksDiv = document.querySelectorAll('.blocks');


let blocks = [];

addBlock.onclick = () => {
    const block = document.createElement('div');
    block.style.backgroundColor = getRandomColor();
    block.style.width = '100px';
    block.style.height = '100px';
    blocksDiv[0].appendChild(block);
    blocks.push(block);
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

saveBtn.onclick = () => {
    const colors = blocks.map(block => block.style.backgroundColor);
    localStorage.setItem('blocks', JSON.stringify(colors));
};

loadBtn.onclick = () => {
    const colors = JSON.parse(localStorage.getItem('blocks') || '[]');
    blocksDiv[0].innerHTML = '';
    blocks = [];

    colors.forEach(color => {
        const block = document.createElement('div');
        block.style.backgroundColor = color;
        block.style.width = '100px';
        block.style.height = '100px';
        blocksDiv[0].appendChild(block);
        blocks.push(block);
    });
};
