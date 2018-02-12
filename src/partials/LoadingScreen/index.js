import {CircularProgress} from "material-ui/Progress/index"
import React from "react"
import {Loading} from "./styles"

const LoadingScreen = () => {
    return(
        <Loading>
            <CircularProgress color="secondary"/>
        </Loading>
    )
}
export default LoadingScreen