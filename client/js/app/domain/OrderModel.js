define([
        'app/domain/Repository',
        'backbone'
    ],
    function(Repository, Backbone){
        'use strict';
        var Order = Backbone.Model.extend({
            url: '/rest/orders'
        });
        return Order;
    }
);