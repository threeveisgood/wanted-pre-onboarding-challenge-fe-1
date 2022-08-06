import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { todos } from "../../api/todos";
import useTodos from "../../hooks/useTodos";
import LoadingSpinner from "../LoadingSpinner";
import { ListContainer, ListHeader } from "../style/todos/List";
import ListItem from "./ListItem";

interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { isLoading, data } = useTodos();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log({ data, isLoading });

  return (
    <>
      <ListContainer>
        <ListHeader>
          <h2>Todo List</h2>
        </ListHeader>
        <>
          {data &&
            data.data.map((data: any) => {
              return (
                <ListItem
                  title={data.title}
                  content={data.content}
                  id={data.id}
                  createdAt={data.createdAt}
                  updatedAt={data.updatedAt}
                />
              );
            })}
        </>
      </ListContainer>
    </>
  );
};

export default List;
