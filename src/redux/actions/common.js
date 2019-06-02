import { push } from "connected-react-router";

import { SET_ACTIVE_MENU_ITEM } from "../types/common";

export const set_active_menu_item = active_menu_item => {
  return dispatch => {
    dispatch({
      type: SET_ACTIVE_MENU_ITEM,
      active_menu_item
    });

    dispatch(push("about"));
  };
};
