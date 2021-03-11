export default (state, action) => {
  switch (action.type) {
    case "DELETED_TRANSANCTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TEXT":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "ADD_AMOUNT":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
