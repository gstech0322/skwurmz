import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const EthBalance = () => {
  const { account, library, chainId } = useWeb3React();
  const { data: balance, mutate } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  useEffect(() => {
    // fetcher(library);
    // listen for changes on an Ethereum address
    library?.on("block", () => {
      mutate(undefined, true);
    });
    console.log("Network changed");
    return () => {
      library?.removeAllListeners("block");
    };
  }, []);

  return !balance ? (
    <h2 className="text-center">...</h2>
  ) : (
    <h2 className="text-center springgreen">
      {parseFloat(formatEther(balance)).toPrecision(4)} ETH
    </h2>
  );
};
