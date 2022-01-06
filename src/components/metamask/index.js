import React, { useEffect, useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { Button } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import { Networks } from "./constants/index.js";
import { useEagerConnect } from "./hooks/useEagerConnect";
import { useInactiveListener } from "./hooks/useInactiveListener";
import { InjectedConnector } from "@web3-react/injected-connector";
// import { EthBalance } from "./components/EthBalance";
import { Contract } from "@ethersproject/contracts";
import RangeSlider from "react-bootstrap-range-slider";
import ABI from "./../../eth/build/contracts/Skwurmz.json";
import web3Utils from "web3-utils";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    Networks.MainNet,
    Networks.Ropsten,
    Networks.Rinkeby,
    Networks.Goerli,
    Networks.Kovan,
    Networks.Local,
  ],
});

function MetamaskConnect() {
  const [value, setValue] = useState(0);
  const { chainId, account, activate, active, connector, library } =
    useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState();
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector, chainId]);

  console.log("chainId===", chainId, "account==", account, active);

  const onClick = () => {
    activate(injectedConnector);
  };

  const Mint = async () => {
    try {
      let toWei = web3Utils.toWei("0.0001");
      let totalValue = toWei * value;
      let _Contract = new Contract(
        "0x98cde59c984765dcD6df3791a09Ea2f524B15Cef",
        ABI.abi,
        library.getSigner()
      );
      let mint = await _Contract.mint(value, {
        from: account,
        value: totalValue.toString(),
      });

      console.log("mint:", mint);
    } catch (error) {
      console.log(error.message);
    }

    /**
     * amount from slider * 0.06 ... to be sent to the _safeMint function on the contract.
     */
  };

  return (
    <>
      {active ? (
        <>
          <RangeSlider
            value={value}
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
            min={1}
            max={20}
          />
          <Button onClick={Mint} className="custom-btn">
            Mint
          </Button>
          <p className="text-center text-dark font-sm">0.06eth each</p>
        </>
      ) : (
        <>
          <Button onClick={onClick} className="custom-btn">
            Connect Wallet!
          </Button>
          <p className="text-center text-dark font-sm">0.06eth each</p>
        </>
      )}
      {/* <EthBalance> */}
      <p>{(value*.06).toFixed(2)}</p>
    </>
  );
}

export default MetamaskConnect;
