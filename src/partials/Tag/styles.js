import styled from 'styled-components'

const TagBody = styled.div`
background-color: ${props=> props.color};
color: ${props => props.theme.whitePerl};
border-radius: ${props => props.theme.pillBorderRadius};
border: 1px ${props=> props.color} solid;
font-weight: ${props => props.theme.fontWeightNormal};
font-size: 0.9em;
display: flex;
align-items: center;
justify-content: center;
line-height: 1;
height: 1.5rem;
padding: 0.1rem 0.3rem;
margin: 0.1rem 0.2rem;
flex: 1 0 auto;  
word-wrap: break-word;
`
export {TagBody}