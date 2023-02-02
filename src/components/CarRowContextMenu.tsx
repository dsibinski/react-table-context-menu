import { Dropdown } from "react-bootstrap";
import { Car } from "../types/Car";
import CustomDivToggle from "./CustomDivToggle";
import { BsThreeDots } from "react-icons/bs";

export const CarRowContextMenu = ({ carRow }: { carRow: Car }) => {
  return (
    <Dropdown key={carRow.id}>
      <Dropdown.Toggle as={CustomDivToggle} style={{ cursor: "pointer" }}>
        <BsThreeDots />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Option 1</Dropdown.Item>
        <Dropdown.Item>Option 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
