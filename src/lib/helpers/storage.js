import storage from 'lockr';

import { MODAL_VALUES, MODAL_STATE } from '@app/lib/constants.js';

export const getModalState = () => storage.get(MODAL_STATE) || {};
export const setModalState = (state) => storage.get(MODAL_STATE, state);
export const getModalValues = () => storage.get(MODAL_VALUES) || {};
export const setModalValues = (values) => storage.set(MODAL_VALUES, values);
export const resetModalValues = () => storage.rm(MODAL_VALUES, {});
