import { useLoaderData } from "react-router-dom";
import Header from "../shared/headers/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbars/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

  const news = useLoaderData();
  // console.log(news);

  return (
    <div>
      <Header />
      <BreakingNews/>
      <Navbar />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div >
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 ">
          
          {
            news.map( aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard> )
          }
        </div>
        <div >
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
