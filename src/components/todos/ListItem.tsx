import * as React from "react";
import { RouterLink } from "../style/common/Link";
import {
  ItemContainer,
  ItemP,
  ItemDelete,
  ItemReWrite,
} from "../style/todos/ListItem";
import { MdOutlineDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import { useDispatch } from "react-redux";
import { setOriginalContent } from "../../slices/todos";

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
}: IItemProps) => {
  const dispatch = useDispatch();
  const { mutate } = useDeleteTodo(id);

  const onEdit = async () => {
    await dispatch(
      setOriginalContent({
        title: title,
        content: content,
        originalId: id,
      })
    );
  };

  return (
    <ItemContainer key={id}>
      <div>
        <RouterLink to={id}>
          <ItemP>{title}</ItemP>
        </RouterLink>
      </div>
      <div>
        <ItemReWrite onClick={() => onEdit()}>
          <BsPencilSquare />
        </ItemReWrite>
        <ItemDelete onClick={() => mutate()}>
          <MdOutlineDelete />
        </ItemDelete>
      </div>
    </ItemContainer>
  );
};

export default ListItem;
