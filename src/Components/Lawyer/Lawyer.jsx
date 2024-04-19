import { Link } from "react-router-dom";
import useCategoriesLawyer from "../../api/Lawyers";
import { ImStarEmpty } from "react-icons/im";

const Lawyer = () => {
  const { data, isLoading, isError } = useCategoriesLawyer();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch categories</div>;

  return (
    <>
      <div className="container mx-auto mt-10 p-4">
        <div className="mb-20 ">
          <h3 className="d-inline border-bottom">
            <Link to="/">العودة إلى الصفحة الرئيسية</Link>
          </h3>
        </div>
        <Link to="detail">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((lawyer) => (
              <div
                key={lawyer.id}
                className=" rounded-lg overflow-hidden bg-[#fdf9f9] transition-all duration-300 shadow-lg p-6 mb-4 cursor-pointer hover:bg-[#cab188]"
              >
                <img
                  src={lawyer.image_url}
                  className="w-40 h-30 mx-auto mb-4 rounded-full img-fluid"
                  alt={lawyer.full_name}
                />
                <div className="text-center bg-fcf4f2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {lawyer.full_name}
                  </h2>
                  <p className="text-gray-600 mb-2">{lawyer.job_title}</p>
                  <div className="flex items-center justify-center">
                    <p className="text-gray-800 mb-2 me-2">
                      (مراجعة{lawyer.reviews.total_reviews})
                    </p>
                    <p className="text-gray-800 mb-2">
                      {lawyer.reviews.rating}
                    </p>
                    <ImStarEmpty className="text-[#fbc232] mb-2 ms-2 " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Lawyer;
