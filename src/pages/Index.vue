<template>
  <Layout>
    <h1>Upptäck alla möjligheter med digifysisk vård</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="'/example/' + edge.node.id">{{ edge.node.title }}</g-link>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPosts {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Region Stockholm",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
