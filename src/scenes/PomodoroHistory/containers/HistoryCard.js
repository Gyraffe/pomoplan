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
export default connect(makeMapStateToProps)(PomoCard)