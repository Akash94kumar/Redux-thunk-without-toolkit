import logo from "./logo.svg";

import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./redux/actions/userActions";
import User from "./components/User";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(userAction);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux thunk tutiro</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User user={users} />
      )}
    </div>
  );
}

export default App;
