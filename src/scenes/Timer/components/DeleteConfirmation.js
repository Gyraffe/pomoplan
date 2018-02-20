import React from 'react'
import PropTypes from 'prop-types'
import {Info, Option, Options, TextInfo} from "./styles"
import Icon from "../../../styles/Icon"

const DeleteConfirmation = ({handleSubmit, handleCancel}) =>{
    return(
        <Info>
            <TextInfo>{"Are you sure you want to delete this pomo?"}</TextInfo>
            <Options>
                <Option primary onClick={handleSubmit}>
                    <Icon icon={"done"} primary/>
                </Option>
                <Option onClick={handleCancel}>
                    <Icon icon={"close"} dark/>
                </Option>
            </Options>
        </Info>
    )
}

DeleteConfirmation.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

export default DeleteConfirmation