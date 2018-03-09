import ShortTodoCard from "./components/ShortTodoCard"
import {getProject} from "../../selectors/projects"
import {connect} from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        project: getProject(state, ownProps),
    }
}

export default connect(mapStateToProps)(ShortTodoCard)