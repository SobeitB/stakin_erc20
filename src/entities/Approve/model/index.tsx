import {useEffect, useState} from "react";
import {useAppSelector} from "app/model/hooks";
import StakingAddress from "shared/lib/contracts/Staking-contract-address.json";
import {utils} from "ethers";

export const useApproveTokens = () => {
   const {contract,address} = useAppSelector(state=>state.blockChainSlice)
   const {stake} = useAppSelector(state=>state.valuesSlice)
   const [approve, setApprove] = useState<number | null>(null);

   useEffect(() => {
      async function getSupplyApprove() {
         const allowance = await contract.allowance(address, StakingAddress.Staking)
         setApprove(+utils.formatEther(allowance))
      }

      if(contract) {
         getSupplyApprove()
      }
   },[contract])

   const onApprove = async () => {
      try {
         const stakeBalance = utils.parseEther(stake.toString())
         await contract.approve(
            StakingAddress.Staking,
            stakeBalance
         );

         setApprove(approve ? approve : 0 + stake)
      } catch (e) {
          console.log(e)
      }
   }

   return {
      onApprove,
      approve,
      stake
   };
}