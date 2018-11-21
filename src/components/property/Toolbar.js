import React from "react";


class Toolbar extends React.PureComponent {
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
    render() {
        console.log(this.props.events[0].temperature)
        const temp = (this.props.events[0].temperature) ? this.props.events[0].temperature : 'Нет данных о температуре'
        const time = (this.props.events[0].timeOfday) ? this.props.events[0].timeOfday : 'Нет данных о времени суток'
        return (
            <div className="Toolbar">
                <div className="temp">{temp}</div>
                <div className="time">{time}</div>
            </div>
        )
    }
}

export default Toolbar;