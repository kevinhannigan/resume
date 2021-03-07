const fullConfig = {
    name: "Kevin T. Hannigan",
    email: "khannigan94@gmail.com",
    phone: "262.573.2242",
    location: "Chicago, IL",
    education: [{
        school: 'University of Wisconsin',
        degree: 'Industrial and Systems Engineering',
        awards: [`Dean's List 5/8 Semesters`, 'Robert Ratner Senior Design Award']
    }],
    experience: [
            {
              company: 'Deloitte Digital',
              location: 'Chicago, IL',
              title:
                'Senior Consultant',
              dates: 'September 2017 - March 2021',
              responsibilities: ['Product owner for an internal IT application built for modeling and forecasting data center infrastructure costs, where I lead the prioritization of functional requirements across front-end (React JS) and back-end (Python and PHP) development teams through agile, bi-weekly sprints and client stakeholder workshops with Finance Directors, Technical Program Managers, and Sourcing Managers', 'Manage development activities across functional, technical, and integration resources to lead the direction of product build while managing the project’s scope and timeline', 'Develop data-pipelines (Presto and MySQL)  and REST APIs  to analyze and stage large data sets for front-end development and enable collaboration across Finance, Capacity, and Infrastructure teams', 'Designed and configured automated Revenue Recognition scenarios, within ASC 606 compliance, for a leading U.S. RPA solution provider by working with cross-functional teams in Sales, Order Management, Order Fulfillment, and back-office Finance departments', 'Designed and implemented a CRM and Order Management system created for a global $3B+ warehousing and distribution client that featured fully customized modules for order entry, order fulfillment and customer returns – built on NetSuite as the ‘Lead to Order’ & ‘Order to Cash’ team lead', 'Was the lead for: Lead to Order, Order to Cash, and Revenue Recognition functional business areas across 5 full-cycle ERP and CRM implementations', 'Built dashboards and reports using SQL and Tableau to measure operational efficiency in data centers and create financial disclosure documents', 'Designed cross-application integrations (using Dell Boomi) between CRM, CPQ and ERP tools to reduce manual data entry tasks and expedite time to Quoting and Invoicing'],
            },
            {
              id: '2',
              company: 'Baker Tilly',
              location: 'Chicago, IL',
              title:
                'Consultant',
              dates: 'August 2016 - September 2017',
              responsibilities: ['Implemented ERP and Manufacturing Execution systems for automotive suppliers to reflect the business requirements gathered for: EDI, Material Resource Planning, Shop Floor Production, Purchasing and Cost Accounting', 'Interviewed business unit leaders to design future state IT processes for the supply chain department of a U.S Defense contractor and created training materials to support going live on new IT systems'],
            }
          ],
    skills: [`IT Transformation & Implementation (ERP, CRM)`, `React JS`, `Project Management (Agile/ Waterfall)`, `BI Reporting (SQL, Presto, Tableau)`, `Process Mapping (Visio)`, `Data Pipelines and Analysis (Apache Airflow, Python Pandas)`],
    certifications: [`NetSuite SuiteFoundations`, `Salesforce CPQ Specialist`, `Certified Scrum Master`],
    projects: [`fetch-waves.com – Website dedicated to forecasting wave and wind conditions on the Great Lakes. Developed with MERN stack (MongoDB, Express.JS, React.js and Node) and Deployed with Heroku`, `Resume Generator - React Application that generates a formatted resume given a JSON config file`],
    interests: [`Surfing (the Great Lakes)`, `traveling abroad`, `exploring new restaurants`]
}

export default fullConfig

