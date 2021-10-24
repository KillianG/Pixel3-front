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

    return (<>
            <table cellSpacing="0" className="square">
                <tbody >
                <tr key={"row_1"}>
                    <td onClick={() => {
                        setPos(props.square_size)
                        setColor(`#${squareColors[props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[props.square_size]}`}}
                    />
                    <td onClick={() => {
                            setPos(1)
                            setColor(`#${squareColors[1]}`)
                        }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1]}`}}
                    />
                    <td onClick={() => {
                        setPos(2)
                        setColor(`#${squareColors[2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2]}`}}
                    />
                    <td onClick={() => {
                        setPos(3)
                        setColor(`#${squareColors[3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3]}`}}
                    />
                    <td onClick={() => {
                        setPos(4)
                        setColor(`#${squareColors[4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4]}`}}
                    />
                    <td onClick={() => {
                        setPos(5)
                        setColor(`#${squareColors[5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5]}`}}
                    />
                    <td onClick={() => {
                        setPos(6)
                        setColor(`#${squareColors[6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6]}`}}
                    />
                    <td onClick={() => {
                        setPos(7)
                        setColor(`#${squareColors[7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7]}`}}
                    />
                    <td onClick={() => {
                        setPos(8)
                        setColor(`#${squareColors[8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8]}`}}
                    />
                    <td onClick={() => {
                        setPos(9)
                        setColor(`#${squareColors[9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9]}`}}
                    />
                </tr>
                <tr key={"row_2"}>
                    <td onClick={() => {
                        setPos(1 * props.square_size)
                        setColor(`#${squareColors[1 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 1)
                        setColor(`#${squareColors[1 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 2)
                        setColor(`#${squareColors[1 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 3)
                        setColor(`#${squareColors[1 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 4)
                        setColor(`#${squareColors[1 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 5)
                        setColor(`#${squareColors[1 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 6)
                        setColor(`#${squareColors[1 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 7)
                        setColor(`#${squareColors[1 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 8)
                        setColor(`#${squareColors[1 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(1 * props.square_size + 9)
                        setColor(`#${squareColors[1 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[1 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_3"}>
                    <td onClick={() => {
                        setPos(2 * props.square_size)
                        setColor(`#${squareColors[2 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 1)
                        setColor(`#${squareColors[2 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 2)
                        setColor(`#${squareColors[2 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 3)
                        setColor(`#${squareColors[2 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 4)
                        setColor(`#${squareColors[2 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 5)
                        setColor(`#${squareColors[2 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 6)
                        setColor(`#${squareColors[2 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 7)
                        setColor(`#${squareColors[2 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 8)
                        setColor(`#${squareColors[2 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(2 * props.square_size + 9)
                        setColor(`#${squareColors[2 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[2 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_4"}>
                    <td onClick={() => {
                        setPos(3 * props.square_size)
                        setColor(`#${squareColors[3 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 1)
                        setColor(`#${squareColors[3 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 2)
                        setColor(`#${squareColors[3 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 3)
                        setColor(`#${squareColors[3 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 4)
                        setColor(`#${squareColors[3 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 5)
                        setColor(`#${squareColors[3 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 6)
                        setColor(`#${squareColors[3 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 7)
                        setColor(`#${squareColors[3 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 8)
                        setColor(`#${squareColors[3 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(3 * props.square_size + 9)
                        setColor(`#${squareColors[3 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[3 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_5"}>
                    <td onClick={() => {
                        setPos(4 * props.square_size)
                        setColor(`#${squareColors[4 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 1)
                        setColor(`#${squareColors[4 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 2)
                        setColor(`#${squareColors[4 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 3)
                        setColor(`#${squareColors[4 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 4)
                        setColor(`#${squareColors[4 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 5)
                        setColor(`#${squareColors[4 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 6)
                        setColor(`#${squareColors[4 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 7)
                        setColor(`#${squareColors[4 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 8)
                        setColor(`#${squareColors[4 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(4 * props.square_size + 9)
                        setColor(`#${squareColors[4 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[4 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_6"}>
                    <td onClick={() => {
                        setPos(5 * props.square_size)
                        setColor(`#${squareColors[5 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 1)
                        setColor(`#${squareColors[5 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 2)
                        setColor(`#${squareColors[5 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 3)
                        setColor(`#${squareColors[5 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 4)
                        setColor(`#${squareColors[5 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 5)
                        setColor(`#${squareColors[5 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 6)
                        setColor(`#${squareColors[5 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 7)
                        setColor(`#${squareColors[5 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 8)
                        setColor(`#${squareColors[5 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(5 * props.square_size + 9)
                        setColor(`#${squareColors[5 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[5 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_7"}>
                    <td onClick={() => {
                        setPos(6 * props.square_size)
                        setColor(`#${squareColors[6 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 1)
                        setColor(`#${squareColors[6 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 2)
                        setColor(`#${squareColors[6 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 3)
                        setColor(`#${squareColors[6 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 4)
                        setColor(`#${squareColors[6 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 5)
                        setColor(`#${squareColors[6 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 6)
                        setColor(`#${squareColors[6 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 7)
                        setColor(`#${squareColors[6 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 8)
                        setColor(`#${squareColors[6 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(6 * props.square_size + 9)
                        setColor(`#${squareColors[6 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[6 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_8"}>
                    <td onClick={() => {
                        setPos(7 * props.square_size)
                        setColor(`#${squareColors[7 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 1)
                        setColor(`#${squareColors[7 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 2)
                        setColor(`#${squareColors[7 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 3)
                        setColor(`#${squareColors[7 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 4)
                        setColor(`#${squareColors[7 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 5)
                        setColor(`#${squareColors[7 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 6)
                        setColor(`#${squareColors[7 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 7)
                        setColor(`#${squareColors[7 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 8)
                        setColor(`#${squareColors[7 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(7 * props.square_size + 9)
                        setColor(`#${squareColors[7 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[7 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_9"}>
                    <td onClick={() => {
                        setPos(8 * props.square_size)
                        setColor(`#${squareColors[8 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 1)
                        setColor(`#${squareColors[8 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 2)
                        setColor(`#${squareColors[8 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 3)
                        setColor(`#${squareColors[8 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 4)
                        setColor(`#${squareColors[8 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 5)
                        setColor(`#${squareColors[8 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 6)
                        setColor(`#${squareColors[8 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 7)
                        setColor(`#${squareColors[8 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 8)
                        setColor(`#${squareColors[8 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(8 * props.square_size + 9)
                        setColor(`#${squareColors[8 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[8 * props.square_size + 9]}`}}
                    />
                </tr>
                <tr key={"row_10"}>
                    <td onClick={() => {
                        setPos(9 * props.square_size)
                        setColor(`#${squareColors[9 * props.square_size]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 1)
                        setColor(`#${squareColors[9 * props.square_size + 1]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 1]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 2)
                        setColor(`#${squareColors[9 * props.square_size + 2]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 2]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 3)
                        setColor(`#${squareColors[9 * props.square_size + 3]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 3]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 4)
                        setColor(`#${squareColors[9 * props.square_size + 4]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 4]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 5)
                        setColor(`#${squareColors[9 * props.square_size + 5]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 5]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 6)
                        setColor(`#${squareColors[9 * props.square_size + 6]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 6]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 7)
                        setColor(`#${squareColors[9 * props.square_size + 7]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 7]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 8)
                        setColor(`#${squareColors[9 * props.square_size + 8]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 8]}`}}
                    />
                    <td onClick={() => {
                        setPos(9 * props.square_size + 9)
                        setColor(`#${squareColors[9 * props.square_size + 9]}`)
                    }}
                        className={props.editable === true? "my-pixel-edit" : "my-pixel" }
                        style={{backgroundColor: `#${squareColors[9 * props.square_size + 9]}`}}
                    />
                </tr>
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
