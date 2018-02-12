import ShortTag from "../../../styles/ShortTag"
import {Tags} from "./styles"
import React from "react"

const TodoCardShortTags = props => {
    return (
        <Tags justify={'flex-start'} align={'center'}>
            <ShortTag color={"#F2C94C"}/>
            <ShortTag color={"#EB5757"}/>
            <ShortTag color={"#F2C94C"}/>
        </Tags>
    )
}

export default TodoCardShortTags