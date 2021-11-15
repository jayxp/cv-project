import { useState } from "react";
import uniqid from "uniqid";

export default function useHelper(props) {
  const [list, setList] = useState([]);
  const [entry, setEntry] = useState({ ...props });

  const handleChange = (event) => {
    setEntry((prevState) => {
      return {
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          text: event.target.value,
        },
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList({
      display: true,
      ...entry,
    });
    setEntry({
      ...props,
    });
  };

  const handleSubmitExt = (event) => {
    event.preventDefault();
    setList(list.concat(entry));
    setEntry({
      ...props,
      id: uniqid(),
    });
  };

  const deleteEntry = (prop) => {
    const newList = [...list];

    newList.splice(
      newList.findIndex((element) => element.id === prop.id),
      1
    );

    setList([...newList]);
  };

  const addDetail = () => {
    setEntry((prevState) => {
      return {
        ...prevState,
        details: prevState.details.concat({
          ...entry.detailInput,
          id: uniqid(),
        }),
        detailInput: { ...props.detailInput },
      };
    });
  };

  const deleteDetail = (prop) => {
    const newList = [...entry.details];

    newList.splice(
      newList.findIndex((element) => element.id === prop.id),
      1
    );

    setEntry({
      ...entry,
      details: [...newList],
    });
  };

  return {
    entry,
    list,
    deleteEntry,
    addDetail,
    deleteDetail,
    handleSubmit,
    handleSubmitExt,
    handleChange,
  };
}
