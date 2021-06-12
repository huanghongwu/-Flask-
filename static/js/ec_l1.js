var ec_l1 = echarts.init(document.getElementById('l1'),"dark");


ec_l1_option = {
    title: {
        text: '全国疫情趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['累计感染', '累计治愈', '累计死亡']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['周一', '周二', '周三']
    },
    yAxis: {
        type: 'value',
        // axisLabel:{
        //     show:true,
        //     color:'white',
        //     fontSize:12,
        //     formatter:function(value) {
        //         if(value>=1000) {
        //             value = value / 1000 + 'k';
        //         }
        //     return value;
        //     }
        // }
    },
    series: [
        {
            name: '累计感染',
            type: 'line',
            smooth: true,
            data: [120, 132, 101]
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: true,
            data: [220, 182, 191]
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: true,
            data: [150, 232, 201]
        },

    ]
};
ec_l1.setOption(ec_l1_option)