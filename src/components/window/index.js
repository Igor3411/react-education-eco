import {connect} from 'react-redux'
import Window from './Window.js'

const mapStateToProps = store => {
    return {
        map: store.world.world.map,
    }
}

export default connect(
    mapStateToProps
)(Window)