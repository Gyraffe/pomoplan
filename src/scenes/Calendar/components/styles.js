import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    border-radius: ${props => props.theme.cardBorderRadius};
    background-color: ${props => props.theme.whitePerl};
    box-shadow: ${props => props.theme.shadow[5]};
    transition-property: box-shadow;
    transition-duration: ${props => props.theme.shadowCardDur};
    &:hover {
    box-shadow: ${props => props.theme.shadow[8]};
    }
`
export const CalendarTitle = styled.div`
    font-weight: ${props => props.theme.fontWeightBold};
    color: ${props => props.theme.lightBlue};
    font-size: 2.2rem;
    text-align: center;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background-color: ${props => props.theme.orange};
    color:${props => props.theme.whitePerl};
    font-size: 1.5rem;
    margin: ${props => props.theme.margin.xm} 0;
`

export const Button = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.whiteDirty};
    cursor: pointer;
`

export const MonthName = styled.div`
    font-weight: ${props => props.theme.fontWeightNormal};
    text-transform: lowercase;
`
export const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.theme.margin.xm} 0;

`

export const DayNames = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.whitePerl};
`
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${props => props.theme.whiteDirty};

`
export const DayHeader = styled.div`
    display: flex;
    width: 100%;
`
export const DayContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const DayNumber = styled.div`
    font-weight: ${props => props.theme.fontWeightBold};
    padding: 0 ${props => props.theme.padding.s};
    color: ${props => (props.today && props.theme.lightBlue) || props.theme.orange};
`
DayNumber.propTypes = {
    today: PropTypes.bool
}

export const GridSquare = styled.div`
    flex: 1;
    border-right: 1px ${props => props.theme.whiteDirty} solid;
    border-bottom: 1px ${props => props.theme.whiteDirty} solid;
    background-color: ${props => props.isSelected ? props.theme.whitePerl : props.theme.whiteDirty};
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    &:nth-child(8n){
    border-right: 0;
    }
    &:after{
    content: " ";
    padding-bottom: 100%;
    display: block;
    }
`

GridSquare.propsTypes = {
    isSelected: PropTypes.bool
}

export const BlankGridSquare = GridSquare.extend`
    background-color: ${props => props.theme.grey};
    border-right: 1px ${props => props.theme.grey} solid;
    border-bottom: 1px ${props => props.theme.grey} solid;
`

export const Break = styled.div`
    flex-basis: 100%;

`

export const DayName = styled.div`
    text-transform: lowercase;
    flex:1;
    text-align: center;
    line-height: 2.2rem;
`

export const DayTodos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`