Vue.component('ttp-article', {
  props: {
    content: {
      title: String,
      likes: Number,
      author: String,
      contentText: String,
    },
  },

  template: `
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ content.title }}</h5>
        <p class="card-text">
          {{ content.contentText }}
        </p>
        <a href="#" class="btn btn-primary">{{ content.author }}</a>
      </div>
    </div>
  `,
});

new Vue({
  el: '#app',
});
