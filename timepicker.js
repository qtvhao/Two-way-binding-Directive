function TimeDurationDirective(){
        function postLink(scope,element,attr,ngModelCtrl){
        	ngModelCtrl.$render=function() {
        		scope.time=(ngModelCtrl.$viewValue);
        	}
        	scope.$watch('time', function(newValue, oldValue, scope) {
			ngModelCtrl.$setViewValue(newValue);
        	});
        }
        return {
        	restrict:'E',
        	require:'ngModel',
        	templateUrl:'tpl.html',
        	link:postLink
        }
    }
angular
    .module('timepicker', [])
    .directive('timepicker',TimeDurationDirective);
