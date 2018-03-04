import {actions} from "../../../reducers/todoCards"
import {actions as todos} from "../../../reducers/todos"
import {connect} from "react-redux"
import TimerFinish from "../components/TimerFinish"
import {actions as ui} from "../../../reducers/ui"
import {actions as timer} from "../../../reducers/timer"

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: () => {
            dispatch(todos.addPomoDoneAndUpdateCalendar())
            dispatch(timer.timerDidDelete())
            dispatch(actions.unmarkAllTodos())
            dispatch(timer.startBreak())
        },
        handleClear: () => dispatch(actions.unmarkAllTodos()),
        handleConfirm: () => dispatch(ui.toggleDeletingPomo()),
    }
}

export default connect(null, mapDispatchToProps)(TimerFinish)
