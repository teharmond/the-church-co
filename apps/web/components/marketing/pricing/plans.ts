type Feature = string | { name: string; tooltip?: string };

interface Plan {
  name: string;
  price_per_month: number;
  price_per_month_annual_billing: number;
  billing: string;
  most_popular?: boolean;
  features: Feature[];
  everything_text?: string;
}

export const plans: Plan[] = [
  {
    name: "Basic",
    price_per_month: 34,
    price_per_month_annual_billing: 29,
    billing: "annually",
    features: [
      "Free Hosting Included",
      "Unlimited Pages, Blogs & Storage",
      {
        name: "Sermon & Media Library",
        tooltip: "Upload and organize sermons, videos, and audio files",
      },
      {
        name: "Events Manager",
        tooltip: "Create and manage church events with calendar integration",
      },
      "Instant Redesign",
      "Make Your Own Updates",
      {
        name: "Secure Online Giving",
        tooltip: "Accept donations with secure payment processing",
      },
      "Forms System",
      "Built in SEO",
    ],
  },
  {
    name: "Premium",
    price_per_month: 57,
    price_per_month_annual_billing: 49,
    billing: "annually",
    most_popular: true,
    everything_text: "Everything in Basic, plus:",
    features: [
      {
        name: "Church Online",
        tooltip: "Host online services and digital gatherings",
      },
      {
        name: "Livestream Interface",
        tooltip: "Stream services live to your congregation",
      },
      {
        name: "Members Portal",
        tooltip: "Private area for member resources and content",
      },
      {
        name: "Digital Prayer Wall",
        tooltip: "Share and receive prayer requests online",
      },
      {
        name: "Small Groups",
        tooltip: "Manage and organize small group ministries",
      },
      "Sermon Notes",
      "Live Chat Rooms",
      {
        name: "Planning Center Integration",
        tooltip: "Sync with Planning Center services",
      },
      {
        name: "PushPay Integration",
        tooltip: "Connect with PushPay giving platform",
      },
      "People & Members",
    ],
  },
  {
    name: "Ultimate",
    price_per_month: 232,
    price_per_month_annual_billing: 199,
    billing: "annually",
    everything_text: "Everything in Premium, plus:",
    features: [
      {
        name: "Custom Mobile App",
        tooltip: "Branded iOS and Android apps for your church",
      },
      {
        name: "Web Design Team",
        tooltip: "Dedicated design team for your website",
      },
      {
        name: "Content Management Team",
        tooltip: "Team to help manage and update your content",
      },
      "Web Strategist",
      "App Strategist",
      "Unlimited Revisions",
      "Unlimited Design Requests",
      {
        name: "Website Assistant",
        tooltip: "Dedicated support for website management",
      },
      {
        name: "Sermon Upload Assistant",
        tooltip: "Help with sermon upload and organization",
      },
      "Team to manage your website and app",
      {
        name: "AI Sermon Transcription",
        tooltip: "Automatic transcription of sermon audio to text",
      },
    ],
  },
];
