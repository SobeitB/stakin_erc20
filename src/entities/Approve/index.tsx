import {Button} from "shared/ui";
import {useApproveTokens} from "./model";

export const ApproveBtn = () => {
   const {onApprove, approve, stake} = useApproveTokens()

   if(
      approve === null ||
      approve > stake
   ) {
      return null
   }

   return <Button onClick={onApprove}>Approve token</Button>
}