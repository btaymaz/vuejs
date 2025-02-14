import { createApp, compile, h } from "vue";

export default async function decorate(block) {
  const newsListingWrapper = document.createElement("div");
  const linkData = {};
  linkData.title = "Title Lorem";
  linkData.description = "Sample Description";
  linkData.link = "https://www.google.com";
  linkData.linkText = "View all";
  linkData.items = [
    {
      title: "Link Title",
      description: "Link Description",
      link: "https://www.google.com",
      date: "2023-10-01",
    },
    {
      title: "Link Title 2",
      description: "Link Description 2",
      link: "https://www.google.com",
      date: "2023-10-02",
    },
    {
      title: "Link Title 3",
      description: "Link Description 3",
      link: "https://www.google.com",
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
                linkData,
              },
              render() {
                return h(compile(template), this.linkData);
              },
            },
            { linkData: linkData }
          );
        },
      });

      app.mount(newsListingWrapper);

      block.innerHTML = "";
      block.appendChild(newsListingWrapper);
    })
    .catch((e) => console.error(e));    
}
