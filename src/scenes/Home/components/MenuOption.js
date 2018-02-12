import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import {Col} from "reactstrap"
import {MenuOptionCard} from "./styles"

export const MenuOption = (props) => {
    const important = props.important
    const shouldExpand = props.expand
    return (
        <Col xs={"12"} xl={shouldExpand ? "4" : "12"}>
            <Link to={props.path}>
                <MenuOptionCard important={important} shadow={2} className={"mb-3"}>
                    {props.children}
                </MenuOptionCard>
            </Link>
        </Col>

    )
}

MenuOption.propTypes = {
    path: PropTypes.string.isRequired,
    important: PropTypes.bool,
    expand: PropTypes.bool
}
