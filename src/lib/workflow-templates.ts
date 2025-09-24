

export interface TemplateStep {
    name: string;
    description: string;
}

export interface Template {
  category: 'Finance' | 'Human Resources' | 'Sales' | 'Marketing' | 'Real Estate' | 'IT Operations' | 'Procurement' | 'Development' | 'Healthcare' | 'Admin and Ops' | 'CS and Support';
  name: string;
  slug: string;
  description: string;
  purpose?: string;
  steps?: TemplateStep[];
}

export const templates: Template[] = [
  // Finance Templates
  {
    category: 'Finance',
    name: 'Accounts Payable',
    slug: 'accounts-payable',
    description: 'Controls company expenses, ensures adherence to SLAs, monitors requests, and measures progress. Manages payments to suppliers for products or services procured, including invoice verification and approval acquisition.'
  },
  {
    category: 'Finance',
    name: 'Accounts Receivable',
    slug: 'accounts-receivable',
    description: 'Streamlines and improves the financial process by managing accounts receivable effectively. Involves evaluating and extending credit to clients, collecting timely payments, and maintaining healthy cash flow.'
  },
  {
    category: 'Finance',
    name: 'Budget Transfer Request',
    slug: 'budget-transfer-request',
    description: 'A process for employees to submit budget relocation approval requests, including justification for the transfer.'
  },
  {
    category: 'Finance',
    name: 'Business plan budgeting',
    slug: 'business-plan-budgeting',
    description: 'Assists in the annual budgeting process to manage how funds will be allocated over the next year.'
  },
  {
    category: 'Finance',
    name: 'Business Revenue',
    slug: 'business-revenue',
    description: 'Track your budget and plan expenses using organized automations, alerts, reports, and more to keep finances organized.'
  },
  {
    category: 'Finance',
    name: 'CAPEX Request',
    slug: 'capex-request',
    description: 'Automates the Capital Expenditure management system to expedite request and review processes while securing audit records for governance purposes.'
  },
  {
    category: 'Finance',
    name: 'Check Request',
    slug: 'check-request',
    description: 'Streamlines the receiving, analyzing, and approving of check requests within a company\'s finance and accounting organization.'
  },
  {
    category: 'Finance',
    name: 'Corporate Card Request',
    slug: 'corporate-card-request',
    description: 'Enables employees to pay for pre-approved business expenses such as hotels, meals, rental cars, and flights through an automated workflow.'
  },
  {
    category: 'Finance',
    name: 'Debt Collection',
    slug: 'debt-collection',
    description: 'Manages defaulting clients more easily and intuitively through a structured collection process.'
  },
  {
    category: 'Finance',
    name: 'Employee Expense Claim',
    slug: 'employee-expense-claim',
    description: 'Allows employees to seek reimbursement for business-related expenses incurred during the course of their job.'
  },
  {
    category: 'Finance',
    name: 'Employee Loan',
    slug: 'employee-loan',
    description: 'Manages the process of loaning money to employees, from requirement processing to permission approval and payment.'
  },
  {
    category: 'Finance',
    name: 'Expense Reimbursement',
    slug: 'expense-reimbursement',
    description: 'Transforms expense reimbursement with digital workflows that receive requests, invoices, receipts, and documents in a single place for finance team processing.'
  },
  {
    category: 'Finance',
    name: 'Expense Report',
    slug: 'expense-report',
    description: 'A streamlined process to automate the sending of receipts and reports, and get approvals quickly from finance managers.'
  },
  {
    category: 'Finance',
    name: 'Financial Department Requests',
    slug: 'financial-department-requests',
    description: 'Centralizes finance department requests in a single place, providing full visibility and control of operational workflows.'
  },

  // Human Resources Templates
  {
    category: 'Human Resources',
    name: '360-Degree Feedback',
    slug: '360-degree-feedback',
    description: 'A comprehensive performance evaluation process that gathers insights from various sources including managers, peers, subordinates, and self-assessments.'
  },
  {
    category: 'Human Resources',
    name: '9-Box Performance Grid',
    slug: '9-box-performance-grid',
    description: 'Manages employee performance and potential using a proven talent management method.'
  },
  {
    category: 'Human Resources',
    name: 'Attendance Management',
    slug: 'attendance-management',
    description: 'Efficiently tracks and manages employee time and attendance, including time in/out, working hours, and leave requests.'
  },
  {
    category: 'Human Resources',
    name: 'Candidates Screening and Interviews',
    slug: 'candidates-screening-and-interviews',
    description: 'A structured process to guide HR through candidates screening and interviews.'
  },
  {
    category: 'Human Resources',
    name: 'Covid-19 - Employees Status',
    slug: 'covid-19-employees-status',
    description: 'Helps track and manage employees\' health statuses during the COVID-19 pandemic.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Confirmation',
    slug: 'employee-confirmation',
    description: 'A structured approach to ensure successful integration of new employees, involving assessments of performance and company fit.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Feedback',
    slug: 'employee-feedback',
    description: 'Automates feedback surveys to gauge employee satisfaction and engagement, identifying factors impacting motivation.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Nomination',
    slug: 'employee-nomination',
    description: 'A systematic approach to acknowledge and reward employees for exceptional work and achievements through structured nomination processes.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Offboarding',
    slug: 'employee-offboarding',
    description: 'Streamlines the final step in the employee journey when staff members leave the organization.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Onboarding',
    slug: 'employee-onboarding',
    description: 'Integrates new hires into the company and its culture, ensuring they feel welcomed and ready to contribute from day one.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Performance Evaluation',
    slug: 'employee-performance-evaluation',
    description: 'Structures and standardizes performance evaluation processes based on market best practices to ensure consistent employee assessment.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Promotion Process',
    slug: 'employee-promotion-process',
    description: 'Evaluates and promotes deserving employees through an intuitive interface and structured process.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Referral',
    slug: 'employee-referral',
    description: 'Facilitates faster hiring by leveraging current employees\' networks, automating referral tracking and candidate management.'
  },
  {
    category: 'Human Resources',
    name: 'Employee Time Tracking',
    slug: 'employee-time-tracking',
    description: 'Automates tracking of employee working hours, offering filtering capabilities and time reports for various tasks.'
  },

  // Sales Templates
  {
    category: 'Sales',
    name: 'Cold Calling',
    slug: 'cold-calling',
    description: 'A structured process to guide sales teams in cold calling potential customers and closing big deals.'
  },
  {
    category: 'Sales',
    name: 'Commercial Proposal for Services',
    slug: 'commercial-proposal-for-services',
    description: 'Guides through the preparation and management of commercial proposals for services.'
  },
  {
    category: 'Sales',
    name: 'Contract Renewal',
    slug: 'contract-renewal',
    description: 'Manages contract renewal processes carried out by legal teams, providing opportunities to enhance contracts with latest organizational standards.'
  },
  {
    category: 'Sales',
    name: 'Exceptional Pricing Approval for SaaS',
    slug: 'exceptional-pricing-approval-for-saas',
    description: 'Manages approval of exceptional pricing for SaaS companies with priority setting, due date establishment, and automatic notifications.'
  },
  {
    category: 'Sales',
    name: 'Franchise Lead Management',
    slug: 'franchise-lead-management',
    description: 'Designed to manage prospective franchisees for franchise owners through a structured pipeline.'
  },
  {
    category: 'Sales',
    name: 'Funding Request Pipeline',
    slug: 'funding-request-pipeline',
    description: 'A step-by-step process to aid in creating and managing funding strategies.'
  },
  {
    category: 'Sales',
    name: 'Lead Generation Form',
    slug: 'lead-generation-form',
    description: 'Helps skyrocket lead generation and conversion rates through customizable, easy-to-use forms.'
  },
  {
    category: 'Sales',
    name: 'New Location Prospecting for Franchises',
    slug: 'new-location-prospecting-for-franchises',
    description: 'Prospects new partners for franchise projects, arranging documents, designing business plans, and setting contractual details.'
  },
  {
    category: 'Sales',
    name: 'Outbound Marketing Prospecting Leads',
    slug: 'outbound-marketing-prospecting-leads',
    description: 'Helps sales reps in outbound business development, gathering information to identify and contact qualified leads.'
  },
  {
    category: 'Sales',
    name: 'Real Estate Sales',
    slug: 'real-estate-sales',
    description: 'Manages real estate sales processes from listing to contract with ease and efficiency.'
  },
  {
    category: 'Sales',
    name: 'Request for Proposal',
    slug: 'request-for-proposal',
    description: 'Simplifies the selection of IT providers and finding the best tech partners using structured RFP processes.'
  },
  {
    category: 'Sales',
    name: 'Reseller Prospecting',
    slug: 'reseller-prospecting',
    description: 'Organizes and coordinates stages of identifying, evaluating, and concluding reseller prospects.'
  },
  {
    category: 'Sales',
    name: 'Sales CRM',
    slug: 'sales-crm',
    description: 'Connects all pipeline stages from lead generation to conversion in a comprehensive CRM template.'
  },

  // Marketing Templates
  {
    category: 'Marketing',
    name: 'A/B Testing',
    slug: 'ab-testing',
    description: 'Organizes and standardizes A/B testing processes to aid business growth through systematic testing.'
  },
  {
    category: 'Marketing',
    name: 'Advertising Campaign',
    slug: 'advertising-campaign',
    description: 'Used to create, execute, and evaluate advertisement campaigns from planning to analysis.'
  },
  {
    category: 'Marketing',
    name: 'Marketing Agency Client Onboarding',
    slug: 'marketing-agency-client-onboarding',
    description: 'Helps marketing agencies flawlessly welcome new clients through structured onboarding processes.'
  },
  {
    category: 'Marketing',
    name: 'Agency Project Development',
    slug: 'agency-project-development',
    description: 'A comprehensive system for managing agency project developments from inception to delivery.'
  },
  {
    category: 'Marketing',
    name: 'Buyer Personas',
    slug: 'buyer-personas',
    description: 'Understands customer profiles and behavior using market research and existing customer data.'
  },
  {
    category: 'Marketing',
    name: 'Campaign Briefing',
    slug: 'campaign-briefing',
    description: 'Collects multiple requests for marketing teams to create and execute ad campaigns.'
  },
  {
    category: 'Marketing',
    name: 'Co-marketing Management',
    slug: 'co-marketing-management',
    description: 'Manages joint marketing campaigns between two brands through coordinated processes.'
  },
  {
    category: 'Marketing',
    name: 'Content Marketing',
    slug: 'content-marketing',
    description: 'A comprehensive template for controlling, executing, and delivering impeccable content marketing strategies.'
  },
  {
    category: 'Marketing',
    name: 'Contest Management',
    slug: 'contest-management',
    description: 'Manages and tracks contest subscriptions and contender evaluations.'
  },
  {
    category: 'Marketing',
    name: 'Conversion Rate Optimization Process',
    slug: 'conversion-rate-optimization-process',
    description: 'Aids in discovering optimal website page layouts through systematic testing and data analysis.'
  },
  {
    category: 'Marketing',
    name: 'Copy Management',
    slug: 'copy-management',
    description: 'Structures, organizes, and reviews text content for businesses.'
  },

  // Real Estate Templates
  {
    category: 'Real Estate',
    name: 'Asset and Leasing Management',
    slug: 'asset-and-leasing-management',
    description: 'Manages real estate assets and their leasing status through comprehensive tracking systems.'
  },
  {
    category: 'Real Estate',
    name: 'Brokerage Pipeline',
    slug: 'brokerage-pipeline',
    description: 'Manages real estate selling and brokerage processes in a single interface.'
  },
  {
    category: 'Real Estate',
    name: 'Buy-Side Real Estate Management',
    slug: 'buy-side-real-estate-management',
    description: 'Helps manage clients\' real estate needs and track suitable listings for buyers.'
  },
  {
    category: 'Real Estate',
    name: 'Coworking Space Rental',
    slug: 'coworking-space-rental',
    description: 'Manages the rental of coworking spaces while maintaining effective communication with clients.'
  },
  {
    category: 'Real Estate',
    name: 'Facilities Delivery',
    slug: 'facilities-delivery',
    description: 'Allows facilities teams to manage new installation requests efficiently.'
  },
  {
    category: 'Real Estate',
    name: 'Facilities Management',
    slug: 'facilities-management',
    description: 'Manages requests for facilities adjustments, including maintenance, workstation setups, parking permits, and cleaning services.'
  },
  {
    category: 'Real Estate',
    name: 'Industrial Building Project Request',
    slug: 'industrial-building-project-request',
    description: 'Manages new projects for industrial buildings, assigns suppliers, analyzes documentation, and documents operational impacts.'
  },
  {
    category: 'Real Estate',
    name: 'Inventory Adjustment',
    slug: 'inventory-adjustment',
    description: 'Adjusts and manages inventory based on data inputs and required approvals.'
  },
  {
    category: 'Real Estate',
    name: 'Inventory Inbound for E-commerce',
    slug: 'inventory-inbound-for-e-commerce',
    description: 'Manages the receipt and inventory of goods in e-commerce operations.'
  },
  {
    category: 'Real Estate',
    name: 'Lease Management',
    slug: 'lease-management',
    description: 'Manages tenants from contract signing to turnover for real estate agencies.'
  },
  {
    category: 'Real Estate',
    name: 'Lease Tracker',
    slug: 'lease-tracker',
    description: 'Registers, manages, and updates tenant information while controlling lease payments.'
  },

  // IT Operations Templates
  {
    category: 'IT Operations',
    name: 'Access Requests — Remote Work',
    slug: 'access-requests-remote-work',
    description: 'This process manages access requests for remote work to ensure company security.'
  },
  {
    category: 'IT Operations',
    name: 'IT Asset Management',
    slug: 'it-asset-management',
    description: 'This process manages IT assets from request to delivery ensuring nothing is left behind.'
  },
  {
    category: 'IT Operations',
    name: 'IT Change Management',
    slug: 'it-change-management',
    description: 'IT Change Management is a business process that involves the proactive or reactive implementation of changes in IT infrastructure to enhance service delivery.'
  },
  {
    category: 'IT Operations',
    name: 'IT Change Request',
    slug: 'it-change-request',
    description: 'Manage and track recurrent and new IT change requests for consistent data and results.'
  },
    {
    category: 'CS and Support',
    name: 'IT Customer Relationship Management',
    slug: 'it-customer-relationship-management',
    description: 'This process manages customer requests, surveys their satisfaction, and ensures quick responses.'
  },
  {
    category: 'IT Operations',
    name: 'IT Incident Management',
    slug: 'it-incident-management',
    description: 'This process is designed to manage and store all information about an IT incident systematically.'
  },
  {
    category: 'IT Operations',
    name: 'IT Onboarding',
    slug: 'it-onboarding',
    description: 'The IT Onboarding process is designed to efficiently integrate new hires into the organization by providing them with the necessary tools and addressing any account related issues.'
  },
  {
    category: 'IT Operations',
    name: 'IT Onboarding Process',
    slug: 'it-onboarding-process',
    description: 'A process to standardize IT onboarding activities and ensure no information is missed.'
  },
  {
    category: 'IT Operations',
    name: 'IT Order Management',
    slug: 'it-order-management',
    description: 'A process to track and manage IT maintenance and failure issues.'
  },
  {
    category: 'IT Operations',
    name: 'IT Problem Management',
    slug: 'it-problem-management',
    description: 'The IT Problem Management process aims to quickly resolve IT-related issues to prevent disruptions or downtime, understand root causes, and take preventive measures for business continuity.'
  },
    {
    category: 'IT Operations',
    name: 'IT Project Request',
    slug: 'it-project-request',
    description: 'Manage and track valuable project ideas to improve your company.'
  },
  {
    category: 'IT Operations',
    name: 'IT Release Management',
    slug: 'it-release-management',
    description: 'A process designed for IT departments to manage the release process from planning to review.'
  },
  {
    category: 'IT Operations',
    name: 'IT Service Request',
    slug: 'it-service-request',
    description: 'The IT Service Request process is a critical aspect of an organization\'s IT department. It ensures employees have access to required IT services for optimal performance, handling requests like password recovery, app access, new hardware provision, software license purchases and upgrades.'
  },
    {
    category: 'CS and Support',
    name: 'Service Desk',
    slug: 'service-desk',
    description: 'A comprehensive tool for managing IT tickets and ensuring key metric achievement.'
  },
  {
    category: 'IT Operations',
    name: 'Tool Management',
    slug: 'tool-management',
    description: 'Manage and track your company\'s tool ordering, analysis, purchase, and approval process.'
  },
  
  // Procurement Templates
  {
    category: 'Procurement',
    name: 'Business Contract Analysis',
    slug: 'business-contract-analysis',
    description: 'A process for creating and managing your company\'s contracts effectively.'
  },
  {
    category: 'Procurement',
    name: 'Make or Buy Decision',
    slug: 'make-or-buy-decision',
    description: 'This process helps in deciding the best options for onboarding new software.'
  },
  {
    category: 'Procurement',
    name: 'Processing Changes and Creating POs',
    slug: 'processing-changes-and-creating-pos',
    description: 'This process saves time on completing purchase orders and updates process changes more efficiently.'
  },
  {
    category: 'Procurement',
    name: 'Procurement Approval Process',
    slug: 'procurement-approval-process',
    description: 'A process for reviewing and approving documents across your company.'
  },
  {
    category: 'Procurement',
    name: 'Procurement Request (Banking)',
    slug: 'procurement-request-banking',
    description: 'This process is designed to manage the purchase request, approval, bidding, and negotiation phases in the banking sector.'
  },
  {
    category: 'Procurement',
    name: 'Purchase Process',
    slug: 'purchase-process',
    description: 'A digitized and automated purchasing process providing complete visibility and control of purchase requisitions.'
  },
  {
    category: 'Procurement',
    name: 'Request Management',
    slug: 'request-management',
    description: 'A process to centralize and manage all your requests efficiently.'
  },
  {
    category: 'Procurement',
    name: 'Risk Management Plan',
    slug: 'risk-management-plan',
    description: 'Identify, assess, foresee and mitigate risks before they come to life.'
  },
  {
    category: 'Procurement',
    name: 'Supplier Performance Analysis',
    slug: 'supplier-performance-analysis',
    description: 'An organized process for managing and evaluating supplier performance intuitively.'
  },
  {
    category: 'Procurement',
    name: 'Vendor Management',
    slug: 'vendor-management',
    description: 'A process to manage, control, and evaluate suppliers effectively.'
  },
  {
    category: 'Procurement',
    name: 'Vendor Registration',
    slug: 'vendor-registration',
    description: 'Vendor registration is a critical process that involves careful evaluation of vendors and enables your procurement team to establish effective contracts.'
  },

  // Development Templates
  {
    category: 'Development',
    name: 'Agile Software Development',
    slug: 'agile-software-development',
    description: 'A template to streamline and customize your agile development process for efficient workflow.'
  },
  {
    category: 'Development',
    name: 'Bug Tracking and Reporting',
    slug: 'bug-tracking-and-reporting',
    description: 'Manage and streamline bugs resolution process with Pneumatic’s bug tracking template.'
  },
    {
    category: 'Development',
    name: 'IT Bug Tracking',
    slug: 'it-bug-tracking',
    description: 'IT Bug Tracking is a vital process for software development teams that involves identifying, investigating, and resolving software bugs in a timely manner.'
  },
  {
    category: 'Development',
    name: 'Product Management',
    slug: 'product-management',
    description: 'This process organizes, prioritizes, designs, tests, and releases new product features.'
  },
  {
    category: 'Development',
    name: 'Software Comparison',
    slug: 'software-comparison',
    description: 'A process for selecting the best tech solutions for your company.'
  },
  {
    category: 'Development',
    name: 'Software Debugging Process',
    slug: 'software-debugging-process',
    description: 'This process manages bug correction data, enhancing productivity and teamwork during debugging phases.'
  },
  {
    category: 'Development',
    name: 'Software Deployment',
    slug: 'software-deployment',
    description: 'This process is designed to aid in the efficient and successful deployment of new software and updates.'
  },
  {
    category: 'Development',
    name: 'Software Performance Testing',
    slug: 'software-performance-testing',
    description: 'Plan, organize and manage your software performance tests efficiently.'
  },
  {
    category: 'Development',
    name: 'Software Testing Tutorial',
    slug: 'software-testing-tutorial',
    description: 'A guide to simplify the process of software testing using Pneumatic’s Software Testing Tutorial Template.'
  },
  {
    category: 'Development',
    name: 'Task Management',
    slug: 'task-management',
    description: 'A process designed to increase efficiency in handling tasks, from simple to complex.'
  },

  // CS and Support Templates
  {
    category: 'CS and Support',
    name: 'Customer Contact Log & Form',
    slug: 'customer-contact-log-and-form',
    description: 'A process designed to facilitate the registration and storage of customer contact information using a standardized template.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Feedback',
      slug: 'customer-feedback',
      description: 'A standardized and centralized process for collecting and tracking customer feedback.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Help Desk',
      slug: 'customer-help-desk',
      description: 'Designed to exceed customer expectations by efficiently addressing their queries or complaints through a ticketing system.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Interviews',
      slug: 'customer-interviews',
      description: 'A step-by-step guide to conducting effective customer interviews to enhance product development.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Onboarding',
      slug: 'customer-onboarding',
      description: 'A crucial process to help customers get familiar with and start using a product, adapting to its learning curve.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey',
      slug: 'customer-satisfaction-survey',
      description: 'Gathers insights from customers to improve product or service quality and enhance customer experiences.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey - Phone',
      slug: 'customer-satisfaction-survey-phone',
      description: 'A structured process for conducting post-sales customer satisfaction surveys via phone.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey Form',
      slug: 'customer-satisfaction-survey-form',
      description: 'A process for centralizing customer satisfaction survey responses, organizing and extracting survey data.'
  },
  {
      category: 'CS and Support',
      name: 'Customer Success Management',
      slug: 'customer-success-management',
      description: 'Focuses on managing customer success with full visibility of companies and tasks, ensuring adherence to SLAs.'
  },
  {
      category: 'CS and Support',
      name: 'Damaged or Lost Baggage',
      slug: 'damaged-or-lost-baggage',
      description: 'A process for managing requests for luggage repairs and lost luggage claims, from claim to compensation payment.'
  },
  {
      category: 'CS and Support',
      name: 'Early Check-in (Double Room)',
      slug: 'early-check-in-double-room',
      description: 'Designed to enable guests to check-in early, streamlining the process for both guests and hosts.'
  },
  {
      category: 'CS and Support',
      name: 'Field Service Management',
      slug: 'field-service-management',
      description: 'This process helps in organizing the field operations of a team of service professionals.'
  },
  {
      category: 'CS and Support',
      name: 'Helpdesk | Tracking received emails',
      slug: 'helpdesk-tracking-received-emails',
      description: 'Efficiently manage and track every email received by creating a new ticket/card in the pipe for each email.'
  },
  {
      category: 'CS and Support',
      name: 'Hotel Booking Request',
      slug: 'hotel-booking-request',
      description: 'Organize your team hotel booking request with this new template.'
  },
  {
      category: 'CS and Support',
      name: 'Application Maintenance and Support',
      slug: 'application-maintenance-and-support',
      description: 'This process aims to manage and organize the support issues reported in a business using a kanban model.'
  },
  {
      category: 'CS and Support',
      name: 'Bike Rental Management',
      slug: 'bike-rental-management',
      description: 'A comprehensive process to manage and track bike rentals for bike rental shops.'
  },
  {
      category: 'CS and Support',
      name: 'Cargo Vehicle Insurance Claim',
      slug: 'cargo-vehicle-insurance-claim',
      description: 'This process is for reporting and handling insurance claims related to cargo vehicles.'
  },
  {
      category: 'CS and Support',
      name: 'Case Management',
      slug: 'case-management',
      description: 'Efficiently managing and handling cases by leveraging a public form, quick information analysis, and automated email communication with the requester.'
  },
  {
      category: 'CS and Support',
      name: 'Churn Management',
      slug: 'churn-management',
      description: 'A standardized workflow to manage customer churn effectively, offering a good experience even up until the last engagement.'
  },
  {
      category: 'CS and Support',
      name: 'Class Scheduling',
      slug: 'class-scheduling',
      description: 'This business process is designed to assist in the creation and management of class schedules.'
  },
  {
      category: 'CS and Support',
      name: 'Client\'s Equipment Maintenance',
      slug: 'clients-equipment-maintenance',
      description: 'A process for controlling and tracking clients\' repair requests and keeping the client informed through automatic email templates.'
  },
  {
      category: 'CS and Support',
      name: 'Complaint Management',
      slug: 'complaint-management',
      description: 'A simple and complete way to organize your complaints in your company.'
  },
  {
      category: 'CS and Support',
      name: 'Complaints Follow-up Agroindustrial',
      slug: 'complaints-follow-up-agroindustrial',
      description: 'Helps agroindustrial managers track, control, and communicate effectively with customers about their issues and complaints.'
  },
  {
      category: 'CS and Support',
      name: 'Concierge Service',
      slug: 'concierge-service',
      description: 'A crucial aspect of a hotel\'s customer service, handling a variety of guest needs.'
  },
  {
      category: 'CS and Support',
      name: 'Concierge Services',
      slug: 'concierge-services',
      description: 'A process to handle and fulfill hotel guest requests for restaurant, museum, concert, and theater reservations.'
  },
  {
      category: 'CS and Support',
      name: 'Contact Inbox',
      slug: 'contact-inbox',
      description: 'The Contact Inbox business process is aimed at centralizing, organizing, and responding to customer contacts effectively and efficiently.'
  },
  {
      category: 'CS and Support',
      name: 'Implementation',
      slug: 'implementation',
      description: 'A detailed process to understand customer\'s expectations, implement solutions, schedule training meetings, and organize feedbacks using this Implementation Template.'
  },
  {
      category: 'CS and Support',
      name: 'Incoming Net Promoter Scores',
      slug: 'incoming-net-promoter-scores',
      description: 'Manage all your NPS scores, send emails and ask for feedback using this Incoming Net Promoter Scores template.'
  },
  {
      category: 'CS and Support',
      name: 'Lodging Requests',
      slug: 'lodging-requests',
      description: 'This process is aimed at facilitating lodging requisition in hotels or Airbnb. It involves various phases, each requiring specific inputs.'
  },
  {
    category: 'CS and Support',
    name: 'Medical Appointment Scheduling',
    slug: 'medical-appointment-scheduling',
    description: 'A streamlined process for scheduling medical appointments and sending out automated confirmation emails.'
  },
  {
      category: 'CS and Support',
      name: 'Medical Care (Clinic)',
      slug: 'medical-care-clinic',
      description: 'This process is designed for clinics to manage their patients\' details, from the moment they schedule the appointment to leave the clinic.'
  },
  {
      category: 'CS and Support',
      name: 'Medical Care (Hospital)',
      slug: 'medical-care-hospital',
      description: 'A comprehensive system designed for hospitals to manage their patients\' journey from triage to discharge.'
  },
  {
      category: 'CS and Support',
      name: 'Missing, lost, or damaged shipment',
      slug: 'missing-lost-or-damaged-shipment',
      description: 'A process to handle cases of missing, damaged, or lost shipments reported by clients.'
  },
  {
      category: 'CS and Support',
      name: 'NDA Request',
      slug: 'nda-request',
      description: 'This process involves the error-proof and flawless execution of signing Non-Disclosure Agreements (NDAs) to avoid future complications. Automation plays a key role in simplifying and streamlining the entire workflow.'
  },
  {
      category: 'CS and Support',
      name: 'Problem handling for Telecom',
      slug: 'problem-handling-for-telecom',
      description: 'Manage all internal problems related to telecommunications using a specific problem-solving methodology.'
  },
  {
      category: 'CS and Support',
      name: 'Product & Technical Support',
      slug: 'product-and-technical-support',
      description: 'This process aims to organize all the products that need technical support to improve support time and customer management.'
  },
  {
      category: 'CS and Support',
      name: 'Product return management',
      slug: 'product-return-management',
      description: 'This is a process to manage returns, with refund or exchange options.'
  },
  {
      category: 'CS and Support',
      name: 'Service Problem Management',
      slug: 'service-problem-management',
      description: 'This process aims to respond immediately to customer-affecting service issues or failures in the telecommunications sector.'
  },
  {
      category: 'CS and Support',
      name: 'Service Scheduling',
      slug: 'service-scheduling',
      description: 'A process designed to ensure that an organization\'s services and resources are scheduled as optimally and efficiently as possible.'
  },
  {
      category: 'CS and Support',
      name: 'Shipment Tracking',
      slug: 'shipment-tracking',
      description: 'A process for tracking the current location of a product shipment. It monitors whether the shipment has been posted, is en route, or has been delivered.',
      purpose: 'The Shipment Tracking process is a critical aspect of any business dealing with physical goods. It enables companies to keep track of their products during transit, ensuring they are moving as expected from one point to another. This process not only provides visibility into the current location of the shipment but also tracks its status whether it has been posted, is en route, or has been delivered.\n\nHaving a systematic Shipment Tracking process in place offers a multitude of benefits. It reduces the risk of lost goods, as each shipment is closely monitored. It also increases customer satisfaction, as customers can be updated about their order status and delivery time. Moreover, it helps in identifying bottlenecks in the supply chain, enabling businesses to take corrective action and improve their operations.\n\nFurthermore, a well-managed Shipment Tracking process can lead to significant cost savings. It can help in identifying inefficiencies in the shipping process, such as unnecessary delays or high costs, and finding ways to address these issues. It also supports better decision-making, as businesses have accurate and up-to-date information about their shipments.\n\nOverall, the Shipment Tracking process is an essential tool for managing the supply chain effectively and ensuring the timely and safe delivery of products.',
      steps: [
          { name: 'Posting of Shipment', description: 'In this step, the shipment is posted for delivery. The shipment details, including the shipment ID, product details, and shipping date, are recorded.' },
          { name: 'En Route Tracking', description: 'In this step, the shipment is tracked while it is en route. Regular updates are recorded to monitor the progress of the shipment.' },
          { name: 'Delivery Confirmation', description: 'In this step, the delivery of the shipment is confirmed. The delivery details, including the delivery date and recipient\'s details, are recorded.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Technical Repair',
      slug: 'technical-repair',
      description: 'This business process focuses on managing and fulfilling customer requests for appliance and electronics repairs in a timely and efficient manner.'
  },
  {
      category: 'CS and Support',
      name: 'Warranty Claim',
      slug: 'warranty-claim',
      description: 'A structured process to manage and track customer\'s warranty claims in case of product malfunction or defect.'
  },
  {
      category: 'CS and Support',
      name: 'Warranty Management',
      slug: 'warranty-management',
      description: 'Managing the entire product warranty process, from diagnosis to repair, while also establishing the required time and cost.'
  },
  {
    category: 'Admin and Ops',
    name: '5S Auditing',
    slug: '5s-auditing',
    description: 'A regular process for conducting 5S audits to maintain organization and eliminate waste in workplace operations.'
  },
  {
      category: 'Admin and Ops',
      name: 'Business Process Mapping',
      slug: 'business-process-mapping',
      description: 'Supports mapping, evaluating, and managing business processes for optimal efficiency and documentation.'
  },
  {
      category: 'Admin and Ops',
      name: 'Commodities Strategy',
      slug: 'commodities-strategy',
      description: 'Organizes data for forecasting market trends in a simple kanban view for traders and analysts.'
  },
  {
      category: 'Admin and Ops',
      name: 'Competitive Analysis',
      slug: 'competitive-analysis',
      description: 'Investigates competitors, analyzes their strategies, and documents their strengths and weaknesses for strategic planning.'
  },
  {
      category: 'Admin and Ops',
      name: 'Design Thinking',
      slug: 'design-thinking',
      description: 'A template for solving complex problems using Herbert Simon\'s Design Thinking methodology through structured innovation processes.'
  }
];
