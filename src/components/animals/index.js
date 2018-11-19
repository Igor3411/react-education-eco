import React from 'react'
import {connect} from 'react-redux'
import Rabbit from './Rabbit.js'
import go from '../../actions/animals/go'

const slice = (world, animal) => {
    let y = animal.place.name[0];
    let x = animal.place.name[1];
    // return ({
    //     center: world.world.map[y][x],
    //     top: y <= 0 ? world.world.map[y - 1][x] : undefined,
    //     right: world.world.map[y][x + 1],
    //     bottom: y < world.world.map.length ? world.world.map[y + 1][x] : undefined,
    //     left: world.world.map[y][x - 1],
    // })
    return ({
        center: world.world.map[y][x],
        top: world.world.map[y - 1] ? world.world.map[y - 1][x] : undefined,
        right: world.world.map[y][x + 1],
        bottom: world.world.map[y + 1] ? world.world.map[y + 1][x] : undefined,
        left: world.world.map[y][x - 1],
    })
}

class AnimalsContainer extends React.Component {
    render() {
        const {animals, go, world} = this.props
        return (
            <div className="animals">
                <Rabbit
                    places={slice(world, animals.rabbit.information)}
                    go={go}
                    map={animals.rabbit.information}
                />
                <Rabbit
                    places={slice(world, animals.rabbit.information)}
                    go={go}
                    map={animals.rabbit.information}
                />
                <Rabbit
                    places={slice(world, animals.rabbit.information)}
                    go={go}
                    map={animals.rabbit.information}
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AnimalsContainer)