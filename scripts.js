const textarea = document.getElementById('writingArea');
const saveButton = document.getElementById('saveButton');

textarea.addEventListener('keydown', (e) => {
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
    }
});

saveButton.addEventListener('click', () => {
    const text = textarea.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'writing.txt';
    link.click();
});
