import { Button } from '@material-ui/core'
import React from 'react'

function Placeholder(props) {
    return (
        <div className="placeholder">
            <div>error , internet not found</div>
            <Button onclick={props.reload}>reload</Button>
        </div>
    )
}

export default Placeholder
