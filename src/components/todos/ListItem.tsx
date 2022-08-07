import * as React from "react";
import { Link } from "react-router-dom";
import { RouterLink } from "../style/common/Link";
import {
  ItemContainer,
  ItemP,
  ItemDelete,
  ItemReWrite,
} from "../style/todos/ListItem";
import { MdOutlineDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

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
    <ItemContainer key={id}>
      <div>
        <RouterLink to={id}>
          <ItemP>{title}</ItemP>
        </RouterLink>
      </div>
      <div>
        <ItemReWrite>
          <BsPencilSquare />
        </ItemReWrite>
        <ItemDelete>
          <MdOutlineDelete />
        </ItemDelete>
      </div>
    </ItemContainer>
  );
};

export default ListItem;
