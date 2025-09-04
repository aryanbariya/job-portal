import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus,
} from 'lucide-react'

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",

    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intutive builder and template designf by experts.",

    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description: "Connect with employers directly through our messaging system for quick responses.",

    },
    {
        icon: Award,
        title: "Skill Assessments",
        description: "Showcase your abilities with verified skill tests and earn badges that employers trust",

    },
];


export const employerFeatures = [
    {
        icon: Users,
        title: "Talent pool Access",
        description: "Access a diverse pool of qualified candidates actively seeking job opportunities.",

    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: " Track your job postings performance with detailed analytics and insights.",

    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "Ensure the authenticity of candidates with our verification process, reducing hiring risks.",

    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description: "Streamline your hiring process with our easy-to-use platform and quick candidate matching.",

    },
];


//Navigation items configuration
export const NAVIGATION_MENU = [
    { id: 'employer-dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'post-job', name: 'Post a Job', icon: Plus },
    { id: 'manage-jobs', name: 'Manage Jobs', icon: Briefcase },
    { id: 'company-profile', name: 'Company Profile', icon: Building2 },
];




//Categories and job types for filtering jobs
export const CATEGORIES = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Design', label: 'Design' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Sales', label: 'Sales' },
    { value: 'IT & Software', label: 'IT & Software' },
    { value: 'Product', label: 'Product' },
    { value: 'Customer Support', label: 'Customer Support' },
    { value: 'Finance', label: 'Finance' },
    { value: 'HR', label: 'Human Resources' },
    { value: 'Operations', label: 'Operations' },
    { value: 'Other', label: 'Other' },
];



export const JOB_TYPES = [
    { value: 'Full-Time', label: 'Full-Time' },
    { value: 'Part-Time', label: 'Part-Time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Internship', label: 'Internship' },
    { value: 'Remote', label: 'Remote' },
];


export const SALARY_RANGES = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000",    
];