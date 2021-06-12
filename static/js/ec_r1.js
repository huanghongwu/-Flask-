var ec_r1 = echarts.init(document.getElementById('r1'),"dark");

ec_r1_option = {
    title: {
        text: '全国疫情top5',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

ec_r1.setOption(ec_r1_option)