import {connect} from "react-redux"
import TodoCard from "./components/TodoCard"
import {actions} from "../../reducers/todoCards"
import {getTags} from "../../reducers/tags"
import {getProject} from "../../reducers/projects"

const mapStateToProps = (state, ownProps) => {
    return {
        tagsExpanded: Object.keys(state.todoCards).includes(ownProps.id) ?
            state.todoCards[ownProps.id].tagsExpanded : false,
        isDuringPomo: state.timer.isOn,
        isMarked: Object.keys(state.todoCards).includes(ownProps.id) ?
        state.todoCards[ownProps.id].isMarked : false,
        tags: getTags(ownProps, state.tags),
        project: getProject(ownProps, state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        expandTags: () => dispatch(actions.toggleExpandTags(ownProps.id)),
        toggleDone: () => dispatch(actions.toggleTaskDoneOnPomo(ownProps.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard)