import React from "react";

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
    walk() {
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
        if (places[current][0] !== 1) {
            this.hunger();
            go(this.props.nameAnimal, place, current);
        }

        // switch (to) {
        //     case 1:
        //         if (! places.top) {
        //             this.walk();
        //             break;
        //         }
        //         if (places.top[0] !== 1) {

        //             this.hunger();
        //             go(this.props.nameAnimal, place, "top");
        //         }
        //         break;
        //     case 2:
        //         if (places.right) {
        //             if (places.right[0] !== 1) {

        //                 this.hunger();
        //                 go(this.props.nameAnimal, place, "right");
        //             }
        //         } else {
        //             this.walk();
        //         }
        //         break;
        //     case 3:
        //         if (places.bottom) {
        //             if (places.bottom[0] !== 1) {
        //                 this.hunger();
        //                 go(this.props.nameAnimal, place, "bottom");
        //             }
        //         } else {
        //             this.walk();
        //         }
        //         break;
        //     case 4:
        //         if (places.left) {
        //             if (places.left[0] !== 1) {
        //                 this.hunger();
        //                 go(this.props.nameAnimal, place, "left");
        //             }
        //         } else {
        //             this.walk();
        //         }
        //         break;
        //     default:
        //         break;
        // }

    }
    step = () => {
        const places = this.props.places;
        const place = this.props.map.place.name
        const go = this.props.go
        if (this.state.satiety > -5) {
            if (places.center[1] === 0) {
                if (this.state.satiety <= 0) {
                    if (places.top && places.top[1] === 1) {
                        go(this.props.nameAnimal, place, "top");
                    } else {
                        if (places.bottom && places.bottom[1] === 1) {
                            go(this.props.nameAnimal, place, "bottom");
                        } else {
                            if (places.left && places.left[1] === 1) {
                                go(this.props.nameAnimal, place, "left");
                            } else {
                                if (places.right && places.right[1] === 1) {
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
            this.tick = () => {};
        }

        this.tickplus();
    }
    tick = () => {
        setTimeout(() => {this.step()}, 500)
    }
    componentDidUpdate() {
        this.tick();
    }
    componentDidMount() {
        this.tick();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.tick !== nextState.tick) {
            return true
        } else {
            return false
        }
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
            </div>
        )
    }
}

export default Rabbit;