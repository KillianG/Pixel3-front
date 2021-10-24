import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"

import {mNFT, setActivatingConnector, changeColors} from "../features/walletConnection/walletConnectionSlice";
import {Button } from "shards-react";
import {useWeb3React} from "@web3-react/core";
import Editable from "./Editable";

const Grid = (props) => {
    const context = useWeb3React()
    const { library, account } = context;
    const [board, setBoard] = useState([]);
    const style={
        textAlign: "center",
        margin:"auto",
        height: "100px",
        width:"1000px",
        border:"1px solid black",
        tableLayout:'fixed',
    };

    useEffect(() => {
        console.log(props.colors.length)
        const round = props.constructor % 10 === 0 ? 0 : 1
        const row_list = Array.from(Array(Math.floor(props.colors.length / 10 + round )).keys())
        setBoard(row_list.map((row, i) => (
            <tr key={"row_"+i}>
                {Array.from(Array(10).keys()).map((col, j) => {
                    if (i * 10 + j >= props.colors.length)
                        return <></>
                    return <Editable index={i*10+j} key={i+"_"+j} />
                })}
            </tr>)));
    }, [props.get_colors, props.get_wallet, props.colors])

    if (props.colors.length === 0) {
        return <></>
    }

    return (<>
        { (props.colors_to_update.length === 0) ? <></> : <Button onClick={() => props.changeColors(props.colors_to_update, account, library)} >You have non push colors </Button> }
        <div style={{margin: 'auto', width:"1000px", height: "100px"}}>
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
    colors_to_update: state.walletConnection.colors_to_update,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
    changeColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
