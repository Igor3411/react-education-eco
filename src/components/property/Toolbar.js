import React from "react";


class Toolbar extends React.Component {
    renderTemplate = () => {
        const {log} = this.props
        let arr = [];
        for (let prop in log) {
            arr.push(prop + ":" + log[prop]);
        }
        let i = 0;
        return arr.map(entry => (
            <p key={i++}>
                {entry}
            </p>
        )
        )
    }
    tick = () => {
        const getTempTick = () => {setTimeout(() => {this.props.getTemp(); getTempTick()}, 2000)}
        const getTimeTick = () => {setTimeout(() => {this.props.getTime(); getTimeTick()}, 30000)}
        getTimeTick();
        getTempTick();
    }
    componentDidMount() {
        this.tick();
    }
    render() {
        const temp = (this.props.events[0].temperature) ? this.props.events[0].temperature : 'Нет данных о температуре'
        const time = (this.props.events[0].timeOfday) ? this.props.events[0].timeOfday : 'Нет данных о времени суток'
        return (
            <div className="toolbar">
                <div className="temp">Температура: {temp}</div>
                <div className="time">{time}</div>
            </div>
        )
    }
}

export default Toolbar;