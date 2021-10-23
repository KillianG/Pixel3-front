import React from 'react';
import { connect } from "react-redux"

import Square from './Square'
import {mNFT, setActivatingConnector} from "../features/walletConnection/walletConnectionSlice";

const Grid = (props) => (
    <td
        style={{
            overflow:'hidden',
            width:'auto',
            height:'25px',
            backgroundColor:'#e4e4a1',
            color:'red',
            boarderColor: 'black',
            border:".5px solid black"
        }}
        onClick={props.handleClick} >
        <div
            style={{color: props.colors,
                border:"1px solid",
                backgroundColor: props.colors,
                borderRadius: "50%",
                borderColor: props.colors,
                height:25}} >
        </div>
    </td>
)



const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
