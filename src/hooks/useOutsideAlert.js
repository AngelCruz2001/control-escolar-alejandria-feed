
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiCloseDropMenu } from "../actions/ui";

export const useOutsideAlerter = (ref) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(uiCloseDropMenu())
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}




