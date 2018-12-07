import { connect } from "react-redux";
import Log from "./Log";

const mapStateToProps = store => ({
  log: store.world.log
});

export default connect(mapStateToProps)(Log);
