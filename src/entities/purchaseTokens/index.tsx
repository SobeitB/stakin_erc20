import {Button} from "shared/ui";
import {usePurchase} from "./model";

export const PurchaseTokensBtn = () => {
   const onPurchase = usePurchase()
   return <Button onClick={onPurchase}>Purchase tokens</Button>
}