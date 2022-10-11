import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Form } from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className= { `${ styles.flexCenter } flex-col` }>
      <h1>Navbar</h1>
      <Form />
    </div>
  );
}

export default App;