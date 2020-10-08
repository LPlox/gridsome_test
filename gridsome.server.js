// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const posts = require("./src/data/pages.json");

module.exports = function(api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.loadSource((store) => {
    const contentType = store.addCollection({
      typeName: "Posts",
    });

    for (const item of posts) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        body: item.body,
        tags: item.tags,
        slug: item.slug,
      });
    }

    //QUERY
    // query{
    //   posts(id: 1001){
    //     title
    //   }
    // }

    // query Posts {
    //   posts: allPosts {
    //     edges {
    //       node {
    //         id
    //         title
    //       }
    //     }
    //   }
    // }

    // async (actions) => {
    // const collection = actions.addCollection({
    //   typeName: "Pages",
    //   route: "examples/:id",
    // });
    // const collection = actions.addCollection("Post");
    // for (const page of Pages) {
    //   // collection.addNode(page);
    //   collection.addNode({
    //     id: page.id,
    //     source: page.source,
    //     author: page.author,
    //     linkTitle: page.linkTitle,
    //     title: page.title,
    //     subTitle: page.subTitle,
    //     bodyTitle: page.bodyTitle,
    //     body: page.body,
    //     slug: page.slug,
    //   });
    // }
    // }

    // addSchemaTypes([
    //   schema.createObjectType({
    //     name: "Post",
    //     interfaces: ["Node"],
    //     fields: {
    //       id: "ID!",
    //       source: "String",
    //       author: "String",
    //       linkTitle: "String",
    //       title: "String",
    //       subTitle: "String",
    //       bodyTitle: "String",
    //       body: "String",
    //       slug: "String",
    //     },
    //   }),
    // ]);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
