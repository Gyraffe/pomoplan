import React from "react"
import PropTypes from "prop-types"
import {HeaderWrapper, MonthName, Button} from './styles'
import Icon from "../../../styles/Icon"

const Header = ({month}) => {
    return (
        <HeaderWrapper>
            <Button>
                <Icon icon={"arrow_back"}/>
            </Button>
            <MonthName>
                {month}
            </MonthName>
            <Button>
                <Icon icon={"arrow_forward"}/>
            </Button>
        </HeaderWrapper>
    )
}

Header.propTypes = {
    month: PropTypes.string,
    year: PropTypes.string,
}

export default Header