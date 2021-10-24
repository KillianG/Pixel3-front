import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"

import Square from './Square'
import {mNFT, setActivatingConnector} from "../features/walletConnection/walletConnectionSlice";

const Grid = (props) => {
    const [board, setBoard] = useState([]);
    const style={
        textAlign: "center",
        margin:"auto",
        height: "auto",
        width:"500px",
        border:"1px solid black",
        tableLayout:'fixed',
    };
    useEffect(() => {
        const row_list = Array.from(Array(Math.floor(props.colors.length / 10 + 1)).keys())
        setBoard(row_list.map((row, i) => (
            <tr key={"row_"+i}>
                {Array.from(Array(10).keys()).map((col, j) => {
                    if (i * 10 + j >= props.colors.length)
                        return <></>
                    return <Square handleClick={()=>this.handleClick(i,j)} index={i*10+j} key={i+"_"+j} />
                })}
            </tr>)));
    }, [props.get_colors, props.get_wallet])

    if (props.colors.length === 0) {
        return <></>
    }

    return (<>
        <div style={{margin: 'auto', width:"40%"}}>
            <table cellSpacing="0" style={style}>
                <tbody>
                {board}
                </tbody>
            </table>
        </div>
    </>)

}



const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
    wallet_pixels: state.walletConnection.wallet_pixels,

    get_colors: state.walletConnection.get_colors,
    get_wallet: state.walletConnection.get_wallet,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
