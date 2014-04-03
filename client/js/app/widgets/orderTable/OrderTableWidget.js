define(
    [
        'app/domain/Repository',
        'app/widgets/orderTable-order/OrderRow',
        'backbone',
        'underscore',
        'keel/BaseView',
        'text!app/widgets/orderTable/OrderTableTemplate.html'
    ],
    function(Repository, OrderRow, Backbone, _, BaseView, OrderTableTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'form class="table"',
            elements: ['orderTable', 'orderTableBody'],

            template:{
                name: 'OrderTableTemplate',
                source: OrderTableTemplate
            },

            initialize: function(){
                this.listenTo(this.collection, 'reset', function(){
                    this.render();
                });
                this.listenTo(this.collection, 'add', function(order){
                    this.addChild(
                        {
                            id: 'OrderRow',
                            viewClass: OrderRow,
                            parentElement: this.orderTableBodyElement,
                            options: {
                                model: order
                            }
                        }
                    );
                });
                console.log('I am the Order Table Widget and I am loaded.');
            },

            postRender: function(){
                this.collection.each(function(order){
                    this.addChild({
                        id: 'OrderRow',
                        viewClass: OrderRow,
                        parentElement: this.orderTableBodyElement,
                        options: {
                            model: order
                        }
                    });
                }, this);
                return this;
            }
        });
    }
);