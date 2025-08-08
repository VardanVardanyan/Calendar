function generateCalendar(year, month) {
  const calendarBody = document.querySelector("#calendar tbody");
  calendarBody.innerHTML = "";

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayJS = new Date(year, month, 1).getDay(); // 0=Sun..6=Sat
  const startDay = (firstDayJS + 6) % 7; // Monday=0..Sunday=6

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  let day = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < startDay) {
        cell.textContent = "";
      } else if (day <= daysInMonth) {
        cell.textContent = day;

        // Highlight if today
        if (year === todayYear && month === todayMonth && day === todayDate) {
          cell.classList.add("highlighted");
        }

        day++;
      } else {
        cell.textContent = "";
      }

      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    if (day > daysInMonth) break;
  }
}

// When button is clicked
document.getElementById("generateBtn").addEventListener("click", () => {
  const monthNumber = parseInt(document.getElementById("monthInput").value, 10);
  if (monthNumber >= 1 && monthNumber <= 12) {
    generateCalendar(2025, monthNumber - 1); // month is 0-based
  } else {
    alert("Please enter a number from 1 to 12.");
  }
});


