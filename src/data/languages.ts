interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Romanian",
        level: "Native",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Russian",
        level: "Fluent",
        description: "I speak fluently",
        show: true
    },
    {
        name: "English",
        level: "B2",
        description: "I speak and write with confidence",
        show: true
    }
];

export default languages;
