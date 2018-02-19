import {connect} from "react-redux"
import NavBar from "./components/NavBar"
import {actions} from "../../reducers/ui"

const mapStateToProps = (state) => {
    return {
        isOpen: state.ui.navigationIsOpened
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openNavigation: () => dispatch(actions.toggleNavigation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)