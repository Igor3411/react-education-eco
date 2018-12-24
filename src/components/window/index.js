import { connect } from "react-redux";
import Window from "./Window";
import newAnimal from "../../actions/animals/newAnimal";
import closeCurrent from "../../actions/animals/closeCurrent";

const mapStateToProps = store => ({
  map: store.world.world.map,
  current: store.world.current,
  currentType: store.world.currentType
});

const mapDispatchToProps = dispatch => ({
  newAnimal: (name, place) => dispatch(newAnimal(name, place)),
  closeCurrent: (name, place) => dispatch(closeCurrent(name, place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window);
