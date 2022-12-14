import * as React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../layout";
import { TodosContainer } from "../style/todos";
import List from "./list";
import Write from "./write";

interface ITodoProps {}

const Todos: React.FunctionComponent<ITodoProps> = (props) => {
  return (
    <>
      <Layout>
        <TodosContainer>
          <Outlet />
          <List />
          <Write />
        </TodosContainer>
      </Layout>
    </>
  );
};

export default Todos;
