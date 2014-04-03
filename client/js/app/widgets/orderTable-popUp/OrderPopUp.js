define(
    [
        'app/domain/Repository',
        'app/domain/OrderModel',
        'app/widgets/overlay/OverLay',
        'backbone',
        'jqueryui',
        'keel/BaseView',
        'text!app/widgets/orderTable-popUp/OrderPopUpTemplate.html'
    ],
    function(Repository, OrderModel, OverLay, Backbone, jqueryui, BaseView, OrderPopUpTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'div class="orderPopUp"',

            elements: ['popUpContainer', 'closeButton','orderForm','orderCreateButton'],

            template: {
                name: 'OrderPopUpTemplate',
                source: OrderPopUpTemplate
            },

            events: {
                'click .js-orderCreateButton': 'create',
                'click .js-closeButton': 'cancel'
            },

            postRender: function(){
                this.$el.draggable();
            },

            create: function() {
                var numOrders = document.getElementById('numOrders').value;
                for(var i=0; i<numOrders; i++){
                    var side;
                    var symb = '';
                    var tID = '';
                    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    var bOs = ['','Buy', 'Sell'];
                    side = bOs[Math.floor(Math.random()*2)+1];
                    for(var k=0; k<4; k++){
                        symb += alphabet.charAt(Math.floor(Math.random()*alphabet.length));
                    }
                    for(var l=0; l<2; l++){
                        tID += alphabet.charAt(Math.floor(Math.random()*alphabet.length));
                    }
                    var quant = Math.floor((Math.random()*2000)+500);
                    var order = new OrderModel({
                        side: side,
                        symbol: symb,
                        quantity:  quant,
                        limitPrice: '10.04',
                        traderId: tID
                    });
                    order.save();
                }
                document.getElementById('numOrders').value = '';
                this.destroy();
            },

            cancel: function() {
                this.destroy();
            }
        });
    }
);