import React from "react";


class ToolsPanel extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         myValue: "",
    //     };
    // }
    setBtnClick = e => {
        const name = e
        this.props.setWorld(name)
    }
    getBtnClick = e => {
        const name = e
        this.props.getWorld(name)
    }
    onChangeHandler = (e) => {
        this.setState({myValue: e.target.value})
    }
    render() {
        const {name} = this.props
        return (
            <div className="tools">
                <input
                    className="test-input"
                    value={this.myValue}
                    onChange={this.onChangeHandler}
                    placeholder="Имя мира"
                />
                <div onClick={() => this.getBtnClick(name)}>Загрузить мир {name}</div>
                <div onClick={() => this.setBtnClick(name)}>Сохранить мир {name}</div>
                <div>Создать новый мир</div>
            </div>
        );
    }
}

export default ToolsPanel;