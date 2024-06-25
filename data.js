export const lineChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Last Week",
      data: [50, 30, 45],
      borderColor: ["rgb(3,74,172)"],
    },
    {
      label: "This Week",
      data: [30, 50, 75],
      borderColor: ["rgb(101,162,203)"],
    },
  ],
};

export const barChartData = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Last Week",
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: ["rgb(3,74,172)"],
      backgroundColor: "rgb(3,74,172, 0.9)",
      borderWidth: 1,
      barThickness: 10,
      maxBarThickness: 15, // Maximum bar thickness
      borderRadius: 20,
    },
    {
      label: "This Week",
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: ["rgb(3,74,172)"],
      backgroundColor: "rgb(101,162,203)",
      borderWidth: 1,
      barThickness: 10,
      maxBarThickness: 15, // Maximum bar thickness
      borderRadius: 20,
    },
  ],
};

export const pieChartData = {
  labels: [
    "Enrolled Devices",
    "Active Devices",
    "Inactive Devices",
    "Maintenance Requests",
  ],
  datasets: [
    {
      label: "This Week",
      data: [145, 30, 50, 75],
      backgroundColor: [
        "rgb(3,74,172)",
        "rgb(255, 99, 132, 0.7)",
        "rgb(54, 132, 235, 0.2)",
        "rgb(153, 102, 255, 0.2)",
      ],
      hoverOffset: 4,
    },
  ],
};
