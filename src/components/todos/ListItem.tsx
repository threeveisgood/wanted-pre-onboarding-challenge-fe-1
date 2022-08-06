import * as React from "react";
import { ItemContainer } from "../style/todos/Item";

interface IItemProps {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const ListItem: React.FunctionComponent<IItemProps> = ({
  title,
  content,
  id,
  createdAt,
  updatedAt,
}: IItemProps) => {
  return (
    <>
      <ItemContainer>
        <h3>{title}</h3>
      </ItemContainer>
    </>
  );
};

export default ListItem;
