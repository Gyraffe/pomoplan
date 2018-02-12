import styled from "styled-components"
import {rem} from "polished/lib/index"
import PropTypes from 'prop-types'

const ShortTag = styled.span`
        border-radius: 50%;
        width: ${props => props.theme.shortTagSize};
        height: ${props => props.theme.shortTagSize};
        background: ${props => props.color || props.theme.whiteDirty};
        display: inline-block;
        margin-right: ${rem('3px')};
`

ShortTag.propTypes = {
    color: PropTypes.string
}

export default ShortTag