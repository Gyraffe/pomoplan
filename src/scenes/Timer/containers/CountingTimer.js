import {actions} from "../../../reducers/timer"
import {connect} from "react-redux"
import PomoProgress from "../components/PomoProgress"
import {actions as action} from "../../../reducers/todoCards"
import {actions as ui} from "../../../reducers/ui"

const mapStateToProps = (state) => {
    return {
        minutes: state.timer.minutes,
        seconds: state.timer.seconds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: () => {
            dispatch(actions.timerDidDelete())
            dispatch(action.unmarkAllTodos())
        },
        handleClick: () => {
            dispatch(ui.toggleDeletingPomo())
            dispatch(actions.timerDidFinish())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PomoProgress)