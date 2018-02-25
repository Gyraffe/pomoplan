import React from 'react'
import PropTypes from 'prop-types'
import {OptionTitle, Dropdown, Option} from "./styles"
import DropdownSelect from "../containers/DropdownSelect"

const Filter = ({children, items}) => {
    return(
        <Option>
            <OptionTitle caret>
                {children}
            </OptionTitle>
            <Dropdown right>
                {
                    items ?
                        items.map( item => <DropdownSelect key={item.name} type={children} color={item.color}>{item.name}</DropdownSelect>)
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