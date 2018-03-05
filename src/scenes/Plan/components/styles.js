import styled from 'styled-components'
import AddTodoButton from "./AddTodoButton"

export const AddingButton = styled(AddTodoButton)`
    background-color: ${props => props.theme.orange};
    min-height: ${props => props.theme.cardHeight};
    border-radius: ${props => props.theme.pillBorderRadius};
    color: ${props => props.theme.whitePerl};
    font-weight: ${props => props.theme.fontWeightBold};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    box-shadow: ${props => props.theme.shadow[5]};
    transition-property: box-shadow;
    transition-duration: ${props => props.theme.shadowCardDur};
    &:hover {
    box-shadow: ${props => props.theme.shadow[11]};
    }
`