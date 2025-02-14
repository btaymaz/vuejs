import { createApp, compile, h } from "vue";

export default async function decorate(block) {
  const newsListingWrapper = document.createElement("div");
  const newsData = {};
  newsData.title = "News Title";
  newsData.description = "News Description";
  newsData.link = "https://www.gm.com";
  newsData.linkText = "View all";
  newsData.items = [
    {
      title: "News Title",
      description: "News Description",
      link: "https://www.gm.com",
      date: "2023-10-01",
    },
    {
      title: "News Title 2",
      description: "News Description 2",
      link: "https://www.gm.com",
      date: "2023-10-02",
    },
    {
      title: "News Title 3",
      description: "News Description 3",
      link: "https://www.gm.com",
      date: "2023-10-03",
    },
  ];
           
  fetch("/blocks/file-vue/template.vue")
    .then((res) => res.text())
    .then((template) => {
      const app = createApp({
        render() {
          return h(
            {
              props: {
                newsData,
              },
              render() {
                return h(compile(template), this.newsData);
              },
            },
            { newsData: newsData }
          );
        },
      });

      app.mount(newsListingWrapper);

      block.innerHTML = "";
      block.appendChild(newsListingWrapper);
    })
    .catch((e) => console.error(e));    
}
