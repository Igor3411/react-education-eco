import React from "react";
import step from './logic/rabbitAI'
import PropTypes from 'prop-types'


class Rabbit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // satiety: 5,
            tick: 0,
        };

    }
    // hunger = () => {
    //     const satiety = this.state.satiety - 1;
    //     this.setState({satiety: satiety})
    // }
    // eat = () => {
    //     const satiety = 5;
    //     this.setState({satiety: satiety})
    // }
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
            height: 19 * satiety + 2 + "%",
        }
        const classAnimal = `rabbit e${satiety} death${this.props.info.satiety} ${this.props.nameAnimal}`
        return (
            <div className={classAnimal} style={place}>
                <div className="eat" style={eat}></div>
                <div className="animals_number">{(this.props.places.animals.length) ? this.props.places.animals.length : "1"}</div>
            </div>
        )
    }
}

Rabbit.propTypes = {
    places: PropTypes.object.isRequired,
    go: PropTypes.func.isRequired,
    death: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default Rabbit;