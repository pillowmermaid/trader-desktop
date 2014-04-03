define(
    [
        'app/domain/Repository',
        'backbone',
        'keel/BaseView',
        'text!app/widgets/orderTable-order/OrderRowTemplate.html'
    ],

    function(Repository, Backbone, BaseView, OrderRowTemplate){
        'use strict';

        return BaseView.extend({
            tagName: 'tr class="table-row"',

            template:{
                name: 'OrderRowTemplate',
                source: OrderRowTemplate
            },
            initialize: function() {
                this.listenTo(this.model, 'change', function(){
                    this.render();
                });
            }
        });
    }
);