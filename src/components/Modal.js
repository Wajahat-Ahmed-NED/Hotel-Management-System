import React from 'react'

export default function Modal(props) {
    return (
        <>
            <div class="modal-dialog modal-fullscreen-sm-down">
                {props.value}
            </div>
        </>
    )
}
