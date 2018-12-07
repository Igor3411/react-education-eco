import { connect } from "react-redux";
import Window from "./Window";

const mapStateToProps = store => ({
  map: store.world.world.map
});

export default connect(mapStateToProps)(Window);
