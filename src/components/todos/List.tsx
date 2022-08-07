import * as React from "react";
import useTodos from "../../hooks/useTodos";
import LoadingSpinner from "../LoadingSpinner";
import { ListContainer, ListHeader, ListItemList } from "../style/todos/List";
import ListItem from "./ListItem";

interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { isLoading, data: todosData } = useTodos();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ListContainer>
        <ListHeader>
          <h3>목록</h3>
        </ListHeader>
        <ListItemList>
          {todosData &&
            todosData.data.map((data: any) => {
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
        </ListItemList>
      </ListContainer>
    </>
  );
};

export default List;
