import {Button} from 'shared/ui'
import {useUnStake} from "./model";

export const UnStake = () => {
   const onUnStake = useUnStake()

   return <Button onClick={onUnStake}>Un stake</Button>
}