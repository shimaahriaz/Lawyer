import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
