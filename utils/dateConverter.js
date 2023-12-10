export default function convertStringToDate(inputDateString) {
  // Tách tháng, ngày và năm từ chuỗi đầu vào
  const [month, day, year] = inputDateString.split("/");

  // Chú ý rằng tháng trong đối tượng Date là 0-indexed, nên trừ đi 1
  const formattedDate = new Date(`${year}-${month - 1}-${day}`);

  return formattedDate;
}
