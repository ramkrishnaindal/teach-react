const initialState = [
  {
    name: "Hari",
    designation: "Engineeer",
    email: "hari@hari.com",
  },
];
export const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_EMPLOYEES":
      return action.payload;
    case "ADD_EMPLOYEE": {
      const newEmployee = [...state, action.payload];
      return newEmployee;
    }

    case "REMOVE_EMPLOYEE": {
      const newEmployee = state.filter((i) => i.title !== action.payload);
      return newEmployee;
    }
    default:
      return state;
  }
};
