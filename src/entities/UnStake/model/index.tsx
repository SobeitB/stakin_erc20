import {useAppDispatch, useAppSelector} from "app/model/hooks";
import {
   setError,
   setBalanceTokens,
   setBalanceBank,
   setBalancePercentages
} from "app/model/slice/blockChain";
import {utils} from "ethers";

export const useUnStake = () => {
   const {contract, balanceTokens, balanceBank, balancePercentages, address} = useAppSelector(state => state.blockChainSlice);
   const dispatch = useAppDispatch()

   const onUnStake = async () => {
      if(balanceBank > 0) {
         dispatch(setError('There are no coins in the bank'));
      }

      try {
         await contract.tokensWithdraw();

         dispatch(setBalanceTokens(balanceTokens + balanceBank + balancePercentages));
         dispatch(setBalanceBank(0));
         dispatch(setBalancePercentages(0));
      } catch (e) {
         console.log(e)
      }
   }

   return onUnStake;
}