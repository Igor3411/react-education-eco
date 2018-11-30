import React from "react";
import step from './logic/predatorAI'
import PropTypes from 'prop-types'

class Predator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            satiety: 6,
            tick: 0,
        };

    }
    tickplus = () => {
        const tick = this.state.tick + 1;
        this.setState({tick: tick})
    }

    componentDidMount() {
        this.timerTick = setInterval(() => {
            step(this.props.info.place, this.props, this.props.info.satiety, this.timerTick, this.props.death);
            this.tickplus();
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerTick);
    }
    render() {
        const place = {
            transform: [{scale: 1}],
            gridRow: (this.props.info.place[0] + 1),
            gridColumn: (this.props.info.place[1] + 1),
        }
        const satiety = this.props.info.satiety <= 0 ? 0 : this.props.info.satiety
        const eat = {
            height: 16 * satiety + 2 + "%",
        }
        const classAnimal = `predator e${satiety} death${this.props.info.satiety} ${this.props.name}`
        return (
            <div className={classAnimal} style={place}>
                <div className="eat" style={eat}></div>
                <div className="animals_number">{(this.props.places.animals.length) ? this.props.places.animals.length : "1"}</div>
            </div>
        )
    }
}

Predator.propTypes = {
    places: PropTypes.object.isRequired,
    go: PropTypes.func.isRequired,
    death: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default Predator;