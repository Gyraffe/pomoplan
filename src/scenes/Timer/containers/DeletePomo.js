import {actions} from "../../../reducers/todoCards"
import {actions as ui} from "../../../reducers/ui"
import {actions as timer} from "../../../reducers/timer"
import {connect} from "react-redux"
import DeleteConfirmation from "../components/DeleteConfirmation"


const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: () => {
            dispatch(timer.timerDidDelete())
            dispatch(ui.toggleDeletingPomo())
            dispatch(actions.unmarkAllTodos())
        },
        handleCancel: () => {dispatch(ui.toggleDeletingPomo())}
    }
}

export default connect(null, mapDispatchToProps)(DeleteConfirmation)