function DrawCalendar() { 
    const startDay = 5;
    const daysInMonth = 31;
    const calendarBody = document.querySelector("#calendar tbody");
    calendarBody.innerHTML = "";
    const today = (new Date()).getDate();
    console.log(today);
    
    let day = 1;
    for (let i = 0; i < 6; i++) { 
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) { 
            const cell = document.createElement("td");
            if (i === 0 && j < startDay) {
                cell.textContent = "";
            }
            else if (day <= daysInMonth) { 
                cell.textContent = day;
                if (day === today) {
                    cell.classList.add("highlighted");
                }
                day++;
            }
            else {
                cell.textContent = "";
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

DrawCalendar();

