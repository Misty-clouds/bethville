export const CONSULTATION_URL =
  "https://calendly.com/elizabethakpoveta/bookkeeping-tax-consultations";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Lys2FX7rN/?mibextid=wwXIfr",
    icon: "/images/icons/facebook.png",
    iconSize: "large",
  },
  {
    // The original uses a dotted capital "Ì" here — kept verbatim in the footer.
    label: "Ìnstagram",
    menuLabel: "Instagram",
    href: "https://www.instagram.com/bethville_bookeeping_services?exln=MWplaWF2b2sxczdrbQ%3D%3D&utm_source=qr",
    icon: "/images/icons/instagram.png",
    iconSize: "small",
  },
] as const;

export const contactLinks = [
  {
    label: "bethvillebookkeepingservices@gmail.com",
    href: "mailto:bethvillebookkeepingservices@gmail.com",
    icon: "/images/icons/gmail.png",
    iconSize: "large",
  },
  {
    label: "+1 (860) 794-9026",
    href: "tel:+18607949026",
    icon: "/images/icons/phone.png",
    iconSize: "small",
  },
  {
    label: "+1 (508) 781-4985",
    href: "tel:+15087814985",
    icon: "/images/icons/phone.png",
    iconSize: "small",
  },
] as const;

export const businessAddress = "129 E Main St, Suite 4, Webster MA 01570";

export type ServiceTheme = 1 | 2 | 3 | 4 | 5 | 6;

export type Service = {
  title: string;
  description: string;
  features: [string, string, string];
  images: [{ src: string; alt: string }, { src: string; alt: string }];
  theme: ServiceTheme;
  /** Extra classes for the text column (the original pins card 2's column height on laptop+). */
  columnClassName?: string;
};

export const services: Service[] = [
  {
    title: "Monthly Bank & Credit Card Reconciliation",
    description:
      "Regularly reconcile your accounts to ensure accuracy, prevent errors, and detect potential fraud, keeping your financial records aligned and reliable.",
    features: ["Accurate", "Reliable", "Secure"],
    images: [
      { src: "/images/services/reconciliation-1.jpg", alt: "Financial reports and charts on a desk" },
      { src: "/images/services/reconciliation-2.jpg", alt: "Businessman reviewing charts on a tablet" },
    ],
    theme: 1,
  },
  {
    title: "Weekly Expense Tracking",
    description:
      "Monitor and categorize expenses every week for better budget management and cash flow insights, helping you make informed financial decisions.",
    features: ["Organized", "Insightful", "Efficient"],
    images: [
      { src: "/images/services/expense-1.jpg", alt: "Expense tracker notebook" },
      { src: "/images/services/expense-2.jpg", alt: "Calculator and pen on a bookkeeping notebook" },
    ],
    theme: 2,
    columnClassName: "lg:min-h-[519px]",
  },
  {
    title: "Financial Reporting (Monthly/Quarterly)",
    description:
      "Receive comprehensive monthly or quarterly financial reports that give you a clear view of your business’s health. With actionable insights, you’ll be empowered to make data-driven decisions and track growth over time.",
    features: ["Informative", "Clear", "Actionable"],
    images: [
      { src: "/images/services/reporting-1.jpg", alt: "Businessman presenting on a whiteboard" },
      { src: "/images/services/reporting-2.jpg", alt: "Financial dashboard on a laptop" },
    ],
    theme: 3,
  },
  {
    title: "Payroll Management",
    description:
      "Streamline your payroll with precise and compliant processing. From wage calculations to tax deductions, we handle all aspects, ensuring your payroll is accurate and timely, giving you peace of mind.",
    features: ["Accurate", "Compliant", "Reliable"],
    images: [
      { src: "/images/services/payroll-1.webp", alt: "Payroll documents" },
      { src: "/images/services/payroll-2.jpeg", alt: "Payroll calculation" },
    ],
    theme: 4,
  },
  {
    title: "Budgeting & Forecasting",
    description:
      "Anticipate future financial needs and control costs with data-driven budgeting and forecasting. We help you set realistic goals, plan ahead, and adjust budgets to meet your business objectives.",
    features: ["Predictive", "Strategic", "Insightful"],
    images: [
      { src: "/images/services/budgeting-1.jpg", alt: "Budget planning" },
      { src: "/images/services/budgeting-2.webp", alt: "Analytics dashboard on a laptop" },
    ],
    theme: 5,
  },
  {
    title: "Tax Preparation Support",
    description:
      "Prepare for tax season confidently with organized, compliant records that maximize deductions. We work with you and your CPA to ensure all records are ready, reducing stress and optimizing your tax outcome.",
    features: ["Detailed", "Compliant", "Efficient"],
    images: [
      { src: "/images/services/tax-1.jpg", alt: "Filling out a tax return form" },
      { src: "/images/services/tax-2.jpg", alt: "Organized document folders with tabs" },
    ],
    theme: 6,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  /** The fifth card on the original has no divider and a medium-weight name. */
  variant?: "plain";
  /** Cards 2–4 on the original pin the quote box to 200px (long quotes overflow it). */
  fixedQuoteHeight?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Elizabeth helped fix issues I had with IRS while I panicked about the situation, she calmly explained what the process would be and assured me that all was going to be fine and that was exactly what happened. She paid attention to details and listened to my concerns. I recommend her",
    name: "ISI",
  },
  {
    quote:
      "I use this accountant for my taxes. So patient and easy to work with. Highly recommended!",
    name: "Tayo",
    fixedQuoteHeight: true,
  },
  {
    quote:
      "Liz is responsive, and helped me right away when I needed assistance with my bookkeeping mess. She delivered exceptional service with professionalism. She out me at ease and stepped in to get my books straight. You are in good hands with Liz.",
    name: "Christiana W.",
    fixedQuoteHeight: true,
  },
  {
    quote:
      "have been using Elizabeth for a few years now, I own a small business and was really nervous about who will help with bookkeeping and everything accounting, Elizabeth was very patient the first day I met her. It's been very amazing ever since, she also does my personal tax and my business taxes. I highly recommend her",
    name: "Nanny Center.",
    fixedQuoteHeight: true,
  },
  {
    quote:
      "Elizabeth is very professional with her work. I have used her services over the last 4 years. Her attention to detail was noticeable from the get go. I felt part of the whole process. I will definitely be using her services in the future and will be recommending her to friends and family.",
    name: "Solelo 27",
    variant: "plain",
  },
  {
    quote:
      "I am so happy to have met Liz, she has not only helped me in my business but has helped me grow it as well. Thank you Liz! Highly Recommended!",
    name: "Samantha wall",
  },
];

