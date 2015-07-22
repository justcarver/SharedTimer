import Ember from 'ember';

export default Ember.Component.extend({
    timerActive: function () {
        var endTime = this.get('endTime');
        var currentTime = moment();
        var difference = moment(endTime).diff(currentTime);
        var diffSecs = Math.floor(difference / 1000);

        setInterval( function () {
            if (diffSecs > 0) {
                var hours = Math.floor( diffSecs / 3600 );
                var minutes = diffSecs - (hours * 3600);
                minutes = Math.floor(minutes / 60);
                var seconds = diffSecs - (hours * 3600);
                seconds = seconds - (minutes * 60);
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                Ember.$('.hours-display').html(hours);
                Ember.$('.minutes-display').html(minutes);
                Ember.$('.seconds-display').html(seconds);
                diffSecs = diffSecs - 1;
                console.log(diffSecs);
            } else {
                return;
            }
        }, 1000);
    }.on('didInsertElement')
});
