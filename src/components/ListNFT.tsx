/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

import { formatEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { pixel_abi, contract_address } from './abi'
import GridSquare from './gridSquare'

export function ListNFT() {
  const { account, library } = useWeb3React<Web3Provider>();
  const [grid, setGrid] = useState([])
  useEffect(() => {
    if (!library)
      return
    const w = new Web3(library.provider)
    const contract = new w.eth.Contract(pixel_abi, contract_address)
    contract.methods.getAllColors().call().then(elem => {
      console.log(elem)
      let copy = []
      let index = 0
      for (let row = 0; row < 25; row ++) {
        copy.push([])
        for (let col = 0; col < 25; col ++) {
          copy[row].push(<GridSquare key={`${col}${row}`} index={index} color={`#${elem[index]}`}/>)
          index++
          if (index >= elem.length)
            break
        }
        if (index >= elem.length)
          break
      }
      setGrid(copy)
    })

  }, [library])

  return (
    <div className="App">
      <button/>
      <div className='grid-board justify-center'>
        {grid}
      </div>
    </div>
  )
}

export default ListNFT;
