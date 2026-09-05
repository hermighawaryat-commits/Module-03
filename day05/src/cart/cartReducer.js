function cartReducer(state, action) {
  switch (action.type) {

    case "add":
      return {
        ...state,
        items: [
          ...state.items,
          action.dish,
        ],
      };

    case "remove": {
      const index = state.items.findIndex(
        (dish) => dish.id === action.id
      );

      if (index === -1) {
        return state;
      }

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      };
    }

    case "clear":
      return {
        ...state,
        items: [],
      };

    default:
      throw new Error(
        `Unknown action: ${action.type}`
      );
  }
}

export default cartReducer;