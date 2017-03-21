import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyRental(article) {
      article.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
