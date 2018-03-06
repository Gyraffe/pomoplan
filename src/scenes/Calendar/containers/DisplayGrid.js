import {connect} from "react-redux"
import {getCurrentDateDisplayed} from "../../../selectors/calendarPlan"
import CalendarDays from "../components/CalendarDays"

const mapStateToProps = state => {
    return {
        currentMoment: getCurrentDateDisplayed(state)
    }
}

export default connect(mapStateToProps)(CalendarDays)