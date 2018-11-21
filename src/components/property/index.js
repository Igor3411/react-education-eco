import React from 'react'
import {connect} from 'react-redux'
import Toolbar from './Toolbar.js'


class ConteainerToolbar extends React.Component {
    render() {
        const {world} = this.props
        return (
            <Toolbar
                events={world.world.events}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        world: store.world,
    }
}


export default connect(
    mapStateToProps
)(ConteainerToolbar)