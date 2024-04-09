enum weekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  console.log("Các ngày trong tuần:");
  for (let day in weekDays) {
    if (isNaN(Number(day))) {
      console.log(day);
    }
  }
  