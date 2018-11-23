import React from 'react'
import {connect} from 'react-redux'
import Toolbar from './Toolbar.js'
import getTemp from '../../actions/server/getTemp'
import getTime from '../../actions/server/getTime'


class ConteainerToolbar extends React.Component {
    render() {
        const {world, getTemp, getTime} = this.props
        return (
            <Toolbar
                events={world.world.events}
                getTemp={getTemp}
                getTime={getTime}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        world: store.world,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTemp: () => dispatch(getTemp()),
        getTime: () => dispatch(getTime()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConteainerToolbar)