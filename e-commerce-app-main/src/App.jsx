// import { Login } from "@mui/icons-material";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const user = true;
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/productslist/:category" element={<ProductsList />} />
        <Route path="/register" element={user?<Login/>:<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;



// const App = () => {
  // return (
    // <Router>
    //   {/* <Switch> */}
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/products/:category">
    //       <ProductsList />
    //     </Route>
    //     <Route path="/product/:id">
    //       <Product />
    //     </Route>
    //     <Route path="/cart">
    //       <Cart />
    //     </Route>
    //     {/* <Route path="/success">
    //       <Success />
    //     </Route> */}
    //     <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
    //     <Route path="/register">
    //       {user ? <Redirect to="/" /> : <Register />}
    //     </Route>
    //   {/* </Switch> */}
    // </Router>
  // );
// };

// export default App;