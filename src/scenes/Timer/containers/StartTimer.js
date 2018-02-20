import {actions} from "../../../reducers/timer"
import {connect} from "react-redux"
import StartButton from "../components/StartButton"

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actions.timerDidStart())
        },
    }
}

export default connect(null, mapDispatchToProps)(StartButton)