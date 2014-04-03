define(
    [
        'app/domain/Repository',
        'app/widgets/currentUser/CurrentUser',
        'backbone',
        'keel/BaseView',
        'text!app/widgets/orderTable-header/OrderTableHeaderTemplate.html'
    ],
    function(Repository, CurrentUser, Backbone, BaseView, OrderTableHeaderTemplate){
        'use strict';

        return BaseView.extend ({
            tagName: 'div id="header"',
            elements: ['currentLogin'],

            template: {
                name: 'OrderTableHeaderTemplate',
                source: OrderTableHeaderTemplate
            },

            initialize: function(){
                window.console.log('I am the Header Widget and I am loaded');
                this.addChild({
                    id: 'CurrentUser',
                    viewClass: CurrentUser,
                    parentElement: this.currentLoginElement,
                    options: {
                        model: Repository.getloggedInUser()
                    }
                });
            },

            postRender: function(){
                this.addChild({
                    id: 'CurrentUser',
                    viewClass: CurrentUser,
                    parentElement: this.currentLoginElement,
                    options: {
                        model: Repository.getloggedInUser()
                    }
                });
                this._setupElements();
                return this;
            }
        });
    }
);