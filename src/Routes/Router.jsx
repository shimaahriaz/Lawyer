import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from 'react-query'

import Navbar from "../Components/Home/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader";


const Home = lazy(() => import("../Pages/Home/Home"));
const Lawyer = lazy(() => import("../Pages/Lawyer/LawyersList"));
const Details = lazy(() => import("../Pages/Details/Details"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));


const RouterPages = () => {

  const queryClient = new QueryClient()

    return(
     <>
     <QueryClientProvider client={queryClient}>
     <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lawer" element={<Lawyer />} />
        <Route path="lawer/detail" element={<Details />} />

        <Route path= "*" element= {<NotFound />} />
      </Routes>
      <Footer />
      </Suspense>
      </QueryClientProvider>
    </>
    );
}

export default RouterPages;