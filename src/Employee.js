import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees, addEmployee } from "./store/thunkActions/employeeThunk";
const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "ADD_NUMBER":
      return { counter: state.counter + action.payload };
    case "SUBSTRACT_NUMBER":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};
const Employee = () => {
  const [state, dis] = useReducer(reducer, { counter: 0 });
  const employees = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const addhandler = () => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        name: "Hari added",
        designation: "Senior Engineeer",
        email: "hari1@hari1.com",
      },
    });
  };
  const loadhandler = () => {
    dispatch(getEmployees());
  };
  const addHandler = () => {
    dispatch(
      addEmployee({
        name: "Hari thunk",
        designation: "Engineeer thunk",
        email: "hari-thunk@hari.com",
      })
    );
  };
  const addCounter = () => {
    dis({ type: "ADD_NUMBER", payload: 20 });
  };
  const substractCounter = () => {
    dis({ type: "SUBSTRACT_NUMBER", payload: 10 });
  };
  return (
    <>
      {employees.map((item, index) => {
        return (
          <div key={index}>
            <div htmlFor="">{item.name}</div>
            <div>{item.designation}</div>
          </div>
        );
      })}
      <div>{state.counter}</div>
      {/* <button onClick={addhandler}>add</button>
      <button onClick={loadhandler}>Load</button>
      <button onClick={addHandler}>Add Async</button> */}
      <button onClick={addCounter}>add</button>
      <button onClick={substractCounter}>substract</button>
    </>
  );
};

export default Employee;
