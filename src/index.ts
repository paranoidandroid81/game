
import './styles.css';

const secretNum = getRandomInt(1, 9);
const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currSquare = 1;
squares.forEach(sq => {
    if (currSquare === secretNum) {
        sq.dataset.secret = 'true';
    }
    currSquare++;
    sq.addEventListener('click', handleClick);
});

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleClick() {
    const that = this as HTMLDivElement;
    console.log('Got clicked', that);

    if (that.dataset.secret) {
        that.classList.add('winner');
        that.removeEventListener('click', handleClick);
        squares.forEach(sq => {
            if (sq !== that) {
                sq.classList.add('loser');
            }
        });
    } else {
        that.classList.add('loser');
        that.removeEventListener('click', handleClick);
    }
}

function genRandInRangeOneToSix() {

}
