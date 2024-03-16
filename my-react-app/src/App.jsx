function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/burger-menu" element={<BurgerMenu />} />
          <Route path="/categories-goods" element={<CategoriesGoods />} />
          <Route path="/categories-review" element={<CategoriesReview />} />
          <Route path="/sale-goods" element={<SaleGoods />} />
          <Route path="/all-goods" element={<AllGoods />} />
          <Route path="/one-product" element={<OneProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;