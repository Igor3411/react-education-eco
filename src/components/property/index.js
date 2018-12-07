import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import getTemp from "../../actions/server/getTemp";
import getTime from "../../actions/server/getTime";

const mapStateToProps = store => ({
    events: store.world.world.events
  });
const mapDispatchToProps = dispatch => ({
    getTemp: () => dispatch(getTemp()),
    getTime: () => dispatch(getTime())
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
