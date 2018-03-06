import React from "react"
import PropTypes from "prop-types"
import {HeaderWrapper, MonthName, Button} from './styles'
import Icon from "../../../styles/Icon"

const Header = ({month, showNextMonth, showPrevMonth}) => {
    return (
        <HeaderWrapper>
            <Button onClick={showPrevMonth}>
                <Icon icon={"arrow_back"}/>
            </Button>
            <MonthName>
                {month}
            </MonthName>
            <Button onClick={showNextMonth}>
                <Icon icon={"arrow_forward"}/>
            </Button>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    month: PropTypes.string,
    showNextMonth: PropTypes.func,
    showPrevMonth: PropTypes.func,
}

export default Header