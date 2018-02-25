import {DropdownOption} from "../components/styles"
import {connect} from "react-redux"
import {getFilteredTodayProject, getFilteredTodayTags} from "../../../selectors/ui"

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownOption)