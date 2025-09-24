interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Faculty of Urban Planning and Architecture",
        startDate: "2002-09-01",
        endDate: "2006-06-30",
        school: "Moldova State University",
        location: "Moldova, Chisinau",
        description: "Major in Architecture and Urban Planning.",
        currentUni: false,
    },
    {
        title: "Telecomunicatii",
        startDate: "1999-09-01",
        endDate: "2002-06-30",
        school: "Telecommunications High School",
        location: "Moldova, Chisinau",
        description: "High School focused on telecommunications and related technologies.",
        currentUni: false,
    },
    {
        title: "Ion Creangă Theoretical Lyceum",
        startDate: "1994-09-01",
        endDate: "1999-06-30",
        school: "Ion Creangă Theoretical Lyceum",
        location: "Moldova, Falesti",
        description: "General secondary education with a focus on sciences and humanities.",
        currentUni: false,
    },
];

export default education;
