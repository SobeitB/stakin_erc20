import { withProviders } from "./providers";
import {InitBlockChainData} from "processes/initWeb3State";
import './style/index.css';
import {PurchaseTokens} from "widgets/purchaseTokens";
import {Staking} from "widgets/staking";
import {Header} from "widgets/header";

function App() {
   return (
      <InitBlockChainData>
         <Header />
         <div className="App">
            <PurchaseTokens />
            <Staking />
         </div>
      </InitBlockChainData>
   );
}

export default withProviders(App);
