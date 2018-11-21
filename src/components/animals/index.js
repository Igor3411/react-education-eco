import React from 'react'
import {connect} from 'react-redux'
import Rabbit from './Rabbit.js'
import go from '../../actions/animals/go'
import death from '../../actions/animals/death'



const slice = (world, animal) => {
    let y = animal.place.name[0];
    let x = animal.place.name[1];
    return ({
        center: world.world.map[y][x],
        top: world.world.map[y - 1] ? world.world.map[y - 1][x] : NaN,
        right: world.world.map[y][x + 1] ? world.world.map[y][x + 1] : NaN,
        bottom: world.world.map[y + 1] ? world.world.map[y + 1][x] : NaN,
        left: world.world.map[y][x - 1] ? world.world.map[y][x - 1] : NaN,
    })
}

class AnimalsContainer extends React.Component {

    render() {
        const items = [
            "rabbit_1",
            "rabbit_2",
            "rabbit_3",
        ]
        const {animals, go, world, death} = this.props
        return (
            <div className="animals">
                <Rabbit
                    places={slice(world, animals.rabbit_1.information)}
                    go={go}
                    death={death}
                    map={animals.rabbit_1.information}
                    nameAnimal={items[0]}
                />
                <Rabbit
                    places={slice(world, animals.rabbit_2.information)}
                    go={go}
                    death={death}
                    map={animals.rabbit_2.information}
                    nameAnimal={items[1]}
                />
                <Rabbit
                    places={slice(world, animals.rabbit_3.information)}
                    go={go}
                    death={death}
                    map={animals.rabbit_3.information}
                    nameAnimal={items[2]}
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AnimalsContainer)