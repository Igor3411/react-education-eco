import React from "react";
import {TILE_EAT} from '../../const/tiles'
import findFood from './logic/findFood'
import walk from './logic/walk'


class Predator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            satiety: 6,
            tick: 0,
        };

    }
    hunger = () => {
        const satiety = this.state.satiety - 1;
        this.setState({satiety: satiety})
    }
    eat = () => {
        const satiety = 6;
        this.setState({satiety: satiety})
    }
    tickplus = () => {
        const tick = this.state.tick + 1;
        this.setState({tick: tick})
    }


    step = () => {
        const places = this.props.places
        const place = this.props.map.place
        const go = this.props.go
        const name = this.props.nameAnimal
        switch (true) {
            case this.state.satiety <= -10:
                this.props.death(name, place);
                clearInterval(this.timerTick);
                break;
            case this.props.places.animals.length > 1:
                console.log(1)
                const prey = this.props.places.animals.filter(animal => animal !== name)
                this.props.death(prey[0], place, name);
            // eslint-disable-next-line no-fallthrough
            case places.center !== TILE_EAT && this.state.satiety <= 0:
                findFood(places, place, go, name)
                this.hunger();
                break;
            case this.state.satiety !== 6 && places.center === TILE_EAT:
                this.eat();
                break;
            default:
                walk(places, place, go, name);
                this.hunger();
                break;
        }
    }

    componentDidMount() {
        this.timerTick = setInterval(() => {this.step(); this.tickplus();}, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerTick);
    }
    render() {
        const place = {
            transform: [{scale: 1}],
            gridRow: (this.props.map.place[0] + 1),
            gridColumn: (this.props.map.place[1] + 1),
        }
        const satiety = this.state.satiety <= 0 ? 0 : this.state.satiety
        const eat = {
            height: 16 * satiety + 2 + "%",
        }
        const classAnimal = `predator e${satiety} death${this.state.satiety} ${this.props.nameAnimal}`
        return (
            <div className={classAnimal} style={place}>
                <div className="eat" style={eat}></div>
                <div className="animals_number">{(this.props.places.animals.length) ? this.props.places.animals.length : "1"}</div>
            </div>
        )
    }
}

export default Predator;