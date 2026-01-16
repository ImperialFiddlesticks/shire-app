export const adventureScenes = {
  start: {
    text: "You stand in the doorway of your Hobbit hole. The road outside leads north and west.",
    choices: [
      { text: "Go north", next: "fork" },
      { text: "Go west", next: "river" },
    ],
    image: "/hobbithole.png",
    imageAlt: "A hobbit hole",
  },
  fork: {
    text: "After following the path for a while you reach a fork in the road. The signpost points in two directions: Bree, and Old Forest.",
    choices: [
      { text: "Follow the sign to Bree", next: "bree" },
      { text: "Follow the sign to the Old Forest", next: "oldForest" },
      { text: "Go home", next: "start" },
    ],
    image: "/signpost.png",
    imageAlt: "Sign post",
  },
  river: {
    text: "As you walk along the river, you spot a fisherhobbit. He is holding a fishing rod and focusing on the flowing water. Behind him is a pack of supplies.",
    choices: [
      {
        text: "Greet the fisherhobbit: 'Hullo there!'",
        next: "fisherhobbitConversation",
      },
      {
        text: "Try to sneak up and steal from the pack of supplies",
        next: "fisherTheft",
      },
      { text: "Continue on your way", next: "oldBridge" },
    ],
    image: "/river.png",
    imageAlt: "River",
  },
  bree: {
    text: "You find your way to the town of Bree. It is full of big-folk.",
    choices: [
      { text: "Head to the market", next: "bree-market" },
      { text: "Head to the Prancing Pony", next: "prancing-pony" },
    ],
    image: "/town2.png",
    imageAlt: "A town",
  },
  oldForest: {
    text: "The Old Forest seems large and ominous for a small hobbit.",
    choices: [
      { text: "You are a brave hobbit! Enter the forest!", next: "forestCave" },
      {
        text: "Maybe this wasn't such a good idea after all. In fact, you believe it's time for Second Breakfast!",
        next: "fork",
      },
    ],
    image: "/forest.png",
    imageAlt: "Forest",
  },
  fisherHobbitConversation: {
    text: "The old hobbit tips his straw hat to you. 'Ever done a bit of fishing, young hobbit?'",
    choices: [
      { text: "blabla", next: "conversation2" },
      { text: "goodbye", next: "keepwalking" },
    ],
    image: "/river.png",
    imageAlt: "River",
  },
};
