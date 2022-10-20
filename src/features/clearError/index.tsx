import {Button} from "shared/ui";
import {useAppDispatch} from "app/model/hooks";
import {setError} from "app/model/slice/blockChain";

export const ClearError = () => {
   const dispatch = useAppDispatch();
   const clearMessage = () => {
      dispatch(setError(''))
   }
   return <Button onClick={clearMessage}>Next</Button>
}