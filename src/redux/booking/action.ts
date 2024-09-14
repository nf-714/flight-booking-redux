import BOOKING_ACTION_TYPES from "./types";

export const setBookingData = (data: unknown) => {
  return {
    type: BOOKING_ACTION_TYPES.SET_BOOKING_DATA,
    payload: data,
  };
};

export const deleteBookingData = () => {
  return {
    type: BOOKING_ACTION_TYPES.DELETE_BOOKING_DATA,
  };
};
