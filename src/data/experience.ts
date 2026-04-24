export type ExperienceType = 'Work' | 'Internship' | 'Education'

export interface ExperienceEntry {
    id: string
    role: string
    organization: string
    type: ExperienceType
    location: string
    from: string
    to: string
    summary: string
    did: string[]
    learned: string[]
    liked: string[]
    growth: string[]
    tags: string[]
    durationMonths?: number
}

export const experienceData: ExperienceEntry[] = [
    {
        id: '1',
        role: 'Software Developer',
        organization: 'Conexio',
        type: 'Work',
        location: 'Denmark',
        from: 'Sep 2024',
        to: 'Dec 2025',
        summary: 'Worked on complex business systems with focus on automation, maintainability, and modernized user experience across frontend and backend.',
        did: [
            'Fixed production issues and improved system stability in complex enterprise applications.',
            'Implemented and expanded features across backend APIs and modern web frontends.',
            'Migrated a complete legacy system to Vue with a redesigned UI and improved information architecture.',
            'Worked with .NET backend services, API integrations, and frontend implementations in Vue, React, and Angular.',
            'Supported mobile-related implementation and troubleshooting workflows with Android Studio where needed.',
            'Contributed to Azure-based workflows and Git collaboration, including daily Scrum standups.',
            'Designed and iterated UI concepts in Figma before implementation.'
        ],
        learned: [
            'Learned Vue from scratch in a real project environment and applied Pinia for state management.',
            'Improved architectural thinking for systems handling invoice automation and PBS-based payment workflows.',
            'Strengthened analytical debugging skills and cross-team problem solving with colleagues and Copilot support.'
        ],
        liked: [
            'Solving complex technical challenges with direct impact on daily operations.',
            'Combining backend logic, frontend UX, and design thinking in one workflow.',
            'Working in a Danish-speaking team environment and collaborating closely in daily standups.'
        ],
        growth: [
            'Backend development depth in .NET, APIs, and integration-heavy systems.',
            'Frontend growth across Vue ecosystem patterns, reusable components, and migration work.',
            'Communication growth through full-time Danish collaboration with team members and stakeholders.'
        ],
        tags: ['.NET', 'APIs', 'Azure', 'Git', 'Vue', 'React', 'Angular', 'Pinia', 'Figma', 'Invoice Automation', 'PBS', 'Android Studio'],
        durationMonths: 16
    },
    {
        id: '2',
        role: 'Holiday Advisor',
        organization: 'Sol og Strand',
        type: 'Work',
        location: 'West Jutland, Denmark',
        from: 'Apr 2024',
        to: 'Jun 2024',
        summary: 'Handled guest booking administration, operational coordination, and multilingual customer support in a fast-paced holiday rental office.',
        did: [
            'Learned the complete internal booking and service management system in a very short time.',
            'Registered guest add-ons and extra services from phone and in-office requests and assigned tasks directly to service staff.',
            'Monitored house status after check-out and released properties for cleaning teams based on readiness.',
            'Supported guest check-in and check-out and handled daily front-office tasks.',
            'Handled practical office support tasks such as retrieving extras from storage and assisting with laundry-related logistics.',
            'Delivered customer support via phone and email in German, English, and Danish.'
        ],
        learned: [
            'Rapid onboarding into operational booking workflows and service coordination.',
            'Prioritizing tasks during high season while keeping guest communication clear and professional.',
            'Using multilingual communication effectively in real-time support situations.'
        ],
        liked: [
            'Helping guests quickly with practical requests that improved their stay.',
            'Working closely with service teams to keep operations flowing smoothly.',
            'The dynamic pace of tourism and daily guest-facing collaboration.'
        ],
        growth: [
            'Operational coordination skills across booking, service, and cleaning workflows.',
            'Stronger customer support communication across three languages.',
            'Confidence in handling parallel tasks under time pressure.'
        ],
        tags: ['Tourism', 'Customer Service', 'Booking System', 'Operations', 'Coordination', 'Multilingual Support', 'Office Tools'],
        durationMonths: 3
    },
    {
        id: '3',
        role: 'Service Assistant',
        organization: 'Ådum Børneunivers',
        type: 'Work',
        location: 'Denmark',
        from: 'Oct 2023',
        to: 'Apr 2024',
        summary: 'Maintained daily cleaning and operational readiness across three educational buildings: school area, SFO, and kindergarten.',
        did: [
            'Cleaned and prepared three buildings daily: school section, SFO, and kindergarten.',
            'Created a structured daily workflow to complete all assigned areas efficiently and with consistent quality.',
            'Prioritized tasks by hygiene needs, room usage, and time windows to keep operations running smoothly.',
            'Performed quality checks to ensure spaces were clean, safe, and ready for children and staff.',
            'Handled additional practical support tasks and maintained a reliable routine under time pressure.'
        ],
        learned: [
            'Developed strong planning habits for repetitive but high-responsibility operational work.',
            'Learned to optimize cleaning routes and sequencing for better time efficiency.',
            'Improved awareness of hygiene standards and consistency in child-focused environments.'
        ],
        liked: [
            'Building clear routines and seeing immediate, visible results each day.',
            'Contributing to a clean and safe environment for children and educators.',
            'Working independently while still supporting the wider team.'
        ],
        growth: [
            'Increased reliability, self-management, and accountability in daily execution.',
            'Stronger process thinking and task structuring under fixed deadlines.',
            'Greater confidence in delivering thorough, high-quality work consistently.'
        ],
        tags: ['Service', 'Cleaning', 'Operations', 'Quality', 'Time Management'],
        durationMonths: 7
    },
    {
        id: '4',
        role: 'Service Assistant',
        organization: 'Esmark A/S',
        type: 'Work',
        location: 'Hvide Sande, Denmark',
        from: 'Jul 2020',
        to: 'Oct 2023',
        summary: 'Worked in a structured cleaning and quality-control team for holiday homes, ensuring high standards for guests and property owners.',
        did: [
            'Worked closely in a two-person team and followed a clear task split for efficient daily execution.',
            'Cleaned and quality-checked holiday homes before guest arrivals using a structured step-by-step workflow.',
            'Applied a two-step control process where each team member reviewed the other to minimize missed details.',
            'Handled on-site guest questions in a friendly and service-oriented way when needed.',
            'Supported communication with property owners regarding house readiness and quality expectations.',
            'Maintained strong delivery quality even during high-pressure days with tight turnaround times.'
        ],
        learned: [
            'How structured teamwork and clearly defined roles improve both speed and quality.',
            'Practical quality-assurance routines for operational hospitality work.',
            'Balancing guest service, owner expectations, and time-critical execution in peak periods.'
        ],
        liked: [
            'Strong team collaboration with shared responsibility and trust.',
            'Creating positive guest experiences through reliable, detail-focused preparation.',
            'Seeing measurable service impact through frequent top guest ratings.'
        ],
        growth: [
            'Higher reliability and accountability in daily operational delivery.',
            'Improved stress management and decision-making under time pressure.',
            'Sharper eye for detail and consistency in quality-focused environments.'
        ],
        tags: ['Tourism', 'Hospitality', 'Cleaning', 'Quality Control', 'Teamwork', 'Guest Service', 'Operations'],
        durationMonths: 40
    },
    {
        id: '5',
        role: 'Junior Web Developer',
        organization: 'Movamo GmbH',
        type: 'Work',
        location: 'Germany',
        from: 'Jun 2019',
        to: 'Dec 2019',
        summary: 'Worked on mobile and web product development with a strong focus on React Native implementation, UI improvements, and release preparation.',
        did: [
            'Worked with React Native for the first time in a real product environment and implemented new app features.',
            'Fixed bugs and improved usability in existing mobile and frontend components.',
            'Designed and refined UI flows using Figma, Adobe XD, and Sketch in collaboration with designers.',
            'Supported app build and release workflows using Android Studio and Xcode.',
            'Contributed to day-to-day development with Git-based collaboration and code updates.'
        ],
        learned: [
            'Practical React Native development patterns and component-based mobile architecture.',
            'How mobile app build, testing, and publishing workflows work across Android and iOS.',
            'Using Git effectively in collaborative product development.'
        ],
        liked: [
            'Building user-facing features and seeing immediate improvements in the app experience.',
            'Combining development and design tools to create cleaner, more intuitive interfaces.',
            'Working in a fast-moving team with real delivery deadlines.'
        ],
        growth: [
            'Strong foundation in mobile-oriented frontend development and debugging.',
            'Improved confidence with release-oriented tooling such as Android Studio and Xcode.',
            'Better cross-functional collaboration between development and UI design.'
        ],
        tags: ['React Native', 'JavaScript', 'Frontend', 'UI Design', 'Figma', 'Adobe XD', 'Sketch', 'Git', 'Android Studio', 'Xcode'],
        durationMonths: 7
    },
    {
        id: '6',
        role: 'Web Development Internship',
        organization: 'Radio Vest / Euronics Tarm',
        type: 'Internship',
        location: 'Tarm, Denmark',
        from: 'Aug 2018',
        to: 'Oct 2018',
        summary: 'Led a practical rebranding-focused web project, redesigning and modernizing the company’s online presence to match the updated visual identity.',
        did: [
            'Took ownership of the website redesign and adapted the complete web presence to the company’s new brand identity.',
            'Implemented a dynamic content approach based on text-based data structures as an alternative to SQL due to hosting limitations.',
            'Programmed the full website using PHP with an object-oriented approach to improve maintainability and development routine.',
            'Applied JavaScript and jQuery to build interactive behavior and improve user experience.',
            'Integrated external APIs into the site and improved security-related implementation aspects during development.',
            'Delivered a production-ready result that was adopted by the company and continued to receive follow-up improvement requests after the internship.'
        ],
        learned: [
            'How to run a complete redesign project from planning and architecture decisions to delivery.',
            'Practical alternatives to classic database setups and dynamic rendering with constrained infrastructure.',
            'Stronger object-oriented PHP development, API integration skills, and web security awareness.',
            'Improved development discipline through real client expectations, deadlines, and iterative improvements.'
        ],
        liked: [
            'Owning a full project with visible business impact and long-term use.',
            'Combining technical execution with branding and digital identity alignment.',
            'Receiving direct feedback and seeing the company continue using and extending the delivered work.'
        ],
        growth: [
            'Major confidence boost in independently delivering end-to-end web projects.',
            'Broader technical range in PHP, JavaScript/jQuery, API integration, and secure implementation.',
            'Professional maturity from achieving top grade for internship performance and project quality.'
        ],
        tags: ['Web Development', 'Rebranding', 'PHP', 'OOP', 'JavaScript', 'jQuery', 'API Integration', 'Security', 'Dynamic Content', 'Internship Top Grade'],
        durationMonths: 3
    },
    {
        id: '7',
        role: 'Professional Bachelor in Web Development',
        organization: 'Erhvervsakademi Sydvest',
        type: 'Education',
        location: 'Esbjerg, Denmark',
        from: 'Aug 2017',
        to: 'Feb 2019',
        summary: 'Professional Bachelor studies focused on full app lifecycle delivery, including UX/UI design, mobile development, backend APIs, gamification, and emerging technologies.',
        did: [
            'Developed multiple mobile app projects with Ionic and Angular as part of practical coursework.',
            'Built a playable mobile labyrinth game in Unreal Engine with up to 10 levels for the Games for Mobile subject.',
            'Designed and developed a final mobile app project for scanning book barcodes and storing titles in a personal in-app library.',
            'Implemented complete item management features in the final app, including add, edit, remove, and read-status tracking.',
            'Designed and coded a full backend API for the final project and protected it with a dedicated security layer.',
            'Built and tested an Augmented Reality project that displayed product information in a supermarket context after scanning product visuals.',
            'Worked through complete product workflows from planning and prototyping to implementation and delivery.'
        ],
        learned: [
            'Mobile development patterns with Ionic/Angular and practical delivery in project-based teams.',
            'UX/UI methodology including low-fidelity and high-fidelity prototyping, usability, and gamification principles.',
            'API architecture, secure integration, and alternative data-handling strategies when traditional SQL hosting was not available.',
            'Version control and collaborative workflows with Git across iterative project work.',
            'Object-oriented thinking and structured implementation across frontend and backend layers.'
        ],
        liked: [
            'Transforming ideas into complete, playable, and testable application experiences.',
            'Combining creativity, UX thinking, and engineering in one end-to-end workflow.',
            'Working hands-on with new technologies such as AR and game-related mobile interaction.'
        ],
        growth: [
            'Strong full-stack app development foundation across frontend, backend, API, and security.',
            'Increased confidence in turning complex requirements into structured, deliverable solutions.',
            'Broader product mindset from concept and information architecture to implementation and quality validation.'
        ],
        tags: ['Ionic', 'Angular', 'Mobile Development', 'Unreal Engine', 'Game Development', 'Barcode Scanning', 'APIs', 'Security', 'UX/UI', 'Low-Fi', 'High-Fi', 'Gamification', 'Augmented Reality', 'Git'],
        durationMonths: 19
    },
    {
        id: '8',
        role: 'Multimedia Design Internship',
        organization: 'Radio Vest / Euronics Tarm',
        type: 'Internship',
        location: 'Tarm, Denmark',
        from: 'Jan 2017',
        to: 'Mar 2017',
        summary: 'Multimedia design internship focused on renewing and modernizing the company website while delivering branded visual materials for daily business use.',
        did: [
            'Created multiple design assets such as vouchers, small price tags, and supporting visual materials for company communication.',
            'Led the practical redesign and modernization of the website as the central focus of the internship.',
            'Developed design proposals step by step and refined them continuously through review and feedback sessions.',
            'Adapted all design and layout decisions to the predefined Euronics brand constraints, including color palette, logo, typography, and approved imagery.',
            'Worked on responsive behavior so the website performed consistently across different device sizes.',
            'Presented and aligned website design proposals with relevant Euronics stakeholders and incorporated feedback into implementation.'
        ],
        learned: [
            'How to work within strict brand guidelines while still improving visual quality and usability.',
            'Practical iteration workflows from concept to implementation with continuous stakeholder feedback.',
            'Real-world web redesign execution with focus on responsive design and production-ready delivery.'
        ],
        liked: [
            'Turning visual ideas into concrete deliverables with immediate company impact.',
            'Combining creative design work with technical implementation and testing.',
            'Receiving very positive feedback for website quality and user-facing improvements.'
        ],
        growth: [
            'Stronger confidence in end-to-end web design delivery under real business constraints.',
            'Improved communication and collaboration through frequent feedback cycles with decision-makers.',
            'Higher professional maturity in balancing branding, usability, and technical feasibility.'
        ],
        tags: ['Design', 'Web Redesign', 'Brand Guidelines', 'Responsive Design', 'Media Production', 'Stakeholder Collaboration', 'Internship'],
        durationMonths: 3
    },
    {
        id: '9',
        role: 'AP Degree in Multimedia Design',
        organization: 'Erhvervsakademi Midtvest',
        type: 'Education',
        location: 'Herning, Denmark',
        from: 'Aug 2015',
        to: 'Jun 2017',
        summary: 'Applied multimedia degree focused on UX/UI, web programming, CMS development, and digital product creation from concept to implementation.',
        did: [
            'Learned and applied core web technologies including HTML, CSS, SASS, JavaScript, PHP, and MySQL in project-based assignments.',
            'Built and customized CMS-driven solutions, including development of a WordPress add-on during coursework.',
            'Designed digital interfaces and prototypes using user-centered UX methods and visual communication principles.',
            'Worked with development environments and practical deployment-oriented project workflows.',
            'Participated in projects covering mobile applications, AR/VR concepts, and interactive digital experiences.'
        ],
        learned: [
            'Full pipeline thinking from discovery and concept definition to design, development, testing, and refinement.',
            'User experience research methods, usability evaluation, and iterative improvement in digital products.',
            'Backend fundamentals with PHP and MySQL, plus practical integration of frontend and content systems.',
            'Cross-disciplinary collaboration between design, communication, and implementation tracks.'
        ],
        liked: [
            'Combining design creativity with coding to produce complete, usable digital products.',
            'Exploring different disciplines such as web, mobile, AR/VR, and CMS-based development.',
            'Working on practical assignments that connected theory directly to real implementation.'
        ],
        growth: [
            'Solid technical and design foundation for later specialization in web and app development.',
            'Improved confidence in building structured digital solutions with both visual and technical quality.',
            'Stronger problem-solving approach through multidisciplinary project execution.'
        ],
        tags: ['UX', 'UI', 'Web Programming', 'HTML', 'CSS', 'SASS', 'JavaScript', 'PHP', 'MySQL', 'CMS', 'WordPress', 'AR/VR', 'Mobile Applications', 'Development Environments'],
        durationMonths: 23
    },
    {
        id: '10',
        role: 'AP Degree in Computer Science (incomplete)',
        organization: 'EAMV Herning',
        type: 'Education',
        location: 'Herning, Denmark',
        from: 'Aug 2013',
        to: 'Dec 2014',
        summary: 'Started the AP Degree in Computer Science twice and built a strong early programming foundation in Java and object-oriented development before later continuing into multimedia and web-focused education.',
        did: [
            'Completed two separate study starts in the Datamatiker program, first in 2013 and again in 2014.',
            'Worked with Java programming, object-oriented principles, and structured problem solving in academic programming exercises.',
            'Built early understanding of software logic, technical thinking, and foundational computer science concepts.',
            'Gained exposure to a more code-heavy study path that later helped shape the transition into digital product and web development.'
        ],
        learned: [
            'Core programming logic in Java and the fundamentals of object-oriented programming.',
            'How structured code design and technical abstraction support more complex problem solving.',
            'The importance of persistence and adaptability when education paths are interrupted by external and personal circumstances.'
        ],
        liked: [
            'The logical side of programming and working through technical challenges step by step.',
            'Learning how software is structured beyond surface-level interface design.',
            'Discovering a stronger long-term interest in digital and technical fields.'
        ],
        growth: [
            'An early technical coding foundation that later supported both web and app development.',
            'Greater resilience after restarting the same education path under different circumstances.',
            'A clearer understanding of personal direction within technology and digital product work.'
        ],
        tags: ['Java', 'Object-Oriented Programming', 'Computer Science', 'Programming Fundamentals', 'Problem Solving'],
        durationMonths: 12
    },
    {
        id: '11',
        role: 'Danish Language Education',
        organization: 'VUC Skjern',
        type: 'Education',
        location: 'Skjern, Denmark',
        from: 'Aug 2011',
        to: 'Jun 2013',
        summary: 'Completed intensive Danish language education focused on communication, integration, and building a strong foundation for further study and working life in Denmark.',
        did: [
            'Developed spoken and written Danish through structured language studies and daily communication practice.',
            'Worked with grammar, reading comprehension, written assignments, and verbal presentation in Danish.',
            'Practiced communication for both everyday situations and more formal educational or workplace-related contexts.',
            'Built the linguistic foundation needed to continue education and professional development in Denmark.'
        ],
        learned: [
            'How to communicate more confidently in Danish across both personal and professional situations.',
            'Cultural understanding and adaptation to Danish society, education, and workplace expectations.',
            'The discipline required to build fluency in a new language and use it as a basis for further studies.'
        ],
        liked: [
            'The challenge of learning a completely new language and seeing clear progress over time.',
            'Using Danish in real situations and becoming more independent in everyday life.',
            'Building a foundation that later made further education in Denmark possible.'
        ],
        growth: [
            'Strong confidence in Danish communication, both spoken and written.',
            'Greater adaptability and resilience during a major personal and cultural transition.',
            'A stronger educational foundation for later studies in technology and digital design.'
        ],
        tags: ['Language', 'Danish', 'Communication', 'Integration', 'Cultural Understanding', 'Education Foundation'],
        durationMonths: 23
    },
    {
        id: '12',
        role: 'Service Assistant',
        organization: 'Henne Mølle Å Badehotel',
        type: 'Work',
        location: 'Denmark',
        from: 'Summer 2009',
        to: 'Summer 2013',
        summary: 'Worked across three summer seasons in hospitality operations, supporting breakfast service, guest care, room turnover, and daily hotel readiness.',
        did: [
            'Managed breakfast service and ensured guests had everything they needed for a positive start to the day.',
            'Cleared tables, handled dishwashing, and kept service areas clean and ready throughout operating hours.',
            'Supported check-out processes and helped prepare rooms and shared areas after guest departure.',
            'Cleaned vacant rooms and replenished towels and practical necessities for incoming guests.',
            'Helped maintain smooth daily hotel operations in a busy seasonal hospitality environment.'
        ],
        learned: [
            'Customer-facing service in a fast-moving tourism environment with changing daily demands.',
            'How hospitality work depends on timing, detail, and consistent readiness across multiple tasks.',
            'Working effectively under pressure during busy summer periods with frequent guest turnover.'
        ],
        liked: [
            'Meeting guests and contributing directly to a welcoming holiday experience.',
            'The variety of combining service, practical work, and room preparation in one role.',
            'Being part of a hotel environment where visible effort immediately improved guest satisfaction.'
        ],
        growth: [
            'Stronger service mindset and understanding of guest expectations.',
            'Improved stamina, flexibility, and reliability in physically demanding work.',
            'Better communication and coordination in hospitality-focused teamwork.'
        ],
        tags: ['Hospitality', 'Tourism', 'Breakfast Service', 'Guest Care', 'Room Turnover', 'Cleaning', 'Seasonal Work'],
        durationMonths: 27
    },
    {
        id: '13',
        role: 'Service Assistant',
        organization: 'Feriepartner Bork Havn',
        type: 'Work',
        location: 'Bork Havn, Denmark',
        from: '2007',
        to: '2009',
        summary: 'Worked for two years across holiday home servicing, private cleaning tasks, and regular office support within a tourism-focused rental business.',
        did: [
            'Prepared holiday homes for guest arrivals and maintained readiness across practical service tasks.',
            'Worked with both private cleaning assignments and cleaning/service work connected to holiday rental properties.',
            'Helped in the office twice a week and supported day-to-day administrative or coordination-related tasks.',
            'Maintained quality, structure, and reliability across both physical and office-based responsibilities.'
        ],
        learned: [
            'A broad understanding of how holiday rental businesses combine service, logistics, property readiness, and office coordination.',
            'How to switch effectively between practical field work and structured office support.',
            'The importance of consistency and responsibility in guest-facing service businesses.'
        ],
        liked: [
            'The combination of hands-on work and office support in the same role.',
            'Contributing to guest readiness behind the scenes in a tourism-driven business.',
            'Being part of a coastal holiday environment with varied daily tasks.'
        ],
        growth: [
            'Greater independence and accountability across different types of tasks.',
            'Improved adaptability between operational service work and structured office routines.',
            'A stronger early foundation in hospitality-related work and practical responsibility.'
        ],
        tags: ['Tourism', 'Service', 'Holiday Homes', 'Cleaning', 'Office Support', 'Operations', 'Coordination'],
        durationMonths: 24
    },
    {
        id: '14',
        role: 'Commercial and IT-Oriented Education',
        organization: 'Schools and vocational colleges in Germany',
        type: 'Education',
        location: 'Marl, Coesfeld, and Muenster, Germany',
        from: '2002',
        to: '2007',
        summary: 'Built an early foundation in business, technology, and vocational education in Germany before moving to Denmark and continuing an international education path.',
        did: [
            'Completed secondary school and continued into vocational education with a focus on finding the right professional direction.',
            'Started chemistry-oriented assistant studies at Adolph-Kolping-Berufskolleg in Muenster, then changed direction after realizing it was not the right fit.',
            'Completed Higher Commercial School at Oswald-von-Nell-Breuning-Berufskolleg in Coesfeld from 2003 to 2005.',
            'Continued with ITA studies at Pictorius-Berufskolleg in Coesfeld from 2005 to 2007, focusing on information technology-related subjects before relocating to Denmark.'
        ],
        learned: [
            'How to evaluate study directions honestly and adjust course when a path does not align with long-term strengths.',
            'A combination of business-oriented thinking and early IT-related technical understanding.',
            'The value of flexibility and persistence during formative educational years and major life changes.'
        ],
        liked: [
            'Exploring both structured business topics and more technical IT-oriented learning.',
            'Building a broader foundation before later specializing in digital design and development.',
            'The gradual shift toward more technology-focused work and education.'
        ],
        growth: [
            'A broad early educational base that later supported transitions into design, development, and multilingual working environments.',
            'Greater self-awareness in choosing fields that better matched personal strengths and interests.',
            'An important foundation for the later move to Denmark and continued academic development.'
        ],
        tags: ['Business Education', 'IT Foundation', 'Vocational Education', 'Germany', 'Adaptability', 'Career Direction'],
        durationMonths: 60
    }
]