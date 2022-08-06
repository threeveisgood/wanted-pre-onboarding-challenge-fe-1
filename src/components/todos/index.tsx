import * as React from "react";
import { Outlet } from "react-router-dom";
import { TodosContainer } from "../style/todos";
import List from "./List";
import Write from "./Write";

interface ITodoProps {}

const Todos: React.FunctionComponent<ITodoProps> = (props) => {
  return (
    <>
      <TodosContainer>
        <Outlet />
        <List />
        <Write />
      </TodosContainer>
    </>
  );
};

export default Todos;
