import { types } from "../types/types";

export const panelSetData = (data, type) => ({
    type: types.panelSetData,
    payload: data
});
export const panelAddData = (data, type) => ({
    type: types.panelAddData,
    payload: data
});
export const panelUpdateData = (data, type) => ({
    type: types.panelUpdateData,
    payload: data
});
export const panelDeleteData = (id, type) => ({
    type: types.panelDeleteData,
    payload: id
});
export const panelClearData = () => ({ type: types.panelDeleteData });