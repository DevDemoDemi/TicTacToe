let bool = true;
let arrX = [];
let arrO = [];


buttons = document.getElementsByClassName('btn')

buttons = [...buttons]
buttons.forEach(button => {

    button.addEventListener('click', function (event) {
        let player;
        let what = button.value;
        if (bool) {
            player = 'X';
            bool = false;
            button.disabled = true;
            alert('PLAYER 2\'S TURN');
        } else {
            player = 'O';
            bool = true;
            button.disabled = true;
            alert('PLAYER 1\'S TURN');
        }
        document.getElementById(what).innerText = player;

        // console.log(what, player);

        let newWhat = [what, player];
        // console.log(newWhat);

        if (player == 'X') {
            arrX.push(newWhat);
        } else {
            arrO.push(newWhat);
        }

        // console.log(arrX);
        // console.log(arrO);

        
        let newArrX = [];
        for (let i = 0; i < arrX.length; i++) {
            newArrX.push(arrX[i][0]);
        }
        console.log(newArrX);

        let newArrO = [];
        for (let i = 0; i < arrO.length; i++) {
            newArrO.push(arrO[i][0]);
        }

        let sortX = newArrX.sort((a, b) => a-b);
        // console.log(sortX);
        let sortO = newArrO.sort((a, b) => a-b);

        if ((sortX.includes('1') && sortX.includes('2') && sortX.includes('3')) || (sortX.includes('4') && sortX.includes('5') && sortX.includes('6')) || (sortX.includes('7') && sortX.includes('8') && sortX.includes('9')) || (sortX.includes('1') && sortX.includes('4') && sortX.includes('7')) || (sortX.includes('2') && sortX.includes('5') && sortX.includes('8')) || (sortX.includes('3') && sortX.includes('6') && sortX.includes('9')) || (sortX.includes('1') && sortX.includes('5') && sortX.includes('9')) || (sortX.includes('3') && sortX.includes('5') && sortX.includes('7'))) {
            alert('PLAYER 1 WINS');
            buttons.forEach(button => button.disabled = true);
        } else if ((sortO.includes('1') && sortO.includes('2') && sortO.includes('3')) || (sortO.includes('4') && sortO.includes('5') && sortO.includes('6')) || (sortO.includes('7') && sortO.includes('8') && sortO.includes('9')) || (sortO.includes('1') && sortO.includes('4') && sortO.includes('7')) || (sortO.includes('2') && sortO.includes('5') && sortO.includes('8')) || (sortO.includes('3') && sortO.includes('6') && sortO.includes('9')) || (sortO.includes('1') && sortO.includes('5') && sortO.includes('9')) || (sortO.includes('3') && sortO.includes('5') && sortO.includes('7'))) {
            alert('PLAYER 2 WINS');
            buttons.forEach(button => button.disabled = true);
        } else if (sortX.length + sortO.length == 9) {
            alert('IT\'S A DRAW');
            buttons.forEach(button => button.disabled = true);
        }

    })
});

