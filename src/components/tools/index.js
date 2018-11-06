import React from 'react'
import {connect} from 'react-redux'
import ToolsPanel from './ToolsPanel.js'
import getWorld from '../../actions/getWorld'
import setWorld from '../../actions/setWorld'


class ToolsPanelContainer extends React.Component {
    render() {
        const {setWorld, getWorld, world} = this.props
        return (
            <ToolsPanel
                name={world.user}
                setWorld={setWorld}
                getWorld={getWorld}
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
        getWorld: name => dispatch(getWorld(name)),
        setWorld: name => dispatch(setWorld(name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolsPanelContainer)