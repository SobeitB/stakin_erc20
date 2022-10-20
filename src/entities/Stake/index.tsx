import {Button} from "shared/ui";
import {useStake} from "./model";

export const StakeBtn = () => {
   const onStake = useStake()

   return <Button onClick={onStake}>Stake</Button>
}