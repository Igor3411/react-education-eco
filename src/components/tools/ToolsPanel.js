import React from "react";
import PropTypes from "prop-types";

class ToolsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myValue: ""
    };
  }

  setBtnClick = e => {
    const { name, events, map } = e;
    this.props.setWorld(name, events, map);
  };

  getBtnClick = e => {
    const name = e;
    this.props.getWorld(name);
  };

  newBtnClick = e => {
    const name = e;
    this.props.newWorld(name);
  };

  newAnBtnClick = e => {
    const name = e;
    this.props.newAnimal(name, [2, 0]);
  };

  onChangeHandler = e => {
    this.setState({ myValue: e.target.value });
  };

  handleLoadBtn = () => this.getBtnClick(this.state.myValue);

  render() {
    const { name } = this.props;
    return (
      <div className="tools">
        <input
          className="test-input"
          value={this.myValue}
          onChange={this.onChangeHandler}
          placeholder="Имя мира"
        />
        <div onClick={this.handleLoadBtn}>
          Загрузить мир {this.state.myValue}
        </div>
        <div onClick={() => this.setBtnClick(this.props)}>
          Сохранить мир {name}
        </div>
        <div onClick={() => this.newBtnClick(this.state.myValue)}>
          Создать новый мир {this.state.myValue}
        </div>
        <div onClick={() => this.newAnBtnClick("rabbit_")}>
          Добавить кролика
        </div>
        <div onClick={() => this.newAnBtnClick("predator_")}>
          Добавить хищника
        </div>
      </div>
    );
  }
}

ToolsPanel.propTypes = {
  map: PropTypes.array.isRequired,
  setWorld: PropTypes.func.isRequired,
  getWorld: PropTypes.func.isRequired,
  newWorld: PropTypes.func.isRequired
};

export default ToolsPanel;
