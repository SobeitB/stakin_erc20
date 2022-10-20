import {Display, Text, Information, Button} from "shared/ui";
import {useAppSelector} from "app/model/hooks";
import {PurchaseTokensBtn} from "entities/purchaseTokens";
import {StatusValue} from "entities/InputValue/type";
import {InputValue} from "entities/InputValue";

export const PurchaseTokens = () => {
   const {balance} = useAppSelector(state => state.blockChainSlice)
   return(
      <Display>
         <Information>
            <Text>Balance: {balance.toFixed(2)}</Text>
            <Text>Price: 0.0001 eth</Text>
         </Information>

         <InputValue status={StatusValue.purchase} />

         <PurchaseTokensBtn />
      </Display>
   )
}