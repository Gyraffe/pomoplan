import TodayView from './components/TodayView'
import {connect} from "react-redux"
import {getFilteredTodos} from "../../selectors/todos"

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getFilteredTodos(state, ownProps),
    }
}

export default connect( mapStateToProps )(TodayView)