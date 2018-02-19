import styled from 'styled-components'
import {modularScale, transparentize} from "polished"

export const Info = styled.div`
    padding: ${props => props.theme.padding.xxl} 0;
    text-align: center;
    font-size: ${modularScale(3.5)};
    color: ${props => transparentize(0.5, props.theme.whitePerl)};
    transition: color 1s;
    &:hover,:focus{
        color: ${props => transparentize(0, props.theme.whitePerl)};
    }
`
