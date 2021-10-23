import React from 'react';
import { connect } from "react-redux"
import {useWeb3React} from "@web3-react/core";

import {injected, walletconnect} from "../dapp/connectors";
import {setActivatingConnector, setTried} from "../features/walletConnection/walletConnectionSlice";

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
                setActivatingConnector(injected);
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
                            onClick={() => {/* call mint action */}}
                        >
                            Mint a pixel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            // onClick={() => {
                            //     const w = new Web3(library.provider);
                            //     const nbPixel = parseInt(prompt("How much pixels ?", "0"))
                            //     const contract = new w.eth.Contract(pixel_abi, contract_address);
                            //     for (let i = 0; i < nbPixel; i++)
                            //         contract.methods.mintNFT(account).send({ from: account });
                            // }}
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
                            (connector).close();
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
    setTried,
    setActivatingConnector
}

export default connect(mapStateToProps, mapDispatchToProps)(Connection)
