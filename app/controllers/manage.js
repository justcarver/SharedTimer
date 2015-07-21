import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteTimer : function () {
            this.get('model').destroyRecord();
            this.transitionToRoute('index');
        },
        startTimer : function (){
            var model = this.model;
            var newTime = new Date();
            model.set('isActive', true);
            model.set('startTime', newTime);
            model.save().then(function() {
                model.reload();
            });
        },
        stopTimer : function (){
            var model = this.model;
            model.set('isActive', false);
            model.save().then(function () {
                model.reload();
            });
        },
        addHour: function () {
            var model = this.model;
            var newDuration = model.get('duration') + 3600;
            model.set('duration', newDuration);
        },
        addMinute: function () {
            var model = this.model;
            var newDuration = model.get('duration') + 60;
            model.set('duration', newDuration);
        },
        addSecond: function () {
            var model = this.model;
            var newDuration = model.get('duration') + 1;
            model.set('duration', newDuration);
        },
        removeHour: function () {
            var model = this.model;
            if(model.get('duration') >= 3600) {
                var newDuration = model.get('duration') - 3600;
                model.set('duration', newDuration);
            }
        },
        removeMinute: function () {
            var model = this.model;
            if(model.get('duration') >= 60) {
                var newDuration = model.get('duration') - 60;
                model.set('duration', newDuration);
            }
        },
        removeSecond: function () {
            var model = this.model;
            if(model.get('duration') > 0) {
                var newDuration = model.get('duration') - 1;
                model.set('duration', newDuration);
            }
        },
    }
});
