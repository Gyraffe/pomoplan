import {isSelected} from "../../../selectors/calendarPlan"
import {connect} from "react-redux"
import CalendarDay from "../components/CalendarDay"
import {actions} from "../../../reducers/calendarPlan"
import {makeGetFilteredAllTodos} from "../../../selectors/todos"

const makeMapStateToProps = () => {
    const getFilteredTodos = makeGetFilteredAllTodos()
    return (state, ownProps) => {
        return {
            isSelected: isSelected(state, ownProps),
            todos: getFilteredTodos(state, ownProps),
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectDay: () => dispatch(actions.selectDay(ownProps.moment))
    }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(CalendarDay)