import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xA39a188bE72c83261D4bBB5f0C313D0D3A1c10DD";
const rewardTokenContractAddress = "0x5503C65087e2d0A1BfA33aa24FBB7F6b58D4385b";
const stakingContractAddress = "0xE9A73D266c5a25dDAb3566132343075C1aFC6d99";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});