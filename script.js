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

let hasWin = false;

let xSimbol = '×';
let oSimbol = '○';

reload.onclick = () => {
    location.reload();
    return false;
}

let doing = function (e) {
        if (!e.target.classList.contains('cell')) return;
    if (e.target.innerHTML) {
        return;
    } else {
        hod++;
    }
    if (hod %= 2) {
        e.target.innerHTML = xSimbol;
    }
    else {
        e.target.innerHTML = oSimbol;
    }
    if (cells[0].innerHTML == oSimbol &
        cells[1].innerHTML == oSimbol &
        cells[2].innerHTML == oSimbol
    ) {
        winO();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == oSimbol &
        cells[4].innerHTML == oSimbol &
        cells[5].innerHTML == oSimbol
    ) {
        winO();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == oSimbol &
        cells[7].innerHTML == oSimbol &
        cells[8].innerHTML == oSimbol
    ) {
        winO();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == oSimbol &
        cells[4].innerHTML == oSimbol &
        cells[8].innerHTML == oSimbol
    ) {
        winO();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == oSimbol &
        cells[4].innerHTML == oSimbol &
        cells[6].innerHTML == oSimbol
    ) {
        winO();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == oSimbol &
        cells[3].innerHTML == oSimbol &
        cells[6].innerHTML == oSimbol
    ) {
        winO();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == oSimbol &
        cells[4].innerHTML == oSimbol &
        cells[7].innerHTML == oSimbol
    ) {
        winO();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == oSimbol &
        cells[5].innerHTML == oSimbol &
        cells[8].innerHTML == oSimbol
    ) {
        winO();
        wPs[5].style.display = 'block';
    };




    if (cells[0].innerHTML == xSimbol &
        cells[1].innerHTML == xSimbol &
        cells[2].innerHTML == xSimbol
    ) {
        winX();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == xSimbol &
        cells[4].innerHTML == xSimbol &
        cells[5].innerHTML == xSimbol
    ) {
        winX();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == xSimbol &
        cells[7].innerHTML == xSimbol &
        cells[8].innerHTML == xSimbol
    ) {
        winX();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == xSimbol &
        cells[4].innerHTML == xSimbol &
        cells[8].innerHTML == xSimbol
    ) {
        winX();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == xSimbol &
        cells[4].innerHTML == xSimbol &
        cells[6].innerHTML == xSimbol
    ) {
        winX();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == xSimbol &
        cells[3].innerHTML == xSimbol &
        cells[6].innerHTML == xSimbol
    ) {
        winX();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == xSimbol &
        cells[4].innerHTML == xSimbol &
        cells[7].innerHTML == xSimbol
    ) {
        winX();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == xSimbol &
        cells[5].innerHTML == xSimbol &
        cells[8].innerHTML == xSimbol
    ) {
        winX();
        wPs[5].style.display = 'block';
    }
    // if (
    //     (cells[0].innerHTML == xSimbol || cells[0].innerHTML == oSimbol) &
    //     (cells[1].innerHTML == xSimbol || cells[1].innerHTML == oSimbol) &
    //     (cells[2].innerHTML == xSimbol || cells[2].innerHTML == oSimbol) &
    //     (cells[3].innerHTML == xSimbol || cells[3].innerHTML == oSimbol) &
    //     (cells[4].innerHTML == xSimbol || cells[4].innerHTML == oSimbol) &
    //     (cells[5].innerHTML == xSimbol || cells[5].innerHTML == oSimbol) &
    //     (cells[6].innerHTML == xSimbol || cells[6].innerHTML == oSimbol) &
    //     (cells[7].innerHTML == xSimbol || cells[7].innerHTML == oSimbol) &
    //     (cells[8].innerHTML == xSimbol || cells[8].innerHTML == oSimbol)
    // )
    if (
        cells[0].innerHTML && cells[1].innerHTML && cells[2].innerHTML &&
        cells[3].innerHTML && cells[4].innerHTML && cells[5].innerHTML &&
        cells[6].innerHTML && cells[7].innerHTML && cells[8].innerHTML && !hasWin
    ) {
        winAlert.style.display = "block";
        winAlert.innerHTML = 'Ничья!';

    };
}
window.addEventListener('click', doing);

let xx = document.getElementById("xx");

let oo = document.getElementById("oo");

winAlert.style.display = "none";
xx.style.display = "none";
oo.style.display = "none";

function winX() {
    hasWin = true;
    setTimeout(() => {
        winAlert.style.display = "flex";
        xx.style.display = "inline";
    }, 50);
    window.removeEventListener('click', doing);
    window.removeEventListener('touchstart', doing);
    window.removeEventListener('touchend', doing);
}
function winO() {
    hasWin = true;
    setTimeout(() => {
        winAlert.style.display = "flex";
        oo.style.display = "inline";
    }, 50);
    window.removeEventListener('click', doing);
    window.removeEventListener('touchstart', doing);
    window.removeEventListener('touchend', doing);
}
window.addEventListener('touchend', doing);
window.addEventListener('touchstart', doing);
