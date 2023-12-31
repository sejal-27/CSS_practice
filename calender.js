var dt = new Date();
function renderDate() {
  dt.setDate(1);
  var day = dt.getDay();
  document.getElementById("date_str").innerHTML = dt.toDateString();
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var today = new Date().getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("month").innerHTML = months[dt.getMonth()];

  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();

  var cells = "";
  for (x = day; x > 0; x--) {
    cells += "<div class='date'>" + (prevDate - x + 1) + "</div>";
  }
  for (i = 1; i <= endDate; i++) {
    if (i == today) {
      cells += "<div class='today'>" + i + "</div>";
    } else {
      cells += "<div>" + i + "</div>";
    }
  }

  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
    renderDate();
  } else if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
    renderDate();
  }
}
