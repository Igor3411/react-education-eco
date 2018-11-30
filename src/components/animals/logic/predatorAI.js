import {TILE_EAT} from '../../../const/tiles'
import findFood from './findFood'
import walk from './walk'
import eating from './eating'
import hunger from './hunger'

const step = (place, props, satiety, timerTick) => {
    const {places, go, name, death, starvation, eat} = props
    switch (true) {
        case satiety <= -10:
            death(name, place);
            clearInterval(timerTick);
            break;
        case places.animals.length > 1:
            const prey = places.animals.filter(animal => animal !== name)
            death(prey[0], place, name);
        // eslint-disable-next-line no-fallthrough
        case places.center !== TILE_EAT && satiety <= 0:
            findFood(places, place, go, name)
            hunger(satiety, starvation, name);
            break;
        case satiety !== 6 && places.center === TILE_EAT:
            eating(eat, name);
            break;
        default:
            walk(places, place, go, name);
            hunger(satiety, starvation, name);
            break;
    }
}

export default step;