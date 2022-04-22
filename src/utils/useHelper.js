import { useState } from "react";
import uniqid from "uniqid";

export default function useHelper(props) {
  const [list, setList] = useState([]);
  const [entry, setEntry] = useState({ ...props });

  const handleChange = (event) => {
    setEntry((prevState) => {
      // Handleconsole.log(event.target);
      // console.log(prevState);
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
    setList(list.concat(entry));
    setEntry({
      ...props,
      id: uniqid(),
    });
  };

  const deleteList = () => {
    setList([]);
  };

  const deleteEntry = (prop) => {
    const newList = list.filter((e) => e.id !== prop.id);

    setList([...newList]);
  };

  const addDetail = (event) => {
    event.preventDefault();
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
    const newList = entry.details.filter((e) => e.id !== prop.id);

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
    deleteList,
    handleSubmit,
    handleChange,
  };
}
