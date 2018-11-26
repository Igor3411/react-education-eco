import {TILE_ROCK} from '../../../const/tiles'
const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const walk = (places, place, go, name) => {
    const map = {1: 'top', 2: 'right', 3: 'bottom', 4: 'left'}
    let to = getRandomInRange(1, 4)
    let current = map[to];
    if (!places[current]) {
        walk(places, place, go, name);
        return;
    }
    if (places[current] !== TILE_ROCK) {

        go(name, place, current);
    }
}
export default walk;