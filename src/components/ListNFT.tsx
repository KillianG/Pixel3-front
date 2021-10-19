/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

import { formatEther } from "ethers/lib/utils";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { pixel_abi } from './abi'
import GridSquare from './gridSquare'

// Represents a 10 x 18 grid of grid squares
export function GridBoard(props) {

  // generates an array of 18 rows, each containing 10 GridSquares.

  const grid = []
  for (let row = 0; row < 18; row ++) {
    grid.push([])
    for (let col = 0; col < 10; col ++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
    }
  }

  // The components generated in makeGrid are rendered in div.grid-board

  return (
    <div className='grid-board'>
      {grid}
    </div>
  )
}

export function ListNFT() {
  const { account, library } = useWeb3React<Web3Provider>();
  const [grid, setGrid] = useState([])
  useEffect(() => {
    if (!library)
      return
    const w = new Web3(library.provider)
    const contract = new w.eth.Contract(pixel_abi, '0x67d6DE5a166f654F134796d37Bd99d7B2c126abC')
    contract.methods.getColor(2).call().then(console.log)
    contract.methods.getColor(1).call().then(console.log)
    contract.methods.getAllColor().call().then(elem => {
      let copy = []
      let index = 0
      for (let row = 0; row < 18; row ++) {
        copy.push([])
        for (let col = 0; col < 10; col ++) {
          copy[row].push(<GridSquare key={`${col}${row}`} color={`#${elem[index]}`}/>)
          // index++
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
