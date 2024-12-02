const EDITIONS = [
  {
    title: "Improvists",
    description: "The mod for improving MC",
    firstMessage: "The Mod is Released",
    logo: "improvists.png",

    versions: [
      {
        subtitle: "Concept",
        description: "The Idea came into fruision",
        type: "event",
        date: "2024-12-01",
        icon: "versions/version_unknown.png",
        funFact: "This event takes place the day before",
        mainFeatures: [{ text: "A mod that improves on minecraft" }],
        minorFeatures: [{ text: "Nothing else." }],
      },
      {
        subtitle: "v0.1",
        description: "Money and an Ancient Structure",
        type: "major",
        date: "2024-12-01",
        icon: "versions/improvists/version_0.1.png",
        mainFeatures: [
          { text: "Iron and Gold Coins" },
          { text: "Iron and Gold Coin Nuggets" },
          { text: "Sandstone Housing Structure" },
        ],
        minorFeatures: [{ text: "Clumps (Unfunctional)" }],
      },
    ],

    upcomings: [
      {
        subtitle: "v0.1.1",
        description: "Small Content Update",
        type: "minor", // major, minor, event, or memory
        date: "2024-12-04", // year-month-day
        icon: "versions/version_unknown.png",
        mainFeatures: [{ text: "Ore Nuggets" }],
        minorFeatures: [{ text: "Nothing else." }],
      },
    ],
  },
];