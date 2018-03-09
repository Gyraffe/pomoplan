import DayView from './components/DayView'
import {connect} from "react-redux"
import {makeGetFilteredTodos} from "../../selectors/todos"

const makeMapStateToProps = () => {
    const getFilteredTodos = makeGetFilteredTodos()
    return (state, ownProps) => {
        return {
            todos: getFilteredTodos(state, ownProps),
        }
    }
}

export default connect( makeMapStateToProps )(DayView)