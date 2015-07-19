import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        create : function () {
            var warning = Ember.$('.warning');
            var roomName = this.get('roomName');
            warning.html("");
            if ( undefined !== roomName && roomName.length > 0 ) {
                var timer = this.store.createRecord('timer', {
                    name: roomName
                });
                var self = this;
                timer.save().then(
                    function (timer) {
                        self.transitionToRoute('manage',timer);
                    }
                );
            } else {
                warning.html("Please enter a valid name");
            }
        }
    }
});
