import ListProps from "../model/listProps";

const List = ({ items }: ListProps) => (
  <ul>
    {items.map((item: string) => <li>{item}</li>)}
  </ul>
);

export default List;
