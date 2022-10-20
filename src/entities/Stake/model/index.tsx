import {useAppDispatch, useAppSelector} from "app/model/hooks";
import StakingAddress from "shared/lib/contracts/Staking-contract-address.json";
import {
   setError,
   setBalanceTokens,
   setBalanceBank
} from "app/model/slice/blockChain";
import {utils} from "ethers";

export const useStake = () => {
   const {stake} = useAppSelector(state => state.valuesSlice);
   const {contract, balanceTokens, balanceBank, address} = useAppSelector(state => state.blockChainSlice);
   const dispatch = useAppDispatch()

   const onStake = async () => {
      if(0 >= stake) {
         return dispatch(setError('empty string'))
      }

      if(balanceTokens < stake) {
         return dispatch(setError('not enough balance tokens'))
      }

      const stakeBalance = utils.parseEther(stake.toString())

      try{
         const allowance = await contract.allowance(address, StakingAddress.Staking);
         if(+utils.formatEther(allowance) < stake) {
            await contract.approve(
               StakingAddress.Staking,
               stakeBalance
            );
         }

         await contract.deposit(stakeBalance);

         dispatch(setBalanceTokens(balanceTokens-stake))
         dispatch(setBalanceBank(balanceBank+stake))
      } catch (e) {
         console.log(e)
      }
   }

   return onStake
}