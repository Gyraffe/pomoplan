import TodayView from './components/TodayView'
import {connect} from "react-redux"
import {selectTodos} from "../../reducers/todos"
import {getDayNotCompleted} from "../../reducers/calendar"
import {getToday} from "../../utils/date"

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state, getDayNotCompleted(state, getToday())),
    }
}

export default connect( mapStateToProps )(TodayView)