import {connect} from "react-redux"
import NavBar from "./components/NavBar"
import * as A from "../../constants/actionTypes"

const mapStateToProps = (state) => {
    return {
        isOpen: state.navigationBar.navigationIsOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openNavigation: () => dispatch(toggleNavigation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

function toggleNavigation(){
    return {
        type: A.TOGGLE_NAVIGATION
    }
}