import {connect} from "react-redux"
import PomoCard from "../components/PomoCard"
import {getTags} from "../../../reducers/tags"
import {getProject} from "../../../reducers/projects"

const mapStateToProps = (state, ownProps) => {
    return {
        tags: getTags(ownProps, state.tags),
        project: getProject(ownProps, state)
    }
}

export default connect(mapStateToProps)(PomoCard)