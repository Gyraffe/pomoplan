import {isSelected} from "../../../selectors/calendarPlan"
import {connect} from "react-redux"
import CalendarDay from "../components/CalendarDay"
import {actions} from "../../../reducers/calendarPlan"

const mapStateToProps = (state, ownProps) => {
    return {
        isSelected: isSelected(state, ownProps)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectDay: () => dispatch(actions.selectDay(ownProps.moment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay)