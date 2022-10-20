import compose from "compose-function";
import { withRouter } from "./with-router";
import {modalError} from "features/modalError";

export const withProviders = compose(
   withRouter,
   modalError
);