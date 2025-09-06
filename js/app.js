const $ = document;
const offersContainer = $.querySelector('.job-listings');
const resultsCount = $.getElementById('resultsCount');
const salaryMin = $.getElementById('salaryMin');
const salaryMax = $.getElementById('salaryMax');
const jobTypeFilters = $.querySelectorAll('#fullTime, #partTime, #contract, #freelance');
const workLocationFilters = $.querySelectorAll('input[name="remote"]');
const experienceFilters = $.querySelectorAll('#entry, #mid, #senior, #executive');
const cityFilter = $.getElementById('cityFilter');
const companySizeFilters = $.querySelectorAll('#startup, #small, #medium, #large');
const clearFilters = $.getElementById('clearFilters');
const searchInput = $.getElementById('searchInput');
const searchBtn = $.getElementById('searchBtn');
const sortBy = $.getElementById('sortBy');


const jobsData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        city: "san-francisco",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "senior",
        salaryMin: 90000,
        salaryMax: 120000,
        companySize: "201-1000",
        description: "We are seeking a talented Senior Frontend Developer to join our growing engineering team. You'll be responsible for building responsive, user-friendly web applications using modern JavaScript frameworks.",
        tags: ["React", "TypeScript", "CSS3", "JavaScript"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 2,
        title: "Data Scientist",
        company: "DataAnalytics Pro",
        location: "New York, NY",
        city: "new-york",
        jobType: "full-time",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 85000,
        salaryMax: 110000,
        companySize: "51-200",
        description: "Join our data science team to analyze complex datasets and build predictive models that drive business decisions. Experience with Python and machine learning required.",
        tags: ["Python", "Machine Learning", "SQL", "Pandas"],
        postedDaysAgo: 1,
        isRemoteFriendly: true
    },
    {
        id: 3,
        title: "Product Manager",
        company: "InnovateTech",
        location: "Los Angeles, CA",
        city: "los-angeles",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 100000,
        salaryMax: 140000,
        companySize: "1000+",
        description: "Lead product strategy and roadmap for our flagship mobile application. Collaborate with engineering, design, and marketing teams to deliver exceptional user experiences.",
        tags: ["Product Strategy", "Agile", "Mobile Apps", "Analytics"],
        postedDaysAgo: 3,
        isRemoteFriendly: false
    },
    {
        id: 4,
        title: "Junior Web Developer",
        company: "StartupXYZ",
        location: "Austin, TX",
        city: "austin",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "entry",
        salaryMin: 55000,
        salaryMax: 70000,
        companySize: "1-50",
        description: "Perfect opportunity for a recent graduate or career changer to start their web development journey. Work with modern technologies in a supportive environment.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js"],
        postedDaysAgo: 1,
        isRemoteFriendly: true
    },
    {
        id: 5,
        title: "UX Designer",
        company: "DesignStudio Co.",
        location: "Chicago, IL",
        city: "chicago",
        jobType: "contract",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 70000,
        salaryMax: 90000,
        companySize: "51-200",
        description: "Create intuitive user experiences for web and mobile applications. Conduct user research, create wireframes, and collaborate with development teams.",
        tags: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
        postedDaysAgo: 4,
        isRemoteFriendly: true
    },
    {
        id: 6,
        title: "DevOps Engineer",
        company: "CloudSystems Ltd.",
        location: "Seattle, WA",
        city: "seattle",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "senior",
        salaryMin: 95000,
        salaryMax: 130000,
        companySize: "201-1000",
        description: "Manage cloud infrastructure and deployment pipelines. Experience with AWS, Docker, and Kubernetes required.",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 7,
        title: "Marketing Coordinator",
        company: "BrandBoost Agency",
        location: "Miami, FL",
        city: "miami",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "entry",
        salaryMin: 40000,
        salaryMax: 55000,
        companySize: "51-200",
        description: "Support marketing campaigns across digital channels. Create content, manage social media, and analyze campaign performance.",
        tags: ["Social Media", "Content Creation", "Google Analytics", "SEO"],
        postedDaysAgo: 5,
        isRemoteFriendly: false
    },
    {
        id: 8,
        title: "Full Stack Developer",
        company: "WebSolutions Inc.",
        location: "Denver, CO",
        city: "denver",
        jobType: "full-time",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 75000,
        salaryMax: 95000,
        companySize: "201-1000",
        description: "Build end-to-end web applications using modern frameworks. Work with both frontend and backend technologies in an agile environment.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        postedDaysAgo: 3,
        isRemoteFriendly: true
    },
    {
        id: 9,
        title: "Sales Representative",
        company: "SalesForce Pro",
        location: "Phoenix, AZ",
        city: "phoenix",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "entry",
        salaryMin: 45000,
        salaryMax: 65000,
        companySize: "1000+",
        description: "Drive revenue growth by identifying and closing new business opportunities. Build relationships with potential clients and manage sales pipeline.",
        tags: ["B2B Sales", "CRM", "Cold Calling", "Lead Generation"],
        postedDaysAgo: 1,
        isRemoteFriendly: false
    },
    {
        id: 10,
        title: "Cybersecurity Analyst",
        company: "SecureNet Systems",
        location: "Washington, DC",
        city: "washington",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "mid",
        salaryMin: 80000,
        salaryMax: 105000,
        companySize: "201-1000",
        description: "Monitor and protect organizational networks from cyber threats. Implement security measures and respond to incidents.",
        tags: ["Network Security", "SIEM", "Incident Response", "Python"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 11,
        title: "Graphic Designer",
        company: "Creative Studios",
        location: "Portland, OR",
        city: "portland",
        jobType: "part-time",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 35000,
        salaryMax: 45000,
        companySize: "1-50",
        description: "Create visual content for digital and print media. Work on branding projects, marketing materials, and web graphics.",
        tags: ["Adobe Photoshop", "Illustrator", "InDesign", "Branding"],
        postedDaysAgo: 6,
        isRemoteFriendly: true
    },
    {
        id: 12,
        title: "Project Manager",
        company: "BuildRight Construction",
        location: "Houston, TX",
        city: "houston",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 85000,
        salaryMax: 115000,
        companySize: "201-1000",
        description: "Oversee construction projects from planning to completion. Coordinate with teams, manage budgets, and ensure quality standards.",
        tags: ["Project Management", "Construction", "Budget Management", "Team Leadership"],
        postedDaysAgo: 4,
        isRemoteFriendly: false
    },
    {
        id: 13,
        title: "Mobile App Developer",
        company: "AppCrafters",
        location: "San Diego, CA",
        city: "san-diego",
        jobType: "contract",
        workLocation: "remote",
        experienceLevel: "senior",
        salaryMin: 90000,
        salaryMax: 120000,
        companySize: "51-200",
        description: "Develop native mobile applications for iOS and Android platforms. Work with cross-functional teams to deliver high-quality mobile experiences.",
        tags: ["Swift", "Kotlin", "React Native", "Mobile UI"],
        postedDaysAgo: 1,
        isRemoteFriendly: true
    },
    {
        id: 14,
        title: "Content Writer",
        company: "ContentCorp",
        location: "Nashville, TN",
        city: "nashville",
        jobType: "freelance",
        workLocation: "remote",
        experienceLevel: "entry",
        salaryMin: 30000,
        salaryMax: 45000,
        companySize: "1-50",
        description: "Create engaging content for blogs, websites, and marketing materials. Research topics and write SEO-optimized articles.",
        tags: ["Content Writing", "SEO", "Blog Writing", "Research"],
        postedDaysAgo: 3,
        isRemoteFriendly: true
    },
    {
        id: 15,
        title: "Business Analyst",
        company: "Analytics Corp",
        location: "Boston, MA",
        city: "boston",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "mid",
        salaryMin: 70000,
        salaryMax: 90000,
        companySize: "1000+",
        description: "Analyze business processes and requirements to identify improvement opportunities. Create documentation and work with stakeholders.",
        tags: ["Business Analysis", "Process Improvement", "SQL", "Documentation"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 16,
        title: "Software Engineer",
        company: "TechGiant",
        location: "San Jose, CA",
        city: "san-jose",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 110000,
        salaryMax: 150000,
        companySize: "1000+",
        description: "Design and develop scalable software solutions. Work on high-impact projects that serve millions of users worldwide.",
        tags: ["Java", "Spring", "Microservices", "System Design"],
        postedDaysAgo: 1,
        isRemoteFriendly: false
    },
    {
        id: 17,
        title: "HR Coordinator",
        company: "PeopleFirst HR",
        location: "Atlanta, GA",
        city: "atlanta",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "entry",
        salaryMin: 42000,
        salaryMax: 55000,
        companySize: "51-200",
        description: "Support HR operations including recruitment, onboarding, and employee relations. Maintain HR records and assist with policy implementation.",
        tags: ["Recruitment", "Employee Relations", "HRIS", "Policy Management"],
        postedDaysAgo: 5,
        isRemoteFriendly: false
    },
    {
        id: 18,
        title: "Cloud Architect",
        company: "CloudFirst Solutions",
        location: "Dallas, TX",
        city: "dallas",
        jobType: "full-time",
        workLocation: "remote",
        experienceLevel: "executive",
        salaryMin: 130000,
        salaryMax: 180000,
        companySize: "201-1000",
        description: "Design and implement enterprise cloud solutions. Lead cloud migration projects and establish best practices for cloud architecture.",
        tags: ["AWS", "Azure", "Cloud Architecture", "Enterprise Solutions"],
        postedDaysAgo: 3,
        isRemoteFriendly: true
    },
    {
        id: 19,
        title: "QA Engineer",
        company: "QualityFirst Tech",
        location: "Minneapolis, MN",
        city: "minneapolis",
        jobType: "full-time",
        workLocation: "hybrid",
        experienceLevel: "mid",
        salaryMin: 65000,
        salaryMax: 85000,
        companySize: "201-1000",
        description: "Ensure software quality through manual and automated testing. Create test plans and work closely with development teams.",
        tags: ["Test Automation", "Selenium", "API Testing", "Quality Assurance"],
        postedDaysAgo: 4,
        isRemoteFriendly: true
    },
    {
        id: 20,
        title: "Digital Marketing Specialist",
        company: "GrowthHackers",
        location: "San Francisco, CA",
        city: "san-francisco",
        jobType: "part-time",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 45000,
        salaryMax: 60000,
        companySize: "1-50",
        description: "Drive digital marketing campaigns across multiple channels. Optimize campaigns for performance and ROI.",
        tags: ["Google Ads", "Facebook Ads", "Email Marketing", "Analytics"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 21,
        title: "Database Administrator",
        company: "DataSafe Systems",
        location: "Philadelphia, PA",
        city: "philadelphia",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 85000,
        salaryMax: 110000,
        companySize: "201-1000",
        description: "Manage and maintain database systems. Ensure data security, performance optimization, and backup procedures.",
        tags: ["SQL Server", "Oracle", "Database Security", "Performance Tuning"],
        postedDaysAgo: 1,
        isRemoteFriendly: false
    },
    {
        id: 22,
        title: "UI/UX Designer",
        company: "DesignMasters",
        location: "Los Angeles, CA",
        city: "los-angeles",
        jobType: "contract",
        workLocation: "hybrid",
        experienceLevel: "senior",
        salaryMin: 80000,
        salaryMax: 105000,
        companySize: "51-200",
        description: "Design beautiful and functional user interfaces. Conduct user research and create design systems for web and mobile applications.",
        tags: ["Figma", "Sketch", "User Research", "Design Systems"],
        postedDaysAgo: 3,
        isRemoteFriendly: true
    },
    {
        id: 23,
        title: "Customer Success Manager",
        company: "ClientCare Pro",
        location: "Chicago, IL",
        city: "chicago",
        jobType: "full-time",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 60000,
        salaryMax: 80000,
        companySize: "201-1000",
        description: "Build relationships with clients to ensure their success with our platform. Provide support, training, and strategic guidance.",
        tags: ["Customer Success", "Account Management", "SaaS", "Communication"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 24,
        title: "Backend Developer",
        company: "ServerSide Solutions",
        location: "Seattle, WA",
        city: "seattle",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "mid",
        salaryMin: 80000,
        salaryMax: 100000,
        companySize: "51-200",
        description: "Build robust backend systems and APIs. Work with databases, implement business logic, and ensure system scalability.",
        tags: ["Python", "Django", "PostgreSQL", "REST APIs"],
        postedDaysAgo: 1,
        isRemoteFriendly: false
    },
    {
        id: 25,
        title: "Finance Manager",
        company: "FinanceFirst Corp",
        location: "New York, NY",
        city: "new-york",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "executive",
        salaryMin: 90000,
        salaryMax: 120000,
        companySize: "1000+",
        description: "Oversee financial operations and reporting. Manage budgets, forecasts, and financial analysis for strategic decision making.",
        tags: ["Financial Analysis", "Budgeting", "Forecasting", "Excel"],
        postedDaysAgo: 4,
        isRemoteFriendly: false
    },
    {
        id: 26,
        title: "Machine Learning Engineer",
        company: "AI Innovations",
        location: "San Francisco, CA",
        city: "san-francisco",
        jobType: "full-time",
        workLocation: "remote",
        experienceLevel: "senior",
        salaryMin: 120000,
        salaryMax: 160000,
        companySize: "201-1000",
        description: "Build and deploy machine learning models at scale. Work with large datasets and implement MLOps practices.",
        tags: ["Python", "TensorFlow", "MLOps", "Data Engineering"],
        postedDaysAgo: 1,
        isRemoteFriendly: true
    },
    {
        id: 27,
        title: "Operations Manager",
        company: "LogisticsPro",
        location: "Denver, CO",
        city: "denver",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 75000,
        salaryMax: 95000,
        companySize: "201-1000",
        description: "Oversee daily operations and optimize business processes. Lead teams and implement efficiency improvements.",
        tags: ["Operations Management", "Process Optimization", "Team Leadership", "Supply Chain"],
        postedDaysAgo: 6,
        isRemoteFriendly: false
    },
    {
        id: 28,
        title: "Technical Writer",
        company: "DocuTech",
        location: "Austin, TX",
        city: "austin",
        jobType: "contract",
        workLocation: "remote",
        experienceLevel: "mid",
        salaryMin: 55000,
        salaryMax: 70000,
        companySize: "1-50",
        description: "Create clear and comprehensive technical documentation. Work with engineering teams to document APIs, user guides, and system architecture.",
        tags: ["Technical Writing", "API Documentation", "Markdown", "Git"],
        postedDaysAgo: 3,
        isRemoteFriendly: true
    },
    {
        id: 29,
        title: "Social Media Manager",
        company: "SocialBuzz Agency",
        location: "Miami, FL",
        city: "miami",
        jobType: "part-time",
        workLocation: "hybrid",
        experienceLevel: "entry",
        salaryMin: 35000,
        salaryMax: 50000,
        companySize: "51-200",
        description: "Manage social media presence across platforms. Create content, engage with followers, and analyze social media metrics.",
        tags: ["Social Media", "Content Creation", "Instagram", "Analytics"],
        postedDaysAgo: 2,
        isRemoteFriendly: true
    },
    {
        id: 30,
        title: "Network Engineer",
        company: "NetSecure Systems",
        location: "Phoenix, AZ",
        city: "phoenix",
        jobType: "full-time",
        workLocation: "onsite",
        experienceLevel: "senior",
        salaryMin: 85000,
        salaryMax: 110000,
        companySize: "201-1000",
        description: "Design and maintain network infrastructure. Troubleshoot network issues and implement security protocols.",
        tags: ["Cisco", "Network Security", "TCP/IP", "Troubleshooting"],
        postedDaysAgo: 4,
        isRemoteFriendly: false
    }
];

// Render jobs function
function renderJobs(jobs) {
    offersContainer.innerHTML = ''; 

    resultsCount.textContent = `${jobs.length} job${jobs.length !== 1 ? 's' : ''} found`;

    if (jobs.length === 0) {
        offersContainer.innerHTML = `<p class="no-results">No jobs found matching your filters.</p>`;
        return;
    }

    jobs.forEach(job => {

        const {
            title,
            company,
            location,
            jobType,
            description,
            tags,
            salaryMin,
            salaryMax,
            postedDaysAgo,
            companySize,
            isRemoteFriendly
        } = job;

        offersContainer.insertAdjacentHTML(
            'beforeend',
            `
                <div class="job-card">
                    <div class="job-header">
                        <div>
                            <a href="#" class="job-title">${title}</a>
                            <div class="company-name">${company}</div>
                        </div>
                        <button class="apply-btn">Apply Now</button>
                    </div>
                    <div class="job-meta">
                        <div class="meta-item icon-location">${location}</div>
                        <div class="meta-item icon-type">${jobType}</div>
                        <div class="meta-item icon-clock">${postedDaysAgo} day${postedDaysAgo !== 1 ? 's' : ''} ago</div>
                        <div class="meta-item icon-building">${companySize} employees</div>
                    </div>
                    <div class="job-description">
                        ${description}
                    </div>
                    <div class="job-tags">
                        ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        ${isRemoteFriendly ? '<span class="tag remote">Remote Friendly</span>' : ''}
                    </div>
                    <div class="job-footer">
                        <div class="salary">$${salaryMin.toLocaleString()} - $${salaryMax.toLocaleString()}</div>
                        <div class="posted-time">Posted ${postedDaysAgo} day${postedDaysAgo !== 1 ? 's' : ''} ago</div>
                    </div>
                </div>
            `
        );
    });
}
