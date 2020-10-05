import {
  SAVE_MODAL_VALUES,
  SET_MODAL_STATE,
} from '@app/lib/actions/modalActions.js';

const getInitialState = () => ({
  itemList: [],
});

const modalReducer = (state = getInitialState(), action) => {
  const {
    type,
    values,
    modalState,
  } = action;

  switch (type) {
    case SAVE_MODAL_VALUES: {
      return {
        ...state,
        values,
      };
    }
    case SET_MODAL_STATE: {
      return {
        ...state,
        modalState: {
          ...state.modalState,
          ...modalState
        },
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
