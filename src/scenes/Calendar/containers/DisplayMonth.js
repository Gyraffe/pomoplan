import Header from '../components/Header'
import {connect} from "react-redux"
import {getMonthToDisplay} from "../../../selectors/calendarPlan"
import {actions} from "../../../reducers/calendarPlan"

const mapStateToProps = state => {
    return {
        month: getMonthToDisplay(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNextMonth: () => dispatch(actions.showNextMonth()),
        showPrevMonth: () => dispatch(actions.showPrevMonth()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)