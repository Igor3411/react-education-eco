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
    mind() {
        const places = this.props.places;
        const place = this.props.map.place.name

        const go = this.props.go
        // let to = this.getRandomInRange(1, 8)
        let to = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        switch (to) {
            case 1 || 5:
                if (places.top !== undefined) {
                    if (places.top[0] !== 1) {

                        this.hunger();
                        go('Rabbit', place, "top");
                    }
                } else {
                    this.mind();
                }
                break;
            case 2 || 6:
                if (places.right !== undefined) {
                    if (places.right[0] !== 1) {

                        this.hunger();
                        go('Rabbit', place, "right");
                    }
                } else {
                    this.mind();
                }
                break;
            case 3 || 7:
                if (places.bottom !== undefined) {
                    if (places.bottom[0] !== 1) {
                        this.hunger();
                        go('Rabbit', place, "bottom");
                    }
                } else {
                    this.mind();
                }
                break;
            case 4 || 8:
                if (places.left !== undefined) {
                    if (places.left[0] !== 1) {
                        this.hunger();
                        go('Rabbit', place, "left");
                    }
                } else {
                    this.mind();
                }
                break;
            default:
                break;
        }

    }
    step = () => {
        const places = this.props.places;
        if (places.center[1] === 0) {
            this.mind();
        } else {
            if (this.state.satiety !== 5) {
                this.eat();
            } else {
                this.mind();
            }
        }
        this.tickplus();
    }
    componentDidUpdate() {
        setTimeout(() => {this.step()}, 1000)
    }
    componentDidMount() {
        setTimeout(() => {this.step()}, 1000)
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
            gridRow: (this.props.map.place.name[0] + 1),
            gridColumn: (this.props.map.place.name[1] + 1)
        }
        // console.log(this.props);
        console.log(this.state.satiety);
        const classAnimal = "rabbit satiety" + this.state.satiety
        return (
            <div className={classAnimal} style={place}>
            </div>
        )
    }
}

export default Rabbit;