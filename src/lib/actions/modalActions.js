export const INIT_MODAL = 'INIT_MODAL';
export const SAVE_MODAL_VALUES = 'SAVE_MODAL_VALUES';
export const SET_MODAL_STATE = 'SET_MODAL_STATE';

export const initModalValues = () => ({
  type: INIT_MODAL,
});

export const saveModalValues = (values) => ({
  type: SAVE_MODAL_VALUES,
  values
});

export const setModalValues = (modalState) => ({
  type: SAVE_MODAL_VALUES,
  modalState
});

