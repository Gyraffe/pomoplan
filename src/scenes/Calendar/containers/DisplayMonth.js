import Header from '../components/Header'
import {connect} from "react-redux"
import {getMonthToDisplay} from "../../../selectors/calendarPlan"

const mapStateToProps = state => {
    return {
        month: getMonthToDisplay(state)
    }
}

export default connect(mapStateToProps)(Header)