import { defineConfig } from "vitepress";

const base = process.env.GITHUB_ACTIONS ? "/OpenClaw-KnowHowHub/" : "/";

export default defineConfig({
  title: "OpenClaw KnowHowHub",
  description: "The Red Book and Cookbook for OpenClaw",
  lang: "en-US",
  base,
  cleanUrls: true,
  themeConfig: {
    logo: "/assets/overview-diagram.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Red Book", link: "/red-book" },
      { text: "Cookbook", link: "/cookbook" },
      { text: "Top 10", link: "/rankings" },
      { text: "Latest Digest", link: "/latest-digest" },
      {
        text: "GitHub",
        link: "https://github.com/JimmyWangJimmy/OpenClaw-KnowHowHub"
      }
    ],
    sidebar: [
      {
        text: "Start Here",
        items: [
          { text: "Home", link: "/" },
          { text: "Red Book", link: "/red-book" },
          { text: "Cookbook", link: "/cookbook" },
          { text: "Top 10", link: "/rankings" },
          { text: "Latest Digest", link: "/latest-digest" }
        ]
      }
    ],
    outline: "deep",
    socialLinks: [
      { icon: "github", link: "https://github.com/JimmyWangJimmy/OpenClaw-KnowHowHub" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "OpenClaw KnowHowHub",
      copyright: "Built for humans and agents"
    }
  }
});
