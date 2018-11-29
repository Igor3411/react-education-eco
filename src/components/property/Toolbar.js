import React from "react";


export default class Toolbar extends React.PureComponent {
    tick = () => {
        this.getTempTick = setInterval(() => {this.props.getTemp()}, 2000)
        this.getTimeTick = setInterval(() => {this.props.getTime()}, 30000)
    }
    componentDidMount() {
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.getTempTick);
        clearInterval(this.getTimeTick);
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
//proptypes
