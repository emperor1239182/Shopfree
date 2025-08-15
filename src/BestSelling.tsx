import type { product, allProducts } from "./typeSet";
import { FiHeart, FiEye, FiStar } from "react-icons/fi";
import { useSearch, useWishlist } from "./ScrollContext";
import { Link } from "react-router-dom";

export const BestSellingProducts = ({ products }: product) => {
  const wishlistCtx = useWishlist();
  const searchCtx = useSearch();

  if (!wishlistCtx || !searchCtx) {
    throw new Error(
      "BestSellingProducts must be used within WishlistProvider and SearchProvider"
    );
  }

  const { handleWishlist, toggleHeart } = wishlistCtx;
  const { searchTerm } = searchCtx;

  return (
    <>
      <section className="categories mt-15">
        <p className="tag">This Month</p>
        <div className="intro">
          <h3 className="font-bold">Best Selling Products</h3>
          <p className="bg-red-500 text-center text-white text-[10px] px-3 py-1">
            <Link to="/shop">View All</Link>
          </p>
        </div>
      </section>

      <div className="mt-5">
        <ul className="hide-scrollbar productList">
          {products
            .slice(1, 10)
            .reverse()
            .filter((goods: allProducts) =>
              goods.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((goods: allProducts) => (
              <li key={goods.id}>
                <div className="w-40">
                  <div className="productDisplay">
                    <img
                      src={goods.image}
                      className="object-contain h-30"
                    />
                    <div className="absolute top-0 right-2">
                      <div
                        className="mt-3 rounded-2xl p-1 cursor-pointer heart-icon"
                        onClick={() => {
                          toggleHeart(goods.id);
                          handleWishlist({
                            image: goods.image,
                            name: goods.name,
                            price: goods.price,
                          });
                        }}
                      >
                        <FiHeart size={15} />
                      </div>
                      <div className="mt-3 rounded-2xl bg-white p-1">
                        <Link to="/wishlist">
                          <FiEye size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] font-bold">{goods.name}</p>
                  <p className="text-[10px] text-red-400">
                    {goods.price}{" "}
                    <span className="text-gray-600 ml-2 line-through font-bold">
                      {goods.oldPrice}
                    </span>
                  </p>
                  <div className="flex">
                    <FiStar color="gold" size={8} />
                    <FiStar color="gold" size={8} />
                    <FiStar color="gold" size={8} />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
