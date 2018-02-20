import {connect} from "react-redux"
import Day from "../components/Day"

const mapStateToProps = (state, ownProps) => {
    return {
        dayHistory: state.pomoHistory[ownProps.day].reverse()
    }
}

export default connect(mapStateToProps)(Day)