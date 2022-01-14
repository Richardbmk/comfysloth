import React from "react";

import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello World</h3>
      <p>hello people</p>
      <div className="article">
        <p>this is article</p>
      </div>
      <button>Click me</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: green;
    }
  }
`;

export default Testing;
