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

 let doing = function(e) {
    if (!e.target.classList.contains('cell')) return;
    if (e.target.innerHTML) {
        return;
    } else {
        hod++;
    }
    // console.log(e.target);
    if (hod %= 2) {
        e.target.innerHTML = '×';
    }
    else {
        e.target.innerHTML = '○';
    }
    if (cells[0].innerHTML == '○' &
        cells[1].innerHTML == '○' &
        cells[2].innerHTML == '○'
    ) {
        winO();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == '○' &
        cells[4].innerHTML == '○' &
        cells[5].innerHTML == '○'
    ) {
        winO();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == '○' &
        cells[7].innerHTML == '○' &
        cells[8].innerHTML == '○'
    ) {
        winO();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == '○' &
        cells[4].innerHTML == '○' &
        cells[8].innerHTML == '○'
    ) {
        winO();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == '○' &
        cells[4].innerHTML == '○' &
        cells[6].innerHTML == '○'
    ) {
        winO();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == '○' &
        cells[3].innerHTML == '○' &
        cells[6].innerHTML == '○'
    ) {
        winO();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == '○' &
        cells[4].innerHTML == '○' &
        cells[7].innerHTML == '○'
    ) {
        winO();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == '○' &
        cells[5].innerHTML == '○' &
        cells[8].innerHTML == '○'
    ) {
        winO();
        wPs[5].style.display = 'block';
    };




    if (cells[0].innerHTML == '×' &
        cells[1].innerHTML == '×' &
        cells[2].innerHTML == '×'
    ) {
        winX();
        wPs[0].style.display = 'block';
    };
    if (cells[3].innerHTML == '×' &
        cells[4].innerHTML == '×' &
        cells[5].innerHTML == '×'
    ) {
        winX();
        wPs[1].style.display = 'block';
    };
    if (cells[6].innerHTML == '×' &
        cells[7].innerHTML == '×' &
        cells[8].innerHTML == '×'
    ) {
        winX();
        wPs[2].style.display = 'block';
    };
    if (cells[0].innerHTML == '×' &
        cells[4].innerHTML == '×' &
        cells[8].innerHTML == '×'
    ) {
        winX();
        wPs[7].style.display = 'block';
    };
    if (cells[2].innerHTML == '×' &
        cells[4].innerHTML == '×' &
        cells[6].innerHTML == '×'
    ) {
        winX();
        wPs[6].style.display = 'block';
    };
    if (cells[0].innerHTML == '×' &
        cells[3].innerHTML == '×' &
        cells[6].innerHTML == '×'
    ) {
        winX();
        wPs[3].style.display = 'block';
    };
    if (cells[1].innerHTML == '×' &
        cells[4].innerHTML == '×' &
        cells[7].innerHTML == '×'
    ) {
        winX();
        wPs[4].style.display = 'block';
    };
    if (cells[2].innerHTML == '×' &
        cells[5].innerHTML == '×' &
        cells[8].innerHTML == '×'
    ) {
        winX();
        wPs[5].style.display = 'block';
    } else if (
        (cells[0].innerHTML == '×' || cells[0].innerHTML == '○') &
        (cells[1].innerHTML == '×' || cells[1].innerHTML == '○') &
        (cells[2].innerHTML == '×' || cells[2].innerHTML == '○') &
        (cells[3].innerHTML == '×' || cells[3].innerHTML == '○') &
        (cells[4].innerHTML == '×' || cells[4].innerHTML == '○') &
        (cells[5].innerHTML == '×' || cells[5].innerHTML == '○') &
        (cells[6].innerHTML == '×' || cells[6].innerHTML == '○') &
        (cells[7].innerHTML == '×' || cells[7].innerHTML == '○') &
        (cells[8].innerHTML == '×' || cells[8].innerHTML == '○') 
        ){
            if (!hasWin){
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
}
function winO() {
    hasWin = true
    setTimeout(() => {
        winAlert.style.display = "block";
        oo.style.display = "inline";
    }, 50)
    window.removeEventListener('click', doing);
}
