import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function GraficoEcharts() {
    const option = {
        title: {
            text: 'Evolução Mensal',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            bottom: 0,
            data: ['Referências', 'Batismos', 'Lições'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Fev', 'Mar'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Referências',
                type: 'bar',
                data: [12, 18, 24],
                //barWidth: 60,
            },
            {
                name: 'Batismos',
                type: 'bar',
                data: [2, 3, 5],
                //barWidth: 60,
            },
            {
                name: 'Lições',
                type: 'bar',
                data: [8, 12, 18],
                //barWidth: 60,
            },
        ],
    };

    return <ReactECharts option={option} style={{ height: 400 }} />;
}
