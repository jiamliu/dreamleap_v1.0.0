document.addEventListener('DOMContentLoaded', function() {
    const speedSlider = document.getElementById('speed');
    const speedValueDisplay = document.getElementById('speedValue');
    const sheep = document.getElementById('sheep');

    speedSlider.addEventListener('input', function() {
        const speed = this.value;
        sheep.style.animationDuration = `${10 / speed}s`;
        speedValueDisplay.textContent = speed;
    });
});
