var app=angular.module('app',[]);

app.directive('enter',function(){
	return function(scope,element,attrs){
		element.bind('mouseenter',function(){
			element.addClass('alert-box');
		})
	}
})

app.directive('leave',function(){
	return function(scope,element,attrs){
		element.bind('mouseleave',function(){
			element.removeClass('alert-box');
		})
	}
})

// 如果采取驼峰写法 helloWorld 
// 那么在引入的时候可以可以使用 <hello-world></hello-world>的方式引入
app.directive('hello',function(){
	var el = '<div><input ng-model="txt"></div><div>{{txt}}</div>';
	// 没有搞清楚为什么极客学院为什么给出这样一段代码
	// var el = angular.element('<div><input ng-model="txt"></div><div>{{txt}}</div>');
	return {
		// 在页面上如何调用
		// E -> element 调用时，使用<hello></hello>即可
		// A -> attribute 调用时， 使用 <div hellow></div>
		// C -> class 调用时， 使用 <div class="hello"></div>
		restrict:'E',
		// template是html片段
		template:el,
		// 是否替换掉自定义的标签， 即把<hello></hello>替换为我们设置的html
		// 默认为false， 会保留<hello></hello>
		// replace: true,
		link:function(scope,element){
			console.log('hzz test directive');
			scope.$watch('txt',function(newVal){
				if(newVal === 'error'){
					element.addClass('alert-box alert')
				}
			})
		}
	}
})

app.directive('world',function(){
	var el = '<p>hello world</p>';
	return {
		// 在页面上如何调用
		// E -> element 调用时，使用<hello></hello>即可
		// A -> attribute 调用时， 使用 <div hellow></div>
		// C -> class 调用时， 使用 <div class="hello"></div>
		restrict:'E',
		// template是html片段
		template:el,
		// 是否替换掉自定义的标签， 即把<hello></hello>替换为我们设置的html
		// 默认为false， 会保留<hello></hello>
		replace: true,
		link:function(scope,element){
			console.log('hzz test directive, hello world');
		}
	}
})


app.controller('AppController', function ($scope) {
	$scope.loadMoreData = function () {
		console.log('loading data ...');
	};
	$scope.deleteData = function () {
		console.log('delete data ...');
	};
});
app.directive('enter', function () {
	return function (scope, element, attrs) {
		element.bind('mouseenter', function () {
			// scope.loadMoreData();
			// scope.$apply("loadMoreData()");
			scope.$apply(attrs.enter);
		});
	};
});

//  第二课
app.directive('name', function () {
	return {
		restrict: 'E',
		scope: {}, // 每次渲染时scope 为空
		controller: function ($scope) {
			$scope.words = [];
			this.addHzz = function () {
				$scope.words.push('Hzz');
			};
			this.addPql = function () {
				$scope.words.push('Pql');
			};
			this.addLove = function () {
				$scope.words.push('Love');
			};
		},
		link: function (scope, element, attrs) {
			element.bind('mouseenter', function () {
				console.log(scope.words);
			});
		}
	};
});
// require后，会看见，我们这里多了一个对 nameControoler的引用，以获得controller
app.directive('hzz', function () {
	return {
		require: 'name',
		link: function (scope, element, attrs, nameController) {
			nameController.addHzz();
		}
	};
});
app.directive('pql', function () {
	return {
		require: 'name',
		link: function (scope, element, attrs, nameController) {
			nameController.addPql();
		}
	};
});
app.directive('love', function () {
	return {
		require: 'name',
		link: function (scope, element, attrs, nameController) {
			nameController.addLove();
		}
	};
});

// 第三课

app.directive('enter3rd', function () {
	return function (scope, element, attrs) {
		console.log(element);
		element.bind('mouseenter', function () {
			console.log('I\'m enter');
		});
	};
});




