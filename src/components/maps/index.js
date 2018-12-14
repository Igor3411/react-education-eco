import { connect } from "react-redux";
import React from "react";
import Maps from "./Maps";
import CurrentMaps from "./CurrentMaps";
import setMap from "../../actions/map/setMap";

const MapsContainer = ({ map, setMapAction }) => (
  <div className="maps">
    <Maps setMap={setMapAction} />
    <CurrentMaps map={map} />
  </div>
);

const mapStateToProps = store => ({
  map: store.world.world.map
});
const mapDispatchToProps = dispatch => ({
  setMapAction: map => dispatch(setMap(map))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsContainer);
