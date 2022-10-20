import {HeaderWrapper} from "./header.styled";
import {ConnectMetamask} from "features/connectWallets/connectMetamask";
import {ConnectOtherWallets} from "features/connectWallets/connectOtherWallets";

export const Header = () => {
   return (
      <HeaderWrapper>
         <ConnectMetamask />
         <ConnectOtherWallets />
      </HeaderWrapper>
   )
}