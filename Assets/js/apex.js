var options = {
  series: [
    {
      data: [
        {
          x: 'Jan',
          y: [2800, 4500]
        },
        {
          x: 'Feb',
          y: [3200, 4100]
        },
        {
          x: 'Mar',
          y: [2950, 7800]
        },
        {
          x: 'Apr',
          y: [3000, 4600]
        },
        {
          x: 'May',
          y: [3500, 4100]
        },
        {
          x: 'Jun',
          y: [4500, 6500]
        },
        {
          x: 'JUl',
          y: [4500, 6500]
        },
        {
          x: 'Aug',
          y: [4100, 5600]
        }

      ]
    }
  ],
  chart: {
    height: 250,
    type: 'rangeBar',
    zoom: {
      enabled: false
    }
  },
  // here gradiant bar color 
  plotOptions: {
    bar: {
      isDumbbell: false,
      columnWidth: 9,
      dumbbellColors: [['#5d4c97', '#8c68cd']]
    }
  },
  legend: {
    show: false,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Share', 'Like']
  },
  fill: {
    type: 'gradient',
    colors: ['#5d4c97', '#8c68cd'],
    gradient: {
      type: 'vertical',
      // gradientToColors: ['rgb(92,74,145)'],
      // background: ['rgb(93,75,146)'],
      // background: ['linear-gradient(180deg, rgba(93,75,146,1) 0%, rgba(96,77,149,1) 49%, rgba(140,104,205,1) 50%)'],
      inverseColors: true,
      stops: [50, 0]
    }
  },
  grid: {
    borderColor: '#517c8f',
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false,
      }
    }
  },
  xaxis: {
    tickPlacement: 'off'
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
