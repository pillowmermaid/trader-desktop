define(
    [
        'app/domain/Repository',
        'app/widgets/orderTable-popUp/OrderPopUp',
        'backbone',
        'keel/BaseView',
        'services/OrderServices',
        'text!app/widgets/orderTable-toolbar/OrderTableToolbarTemplate.html'
    ],
    function(Repository, OrderPopUp, Backbone, BaseView, OS, OrderTableToolbarTemplate){
        'use strict';

        return BaseView.extend ({
            tagName: 'form id="toolbar"',
            elements: ['tradeButtons'],
            template: {
                name: 'OrderTableToolbarTemplate',
                source: OrderTableToolbarTemplate
            },

            events: {
                'click .js-tradeButton': 'createTrade',
                'click .js-deleteButton': 'deleteAll',
                'click .js-refreshButton': 'refresh',
                'click .js-tableButton' : 'displayTable',
                'click .js-chartButton' : 'displayChart'
            },

            initialize: function(){
                console.log('I am the Toolbar Widget and I am loaded');
            },

            createTrade: function(){
                this.addChild({
                    id: 'OrderPopUp',
                    viewClass: OrderPopUp,
                    parentElement: this.tradeButtonsElement,
                    options: {
                    }
                });
            },

            deleteAll: function(){
                OS.clearAllOrders();
            },

            refresh: function(){
                this.collection.fetch();
            },

            displayTable: function(){
                alert('displaying table');
            },

            displayChart: function(){
                //alert('displaying chart'); 
            }
        });
    }
);