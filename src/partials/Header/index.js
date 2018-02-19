import Header from './components/Header'
import {connect} from "react-redux"
import {actions} from "../../reducers/ui"
import {getAllTags} from "../../reducers/tags"
import {getAllProjects} from "../../reducers/projects"

const mapStateToProps = (state, ownProps) => {
    return {
        isExpanded: (ownProps.title === 'todo today' && state.ui.todoTodayHeader.isExpanded) ||
        (ownProps.title === 'pomo today' && state.ui.pomoTodayHeader.isExpanded),
        tags: getAllTags(state),
        projects: getAllProjects(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: (ownProps.title === 'todo today' && (() => dispatch(actions.toggleTodoTodayHeader()))) ||
        (ownProps.title === 'pomo today' && (() => dispatch(actions.togglePomoTodayHeader()))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)