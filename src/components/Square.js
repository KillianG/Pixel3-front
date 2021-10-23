import React, {useState} from 'react';
import { connect } from "react-redux"
import {mNFT, setActivatingConnector, cColors} from "../features/walletConnection/walletConnectionSlice";
import {Button, ModalHeader, Modal, ModalBody, Form, FormGroup, FormInput} from "shards-react";
import { HexColorPicker } from "react-colorful";
import {useWeb3React} from "@web3-react/core";


const Square = (props) => {
    const context = useWeb3React()
    const { connector, library, account, activate, deactivate, active, error } = context;

    const [open, toggle] = useState(false)
    const [color, setColor] = useState(`#${props.colors[props.index]}`);

    return (<td
        style={{
            overflow:'hidden',
            width:'auto',
            height:'25px',
            backgroundColor:'#e4e4a1',
            color:'red',
            boarderColor: 'black',
            border:".5px solid black"
        }}
    >
        <Button
            onClick={() => toggle(true)}
            style={{color: `#${props.colors[props.index]}`,
                border:"1px solid",
                backgroundColor: `#${props.colors[props.index]}`,
                borderColor: `#${props.colors[props.index]}`,
                height:25}} >
            { props.colors[props.index] }
        </Button>
        <Modal open={open} toggle={() => toggle(false)}>
            <ModalHeader>Header</ModalHeader>
            <ModalBody>
                <HexColorPicker color={color} onChange={setColor} />
                <Button onClick={() => props.cColors({pixels: [ props.index ], colors: [ color.substring(1) ], account: account, library: library})} >Validate</Button>
            </ModalBody>
        </Modal>
    </td>)
}

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
})

const mapDispatchToProps = {
    setActivatingConnector,
    cColors,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
