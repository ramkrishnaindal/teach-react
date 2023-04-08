export const getEmployees = () => {
  return (dispacth) => {
    const employees = [
      {
        name: "Hari",
        designation: "Engineeer",
        email: "hari@hari.com",
      },
      {
        name: "Namdev",
        designation: "Doctor",
        email: "naam@hari.com",
      },
    ];
    setTimeout(() => {
      dispacth({ type: "LOAD_EMPLOYEES", payload: employees });
    }, 1000);
  };
};
export const addEmployee = (employee) => {
  return (dispacth) => {
    setTimeout(() => {
      dispacth({ type: "ADD_EMPLOYEE", payload: employee });
    }, 1000);
  };
};
