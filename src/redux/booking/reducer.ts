import BOOKING_ACTION_TYPES from "./types";

const initialState: unknown = {
  bookingData: {
    from: "Sylhet",
    to: "Saidpur",
    date: "2024-09-25",
    guests: "3",
    ticketClass: "Economy",
  },
};

const bookingReducer = (state = initialState, action: unknown) => {
  switch (action.type) {
    case BOOKING_ACTION_TYPES.SET_BOOKING_DATA:
      return { ...state, bookingData: action.payload };
    case BOOKING_ACTION_TYPES.DELETE_BOOKING_DATA:
      return {
        ...state,
        bookingData: state.filter(
          (item: unknown) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default bookingReducer;
