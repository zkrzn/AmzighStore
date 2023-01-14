import { useRouter } from "next/router";
import products from "../data/data.json";
import Header from "./header";
import Footer from "./footer";

const Productid = ({ id }) => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <div className="text-red-700 font-bold text-center m-10 text-5xl">Erreur: Ce Produit n'existe pas
    </div>;
  }
  return (
    <div className="bg-white rounded overflow-hidden shadow-lg m-10 ">
      <img
        src={"../" + product.image}
        alt={product.title}
        className="w-auto h-64 object-cover"
      />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2">
          {product.price} DH
        </span>
        &nbsp;
        <div class="line-through text-red-700 font-bold inline-block text-2xl">
          {" "}
          {product.price + 30} DH
        </div>
        <div className="text-black text-xl font-bold hover:underline">
          <a href="">Ajouter au panier</a>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-6xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
    
  );
};

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      {Productid({ id })}
      <Footer />
    </>
  );
}
