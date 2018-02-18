import HistoryBox from "../components/HistoryBox"
import {connect} from "react-redux"


const mapStateToProps = (state) => {
    return {
        history: state.pomoHistory
    }
}

export default connect(mapStateToProps)(HistoryBox)