import {connect} from "react-redux"
import TodoCard from "./components/TodoCard"
import {actions} from "../../reducers/todoCards"
import {getComponentTags} from "../../selectors/tags"
import {getProject} from "../../selectors/projects"

const mapStateToProps = (state, ownProps) => {
    return {
        tagsExpanded: Object.keys(state.todoCards).includes(ownProps.id) ?
            state.todoCards[ownProps.id].tagsExpanded : false,
        isDuringPomo: state.timer.isOn,
        isMarked: Object.keys(state.todoCards).includes(ownProps.id) ?
        state.todoCards[ownProps.id].isMarked : false,
        tags: getComponentTags(state, ownProps),
        project: getProject(state, ownProps)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleDone: () => dispatch(actions.toggleTaskDoneOnPomo(ownProps.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard)