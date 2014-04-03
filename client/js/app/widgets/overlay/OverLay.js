define(
    [
        'backbone',
        'keel/BaseView',
        'text!app/widgets/overlay/OverLayTemplate.html'
    ],
    function(Backbone, BaseView, OverLayTemplate) {
        'use strict';

        return BaseView.extend({

            tagName: 'div class=overLay',

            elements: ['closeButton','orderForm','orderCreateButton'],

            template: {
                name: 'OverLayTemplate',
                source: OverLayTemplate
            }
        });
    }
);