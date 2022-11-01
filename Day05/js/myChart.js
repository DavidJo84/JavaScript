/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })
  // const Plugin = {};

  // Graphs
  const ctx = document.getElementById('myChart');
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토'
      ],
      datasets: [{
        label:'환자수',
        data: [
          42,
          45,
          45,
          43,
          48,
          53,
          52
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#905E96',
        borderWidth: 3,
        pointBackgroundColor: '#905E96'
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          stacked: false,
          ticks: {
            beginAtZero: false,
            max: 60,
            min: 30,
            padding: 5,
            stepSize: 5
          }
        }]
      },
      legend: {
        display: true
      }
    }
  })

  const ctx1 = document.getElementById('myChart2');
  // eslint-disable-next-line no-unused-vars
  const myChart2 = new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: [
        '한방1과',
        '한방2과',
        '양방과'
      ],
      datasets: [{
        label : '# of Votes',
        data: [
          20,
          10,
          8
        ],
        backgroundColor:[
          '#905E96','#D58BDD','#FF99D7'
        ],
        lineTension: 0,
        borderColor: 'black',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: false,
      // scales: {
      //   yAxes: [{
      //    ticks: {
      //      beginAtZero: false,
      //    }
      //  }]
      // },
      legend: {
        display: true
      }
    }
  })
})()

var a = document.getElementById(headline);
a.innerHTML="되는건가?";
