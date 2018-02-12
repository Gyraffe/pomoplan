import React from 'react'
import {Container,Navbar, NavbarToggler} from "reactstrap"
import * as PATH from '../../../constants/routes'
import {AppTitle} from "./styles"
import NavCollapse from "./NavCollapse"
import Icon from "../../../styles/Icon"

const NavBar = props => {
    return (
        <Navbar className={"mb-md-0 mb-4"} expand="md">
            <Container className={"justify-content-center justify-content-md-between flex-wrap"}>
                <AppTitle exact to={PATH.HOME}>
                    PomoPlan
                </AppTitle>
                <NavbarToggler onClick={props.openNavigation}>
                    <Icon icon={"menu"}/>
                </NavbarToggler>
                <NavCollapse isOpen={props.isOpen}/>
            </Container>
        </Navbar>
    )
}

export default NavBar