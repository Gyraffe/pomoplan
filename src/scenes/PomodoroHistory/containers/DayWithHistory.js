import {connect} from "react-redux"
import Day from "../components/Day"
import {getPomoHistory} from "../../../reducers/pomoHistory"

const mapStateToProps = (state, ownProps) => {
    return {
        dayHistory: getPomoHistory(state, ownProps.day)
    }
}

export default connect(mapStateToProps)(Day)