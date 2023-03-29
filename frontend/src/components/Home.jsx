import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {

  const { items: products, status } = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Ha ocurrido un error</p>
      ) : (
        <>
          <h2>Lo nuevo en Sustantiva</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Agregar a carrito
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
