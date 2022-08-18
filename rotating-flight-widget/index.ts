type FlightDetails = {
  time: string;
  destination: string;
  flight: string;
  gate: string;
  remarks: string;
};

const flights: FlightDetails[] = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "DELAYED",
  },
  {
    time: "15:45",
    destination: "GOA",
    flight: "AI 720",
    gate: "A 26",
    remarks: "ON TIME",
  },
  {
    time: "18:30",
    destination: "DUBAI",
    flight: "QA 737",
    gate: "B 24",
    remarks: "CANCELLED",
  },
  {
    time: "8:30",
    destination: "FRANKFURT",
    flight: "LU 411",
    gate: "D 22",
    remarks: "ON TIME",
  },
];

const tableBody = document.querySelector("#table-body");

const populateTable = function () {
  console.log("I am here");
  flights.forEach((flight: FlightDetails) => {
    const tableRow = document.createElement("tr");

    for (const flDetail in flight) {
      const tableCell = document.createElement("td");
      console.log("fl detail: ", flDetail);
      const word: string[] = Array.from(flight[flDetail]);
      console.log("Word: ", word);

      for (const letter of word) {
        const letterElement = document.createElement("div");
        letterElement.classList.add("flip");
        letterElement.textContent = letter;
        tableCell.appendChild(letterElement);
      }
      tableRow.appendChild(tableCell);
    }

    tableBody.appendChild(tableRow);
  });
};

populateTable();
