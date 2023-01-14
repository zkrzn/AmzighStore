import products from "../data/data.json";

const ProductList = () => (
  <div class="grid grid-cols-1 gap-4 bg-transparent sm:grid-cols-4">
    {products.map((product) => (
      <a href={"" + product.id}>
        <div
          key={product.title}
          class="col-span-1 bg-transparent rounded shadow-md p-4 hover:shadow-none hover:bg-stone-200"
        >
          <img
            src={product.image}
            alt={product.title}
            class="w-15 h-15 items-center"
          />
          <h3 class="font-bold text-sm md:text-lg mt-2">{product.title}</h3>
          <div class="text-gray-700 font-bold inline-block">
            {" "}
            {product.price} DH{" "}
          </div>{" "}
          &nbsp;
          <div class="line-through text-red-700 font-bold inline-block">
            {" "}
            {product.price + 30} DH
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default function ProductListinng() {
  return (
    <>
      <div class="m-8 bg-transparent">
        <h1 class="font-bold text-xl md:text-4xl mt-2">Nos Bons plans : </h1>
        {ProductList()}
      </div>
    </>
  );
}
