import TodayView from './components/TodayView'
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect( mapStateToProps )(TodayView)