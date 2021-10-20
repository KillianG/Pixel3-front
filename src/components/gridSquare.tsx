import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { pixel_abi } from "./abi";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

// Represents a grid square with a color
const onClick = (library, account, index) => () => {
  const w = new Web3(library.provider)
  const contract = new w.eth.Contract(pixel_abi, '0x2698EdbD8B516ee5F51D8ae19dEC80671d72de11')
  const c= Math.abs(Math.round(Math.random() * ( 0x111111 - 0xFFFFFF)))
  console.log(c)
  contract.methods.changeColor(c, index).send({from: account })
}

export default function GridSquare(props) {
  const { account, library } = useWeb3React<Web3Provider>();
  const classes = `grid-square`
  return <div className={classes} style={{backgroundColor: props.color }} onClick={onClick(library, account, props.index)}/>
}
