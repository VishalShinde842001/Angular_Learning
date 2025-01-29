import { Injectable, Input } from "@angular/core";
import { Task } from "../models/Task";


@Injectable()
export class TaskService {


    @Input() searchKey: string = '';

    getTaskList(): Task[] {
        const tasks: Task[] = [
            new Task(1, 'Design User Interface', 'Create wireframes and mockups for the new website interface.', 'In Progress', '2023-01-10', '2023-01-15'),
            new Task(2, 'Develop Login System', 'Implement a secure login system with email verification.', 'Completed', '2023-01-12', '2023-01-18'),
            new Task(3, 'Write API Documentation', 'Document the new REST API endpoints for the upcoming release.', 'Not Started', '2023-01-15', '2023-01-30'),
            new Task(4, 'Code Review', 'Review pull requests for the new user authentication feature.', 'In Progress', '2023-01-17', '2023-01-20'),
            new Task(5, 'Setup Database', 'Configure MySQL database for the new project.', 'Completed', '2023-01-05', '2023-01-10'),
            new Task(6, 'Team Meeting', 'Organize and facilitate a team meeting to discuss sprint progress.', 'In Progress', '2023-01-15', '2023-01-15'),
            new Task(7, 'Fix Security Vulnerabilities', 'Patch identified security vulnerabilities in the backend.', 'Not Started', '2023-01-19', '2023-01-25'),
            new Task(8, 'User Testing', 'Conduct user testing for the new mobile app features.', 'Completed', '2023-01-20', '2023-01-22'),
            new Task(9, 'Integrate Payment Gateway', 'Integrate Stripe payment gateway into the e-commerce website.', 'In Progress', '2023-01-18', '2023-02-01'),
            new Task(10, 'Upgrade Node.js Version', 'Upgrade Node.js to the latest stable version on the production server.', 'Completed', '2023-01-08', '2023-01-12'),
            new Task(11, 'Client Feedback Review', 'Review client feedback and suggest changes to the project design.', 'In Progress', '2023-01-14', '2023-01-20'),
            new Task(12, 'Create Marketing Strategy', 'Develop a marketing strategy for the upcoming product launch.', 'Not Started', '2023-01-21', '2023-01-28'),
            new Task(13, 'Build Landing Page', 'Create a landing page for the upcoming product launch campaign.', 'Completed', '2023-01-10', '2023-01-15'),
            new Task(14, 'Prepare Financial Report', 'Compile the monthly financial report for the senior management team.', 'In Progress', '2023-01-25', '2023-01-30'),
            new Task(15, 'Bug Fix for Mobile App', 'Resolve issues in the mobile app related to crash on launch.', 'Completed', '2023-01-12', '2023-01-14'),
            new Task(16, 'Update Documentation', 'Update user documentation to reflect new app features in version 2.0.', 'Not Started', '2023-01-18', '2023-01-25'),
            new Task(17, 'Set Up Continuous Integration', 'Configure Jenkins for continuous integration and deployment for the new project.', 'In Progress', '2023-01-20', '2023-01-28'),
            new Task(18, 'Implement Search Feature', 'Add a search bar functionality to the website to improve user experience.', 'Completed', '2023-01-14', '2023-01-18'),
            new Task(19, 'Organize Office Event', 'Plan and organize the office event for the quarterly team-building day.', 'In Progress', '2023-01-22', '2023-01-30'),
            new Task(20, 'Prepare Monthly Newsletters', 'Design and prepare the monthly company newsletter for all employees.', 'Not Started', '2023-01-25', '2023-01-30'),
            new Task(21, 'Implement User Permissions', 'Implement role-based user permissions for the admin panel.', 'Completed', '2023-01-06', '2023-01-10'),
            new Task(22, 'Redesign Homepage', 'Redesign the homepage layout to improve aesthetics and user engagement.', 'In Progress', '2023-01-17', '2023-01-22'),
            new Task(23, 'Server Maintenance', 'Perform maintenance on the web server and ensure there is no downtime.', 'Completed', '2023-01-09', '2023-01-11'),
            new Task(24, 'Plan Project Milestones', 'Plan the project milestones and timelines for the upcoming quarter.', 'Not Started', '2023-01-20', '2023-01-25'),
            new Task(25, 'Create User Registration Flow', 'Implement a user-friendly registration flow for new users on the website.', 'Completed', '2023-01-11', '2023-01-15'),
            new Task(26, 'Monitor Server Load', 'Monitor server load during peak hours to ensure system stability.', 'In Progress', '2023-01-19', '2023-01-24'),
            new Task(27, 'Develop Admin Dashboard', 'Develop a dashboard for admins to track key metrics and user data.', 'Not Started', '2023-01-21', '2023-01-30'),
            new Task(28, 'Create Employee Onboarding Material', 'Design onboarding materials for new employees, including training guides.', 'Completed', '2023-01-02', '2023-01-08'),
            new Task(29, 'Create Data Backup System', 'Set up automated backups for critical project data on the cloud.', 'In Progress', '2023-01-18', '2023-01-22'),
            new Task(30, 'SEO Optimization', 'Optimize the website content for better SEO performance and rankings.', 'Completed', '2023-01-10', '2023-01-15'),
            new Task(31, 'Fix Broken Links', 'Identify and fix broken links across the website to improve user experience.', 'In Progress', '2023-01-16', '2023-01-20'),
            new Task(32, 'Create Internal Wiki', 'Create and organize an internal knowledge base (wiki) for the company.', 'Not Started', '2023-01-20', '2023-01-30'),
            new Task(33, 'Client Presentation', 'Prepare and present a proposal for a new client project.', 'In Progress', '2023-01-22', '2023-01-26'),
            new Task(34, 'Test New Features', 'Conduct testing for newly developed features before release.', 'Completed', '2023-01-05', '2023-01-10'),
            new Task(35, 'Train New Hires', 'Conduct training sessions for new hires in the customer support department.', 'In Progress', '2023-01-23', '2023-01-30'),
            new Task(36, 'Create App Promo Video', 'Create a promotional video for the mobile app launch on YouTube and social media.', 'Not Started', '2023-01-18', '2023-01-25'),
            new Task(37, 'Update Privacy Policy', 'Revise and update the company’s privacy policy to align with new regulations.', 'Completed', '2023-01-10', '2023-01-12'),
            new Task(38, 'Manage Social Media', 'Schedule and manage social media posts for the company’s LinkedIn and Twitter accounts.', 'In Progress', '2023-01-15', '2023-01-20'),
            new Task(39, 'Plan Annual Budget', 'Prepare the financial budget for the next fiscal year.', 'Not Started', '2023-01-22', '2023-01-28'),
            new Task(40, 'Create Mobile App Prototype', 'Design a prototype for the new mobile app and share with stakeholders.', 'Completed', '2023-01-08', '2023-01-12'),
            new Task(41, 'Resolve Customer Complaints', 'Resolve customer complaints reported through the support portal.', 'In Progress', '2023-01-15', '2023-01-22'),
            new Task(42, 'Employee Performance Reviews', 'Conduct performance reviews for employees at the end of their probation period.', 'Not Started', '2023-01-19', '2023-01-23'),
            new Task(43, 'Optimize Database Queries', 'Review and optimize SQL queries to enhance database performance.', 'Completed', '2023-01-04', '2023-01-08'),
            new Task(44, 'Develop Reporting Feature', 'Implement a reporting feature for users to generate customized reports.', 'In Progress', '2023-01-10', '2023-01-20'),
            new Task(45, 'Provide Technical Support', 'Assist customers with troubleshooting technical issues related to the product.', 'Completed', '2023-01-07', '2023-01-10'),
            new Task(46, 'Update Product Roadmap', 'Revise the product roadmap for the next 6 months based on feedback.', 'In Progress', '2023-01-20', '2023-01-30'),
            new Task(47, 'Design Marketing Materials', 'Design digital marketing materials for the product launch event.', 'Completed', '2023-01-02', '2023-01-05'),
            new Task(48, 'Create Demo Video', 'Create a demo video to showcase the key features of the product for customers.', 'Not Started', '2023-01-21', '2023-01-28'),
            new Task(49, 'Fix UI Bugs', 'Fix UI-related bugs reported by users in the last app release.', 'In Progress', '2023-01-18', '2023-01-23'),
            new Task(50, 'Write Blog Post', 'Write a blog post for the company website about the upcoming product launch.', 'Completed', '2023-01-10', '2023-01-12')
        ];

        return tasks;
    }


    constructor() {

    }

}