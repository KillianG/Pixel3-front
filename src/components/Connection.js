import React from 'react';
import { connect } from "react-redux"
import {useWeb3React} from "@web3-react/core";

import {injected, walletconnect} from "../dapp/connectors";
import { setActivatingConnector, mNFT } from "../features/walletConnection/walletConnectionSlice";

const Connection = (props) =>  {
    const context = useWeb3React()
    const { connector, library, account, activate, deactivate, active, error } = context;
    const activating = (connection) => connection === props.activatingConnector;
    const connected = (connection) => connection === connector;
    const disabled = !props.tried || !!props.activatingConnector || connected(injected) || connected(walletconnect) || !!error;
    console.log(props.tried, props.activatingConnector, connected(injected), connected(walletconnect))
    console.log('loading')

    return (<div className="justify-center card-actions">
        <button
            type="button"
            className="btn btn-primary"
            disabled={disabled}
            onClick={() => {
                props.setActivatingConnector(injected);
                activate(injected);
            }}
        >
            <div className="px-2 py-2">
                {activating(injected) && <p className="btn loading">loading...</p>}
                {connected(injected) && (
                    <span role="img" aria-label="check">✅</span>
                )}
            </div>
            Connect with MetaMask
        </button>
        {(active || error) && connected(injected) && (
            <>
                {!!(library && account) && (
                    <>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => props.mNFT({library, account})}
                        >
                            Mint a pixel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                const nbPixel = parseInt(prompt("How much pixels ?", "0"))
                                for (let i = 0; i < nbPixel; i++)
                                     props.mNFT({library, account})
                            }}
                        >
                            Mint multiple pixel
                        </button>
                    </>
                )}
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                        if (connected(walletconnect)) {
                            console.log('disconnect')
                            connector.close();
                        }
                        deactivate();
                    }}
                >
                    Disconnect Metamask
                </button>
            </>
        )}
    </div>)
};


const mapStateToProps = state => ({
    tried: state.walletConnection.tried,
    activatingConnector: state.walletConnection.activatingConnector,
})

const mapDispatchToProps = {
    setActivatingConnector,
    mNFT,
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection)
