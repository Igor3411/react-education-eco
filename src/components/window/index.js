import React from 'react'
import {connect} from 'react-redux'
import Window from './Window.js'
import getEvent from '../../actions/server/getEvent'

class WindowContainer extends React.Component {
    render() {
        const {world, getEvent} = this.props
        return (
            <Window
                map={world.map}
                getEvent={getEvent}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        world: store.world.world,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvent: () => dispatch(getEvent()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WindowContainer)