export const aboutCopy = [
  "I’m Elizabeth O. Akpoveta, founder of Bethville Bookkeeping & Tax Services.",
  "With over 12 years of professional experience, I am passionate about helping individuals and business owners simplify their financial and administrative responsibilities.",
  "At Bethville, we provide personalized bookkeeping, tax preparation, payroll management, and HR support designed to help businesses stay organized, compliant, and positioned for growth.",
  "Our goal is simple: to take the stress out of managing your numbers and business operations so you can focus on what matters most - growing your business.",
  "Your Business. Your Goals. Our Priority.",
] as const;

export const stats = [
  { label: "Years experience", value: "12" },
  { label: "Projects completed", value: "68" },
  { label: "Industries served", value: "11" },
] as const;

export const faqs = [
  {
    question: "What services does Bethville offer?",
    answer:
      "We offer bookkeeping, tax preparation and amendments, payroll management, and HR administrative support for individuals and businesses.",
  },
  {
    question: "Can Bethville manage both my bookkeeping and payroll?",
    answer:
      "Yes. We can help manage your bookkeeping and payroll workflows, giving you more consistent financial records and reporting.",
  },
  {
    question: "Do you prepare individual and business tax returns?",
    answer:
      "Yes. We assist with individual and business tax preparation, amended returns, and responses to IRS and state tax notices.",
  },
  {
    question: "What HR services do you provide?",
    answer:
      "Our HR administrative services include employee onboarding and offboarding, PTO tracking, employee records, and payroll-related coordination.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on your business size, transaction volume, employee count, and the services required. Schedule a free consultation for a customized quote.",
  },
  {
    question: "Do you work with businesses outside Massachusetts?",
    answer:
      "Many of our services can be provided remotely. Availability depends on your location, business needs, and applicable requirements.",
  },
  {
    question: "Is my financial and employee information secure?",
    answer:
      "We take confidentiality seriously and use appropriate access controls and secure systems when handling sensitive financial and employee information.",
  },
] as const;
