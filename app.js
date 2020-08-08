
const controls = document.querySelectorAll('.controls input');
const options = document.querySelectorAll('.controls select');
const resetBtn = document.getElementById('reset');
const image = document.querySelector('img');

controls.forEach(control => control.addEventListener('change', updateEdit));
controls.forEach(control => control.addEventListener('mousemove', updateEdit));

options.forEach(option => option.addEventListener('change', updateEdit));

resetBtn.addEventListener('click', reset);

function updateEdit(){
    const suffix = this.dataset.suffix || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function reset(){
    controls.forEach(control => control.value = control.defaultValue)
}