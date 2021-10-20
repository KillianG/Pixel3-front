import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { pixel_abi } from "./abi";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// Represents a grid square with a color
const onClick = (contract, account, index) => (e) => {
  const c= Math.abs(Math.round(Math.random() * ( 0x111111 - 0xFFFFFF))).toString(16)

  console.log(index)
  contract.methods.changeColor(c, index).send({from: account })
  contract.methods.changeLink(`https://www.google.fr/search?q=${c}`, index).send({from: account })
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
  const w = new Web3(library.provider)
  const contract = new w.eth.Contract(pixel_abi, '0x7F5f445fD67721FE7B2f4838554369B32Fa69868')
  console.log(props.index)
  console.log(i)

  const classes = `grid-square`
  return <button
    className={classes} style={{backgroundColor: props.color }}
    onClick={onClick(contract, account, i)}/>
}
