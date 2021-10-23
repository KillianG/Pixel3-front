import React from 'react';
import { connect } from "react-redux"
import {mNFT, setActivatingConnector} from "../features/walletConnection/walletConnectionSlice";

const Square = (props) => {

}

const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)
