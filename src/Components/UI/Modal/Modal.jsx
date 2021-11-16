import React from 'react'
import './Modal.css';
export default function Modal({active, setActive, children}) {
    return (
        <div onClick={() => setActive(false)} className={active ? "modal active" : "modal"}>
            <div onClick={(event) => event.stopPropagation()} className={active ? "modal_content active" : "modal_content"}>
                {children}
            </div>
        </div>
    )
}
