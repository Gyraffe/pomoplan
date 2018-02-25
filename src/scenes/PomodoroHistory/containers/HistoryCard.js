import {connect} from "react-redux"
import PomoCard from "../components/PomoCard"
import {getComponentTags} from "../../../selectors/tags"
import {getProject} from "../../../selectors/projects"

const makeMapStateToProps = () => {
    return (state, props) => {
        return {
            tags: getComponentTags(state, props),
            project: getProject(state, props)
        }
    }
}

/*const mapStateToProps = (state, ownProps) => {
    return {
        tags: getTags(ownProps, state.tags),
        project: getProject(ownProps, state)
    }
}*/

export default connect(makeMapStateToProps)(PomoCard)