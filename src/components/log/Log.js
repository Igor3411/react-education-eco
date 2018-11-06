import React from "react";


class Log extends React.PureComponent {
    renderTemplate = () => {
        const {log} = this.props
        var arr = [];
        for (var prop in log) {
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

        return (
            <div className="log">
                {this.renderTemplate()}
            </div>
        )
    }
}

export default Log;