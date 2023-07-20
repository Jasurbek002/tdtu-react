import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "../components/auth/authProvider";
import Login from "../components/auth/login";
import Carusel from "../components/carusel/carusel";
import Addslide from "../components/addsilide/addslide";
import Editslide from "../components/carusel/edit/index";
import AdminLayout from "../layout/adminLayout";
import News, { Addnews, Putnews } from "../components/news";
import Projects, { Addproject, Editproject } from "../pages/projects/index";
import Doctarant, { Adddoc, Editdoc } from "../pages/doctarantura";
import Contracts from "../pages/contracts";
import AddContarcts from "../components/contracts/add";
import Loboratory from "../pages/loboratory/Index";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthProvider>
            {" "}
            <AdminLayout />
          </AuthProvider>
        }
      >
        <Route index path="/carusel" element={<Carusel />} />
        <Route
          path="/news"
          element={
            <AuthProvider>
              {" "}
              <News />
            </AuthProvider>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/doctarant" element={<Doctarant />} />
        <Route path="/economy" element={<Contracts />} />
        <Route path="/loboratory" element={<Loboratory />} />
      </Route>

      {/* auth router */}
      <Route path="/login" element={<Login />} />

      {/* carusel router */}
      <Route path="/addsilide" element={<Addslide />} />
      <Route path="/editsilide" element={<Editslide />} />

      {/* news router */}
      <Route path="/addnews" element={<Addnews />} />
      <Route path="/editnews/:id" element={<Putnews />} />

      {/* projects router */}
      <Route path="/addproject" element={<Addproject />} />
      <Route path="editproject/:id" element={<Editproject />} />

      {/* doctarants router */}
      <Route path="/adddoctarant" element={<Adddoc />} />
      <Route path="/editdoctarant" element={<Editdoc />} />

      {/* contarcts router */}
      <Route path="/economy/add" element={<AddContarcts />} />
    </Routes>
  );
};

export default Router;
