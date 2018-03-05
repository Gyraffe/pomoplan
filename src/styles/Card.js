import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
    border-radius: ${props => props.pill ? props.theme.pillBorderRadius : props.theme.cardBorderRadius};
    background-color: ${props => props.theme.whitePerl};
    text-align: ${props => (props.left && 'left') || (props.right && 'right') || 'center'};
    color: ${props => (props.clearText && props.theme.whiteDirty) || props.theme.lightBlue};
    box-shadow: ${props => (props.shadow && props.theme.shadow[props.shadow]) || props.theme.shadow[2]};
    transition-property: box-shadow;
    transition-duration: ${props => props.theme.shadowCardDur};
    &:hover {
    box-shadow: ${props => (props.shadow && props.theme.shadow[props.shadow + 7]) ||
    (props.shadowHover && props.theme.shadow[props.shadowHover]) || props.theme.shadow[7]};
    }
`

Card.propTypes = {
    shadow: PropTypes.number,
    shadowHover: PropTypes.number,
    pill: PropTypes.bool,
    clearText: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
}
export default Card