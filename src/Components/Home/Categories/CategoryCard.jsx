// CategoryList.js
import { Link } from "react-router-dom";
import useCategories from "../../../api/CategoryList";

const CategoryCard = () => {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch categories</div>;
  return (
    <div>
      
      <div className="container mx-auto mt-10 p-4">
        <Link to="lawer">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((category) => (
            <div
              key={category.id}
              className=" rounded-lg overflow-hidden bg-[#fdf9f9] transition-all duration-300 shadow-lg p-6 mb-4 cursor-pointer hover:bg-[#cab188]"
            >
              <img
                src={category.image}
                className="w-10 h-10 mx-auto mb-4"
                alt={category.title}
              />
              <div className="text-center bg-fcf4f2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 mb-2">
                Lawyers Count: {category.lawyers_count}
              </p>
              <p className="text-gray-600 mb-2">
                Need License: {category.need_license}
              </p>
              </div>
            </div>
          ))}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
