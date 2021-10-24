import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {Button, ModalHeader, Modal, ModalBody, FormInput, Col, Form} from "shards-react";
import { HexColorPicker } from "react-colorful";
import {
    addColorToUpdate,
    mNFT,
    setActivatingConnector,
    updateCachedColor
} from "../features/walletConnection/walletConnectionSlice";
import Square from "./Square";

const tdStyle = {
    overflow: 'hidden',
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    boarderColor: 'red',
    border: ".5px solid black"
}

const Editable = (props) => {
    const [open, toggle] = useState(false)
    // const [color, setColor] = useState(`#ffffff`);

    const isUserSquare = props.wallet_pixels.includes(props.index.toString())

    if (props.colors[props.index] === undefined)
        return <></>
    return (<>
        <td
            style={tdStyle}
        >
            <div
            onClick={() => isUserSquare ? toggle(true) : true}
            >
            <Square index={props.index}/>
            </div>
            <Modal open={open} toggle={() => toggle(false)}>
                <ModalHeader>Header</ModalHeader>
                <ModalBody>
                    <Square index={props.index} editable={true}/>
                </ModalBody>
            </Modal>
        </td>
    </>)
}

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
    wallet_pixels: state.walletConnection.wallet_pixels,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
    addColorToUpdate,
    updateCachedColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Editable)
