angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'dndPartial.html',
                controller: 'dndPocController'
            })
            .otherwise({redirectTo: '/'});
    });
	
angular.module("demo").controller("dndPocController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dndArea: {

            "A": [
                {
                    "type": "item",
                    "id": "3"
                },
                {
                    "type": "item",
                    "id": "4"
                },
                {
                    "type": "container",
                    "id": "5",
                    "columns": [
                        [
                            {
                                "type": "item",
								"Name": "Alan",
								"Age": "29",
								"Title": "Mr",
                                "id": "6"
                            }
                        ],
                        [
                            {
                                "type": "item",
								"Name": "Michael",
								"Age": "29",
								"Title": "Mr",
                                "id": "7"
                            }
                        ],
                        [
                            {
                                "type": "item",
								"Name": "Greg",
								"Age": "33",
								"Title": "Mr",
                                "id": "8"
                            }
                        ]						
						
						
                    ]
                }
            ]
        }
    };

    $scope.$watch('models.dndArea', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
