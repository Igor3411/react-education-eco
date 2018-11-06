import React from 'react'
import {connect} from 'react-redux'
import Log from './Log.js'


class LogContainer extends React.Component {
    render() {
        const {world} = this.props
        return (
            <Log
                log={world.log}
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
)(LogContainer)