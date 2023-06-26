import {shallowEqual} from "react-redux";
import {RootState} from "../store/types";
import {useAppSelector} from "../store/hooks";

export function useAccount(): RootState['account'] {
    const account = useAppSelector((state: RootState) => state.account, shallowEqual);

    return account;
}
