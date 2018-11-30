import {connect} from 'react-redux'
import Toolbar from './Toolbar.js'
import getTemp from '../../actions/server/getTemp'
import getTime from '../../actions/server/getTime'

const mapStateToProps = store => {
    return {
        events: store.world.world.events,
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
)(Toolbar)