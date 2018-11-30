import React from 'react'
import {connect} from 'react-redux'
import Rabbit from './Rabbit.js'
import Predator from './Predator.js'
import go from '../../actions/animals/go'
import death from '../../actions/animals/death'
import eat from '../../actions/animals/eat'
import starvation from '../../actions/animals/starvation'



const slice = (world, animal) => {
    let y = animal.place[0];
    let x = animal.place[1];
    return ({
        center: world.world.map[y][x],
        top: world.world.map[y - 1] ? world.world.map[y - 1][x] : NaN,
        right: world.world.map[y][x + 1] ? world.world.map[y][x + 1] : NaN,
        bottom: world.world.map[y + 1] ? world.world.map[y + 1][x] : NaN,
        left: world.world.map[y][x - 1] ? world.world.map[y][x - 1] : NaN,
        animals: world.animalsLocation[y][x]
    })
}

class AnimalsContainer extends React.Component {

    render() {
        const items = [
            "rabbit_1",
            "rabbit_2",
            "rabbit_3",
            "rabbit_4",
            "predator_1"
        ]
        const {animals, go, world, death, eat, starvation} = this.props
        return (
            <div className="animals">
                <Rabbit
                    places={slice(world, animals.rabbit_1.information)}
                    go={go}
                    eat={eat}
                    starvation={starvation}
                    death={death}
                    info={animals.rabbit_1.information}
                    name={items[0]}
                />
                <Rabbit
                    places={slice(world, animals.rabbit_2.information)}
                    go={go}
                    eat={eat}
                    starvation={starvation}
                    death={death}
                    info={animals.rabbit_2.information}
                    name={items[1]}
                />
                <Rabbit
                    places={slice(world, animals.rabbit_3.information)}
                    go={go}
                    eat={eat}
                    starvation={starvation}
                    death={death}
                    info={animals.rabbit_3.information}
                    name={items[2]}
                />
                <Rabbit
                    places={slice(world, animals.rabbit_4.information)}
                    go={go}
                    eat={eat}
                    starvation={starvation}
                    death={death}
                    info={animals.rabbit_4.information}
                    name={items[3]}
                />
                <Predator
                    places={slice(world, animals.predator_1.information)}
                    go={go}
                    eat={eat}
                    starvation={starvation}
                    death={death}
                    info={animals.predator_1.information}
                    name={items[4]}
                />
            </div>
        )
    }
}



const mapStateToProps = store => {
    return {
        animals: store.animals,
        world: store.world
    }
}

const mapDispatchToProps = dispatch => {
    return {
        go: (name, place, goto) => dispatch(go(name, place, goto)),
        death: (name, place, killer) => dispatch(death(name, place, killer)),
        eat: (name) => dispatch(eat(name)),
        starvation: (satiety, name) => dispatch(starvation(satiety, name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AnimalsContainer)