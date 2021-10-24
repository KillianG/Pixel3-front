import React, {useState} from 'react';
import { connect } from "react-redux"
import {mNFT, setActivatingConnector, cColors} from "../features/walletConnection/walletConnectionSlice";
import {Button, ModalHeader, Modal, ModalBody, FormInput} from "shards-react";
import { HexColorPicker } from "react-colorful";
import {useWeb3React} from "@web3-react/core";


const Square = (props) => {
    const context = useWeb3React()
    const {  library, account } = context;

    const [open, toggle] = useState(false)
    const [color, setColor] = useState(`#${props.colors[props.index]}`);

    console.log(props.index)
    console.log(props.wallet_pixels.includes(props.index))
    const isUser = props.wallet_pixels.includes(props.index.toString())
    return (<td
        style={{
            overflow:'hidden',
            width:'auto',
            height:'25px',
            backgroundColor:(isUser ? 'red' : 'black'),
            color:'red',
            boarderColor: (isUser ? 'red' : 'black'),
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
        <Modal open={open} toggle={() => {
            toggle(false)
            setColor(`#${props.colors[props.index]}`)
        }}>
            <ModalHeader>Header</ModalHeader>
            <ModalBody>
                <HexColorPicker color={color} onChange={setColor} />
                <FormInput placeholder="Normal input" className="mb-2" value={color}/>
                <Button onClick={() => props.cColors({pixels: [ props.index ], colors: [ color.substring(1) ], account: account, library: library})} >Validate</Button>
            </ModalBody>
        </Modal>
    </td>)
}

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
    wallet_pixels: state.walletConnection.wallet_pixels,
})

const mapDispatchToProps = {
    setActivatingConnector,
    cColors,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
