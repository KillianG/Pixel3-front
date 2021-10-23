import Web3 from "web3";
import { pixel_abi, contract_address } from "./abi";

/**
 * WARNING: WE CAN'T CALL THE WALLET FROM ASYNC FUNCTION
 * THIS DOESN'T WORK
 * export const mintNFT = (library, account) => {
 *   const w = new Web3(library.provider);
 *   const contract = new w.eth.Contract(pixel_abi, contract_address);
 *   contract.methods.getColor(0).call().then(console.log)
 *   contract.methods.mintNFT(account).send({ from: account }).then(console.log)
 *   return contract.methods.mintNFT(account).send({ from: account });
 * }
*/
