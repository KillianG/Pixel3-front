import React from 'react';
import { connect } from "react-redux"
import {mNFT, setActivatingConnector} from "../features/walletConnection/walletConnectionSlice";

const Square = (props) => (
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
        // onClick={props.handleClick}
    >
        <div
            style={{color: `#${props.colors[props.index]}`,
                border:"1px solid",
                backgroundColor: `#${props.colors[props.index]}`,
                borderColor: `#${props.colors[props.index]}`,
                height:25}} >
            { props.colors[props.index] }
        </div>
    </td>
)

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
