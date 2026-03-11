export interface TimelineItem {
    date: string
    title: string
    description: string
}

export const timelineData: TimelineItem[] = [
    {
        date: "February 2026",
        title: "World of Warcraft Housing",
        description:
            "Discord Bot has been set up and can now be started and stopped via the web interface. Servers can be added and a standard Discord structure is created for categories and forums. These can be edited and activated/deactivated. Other options are also available. The overview map with overview lists can be posted to the relevant discord forum via the web with a click of a button."
    },

    {
        date: "January 2026",
        title: "World of Warcraft Housing",
        description:
            "Databases were structured and the basic framework and structure for the UI were set up. Communication between the web, API, and database was established. A simulation has been added that retroactively adds user data to the database. The houses are marked accordingly on the overview map as AVAILABLE, RESERVED, and OCCUPIED."
    },

    {
        date: "December 2025",
        title: "World of Warcraft Housing",
        description:
            "Initialization and launch of the project. The project consists of a web interface and a Discord bot that communicate with each other via API and a shared database. It is used to reserve buildings, provide an overview of individual neighborhoods, and more."
    }
]