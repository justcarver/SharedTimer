import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    roundNo: DS.attr('number', {defaultValue: 1}),
    startDate: DS.attr('string',
        {defaultValue: function () {
            return new Date();
        }}),
    startTime: DS.attr('date',
        {defaultValue: function () {
            return new Date();
        }}),
    duration: DS.attr('number',
        {defaultValue: 3600}),
    isActive: DS.attr('boolean', {defaultValue: false}),
    endTime: function () {
        return moment(this.get('startTime')).add(this.get('duration'),'seconds');
    }.property('startTime','duration'),
    timeRemaining: function () {
        return moment(this.get('endTime')).diff(this.get('startTime'));
    }.property('startTime','endTime'),
    hours: function () {
        var hours = Math.floor(this.get('timeRemaining') / 3600000);
        if (hours < 10) {
            hours = "0" + hours;
            return hours;
        } else {
            return hours;
        }
    }.property('timeRemaining'),
    minutes: function () {
        var hours = parseInt(this.get('hours')) * 3600000;
        var minutes = this.get('timeRemaining') - hours;
        minutes = Math.floor( minutes / 60000 );
        if (minutes < 10) {
            minutes = "0" + minutes;
            return minutes;
        } else {
            return minutes;
        }
    }.property('timeRemaining','hours'),
    seconds: function () {
        var hours = parseInt(this.get('hours')) * 3600000;
        var minutes = parseInt(this.get('minutes')) * 60000;
        var seconds = this.get('timeRemaining') - minutes - hours;
        seconds = seconds / 1000;
        if (seconds < 10) {
            seconds = "0" + seconds;
            return seconds;
        } else {
            return seconds;
        }
    }.property('timeRemaining','hours','minutes')
});
