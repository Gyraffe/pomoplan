import {connect} from "react-redux"
import TodoCard from "./components/TodoCard"
import {TOGGLE_TODO_TAGS, TOGGLE_TODO_MARK_DONE, UNMARK_ALL_TODOS} from "../../constants/actionTypes"

const mapStateToProps = (state, ownProps) => {
    return {
        tagsExpanded: Object.keys(state.todoCards).includes(ownProps.id) ?
            state.todoCards[ownProps.id].tagsExpanded : false,
        isDuringPomo: state.timer.isOn,
        isMarked: Object.keys(state.todoCards).includes(ownProps.id) ?
        state.todoCards[ownProps.id].isMarked : false,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        expandTags: () => dispatch(toggleExpandTags(ownProps.id)),
        toggleDone: () => dispatch(toggleTaskDoneOnPomo(ownProps.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCard)

export function toggleExpandTags(id){
    return {
        type: TOGGLE_TODO_TAGS,
        id
    }
}

function toggleTaskDoneOnPomo(id){
    return {
        type: TOGGLE_TODO_MARK_DONE,
        id
    }
}

export function unmarkAllTodos() {
    return {
        type: UNMARK_ALL_TODOS
    }
}