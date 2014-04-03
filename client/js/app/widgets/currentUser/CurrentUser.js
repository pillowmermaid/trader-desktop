define(
    [
        'app/domain/Repository',
        'backbone',
        'keel/BaseView',
        'text!app/widgets/currentUser/CurrentUserTemplate.html'
    ],

    function(Repository, Backbone, BaseView, CurrentUserTemplate){
        'use strict';

        return BaseView.extend({
            tagName: 'span',
            template: {
                name: 'CurrentUserTemplate',
                source: CurrentUserTemplate
            }
        });
    }
);