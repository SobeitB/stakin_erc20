import {Display, Information, Text} from "shared/ui";
import {useAppSelector} from "app/model/hooks";
import {StakeBtn} from "entities/Stake";
import {InputValue} from "entities/InputValue";
import {StatusValue} from "entities/InputValue/type";
import {UnStake} from "entities/UnStake";
import {ApproveBtn} from "entities/Approve";

export const Staking = () => {
   const {
      balanceTokens,
      balanceBank,
      balancePercentages
   } = useAppSelector(state => state.blockChainSlice)

   return(
      <Display>

         <Information isSingle>
            <Text>Tokens: {balanceTokens.toFixed(2)}</Text>
         </Information>

         <Information>
            <Text>Bank: {balanceBank.toFixed(2)}</Text>
            <Text>Percentages: {balancePercentages.toFixed(2)}</Text>
         </Information>

         <InputValue status={StatusValue.stake} />

         <ApproveBtn />
         <StakeBtn />
         <UnStake />
      </Display>
   )
}