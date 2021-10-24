import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"
import {HexColorPicker} from "react-colorful";
import { Form, FormInput } from "shards-react";

import {mNFT, setActivatingConnector, updateColor} from "../features/walletConnection/walletConnectionSlice";


const pixelStyle = {
    overflow:'hidden',
    width:'auto',
    height:'25px',
    backgroundColor: 'white',
    boarderColor: 'red' ,
    border:".5px solid black"
}
const tableStyle = {
    textAlign: "center",
    margin: "auto",
    height: "100%",
    width: "100%",
    border: "1px solid black",
    tableLayout: 'fixed',
}

const Square = (props) => {
    const squareColors = props.colors[props.index]
    const [square, setSquare] = useState([])
    const [pos, setPos] = useState(undefined)
    const [color, setColor] = useState(`#ffffff`);
    const onChange = (color) => {
        setColor(color)
        props.updateColor(props.index, pos, color.substring(1))
    }

    useEffect(() => {
        const row_list = Array.from(Array(10).keys())
        setSquare(row_list.map((row, i) => (
            <tr key={"row_"+i}>
                {Array.from(Array(10).keys()).map((col, j) => {
                    if (squareColors && i * 10 + j >= squareColors.length)
                        return <></>
                    return <td
                        onClick={() => {
                            setPos(i * 10 + j)
                            setColor(`#${squareColors[i*10+j]}`)
                        }}
                        style={{...pixelStyle, backgroundColor: `#${squareColors[i*10+j]}`}}
                    />
                })}
            </tr>)));
    }, [props.get_colors, props.get_wallet, props.update_colors])

    return (<>
            <table cellSpacing="0" style={tableStyle}>
                <tbody >
                {square}
                </tbody>
            </table>
        {(props.editable === true && pos !== undefined ? <>
            <HexColorPicker color={color} onChange={onChange} />
            <Form>
                <FormInput placeholder="Normal input" className="mb-2" value={color} onChange={onChange}/>
            </Form>
        </> : true )}
    </>)
}

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
    wallet_pixels: state.walletConnection.wallet_pixels,

    get_colors: state.walletConnection.get_colors,
    get_wallet: state.walletConnection.get_wallet,
    update_colors: state.walletConnection.update_colors,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
    updateColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
