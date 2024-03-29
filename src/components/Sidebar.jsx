import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Sidebar = () => {

    const options =
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
    }


    function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);

        return (
            <>
                <Button variant="primary" onClick={toggleShow} className="me-2">
                    {name}
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }

    function Example() {
        return (
            <>
                {options}
            </>
        );
    }

}

export default Sidebar
