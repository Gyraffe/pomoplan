import {actions, getMarkedTodos} from "../../../reducers/todoCards"
import {actions as history} from "../../../reducers/pomoHistory"
import {actions as todo, selectTodos} from "../../../reducers/todos"
// import {actions as calendar} from "../../../reducers/calendar"
import {connect} from "react-redux"
import TimerFinish from "../components/TimerFinish"
import {actions as ui} from "../../../reducers/ui"
// import {checkIfCompletedTodo} from "../../../reducers/calendar"

const mapStateToProps = (state) => {
    return {
        confirmDelete: state.ui.confirmDeletingPomo,
        markedTodos: getMarkedTodos(state),
        getTodos: (ids) => selectTodos(state, ids),
        timerStartedOn: state.timer.startedOn,
        // completedTodos: checkIfCompletedTodo(getMarkedTodos(state))
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (ids, todos, timerStartedOn) => {
            dispatch(history.addPomos(ids, timerStartedOn))
            dispatch(todo.incrementPomoDone(ids))
            // dispatch(calendar.updateCompletedTodos(ownProps.completedTodos))
        },
        handleClear: () => dispatch(actions.unmarkAllTodos()),
        handleConfirm: () => dispatch(ui.toggleDeletingPomo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerFinish)
