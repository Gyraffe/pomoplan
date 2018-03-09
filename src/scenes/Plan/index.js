import Plan from "./components/Plan"
import {connect} from "react-redux"
import {getCurrentDateSelected} from "../../selectors/calendarPlan"

const mapStateToProps = (state) => {
    return {
        dateSelected: getCurrentDateSelected(state)
    }
}

export default connect(mapStateToProps)(Plan)