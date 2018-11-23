import React from 'react'
import {connect} from 'react-redux'
import Window from './Window.js'


class WindowContainer extends React.Component {
    render() {
        const {world} = this.props
        return (
            <Window
                map={world.map}

            />
        )
    }
}

const mapStateToProps = store => {
    return {
        world: store.world.world,
    }
}



export default connect(
    mapStateToProps
)(WindowContainer)