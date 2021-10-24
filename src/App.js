import React, {useEffect} from 'react';
import {connect} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';

import {POLLING_INTERVAL} from "./dapp/connectors";
import {Web3Provider} from "@ethersproject/providers";
import {useEagerConnect, useInactiveListener} from "./dapp/hooks";
import {mNFT, setActivatingConnector, setTriedEager, getColorsAsync, getWalletPixelsAsync} from "./features/walletConnection/walletConnectionSlice";

import Grid from "./components/Grid";
import Connection from "./components/Connection";
import {useWeb3React} from "@web3-react/core";
import Web3 from "web3";
import {contract_address, pixel_abi} from "./features/walletConnection/abi";

export function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

const App = (props) => {
    const context = useWeb3React()
    const { library, account } = context;
    useEffect(() => {
        console.log(library)
        if (library) {
            props.getColorsAsync({page: 0, library: library})
            props.getColorsAsync({page: 1, library: library})
            props.getWalletPixelsAsync({library, account})

        }
    }, [library])

    useInactiveListener(!props.triedEager || !!props.activatingConnector);
    useEagerConnect(props.triedEager, props.setTriedEager)
    return (
        <div className="App">
            <Connection />
            {/*<Counter />*/}
            <br/>
            <br/>
            <br/>
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
    getWalletPixelsAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
