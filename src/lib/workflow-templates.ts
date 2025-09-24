

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
    description: 'Controls company expenses, ensures adherence to SLAs, monitors requests, and measures progress. Manages payments to suppliers for products or services procured, including invoice verification and approval acquisition.',
    purpose: 'The Accounts Payable process is a cornerstone of financial management, ensuring that all outgoing payments are legitimate, accurate, and timely. A well-structured AP process prevents fraudulent payments, helps maintain good relationships with suppliers through prompt payments, and provides clear visibility into company expenditures. Automating this workflow reduces manual data entry, minimizes errors, and creates an easily auditable trail for compliance and financial reporting.',
    steps: [
      { name: 'Invoice Reception', description: 'Receive and log invoices from suppliers via email or a dedicated portal.' },
      { name: 'Invoice Verification', description: 'Cross-reference the invoice with purchase orders and receiving reports to verify goods or services were delivered as agreed.' },
      { name: 'Approval Routing', description: 'Route the invoice to the appropriate department head or manager for approval based on predefined rules.' },
      { name: 'Payment Processing', description: 'Once approved, schedule the payment in the accounting system according to the agreed payment terms.' },
      { name: 'Record Keeping', description: 'Archive the paid invoice and all related documents for audit and record-keeping purposes.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Accounts Receivable',
    slug: 'accounts-receivable',
    description: 'Streamlines and improves the financial process by managing accounts receivable effectively. Involves evaluating and extending credit to clients, collecting timely payments, and maintaining healthy cash flow.',
    purpose: 'The Accounts Receivable process is critical for maintaining a healthy cash flow, the lifeblood of any business. It involves invoicing customers, tracking payments, and following up on overdue accounts. An efficient AR process ensures that revenue is collected promptly, reduces the risk of bad debt, and provides accurate data for financial forecasting. Automating AR can significantly reduce the time spent on manual follow-ups and improve collection rates.',
    steps: [
      { name: 'Invoice Generation', description: 'Create and send accurate invoices to clients as soon as services are rendered or products are delivered.' },
      { name: 'Payment Tracking', description: 'Monitor incoming payments and apply them to the correct outstanding invoices in the accounting system.' },
      { name: 'Automated Reminders', description: 'Send automated payment reminders to clients for upcoming and overdue invoices.' },
      { name: 'Collections Management', description: 'Escalate overdue accounts to the collections team or an external agency based on predefined rules.' },
      { name: 'Reporting', description: 'Generate reports on aging receivables, collection effectiveness, and cash flow forecasts.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Budget Transfer Request',
    slug: 'budget-transfer-request',
    description: 'A process for employees to submit budget relocation approval requests, including justification for the transfer.',
    purpose: 'This process provides a formal and transparent way for department managers to request the reallocation of funds between different budget lines. It ensures that all budget transfers are properly justified, approved by finance, and documented, maintaining the integrity of the overall budget. It provides flexibility while preventing unauthorized or un-tracked changes to financial plans.',
    steps: [
        { name: 'Request Submission', description: 'The requesting manager fills out a form detailing the amount, the source budget, the destination budget, and the justification for the transfer.' },
        { name: 'Department Head Review', description: 'The request is routed to the head of the department for initial review and approval.' },
        { name: 'Finance Department Approval', description: 'The finance team reviews the request for compliance with company policy and its impact on the overall budget before giving final approval.' },
        { name: 'Budget Update', description: 'Once approved, the finance team updates the official budget records in the accounting system.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Business plan budgeting',
    slug: 'business-plan-budgeting',
    description: 'Assists in the annual budgeting process to manage how funds will be allocated over the next year.',
    purpose: 'This workflow structures the annual budgeting process, ensuring all departments contribute their forecasts in a standardized format. It facilitates collaboration between departments and the finance team, leading to a more accurate and realistic company-wide budget. It provides a clear roadmap for resource allocation and financial planning for the upcoming fiscal year.',
    steps: [
        { name: 'Budget Kick-off', description: 'The finance team sends out budget templates and guidelines to all department heads.' },
        { name: 'Departmental Budget Submission', description: 'Each department head submits their proposed budget for the next fiscal year, including revenue projections and expense forecasts.' },
        { name: 'Finance Review & Consolidation', description: 'The finance team reviews departmental submissions, asks clarifying questions, and consolidates them into a master budget.' },
        { name: 'Executive Approval', description: 'The consolidated budget is presented to the executive team for review, adjustments, and final approval.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Business Revenue',
    slug: 'business-revenue',
    description: 'Track your budget and plan expenses using organized automations, alerts, reports, and more to keep finances organized.',
    purpose: 'This workflow helps businesses monitor their revenue streams against financial targets in real-time. By automating the tracking of sales, subscriptions, and other income sources, it provides an up-to-date view of financial performance. This enables leadership to make timely decisions, identify trends, and adjust strategies to meet revenue goals.',
    steps: [
        { name: 'Data Aggregation', description: 'Automatically pull revenue data from various sources like payment gateways, CRMs, and bank accounts.' },
        { name: 'Categorization', description: 'Categorize revenue by source, product line, or business unit.' },
        { name: 'Performance vs. Target', description: 'Compare actual revenue against pre-defined budget targets and forecasts.' },
        { name: 'Alerts & Reporting', description: 'Generate daily or weekly revenue reports and send alerts for significant deviations from the forecast.' },
    ]
  },
  {
    category: 'Finance',
    name: 'CAPEX Request',
    slug: 'capex-request',
    description: 'Automates the Capital Expenditure management system to expedite request and review processes while securing audit records for governance purposes.',
    purpose: 'The Capital Expenditure (CAPEX) request process standardizes how employees request funding for large purchases like equipment, technology, or facilities. It ensures that every significant investment is properly vetted, aligned with strategic goals, and has a clear ROI justification. This structured workflow prevents unauthorized spending and provides a clear audit trail for all capital investments.',
    steps: [
      { name: 'Request Submission', description: 'An employee submits a detailed CAPEX request, including item description, cost, business justification, and ROI analysis.' },
      { name: 'Department Manager Review', description: 'The department manager reviews the request for alignment with departmental goals and budget.' },
      { name: 'Finance Review', description: 'The finance department analyzes the financial impact, ROI viability, and compliance with company policies.' },
      { name: 'Executive Approval', description: 'Requests exceeding a certain threshold are routed to senior leadership or a CAPEX committee for final approval.' },
      { name: 'Procurement & Fulfillment', description: 'Once approved, the request is sent to the procurement team to handle the purchasing process.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Check Request',
    slug: 'check-request',
    description: 'Streamlines the receiving, analyzing, and approving of check requests within a company\'s finance and accounting organization.',
    purpose: 'This workflow provides a formal process for requesting payments that need to be made by physical check. It centralizes all requests, ensuring they are properly approved and documented before a check is issued. This is crucial for payments to vendors who do not accept electronic payments, or for other special circumstances, while maintaining financial controls.',
    steps: [
        { name: 'Submit Check Request', description: 'An employee fills out a form with payee information, amount, mailing address, and attaches supporting documentation (e.g., invoice).' },
        { name: 'Manager Approval', description: 'The request is automatically routed to the employee\'s manager for approval.' },
        { name: 'Finance Processing', description: 'The finance team reviews the approved request, verifies the details, and prints the check.' },
        { name: 'Check Disbursement', description: 'The check is mailed to the payee, and the transaction is recorded in the accounting system.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Corporate Card Request',
    slug: 'corporate-card-request',
    description: 'Enables employees to pay for pre-approved business expenses such as hotels, meals, rental cars, and flights through an automated workflow.',
    purpose: 'This process automates the application and approval for a corporate credit card. It ensures that employees who need a card for business expenses are vetted, and that they understand and agree to the company\'s expense policies. It provides a clear, auditable trail for card issuance and helps control corporate spending.',
    steps: [
        { name: 'Employee Request', description: 'Employee submits a request form, detailing their role, expected spending needs, and justification.' },
        { name: 'Manager Approval', description: 'The employee\'s direct manager reviews the request and approves it based on job requirements.' },
        { name: 'Finance Department Review', description: 'The finance team reviews the request, checks for policy compliance, and determines the appropriate credit limit.' },
        { name: 'Card Issuance', description: 'Upon final approval, the finance team issues the corporate card and provides the employee with policy guidelines.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Debt Collection',
    slug: 'debt-collection',
    description: 'Manages defaulting clients more easily and intuitively through a structured collection process.',
    purpose: 'This workflow provides a systematic approach to managing and recovering overdue payments from customers. It automates the escalation process, from gentle reminders to more formal collection activities, ensuring consistent follow-up and improving the chances of recovering debt. It also provides a clear record of all communication and actions taken for legal and reporting purposes.',
    steps: [
        { name: 'Identify Overdue Account', description: 'The system automatically flags invoices that are past their due date by a specified number of days (e.g., 30 days).' },
        { name: 'Initial Reminder Series', description: 'An automated series of emails and/or SMS messages are sent to the client over a set period.' },
        { name: 'Internal Collections Call', description: 'If the debt remains unpaid, a task is created for an internal collections agent to call the client.' },
        { name: 'Formal Demand Letter', description: 'If the debt is still outstanding, a formal demand letter is generated and sent.' },
        { name: 'Escalate to Agency/Legal', description: 'After a final review, the account is escalated to a third-party collection agency or the legal department.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Employee Expense Claim',
    slug: 'employee-expense-claim',
    description: 'Allows employees to seek reimbursement for business-related expenses incurred during the course of their job.',
    purpose: 'This process streamlines how employees submit and get reimbursed for out-of-pocket business expenses. It ensures that all claims are compliant with company policy, properly documented with receipts, and approved by the correct manager. Automating this workflow reduces processing time, minimizes errors, and improves employee satisfaction by ensuring timely reimbursements.',
    steps: [
      { name: 'Submit Expense Claim', description: 'Employee fills out a digital expense form, categorizes expenses, and attaches photos or scans of receipts.' },
      { name: 'Manager Approval', description: 'The claim is automatically routed to the employee\'s manager, who reviews it for policy compliance and approves or rejects it.' },
      { name: 'Finance Department Audit', description: 'The finance team conducts a final review of the approved claim, checking receipts and coding.' },
      { name: 'Reimbursement Processing', description: 'Once audited, the reimbursement amount is included in the employee\'s next payroll cycle.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Employee Loan',
    slug: 'employee-loan',
    description: 'Manages the process of loaning money to employees, from requirement processing to permission approval and payment.',
    purpose: 'This workflow provides a formal structure for managing employee loan requests. It ensures fairness and consistency by standardizing the application, approval, and repayment process. It helps the company manage its financial risk while providing a valuable benefit to employees, all while maintaining clear documentation for accounting and HR records.',
    steps: [
        { name: 'Loan Application', description: 'Employee submits a formal loan application, specifying the amount and reason for the loan.' },
        { name: 'HR and Finance Review', description: 'HR and Finance departments review the application based on company policy, employee tenure, and eligibility.' },
        { name: 'Approval and Agreement', description: 'If approved, a loan agreement detailing the repayment schedule and terms is generated and signed by the employee.' },
        { name: 'Disbursement and Repayment', description: 'The loan amount is disbursed, and automated payroll deductions are set up for repayment.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Expense Reimbursement',
    slug: 'expense-reimbursement',
    description: 'Transforms expense reimbursement with digital workflows that receive requests, invoices, receipts, and documents in a single place for finance team processing.',
    purpose: 'This workflow centralizes and automates the entire expense reimbursement process. By providing a single digital channel for submitting claims, it eliminates lost receipts and messy paperwork. It gives the finance team full visibility into corporate spending and ensures that all reimbursements are processed efficiently, accurately, and in compliance with company policy.',
    steps: [
      { name: 'Submit Request', description: 'Employee submits expense details and uploads digital receipts through a centralized portal or mobile app.' },
      { name: 'Automated Policy Check', description: 'The system automatically flags any expenses that are outside of company policy for further review.' },
      { name: 'Manager Review & Approval', description: 'The employee\'s manager receives a notification to review and approve the expense report online.' },
      { name: 'Finance Processing & Payment', description: 'Approved reports are sent directly to the finance team for final audit and payment processing via payroll or direct deposit.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Expense Report',
    slug: 'expense-report',
    description: 'A streamlined process to automate the sending of receipts and reports, and get approvals quickly from finance managers.',
    purpose: 'This workflow simplifies the creation and submission of expense reports. It allows employees to easily compile multiple expenses from a trip or project into a single report. Automation handles the routing for approval, significantly speeding up the process and allowing for quicker reimbursement and financial closing at the end of each month.',
    steps: [
        { name: 'Create Expense Report', description: 'Employee creates a new report and adds individual expense items, attaching receipts for each.' },
        { name: 'Submit for Approval', description: 'Once complete, the employee submits the report, which is automatically sent to their manager.' },
        { name: 'Manager Approval', description: 'The manager reviews the entire report and approves or rejects it with comments.' },
        { name: 'Finance Payout', description: 'The approved report is processed by the finance department for payment.' },
    ]
  },
  {
    category: 'Finance',
    name: 'Financial Department Requests',
    slug: 'financial-department-requests',
    description: 'Centralizes finance department requests in a single place, providing full visibility and control of operational workflows.',
    purpose: 'This workflow acts as a central hub for all internal requests directed to the finance department, such as requests for financial reports, budget clarifications, or vendor payment status. It ensures that all requests are tracked, assigned to the correct person, and resolved in a timely manner, improving the finance team\'s efficiency and service level to the rest of the organization.',
    steps: [
        { name: 'Request Submission', description: 'An employee from any department submits a request through a standardized form.' },
        { name: 'Triage and Assignment', description: 'The finance team lead triages the request and assigns it to the appropriate team member (e.g., AP, AR, FP&A).' },
        { name: 'Request Fulfillment', description: 'The assigned team member works on the request and provides the necessary information or action.' },
        { name: 'Resolution and Confirmation', description: 'The requester is notified that their request is complete, and the ticket is closed.' },
    ]
  },

  // Human Resources Templates
  {
    category: 'Human Resources',
    name: '360-Degree Feedback',
    slug: '360-degree-feedback',
    description: 'A comprehensive performance evaluation process that gathers insights from various sources including managers, peers, subordinates, and self-assessments.',
    purpose: 'This process provides a holistic view of an employee\'s performance by collecting anonymous feedback from their circle of influence. It helps identify blind spots, uncover hidden strengths, and foster a culture of open communication and continuous development. It moves beyond a simple top-down review to provide a well-rounded and more objective assessment.',
    steps: [
      { name: 'Initiate Feedback Cycle', description: 'HR initiates the 360-degree feedback process for an employee or a team.' },
      { name: 'Select Reviewers', description: 'The employee and their manager collaborate to select a group of peers, direct reports, and other stakeholders to provide feedback.' },
      { name: 'Gather Anonymous Feedback', description: 'An automated survey is sent to all selected reviewers to gather anonymous feedback on a set of competencies.' },
      { name: 'Generate & Review Report', description: 'A comprehensive report is generated, summarizing the feedback. The employee and their manager review the report together to create a development plan.' },
    ]
  },
  {
    category: 'Human Resources',
    name: '9-Box Performance Grid',
    slug: '9-box-performance-grid',
    description: 'Manages employee performance and potential using a proven talent management method.',
    purpose: 'The 9-Box Grid is a talent management tool used to assess an organization\'s talent pool and plan for succession. It plots employees on a nine-box matrix based on their performance and potential. This workflow helps HR and leadership identify high-potentials, pinpoint development needs, and make strategic decisions about talent allocation and succession planning.',
    steps: [
        { name: 'Performance & Potential Assessment', description: 'Managers assess their direct reports on both past performance and future potential.' },
        { name: 'Calibration Meeting', description: 'Managers meet in a calibration session to discuss their ratings, ensuring consistency and fairness across the organization.' },
        { name: 'Plot Employees on Grid', description: 'HR plots each employee on the 9-box grid based on the calibrated ratings.' },
        { name: 'Develop Action Plans', description: 'Based on the grid placement, specific development, retention, or transition plans are created for each employee.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Attendance Management',
    slug: 'attendance-management',
    description: 'Efficiently tracks and manages employee time and attendance, including time in/out, working hours, and leave requests.',
    purpose: 'This workflow automates the tracking of employee attendance, reducing the administrative burden on HR and managers. It provides an accurate record of hours worked, helps manage paid time off (PTO) accruals, and ensures compliance with labor laws. It gives both employees and managers a clear view of attendance records and leave balances.',
    steps: [
        { name: 'Time Clock-In/Out', description: 'Employees clock in and out daily using a web portal, mobile app, or physical time clock.' },
        { name: 'Leave Request', description: 'Employees submit requests for vacation, sick leave, or other time off through the system.' },
        { name: 'Manager Approval', description: 'Managers review and approve leave requests, which automatically updates the employee\'s attendance record.' },
        { name: 'Payroll Integration', description: 'At the end of the pay period, approved timesheets are automatically sent to the payroll system for processing.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Candidates Screening and Interviews',
    slug: 'candidates-screening-and-interviews',
    description: 'A structured process to guide HR through candidates screening and interviews.',
    purpose: 'This workflow standardizes the hiring process, ensuring every candidate is evaluated fairly and consistently. It helps recruiters and hiring managers track applicants through each stage, from initial screening to final offer. This structured approach improves the quality of hires, reduces time-to-fill, and provides a professional experience for all candidates.',
    steps: [
      { name: 'Application Review', description: 'Recruiter screens incoming applications against the job description\'s minimum qualifications.' },
      { name: 'Phone Screen', description: 'Qualified candidates are invited to a brief phone interview with the recruiter to assess basic fit and interest.' },
      { name: 'Hiring Manager Interview', description: 'Promising candidates are passed to the hiring manager for a more in-depth technical or role-specific interview.' },
      { name: 'Panel Interview', description: 'Finalists meet with a panel of team members for a final round of interviews.' },
      { name: 'Offer Stage', description: 'The hiring committee makes a decision, and HR extends an offer to the chosen candidate.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Covid-19 - Employees Status',
    slug: 'covid-19-employees-status',
    description: 'Helps track and manage employees\' health statuses during the COVID-19 pandemic.',
    purpose: 'This workflow provides a confidential and secure way to track employee health statuses related to COVID-19, such as vaccination status, test results, or exposure notifications. It helps HR ensure a safe workplace, comply with health regulations, and manage any necessary quarantine periods or work-from-home arrangements, all while respecting employee privacy.',
    steps: [
        { name: 'Daily Health Attestation', description: 'Employees fill out a daily health screening form before entering the workplace.' },
        { name: 'Positive Case Reporting', description: 'Employees confidentially report a positive test result to HR through a secure form.' },
        { name: 'Contact Tracing', description: 'HR works to identify and confidentially notify any employees who may have been in close contact.' },
        { name: 'Return-to-Work Clearance', description: 'HR manages the process for an employee to safely return to the office based on health guidelines.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Confirmation',
    slug: 'employee-confirmation',
    description: 'A structured approach to ensure successful integration of new employees, involving assessments of performance and company fit.',
    purpose: 'This process formalizes the end of a new hire\'s probationary period. It involves a final performance review to confirm that the employee has met the expectations for their role and is a good fit for the company culture. It provides a clear checkpoint to either confirm the employee\'s permanent status or address any performance issues before the probationary period ends.',
    steps: [
        { name: 'Probationary Period Review', description: 'The manager conducts a performance review with the new hire near the end of their probationary period (e.g., at 90 days).' },
        { name: 'Feedback Collection', description: 'The manager gathers feedback from team members who have worked with the new hire.' },
        { name: 'Confirmation Decision', description: 'The manager makes a recommendation to HR to either confirm permanent employment or extend the probation.' },
        { name: 'Official Confirmation', description: 'HR formalizes the decision and updates the employee\'s status in the HRIS system.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Feedback',
    slug: 'employee-feedback',
    description: 'Automates feedback surveys to gauge employee satisfaction and engagement, identifying factors impacting motivation.',
    purpose: 'This workflow automates the process of collecting regular employee feedback through pulse surveys or annual engagement surveys. It helps HR and leadership understand employee morale, identify areas of concern, and measure the impact of company initiatives. By gathering data systematically, it allows the company to make data-driven decisions to improve the employee experience and reduce turnover.',
    steps: [
        { name: 'Survey Deployment', description: 'HR deploys an anonymous feedback survey to all employees via email.' },
        { name: 'Data Collection', description: 'The system collects and aggregates anonymous responses.' },
        { name: 'Results Analysis', description: 'HR analyzes the survey results to identify trends, strengths, and areas for improvement.' },
        { name: 'Action Planning', description: 'Leadership and department heads use the insights to create action plans to address the feedback.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Nomination',
    slug: 'employee-nomination',
    description: 'A systematic approach to acknowledge and reward employees for exceptional work and achievements through structured nomination processes.',
    purpose: 'This workflow provides a formal channel for employees to nominate their peers for recognition awards, such as "Employee of the Month." It promotes a culture of appreciation and makes the recognition process more inclusive and transparent. By structuring the nominations, it ensures that awards are based on specific contributions and company values.',
    steps: [
        { name: 'Nomination Submission', description: 'Any employee can submit a nomination for a peer, explaining how they demonstrated company values or achieved outstanding results.' },
        { name: 'Review Committee', description: 'A designated committee reviews all nominations against a set of criteria.' },
        { name: 'Winner Selection', description: 'The committee selects a winner for the award period.' },
        { name: 'Public Recognition', description: 'The winner is announced and celebrated in a company-wide meeting or communication channel.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Offboarding',
    slug: 'employee-offboarding',
    description: 'Streamlines the final step in the employee journey when staff members leave the organization.',
    purpose: 'A smooth offboarding process is just as important as onboarding. This workflow ensures that all necessary steps are taken when an employee leaves the company, including knowledge transfer, asset return, and revoking system access. A well-managed offboarding process protects company assets and information, ensures a smooth transition for the team, and helps maintain a positive relationship with the departing employee.',
    steps: [
      { name: 'Resignation Submitted', description: 'Employee submits their resignation, which triggers the offboarding workflow.' },
      { name: 'Offboarding Checklist Generation', description: 'A checklist of tasks is automatically generated and assigned to HR, IT, and the employee\'s manager.' },
      { name: 'Asset Collection & Access Revocation', description: 'IT coordinates the return of company property (laptop, phone) and revokes access to all systems on the employee\'s last day.' },
      { name: 'Exit Interview', description: 'HR conducts an exit interview to gather feedback about the employee\'s experience with the company.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Onboarding',
    slug: 'employee-onboarding',
    description: 'Integrates new hires into the company and its culture, ensuring they feel welcomed and ready to contribute from day one.',
    purpose: 'This workflow standardizes the onboarding process, ensuring every new hire has a consistent and positive experience. It automates the administrative tasks (like paperwork and IT setup) and structures the orientation and training process. A strong onboarding process accelerates a new employee\'s time-to-productivity, improves retention, and helps them feel like a valued part of the team from day one.',
    steps: [
      { name: 'Pre-Boarding', description: 'Once the offer is accepted, HR sends a welcome packet and initiates paperwork electronically.' },
      { name: 'Day 1: Orientation', description: 'HR conducts an orientation session covering company culture, policies, and benefits. IT provides necessary equipment and access.' },
      { name: 'Week 1: Team Integration', description: 'The new hire\'s manager introduces them to the team, sets up initial meetings, and outlines a 30-day plan.' },
      { name: 'First 90 Days: Check-ins', description: 'Regular check-in meetings are scheduled with the manager and HR to track progress, answer questions, and provide feedback.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Performance Evaluation',
    slug: 'employee-performance-evaluation',
    description: 'Structures and standardizes performance evaluation processes based on market best practices to ensure consistent employee assessment.',
    purpose: 'This workflow provides a structured and consistent framework for conducting employee performance reviews. It ensures that evaluations are fair, objective, and tied to clear goals and competencies. By automating the process, it helps managers and employees prepare for reviews, document conversations, and set meaningful goals for the future, fostering a culture of continuous improvement.',
    steps: [
      { name: 'Goal Setting', description: 'At the beginning of the review period, the employee and manager collaborate to set clear, measurable goals.' },
      { name: 'Self-Assessment', description: 'Before the review meeting, the employee completes a self-assessment of their performance against their goals.' },
      { name: 'Manager Evaluation', description: 'The manager writes a performance evaluation, incorporating feedback and performance data.' },
      { name: 'Review Meeting & Finalization', description: 'The manager and employee meet to discuss the review, finalize ratings, and set development goals for the next period.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Promotion Process',
    slug: 'employee-promotion-process',
    description: 'Evaluates and promotes deserving employees through an intuitive interface and structured process.',
    purpose: 'This workflow standardizes the process for promoting employees, ensuring decisions are based on merit, performance, and clear criteria. It creates a transparent and equitable pathway for career advancement within the company. This helps to motivate employees, retain top talent, and ensure that leadership roles are filled by qualified internal candidates.',
    steps: [
        { name: 'Nomination/Application', description: 'A manager nominates an employee for promotion, or an employee applies for an open senior role, providing a justification based on performance.' },
        { name: 'Promotion Committee Review', description: 'A cross-functional promotion committee reviews the candidate\'s performance history, skills, and readiness for the new role.' },
        { name: 'Interview/Assessment', description: 'The candidate may go through an interview process or assessment to evaluate their suitability for the higher-level position.' },
        { name: 'Decision and Communication', description: 'The committee makes a final decision. If approved, HR and the manager communicate the promotion and new compensation details to the employee.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Referral',
    slug: 'employee-referral',
    description: 'Facilitates faster hiring by leveraging current employees\' networks, automating referral tracking and candidate management.',
    purpose: 'This workflow streamlines the employee referral process, making it easy for current employees to refer candidates from their professional networks. It automates the tracking of referrals, ensuring that employees receive their referral bonuses promptly if their candidate is hired. This is often the most effective and cost-efficient source of high-quality candidates.',
    steps: [
        { name: 'Employee Submits Referral', description: 'An employee submits a candidate\'s resume and contact information through a dedicated referral portal.' },
        { name: 'Recruiter Review', description: 'The recruiter reviews the referred candidate and determines if they are a potential fit for any open roles.' },
        { name: 'Candidate Enters Hiring Process', description: 'If the candidate is a match, they are entered into the standard interview process, with their source tracked as a referral.' },
        { name: 'Bonus Payout', description: 'If the referred candidate is hired and passes their probationary period, the referring employee automatically receives their referral bonus.' },
    ]
  },
  {
    category: 'Human Resources',
    name: 'Employee Time Tracking',
    slug: 'employee-time-tracking',
    description: 'Automates tracking of employee working hours, offering filtering capabilities and time reports for various tasks.',
    purpose: 'This workflow provides an accurate and automated way to track employee work hours, especially for hourly or project-based employees. It simplifies payroll processing, ensures compliance with labor laws, and provides valuable data for project costing and resource planning. It gives managers visibility into team productivity and workload distribution.',
    steps: [
        { name: 'Log Hours', description: 'Employees log their hours daily or weekly against specific projects or tasks.' },
        { name: 'Manager Approval', description: 'At the end of the pay period, managers review and approve their team\'s timesheets.' },
        { name: 'Reporting', description: 'The system generates reports on project hours, overtime, and labor costs.' },
        { name: 'Payroll Export', description: 'Approved timesheet data is exported to the payroll system for accurate payment.' },
    ]
  },

  // Sales Templates
  {
    category: 'Sales',
    name: 'Cold Calling',
    slug: 'cold-calling',
    description: 'A structured process to guide sales teams in cold calling potential customers and closing big deals.',
    purpose: 'This workflow provides a systematic approach to cold calling, turning it from a dreaded task into a structured process. It helps sales reps organize their lead lists, track their call activity, and follow a consistent script and follow-up sequence. This increases efficiency, improves call outcomes, and provides managers with clear data on team activity and effectiveness.',
    steps: [
        { name: 'Lead List Preparation', description: 'A list of target prospects is prepared and imported into the system.' },
        { name: 'Initial Call & Qualification', description: 'The sales rep makes the initial call, following a script to qualify the lead based on BANT (Budget, Authority, Need, Timeline).' },
        { name: 'Follow-up Sequence', description: 'Based on the call outcome, the lead is entered into an automated follow-up sequence of emails and scheduled calls.' },
        { name: 'Meeting Scheduled/Lead Nurtured', description: 'The goal is to either schedule a discovery meeting or place the lead into a long-term nurturing campaign.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Commercial Proposal for Services',
    slug: 'commercial-proposal-for-services',
    description: 'Guides through the preparation and management of commercial proposals for services.',
    purpose: 'This workflow standardizes the creation and approval process for sales proposals. It ensures that all proposals are accurate, professional, and consistent with company branding and pricing policies. By using templates and an approval chain, it reduces errors, speeds up the sales cycle, and ensures that legal and financial teams have oversight before a proposal is sent to a client.',
    steps: [
      { name: 'Draft Proposal', description: 'A salesperson uses a standardized template to create a draft proposal, detailing the scope of work, timeline, and pricing.' },
      { name: 'Peer/Manager Review', description: 'The draft is reviewed by a peer or manager for accuracy and strategic alignment.' },
      { name: 'Legal & Finance Approval', description: 'For larger deals, the proposal is routed to the legal and finance departments for final approval.' },
      { name: 'Send to Client', description: 'Once fully approved, the final proposal is sent to the client for their review and signature.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Contract Renewal',
    slug: 'contract-renewal',
    description: 'Manages contract renewal processes carried out by legal teams, providing opportunities to enhance contracts with latest organizational standards.',
    purpose: 'This workflow automates the contract renewal process, ensuring that no renewal dates are missed and giving the sales team ample time to negotiate with the client. It automatically flags contracts that are approaching their renewal date and kicks off a series of tasks for the account manager, from initial outreach to final signature. This proactive approach increases customer retention and provides an opportunity to upsell or cross-sell.',
    steps: [
      { name: 'Renewal Flag', description: '90 days before a contract\'s expiration date, the system automatically creates a renewal opportunity and assigns it to the account manager.' },
      { name: 'Client Outreach', description: 'The account manager contacts the client to discuss the renewal, their satisfaction, and any potential changes to the contract.' },
      { name: 'Generate Renewal Quote/Contract', description: 'A renewal contract is generated, incorporating any updated pricing or terms.' },
      { name: 'Signature & Closing', description: 'The contract is sent to the client for signature, and upon signing, the contract term is updated in the CRM.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Exceptional Pricing Approval for SaaS',
    slug: 'exceptional-pricing-approval-for-saas',
    description: 'Manages approval of exceptional pricing for SaaS companies with priority setting, due date establishment, and automatic notifications.',
    purpose: 'In SaaS sales, offering a non-standard discount often requires approval. This workflow formalizes that process. It allows a salesperson to request a special discount with justification, and routes it through a pre-defined approval chain (e.g., Sales Manager -> VP of Sales -> Finance). This ensures that discounts are granted strategically, are properly documented, and do not negatively impact financial forecasts.',
    steps: [
        { name: 'Discount Request', description: 'A salesperson submits a request for a special discount, providing the deal size, customer name, and a business justification.' },
        { name: 'Sales Manager Approval', description: 'The regional sales manager reviews the request and provides the first level of approval.' },
        { name: 'VP of Sales Approval', description: 'For discounts above a certain percentage, the request is escalated to the VP of Sales for final approval.' },
        { name: 'Update Quote', description: 'Once approved, the discount is applied to the official quote in the CRM and sent to the customer.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Franchise Lead Management',
    slug: 'franchise-lead-management',
    description: 'Designed to manage prospective franchisees for franchise owners through a structured pipeline.',
    purpose: 'This workflow provides a structured pipeline for managing potential franchisees, from their initial inquiry to signing a franchise agreement. It ensures that all leads are consistently nurtured, and that all legal and financial due diligence is completed in a standardized manner. This helps franchise owners grow their network with qualified and well-vetted partners.',
    steps: [
        { name: 'Initial Inquiry', description: 'A prospective franchisee fills out an inquiry form on the website.' },
        { name: 'Qualification Call', description: 'A franchise development manager conducts an initial call to assess financial viability and business experience.' },
        { name: 'FDD Review', description: 'Qualified candidates are sent the Franchise Disclosure Document (FDD) for review.' },
        { name: 'Discovery Day & Approval', description: 'Final candidates are invited to a "Discovery Day" to meet the corporate team before a final decision is made.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Funding Request Pipeline',
    slug: 'funding-request-pipeline',
    description: 'A step-by-step process to aid in creating and managing funding strategies.',
    purpose: 'This workflow is designed for startups and organizations seeking investment. It structures the fundraising process, helping to manage a pipeline of potential investors (VCs, angels, etc.) from initial contact to a closed funding round. It helps keep track of all communications, follow-ups, and due diligence documents, making a complex and often chaotic process more manageable.',
    steps: [
        { name: 'Investor Prospecting', description: 'Create a target list of potential investors who are a good fit for the company\'s stage and industry.' },
        { name: 'Initial Outreach', description: 'Send personalized introduction emails to the target investors.' },
        { name: 'First Meeting/Pitch', description: 'Conduct initial pitch meetings with interested investors.' },
        { name: 'Due Diligence', description: 'Manage the due diligence process by providing requested documents through a secure data room.' },
        { name: 'Term Sheet & Closing', description: 'Negotiate the term sheet and work with legal counsel to close the funding round.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Lead Generation Form',
    slug: 'lead-generation-form',
    description: 'Helps skyrocket lead generation and conversion rates through customizable, easy-to-use forms.',
    purpose: 'This workflow automates what happens *after* a potential customer fills out a form on your website. Instead of just sending an email notification, it can automatically create a new lead in your CRM, assign it to a sales rep based on territory, and enroll the lead in a welcome email sequence. This ensures that every new lead is followed up with instantly and consistently.',
    steps: [
        { name: 'Form Submission', description: 'A visitor submits a lead generation form on the website.' },
        { name: 'Create Lead in CRM', description: 'A new lead record is automatically created in the company\'s CRM (e.g., Salesforce).' },
        { name: 'Lead Assignment', description: 'The lead is automatically assigned to a sales representative based on rules (e.g., geographic territory, company size).' },
        { name: 'Initial Follow-up', description: 'An automated, personalized email is sent to the lead, and a task is created for the sales rep to make a follow-up call within 24 hours.' },
    ]
  },
  {
    category: 'Sales',
    name: 'New Location Prospecting for Franchises',
    slug: 'new-location-prospecting-for-franchises',
    description: 'Prospects new partners for franchise projects, arranging documents, designing business plans, and setting contractual details.',
    purpose: 'This workflow is for franchise businesses looking to expand into new territories. It provides a structured process for identifying promising locations, evaluating their market potential, and recruiting franchisees for those specific areas. It helps to ensure that expansion is strategic and data-driven.',
    steps: [
        { name: 'Market Analysis', description: 'Analyze demographic and market data to identify promising new territories for expansion.' },
        { name: 'Location Scouting', description: 'Identify and evaluate potential retail or office locations within the target territories.' },
        { name: 'Targeted Recruitment', description: 'Launch a marketing campaign to recruit potential franchisees specifically for the identified locations.' },
        { name: 'Site Approval & Lease Negotiation', description: 'Once a franchisee is signed, work with them to secure the approved location and negotiate the lease.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Outbound Marketing Prospecting Leads',
    slug: 'outbound-marketing-prospecting-leads',
    description: 'Helps sales reps in outbound business development, gathering information to identify and contact qualified leads.',
    purpose: 'This workflow provides a structured process for outbound sales teams. It helps Sales Development Reps (SDRs) to consistently research, contact, and qualify potential leads before handing them off to an Account Executive. This specialization of roles makes the sales process more efficient and ensures that closers are spending their time on the most qualified opportunities.',
    steps: [
        { name: 'Prospect Research', description: 'SDR researches companies and contacts that fit the Ideal Customer Profile.' },
        { name: 'Multi-touch Cadence', description: 'SDR engages the prospect through a pre-defined sequence of emails, phone calls, and LinkedIn messages over a period of 2-3 weeks.' },
        { name: 'Qualification & Discovery', description: 'Once a prospect responds, the SDR conducts a brief discovery call to qualify the lead.' },
        { name: 'Meeting Handoff', description: 'If the lead is qualified, the SDR schedules a meeting for them with an Account Executive and transfers ownership of the opportunity.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Real Estate Sales',
    slug: 'real-estate-sales',
    description: 'Manages real estate sales processes from listing to contract with ease and efficiency.',
    purpose: 'This workflow provides a comprehensive checklist for real estate agents to manage a property sale from the initial listing agreement to the final closing. It helps agents stay organized, ensures all legal and contractual obligations are met, and provides a professional and smooth experience for their clients. It tracks all the key milestones and deadlines in a complex transaction.',
    steps: [
        { name: 'Listing Agreement Signed', description: 'The agent signs a listing agreement with the seller and prepares the property for market (photos, description, etc.).' },
        { name: 'Marketing & Showings', description: 'The property is listed on the MLS and other platforms. The agent coordinates showings and open houses.' },
        { name: 'Offer, Negotiation & Acceptance', description: 'The agent receives and presents offers to the seller, negotiates terms, and gets a final agreement in writing.' },
        { name: 'Escrow & Inspections', description: 'The signed contract is sent to the title/escrow company. The agent coordinates inspections and negotiates any repairs.' },
        { name: 'Closing', description: 'The agent ensures all paperwork is complete, and coordinates the final closing appointment where ownership is transferred.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Request for Proposal',
    slug: 'request-for-proposal',
    description: 'Simplifies the selection of IT providers and finding the best tech partners using structured RFP processes.',
    purpose: 'This workflow is for companies that need to formally evaluate and select a vendor for a significant project or purchase. It structures the Request for Proposal (RFP) process, ensuring that the company\'s requirements are clearly defined, all potential vendors are evaluated against the same criteria, and the final decision is well-documented and defensible.',
    steps: [
        { name: 'Draft RFP', description: 'The project team collaborates to create a detailed RFP document outlining the project scope, requirements, and evaluation criteria.' },
        { name: 'Vendor Distribution', description: 'The RFP is sent to a list of pre-qualified vendors.' },
        { name: 'Vendor Q&A and Submission', description: 'A period is provided for vendors to ask questions before they submit their final proposals.' },
        { name: 'Proposal Evaluation', description: 'A selection committee scores each proposal against a pre-defined rubric.' },
        { name: 'Vendor Selection & Negotiation', description: 'The top-scoring vendors are invited for final presentations before a winner is selected and contract negotiations begin.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Reseller Prospecting',
    slug: 'reseller-prospecting',
    description: 'Organizes and coordinates stages of identifying, evaluating, and concluding reseller prospects.',
    purpose: 'This workflow is for companies that sell through a channel of resellers or partners. It provides a structured process for identifying, recruiting, and onboarding new reseller partners. This ensures that the company builds a healthy and productive channel by partnering with resellers who are well-aligned and committed to success.',
    steps: [
        { name: 'Identify Potential Partners', description: 'The channel manager researches and identifies potential reseller companies that serve the target market.' },
        { name: 'Initial Outreach & Qualification', description: 'The channel manager contacts the potential partner to gauge their interest and assess their fit with the partner program.' },
        { name: 'Partnership Proposal & Agreement', description: 'A formal partnership proposal is presented, and if there is mutual interest, a reseller agreement is signed.' },
        { name: 'Onboarding & Training', description: 'The new partner is onboarded, receiving sales and technical training on the company\'s products.' },
    ]
  },
  {
    category: 'Sales',
    name: 'Sales CRM',
    slug: 'sales-crm',
    description: 'Connects all pipeline stages from lead generation to conversion in a comprehensive CRM template.',
    purpose: 'This workflow represents a standard sales pipeline within a CRM. It allows sales teams to track opportunities through various stages, from initial qualification to a closed deal. It provides managers with a clear view of the team\'s sales pipeline, helps in forecasting revenue, and identifies bottlenecks in the sales process.',
    steps: [
      { name: 'Qualification', description: 'A new opportunity is created and the salesperson determines if it\'s a legitimate sales opportunity.' },
      { name: 'Discovery', description: 'The salesperson conducts a discovery call to deeply understand the prospect\'s needs and challenges.' },
      { name: 'Solution Demo', description: 'The salesperson demonstrates how their product or service can solve the prospect\'s specific problems.' },
      { name: 'Proposal & Negotiation', description: 'A formal proposal is sent, and terms are negotiated.' },
      { name: 'Closed Won / Closed Lost', description: 'The deal is finalized, and the outcome is recorded.' },
    ]
  },

  // Marketing Templates
  {
    category: 'Marketing',
    name: 'A/B Testing',
    slug: 'ab-testing',
    description: 'Organizes and standardizes A/B testing processes to aid business growth through systematic testing.',
    purpose: 'This workflow provides a structured process for running A/B tests on websites, landing pages, or email campaigns. It ensures that every test has a clear hypothesis, a defined success metric, and is run for a statistically significant period. This systematic approach helps marketing teams make data-driven decisions to improve conversion rates and user engagement.',
    steps: [
      { name: 'Formulate Hypothesis', description: 'Define the element to be tested (e.g., a headline), the proposed change, and the expected outcome (e.g., "Changing the headline to be more benefit-focused will increase button clicks by 10%").' },
      { name: 'Create Variation', description: 'Create the "B" version of the page or email with the proposed change.' },
      { name: 'Run Test', description: 'Use A/B testing software to split traffic between the original (A) and the variation (B) until statistical significance is reached.' },
      { name: 'Analyze Results & Implement Winner', description: 'Analyze the results to see which version performed better. If the variation wins, it becomes the new control for future tests.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Advertising Campaign',
    slug: 'advertising-campaign',
    description: 'Used to create, execute, and evaluate advertisement campaigns from planning to analysis.',
    purpose: 'This workflow provides a comprehensive checklist for planning, launching, and managing a digital advertising campaign. It ensures that all key elements, from audience targeting to creative development and budget allocation, are thoughtfully considered. This structured approach helps to maximize the return on ad spend (ROAS) and provides clear data for measuring campaign effectiveness.',
    steps: [
        { name: 'Campaign Planning', description: 'Define the campaign goal (e.g., lead generation), target audience, key message, budget, and KPIs.' },
        { name: 'Creative Development', description: 'Create the ad copy, images, and/or videos for the campaign.' },
        { name: 'Campaign Setup & Launch', description: 'Set up the campaign in the ad platform (e.g., Google Ads, Facebook Ads), configuring targeting, bidding, and tracking.' },
        { name: 'Monitoring & Optimization', description: 'Monitor campaign performance daily, and make adjustments to targeting, creative, or bids to optimize results.' },
        { name: 'Post-Campaign Analysis', description: 'At the end of the campaign, create a report analyzing the overall performance against the initial goals and KPIs.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Marketing Agency Client Onboarding',
    slug: 'marketing-agency-client-onboarding',
    description: 'Helps marketing agencies flawlessly welcome new clients through structured onboarding processes.',
    purpose: 'This workflow provides a standardized process for marketing agencies to onboard new clients. A smooth onboarding is crucial for setting the right expectations, building trust, and gathering all the necessary information to kick off a successful engagement. It ensures that every client has a consistent and professional first impression of the agency.',
    steps: [
        { name: 'Kick-off Call', description: 'Hold a kick-off meeting with the new client to introduce the team, align on goals, and define communication protocols.' },
        { name: 'Access & Information Gathering', description: 'Collect all necessary access credentials (e.g., website, ad accounts, analytics) and brand assets.' },
        { name: 'Strategy Development', description: 'Develop the initial 90-day marketing strategy and present it to the client for feedback and approval.' },
        { name: 'Campaign Launch', description: 'Launch the first set of campaigns as outlined in the approved strategy.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Agency Project Development',
    slug: 'agency-project-development',
    description: 'A comprehensive system for managing agency project developments from inception to delivery.',
    purpose: 'This workflow provides a framework for agencies to manage client projects from start to finish. It breaks down a project into key phases, ensuring that scope is clearly defined, client feedback is incorporated at the right stages, and the project stays on time and on budget. It provides visibility for both the agency team and the client throughout the project lifecycle.',
    steps: [
        { name: 'Discovery & Scope Definition', description: 'Work with the client to define the project goals, deliverables, timeline, and budget.' },
        { name: 'Design & Prototyping', description: 'Create wireframes and visual mockups for client review and approval.' },
        { name: 'Development & Implementation', description: 'Build and develop the project based on the approved designs.' },
        { name: 'Client Review & Revisions', description: 'Present the developed work to the client for feedback and make necessary revisions.' },
        { name: 'Launch & Handoff', description: 'Deploy the final project and hand off all necessary assets and documentation to the client.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Buyer Personas',
    slug: 'buyer-personas',
    description: 'Understands customer profiles and behavior using market research and existing customer data.',
    purpose: 'This workflow structures the process of creating detailed buyer personas for a business. Buyer personas are semi-fictional representations of your ideal customers. Creating them helps marketing and sales teams to better understand their target audience, tailor their messaging, and develop products and services that meet their specific needs. It ensures that all customer-facing activities are aligned and empathetic.',
    steps: [
        { name: 'Data Gathering', description: 'Collect data about your existing customers through surveys, interviews, and analytics data.' },
        { name: 'Identify Patterns', description: 'Analyze the data to identify common patterns in demographics, goals, challenges, and motivations.' },
        { name: 'Draft Personas', description: 'Create 2-4 detailed personas, each with a name, photo, and a narrative describing their role, goals, and pain points.' },
        { name: 'Socialize & Utilize', description: 'Share the personas across the company and use them to guide marketing campaigns, sales scripts, and product development.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Campaign Briefing',
    slug: 'campaign-briefing',
    description: 'Collects multiple requests for marketing teams to create and execute ad campaigns.',
    purpose: 'This workflow acts as a centralized intake process for internal requests for new marketing campaigns. It provides a standardized form for other departments (like sales or product) to submit their requests to the marketing team. This ensures that the marketing team receives all the necessary information (e.g., goal, target audience, budget, timeline) upfront, allowing them to prioritize and execute requests efficiently.',
    steps:
     [
        { name: 'Request Submission', description: 'A stakeholder from another department fills out a campaign request brief.' },
        { name: 'Marketing Triage', description: 'The marketing lead reviews the request for completeness and alignment with overall company goals.' },
        { name: 'Prioritization & Scheduling', description: 'The request is prioritized and added to the marketing campaign calendar.' },
        { name: 'Campaign Execution', description: 'The campaign is assigned to a marketing manager to be executed.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Co-marketing Management',
    slug: 'co-marketing-management',
    description: 'Manages joint marketing campaigns between two brands through coordinated processes.',
    purpose: 'This workflow provides a structure for managing co-marketing campaigns with a partner company. It helps to coordinate all the moving parts, from initial planning and content creation to joint promotion and lead sharing. A structured process ensures that both partners are aligned on goals, responsibilities, and timelines, leading to a more successful and smoothly executed partnership.',
    steps: [
        { name: 'Partnership Agreement', description: 'Define the goals, scope, responsibilities, and success metrics for the co-marketing campaign in a formal agreement.' },
        { name: 'Joint Content Creation', description: 'Collaborate on creating the core content piece for the campaign (e.g., a webinar, ebook, or research report).' },
        { name: 'Coordinated Promotion', description: 'Both partners promote the content to their respective audiences through email, social media, and other channels.' },
        { name: 'Lead Sharing & Follow-up', description: 'Leads generated from the campaign are shared according to the agreement, and each partner follows up with their respective leads.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Content Marketing',
    slug: 'content-marketing',
    description: 'A comprehensive template for controlling, executing, and delivering impeccable content marketing strategies.',
    purpose: 'This workflow provides an end-to-end process for a content marketing team, covering everything from idea generation to publication and promotion. It helps to ensure a consistent output of high-quality content that is aligned with SEO strategy and business goals. It provides visibility into the entire content pipeline for all stakeholders.',
    steps: [
      { name: 'Ideation & Keyword Research', description: 'The content team brainstorms ideas and conducts keyword research to identify topics that will attract the target audience.' },
      { name: 'Content Brief & Outline', description: 'A detailed brief and outline are created for the chosen topic and assigned to a writer.' },
      { name: 'Drafting & Editing', description: 'The writer drafts the content, which then goes through a review and editing process.' },
      { name: 'Publication & Promotion', description: 'The final content is published on the blog and promoted through various channels like email newsletters and social media.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Contest Management',
    slug: 'contest-management',
    description: 'Manages and tracks contest subscriptions and contender evaluations.',
    purpose: 'This workflow structures the process of running a contest or giveaway. It covers everything from promoting the contest and collecting entries to selecting a winner and fulfilling the prize. A structured process ensures that the contest is run fairly, complies with any legal requirements, and achieves its marketing goal (e.g., lead generation, brand awareness).',
    steps: [
        { name: 'Contest Setup & Promotion', description: 'Define the contest rules, prize, and duration. Create a landing page and promote the contest.' },
        { name: 'Entry Collection', description: 'Collect entries through a form on the landing page.' },
        { name: 'Winner Selection', description: 'At the end of the contest period, select a winner randomly or based on judging criteria.' },
        { name: 'Prize Fulfillment & Announcement', description: 'Contact the winner to arrange for prize fulfillment and announce the winner publicly.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Conversion Rate Optimization Process',
    slug: 'conversion-rate-optimization-process',
    description: 'Aids in discovering optimal website page layouts through systematic testing and data analysis.',
    purpose: 'This workflow, also known as CRO, provides a continuous loop for improving the performance of a website or landing page. It is a data-driven process that involves analyzing user behavior, forming hypotheses, and running A/B tests to systematically increase the percentage of users who take a desired action (e.g., sign up, make a purchase).',
    steps: [
        { name: 'Analyze Data', description: 'Use analytics and user behavior tools (like heatmaps) to identify pages with high drop-off rates or low conversion rates.' },
        { name: 'Formulate Hypothesis', description: 'Based on the analysis, form a hypothesis for a change that could improve performance (e.g., "Making the CTA button bigger will increase clicks").' },
        { name: 'A/B Test', description: 'Run an A/B test to compare the original page with a version that includes the proposed change.' },
        { name: 'Implement Winner', description: 'If the new version proves to be statistically better, implement it as the new control and repeat the cycle.' },
    ]
  },
  {
    category: 'Marketing',
    name: 'Copy Management',
    slug: 'copy-management',
    description: 'Structures, organizes, and reviews text content for businesses.',
    purpose: 'This workflow manages the process of creating and approving marketing copy for various assets like websites, ads, or emails. It ensures that all copy is reviewed for brand voice, clarity, and accuracy before it is published. It provides a clear chain of command for revisions and final sign-off, preventing errors and inconsistent messaging.',
    steps: [
        { name: 'Copy Request', description: 'A stakeholder requests new copy for a specific asset.' },
        { name: 'Copywriter Drafts', description: 'The request is assigned to a copywriter who writes the first draft.' },
        { name: 'Internal Review & Revisions', description: 'The draft is reviewed by the marketing manager and other stakeholders, and revisions are made.' },
        { name: 'Final Approval', description: 'The final version of the copy is approved and ready for use in the design or campaign.' },
    ]
  },

  // Real Estate Templates
  {
    category: 'Real Estate',
    name: 'Asset and Leasing Management',
    slug: 'asset-and-leasing-management',
    description: 'Manages real estate assets and their leasing status through comprehensive tracking systems.',
    purpose: 'This workflow is for commercial property managers. It helps to manage a portfolio of properties, tracking key information for each asset, such as lease expiration dates, tenant information, maintenance schedules, and financial performance. It provides a centralized dashboard for overseeing the entire portfolio and ensures that important dates and tasks are not missed.',
    steps: [
        { name: 'Lease Expiration Monitoring', description: 'The system automatically flags leases that are due for renewal within the next 6-12 months.' },
        { name: 'Tenant Communication', description: 'Manage all communication with tenants, from maintenance requests to rent reminders.' },
        { name: 'Vendor Management', description: 'Track work orders and payments for vendors who perform maintenance and repairs on the properties.' },
        { name: 'Financial Reporting', description: 'Generate monthly reports on rent collection, expenses, and overall profitability for each asset.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Brokerage Pipeline',
    slug: 'brokerage-pipeline',
    description: 'Manages real estate selling and brokerage processes in a single interface.',
    purpose: 'This workflow provides a CRM-like pipeline for a real estate brokerage to manage all of its active listings and buyer clients. It allows the brokerage owner or manager to track the progress of each agent\'s deals, forecast commissions, and ensure that the brokerage is providing a consistent level of service to all clients.',
    steps: [
        { name: 'New Client Intake', description: 'A new seller or buyer client is added to the system.' },
        { name: 'Active Search/Listing', description: 'The status of the client is tracked, whether they are actively looking for homes or their property is on the market.' },
        { name: 'Under Contract', description: 'Once an offer is accepted, the deal moves to the "Under Contract" stage, and key deadlines are tracked.' },
        { name: 'Closed Deal', description: 'Once the deal closes, the transaction details are recorded for commission calculation and reporting.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Buy-Side Real Estate Management',
    slug: 'buy-side-real-estate-management',
    description: 'Helps manage clients\' real estate needs and track suitable listings for buyers.',
    purpose: 'This workflow is specifically for real estate agents representing buyers. It helps the agent to manage their pipeline of active buyers, track their search criteria, and log the properties that have been shown to them. It provides a structured way to manage multiple clients and ensure a high level of service and follow-up.',
    steps: [
        { name: 'Initial Buyer Consultation', description: 'The agent meets with a new buyer client to understand their needs, budget, and desired location.' },
        { name: 'Property Search & Showings', description: 'The agent sets up an automated property search for the client and schedules showings for interesting properties.' },
        { name: 'Offer Writing & Negotiation', description: 'When the buyer finds a property they like, the agent helps them write an offer and negotiates with the seller\'s agent.' },
        { name: 'Contract to Close', description: 'Once an offer is accepted, the agent guides the buyer through the inspection, appraisal, and loan process until closing.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Coworking Space Rental',
    slug: 'coworking-space-rental',
    description: 'Manages the rental of coworking spaces while maintaining effective communication with clients.',
    purpose: 'This workflow is for managing a coworking space. It automates the process of handling new member inquiries, onboarding new members, and managing the day-to-day needs of the community. It helps to provide a professional and seamless experience for members, from their first tour to their daily use of the space.',
    steps: [
        { name: 'Tour Request', description: 'A potential member requests a tour of the space through the website.' },
        { name: 'Membership Application & Agreement', description: 'After the tour, the prospect fills out a membership application and signs the agreement.' },
        { name: 'Member Onboarding', description: 'On their first day, the new member is given their keycard, wifi access, and an orientation of the space and community guidelines.' },
        { name: 'Room Booking & Support', description: 'Members can book conference rooms and submit support requests through a member portal.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Facilities Delivery',
    slug: 'facilities-delivery',
    description: 'Allows facilities teams to manage new installation requests efficiently.',
    purpose: 'This workflow is for corporate facilities teams. It manages requests for the installation or delivery of new equipment, furniture, or other assets within an office. It ensures that all requests are tracked, approved by the appropriate manager, and fulfilled in a timely and coordinated manner.',
    steps: [
        { name: 'Installation Request', description: 'An employee submits a request for a new item, such as a standing desk or an additional monitor.' },
        { name: 'Manager Approval', description: 'The employee\'s manager approves the request and the associated cost.' },
        { name: 'Procurement & Scheduling', description: 'The facilities team procures the item and schedules a time for delivery and installation.' },
        { name: 'Confirmation of Delivery', description: 'The employee confirms that the item has been received and installed correctly.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Facilities Management',
    slug: 'facilities-management',
    description: 'Manages requests for facilities adjustments, including maintenance, workstation setups, parking permits, and cleaning services.',
    purpose: 'This workflow acts as a help desk for a corporate facilities team. It provides a centralized place for employees to submit any request related to the physical office space. It allows the facilities team to track, prioritize, and assign all incoming requests, ensuring that the workplace is safe, clean, and functioning properly.',
    steps: [
        { name: 'Employee Submits Ticket', description: 'An employee submits a ticket for a facilities issue (e.g., "the light is out in my office," "I need to request a parking permit").' },
        { name: 'Ticket Triage & Assignment', description: 'The facilities manager triages the ticket and assigns it to the appropriate team member or vendor.' },
        { name: 'Work Completion', description: 'The assigned person completes the requested work.' },
        { name: 'Resolution Confirmation', description: 'The requesting employee is notified and confirms that the issue has been resolved to their satisfaction.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Industrial Building Project Request',
    slug: 'industrial-building-project-request',
    description: 'Manages new projects for industrial buildings, assigns suppliers, analyzes documentation, and documents operational impacts.',
    purpose: 'This workflow is for managing large-scale construction or renovation projects for industrial properties. It provides a structured process for evaluating project proposals, selecting contractors, and managing the project through to completion. It ensures that all stakeholders are kept informed and that the project stays on schedule and within budget.',
    steps: [
        { name: 'Project Proposal', description: 'A proposal for a new industrial building project is submitted, including plans, budget, and timeline.' },
        { name: 'Bidding & Contractor Selection', description: 'The project is put out to bid, and a general contractor is selected.' },
        { name: 'Permitting & Approvals', description: 'The contractor works to secure all necessary building permits and regulatory approvals.' },
        { name: 'Construction & Inspections', description: 'The project is managed through various phases of construction, with regular inspections to ensure quality and compliance.' },
        { name: 'Project Completion & Handover', description: 'The final project is inspected and formally handed over to the property owner.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Inventory Adjustment',
    slug: 'inventory-adjustment',
    description: 'Adjusts and manages inventory based on data inputs and required approvals.',
    purpose: 'This workflow provides a formal process for making manual adjustments to inventory records in a warehouse or retail store. This is necessary to account for things like breakage, theft, or clerical errors. A structured workflow ensures that all adjustments are properly justified, approved, and documented, maintaining the accuracy of the inventory system.',
    steps: [
        { name: 'Adjustment Request', description: 'A warehouse or store manager submits a request to adjust the quantity of a specific item, providing a reason for the change.' },
        { name: 'Supervisor Approval', description: 'A supervisor reviews and approves the adjustment request.' },
        { name: 'Inventory System Update', description: 'The approved adjustment is entered into the inventory management system.' },
        { name: 'Cycle Count', description: 'The adjustment may trigger a cycle count of the item to confirm the new quantity is accurate.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Inventory Inbound for E-commerce',
    slug: 'inventory-inbound-for-e-commerce',
    description: 'Manages the receipt and inventory of goods in e-commerce operations.',
    purpose: 'This workflow manages the process of receiving new inventory at an e-commerce warehouse. It ensures that all incoming shipments are accurately counted, inspected for damage, and put away in the correct location. A smooth inbound process is crucial for maintaining accurate inventory levels and ensuring that products are available for sale as quickly as possible.',
    steps: [
        { name: 'Advance Shipping Notice (ASN)', description: 'A supplier sends an ASN, detailing what products are being shipped and when they will arrive.' },
        { name: 'Receiving', description: 'When the shipment arrives, warehouse staff scan the items and check them against the ASN and purchase order.' },
        { name: 'Quality Control', description: 'A sample of the items may be inspected for quality.' },
        { name: 'Put-away', description: 'The received items are moved to their designated storage locations in the warehouse, and the inventory system is updated.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Lease Management',
    slug: 'lease-management',
    description: 'Manages tenants from contract signing to turnover for real estate agencies.',
    purpose: 'This workflow provides a comprehensive process for real estate agencies to manage the entire lifecycle of a residential lease. It covers everything from marketing a vacant property to managing the tenant relationship and handling the move-out process. This helps to ensure a professional and consistent experience for both landlords and tenants.',
    steps: [
        { name: 'Property Listing & Marketing', description: 'Market the vacant rental property across various listing sites.' },
        { name: 'Applicant Screening', description: 'Process rental applications, including background and credit checks.' },
        { name: 'Lease Signing & Move-in', description: 'Sign the lease agreement and coordinate the key handover and move-in inspection.' },
        { name: 'Rent Collection & Maintenance', description: 'Manage monthly rent collection and coordinate any maintenance requests during the tenancy.' },
        { name: 'Move-out & Turnover', description: 'Conduct a move-out inspection, handle the security deposit return, and prepare the property for the next tenant.' },
    ]
  },
  {
    category: 'Real Estate',
    name: 'Lease Tracker',
    slug: 'lease-tracker',
    description: 'Registers, manages, and updates tenant information while controlling lease payments.',
    purpose: 'This workflow is a simplified CRM for landlords or property managers to track all their leases and tenants. It provides a central place to store tenant contact information, lease documents, payment history, and important dates. It helps landlords stay organized and ensures they have all the critical information about their properties and tenants at their fingertips.',
    steps: [
        { name: 'New Tenant Entry', description: 'Add a new tenant and their lease details to the system.' },
        { name: 'Rent Payment Tracking', description: 'Log rent payments each month and track any late payments.' },
        { name: 'Document Storage', description: 'Upload and store important documents like the lease agreement and move-in inspection report.' },
        { name: 'Key Date Reminders', description: 'The system provides reminders for important dates like lease expiration or planned rent increases.' },
    ]
  },

  // IT Operations Templates
  {
    category: 'IT Operations',
    name: 'Access Requests — Remote Work',
    slug: 'access-requests-remote-work',
    description: 'This process manages access requests for remote work to ensure company security.',
    purpose: 'This workflow standardizes how employees request access to company systems and applications when working remotely. It ensures that all requests are approved by the appropriate manager and that access is granted based on the principle of least privilege. This is crucial for maintaining security and compliance in a remote or hybrid work environment.',
    steps: [
      { name: 'Submit Access Request', description: 'Employee submits a request specifying the system they need access to and the business reason.' },
      { name: 'Manager Approval', description: 'The employee\'s manager approves the request, confirming the business need.' },
      { name: 'IT Fulfillment', description: 'The IT department provisions the access and notifies the employee.' },
      { name: 'Access Review', description: 'Access rights are periodically reviewed (e.g., quarterly) to ensure they are still necessary.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Asset Management',
    slug: 'it-asset-management',
    description: 'This process manages IT assets from request to delivery ensuring nothing is left behind.',
    purpose: 'This workflow tracks the lifecycle of all company IT assets, such as laptops, monitors, and phones. It covers the process from the initial procurement of a new asset to its assignment to an employee, and finally its recovery and decommissioning when an employee leaves. This helps to control IT costs, prevent loss of company property, and ensure that all assets are properly accounted for.',
    steps: [
      { name: 'Procurement', description: 'A new asset is purchased and its details (serial number, model, etc.) are entered into the asset management system.' },
      { name: 'Assignment', description: 'When a new employee is hired or an existing employee needs a new device, an asset is assigned to them.' },
      { name: 'Maintenance & Support', description: 'Any repairs or support issues related to the asset are tracked.' },
      { name: 'Asset Recovery', description: 'When an employee leaves the company, the asset is collected, wiped, and prepared for redeployment or disposal.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Change Management',
    slug: 'it-change-management',
    description: 'IT Change Management is a business process that involves the proactive or reactive implementation of changes in IT infrastructure to enhance service delivery.',
    purpose: 'This workflow provides a formal process for managing all changes to the IT environment, from server updates to software deployments. The goal is to minimize the risk of disruptions to business operations. It ensures that all changes are properly planned, tested, approved, and communicated before they are implemented.',
    steps: [
      { name: 'Change Request', description: 'A request for a change is submitted, detailing the proposed change, the reason for it, and the potential impact.' },
      { name: 'Risk Assessment & Planning', description: 'The change is assessed for its risk and impact, and a detailed implementation and backout plan is created.' },
      { name: 'Change Approval Board (CAB)', description: 'The change request is reviewed and approved by a Change Approval Board.' },
      { name: 'Implementation & Review', description: 'The change is implemented during a scheduled maintenance window. Afterwards, a post-implementation review is conducted to ensure it was successful.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Change Request',
    slug: 'it-change-request',
    description: 'Manage and track recurrent and new IT change requests for consistent data and results.',
    purpose: 'This workflow is the entry point to the larger Change Management process. It provides a standardized form for anyone in the organization to request a change to an IT system. It ensures that all necessary information is captured upfront, allowing the IT team to properly evaluate and prioritize the request.',
    steps: [
        { name: 'Submit Request Form', description: 'A user or system owner fills out a detailed form describing the desired change and the business justification.' },
        { name: 'Initial Triage', description: 'The IT change manager reviews the request for completeness and assigns it a priority level.' },
        { name: 'Assign to Team', description: 'The request is assigned to the relevant technical team for impact analysis and planning.' },
        { name: 'Schedule for CAB Review', description: 'Once the planning is complete, the change request is scheduled for review by the Change Approval Board.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Incident Management',
    slug: 'it-incident-management',
    description: 'This process is designed to manage and store all information about an IT incident systematically.',
    purpose: 'The goal of incident management is to restore normal service operation as quickly as possible and minimize the adverse impact on business operations. This workflow provides a structured process for responding to IT incidents, from initial report to final resolution. It ensures that incidents are logged, prioritized, and escalated correctly.',
    steps: [
      { name: 'Incident Detected & Logged', description: 'An IT incident (e.g., a system is down) is detected by monitoring tools or reported by a user, and a ticket is created.' },
      { name: 'Categorization & Prioritization', description: 'The incident is categorized and assigned a priority based on its impact and urgency.' },
      { name: 'Investigation & Diagnosis', description: 'An IT analyst investigates the incident to diagnose the root cause.' },
      { name: 'Resolution & Recovery', description: 'A fix is implemented, and service is restored. The resolution is documented in the ticket.' },
      { name: 'Incident Closure', description: 'After confirming with the user that service is restored, the incident ticket is formally closed.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Onboarding',
    slug: 'it-onboarding',
    description: 'The IT Onboarding process is designed to efficiently integrate new hires into the organization by providing them with the necessary tools and addressing any account related issues.',
    purpose: 'This workflow focuses specifically on the IT tasks required to onboard a new employee. It ensures that on their first day, the new hire has all the necessary hardware, software, and system access they need to be productive. It runs in parallel with the HR onboarding process and is crucial for a smooth new hire experience.',
    steps: [
        { name: 'HR Notifies IT of New Hire', description: 'HR creates a ticket for IT with the new hire\'s name, start date, and role.' },
        { name: 'Hardware Provisioning', description: 'IT prepares and configures a laptop and any other necessary hardware for the new hire.' },
        { name: 'Account Creation', description: 'IT creates user accounts for the new hire in all necessary systems (e.g., email, CRM, etc.).' },
        { name: 'Day 1 Setup', description: 'On the new hire\'s first day, an IT team member meets with them to set up their equipment and ensure all their accounts are working.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Onboarding Process',
    slug: 'it-onboarding-process',
    description: 'A process to standardize IT onboarding activities and ensure no information is missed.',
    purpose: 'This workflow is a more detailed checklist version of the IT Onboarding process. It breaks down the high-level tasks into smaller, more granular steps to ensure that nothing is missed. This is especially useful for larger organizations or for roles that require access to many different systems.',
    steps: [
        { name: 'Create Email Account', description: 'Create a new email account for the user.' },
        { name: 'Add to Distribution Lists', description: 'Add the user to the relevant email distribution lists.' },
        { name: 'Set up VPN Access', description: 'Configure and provide credentials for VPN access.' },
        { name: 'Install Standard Software', description: 'Install the standard suite of software on the user\'s laptop.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Order Management',
    slug: 'it-order-management',
    description: 'A process to track and manage IT maintenance and failure issues.',
    purpose: 'This workflow is used to manage orders for new IT hardware or software. It provides a process for employees to request new equipment, for managers to approve the purchase, and for the IT team to procure and deliver the items. It helps to control IT spending and provides a clear audit trail for all purchases.',
    steps: [
        { name: 'Employee Request', description: 'An employee submits a request for new hardware or software through a service catalog.' },
        { name: 'Manager Approval', description: 'The employee\'s manager approves the request and the associated cost.' },
        { name: 'IT Procurement', description: 'The IT team places the order with an approved vendor.' },
        { name: 'Delivery and Setup', description: 'When the item arrives, the IT team configures it and delivers it to the employee.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Problem Management',
    slug: 'it-problem-management',
    description: 'The IT Problem Management process aims to quickly resolve IT-related issues to prevent disruptions or downtime, understand root causes, and take preventive measures for business continuity.',
    purpose: 'Problem Management is different from Incident Management. While Incident Management is focused on restoring service quickly, Problem Management is focused on finding and fixing the underlying root cause of recurring incidents to prevent them from happening again. This workflow provides a structured way to conduct root cause analysis (RCA) and implement permanent fixes.',
    steps: [
      { name: 'Problem Identification', description: 'A problem is identified, often because of multiple related incidents. A problem ticket is created.' },
      { name: 'Root Cause Analysis (RCA)', description: 'A team is assigned to investigate the problem and identify the root cause.' },
      { name: 'Develop Workaround', description: 'In the short term, a workaround may be developed and communicated to help users bypass the issue.' },
      { name: 'Implement Permanent Fix', description: 'A permanent fix is developed, tested, and deployed to resolve the root cause.' },
      { name: 'Problem Closure', description: 'Once the fix is confirmed to be effective, the problem ticket is closed.' },
    ]
  },
    {
    category: 'IT Operations',
    name: 'IT Project Request',
    slug: 'it-project-request',
    description: 'Manage and track valuable project ideas to improve your company.',
    purpose: 'This workflow provides a formal process for any department to request a new IT project. It forces the requester to think through the business case, the expected benefits, and the high-level requirements. This allows the IT department and leadership to evaluate and prioritize potential projects based on their strategic value and alignment with company goals.',
    steps: [
        { name: 'Submit Project Idea', description: 'A business stakeholder submits an initial idea for a new IT project through a request form.' },
        { name: 'Initial Business Case Review', description: 'A steering committee or PMO reviews the idea to determine if it warrants further investigation.' },
        { name: 'Detailed Analysis & Scoping', description: 'If approved for analysis, a business analyst works with the stakeholder to develop a detailed business case and project scope.' },
        { name: 'Prioritization & Approval', description: 'The fully scoped project is presented to leadership for final approval and prioritization against other competing projects.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Release Management',
    slug: 'it-release-management',
    description: 'A process designed for IT departments to manage the release process from planning to review.',
    purpose: 'This workflow coordinates the process of bundling multiple approved changes into a single release and deploying it to the production environment. It ensures that all components of the release are tested together, and that the deployment is carefully planned and communicated to minimize business disruption. It provides a structured approach for managing major software or infrastructure updates.',
    steps: [
        { name: 'Release Planning', description: 'The release manager plans the scope and schedule of the upcoming release, bundling together multiple approved changes.' },
        { name: 'Build & Test', description: 'The release package is built and deployed to a staging environment for comprehensive testing.' },
        { name: 'Deployment', description: 'The release is deployed to the production environment during a scheduled maintenance window.' },
        { name: 'Post-Release Review', description: 'The team reviews the success of the release and documents any lessons learned.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'IT Service Request',
    slug: 'it-service-request',
    description: 'The IT Service Request process is a critical aspect of an organization\'s IT department. It ensures employees have access to required IT services for optimal performance, handling requests like password recovery, app access, new hardware provision, software license purchases and upgrades.',
    purpose: 'This workflow is for managing routine, pre-approved requests for IT services. Unlike an incident (something is broken) or a change (something is being altered), a service request is for a standard service that the IT department offers. This workflow automates the fulfillment of these common requests, making the process fast and efficient for both the employee and the IT team.',
    steps: [
      { name: 'Request from Service Catalog', description: 'An employee selects a standard service from the IT service catalog (e.g., "Request a new software license," "Reset my password").' },
      { name: 'Automated Approval (if needed)', description: 'For requests with a cost, it may be automatically routed to the employee\'s manager for approval.' },
      { name: 'Automated Fulfillment', description: 'Many requests, like password resets, can be fulfilled automatically. Others create a ticket for the service desk to handle manually.' },
      { name: 'Closure', description: 'The employee is notified that their request has been completed, and the ticket is closed.' },
    ]
  },
  {
    category: 'IT Operations',
    name: 'Tool Management',
    slug: 'tool-management',
    description: 'Manage and track your company\'s tool ordering, analysis, purchase, and approval process.',
    purpose: 'This workflow governs the process of acquiring new software tools for the company. It ensures that before a new tool is purchased, it is properly evaluated for its security, functionality, and cost-effectiveness. It prevents the proliferation of redundant or unsecure software and ensures that all software purchases are centrally managed and approved.',
    steps: [
        { name: 'New Tool Request', description: 'A team requests a new software tool, providing a business case and justification.' },
        { name: 'Security & Legal Review', description: 'The IT security and legal teams review the tool for compliance with company policies and data privacy regulations.' },
        { name: 'Financial Approval', description: 'The finance team approves the budget for the new tool.' },
        { name: 'Procurement & Onboarding', description: 'The procurement team purchases the tool, and IT assists with its initial setup and integration.' },
    ]
  },
  
  // Procurement Templates
  {
    category: 'Procurement',
    name: 'Business Contract Analysis',
    slug: 'business-contract-analysis',
    description: 'A process for creating and managing your company\'s contracts effectively.',
    purpose: 'This workflow provides a structured process for reviewing and approving new business contracts before they are signed. It ensures that all contracts are reviewed by the legal department for risk, by the finance department for financial implications, and by the relevant business owner for operational feasibility. This helps to protect the company from unfavorable terms and ensures that all contractual obligations are understood and manageable.',
    steps: [
        { name: 'Draft Contract Review', description: 'A business owner submits a draft contract for review.' },
        { name: 'Legal Review', description: 'The legal team reviews the contract for legal risks, liabilities, and compliance issues.' },
        { name: 'Finance Review', description: 'The finance team reviews the contract for pricing, payment terms, and budget impact.' },
        { name: 'Final Signature', description: 'Once all parties have approved, the contract is sent for signature by an authorized executive.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Make or Buy Decision',
    slug: 'make-or-buy-decision',
    description: 'This process helps in deciding the best options for onboarding new software.',
    purpose: 'This workflow provides a structured framework for deciding whether to build a new software solution in-house or buy a third-party tool. It forces the team to evaluate the costs, benefits, and risks of both options, including development costs, licensing fees, maintenance overhead, and time to market. This leads to a more strategic and financially sound decision.',
    steps: [
        { name: 'Define Requirements', description: 'Clearly define the business problem and the technical requirements for the solution.' },
        { name: 'Analyze "Buy" Option', description: 'Research and evaluate available third-party software solutions, including their cost, features, and integration capabilities.' },
        { name: 'Analyze "Make" Option', description: 'Estimate the cost, resources, and timeline required to build the solution in-house.' },
        { name: 'Compare & Decide', description: 'Compare the two options based on a variety of factors (cost, time, strategic control, etc.) and make a final recommendation.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Processing Changes and Creating POs',
    slug: 'processing-changes-and-creating-pos',
    description: 'This process saves time on completing purchase orders and updates process changes more efficiently.',
    purpose: 'This workflow manages the process of creating and modifying Purchase Orders (POs). It ensures that all purchases are properly authorized and documented. It also provides a process for handling changes to existing POs, such as quantity or price adjustments, ensuring that these changes are also approved and tracked.',
    steps: [
        { name: 'Purchase Requisition', description: 'A department submits a requisition for goods or services.' },
        { name: 'Generate PO', description: 'Once the requisition is approved, the procurement team generates a formal Purchase Order and sends it to the vendor.' },
        { name: 'Change Order Request', description: 'If changes are needed to the PO, a formal change order request is submitted with justification.' },
        { name: 'Approve & Update PO', description: 'The change order is approved, and a revised PO is issued to the vendor.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Procurement Approval Process',
    slug: 'procurement-approval-process',
    description: 'A process for reviewing and approving documents across your company.',
    purpose: 'This is a generic approval workflow that can be adapted for any procurement-related document, such as a new vendor contract, a purchase requisition, or an RFP. It provides a standardized and auditable way to route documents for review and signature, ensuring that the correct people have approved it before it becomes official.',
    steps: [
        { name: 'Document Submission', description: 'A user submits a document for approval.' },
        { name: 'Sequential Approval Chain', description: 'The document is automatically routed to a list of approvers in a specific order.' },
        { name: 'Notifications & Reminders', description: 'Approvers are notified by email, and automatic reminders are sent if they do not respond in a timely manner.' },
        { name: 'Final Approval & Archiving', description: 'Once all approvers have signed off, the document is considered approved and is automatically archived.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Procurement Request (Banking)',
    slug: 'procurement-request-banking',
    description: 'This process is designed to manage the purchase request, approval, bidding, and negotiation phases in the banking sector.',
    purpose: 'This workflow is tailored for the specific procurement needs of the banking industry, which often involve stringent compliance and security requirements. It manages the entire procurement lifecycle, from the initial request to a rigorous vendor selection and bidding process, ensuring that all purchases meet the bank\'s high standards for security, reliability, and regulatory compliance.',
    steps: [
        { name: 'Request & Business Case', description: 'A department submits a procurement request with a detailed business case and requirements.' },
        { name: 'Compliance & Security Review', description: 'The request is reviewed by compliance and IT security teams to ensure it meets all regulatory and security standards.' },
        { name: 'Vendor Bidding Process', description: 'A formal bidding process is initiated with a list of pre-vetted vendors.' },
        { name: 'Vendor Selection & Contracting', description: 'A vendor is selected based on the bidding results, and contract negotiations begin.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Purchase Process',
    slug: 'purchase-process',
    description: 'A digitized and automated purchasing process providing complete visibility and control of purchase requisitions.',
    purpose: 'This workflow digitizes the entire purchase requisition process, from request to payment. It provides transparency into all company spending, helps to control costs by enforcing budget checks and approval rules, and reduces the administrative overhead for the procurement and finance teams. It creates a single source of truth for all purchases.',
    steps: [
      { name: 'Create Requisition', description: 'An employee creates a purchase requisition for a needed good or service.' },
      { name: 'Manager & Budget Approval', description: 'The requisition is routed to the employee\'s manager for approval, and the system checks it against the department\'s budget.' },
      { name: 'Create Purchase Order (PO)', description: 'Once approved, a PO is automatically generated and sent to the selected vendor.' },
      { name: 'Goods Receipt & Invoice Matching', description: 'When the goods are received, the delivery is matched against the PO. When the invoice arrives, it is matched against both the PO and the goods receipt (3-way match).' },
      { name: 'Payment', description: 'If the 3-way match is successful, the invoice is scheduled for payment.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Request Management',
    slug: 'request-management',
    description: 'A process to centralize and manage all your requests efficiently.',
    purpose: 'This is a general-purpose workflow for managing any type of internal request. It provides a single, centralized portal for employees to submit requests, and a dashboard for service teams (like IT, HR, or Facilities) to track, manage, and fulfill those requests. It improves efficiency and provides visibility into the workload and performance of service departments.',
    steps: [
        { name: 'Submit Request Ticket', description: 'An employee submits a request through a central portal.' },
        { name: 'Triage & Assign', description: 'A team lead reviews the new ticket and assigns it to a team member.' },
        { name: 'Work in Progress', description: 'The assigned team member works on fulfilling the request, communicating with the requester as needed.' },
        { name: 'Resolution', description: 'The request is fulfilled, and the ticket is closed.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Risk Management Plan',
    slug: 'risk-management-plan',
    description: 'Identify, assess, foresee and mitigate risks before they come to life.',
    purpose: 'This workflow provides a structured process for proactively identifying, assessing, and mitigating risks across the organization. It helps to create a risk register where all potential risks (financial, operational, security, etc.) are documented and tracked. For each risk, a mitigation plan is developed and an owner is assigned, helping the company to reduce its exposure to potential threats.',
    steps: [
        { name: 'Risk Identification', description: 'Teams across the company identify potential risks and add them to a central risk register.' },
        { name: 'Risk Assessment', description: 'Each risk is assessed based on its likelihood and potential impact.' },
        { name: 'Mitigation Planning', description: 'For high-priority risks, a mitigation plan is developed, and an owner is assigned.' },
        { name: 'Regular Review', description: 'The risk register is reviewed on a regular basis (e.g., quarterly) by leadership to track the status of mitigation plans and identify new risks.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Supplier Performance Analysis',
    slug: 'supplier-performance-analysis',
    description: 'An organized process for managing and evaluating supplier performance intuitively.',
    purpose: 'This workflow provides a structured way to evaluate the performance of key suppliers. It involves setting performance KPIs (e.g., on-time delivery, quality, cost) and regularly reviewing supplier performance against those metrics. This helps the procurement team to identify top-performing suppliers, address issues with underperforming ones, and make data-driven decisions about a supplier relationship.',
    steps: [
        { name: 'Define KPIs', description: 'Define the Key Performance Indicators (KPIs) for each major supplier.' },
        { name: 'Collect Performance Data', description: 'Regularly collect data on supplier performance against the defined KPIs.' },
        { name: 'Quarterly Business Review (QBR)', description: 'Hold a quarterly review meeting with the supplier to discuss their performance and any areas for improvement.' },
        { name: 'Action Plan', description: 'Create a joint action plan to address any performance gaps.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Vendor Management',
    slug: 'vendor-management',
    description: 'A process to manage, control, and evaluate suppliers effectively.',
    purpose: 'This workflow provides a centralized system for managing all information related to a company\'s vendors. It serves as a single source of truth for vendor contracts, contact information, performance reviews, and risk assessments. This helps the procurement team to manage vendor relationships more effectively and reduce supply chain risk.',
    steps: [
        { name: 'Vendor Onboarding', description: 'A new vendor is added to the system, and all their information (contact, banking, contracts) is entered.' },
        { name: 'Performance Tracking', description: 'Track vendor performance against contracts and SLAs.' },
        { name: 'Risk Assessment', description: 'Conduct regular risk assessments of key vendors.' },
        { name: 'Contract Renewal Management', description: 'The system provides alerts for upcoming contract renewals, prompting a review of the vendor relationship.' },
    ]
  },
  {
    category: 'Procurement',
    name: 'Vendor Registration',
    slug: 'vendor-registration',
    description: 'Vendor registration is a critical process that involves careful evaluation of vendors and enables your procurement team to establish effective contracts.',
    purpose: 'This workflow provides a standardized process for onboarding new vendors. It ensures that before a company starts doing business with a new vendor, all necessary due diligence is performed, including collecting legal documents, conducting security reviews, and setting up the vendor in the financial systems. This reduces risk and ensures compliance.',
    steps: [
      { name: 'Vendor Submits Application', description: 'A potential new vendor fills out an online registration form and uploads required documents (e.g., tax forms, insurance certificates).' },
      { name: 'Internal Review', description: 'The procurement, finance, and security teams review the vendor\'s application and documents.' },
      { name: 'Vendor Approval', description: 'If the vendor passes the review, they are formally approved and set up as a vendor in the company\'s systems.' },
      { name: 'Contracting', description: 'A Master Service Agreement or other contract is put in place before any work begins.' },
    ]
  },

  // Development Templates
  {
    category: 'Development',
    name: 'Agile Software Development',
    slug: 'agile-software-development',
    description: 'A template to streamline and customize your agile development process for efficient workflow.',
    purpose: 'This workflow provides a basic framework for a software development team using an Agile methodology like Scrum. It helps the team manage their work in sprints, from planning what to work on to reviewing the completed work at the end of the sprint. It provides structure and visibility for the entire development process.',
    steps: [
      { name: 'Sprint Planning', description: 'The team meets to select a set of user stories from the backlog to work on during the upcoming sprint.' },
      { name: 'Development & Testing', description: 'Developers work on the selected stories, with QA testing them as they are completed.' },
      { name: 'Sprint Review', description: 'At the end of the sprint, the team demonstrates the completed work to stakeholders.' },
      { name: 'Sprint Retrospective', description: 'The team meets to discuss what went well, what didn\'t, and how they can improve in the next sprint.' },
    ]
  },
  {
    category: 'Development',
    name: 'Bug Tracking and Reporting',
    slug: 'bug-tracking-and-reporting',
    description: 'Manage and streamline bugs resolution process with Pneumatic’s bug tracking template.',
    purpose: 'This workflow provides a systematic process for reporting, tracking, and resolving software bugs. It ensures that every bug is properly documented, prioritized, assigned to a developer, and tested before being closed. This helps to improve software quality and provides visibility into the status of all known issues.',
    steps: [
      { name: 'Bug Reported', description: 'A user or QA tester reports a bug, providing detailed steps to reproduce it.' },
      { name: 'Triage & Prioritization', description: 'A product manager or team lead reviews the bug, confirms that it is a valid issue, and assigns it a priority.' },
      { name: 'Development & Fix', description: 'A developer is assigned the bug, works on a fix, and submits the code for review.' },
      { name: 'Verification & Closure', description: 'A QA tester verifies that the fix resolves the bug, and then the bug ticket is closed.' },
    ]
  },
    {
    category: 'Development',
    name: 'IT Bug Tracking',
    slug: 'it-bug-tracking',
    description: 'IT Bug Tracking is a vital process for software development teams that involves identifying, investigating, and resolving software bugs in a timely manner.',
    purpose: 'This workflow is specifically for internal IT teams to track bugs in the enterprise applications they manage. It provides a formal process for users to report issues and for the IT team to manage the resolution process with the software vendor or internal development team. This ensures that issues are not lost and that users are kept informed of the status.',
    steps: [
        { name: 'User Reports Bug', description: 'An end-user reports a bug in an internal software application.' },
        { name: 'IT Team Verification', description: 'The internal IT team verifies the bug and gathers more details.' },
        { name: 'Log with Vendor', description: 'The IT team logs a support ticket with the software vendor.' },
        { name: 'Test & Deploy Fix', description: 'When the vendor provides a patch or fix, the IT team tests it in a staging environment before deploying it to production.' },
    ]
  },
  {
    category: 'Development',
    name: 'Product Management',
    slug: 'product-management',
    description: 'This process organizes, prioritizes, designs, tests, and releases new product features.',
    purpose: 'This workflow provides an end-to-end framework for product management. It covers the entire lifecycle of a new feature, from the initial idea to the final launch. It ensures that product decisions are data-driven, aligned with customer needs, and well-coordinated across all departments (engineering, marketing, sales).',
    steps: [
        { name: 'Idea & Opportunity Sizing', description: 'Gather ideas from customers, internal teams, and the market. Assess the potential impact of each idea.' },
        { name: 'Product Spec & Design', description: 'For prioritized ideas, the product manager writes a detailed specification (PRD), and works with UX/UI designers on mockups.' },
        { name: 'Development & QA', description: 'The feature is built by the engineering team and tested by QA.' },
        { name: 'Launch & Measurement', description: 'The feature is launched to customers. The product manager then measures its adoption and impact against the initial goals.' },
    ]
  },
  {
    category: 'Development',
    name: 'Software Comparison',
    slug: 'software-comparison',
    description: 'A process for selecting the best tech solutions for your company.',
    purpose: 'This workflow provides a structured way to evaluate and compare multiple software solutions to solve a business problem. It ensures that the selection process is objective and data-driven, rather than based on gut feeling. It involves creating a scorecard of key requirements and scoring each potential solution against it.',
    steps: [
        { name: 'Define Requirements', description: 'Create a list of "must-have" and "nice-to-have" features for the new software.' },
        { name: 'Identify Vendors', description: 'Research and create a shortlist of 3-5 potential vendors.' },
        { name: 'Vendor Demos & Scoring', description: 'Schedule demos with each vendor and score their solution against your requirements scorecard.' },
        { name: 'Select Winner', description: 'Select the vendor with the highest score that also fits within the budget.' },
    ]
  },
  {
    category: 'Development',
    name: 'Software Debugging Process',
    slug: 'software-debugging-process',
    description: 'This process manages bug correction data, enhancing productivity and teamwork during debugging phases.',
    purpose: 'This workflow provides a systematic approach for a developer to debug and fix a software issue. It encourages a methodical process of reproducing the bug, identifying the cause, implementing a fix, and writing a test to prevent it from recurring. This leads to more robust and higher-quality fixes.',
    steps: [
        { name: 'Reproduce the Bug', description: 'The developer follows the steps in the bug report to reliably reproduce the issue in a local development environment.' },
        { name: 'Isolate the Cause', description: 'The developer uses debugging tools to trace the code execution and isolate the root cause of the bug.' },
        { name: 'Implement the Fix', description: 'The developer writes the code to fix the bug.' },
        { name: 'Write a Unit Test', description: 'The developer writes an automated test that proves the fix works and will prevent the bug from reappearing in the future.' },
    ]
  },
  {
    category: 'Development',
    name: 'Software Deployment',
    slug: 'software-deployment',
    description: 'This process is designed to aid in the efficient and successful deployment of new software and updates.',
    purpose: 'This workflow provides a checklist for deploying new software or updates to a production environment. It is a key part of the larger Release Management process. It ensures that all necessary pre-deployment and post-deployment steps are taken to minimize the risk of issues and ensure a smooth release.',
    steps: [
        { name: 'Pre-deployment Checks', description: 'Run all automated tests one last time. Back up the production database.' },
        { name: 'Deploy to Production', description: 'Push the new code to the production servers.' },
        { name: 'Post-deployment Verification', description: 'Monitor production logs and run a series of smoke tests to ensure the deployment was successful and did not cause any new issues.' },
        { name: 'Communicate to Stakeholders', description: 'Notify internal stakeholders and/or customers that the new release has been deployed.' },
    ]
  },
  {
    category: 'Development',
    name: 'Software Performance Testing',
    slug: 'software-performance-testing',
    description: 'Plan, organize and manage your software performance tests efficiently.',
    purpose: 'This workflow structures the process of testing the performance (e.g., speed, scalability, stability) of a software application. It ensures that performance testing is done systematically, with clear goals and success criteria. This helps to identify and fix performance bottlenecks before they impact users in production.',
    steps: [
        { name: 'Define Test Scenarios & Goals', description: 'Define the key user scenarios to be tested and the performance goals (e.g., "Page load time must be under 2 seconds").' },
        { name: 'Create Test Scripts', description: 'Create automated scripts that simulate the defined user scenarios.' },
        { name: 'Run Load Test', description: 'Use a load testing tool to run the scripts with a specified number of virtual users.' },
        { name: 'Analyze Results & Identify Bottlenecks', description: 'Analyze the test results to identify any performance bottlenecks and create tickets for the development team to fix them.' },
    ]
  },
  {
    category: 'Development',
    name: 'Software Testing Tutorial',
    slug: 'software-testing-tutorial',
    description: 'A guide to simplify the process of software testing using Pneumatic’s Software Testing Tutorial Template.',
    purpose: 'This workflow serves as a checklist for a QA tester to follow when testing a new feature. It ensures that testing is comprehensive and covers all the key aspects of the feature. It helps to ensure that no major testing steps are missed before a feature is approved for release.',
    steps: [
        { name: 'Review Requirements', description: 'The QA tester reads the product specification to understand what the feature is supposed to do.' },
        { name: 'Write Test Cases', description: 'The tester writes a set of detailed test cases covering all the "happy path" and edge case scenarios.' },
        { name: 'Execute Tests', description: 'The tester executes the test cases in a staging environment.' },
        { name: 'Log Bugs & Retest', description: 'Any bugs found are logged in the bug tracking system. Once a bug is fixed, it is retested.' },
        { name: 'Sign-off', description: 'Once all test cases pass, the QA tester formally signs off on the feature, indicating it is ready for release.' },
    ]
  },
  {
    category: 'Development',
    name: 'Task Management',
    slug: 'task-management',
    description: 'A process designed to increase efficiency in handling tasks, from simple to complex.',
    purpose: 'This is a simple personal or team task management workflow. It provides a basic structure for tracking tasks through different stages of completion. It helps individuals and teams stay organized, prioritize their work, and ensure that nothing falls through the cracks.',
    steps: [
        { name: 'To Do', description: 'New tasks are added to the "To Do" list.' },
        { name: 'In Progress', description: 'When a team member starts working on a task, they move it to "In Progress".' },
        { name: 'In Review', description: 'When the work is complete, it is moved to "In Review" for a manager or peer to check.' },
        { name: 'Done', description: 'Once reviewed and approved, the task is moved to "Done".' },
    ]
  },

  // CS and Support Templates
  {
    category: 'CS and Support',
    name: 'Customer Contact Log & Form',
    slug: 'customer-contact-log-and-form',
    description: 'A process designed to facilitate the registration and storage of customer contact information using a standardized template.',
    purpose: 'This workflow standardizes how customer contact information is collected and stored. It ensures that all essential data is captured consistently, creating a clean and reliable customer database. This is foundational for effective communication, marketing, and sales efforts.',
    steps: [
        { name: 'Form Submission', description: 'A customer or employee enters contact details into a standardized digital form.' },
        { name: 'Data Validation', description: 'The system performs basic validation to check for errors, like invalid email formats.' },
        { name: 'Create/Update CRM Record', description: 'The contact information is used to create a new record or update an existing one in the CRM system.' },
        { name: 'Confirmation', description: 'An automated email can be sent to the contact to confirm their information has been received.' },
    ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Feedback',
      slug: 'customer-feedback',
      description: 'A standardized and centralized process for collecting and tracking customer feedback.',
      purpose: 'This workflow provides a centralized system for collecting, categorizing, and acting on customer feedback from various channels (e.g., surveys, support tickets, social media). It ensures that valuable customer insights are not lost and are routed to the right teams (e.g., product, marketing) to drive improvements.',
      steps: [
          { name: 'Collect Feedback', description: 'Feedback is collected from multiple channels and aggregated into a single database.' },
          { name: 'Triage and Categorize', description: 'A support or product manager reviews each piece of feedback and categorizes it (e.g., bug report, feature request, usability issue).' },
          { name: 'Assign to Team', description: 'The feedback is assigned to the relevant team for review and potential action.' },
          { name: 'Follow-up with Customer', description: 'The system tracks the status, and the customer can be notified when their feedback has been acted upon.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Help Desk',
      slug: 'customer-help-desk',
      description: 'Designed to exceed customer expectations by efficiently addressing their queries or complaints through a ticketing system.',
      purpose: 'This workflow provides a classic help desk or ticketing system for customer support. It ensures that every customer inquiry is logged as a ticket, assigned to an agent, and tracked until it is resolved. This provides accountability, visibility for managers, and ensures that no customer request is forgotten.',
      steps: [
          { name: 'Ticket Creation', description: 'A customer submits a support request via email, web form, or phone, which automatically creates a new ticket.' },
          { name: 'Triage and Assignment', description: 'The ticket is automatically categorized and assigned to the appropriate support agent or team queue.' },
          { name: 'Investigation and Communication', description: 'The agent investigates the issue, communicates with the customer, and works towards a resolution.' },
          { name: 'Resolution and Closure', description: 'Once the issue is resolved, the agent closes the ticket. A satisfaction survey can be automatically sent to the customer.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Interviews',
      slug: 'customer-interviews',
      description: 'A step-by-step guide to conducting effective customer interviews to enhance product development.',
      purpose: 'This workflow structures the process of conducting qualitative customer interviews to gather deep insights for product development or marketing. It ensures that the process is consistent, from recruiting the right participants to asking the right questions and synthesizing the findings. This helps to ensure that the insights gathered are reliable and actionable.',
      steps: [
          { name: 'Define Goals & Recruit Participants', description: 'Define the learning goals for the interviews and recruit a set of customers who fit the target profile.' },
          { name: 'Schedule and Conduct Interviews', description: 'Schedule and conduct the interviews using a semi-structured interview guide.' },
          { name: 'Transcribe and Analyze', description: 'Transcribe the interview recordings and analyze them to identify common themes and insights.' },
          { name: 'Synthesize and Share Findings', description: 'Create a summary report of the key findings and share it with the product, marketing, and leadership teams.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Onboarding',
      slug: 'customer-onboarding',
      description: 'A crucial process that involves activities designed to help customers get familiar with, and start using a product. It also includes steps to help customers adapt to the product\'s learning curve and integrate it into their business operations.',
      purpose: 'This workflow provides a structured onboarding process for new customers of a SaaS product. The goal is to guide them from their initial sign-up to their first "aha!" moment, where they experience the core value of the product. A successful onboarding process is critical for long-term customer retention and success.',
      steps: [
        { name: 'Welcome Email Series', description: 'A series of automated emails are sent to the new customer, guiding them through the key initial setup steps.' },
        { name: 'In-App Walkthrough', description: 'An interactive in-app tour guides the user through the product\'s main features.' },
        { name: 'Onboarding Checklist', description: 'A checklist of key tasks is presented to the user to help them complete the setup process.' },
        { name: 'Proactive Check-in', description: 'If a user gets stuck, a task is created for a customer success manager to proactively reach out and offer help.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey',
      slug: 'customer-satisfaction-survey',
      description: 'The Customer Satisfaction Survey process is designed to gather insights from customers to improve product or service quality and enhance customer experiences.',
      purpose: 'This workflow automates the sending of customer satisfaction (CSAT) surveys after a key interaction, such as the resolution of a support ticket. It provides a simple and immediate way to measure customer sentiment and the performance of the support team. The feedback collected can be used for agent coaching and process improvement.',
      steps: [
          { name: 'Trigger Survey', description: 'An hour after a support ticket is closed, an automated email is sent to the customer with a simple one-question survey: "How satisfied were you with the support you received?"' },
          { name: 'Collect Rating', description: 'The customer clicks a rating (e.g., Good or Bad).' },
          { name: 'Collect Optional Comment', description: 'After rating, the customer is taken to a page where they can leave an optional open-ended comment.' },
          { name: 'Alert on Bad Rating', description: 'If a customer leaves a bad rating, a notification is sent to the support manager for immediate follow-up.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey - Phone',
      slug: 'customer-satisfaction-survey-phone',
      description: 'A structured process for conducting post-sales customer satisfaction surveys via phone.',
      purpose: 'This workflow is for businesses that prefer to gather customer feedback through phone calls rather than email surveys. It provides a script and a structured process for customer service agents to follow, ensuring that the feedback collected is consistent and that the call is professional and efficient.',
      steps: [
          { name: 'Schedule Follow-up Call', description: 'A week after a customer makes a purchase, a task is created for a customer service agent to call them.' },
          { name: 'Conduct Phone Survey', description: 'The agent follows a script to ask the customer about their purchase experience and overall satisfaction.' },
          { name: 'Log Feedback', description: 'The agent logs the customer\'s feedback and rating in the CRM.' },
          { name: 'Escalate Issues', description: 'If the customer raises any significant issues during the call, the agent escalates them to the appropriate department.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Satisfaction Survey Form',
      slug: 'customer-satisfaction-survey-form',
      description: 'A process for centralizing customer satisfaction survey responses, organizing and extracting survey data using Pneumatic Public Form Feature.',
      purpose: 'This workflow focuses on the analysis of survey data. It provides a dashboard and reporting tools to analyze the results from customer satisfaction surveys. It allows managers to track CSAT scores over time, segment feedback by product or agent, and identify common themes in open-ended comments.',
      steps: [
          { name: 'Aggregate Survey Data', description: 'All survey responses are fed into a central database.' },
          { name: 'Calculate CSAT Score', description: 'The overall Customer Satisfaction (CSAT) score is calculated and displayed on a dashboard.' },
          { name: 'Text Analysis', description: 'Open-ended comments are analyzed for common keywords and sentiment.' },
          { name: 'Generate Monthly Report', description: 'A monthly report is automatically generated and sent to management, summarizing the key findings and trends.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Customer Success Management',
      slug: 'customer-success-management',
      description: 'This process focuses on managing customer success with full visibility of the companies and tasks at hand. It aims to ensure customers are managed according to SLAs, with efficiency and speed.',
      purpose: 'This workflow is for B2B Customer Success Managers (CSMs). It provides a structured process for managing their portfolio of clients, ensuring that each client is proactively engaged and is successfully using the product. The goal is to drive adoption, reduce churn, and identify opportunities for expansion.',
      steps: [
        { name: 'New Client Handoff', description: 'After a deal is closed, the salesperson hands off the new client to the assigned CSM.' },
        { name: 'Onboarding & Implementation', description: 'The CSM manages the client\'s onboarding process, ensuring a successful implementation.' },
        { name: 'Quarterly Business Review (QBR)', description: 'The CSM holds a QBR with the client each quarter to review their progress, discuss their goals, and share best practices.' },
        { name: 'Health Scoring & Renewal', description: 'The CSM monitors the client\'s health score (based on product usage, support tickets, etc.) and manages the contract renewal process.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Damaged or Lost Baggage',
      slug: 'damaged-or-lost-baggage',
      description: 'A process for managing requests for luggage repairs and lost luggage claims, from claim to compensation payment.',
      purpose: 'This workflow is for airlines to manage claims for lost or damaged baggage. It provides a structured process for passengers to file a claim and for the airline to investigate, track, and resolve it. This helps to improve customer service in a stressful situation and ensures that all claims are handled consistently and in accordance with airline policy.',
      steps: [
          { name: 'Passenger Files Claim', description: 'A passenger files a claim for lost or damaged baggage at the airport or online.' },
          { name: 'Claim Investigation', description: 'The airline investigates the claim, including searching for lost bags in the baggage system.' },
          { name: 'Status Updates', description: 'The passenger receives automated updates on the status of their claim.' },
          { name: 'Resolution', description: 'The bag is either found and delivered, or the passenger is offered compensation for a lost bag or reimbursement for a damaged one.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Early Check-in (Double Room)',
      slug: 'early-check-in-double-room',
      description: 'This business process is designed to enable guests to check-in early to their double rooms, streamlining the process for both the guests and the hosts.',
      purpose: 'This workflow is for hotels to manage guest requests for early check-in. It allows the front desk to see which rooms are clean and available, and to approve early check-in requests based on availability. This can improve guest satisfaction by providing a more flexible and accommodating experience.',
      steps: [
          { name: 'Guest Request', description: 'A guest requests an early check-in, either in advance or upon arrival.' },
          { name: 'Room Status Check', description: 'The front desk agent checks the housekeeping system to see if the guest\'s assigned room type is clean and available.' },
          { name: 'Approval & Notification', description: 'If a room is available, the agent approves the request and notifies the guest. An early check-in fee may be applied.' },
          { name: 'Update Reservation', description: 'The guest\'s reservation is updated to reflect the early check-in time.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Field Service Management',
      slug: 'field-service-management',
      description: 'This process helps in organizing the field operations of a team of service professionals.',
      purpose: 'This workflow is for companies that have technicians or engineers who perform work at customer sites. It helps to manage the entire service lifecycle, from creating a work order to dispatching a technician, tracking their work, and invoicing the customer. It improves efficiency, reduces travel time, and provides real-time visibility into field operations.',
      steps: [
        { name: 'Create Work Order', description: 'A work order is created in response to a customer request or a scheduled maintenance task.' },
        { name: 'Dispatch & Schedule', description: 'The work order is dispatched to the best-suited field technician based on their skills, location, and availability.' },
        { name: 'On-site Work & Reporting', description: 'The technician travels to the site, performs the work, and logs their time and any parts used via a mobile app.' },
        { name: 'Invoicing & Closure', description: 'Once the work is complete, an invoice is automatically generated, and the work order is closed.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Helpdesk | Tracking received emails',
      slug: 'helpdesk-tracking-received-emails',
      description: 'This process aims to efficiently manage and track every email received, by creating a new ticket/card in the pipe for each email. The tickets are reviewed, categorized based on the type of query, tracked until a response is sent, and finally closed.',
      purpose: 'This workflow turns a shared support email inbox (like support@company.com) into a structured ticketing system. It ensures that every single email is tracked and nothing gets missed. It allows managers to see how many requests are coming in, how quickly they are being answered, and who is working on what.',
      steps: [
          { name: 'Email to Ticket', description: 'An email sent to the support address automatically creates a new ticket in the helpdesk system.' },
          { name: 'Categorize & Assign', description: 'An agent reviews the new ticket, categorizes it, and assigns it to themselves or another agent.' },
          { name: 'Respond to Customer', description: 'The agent replies to the customer from within the ticketing system.' },
          { name: 'Close Ticket', description: 'Once the issue is resolved, the ticket is marked as closed.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Hotel Booking Request',
      slug: 'hotel-booking-request',
      description: 'Organize your team hotel booking request with this new Pneumatic template.',
      purpose: 'This workflow is for corporate travel managers or executive assistants to manage hotel booking requests for employees. It provides a standardized form for employees to request travel and ensures that all bookings are made in compliance with the company\'s travel policy and budget.',
      steps: [
          { name: 'Employee Submits Request', description: 'An employee submits a travel request, including dates, destination, and preferred hotel (if any).' },
          { name: 'Manager Approval', description: 'The employee\'s manager approves the travel request and budget.' },
          { name: 'Travel Desk Booking', description: 'The corporate travel desk books the hotel and adds the confirmation details to the request.' },
          { name: 'Confirmation to Employee', description: 'The employee receives an email with their final hotel booking confirmation.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Application Maintenance and Support',
      slug: 'application-maintenance-and-support',
      description: 'This process aims to manage and organize the support issues reported in a business using a kanban model.',
      purpose: 'This workflow is for internal IT teams that support custom-built or third-party applications. It provides a Kanban-style board to manage incoming support tickets, bug reports, and feature requests from business users. This helps the support team to visualize their work, prioritize tasks, and communicate status back to the users.',
      steps: [
          { name: 'New Request', description: 'A user submits a ticket for a support issue or feature request.' },
          { name: 'Backlog', description: 'The support team reviews and prioritizes the new request, adding it to the backlog.' },
          { name: 'In Progress', description: 'A developer or analyst starts working on the ticket.' },
          { name: 'Done', description: 'The work is complete and has been deployed or communicated to the user.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Bike Rental Management',
      slug: 'bike-rental-management',
      description: 'A comprehensive process to manage and track bike rentals for bike rental shops.',
      purpose: 'This workflow is for bike rental shops to manage their inventory and customers. It tracks which bikes are rented, when they are due back, and manages the customer rental agreements. It helps to prevent loss of inventory and provides a smooth and professional rental experience for customers.',
      steps: [
          { name: 'Customer Rental', description: 'A customer rents a bike. The shop records their information, the bike number, and the expected return time.' },
          { name: 'Damage Check', description: 'The bike is inspected for any damage before it is rented out.' },
          { name: 'Bike Return', description: 'When the customer returns, the bike is checked in and inspected again for any new damage.' },
          { name: 'Maintenance', description: 'Bikes are periodically taken out of service for routine maintenance.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Cargo Vehicle Insurance Claim',
      slug: 'cargo-vehicle-insurance-claim',
      description: 'This process is for reporting and handling insurance claims related to cargo vehicles.',
      purpose: 'This workflow is for logistics or trucking companies to manage insurance claims for accidents or damage involving their vehicles. It provides a structured process for collecting all the necessary information (e.g., driver statements, police reports, photos) and submitting it to the insurance company. This helps to ensure a smooth and timely claims process.',
      steps: [
          { name: 'Incident Report', description: 'A driver reports an accident or damage to a vehicle.' },
          { name: 'Information Gathering', description: 'The safety manager collects all necessary documentation, including photos, police reports, and witness statements.' },
          { name: 'File Claim with Insurer', description: 'The completed claim package is submitted to the insurance company.' },
          { name: 'Track Claim Status', description: 'The company tracks the status of the claim until a settlement is reached.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Case Management',
      slug: 'case-management',
      description: 'This business process aims at efficiently managing and handling cases by leveraging Pneumatic Case Management Template. It allows for easy reception of requests via a public form, quick information analysis, and automated email communication with the requester.',
      purpose: 'This is a general-purpose workflow for managing "cases," which could be anything from a customer complaint to a complex HR investigation. It provides a central place to log all information and communication related to a case, ensuring a complete and auditable record. It helps case managers stay organized and ensures that all necessary steps are followed.',
      steps: [
          { name: 'Open Case', description: 'A new case is opened and assigned a case number.' },
          { name: 'Investigation', description: 'The case manager gathers information, interviews relevant parties, and documents all findings.' },
          { name: 'Action Plan', description: 'The case manager develops a plan to resolve the case.' },
          { name: 'Resolution and Closure', description: 'The action plan is executed, and the case is formally closed.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Churn Management',
      slug: 'churn-management',
      description: 'A standardized workflow to manage customer churn effectively, offering a good experience even up until the last engagement.',
      purpose: 'This workflow is for SaaS companies to manage the process when a customer decides to cancel their subscription. The goal is to understand the reason for cancellation and to make the offboarding process as smooth as possible. It also provides an opportunity to try and save the customer or at least part on good terms, leaving the door open for them to return in the future.',
      steps: [
          { name: 'Cancellation Request', description: 'A customer indicates they want to cancel their account.' },
          { name: 'Churn Survey & Retention Offer', description: 'An automated survey is sent to understand the reason for cancellation. Based on their answer, a targeted retention offer may be made (e.g., a discount).' },
          { name: 'Offboarding', description: 'If the customer still wishes to cancel, a process is initiated to offboard their data and close their account.' },
          { name: 'Feedback Analysis', description: 'The reasons for churn are analyzed to identify trends and inform product improvements.' },
      ]
  },
  {
    category: 'CS and Support',
    name: 'Class Scheduling',
    slug: 'class-scheduling',
    description: 'This business process is designed to assist in the creation and management of class schedules.',
    purpose: 'This workflow is for educational institutions or training companies to manage the process of scheduling classes. It helps to coordinate teachers, rooms, and students to create an optimal schedule. It ensures that there are no conflicts and that all resources are utilized efficiently.',
    steps: [
        { name: 'Course Offering Setup', description: 'Define the list of courses to be offered for the upcoming semester or session.' },
        { name: 'Teacher & Room Assignment', description: 'Assign teachers to courses and schedule them into available rooms, avoiding conflicts.' },
        { name: 'Student Registration', description: 'Students register for the classes they wish to take.' },
        { name: 'Final Schedule Publication', description: 'The final class schedule is published to students and faculty.' },
    ]
  },
  {
      category: 'CS and Support',
      name: 'Client\'s Equipment Maintenance',
      slug: 'clients-equipment-maintenance',
      description: 'A process for controlling and tracking clients\' repair requests and keeping the client informed through automatic email templates.',
      purpose: 'This workflow is for companies that service and maintain equipment owned by their clients (e.g., medical devices, manufacturing machinery). It provides a system for tracking service requests, scheduling technicians, and documenting all maintenance work performed. This ensures that service level agreements (SLAs) are met and provides the client with a clear record of the work done.',
      steps: [
          { name: 'Client Submits Service Request', description: 'A client submits a request for maintenance or repair on a piece of equipment.' },
          { name: 'Schedule Technician', description: 'A service manager schedules a technician to visit the client site.' },
          { name: 'Perform Maintenance & Log Work', description: 'The technician performs the work and logs their time and any parts used in a service report.' },
          { name: 'Client Sign-off & Invoicing', description: 'The client signs off on the completed work, and an invoice is generated.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Complaint Management',
      slug: 'complaint-management',
      description: 'Pneumatic Complaint management template is a simple and complete way to organize your complaints in your company.',
      purpose: 'This workflow provides a formal process for handling customer complaints. It ensures that every complaint is acknowledged, investigated, and resolved in a timely and fair manner. It helps to turn negative customer experiences into opportunities to improve and demonstrate a commitment to customer satisfaction.',
      steps: [
          { name: 'Log Complaint', description: 'A customer complaint is received and logged in the system.' },
          { name: 'Acknowledge & Investigate', description: 'The customer receives an automated acknowledgement. A case manager investigates the complaint.' },
          { name: 'Propose Resolution', description: 'The case manager proposes a resolution to the customer.' },
          { name: 'Implement Resolution & Close', description: 'Once the customer agrees to the resolution, it is implemented, and the complaint case is closed.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Complaints Follow-up Agroindustrial',
      slug: 'complaints-follow-up-agroindustrial',
      description: 'This process aims to help agroindustrial managers track, control, and communicate effectively with customers about their issues and complaints.',
      purpose: 'This workflow is tailored for the agro-industrial sector to manage complaints from customers (e.g., farmers, distributors) about products like seeds, fertilizers, or equipment. It provides a structured process for logging the complaint, conducting a technical investigation (which may involve lab tests or field visits), and communicating the findings back to the customer.',
      steps: [
          { name: 'Log Complaint', description: 'A customer or sales rep logs a complaint about a product issue.' },
          { name: 'Technical Investigation', description: 'A technical expert investigates the complaint, which may involve analyzing product samples or visiting the customer\'s site.' },
          { name: 'Root Cause Analysis', description: 'The team determines the root cause of the issue.' },
          { name: 'Resolution & Communication', description: 'A resolution is offered to the customer, and the findings are used to drive internal quality improvements.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Concierge Service',
      slug: 'concierge-service',
      description: 'The Concierge Service process is a crucial aspect of a hotel\'s customer service. It involves handling a variety of guest needs, from simple tasks like restaurant reservations to more complex ones like healthcare requirements.',
      purpose: 'This workflow helps hotel concierges manage and track guest requests. It ensures that every request is fulfilled accurately and on time, providing a high-touch, personalized service experience for guests. It provides a log of all requests, which can be useful for tracking guest preferences and team performance.',
      steps: [
          { name: 'Guest Request', description: 'A guest makes a request to the concierge (e.g., "Can you book me a table for two at 8 pm?").' },
          { name: 'Fulfill Request', description: 'The concierge makes the necessary arrangements (e.g., calls the restaurant to make the booking).' },
          { name: 'Confirm with Guest', description: 'The concierge confirms the details of the fulfilled request back to the guest.' },
          { name: 'Log Request', description: 'The request and its resolution are logged in the concierge system.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Concierge Services',
      slug: 'concierge-services',
      description: 'A process to handle and fulfill hotel guest requests for restaurant, museum, concert, and theater reservations.',
      purpose: 'This is a more specific version of the Concierge Service workflow, focusing on booking external reservations for guests. It helps the concierge team manage multiple bookings, track confirmations, and provide guests with all the necessary details for their reservations.',
      steps: [
          { name: 'Reservation Request', description: 'A guest requests a reservation for a specific restaurant, show, or event.' },
          { name: 'Check Availability & Book', description: 'The concierge contacts the venue to check availability and make the booking.' },
          { name: 'Send Confirmation', description: 'A written confirmation with all the details is sent to the guest\'s room or email.' },
          { name: 'Reconfirm Booking', description: 'On the day of the event, the concierge may call to reconfirm the booking with the venue.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Contact Inbox',
      slug: 'contact-inbox',
      description: 'The Contact Inbox business process is aimed at centralizing, organizing, and responding to customer contacts effectively and efficiently.',
      purpose: 'This workflow is designed to manage a general "Contact Us" inbox. It ensures that every inbound message is reviewed, routed to the correct department (e.g., Sales, Support, HR), and receives a response. It prevents messages from being lost in a cluttered inbox and provides accountability for responding to all inquiries.',
      steps: [
          { name: 'Message Received', description: 'A new message arrives in the general contact inbox.' },
          { name: 'Triage', description: 'An administrator reviews the message and determines which department it should be routed to.' },
          { name: 'Assign to Department', description: 'The message is forwarded to the appropriate department inbox or assigned as a task in a project management tool.' },
          { name: 'Response & Archive', description: 'The responsible department responds to the message, and the original message is archived.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Implementation',
      slug: 'implementation',
      description: 'A detailed process to understand customer\'s expectations, implement solutions, schedule training meetings, and organize feedbacks using Pneumatic\'s Implementation Template.',
      purpose: 'This workflow is for professional services teams or SaaS companies that have a complex setup process. It provides a project plan for implementing the solution for a new client. It covers all phases, from initial discovery to final go-live, ensuring that the project stays on track and that the client\'s expectations are met.',
      steps: [
        { name: 'Project Kick-off', description: 'Hold a kick-off meeting with the client to define project goals, timeline, and success criteria.' },
        { name: 'Solution Configuration', description: 'Configure the software or solution to meet the client\'s specific requirements.' },
        { name: 'User Training', description: 'Conduct training sessions for the client\'s team to ensure they know how to use the new system.' },
        { name: 'Go-live', description: 'Deploy the solution to the client\'s production environment.' },
        { name: 'Post-launch Support', description: 'Provide a period of hands-on support immediately after go-live to ensure a smooth transition.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Incoming Net Promoter Scores',
      slug: 'incoming-net-promoter-scores',
      description: 'Manage all your NPS scores, send emails and ask for feedback using the Pneumatic\'s Incoming Net Promoter Scores template.',
      purpose: 'This workflow automates the process of collecting and acting on Net Promoter Score (NPS) feedback. NPS is a measure of customer loyalty. This workflow not only sends the survey but also provides a process for following up with respondents, especially those who are "Detractors," to understand their feedback and try to resolve their issues.',
      steps: [
          { name: 'Send NPS Survey', description: 'Periodically send a one-question NPS survey ("How likely are you to recommend us to a friend?") to your customers.' },
          { name: 'Categorize Responses', description: 'Responses are automatically categorized as Promoters (9-10), Passives (7-8), or Detractors (0-6).' },
          { name: 'Follow-up with Detractors', description: 'For every Detractor, a task is created for a customer success manager to personally reach out and understand their concerns.' },
          { name: 'Analyze Trends', description: 'The overall NPS score and the qualitative feedback are analyzed to identify trends and areas for improvement.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Lodging Requests',
      slug: 'lodging-requests',
      description: 'This process is aimed at facilitating lodging requisition in hotels or Airbnb. It involves various phases, each requiring specific inputs.',
      purpose: 'This workflow is for property managers of vacation rentals (like Airbnb). It manages the booking process from initial inquiry to guest check-out. It helps to ensure that all communication is timely, the property is clean and ready, and the guest has a great experience.',
      steps: [
          { name: 'Booking Inquiry', description: 'A potential guest sends an inquiry or booking request.' },
          { name: 'Approve Booking & Collect Payment', description: 'The property manager approves the booking and collects payment.' },
          { name: 'Pre-arrival Communication', description: 'A few days before arrival, an automated message is sent to the guest with check-in instructions and house rules.' },
          { name: 'Cleaning & Turnover', description: 'After the guest checks out, a cleaning and turnover process is initiated to prepare the property for the next guest.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Medical Appointment Scheduling',
      slug: 'medical-appointment-scheduling',
      description: 'A streamlined process for scheduling medical appointments and sending out automated confirmation emails.',
      purpose: 'This workflow helps medical offices manage patient appointment scheduling. It provides a structured way for receptionists to book new appointments, manage reschedules, and send automated reminders to patients. This helps to reduce no-shows and keep the office schedule running smoothly.',
      steps: [
        { name: 'Patient Request', description: 'A patient calls or goes online to request an appointment.' },
        { name: 'Schedule Appointment', description: 'The receptionist finds an available slot in the doctor\'s calendar and schedules the appointment.' },
        { name: 'Automated Reminders', description: 'The system automatically sends email and/or SMS reminders to the patient before their appointment (e.g., 48 hours and 24 hours before).' },
        { name: 'Check-in & Visit', description: 'The patient arrives for their appointment and checks in.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Medical Care (Clinic)',
      slug: 'medical-care-clinic',
      description: 'This process is designed for clinics to manage their patients\' details, from the moment they schedule the appointment to leave the clinic.',
      purpose: 'This workflow provides an end-to-end process for managing a patient visit at a medical clinic. It tracks the patient from check-in to check-out, ensuring that all necessary steps (like collecting insurance information, taking vitals, and processing billing) are completed in a consistent and efficient manner.',
      steps: [
          { name: 'Patient Check-in', description: 'Patient arrives and checks in at the front desk, providing their insurance information.' },
          { name: 'Vitals & Initial Assessment', description: 'A medical assistant takes the patient\'s vitals and records the reason for their visit.' },
          { name: 'Physician Examination', description: 'The doctor examines the patient, makes a diagnosis, and prescribes treatment.' },
          { name: 'Check-out & Billing', description: 'The patient checks out, and the visit information is sent to the billing department to be processed.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Medical Care (Hospital)',
      slug: 'medical-care-hospital',
      description: 'A comprehensive system designed for hospitals to manage their patients\' journey from triage to discharge.',
      purpose: 'This workflow manages the complex process of a patient\'s stay in a hospital. It is a high-level process that tracks a patient from admission through treatment to their eventual discharge. It helps to coordinate the many different departments and specialists involved in a patient\'s care, ensuring a seamless flow of information and a focus on patient safety.',
      steps: [
          { name: 'Admission', description: 'A patient is admitted to the hospital, either through the emergency room or for a scheduled procedure.' },
          { name: 'Treatment Plan', description: 'A team of doctors and nurses develops and implements a treatment plan for the patient.' },
          { name: 'Ongoing Care & Monitoring', description: 'The patient\'s condition is continuously monitored, and the treatment plan is adjusted as needed.' },
          { name: 'Discharge Planning', description: 'A social worker or case manager works with the patient and their family to plan for their discharge and any necessary after-care.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Missing, lost, or damaged shipment',
      slug: 'missing-lost-or-damaged-shipment',
      description: 'A process to handle cases of missing, damaged, or lost shipments reported by clients.',
      purpose: 'This workflow is for e-commerce companies to manage customer claims about shipping issues. It provides a structured process for investigating the claim with the shipping carrier and determining the appropriate resolution for the customer (e.g., a replacement or a refund). This helps to resolve frustrating situations for customers in a fair and timely manner.',
      steps: [
          { name: 'Customer Reports Issue', description: 'A customer contacts support to report that their package was lost or arrived damaged.' },
          { name: 'File Claim with Carrier', description: 'The support agent files a claim with the shipping carrier (e.g., UPS, FedEx).' },
          { name: 'Offer Resolution to Customer', description: 'While the claim is being investigated, the company offers the customer an immediate resolution, such as shipping a replacement item.' },
          { name: 'Track Carrier Claim', description: 'The company tracks the status of the insurance claim with the carrier to recover the cost of the lost or damaged goods.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'NDA Request',
      slug: 'nda-request',
      description: 'This process involves the error-proof and flawless execution of signing Non-Disclosure Agreements (NDAs) to avoid future complications. Automation plays a key role in simplifying and streamlining the entire workflow.',
      purpose: 'This workflow automates the process of sending and signing Non-Disclosure Agreements (NDAs). This is often one of the first steps before a business can have a detailed conversation with a potential partner or client. Automating this process speeds up the beginning of the sales or partnership cycle.',
      steps: [
        { name: 'Generate NDA', description: 'A salesperson or business development manager initiates a request to send an NDA to a third party.' },
        { name: 'Send for e-Signature', description: 'The NDA is automatically sent to the third party for electronic signature via a tool like DocuSign.' },
        { name: 'Counter-sign', description: 'Once the third party signs, the NDA is automatically routed back to an authorized person within the company to be counter-signed.' },
        { name: 'Archive Signed Agreement', description: 'The fully executed NDA is automatically saved to a central contract repository.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Problem handling for Telecom',
      slug: 'problem-handling-for-telecom',
      description: 'Manage all internal problems related to telecommunications using a specific problem-solving methodology.',
      purpose: 'This workflow is for telecommunications companies to manage network problems. It provides a structured process for diagnosing the root cause of network issues (like an outage or poor call quality) and implementing a permanent fix to prevent recurrence. It is a more in-depth process than simply resolving a single customer\'s incident.',
      steps: [
          { name: 'Problem Identified', description: 'A problem is identified, often due to a pattern of related incidents from network monitoring tools.' },
          { name: 'Root Cause Analysis', description: 'A team of network engineers performs a root cause analysis to find the underlying source of the problem.' },
          { name: 'Implement Fix', description: 'A permanent fix is developed, tested, and deployed in the network.' },
          { name: 'Monitor', description: 'The team monitors the network to ensure that the fix has resolved the problem and not introduced any new issues.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Product & Technical Support',
      slug: 'product-and-technical-support',
      description: 'This process aims to organize all the products that need technical support to improve support time and customer management.',
      purpose: 'This workflow is for companies that offer technical support for their products. It provides a tiered support structure, where simple issues are handled by front-line agents, and more complex issues are escalated to more senior technical experts or engineers. This ensures that resources are used efficiently and that customers get the right level of expertise for their issue.',
      steps: [
          { name: 'Level 1 Support', description: 'A customer contacts support, and a Level 1 agent handles the initial request, resolving common and simple issues.' },
          { name: 'Escalate to Level 2', description: 'If the Level 1 agent cannot resolve the issue, they escalate the ticket to a Level 2 technical support specialist.' },
          { name: 'Escalate to Engineering', description: 'If the Level 2 specialist determines the issue is a bug in the product, they escalate it to the engineering team.' },
          { name: 'Communicate Resolution to Customer', description: 'Once a fix is available, the support team communicates the resolution back to the customer.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Product return management',
      slug: 'product-return-management',
      description: 'This is a process to manage returns, with refund or exchange options.',
      purpose: 'This workflow, also known as a Return Merchandise Authorization (RMA) process, is for e-commerce companies to manage customer returns. It provides a structured process for customers to request a return, for the company to approve it, and for the warehouse to process the returned item. This ensures a smooth and efficient returns experience for the customer and proper handling of returned inventory.',
      steps: [
          { name: 'Customer Requests Return', description: 'A customer requests a return through an online portal, specifying the reason.' },
          { name: 'RMA Approval & Label', description: 'The system automatically approves the return (if it is within policy) and provides the customer with a shipping label.' },
          { name: 'Warehouse Receives Return', description: 'The warehouse receives the returned item and inspects it.' },
          { name: 'Process Refund/Exchange', description: 'Based on the inspection, the finance team processes a refund or a replacement item is shipped to the customer.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Service Problem Management',
      slug: 'service-problem-management',
      description: 'This process aims to respond immediately to customer-affecting service issues or failures in the telecommunications sector.',
      purpose: 'This workflow is similar to IT Problem Management but is specifically for customer-facing services in the telecom industry. When there is a service outage or degradation, this process kicks in to coordinate the response, from the network operations center to customer communications, with the goal of restoring service as quickly as possible and keeping customers informed.',
      steps: [
          { name: 'Major Incident Declared', description: 'A major service-affecting incident is declared, and a "war room" or incident command team is assembled.' },
          { name: 'Technical Investigation', description: 'The network operations team works to identify the root cause and restore service.' },
          { name: 'Customer Communications', description: 'The marketing and support teams provide regular updates to customers via social media and status pages.' },
          { name: 'Post-mortem Analysis', description: 'After the incident is resolved, a post-mortem is conducted to understand the cause and identify preventative measures.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Service Scheduling',
      slug: 'service-scheduling',
      description: 'A process designed to ensure that an organization\'s services and resources are scheduled as optimally and efficiently as possible.',
      purpose: 'This workflow is for service-based businesses (like consultants, trainers, or repair shops) to manage their appointment scheduling. It allows clients to book available time slots and automates the sending of confirmations and reminders. This reduces the administrative work of scheduling and helps to prevent no-shows.',
      steps: [
          { name: 'Client Books Appointment', description: 'A client books an available time slot through an online scheduling tool.' },
          { name: 'Appointment Confirmation', description: 'The client and the service provider both receive an automated email confirmation of the appointment.' },
          { name: 'Automated Reminders', description: 'Reminders are automatically sent to the client before the scheduled appointment.' },
          { name: 'Follow-up', description: 'After the service is completed, a follow-up email can be sent to ask for feedback or a review.' },
      ]
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
      description: 'This business process focuses on managing and fulfilling customer requests for appliance and electronics repairs in a timely and efficient manner.',
      purpose: 'This workflow is for repair shops to manage the entire repair process, from the moment a customer brings in a broken device to the moment they pick it up. It helps to track the status of each repair, manage parts inventory, and communicate with the customer throughout the process. This provides an efficient and professional experience for the customer.',
      steps: [
          { name: 'Check-in and Diagnosis', description: 'A customer brings in a device for repair. A technician diagnoses the issue and provides a quote.' },
          { name: 'Repair in Progress', description: 'Once the customer approves the quote, the technician performs the repair, ordering parts if necessary.' },
          { name: 'Quality Check', description: 'After the repair is complete, it is tested to ensure the issue is resolved.' },
          { name: 'Customer Notification & Pick-up', description: 'The customer is notified that their device is ready for pick-up.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Warranty Claim',
      slug: 'warranty-claim',
      description: 'A structured process to manage and track customer\'s warranty claims in case of product malfunction or defect.',
      purpose: 'This workflow manages customer claims under a product warranty. It provides a structured process for verifying proof of purchase, diagnosing the issue, and determining whether the claim is covered under the warranty terms. This ensures that all claims are handled fairly and consistently, in line with company policy.',
      steps: [
          { name: 'Customer Files Claim', description: 'A customer files a warranty claim, providing their proof of purchase and a description of the issue.' },
          { name: 'Claim Verification', description: 'A support agent verifies that the product is still within its warranty period and that the issue is covered.' },
          { name: 'Repair or Replace', description: 'The company decides whether to repair the item, replace it, or offer a refund.' },
          { name: 'Fulfillment', description: 'The repair is performed, or a replacement item is shipped to the customer.' },
      ]
  },
  {
      category: 'CS and Support',
      name: 'Warranty Management',
      slug: 'warranty-management',
      description: 'Managing the entire product warranty process, from diagnosis to repair, while also establishing the required time and cost.',
      purpose: 'This is a more comprehensive version of the Warranty Claim workflow, focused on the internal management of the entire warranty program. It includes tracking the costs associated with warranty claims, analyzing failure rates of different products, and using that data to improve product quality and forecast future warranty costs.',
      steps: [
          { name: 'Track Claim Costs', description: 'Track the cost of each warranty claim, including parts, labor, and shipping.' },
          { name: 'Analyze Failure Data', description: 'Analyze warranty claim data to identify trends and common failure points in products.' },
          { name: 'Feedback to Engineering', description: 'Provide feedback to the product engineering team to help improve product design and quality.' },
          { name: 'Forecast Warranty Reserves', description: 'Use historical claim data to forecast future warranty expenses and set aside adequate financial reserves.' },
      ]
  },
  {
    category: 'Admin and Ops',
    name: '5S Auditing',
    slug: '5s-auditing',
    description: 'A regular process for conducting 5S audits to maintain organization and eliminate waste in workplace operations.',
    purpose: '5S (Sort, Set in Order, Shine, Standardize, Sustain) is a workplace organization method. This workflow provides a checklist for conducting regular 5S audits to ensure that the workplace remains clean, organized, and efficient. It helps to embed the 5S methodology into the company culture and drive continuous improvement.',
    steps: [
        { name: 'Schedule Audit', description: 'Regular 5S audits are scheduled for different areas of the workplace.' },
        { name: 'Conduct Audit', description: 'An auditor uses a standardized checklist to evaluate an area against the 5S principles.' },
        { name: 'Identify Non-conformances', description: 'Any areas that do not meet the 5S standards are noted as non-conformances.' },
        { name: 'Create Action Plan', description: 'The team responsible for the area creates an action plan to address the non-conformances before the next audit.' },
    ]
  },
  {
      category: 'Admin and Ops',
      name: 'Business Process Mapping',
      slug: 'business-process-mapping',
      description: 'Supports mapping, evaluating, and managing business processes for optimal efficiency and documentation.',
      purpose: 'This workflow provides a structured approach to documenting a company\'s business processes. The act of mapping out a process helps to identify inefficiencies, bottlenecks, and areas for improvement. It is a foundational step for any business process improvement or automation initiative.',
      steps: [
          { name: 'Identify Process to Map', description: 'Select a key business process to be mapped.' },
          { name: 'Workshop & Information Gathering', description: 'Hold a workshop with the people who perform the process to map out each step, input, output, and decision point.' },
          { name: 'Create Process Map', description: 'Create a visual diagram (flowchart) of the process as it currently exists (the "as-is" process).' },
          { name: 'Analyze & Design Future State', description: 'Analyze the "as-is" map to identify improvement opportunities and design a more efficient "to-be" process.' },
      ]
  },
  {
      category: 'Admin and Ops',
      name: 'Commodities Strategy',
      slug: 'commodities-strategy',
      description: 'Organizes data for forecasting market trends in a simple kanban view for traders and analysts.',
      purpose: 'This workflow is for commodities traders or analysts. It provides a Kanban-style board to track and analyze different market signals and data points that could impact commodity prices. It helps to organize a large amount of information and provides a visual way to develop and track trading strategies.',
      steps: [
          { name: 'New Signal/Data Point', description: 'A new piece of market information (e.g., a weather report, a geopolitical event) is added as a card.' },
          { name: 'Analysis', description: 'An analyst researches the potential impact of the signal on a specific commodity.' },
          { name: 'Strategy Formulation', description: 'Based on the analysis, a potential trading strategy is formulated.' },
          { name: 'Execution', description: 'If the strategy is approved, it is executed by a trader.' },
      ]
  },
  {
      category: 'Admin and Ops',
      name: 'Competitive Analysis',
      slug: 'competitive-analysis',
      description: 'Investigates competitors, analyzes their strategies, and documents their strengths and weaknesses for strategic planning.',
      purpose: 'This workflow provides a structured process for gathering and analyzing intelligence about competitors. It helps companies stay aware of the competitive landscape and make informed strategic decisions. By systematically tracking competitors\' products, pricing, and marketing, a company can identify threats and opportunities in the market.',
      steps: [
          { name: 'Identify Key Competitors', description: 'Define the list of direct and indirect competitors to be tracked.' },
          { name: 'Information Gathering', description: 'Regularly gather information about competitors from public sources (e.g., their website, press releases, social media).' },
          { name: 'SWOT Analysis', description: 'For each key competitor, perform a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis.' },
          { name: 'Strategic Review', description: 'The competitive intelligence is reviewed by the leadership team to inform company strategy.' },
      ]
  },
  {
      category: 'Admin and Ops',
      name: 'Design Thinking',
      slug: 'design-thinking',
      description: 'A template for solving complex problems using Herbert Simon\'s Design Thinking methodology through structured innovation processes.',
      purpose: 'Design Thinking is a human-centered approach to innovation. This workflow provides a framework for applying the Design Thinking methodology to solve complex problems. It guides a team through the phases of empathizing with users, defining the problem, ideating solutions, prototyping, and testing.',
      steps: [
        { name: 'Empathize', description: 'Conduct user research to gain a deep understanding of the user\'s needs, motivations, and pain points.' },
        { name: 'Define', description: 'Synthesize the research to define a clear and actionable problem statement.' },
        { name: 'Ideate', description: 'Brainstorm a wide range of potential solutions to the defined problem.' },
        { name: 'Prototype', description: 'Build low-fidelity prototypes of the most promising solutions.' },
        { name: 'Test', description: 'Test the prototypes with real users to gather feedback and refine the solution.' },
      ]
  }
];
