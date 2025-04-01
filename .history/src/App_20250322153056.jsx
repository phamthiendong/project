import React, { Fragment } from "react";

import "swiper/css";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
