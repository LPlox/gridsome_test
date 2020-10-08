<template>
  <Layout>
    <div>
      <h1 v-html="post.title" />
      <p v-html="post.id" />
      <p v-html="post.body"></p>
      <div v-for="tag in post.tags" :key="tag.id">
        <Card v-bind:tag="tag" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!){
    posts(id: $id){
        id
        title
        tags
        body
    }
}
</page-query>

<script>
import Card from "../components/Card.vue";

export default {
  name: "PostsTemplate",
  components: { Card },
  computed: {
    post() {
      return this.$page.posts;
    },
  },
  metaInfo() {
    return this.$page.posts.title;
  },
};
</script>


<style lang="sass" scoped>

</style>