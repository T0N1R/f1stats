import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  title = 'Test de Charts';
  view: any[] = [600, 400];
  theme = 'dark';
  // options for the chart
  animations = true;
  showXAxis = true;
  showYAxis = true;
  showReferenceLabels = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Race';
  showYAxisLabel = true;
  yAxisLabel = 'Time';
  timeline = true;

  isDoughnut = true;
  legendPosition = 'right';

  colorScheme = {
    domain: ['#dbd970', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB', '#db7099']
  };
  // pie
  showLabels = true;
  // data goes here
  public single = [
    {
      name: 'China',
      value: 2243772
    },
    {
      name: 'USA',
      value: 1126000
    },
    {
      name: 'Norway',
      value: 296215
    },
    {
      name: 'Japan',
      value: 257363
    },
    {
      name: 'Germany',
      value: 196750
    },
    {
      name: 'France',
      value: 204617
    }
  ];
  public multi = [
    {
      name: 'China',
      series: [
        {
          name: '2018',
          value: 2243772
        },
        {
          name: '2017',
          value: 1227770
        }
      ]
    },
    {
      name: 'USA',
      series: [
        {
          name: '2018',
          value: 1126000
        },
        {
          name: '2017',
          value: 764666
        }
      ]
    },
    {
      name: 'Norway',
      series: [
        {
          name: '2018',
          value: 296215
        },
        {
          name: '2017',
          value: 209122
        }
      ]
    },
    {
      name: 'Japan',
      series: [
        {
          name: '2018',
          value: 257363
        },
        {
          name: '2017',
          value: 205350
        }
      ]
    },
    {
      name: 'Germany',
      series: [
        {
          name: '2018',
          value: 196750
        },
        {
          name: '2017',
          value: 129246
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '2018',
          value: 204617
        },
        {
          name: '2017',
          value: 149797
        }
      ]
    }
  ];

  public multi2 = [
    {
      name: 'Lewis Hamilton',
      series: [
        {
          name: 'Austrian GP',
          value: 40632,
          extra: {
            code: 'de'
          }
        },
        {
          name: 'Spanish GP',
          value: 36953,
          extra: {
            code: 'de'
          }
        },
        {
          name: 'British GP',
          value: 31476,
          extra: {
            code: 'de'
          }
        }
      ]
    },
    {
      name: 'Sebastian Vettel',
      series: [
        {
          name: 'Austrian GP',
          value: 0,
          extra: {
            code: 'us'
          }
        },
        {
          name: 'Spanish GP',
          value: 45986,
          extra: {
            code: 'us'
          }
        },
        {
          name: 'British GP',
          value: 37060,
          extra: {
            code: 'us'
          }
        }
      ]
    },
    {
      name: 'Max Verstappen',
      series: [
        {
          name: 'Austrian GP',
          value: 36745,
          extra: {
            code: 'fr'
          }
        },
        {
          name: 'Spanish GP',
          value: 34774,
          extra: {
            code: 'fr'
          }
        },
        {
          name: 'British GP',
          value: 29476,
          extra: {
            code: 'fr'
          }
        }
      ]
    },
    {
      name: 'Lando Norris',
      series: [
        {
          name: 'Austrian GP',
          value: 36240,
          extra: {
            code: 'uk'
          }
        },
        {
          name: 'Spanish GP',
          value: 32543,
          extra: {
            code: 'uk'
          }
        },
        {
          name: 'British GP',
          value: 26424,
          extra: {
            code: 'uk'
          }
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
