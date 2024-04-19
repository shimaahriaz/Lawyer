/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ImStarEmpty } from "react-icons/im";
import useLawyerDetails from "../../api/DetailsLawyer";
import { Link } from "react-router-dom";

const DetailsLawyer = () => {

  const { data, isLoading, isError } = useLawyerDetails();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch categories</div>;

  
  return (
    <div className="container mx-auto mt-10 p-4">
      <Link to="/" className= "mt-10">انتقل الي الصفحة الرئيسة</Link>
      <div className="grid grid-cols-2 gap-4 items-center justify-between mb-20">
        <div className="justify-self-start">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-5">
            معلومات الحجز
          </h1>
          
          <p>
            <button
              className="btn btn-primary"
              data-bs-toggle="collapse"
              aria-controls="multiCollapseExample1"
              aria-expanded="false"
            >
              أوقات العمل
            </button>
            <button
              className="btn btn-primary"
              data-bs-toggle="collapse"
              aria-controls="multiCollapseExample2"
              aria-expanded="false"
              >
              أسعار الخدمات
            </button>
          </p>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  <table className="table-auto">
                    <thead>
                      <tr className="text-white bg-[#ddb762]">
                        <th className="px-4 py-2">اليوم</th>
                        <th className="px-4 py-2">الوقت</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">الاحد</td>
                        <td className="border px-4 py-2">10:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  <div className="text-end bg-fcf4f2 mt-40">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      خدمة الاستشارة الهاتفية
                    </h2>
                    <p className="text-gray-800 mb-2">
                      ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة.
                    </p>
                    <p className="text-gray-800 mb-2">
                      300 ر.س"
                    </p>
                    <div className="text-center w-100 rounded-lg">
                      <Link
                        to="#"
                        className="text-white text-center bg-[#ddb762] p-2 block"
                      >
                        رابط طلب الخدمة هنا
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <h1 className="text-4xl text-center font-bold text-gray-800">
            المعلومات الشخصية
          </h1>
          <div className="flex align-items-center gap-4">
            <div className="text-center bg-fcf4f2">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {data.lawyer.name}
              </h2>
              <p className="text-gray-600 mb-2">{data.lawyer.about}</p>
              <div className="flex items-center justify-center">
                <p className="text-gray-800 mb-2 me-2">
                  التقييم العام من 154 من العملاء
                </p>
                <p className="text-gray-800 mb-2">5.00</p>
                <ImStarEmpty className="text-[#fbc232] mb-2 ms-2 " />
                <ImStarEmpty className="text-[#fbc232] mb-2 ms-2 " />
                <ImStarEmpty className="text-[#fbc232] mb-2 ms-2 " />
              </div>
            </div>
            <div
              key={data.id}
              className=" rounded-full overflow-hidden bg-[#fdf9f9] transition-all duration-300 shadow-md p-6 mb-4 cursor-pointer hover:bg-[#cab188]"
            >
              <img
                src="https://res.cloudinary.com/dmakszkza/image/upload/v1713387789/Portfolio%20Alarab/download_jvj5ap.png"
                className="w-40 h-30 mx-auto mb-4 rounded-full img-fluid"
                alt={data.id}
              />
            </div>
          </div>
          <div className="">
            <p className="text-gray-500 mb-3">
              تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
            </p>
            <p className="text-gray-600 flex align-items-center justify-start">
              {data.lawyer.birthday}
              <span className="ms-5">Abdullah Faleh</span>
            </p>
          </div>
          <div className="bg-[#fcf2f2] p-4 mt-5 ">
            <h1 className="text-4xl text-end mt-4 font-bold text-gray-800">
              النبذة التعريفية
            </h1>
            <p className="text-gray-500 mt-3 text-end">
              استشاري القانون عبد العزيز عبد الرحمن الربعي هو محام مرخص في
              المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون.
              يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLawyer;
