var data=[
		{ 
			id:"1",
			title:"新列表",
			color:"#A48760",
			todo:[
					{t:"今天中午去处理数据",type:false},
					{t:"今天中午去处理数据",type:true}
				]
			},
			{ 
			id:"2",
			title:"新列表1",
			color:"#6CDB30",
			todo:[
					{t:"今天中午去开会",type:false},
				  	{t:"今天中午去开会",type:true},
				 	{t:"今天中午去处理数据",type:false}
				]
			},


			{ 
			id:"3",
			title:"新列表2",
			color:"#C970E2",
			todo:[
					{t:"今天中午去开会",type:true},
				  	{t:"今天中午去开会",type:false},
				  	{t:"今天中午去处理数据",type:true}
				]
		
			}
		];



var colors=['#C970E3','#6CDC30','#3FACF9','#F3CC00','#9F855C','#F82368','#FA9600']


var app=angular.module("app",[]);
	 app.controller("c",function($scope){
	 	$scope.data=data;
	 	$scope.colors=colors;
	 	$scope.index=0;
	 	$scope.selecta=false;
	 	$scope.selecta1=true;
	 	$scope.selecta2=true;


	 	$scope.cli=function(i){
	 		$scope.index=i;
			}
	 	$scope.add=function(){
	 		$scope.data.push({
	 			id:"$scope.data.length",
	 			title:'新列表'+$scope.data.length,
	 			color:$scope.colors[$scope.data.length%7],
	 			todo:[]
			})
			 $scope.index=$scope.data.length-1;;
	 	}

// 选项
	 	$scope.select=function(selecta){
	 		$scope.selecta=!$scope.selecta;
	  		$scope.r=$scope.data[$scope.index].title;

		}
// 收起完成和未完成事项
$scope.selectaa=function(selecta1){
	 		$scope.selecta1=!$scope.selecta1;

		}
$scope.selectbb=function(selecta2){
	 		$scope.selecta2=!$scope.selecta2;

		}

// 完成
		$scope.wc=function(){
			$scope.data[$scope.index].title=$scope.r
			$scope.selecta=!$scope.selecta;
			$scope.data[$scope.index].color=$scope.changeColor;		}

		$scope.setting=function(v){
			$scope.changeColor=v

			}
	
// 添加新项目
  $scope.tj=function(){
      	$scope.data[$scope.index].todo.push(
      		[{
      			t:"",
      			type:false
      		}]
      	)
      }
// 删除

  $scope.del=function(){
      	$scope.data.splice($scope.index,1);
      	$scope.show=false;
      	$scope.index=1;
      }
  $scope.remove=function(){
      	$scope.data[$scope.index].todo.splice($scope.index-1,1)
    }


     $scope.save=function(ev,v){
          v.t=ev.target.innerText;
          
      }



	 })


