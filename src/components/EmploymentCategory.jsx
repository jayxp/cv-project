import React from "react";
import Input from "./Input";
import useHelper from "../utils/useHelper";
import EmploymentList from "./EmploymentList";
import PreviewDetails from "./PreviewDetails";
import StyledForm from "../styles/Form.styled";
import StyledButton from "../styles/Button.styled";
import { Category } from "../styles/Categories.styled";

export default function EmploymentCategory(props) {
  const { data } = props;
  const userData = useHelper({ ...data });

  /* 
  Only applicable here... Add as utility or keep as-is?
    - Has side effects
    - dateTo checkbox element synced with month type input element
      - checkbox passes text value to month input which expects only dates
        likely unavoidable with current data structure
  */
  const togglePresent = () => {
    const employForm = document.querySelector("form[name=employForm]");
    const monthInput = employForm.elements.dateTo[0];
    const checkboxInput = employForm.elements.dateTo[1];

    employForm.addEventListener("submit", () => {
      checkboxInput.checked = false;
      monthInput.removeAttribute("disabled");
    });

    checkboxInput.checked
      ? monthInput.setAttribute("disabled", "")
      : monthInput.removeAttribute("disabled");
  };

  return (
    <Category>
      <h2>Employment</h2>
      <hr />
      <StyledForm name="employForm" onSubmit={userData.handleSubmitExt}>
        <Input data={userData.entry.job} onChange={userData.handleChange} />
        <Input data={userData.entry.company} onChange={userData.handleChange} />
        <Input
          data={userData.entry.dateFrom}
          onChange={userData.handleChange}
        />
        <Input data={userData.entry.dateTo} onChange={userData.handleChange} />
        <>
          <label htmlFor="dateTo">
            <input
              type="checkbox"
              name="dateTo"
              value="Present"
              onClick={togglePresent}
              onChange={userData.handleChange}
            />
            Present
          </label>
        </>
        <Input
          data={userData.entry.detailInput}
          onChange={userData.handleChange}
        />{" "}
        <StyledButton
          top="5px"
          color="#2822bf"
          size="90%"
          type="button"
          radius="5px"
          onClick={userData.addDetail}
        >
          Add Detail
        </StyledButton>
        <PreviewDetails
          entry={userData.entry}
          deleteDetail={userData.deleteDetail}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <EmploymentList list={userData.list} deleteEntry={userData.deleteEntry} />
    </Category>
  );
}
