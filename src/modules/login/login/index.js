import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from './redux/action'
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}
export default connect(state => ({
    num: state
}), dispatch => ({
    addGun: bindActionCreators(action.addGun, dispatch),
    removeGun: bindActionCreators(action.removeGun, dispatch),
    addGunAsync: bindActionCreators(action.addGunAsync, dispatch)
}))(App)