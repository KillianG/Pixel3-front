import React, { useState } from 'react';
import { connect } from "react-redux"
import {HexColorPicker} from "react-colorful";
import { Form, FormInput } from "shards-react";

import {mNFT, setActivatingConnector, updateColor} from "../features/walletConnection/walletConnectionSlice";

import "./Square.css"


const pixelStyle = {
    overflow:'hidden',
    width:'auto',
    height:'2px',
    backgroundColor: 'white',
    boarderColor: 'red' ,
    border: ".1px solid black",
    padding: '0px'
}
const tableStyle = {
    textAlign: "center",
    margin: "auto",
    height: "100%",
    width: "100%",
    border: "0px solid black",
    tableLayout: 'fixed',
}

const Square = (props) => {
    const squareColors = props.colors[props.index]
    const [pos, setPos] = useState(undefined)
    const [color, setColor] = useState(`#ffffff`);
    const onChange = (color) => {
        setColor(color)
        props.updateColor(props.index, pos, color.substring(1))
    }

    const row_list = Array.from(Array(props.square_size).keys())

    return (<>
            <table cellSpacing="0" className="square">
                <tbody >
                {row_list.map((row, i) => (<tr key={"row_"+i}>
                        {row_list.map((col, j) => <td
                                onClick={() => {
                                    setPos(i * props.square_size + j)
                                    setColor(`#${squareColors[i * props.square_size + j]}`)
                                }}
                                className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                                style={{backgroundColor: `#${squareColors[i * props.square_size + j]}`}}
                            />
                        )}
                    </tr>))}
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
    colors: state.walletConnection.colors,
    square_size: state.walletConnection.square_size,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
    updateColor,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
