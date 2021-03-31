const panels = document.querySelectorAll('.container__panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass();
        panel.classList.add('active');
    })
})

function removeClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}