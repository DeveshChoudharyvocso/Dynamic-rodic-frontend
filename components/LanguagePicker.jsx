"use client";
import Dropdown from "react-bootstrap/Dropdown";

function LanguagePicker() {
  return (
    <Dropdown className="language-dropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        EN
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">FR</Dropdown.Item>
        <Dropdown.Item href="#">KND</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguagePicker;
