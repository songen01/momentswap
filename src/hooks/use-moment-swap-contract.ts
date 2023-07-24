import { BigNumber, Contract } from "ethers";
import { useCallback, useMemo } from "react";

import MomentSwapFRC721 from "@Contracts/MomentSwapFRC721.sol/MomentSwapFRC721.json";
import { useWalletProvider } from "@hooks";
import { MomentSwapFRC721NFT } from "@utils/definitions/interfaces";

const contractAddress = process.env.NEXT_PUBLIC_MOMENTSWAP_CONTRACT_ADDRESS;
if (!contractAddress) {
  throw new Error("Please set NEXT_PUBLIC_MOMENTSWAP_CONTRACT_ADDRESS in a .env file");
}

export const useMomentSwapContract = () => {
  const { signer, provider } = useWalletProvider();
  const contractWithSigner = useMemo(() => new Contract(contractAddress, MomentSwapFRC721.abi, signer), [signer]);
  const contractWithProvider = useMemo(() => new Contract(contractAddress, MomentSwapFRC721.abi, provider), [provider]);

  // Read-only contract functions
  const getNFTCollection = useCallback((): Promise<Array<MomentSwapFRC721NFT>> => {
    return contractWithProvider.getNFTCollection();
  }, [contractWithProvider]);

  const getNFTCollectionByOwner = useCallback(
    (owner: string): Promise<Array<MomentSwapFRC721NFT>> => {
      return contractWithProvider.getNFTCollectionByOwner(owner);
    },
    [contractWithProvider],
  );

  const getMintFee = useCallback((): Promise<BigNumber> => {
    return contractWithProvider.mintFee();
  }, [contractWithProvider]);

  // Read-write contract functions

  const mintMomentSwapNFT = useCallback(
    async (ipfsURL: string): Promise<any> => {
      const mintFee = await getMintFee();
      return await contractWithSigner.mintMomentSwapNFT(ipfsURL, { value: mintFee });
    },
    [getMintFee, contractWithSigner],
  );

  const mintMultipleMomentSwapNFTs = useCallback(
    async (ipfsURLs: Array<string>): Promise<any> => {
      const mintFee = await getMintFee();
      return await contractWithSigner.mintMultipleMomentSwapNFTs(ipfsURLs, { value: mintFee.mul(ipfsURLs.length) });
    },
    [getMintFee, contractWithSigner],
  );

  return {
    getMintFee,
    getNFTCollection,
    getNFTCollectionByOwner,
    mintMomentSwapNFT,
    mintMultipleMomentSwapNFTs,
  };
};
