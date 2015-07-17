import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    roundNo: DS.attr('number', {defaultValue: 1}),
    duration: DS.attr('number', {defaultValue: 1}),
    startTime: DS.attr('date',
        {defaultValue: function () { return new Date(); }}),
    active: DS.attr('boolean', {defaultValue: false})
});
