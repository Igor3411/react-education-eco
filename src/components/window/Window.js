import React from "react";
import {TILE_ROCK, TILE_EAT, TILE_EMPTY, TILE_WATER} from '../../const/tiles'
import PropTypes from 'prop-types'

class Window extends React.PureComponent {
  renderTemplate = () => {
    const {map} = this.props
    let arr = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        let type = "";
        const place = map[y][x] + "";
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
          default:
            break;
        }
        arr.push(type);
      }
    }
    return arr.map((entry, i) => (
      <div id={i} key={i} className={entry}>
      </div>
    )
    )
  }


  render() {

    return (
      <div className="window">
        {this.renderTemplate()}
      </div>
    )
  }
}

Window.propTypes = {
  map: PropTypes.array.isRequired,
}

export default Window;