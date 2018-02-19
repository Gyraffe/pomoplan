import React from 'react'
import PropTypes from 'prop-types'
import {OptionTitle, Dropdown, Option, DropdownOption} from "./styles"

const Filter = ({children, items}) => {
    return(
        <Option>
            <OptionTitle caret>
                {children}
            </OptionTitle>
            <Dropdown right>
                {
                    items ?
                        items.map( item => <DropdownOption key={item.name} color={item.color}>{item.name}</DropdownOption>)
                        : ''
                }
            </Dropdown>
        </Option>
    )
}

Filter.propTypes ={
    children: PropTypes.node.isRequired,
    items: PropTypes.array
}

export default Filter