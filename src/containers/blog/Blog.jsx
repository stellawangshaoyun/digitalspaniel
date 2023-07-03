import React, { useEffect, useState } from "react";
import "./blog.css";
import { Slide } from "../../components";
import { useGetInfosQuery } from "../../services/infoApi";

const Blog = () => {
  const [clients, setClients] = useState([]);
  const { data } = useGetInfosQuery();
  useEffect(() => {
    if (data !== undefined) {
      setClients(data);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="blog section__padding">
      <div className="blog-heading" id="blog">
        <h1 className="header__text__dark header__font__family__size">
          Kind words
        </h1>
        <h1 className="header__text__light header__font__family__size">
          from our clients
        </h1>
      </div>
      <Slide clients={clients} />
    </div>
  );
};

export default Blog;
