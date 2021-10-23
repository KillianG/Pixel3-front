import React from 'react';
import { useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import Demo from "./components/Connection";
import Counter from './components/Counter';
import {injected, POLLING_INTERVAL} from "./dapp/connectors";
import { useInactiveListener } from "./dapp/hooks";

import './App.css';
import { setTried, setActivatingConnector } from "./features/walletConnection/walletConnectionSlice";
import {connect} from "react-redux";

export function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
}

const App = (props) => {
    const { connector, activate, active } = useWeb3React();

    // handle logic to recognize the connector currently being activated
    useEffect(() => {
        if (props.activatingConnector && props.activatingConnector === connector) {
            props.setActivatingConnector(undefined);
        }
    }, [props.activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, []);

    // if the connection worked, wait until we get confirmation of that to flip the flag
    useEffect(() => {
        if (!props.tried && active) {
            props.setTried(true);
        }
    }, [props.tried, active]);
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!props.tried || !!props.activatingConnector);

    return (<>
        <Demo />
        <Counter />
    </>);
}


const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
})

const mapDispatchToProps = {
    setTried,
    setActivatingConnector
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
