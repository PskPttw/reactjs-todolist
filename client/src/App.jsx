import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Form, Navbar, Todolist } from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className= { `${ styles.flexCenter } flex-col` }>
      <Navbar />
      {/* <Form /> */}
      <Todolist />
    </div>
  );
}

export default App;