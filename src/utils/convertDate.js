// Remember to replace with moments.js at some point

const convertDate = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = props.slice(0, 4).toString();
  const month = props.slice(5, 7).toString();

  const nameMonth = month === "nt" ? "Present" : months[[month] - 1];

  const monthYear =
    nameMonth === "Present" ? nameMonth : `${nameMonth} ${year}`;
  return monthYear;
};

export default convertDate;
