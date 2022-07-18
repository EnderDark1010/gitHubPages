//template Playlist object
//  title: "",
//   img: "",
//   text: [],
//   link:"",

import { CardPage } from "./Components/Pages/CardPage";
export const playlists = [
  {
    title: "Hardstyle",
    img: "https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A2PA3811PT17X25Y59D195113909FS4071/views/1,width=500,height=500,appearanceId=2,backgroundColor=fcfeff/hardstyle-glitch-white-maenner-premium-t-shirt.jpg",
    text: ["Just hardstyle remixes and songs"],
    link: "https://www.youtube.com/playlist?list=PLyY-hDcFVEJS0O3XP50Zw7gp1dsiJ5dSk",
  },
  {
    title: "Sad shit",
    text: [
      "Just pain",
      "Mainly slower songs",
      "Texts about depressing shit and yearning for love I guess",
    ],
    link: "https://www.youtube.com/playlist?list=PLyY-hDcFVEJTaYicZzH7rFc77demTNdFg",
    img: "https://i.pinimg.com/originals/ba/56/c7/ba56c70e190204103bafec7676a1314f.jpg",
  },
  {
    title: "Pokemon Ost's",
    text: ["Just pokemon ost's", "As they were my favorite games in the past"],
    link: "https://www.youtube.com/playlist?list=PLyY-hDcFVEJQzqtDjpXFeUIm8QglFFf-E",
    img: "https://images2.alphacoders.com/718/718222.png",
  },
  {
    title: "Initial D Ost's",
    text: ["Eurobeat stuff", "best old anime in my opinion"],
    link: "https://www.youtube.com/playlist?list=PLyY-hDcFVEJQzKJ0rkvxSSo28IiamA5bS",
    img: "https://wallpapers.com/images/high/initial-d-fujiwara-takumi-cbs8jev7bqol21bp.jpg",
  },
];

export const socials = [
  {
    text: ["Discord"],
    title: "EnderDark1010#6919",
    img: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/05/discord-logo.jpg",
    link: "https://discord.com/",
  },
  {
    text: ["Instagram"],
    title: "amanuel.1010",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    link: "https://www.instagram.com/amanuel.1010/",
  },
  {
    text: ["Spotify"],
    title: "EnderDark1010",
    img: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png",
    link: "https://open.spotify.com/user/j4qiep4lmmiixgfr4ew5th0bb",
  },
  {
    text: ["Twitch"],
    title: "enderDark1010",
    img: "https://blog.twitch.tv/assets/uploads/generic-email-header-1.jpg",
    link: "https://www.twitch.tv/enderdark1010",
  },
  {
    text: ["Twitter"],
    title: "EnderDark1010",
    img: "https://images.wondershare.com/repairit/aticle/2021/08/twitter-header-photo-issues-1.jpg",
    link: "https://twitter.com/EnderDark1010",
  },
  {
    text: ["Steam"],
    title: "EnderDark1010",
    img: "https://www.se7ensins.com/attachments/steam-logo-jpg.11002/",
    link: "https://steamcommunity.com/profiles/76561198372299822",
  },
  {
    text: ["YouTube"],
    title: "EnderDark1010",
    img: "https://play-lh.googleusercontent.com/vA4tG0v4aasE7oIvRIvTkOYTwom07DfqHdUPr6k7jmrDwy_qA_SonqZkw6KX0OXKAdk",
    link: "https://www.youtube.com/channel/UCYRJf5aZPVr3ioJ5yCkF3kg",
  },
];

export const pages = [
  {
    title: "Socials",
    endpoint: "social",
    pagesObject: <CardPage data={socials} />,
  },
  {
    title: "Playlists",
    endpoint: "playlist",
    pagesObject: <CardPage data={playlists} />,
  },
];
