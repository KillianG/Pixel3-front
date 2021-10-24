import React, { useState } from 'react';
import { connect } from "react-redux"
import {ModalHeader, Modal, ModalBody } from "shards-react";
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
    border: ".0px solid black",
    padding: '0px'
}

const Editable = (props) => {
    const [open, toggle] = useState(false)

    if (props.colors[props.index] === undefined)
        return <></>
    return (<>
        <td style={tdStyle} >
            <div
            onClick={() => props.wallet_pixels.includes(props.index.toString()) ? toggle(true) : true}
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
