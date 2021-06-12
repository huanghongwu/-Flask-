var ec_center = echarts.init(document.getElementById('c2'),"dark");
var mydata = [{'name':'上海','value':318},{'name':'云南','value':162}]

var ec_center_option = {
	title:{
		text:'',
		subtext:'',
		x:'left'
	},
	tooltip:{
		trigger:'item'
	},
	visualMap:{
		show:true,
		x:'left',
		y:'bottom',
		textStyle:{
			fontSize:8,
		},
		splitList:[{end:1},
		{start:1,end:9},
		{start:10,end:29},
		{start:30,end:39},
		{start:40,end:49},
		{start:50}],
	color:['#4A3310','#8A3310','#C64918','#E55B25','#F2AD92','#F9DCD1']
},
	series:[{
		name:'累计确诊人数',
		type:'map',
		mapType:'china',
		roam:false,
		itemStyle:{
			normal:{
				borderWidth:.5,
				borderColor:'#009fe8',
				areaColor:"#ffefd5",
				},
			// 鼠标划过设置
			emphasis:{
				borderWidth:.5,
				borderColor:'#4b0082',
				areaColor:"#fff",
				}
			},
		label:{
			normal:{
				show:true,
				fontSize:8,
				},
				emphasis:{
					show:true,
					fontSize:8,
				}
			},
		data:mydata	
	}]
};
ec_center.setOption(ec_center_option)
