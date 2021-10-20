/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

import { formatEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { pixel_abi } from './abi'
import GridSquare from './gridSquare'

export function ListNFT() {
  const { account, library } = useWeb3React<Web3Provider>();
  const [grid, setGrid] = useState([])
  useEffect(() => {
    if (!library)
      return
    const w = new Web3(library.provider)
    const contract = new w.eth.Contract(pixel_abi, '0x6B32105107044aE9305FAaBC395C9285F747b5B6')
    contract.methods.getAllColor().call().then(elem => {
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
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <div className='grid-board'>
        {grid}
      </div>
    </div>
  )
}

export default ListNFT;
