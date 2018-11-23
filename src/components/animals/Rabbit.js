import React from "react";
import {TILE_ROCK, TILE_EAT} from '../../const/tiles'


class Rabbit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satiety: 5,
            tick: 0,
        };

    }

    hunger = () => {
        const satiety = this.state.satiety - 1;
        this.setState({satiety: satiety})
    }
    eat = () => {
        const satiety = 5;
        this.setState({satiety: satiety})
    }
    tickplus = () => {
        const tick = this.state.tick + 1;

        this.setState({tick: tick})
    }
    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    walk = () => {
        const places = this.props.places;
        const place = this.props.map.place.name

        const map = {1: 'top', 2: 'right', 3: 'bottom', 4: 'left'}

        const go = this.props.go
        let to = this.getRandomInRange(1, 8)
        let current = map[to];

        if (!places[current]) {
            this.walk();
            return;
        }
        if (places[current] !== TILE_ROCK) {

            go(this.props.nameAnimal, place, current);
        }
    }
    step = () => {

        const places = this.props.places;
        const place = this.props.map.place.name
        const go = this.props.go
        if (this.state.satiety > -5) {
            if (places.center !== TILE_EAT) {
                if (this.state.satiety <= 0) {
                    if (places.top && places.top === TILE_EAT) {
                        go(this.props.nameAnimal, place, "top");
                    } else {
                        if (places.bottom && places.bottom === TILE_EAT) {
                            go(this.props.nameAnimal, place, "bottom");
                        } else {
                            if (places.left && places.left === TILE_EAT) {
                                go(this.props.nameAnimal, place, "left");
                            } else {
                                if (places.right && places.right === TILE_EAT) {
                                    go(this.props.nameAnimal, place, "right");
                                } else {
                                    this.walk();
                                }
                            }
                        }

                    }
                } else {
                    this.walk();
                }
                this.hunger();
            }
            else {
                if (this.state.satiety !== 5) {
                    this.eat();

                } else {
                    this.walk();
                }
            }


        } else {
            this.props.death(this.props.nameAnimal, place);
            this.TimeTick = () => {}
        }

        this.tickplus();
    }
    TimeTick = () => {
        setTimeout(() => {this.step(); this.TimeTick()}, 1000)
    }

    componentDidMount() {
        this.TimeTick();
    }
    render() {
        const place = {
            transform: [{scale: 1}],
            gridRow: (this.props.map.place.name[0] + 1),
            gridColumn: (this.props.map.place.name[1] + 1),
        }
        const satiety = this.state.satiety <= 0 ? 0 : this.state.satiety
        const eat = {
            height: 19 * satiety + 2 + "%",
        }
        const classAnimal = "rabbit e" + satiety + " death" + this.state.satiety + " " + this.props.nameAnimal
        return (
            <div className={classAnimal} style={place}>
                <div className="eat" style={eat}></div>
                <div className="animals_number">{(this.props.places.animals.length) ? this.props.places.animals.length : "1"}</div>
            </div>
        )
    }
}

export default Rabbit;