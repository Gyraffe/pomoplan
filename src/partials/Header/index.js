import Header from './components/Header'
import {connect} from "react-redux"
import {actions} from "../../reducers/ui"
import {getAllTags} from "../../selectors/tags"
import {getAllProjects} from "../../selectors/projects"

const mapStateToProps = (state, ownProps) => {
    return {
        isExpanded: ownProps.title === 'pomo today' ? state.ui.pomoTodayHeader.isExpanded :
        state.ui.dayHeader.isExpanded,
        tags: getAllTags(state),
        projects: getAllProjects(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: ownProps.title === 'pomo today' ? (() => dispatch(actions.togglePomoTodayHeader())) :
        (() => dispatch(actions.toggleTodoTodayHeader())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)