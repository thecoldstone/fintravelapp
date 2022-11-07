const navigation = [
    { text: "HOME", url: "/" },
    {
        text: "LAPPEENRANTA", url: "/"
    },
    {
        text: "SCHEDULE", navigation: [
            { text: "RYANAIRFLIGHT", url: "ryanairflight" },
            { text: "TOURTOLAPPEENRANTA", url: "lappeenranta" },
            { text: "ONEHOURTOUR", url: "onehourtour" },
            { text: "HELSINKI", url: "helsinki" },
            { text: "RENTBUS", url: "rent" }
        ]
    },
    { text: "CONTACTS", url: "/" }
];

export default navigation;