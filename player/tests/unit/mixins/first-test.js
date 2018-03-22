import Ember from 'ember';
import FirstMixin from 'player/mixins/first';
import { module, test } from 'qunit';

module('Unit | Mixin | first');

// Replace this with your real tests.
test('it works', function(assert) {
  let FirstObject = Ember.Object.extend(FirstMixin);
  let subject = FirstObject.create();
  assert.ok(subject);
});
