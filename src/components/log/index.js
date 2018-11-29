import {connect} from 'react-redux'
import Log from './Log.js'

const mapStateToProps = store => {
    return {
        log: store.world.log,
    }
}
//разобраться
export default connect(
    mapStateToProps
)(Log)