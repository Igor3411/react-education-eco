import React from "react";



class Rabbit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            satiety: 3,
        };
    }
    hunger = () => {
        // const satiety = this.state.satiety - 1;
        // this.setState({satiety: satiety})
    }
    step = () => {

        if (this.props.map.places) {
            if (this.props.map.place.eat) {

            } else {

            }
        } else {
            console.log(this.props.map.place.name);
            // this.props.find("Rabbit", this.props.map.place.name);
        }
    }
    componentDidUpdate() {
        setTimeout(() => {this.step()}, 1000)
    }
    componentDidMount() {
        setTimeout(() => {this.step()}, 1000)
    }
    render() {
        const place = this.props.map.place.name
        const classAnimal = "rabbit place" + place + " satiety" + this.state.satiety
        return (
            <div className={classAnimal}>
            </div>
        )
    }
}

export default Rabbit;