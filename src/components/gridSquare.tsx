import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { pixel_abi, contract_address } from "./abi";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { provider } from "web3-core";

// Represents a grid square with a color
const onClick = (contract, account, index) => (e) => {

  const color = prompt("What color ?")
  contract.methods.changeColor(color, index).send({from: account })
  //contract.methods.changeLink(`https://www.google.fr/search?q=${c}`, index).send({from: account })
}

const rightClick = (contract, account, index) => (e) => {
  console.log(e)
  console.log(index)
  contract.methods.getColor(index).call().then(c => {
    console.log(c)
    window.open(`https://www.google.fr/search?q=${c}`, '_blank')
  })
}

export default function GridSquare(props) {
  const { account, library } = useWeb3React<Web3Provider>();
  const [i, setI] = useState(props.index)
  if (library) {
    const w = new Web3(library.provider as provider)
    const contract = new w.eth.Contract(pixel_abi, contract_address)
    console.log(props.index)
    console.log(i)

    const classes = `grid-square`
    return <button
      className={classes} style={{ backgroundColor: props.color }}
      onClick={onClick(contract, account, i)} />
  } else {
    return <p>Connect to metamask</p>
  }
}
