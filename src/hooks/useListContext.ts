import { useContext } from "react";
import { ListContext } from "../context";

export function useListContext() {
    const listContext = useContext(ListContext);
    if (!listContext) {
        throw new Error("Error!");
    }
    return listContext;
}
