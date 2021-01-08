import {INC_COUNTER,DEX_COUNTER,RESET_COUNTER} from "../action-types";

export const incCounter = () => ({type:INC_COUNTER});
export const dexCounter = () => ({type:DEX_COUNTER});
export const resetCounter = () => ({type:RESET_COUNTER});