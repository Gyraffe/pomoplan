import React from 'react'
import * as PATH from "../../../constants/routes"
import {Collapse, Nav, NavItem} from "reactstrap"
import {Link} from "./styles"
import PropTypes from 'prop-types'

const NavCollapse = props => {
    return(
        <Collapse isOpen={props.isOpen} navbar>
            <Nav className="ml-auto justify-content-center">
                <NavItem className={"mx-2"}>
                    <Link to={PATH.TODAY_VIEW}>
                        today
                    </Link>
                </NavItem>
                <NavItem className={"mx-2"}>
                    <Link to={PATH.START_POMO}>
                        pomo
                    </Link>
                </NavItem>
                <NavItem className={"mx-2"}>
                    <Link to={PATH.STATS}>
                        stats
                    </Link>
                </NavItem>
                <NavItem className={"mx-2"}>
                    <Link to={PATH.PLAN_WEEK}>
                        plan
                    </Link>
                </NavItem>
            </Nav>
        </Collapse>
    )
}

NavCollapse.propTypes = {
    isOpen: PropTypes.bool
}

export default NavCollapse