import React from 'react';
import { connect } from "react-redux"

import Square from './Square'
import {mNFT, setActivatingConnector} from "../features/walletConnection/walletConnectionSlice";

const Grid = (props) => {
    const style={
        textAlign: "center",
        margin:"auto",
        height: "auto",
        width:"500px",
        border:"1px solid black",
        tableLayout:'fixed',
    };

    if (props.colors.length === 0) {
        return <></>
    }

    const row_list = Array.from(Array(Math.floor(props.colors.length / 10 + 1)).keys())
    const board = row_list.map((row, i) => (
        <tr key={"row_"+i}>
            {Array.from(Array(10).keys()).map((col, j) => {
                if (i * 10 + j >= props.colors.length)
                    return <></>
                return <Square handleClick={()=>this.handleClick(i,j)} index={i*10+j} key={i+"_"+j} />
            })}
        </tr>));
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
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
