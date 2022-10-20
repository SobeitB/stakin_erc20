import {useSetWeb3Data} from "shared/lib/setWeb3Data";
import {Button} from "shared/ui";

export const ConnectMetamask = () => {
   const { setData } = useSetWeb3Data();

   return(
      <Button isConnectBtn onClick={() => setData(true)}>connect metamask</Button>
   )
}