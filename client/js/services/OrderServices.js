define(
    [
        'app/domain/Repository'
    ],
    function(Repository){
        'use strict';
        var _ordersURL = '/rest/orders';
        
        return {
            clearAllOrders: function(){
                $.ajax({
                    url: _ordersURL,
                    type: 'DELETE'
                });
            }
        };
    }
);


