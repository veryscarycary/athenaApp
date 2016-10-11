new Dygraph(
    document.getElementById("noroll"),
    data_temp,
    {
      customBars: true,
      title: 'Daily Temperatures in New York vs. San Francisco',
      ylabel: 'Temperature (F)',
      legend: 'always',
      labelsDivStyles: { 'textAlign': 'right' },
      showRangeSelector: true
    }
);
