import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        create : function () {
            var roomName = this.get('roomName');
            if (roomName !== '') {
                var timer = this.store.createRecord('timer', {
                    name: roomName
                });
                var self = this;
                timer.save().then(
                    function (timer) {
                        self.transitionToRoute('view',timer);
                    }
                );
            }
        }
    }
});
