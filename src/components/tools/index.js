import { connect } from "react-redux";
import React from "react";
import { Route } from "react-router-dom";
import ToolsPanel from "./ToolsPanel";
import ToolsPanelMap from "./ToolsPanelMap";
import getWorld from "../../actions/server/getWorld";
import setWorld from "../../actions/server/setWorld";
import newWorld from "../../actions/server/newWorld";
import newAnimal from "../../actions/animals/newAnimal";

const ToolsPanelCreate = ({
  name,
  events,
  map,
  getWorldAction,
  setWorldAction,
  newWorldAction,
  newAnimalAction
}) => (
  <Route
    exact
    path="/"
    render={() => (
      <ToolsPanel
        getWorld={getWorldAction}
        setWorld={setWorldAction}
        newWorld={newWorldAction}
        newAnimal={newAnimalAction}
        name={name}
        events={events}
        map={map}
      />
    )}
  />
);
class ContainerToolsPanel extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="panelCont">
        <ToolsPanelCreate {...this.props} />
        <Route path="/Maps" component={ToolsPanelMap} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  name: store.world.world.user,
  events: store.world.world.events,
  map: store.world.world.map
});

const mapDispatchToProps = dispatch => ({
  getWorldAction: name => dispatch(getWorld(name)),
  setWorldAction: (name, map, events) => dispatch(setWorld(name, map, events)),
  newWorldAction: name => dispatch(newWorld(name)),
  newAnimalAction: (name, place) => dispatch(newAnimal(name, place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerToolsPanel);
