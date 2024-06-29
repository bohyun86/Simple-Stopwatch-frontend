let intervalId = null;
let hundredths = 0, seconds = 0, minutes = 0;

document.getElementById('start').addEventListener('click', function () {
    if (intervalId) return;

    intervalId = setInterval(() => {
        hundredths++;
        if (hundredths === 100) {
            hundredths = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
        }

        document.getElementById('timer').textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(hundredths).padStart(2, '0')}`
    }, 10);
});

document.getElementById('stop').addEventListener('click', function () {

    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = null;

});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;

    hundredths = 0;
    seconds = 0;
    minutes = 0;

    document.getElementById('timer').textContent = '00:00:00';

    // Reset laps
    const lapList = document.getElementById('laps');
    if (lapList) {
        while (lapList.firstChild) {
            lapList.removeChild(lapList.firstChild);
        }
    }
});

document.getElementById('lap').addEventListener('click', function () {
    const lapTime = document.getElementById('timer').textContent;

    const lapList = document.getElementById('laps');
    if (!lapList) {
        const buttons = document.getElementById('buttons');
        const lapList = document.createElement('ul');
        lapList.id = 'laps';
        buttons.after(lapList);
    }
    const listItem = document.createElement('li');
    listItem.textContent = lapTime;
    lapList.appendChild(listItem);
});
