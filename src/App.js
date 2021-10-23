import React from 'react';
import {connect} from "react-redux";

import './App.css';

import {POLLING_INTERVAL} from "./dapp/connectors";
import {Web3Provider} from "@ethersproject/providers";
import {useEagerConnect, useInactiveListener} from "./dapp/hooks";
import {mNFT, setActivatingConnector, setTriedEager, getColorsAsync} from "./features/walletConnection/walletConnectionSlice";

import Grid from "./components/Grid";
import Counter from './features/counter/Counter';
import Connection from "./components/Connection";
import {useWeb3React} from "@web3-react/core";

export function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

const App = (props) => {
    const context = useWeb3React()
    const { library } = context;
    props.getColorsAsync(library)
    useInactiveListener(!props.triedEager || !!props.activatingConnector);
    useEagerConnect(props.triedEager, props.setTriedEager)
    return (
        <div className="App">
            <Connection />
            <Counter />
            <Grid />
        </div>
    );
}


const mapStateToProps = state => ({
    triedEager: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
})

const mapDispatchToProps = {
    setActivatingConnector,
    setTriedEager,
    mNFT,
    getColorsAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
