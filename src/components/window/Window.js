import React from "react";
import PropTypes from "prop-types";
import {
  TILE_ROCK,
  TILE_EAT,
  TILE_EMPTY,
  TILE_WATER,
  TILE_HILL
} from "../../const/tiles";

class Window extends React.PureComponent {
  renderTemplate = () => {
    const { map, current, currentType } = this.props;
    const arr = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        let type = "";
        const place = `${map[y][x]}`;
        switch (true) {
          // eslint-disable-next-line no-fallthrough
          case TILE_EMPTY === place:
            break;
          case TILE_ROCK === place:
            type = " block";
            break;
          case TILE_EAT === place:
            type += " eat";
            break;
          case TILE_WATER === place:
            type += " water";
            break;
          case TILE_HILL === place:
            type += " hill";
            break;
          default:
            break;
        }
        arr.push(type);
      }
    }
    if (current) {
      return arr.map((entry, i) => (
        <div
          id={i}
          key={i}
          className={entry}
          onClick={() => {
            this.newAnBtnClick(
              currentType,
              i.toString().length === 2
                ? [Number(i.toString()[0]), Number(i.toString()[1])]
                : [0, Number(i.toString()[0])]
            );
          }}
        />
      ));
    }

    return arr.map((entry, i) => <div id={i} key={i} className={entry} />);
  };

  newAnBtnClick = (name, place) => {
    this.props.newAnimal(name, place);
  };

  closeCurrentBtn = () => {
    this.props.closeCurrent();
  };

  render() {
    const current = this.props.current ? "current" : "";
    return (
      <div className={`window ${current}`}>
        {this.renderTemplate()}
        <div className="close_current" onClick={() => this.closeCurrentBtn()}>
          Закончить добавление
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  map: PropTypes.array.isRequired
};

export default Window;
