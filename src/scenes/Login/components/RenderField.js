import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Input} from "reactstrap"
import Tooltip from 'material-ui/Tooltip'
import {Icon, FieldLabel} from "./styles"

const RenderField = ({input, label, type, meta: {touched, error, warning}}) => {
    let visible = "invisible"
    const invalid = (touched && (warning || error))
    const errors = (touched && error)
    if(invalid)
        visible = "visible"
    return (
        <div className={"px-2 py-1"}>
            <div className={"clearfix"}>
                <FieldLabel className={"float-left"} for={input.name}>{label} </FieldLabel>
                {invalid &&
                <Tooltip placement="left" className={"d-none d-lg-block " + visible}
                         title={invalid ? (error || warning) : ''}>
                    <Icon error={touched && error} invalid className="float-right">error</Icon>
                </Tooltip>}
                {invalid &&
                <Badge color={errors ? "danger" : "warning"} className={"d-lg-none float-right " + visible} pill>
                    {errors ? error : warning}</Badge>}
            </div>
            <Input {...input} type={type}/>
        </div>
    )
}

RenderField.propTypes = {
    className: PropTypes.string
}

export {RenderField}
