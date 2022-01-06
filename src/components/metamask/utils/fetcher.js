import { isAddress } from "web3-utils";
import { Contract } from "@ethersproject/contracts";
export const fetcher =
  (library, abi) =>
  (...args) => {
    const [arg1, arg2, ...params] = args;
    // contract
    if (isAddress(arg1)) {
      const address = arg1;
      const method = arg2;
      const contract = new Contract(address, abi, library.getSigner());
      return contract[method](...params);
    }

    const method = arg1;
    return library[method](arg2, ...params);
  };
