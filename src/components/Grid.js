import React, {useEffect, useState} from 'react';
import { connect } from "react-redux"

import {mNFT, setActivatingConnector, changeColors} from "../features/walletConnection/walletConnectionSlice";
import {Button } from "shards-react";
import {useWeb3React} from "@web3-react/core";
import Editable from "./Editable";

import "./grid.css"

const Grid = (props) => {
    const context = useWeb3React()
    const { library, account } = context;
    const row_list = Array.from(Array(props.board_size).keys())

    if (props.colors && props.colors.length === 0) {
        return <></>
    }

    return (<> { (props.colors_to_update.length === 0) ?
        <></> : <Button onClick={() => {
            props.changeColors(props.colors_to_update, account, library)
        }} >You have non push colors </Button> }

        <div>
            <table cellSpacing="0" className="base-grid">
                <tbody>
                {row_list.map((row, i) => (
                    <tr key={"row_"+i}>
                        {row_list.map((col, j) => {
                            if (i * props.board_size + j >= props.colors.length)
                                return <></>
                            return <Editable index={i * props.board_size + j} key={i+"_"+j} />
                        })}
                    </tr>))}
                </tbody>
            </table>
        </div>
    </>)

}



const mapStateToProps = state => ({
    colors_to_update: state.walletConnection.colors_to_update,
    colors: state.walletConnection.colors,
    board_size: state.walletConnection.board_size,
    square_size: state.walletConnection.board_size,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
    changeColors
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
