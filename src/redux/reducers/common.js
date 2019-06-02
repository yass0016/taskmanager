import { SET_ACTIVE_MENU_ITEM } from "../types/common";

const defaultState = {
  active_menu_item: "home"
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_MENU_ITEM:
      return {
        ...state,
        active_menu_item: action.active_menu_item
      };
    default:
      return state;
  }
}
