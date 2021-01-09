import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Skeleton from "react-loading-skeleton";

const ArticleCard = ({ value }) => {
  const {
      title,
      link,
      thumbnail,
      categories,
  } = value;

  const array = [];
  let total_count = 0;
  for (let index in categories) {
    array.push(categories);
    total_count +=1;
  }
  return (
      <Card className="card shadow-lg mb-5 text-center bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <div class="embed-responsive">
          <a href={link}>
            <img
                className="shadow-lg rounded"
                height="140"
                src={thumbnail}
              />
              </a>
            </div>
          <hr />
          {link ? <CardButtons link={link} /> : <Skeleton count={2} />}
        </Card.Body>
      </Card>
  );
};

const CardButtons = ({ link }) => {
  return (
    <>
      <a href={link} target=" _blank" className="btn btn-outline-secondary">
        <i className="fab fa-medium" /> Article
      </a>
    </>
  );
};

export default ArticleCard;
