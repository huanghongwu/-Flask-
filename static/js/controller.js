function gettime(){
	$.ajax({
		url:"/time",
		success:function(d){
			$("#tim").html(d)
		},
		error:function(xhr,type,errorThrown){
			
		}
	})
}
function current_data(){
	$.ajax({
		url:"/c1",
		success:function(b){
			$(".num h1").eq(0).text(b.confirm)
			$(".num h1").eq(1).text(b.heal)
			$(".num h1").eq(2).text(b.dead)
		},
		error:function(xhr,type,errorThrown){
			
		}
	})
}

function get_c2_data(){
	$.ajax({
		url:"/c2",
		success:function(data){
			ec_center_option.series[0].data=data.data
			ec_center.setOption(ec_center_option)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}

function get_l1_data(){
	$.ajax({
		url:"/l1",
		success:function(data){
			ec_l1_option.xAxis.data=data.day
			ec_l1_option.series[0].data=data.confirm
			ec_l1_option.series[1].data=data.heal
			ec_l1_option.series[2].data=data.dead
			ec_l1.setOption(ec_l1_option)
			// print(ec_l1_option.series[0].data)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}

function get_l2_data(){
	$.ajax({
		url:"/l2",
		success:function(data){
			ec_l2_option.xAxis.data=data.day
			ec_l2_option.series[0].data=data.confirm
			ec_l2_option.series[1].data=data.heal
			ec_l2_option.series[2].data=data.dead
			ec_l2.setOption(ec_l2_option)
			// print(ec_l2_option.series[0].data)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}

function get_r1_data(){
	$.ajax({
		url:"/r1",
		success:function(data){
			ec_r1_option.xAxis.data=data.province
			ec_r1_option.series[0].data=data.numbers
			ec_r1.setOption(ec_r1_option)
			// print(ec_l2_option.series[0].data)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}

function get_r2_data(){
	$.ajax({
		url:"/r2",
		success:function(data){
			ec_r2_option.series[0].data=data.data
			ec_r2.setOption(ec_r2_option)
			// print(ec_l2_option.series[0].data)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}


gettime()
current_data()
get_c2_data()
get_l1_data()
get_l2_data()
get_r1_data()
get_r2_data()
// setInterval(gettime,1000)
// setInterval(current_data,1000)
		