import React, {useEffect, useState} from 'react';
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

export function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

const App = (props) => {
    const [current_page, setPage] = useState(0)
    const context = useWeb3React()
    const { library, account } = context;
    useEffect(() => props.getWalletPixelsAsync({library, account}), [library])
    useEffect(() => {
        if (library) {
            console.log(props.colors.length)
            if (current_page * 10 === props.colors.length && current_page <= 999) {
                props.getColorsAsync({page: current_page, library: library})
                setPage(current_page + 1)
            }
        }
    }, [library, props.colors])

    useInactiveListener(!props.triedEager || !!props.activatingConnector);
    useEagerConnect(props.triedEager, props.setTriedEager)
    return (
        <div className="App">
            <Connection />
            <br/>
            <br/>
            <br/>
            <Grid wait={3000} />
        </div>
    );
}


const mapStateToProps = state => ({
    triedEager: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
    colors: state.walletConnection.colors,
})

const mapDispatchToProps = {
    setActivatingConnector,
    setTriedEager,
    mNFT,
    getColorsAsync,
    getWalletPixelsAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
