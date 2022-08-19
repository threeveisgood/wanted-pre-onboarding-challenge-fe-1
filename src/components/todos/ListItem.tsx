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
import useTodosState from "../../hooks/state/useTodosState";
import useTodosStateActions from "../../hooks/state/useTodosStateActions";
import { useNavigate } from "react-router-dom";

interface IItemProps {
  title: string;
  content: string;
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

const ListItem: React.FunctionComponent<IItemProps> = ({
  title,
  content,
  id,
}: IItemProps) => {
  let navigate = useNavigate();
  const { mutate } = useDeleteTodo(id);
  const { id: currentId } = useTodosState();
  const { setOriginalContent } = useTodosStateActions();

  const onEdit = () => {
    setOriginalContent({
      title: title,
      content: content,
      originalId: id,
    });
  };

  return (
    <ItemContainer key={id}>
      <div>
        <RouterLink to={id}>
          <ItemP>{title}</ItemP>
        </RouterLink>
      </div>
      <div>
        <ItemReWrite onClick={onEdit}>
          <BsPencilSquare />
        </ItemReWrite>
        <ItemDelete
          onClick={() =>
            mutate(undefined, {
              onSuccess: () => {
                navigate("/todos");
              },
            })
          }
        >
          <MdOutlineDelete />
        </ItemDelete>
      </div>
    </ItemContainer>
  );
};

export default ListItem;
