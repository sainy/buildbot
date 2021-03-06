class MastersState {
    constructor($stateProvider) {

        // Name of the state
        const name = 'masters';

        // Menu configuration
        const cfg = {
            group: "builds",
            caption: 'Build Masters'
        };

        // Register new state
        $stateProvider.state({
            controller: `${name}Controller`,
            templateUrl: `views/${name}.html`,
            name,
            url: '/masters',
            data: cfg
        });

        // master page is actually same as masters, just filtered
        $stateProvider.state({
            controller: `${name}Controller`,
            templateUrl: `views/${name}.html`,
            name: 'master',
            url: '/masters/:master',
            data: {}});
    }
}


angular.module('app')
.config(['$stateProvider', MastersState]);
