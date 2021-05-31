import React, { useState, useEffect, useCallback } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const dummyArticle = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manitbaser/";

const Articles = ({ heading }) => {
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
  }, [allReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
      // <div id="articles">
  <Jumbotron fluid id="articles" className="bg-transparent min-vh-100 m-0 d-flex align-items-center flex-wrap">
  <Container className="">
        <h2 className="display-4 pb-5 text-light text-center">{heading}</h2>
        {/* <center> */}
        <Row>
        {/* <Col md={1}></Col> */}
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
              {/* <Col md={1}></Col> */}
              </Row>
              {/* </center> */}
        {/* </Col> */}
      {/* </div> */}
      </Container>
    </Jumbotron>
    // </div>
  );
};

export default Articles;
