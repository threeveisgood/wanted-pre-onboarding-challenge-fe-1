import * as React from "react";
import Layout from "./layout";

interface INotFoundProps {}

const NotFound404: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <>
      <Layout>
        <div>
          <h2>404: 페이지를 발견 할 수 없었습니다.</h2>
        </div>
      </Layout>
    </>
  );
};

export default NotFound404;
