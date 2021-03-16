import { types } from "../types/types";

export const uiStartLoading = () => ({
    type: types.uiStartLoading,
});

export const uiFinishLoading = () => ({
    type: types.uiFinishLoading,
});
export const uiOpenDropMenu = () => ({
    type: types.uiOpenDropMenu,
});
export const uiCloseDropMenu = () => ({
    type: types.uiCloseDropMenu,
});