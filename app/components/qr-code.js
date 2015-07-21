import Ember from 'ember';

export default Ember.Component.extend({
    displayCode: function () {
        var linkID = Ember.$('.qrcode').attr('id');
        var link = "http://localhost:4200/view/" + linkID;
        Ember.$('#qr-link').attr('href', link);
        Ember.$('#qr-link').html(link);
        Ember.$('.qrcode').qrcode({width:200,height:200, text:link});
    }.on('didInsertElement')
});
