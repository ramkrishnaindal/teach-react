import logo from "./logo.svg";
import { useState, useEffect, useContext } from "react";
import profile from "./images/profile.png";
import "./App.css";
import Profile1, { text as txt } from "./Profile";
import AddProfile from "./AddProfile";
import { Link } from "react-router-dom";
import { MyContext } from "./context/useProfileContext";
import Employee from "./Employee";
function Home() {
  const global = useContext(MyContext);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setDataToLoop(data);
    } catch (error) {}
  };
  const deleteData = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
      });
      // const data = await res.json();
      fetchData();
    } catch (error) {}
  };
  const addData = async (title, author) => {
    try {
      const res = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          author,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = await res.json();
      fetchData();
    } catch (error) {}
  };
  const setEditItemHandler = (id, title, author) => {
    setEditItem({ id, title, author });
    setEdit(true);
  };
  const editData = async (title, author) => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${editItem.id}`, {
        method: "PUT",
        body: JSON.stringify({
          title,
          author,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = await res.json();
      setEdit(false);
      setEditItem({});

      fetchData();
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const name = "Ram";
  const data = [
    // {
    //   name: "Ravi",
    //   age: 27,
    // },
    // {
    //   name: "Hari",
    //   age: 38,
    // },
    // {
    //   name: "Sita",
    //   age: 23,
    // },
  ];
  const [dataToLoop, setDataToLoop] = useState(data);
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState();

  const addItem = () => {
    setEdit(false);
    setEditItem({});
    // const prevData = [...dataToLoop];
    // prevData.push({ name: "Sai", age: 20 });
    // setDataToLoop(prevData);
  };
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. My name is {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <div>My Counter: {global.counter}</div>
        <Profile1
          name1={name}
          age="27"
          data={dataToLoop}
          onClick={deleteData}
          add={addItem}
          setEditItem={setEditItemHandler}
        />
        {edit ? <div>In edit mode</div> : <div>in add mode</div>}
        <AddProfile
          addData={addData}
          edit={edit}
          editData={editData}
          editItem={editItem}
        >
          <button onClick={addItem}>Add</button>
        </AddProfile>
        <Employee />
      </header>
    </div>
  );
}

export default Home;
