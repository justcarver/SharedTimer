import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    roundNo: DS.attr('number', {defaultValue: 1}),
    startDate: DS.attr('date',
        {defaultValue: function () { return new Date(); }}),
    startTime: DS.attr('date',
        {defaultValue: function () { return new Date(); }}),
    duration: DS.attr('number',
        {defaultValue: 3600}),
    isActive: DS.attr('boolean', {defaultValue: false}),
    hours: function () {
        var hours = Math.floor(this.get('duration') / 3600);
        if (hours < 10) {
            hours = "0" + hours;
            return hours;
        } else {
            return hours;
        }
    }.property('duration'),
    minutes: function () {
        var hours = parseInt(this.get('hours')) * 3600;
        var minutes = this.get('duration') - hours;
        minutes = Math.floor( minutes / 60 );
        if (minutes < 10) {
            minutes = "0" + minutes;
            return minutes;
        } else {
            return minutes;
        }
    }.property('duration','hours'),
    seconds: function () {
        var hours = parseInt(this.get('hours')) * 3600;
        var minutes = parseInt(this.get('minutes')) * 60;
        var seconds = this.get('duration') - minutes - hours;
        if (seconds < 10) {
            seconds = "0" + seconds;
            return seconds;
        } else {
            return seconds;
        }
    }.property('duration','hours','minutes')
});
