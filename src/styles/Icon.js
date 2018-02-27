import styled from "styled-components"
import PropTypes from 'prop-types'
import React from "react"

const HelpingIcon = props => {
    return(
        <i className={props.className}>{props.icon}</i>
    )
}

const Icon = styled(HelpingIcon).attrs({
    className: ' material-icons'
})`
    color: ${props => 
    (props.primary && props.theme.lightBlue ) || (props.accent && props.theme.orange ) 
    ||  (props.dark && props.theme.grey) || props.theme.whitePerl};
    display: inline-block;
`

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    dark: PropTypes.bool,
}

export default Icon