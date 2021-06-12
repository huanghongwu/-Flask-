var ec_l2 = echarts.init(document.getElementById('l2'),"dark");


ec_l2_option = {
    title: {
        text: '全国疫情递增趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['感染增加数', '治愈增加数', '死亡增加数']
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
            name: '感染增加数',
            type: 'line',
            smooth: true,
            data: [120, 132, 101]
        },
        {
            name: '治愈增加数',
            type: 'line',
            smooth: true,
            data: [220, 182, 191]
        },
        {
            name: '死亡增加数',
            type: 'line',
            smooth: true,
            data: [150, 232, 201]
        },

    ]
};
ec_l2.setOption(ec_l2_option)