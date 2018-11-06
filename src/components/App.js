import React, {Component} from 'react'
import Tools from './tools'
// import Window from './window'
import Log from './log'
// import Property from './property'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Tools />
                <Log />
                {/* <Window />
                <Property /> */}
            </div>
        )
    }
}

export default App