import Ember from 'ember';

export default Ember.Component.extend({
    moveLabel: function () {
        Ember.$('.form-group .input-group input').focusout(function(){
            var text_val = Ember.$(this).val();

            if(text_val === "") {

                Ember.$(this).removeClass('has-value');

            } else {

                Ember.$(this).addClass('has-value');

            }

        });
    }.on('didInsertElement'),
    actions: {
        createRoom: function () {
            var roomName = Ember.$('.form-group .input-group input').val();
            var hasClass = Ember.$('.form-group .input-group input').hasClass('has-value');
            if (hasClass) {
                this.sendAction('action',roomName);
            } else {
                var label = Ember.$('.input-group label');
                label.html("Please enter a name");
                label.css("color","#FF4136");
            }
        }
    }
});
