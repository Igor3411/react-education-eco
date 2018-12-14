import React from "react";
import PropTypes from "prop-types";
import {
  TILE_ROCK,
  TILE_EAT,
  TILE_EMPTY,
  TILE_WATER,
  TILE_HILL
} from "../../const/tiles";

class CurrentMaps extends React.PureComponent {
  renderTemplate = () => {
    const { map } = this.props;
    const arr = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        let type = "";
        const place = `${map[y][x]}`;
        switch (true) {
          case TILE_EMPTY === place:
            break;
          case TILE_ROCK === place:
            type = " block";
            break;
          case TILE_EAT === place:
            type = " eat";
            break;
          case TILE_WATER === place:
            type = " water";
            break;
          case TILE_HILL === place:
            type = " hill";
            break;
          default:
            break;
        }
        arr.push(type);
      }
    }
    return arr.map((entry, i) => <div id={i} key={i} className={entry} />);
  };

  render() {
    return <div className="window maps">{this.renderTemplate()}</div>;
  }
}

CurrentMaps.propTypes = {
  map: PropTypes.array.isRequired
};

export default CurrentMaps;
