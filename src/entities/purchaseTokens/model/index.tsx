import {useAppDispatch, useAppSelector} from "app/model/hooks";
import {setError, setBalance, setBalanceTokens} from "app/model/slice/blockChain";
import StakingAddress from "shared/lib/contracts/Staking-contract-address.json";
import {utils} from 'ethers'

export const usePurchase = () => {
   const {signer, balance, balanceTokens} = useAppSelector(state=>state.blockChainSlice);
   const {purchase} = useAppSelector(state=>state.valuesSlice);
   const dispatch = useAppDispatch()

   const onPurchase = async () => {
      if(0 >= purchase) {
         return dispatch(setError('empty string'))
      }

      if(balance < purchase) {
         return dispatch(setError('not enough balance'))
      }

      const tx = signer && await signer.sendTransaction({
         to: StakingAddress.Staking,
         value: utils.parseEther(purchase.toString())
      });

      dispatch(setBalance(balance-purchase));
      dispatch(setBalanceTokens(balanceTokens + purchase*10_000));
   }

   return onPurchase
}