import "./App.css";
import react, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Books from "./pages/books";
import BookInfo from "./pages/BookInfo";
import { data } from "./data";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    });
    return counter
  }


  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={data} />} />
        <Route
          path="/books/:id"
          element={<BookInfo books={data} addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
