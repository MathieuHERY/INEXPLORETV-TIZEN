import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../store/actions/categoryActions";
import CategoryContent from "../components/organisms/categoryContent";
import LoadPage from "./loadPage";
import Menu from "../components/organisms/menu";

export default function CategoryPage(props) {
  const params = useParams();
  const videos = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHomeContent() {
      try {
        const response = await dispatch(
          categoryActions.getCategoryVideo(params.id)
        );
      } catch (error) {
        console.log(error);
      }
    }
    getHomeContent();
  }, [dispatch]);

  if (videos.liste.length === 0) {
    return <LoadPage />;
  } else {
    return (
      <div className="full-width gradient-darkblue-purple homepage-container">
        <Menu />
        <CategoryContent titre="Bienvenue sur inexploré TV" videos={videos} />
      </div>
    );
  }
}
