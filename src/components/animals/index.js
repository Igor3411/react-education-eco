import React from 'react'
import {connect} from 'react-redux'
import Rabbit from './Rabbit.js'
import find from '../../actions/animals/find'

const slice = (world, animal) => {
    return ({
        top: world.world.map[animal.place - 5],
        right: world.world.map[animal.place + 1],
        bottom: world.world.map[animal.place + 1],
        left: world.world.map[animal.place + 5],
    })
}

class AnimalsContainer extends React.Component {
    render() {
        const {animals, find, world} = this.props
        return (
            <div className="animals">
                <Rabbit
                    places={slice(world, animals.rabbit)}
                    find={find}
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
        find: (name, place) => dispatch(find(name, place)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AnimalsContainer)