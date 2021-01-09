import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { Col } from "react-bootstrap";

const dummyArticle = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manitbaser/";

const Articles = ({ heading, username }) => {
  const allReposAPI = API
  const dummyArticlesArr = new Array(allReposAPI.length).fill(
    dummyArticle
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.items];
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, allReposAPI.length]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
      <div id="articles">
  <Jumbotron fluid id="projects" className="bg-transparent m-0">
      <div className="col-sm-6 mx-auto">
        <h2 className="display-4 pb-5 text-white text-center">{heading}</h2>
        {/* <Col className="text-center"> */}
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ArticleCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyArticlesArr.map((project, index) => (
                <ArticleCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        {/* </Col> */}
      </div>
    </Jumbotron>
    </div>
  );
};

export default Articles;
