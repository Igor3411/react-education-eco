import React from "react";
import PropTypes from 'prop-types'

class Log extends React.PureComponent {
    renderTemplate = () => {
        const {log} = this.props
        let arr = [];
        for (let prop in log) {
            var now = new Date(prop);
            arr.push(now.toLocaleTimeString() + ":" + log[prop]);
        }
        return arr.map((entry, i) => (
            <p key={`log_${i}`}>
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
Log.propTypes = {
    log: PropTypes.object.isRequired,
}
export default Log;