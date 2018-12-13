import { connect } from "react-redux";
import ToolsPanel from "./ToolsPanel";
import getWorld from "../../actions/server/getWorld";
import setWorld from "../../actions/server/setWorld";
import newWorld from "../../actions/server/newWorld";
import newAnimal from "../../actions/animals/newAnimal";

const mapStateToProps = store => ({
  name: store.world.world.user,
  events: store.world.world.events,
  map: store.world.world.map
});

const mapDispatchToProps = dispatch => ({
  getWorld: name => dispatch(getWorld(name)),
  setWorld: (name, map, events) => dispatch(setWorld(name, map, events)),
  newWorld: name => dispatch(newWorld(name)),
  newAnimal: (name, place) => dispatch(newAnimal(name, place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolsPanel);
