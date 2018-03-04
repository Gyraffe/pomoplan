import Timer from './components/Timer'
import {connect} from "react-redux"


const mapStateToProps = (state) => {
    return {
        timerHasFinished: state.timer.hasFinished,
        timerIsOn: state.timer.isOn,
        confirmationIsOn: state.ui.confirmDeletingPomo,
        breakIsOn: state.timer.breakIsOn
    }
}

export default connect(
    mapStateToProps,
)(Timer)
