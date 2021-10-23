import Web3 from "web3";
import { pixel_abi, contract_address } from "./abi";

export const mintNFT = (library, account) => {
  const w = new Web3(library.provider);
  const contract = new w.eth.Contract(pixel_abi, contract_address);
  contract.methods.mintNFT(account).send({ from: account });
  return new Promise(resolve =>
      contract.methods.tokensOfOwnerBySize(account).call().then(c => resolve({ data: c})))
}
