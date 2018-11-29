import React from "react";


class ToolsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myValue: "",
        };
    }
    setBtnClick = (e) => {
        const name = e.name
        const events = e.events
        const map = e.map
        this.props.setWorld(name, events, map)
    }
    getBtnClick = e => {
        const name = e
        this.props.getWorld(name)
    }
    newBtnClick = e => {
        const name = e
        this.props.newWorld(name)
    }
    onChangeHandler = (e) => {
        this.setState({myValue: e.target.value})
    }
    handleLoadBtn = () => this.getBtnClick(this.state.myValue)
    render() {
        const {name} = this.props
//так же везде
        // console.log(map)
        return (
            <div className="tools">
                <input
                    className="test-input"
                    value={this.myValue}
                    onChange={this.onChangeHandler}
                    placeholder="Имя мира"
                />
                <div onClick={this.handleLoadBtn}>Загрузить мир {this.state.myValue}</div> 
                <div onClick={() => this.setBtnClick(this.props)}>Сохранить мир {name}</div>
                <div onClick={() => this.newBtnClick(this.state.myValue)}>Создать новый мир {this.state.myValue}</div>
            </div>
        );
    }
}

export default ToolsPanel;