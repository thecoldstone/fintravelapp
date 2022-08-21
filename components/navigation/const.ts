const navigation = [
    { text: "HOME", url: "/" },
    {
        text: "LAPPEENRANTA", navigation: [
            { text: "TOURTOLAPPEENRANTA", url: "lappeenranta" },
            { text: "ONEHOURTOUR", url: "onehourtour" },
            { text: "HELSINKI", url: "helsinki" }
        ]
    },
    { text: "SCHEDULE", url: "/" },
    { text: "CONTACTS", url: "/" }
];

export default navigation;