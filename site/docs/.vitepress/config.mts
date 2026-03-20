import { defineConfig } from "vitepress";

const base = process.env.GITHUB_ACTIONS ? "/OpenClaw-KnowHowHub/" : "/";

export default defineConfig({
  title: "OpenClaw KnowHowHub",
  description: "OpenClaw 的红宝书（Red Book）与配方手册（Cookbook）",
  lang: "zh-CN",
  base,
  cleanUrls: true,
  themeConfig: {
    logo: "/assets/overview-diagram.svg",
    nav: [
      { text: "首页（Home）", link: "/" },
      { text: "红宝书（Red Book）", link: "/red-book" },
      { text: "配方手册（Cookbook）", link: "/cookbook" },
      { text: "来源榜单（Top 10）", link: "/rankings" },
      { text: "最新周报（Latest Digest）", link: "/latest-digest" },
      {
        text: "GitHub",
        link: "https://github.com/JimmyWangJimmy/OpenClaw-KnowHowHub"
      }
    ],
    sidebar: [
      {
        text: "快速导航（Start Here）",
        items: [
          { text: "首页（Home）", link: "/" },
          { text: "红宝书（Red Book）", link: "/red-book" },
          { text: "配方手册（Cookbook）", link: "/cookbook" },
          { text: "来源榜单（Top 10）", link: "/rankings" },
          { text: "最新周报（Latest Digest）", link: "/latest-digest" }
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
      copyright: "为人类与智能体（agents）共同构建"
    }
  }
});
