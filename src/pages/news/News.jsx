import { useParams } from "react-router-dom";
import Header from "../shared/headers/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import Navbar from "../shared/navbars/Navbar";

const News = () => {

    const {id} = useParams();

    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">
            <h3 className="text-2xl">news detail</h3>
            <p>{id}</p>
          </div>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    );
};

export default News;