import React from "react";
import {
  TILE_ROCK,
  TILE_EAT,
  TILE_EMPTY,
  TILE_WATER,
  TILE_HILL
} from "../../const/tiles";
import { MAP_TREES, MAP_STANDART, MAP_DESERT } from "../../const/maps";

class Maps extends React.PureComponent {
  renderTemplate = map => {
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

  newBtnClick = e => {
    const newMap = e;
    this.props.setMap(newMap);
  };

  render() {
    return (
      <div className="mapsList">
        <div
          className="window maps"
          onClick={() => this.newBtnClick(MAP_TREES)}
        >
          {this.renderTemplate(MAP_TREES)}
        </div>
        <div
          className="window maps"
          onClick={() => this.newBtnClick(MAP_STANDART)}
        >
          {this.renderTemplate(MAP_STANDART)}
        </div>
        <div
          className="window maps"
          onClick={() => this.newBtnClick(MAP_DESERT)}
        >
          {this.renderTemplate(MAP_DESERT)}
        </div>
      </div>
    );
  }
}

export default Maps;
