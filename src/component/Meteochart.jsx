import React from "react";
import {useEffect, useState} from "react";
import {Bar} from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


export const options = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
       legend: {
           position: 'left',
           textAlign: 'center',



       },
       title:{
            display: true,
            text: "Wykres tempertaury ciśnienia oraz wilgotności",
            font: {
                size:20,
                family:'Arial',
                color: "black"
            },

       }

   },
};

export function Meteochart(){
    const [chartData, chartDataSet] = useState(null);

       useEffect( () => {
           const fetchAir = async () => {
               let data = {

                   labels: [],
                   datasets: [
                       {
                           label: 'Temperatura',
                           data: [],
                           borderColor: 'red',
                           backgroundColor: 'red'
                       },
                       {
                           label: 'Wilgotność',
                           data: [],
                           borderColor: 'blue',
                           backgroundColor: 'blue'
                       },
                       {
                           label: 'Ciśnienie',
                           data: [],
                           borderColor: 'green',
                           backgroundColor: 'green'
                       }
                   ],
               };

               const res = await fetch("http://localhost:3001/api/pogodovo");
               const dataRes = await res.json();
                

               data.datasets[0].data = dataRes.map(item => {
                   return item.tem;
               })

               data.datasets[1].data = dataRes.map(item => {
                   return item.hum;
               })

               data.datasets[2].data = dataRes.map(item => {
                   return item.pres;
               })

               data.labels = dataRes.map (item => {
                   return item.date+" "+item.cityName;
               })
               chartDataSet(data);
           }
           fetchAir()
       }, []);

       if (!chartData) {
           return null;
       }

       return <Bar options={options} data={chartData}/>;



}