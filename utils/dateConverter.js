export default function convertStringToDate(inputDateString) {
  // Tách tháng, ngày và năm từ chuỗi đầu vào
  const [month, day, year] = inputDateString.split('/')

  // Trong đối tượng Date của JavaScript, tháng được biểu diễn theo dạng 0-indexed, nghĩa là tháng 1 là 0, tháng 2 là 1, và cứ như vậy. Do đó, khi bạn tạo hoặc sử dụng đối tượng Date, bạn cần trừ đi 1 từ giá trị tháng bạn mong đợi.
  const formattedDate = new Date(`${year}-${month - 1}-${day}`)

  return formattedDate
}

export function formatDateTime(dateTime) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  }
  return new Date(dateTime).toLocaleString('en-US', options)
}
