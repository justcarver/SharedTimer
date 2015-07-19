import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteTimer : function () {
            this.get('model').destroyRecord();
            this.transitionToRoute('index');
        },
        startTimer : function (){
            var newTime = new Date();
            console.log ( moment() );
            this.model.set('startTime', newTime);
            this.model.set('isActive', true);
            this.model.save();
            this.model.get('isActive');
        },
        stopTimer : function (){
            this.model.set('isActive', false);
            this.model.save();
            this.model.get('isActive');
        }
    }
});
