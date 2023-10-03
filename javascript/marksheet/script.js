const marks = [
  {
    name: "ram",
    english: 50,
    math: 60,
    nepali: 70,
    science: 40,
    social: 30,
    total: function () {
      return this.english;
    },
  },
  {
    name: "hari",
    english: 80,
    math: 60,
    nepali: 70,
    science: 70,
    social: 50,
  },
  {
    name: "sita",
    english: 70,
    math: 68,
    nepali: 72,
    science: 39,
    social: 58,
  },
  {
    name: "gita",
    english: 90,
    math: 82,
    nepali: 78,
    science: 77,
    social: 82,
  },
];

const container = document.getElementById("result");

marks.forEach((el, index) => {
  let result = "Pass";
  for (mark in el) {
    if (el[mark] < 40) {
      result = "Fail";
      break;
    }
  }
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${index + 1}</td>
    <td>${el.name}</td>
    <td ${el.english < 40 && 'style="color: red;"'}>${el.english}</td>
    <td ${el.math < 40 && 'style="color: red;"'}>${el.math}</td>
    <td ${el.nepali < 40 && 'style="color: red;"'}>${el.nepali}</td>
    <td ${el.science < 40 && 'style="color: red;"'}>${el.science}</td>
    <td ${el.social < 40 && 'style="color: red;"'}>${el.social}</td>
    <td ${result === "Fail" && 'style="color: red;"'}>${result}</td>
  `;
  container.appendChild(tableRow);
});