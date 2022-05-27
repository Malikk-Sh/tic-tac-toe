let game = document.getElementById('game');

let cell = '<div class="cell"></div>';

for (let i = 0; i < 9; i++) {
    game.innerHTML += cell;
};

let hod = 2;

let cells = document.getElementsByClassName('cell');

let wPs = document.querySelectorAll('.pos');

let winAlert = document.querySelector('.win-alert');

let reload = document.querySelector('.reload');

let hasWin = false

reload.onclick = () => {
    location.reload();
    return false
}

let doing = function (e) {
    if (!e.target.classList.contains('cell')) return;
    if (e.target.innerHTML) {
        return;
    } else {
        hod++;
    }
    // console.log(e.target);
    if (hod %= 2) {
        e.target.innerHTML = 'x';
    }
    else {
        e.target.innerHTML = 'o';
    }
    if (cells[0].innerHTML == 'o' &
        cells[1].innerHTML == 'o' &
        cells[2].innerHTML == 'o'
    ) {
        winO();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == 'o' &
        cells[4].innerHTML == 'o' &
        cells[5].innerHTML == 'o'
    ) {
        winO();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == 'o' &
        cells[7].innerHTML == 'o' &
        cells[8].innerHTML == 'o'
    ) {
        winO();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == 'o' &
        cells[4].innerHTML == 'o' &
        cells[8].innerHTML == 'o'
    ) {
        winO();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == 'o' &
        cells[4].innerHTML == 'o' &
        cells[6].innerHTML == 'o'
    ) {
        winO();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == 'o' &
        cells[3].innerHTML == 'o' &
        cells[6].innerHTML == 'o'
    ) {
        winO();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == 'o' &
        cells[4].innerHTML == 'o' &
        cells[7].innerHTML == 'o'
    ) {
        winO();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == 'o' &
        cells[5].innerHTML == 'o' &
        cells[8].innerHTML == 'o'
    ) {
        winO();
        wPs[5].style.display = 'block';
    };




    if (cells[0].innerHTML == 'x' &
        cells[1].innerHTML == 'x' &
        cells[2].innerHTML == 'x'
    ) {
        winX();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == 'x' &
        cells[4].innerHTML == 'x' &
        cells[5].innerHTML == 'x'
    ) {
        winX();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == 'x' &
        cells[7].innerHTML == 'x' &
        cells[8].innerHTML == 'x'
    ) {
        winX();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == 'x' &
        cells[4].innerHTML == 'x' &
        cells[8].innerHTML == 'x'
    ) {
        winX();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == 'x' &
        cells[4].innerHTML == 'x' &
        cells[6].innerHTML == 'x'
    ) {
        winX();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == 'x' &
        cells[3].innerHTML == 'x' &
        cells[6].innerHTML == 'x'
    ) {
        winX();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == 'x' &
        cells[4].innerHTML == 'x' &
        cells[7].innerHTML == 'x'
    ) {
        winX();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == 'x' &
        cells[5].innerHTML == 'x' &
        cells[8].innerHTML == 'x'
    ) {
        winX();
        wPs[5].style.display = 'block';
    } else if (
        (cells[0].innerHTML == 'x' || cells[0].innerHTML == 'o') &
        (cells[1].innerHTML == 'x' || cells[1].innerHTML == 'o') &
        (cells[2].innerHTML == 'x' || cells[2].innerHTML == 'o') &
        (cells[3].innerHTML == 'x' || cells[3].innerHTML == 'o') &
        (cells[4].innerHTML == 'x' || cells[4].innerHTML == 'o') &
        (cells[5].innerHTML == 'x' || cells[5].innerHTML == 'o') &
        (cells[6].innerHTML == 'x' || cells[6].innerHTML == 'o') &
        (cells[7].innerHTML == 'x' || cells[7].innerHTML == 'o') &
        (cells[8].innerHTML == 'x' || cells[8].innerHTML == 'o')
    ) {
        if (!hasWin) {
            winAlert.style.display = "block"
            winAlert.innerHTML = 'Ничья!';
        }
    };
}
window.addEventListener('click', doing);

let xx = document.getElementById("xx");

let oo = document.getElementById("oo");

winAlert.style.display = "none";
xx.style.display = "none";
oo.style.display = "none";

function winX() {
    hasWin = true
    setTimeout(() => {
        winAlert.style.display = "block";
        xx.style.display = "inline"
    }, 50);
    window.removeEventListener('click', doing);
    window.removeEventListener('touchstart', doing);
    window.removeEventListener('touchend', doing);
}
function winO() {
    hasWin = true
    setTimeout(() => {
        winAlert.style.display = "block";
        oo.style.display = "inline";
    }, 50);
    window.removeEventListener('click', doing);
    window.removeEventListener('touchstart', doing);
    window.removeEventListener('touchend', doing);
}
window.addEventListener('touchend', doing);
window.addEventListener('touchstart', doing);
