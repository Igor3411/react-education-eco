import React from "react";


class Window extends React.PureComponent {
    renderTemplate = () => {
        const {map} = this.props
        let arr = [];
        for (let prop in map) {
            let type = "";
            if (map[prop].eat) {
                type += " eat";
            }
            if (map[prop].snow) {
                type += " snow";
            }
            if (map[prop].block) {
                type += " block";
            }
            if (map[prop].water) {
                type += " water";
            }
            arr.push(type);
        }
        let i = 0;
        return arr.map(entry => (
            <div id={i} key={i++} className={entry}>
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

export default Window;