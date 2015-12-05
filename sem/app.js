
angular.module('semApp', ['ngMaterial']).controller('AppCtrl', AppCtrl);

  
  function AppCtrl ($scope, $log) {
	$scope.title = [
	'Project Introduction and W52H',
	'Rapid Prototype - Wireframe','Product Backlog Presentation','Requirements Traceability','ALPHA RELEASE',
	'Sprint #2 R & R','Cocomo Cost Estimation','KT and Design Presentation','BETA RELEASE',
	'CK Design Metrics Review','SQA Testing Review'];
	$scope.dates = ["25th August 2015","3rd September 2015","8th September 2015","17th September 2015","24th September 2015","1st October 2015","3rd October 2015","20th October 2015","5th November 2015","17th November 2015","24th November 2015"]
	var tabs = [
          { title: 'Li8 Technologies', content: [
					{
						// Project Introduction and W52H
						speakerdeck:'98168ce65b77402dbf4956bc8a2e92b8',		
						desc:'After the swap',
					},
					{
						// Rapid Prototype - Wireframe
						speakerdeck:'9055f51a7fcd44b0971f004f7f16f0c6',
					},
					{	
						// Product Backlog Presentation
						speakerdeck:'b5a2a5b7299b4f51ba99d968881d444b'
					},
					{	
						// Requirements Traceability
						speakerdeck:'8c11eaa3598148b585e1b917e4ad6d08'
					},
					{	
						// ALPHA RELEASE
						speakerdeck:'9d4e98f83d91440394372404637c2efb'
					},
					{	
						// Sprint #2 R & R
						speakerdeck:'937e1f54df7840f997d62fadfa665f5b'
					},
					{	
						// Cocomo Cost Estimation
						speakerdeck:'98f633daffb845e99de53849a793b0bc'
					},
					{	
						// KT and Design Presentation
						speakerdeck:'d9f197d4317843a4b5d5cd4c962554b8'
					},
					{	
						// BETA RELEASE
						speakerdeck:'d64d8f06d6234bcfb75a670788221c0e'
					},
					{
						// CK Design Metrics Review
						speakerdeck:'956d651b218a4dd5a44cae0845d1fcf1'
					},
					{	
						// SQA Testing Review
						speakerdeck:'b5a2a5b7299b4f51ba99d968881d444b'
					},
				]
			},
          { title: 'D`Falcons', content: [
					
				]},
          { title: 'Cube-X', content: [
							  
				]},
          { title: 'NDAARP', content: [
							  
				]},
          
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
    })
	$scope.getUrl = function(id){
		return id;
	}
  };
