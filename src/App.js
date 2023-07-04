import useScript from './hooks/useScript';

import logo from './logo.svg';
import './App.css';

function App() {
  // useScript("js/bootstrap.min.js");
  useScript("js/page-transition.js");
  useScript("js/imagesloaded.pkgd.min.js");
  useScript("js/validator.js");
  useScript("js/jquery.shuffle.min.js");
  useScript("js/masonry.pkgd.min.js");
  useScript("js/owl.carousel.min.js");
  useScript("js/jquery.magnific-popup.min.js");
  useScript("js/jquery.hoverdir.js");
  useScript("js/main.js");

  return (
    <>
  {/* /Loading animation */}
  <div id="page" className="page">
    {/* Header */}
    <header id="site_header" className="header">
      <div className="my-photo">
        <img src="images/my_photo.jpg" alt="image" />
        <div className="mask" />
      </div>
      <div className="site-title-block">
        <h1 className="site-title">Nguyễn Phước Đại</h1>
        <p className="site-description">Software Developer</p>
      </div>
      <a className="menu-toggle mobile-visible">
        <i className="fa fa-bars" />
      </a>
    </header>
    {/* /Header */}
    {/* Main Content */}
    <div id="main" className="site-main">
      {/* Page changer wrapper */}
      <div className="pt-wrapper">
        {/* Navigation & Social buttons */}
        <div className="site-nav mobile-menu-hide">
          {/* Main menu */}
          <ul id="nav" className="site-main-menu">
            {/* About Me Subpage link */}
            <li>
              <a
                className="pt-trigger"
                href="#about_me"
                data-animation={58}
                data-goto={1}
              >
                About me
              </a>
              {/* href value = data-id without # of .pt-page */}
            </li>
            {/* /About Me Subpage link */}
            <li>
              <a
                className="pt-trigger"
                href="#resume"
                data-animation={59}
                data-goto={2}
              >
                Resume
              </a>
            </li>
            {/* <li>
              <a
                className="pt-trigger"
                href="#portfolio"
                data-animation={60}
                data-goto={3}
              >
                Portfolio
              </a>
            </li> */}
          </ul>
          {/* /Main menu */}
          {/* Social buttons */}
          <ul className="social-links">
            <li>
              <a className="tip social-button" href="https://www.facebook.com/npdai1995/" target="_blank" title="Facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="tip social-button" href="https://www.linkedin.com/in/%C4%91%E1%BA%A1i-nguy%E1%BB%85n-6b9346266/" target="_blank" title="Linked In">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
          {/* /Social buttons */}
        </div>
        {/* Navigation & Social buttons */}
        {/* Subpages */}
        <div className="subpages">
          {/* About Me Subpage */}
          <section className="pt-page pt-page-1" data-id="about_me">
            <div className="section-title-block">
              <h2 className="section-title">About Me</h2>
              <h5 className="section-description">
                Agile, Resourceful, Collaborative
              </h5>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 mobile-visible subpage-block">
                <div className="my-photo-small">
                  <img src="images/photo_small.jpg" alt="image" />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 subpage-block">
                <div className="general-info">
                  <h3>I am Software Developer</h3>
                  <p>
                    I've worked as a developer for portals, gateways, and calculators. Bonuses include contracts and insurance for all sales assistance with financial matters.
                  </p>
                  <p>A self-motivated IT specialist with extensive corporate finance knowledge and expertise in web development (both front-end & back-end), mobile and databases, as well as strong talents and abilities in producing clean and efficient code.</p>
                  <p>To be able to work for a supportive and stable organization that will help me learn, improve, and acquire the skills required to become the best developer I can be.</p>
                </div>
              </div>
            </div>
            {/* Services block */}
            <div className="block-title">
              <h3>Services</h3>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img
                      src="images/service/web_design.png"
                      alt="Responsive Design"
                    />
                    <h4>Portals</h4>
                    <p>
                        An advanced website that offers centralized access to various resources, applications, and services, enhancing convenience and efficiency for users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="images/service/copywrite.png" alt="Copywriter" />
                    <h4>Gateways</h4>
                    <p>
                    The facilitate secure communication and data exchange between systems, acting as intermediaries for seamless interoperability and integration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="images/service/ecommerce.png" alt="E-Commerce" />
                    <h4>E-Commerce</h4>
                    <p>
                      The online buying and selling of goods and services, revolutionizing business transactions with global reach and convenience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 subpage-block">
                <div className="service-block">
                  <div className="service-info">
                    <img src="images/service/management.png" alt="Management" />
                    <h4>Calculate reward</h4>
                    <p>
                    Involves determining the value or amount earned by individuals based on specific criteria or actions, incentivizing desired behaviors and fostering customer loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Fun fucts block */}
          </section>
          {/* End of About Me Subpage */}
          {/* Resume Subpage */}
          <section className="pt-page pt-page-2" data-id="resume">
            <div className="section-title-block">
              <h2 className="section-title">Resume</h2>
              <h5 className="section-description">5 Years of Experience</h5>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 subpage-block">
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline">
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">02/2021 - Current</h5>
                    <h4 className="event-name">Home Credit VietNam</h4>
                    <span className="event-description">Software Developer</span>
                    <ul className='ul-resume'>
                      <li className='li-project'>Primary responsibilities: Monthly bonus calculations for Sales.</li>
                      <li>- Role: Software Developer</li>
                      <li>- Features: Sales incentives based on KPIs, sales assistance-All sales kpi should be checked by the admin.</li>
                      <li className='li-end'>- Skills: MSSQL, Oracle, and Excel soft skills.</li>

                      <li className='li-project'>Research & Buiding Framework</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Features: Building framework which has the corresponding functions portal.</li>
                      <li>- Skills: </li>
                      <li>+ Back-end: .NET Core, MSSQL.</li>
                      <li className='li-end'>+ Front-end: ASP.NET Razor (MVC).</li>

                      <li className='li-project'>Message Mail</li>
                      <li>- Role: Developer</li>
                      <li>- Features: OTP & Mail for sales.</li>
                      <li className='li-end'>- Skills: + Back-end: .NET Core, MSSQL.</li>

                      <li className='li-project'>Schedule System</li>
                      <li>- Role: Fullstack Developer</li>
                      <li>- Features: set up a task for each day and hour obtain data by flow: obtain data from the datawarehouse and provide it to the owner scheme. Then get from the owner scheme to the database calculator.</li>
                      <li className='li-end'>- Skills: C# MVC, .NET Core, MSSQL, Oracle.</li>
                      
                    </ul>
                  </div>

                  <div className="timeline-event te-primary">
                    <h5 className="event-date">01/2020 - 02/2021</h5>
                    <h4 className="event-name">VietCredit Finance Company</h4>
                    <span className="event-description">Full Stack Developer</span>
                    <ul className='ul-resume'>
                      <li className='li-project'>VietCredit Customer Mobile App</li>
                      <li>- Role: Back-end Developer.</li>
                      <li>- Timeline: 05/2020 - 06/2020</li>
                      <li>- Features: The application allows customers to access to view transaction details, statements, credit limits, customer information, activate cards, lock card emergencies.</li>
                      <li className='li-end'>- Skills: C#, ServiceStack, MSSQL, Web Services.</li>

                      <li className='li-project'>VietCredit Portal</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 01/2020 - 12/2020</li>
                      <li>- Features: Professional management of all departments.</li>
                      <li className='li-end'>- Skills: C# (DotNetNuke), MSSQL, Oracle, ServiceStack.</li>

                      <li className='li-project'>Support Covid Customer</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 03/2020 - 12/2020</li>
                      <li>- Features: Allows customers with outstanding loans to register for debt repayment in the form of debt rescheduling</li>
                      <li>- Skills:</li>
                      <li>+ Front-end: C# MVC.</li>
                      <li className='li-end'>+ Back-end: C# (DotNetNuke), MSSQL, Oracle, ServiceStack.</li>

                      <li className='li-project'>Digital Onboarding Platform</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 10/2020 - 01/2021</li>
                      <li>- Features: The Digital Onboarding Platform (hereinafter referred to as DOP) is VietCredit's comprehensive solution to receive and process records of Clients from various sources. You can quickly and easily apply for a VietCredit loan card.</li>
                      <li className='li-end'>- Skills: C# (DotNetNuke), MSSQL, Oracle, ServiceStack.</li>

                      <li className='li-project'>Research & Buiding Framework</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 01/2020 - 04/2020</li>
                      <li>- Features: Building Framework Services base on ServiceStack, Customize Portal, Build Framework Mobile Flutter with Redux.</li>
                      <li>- Skills:</li>
                      <li>+ Back-end: C#(DotNetNuke), MSSQL, ServiceStack.</li>
                      <li>+ Front-end: ASP.NET MVC.</li>
                      <li className='li-end'>+ Mobile: Flutter.</li>

                      <li className='li-project'>SAM(Sale Activity Management)</li>
                      <li>- Role: Back-end Developer</li>
                      <li>- Timeline: 02/2020 - 05/2020</li>
                      <li>- Features:  Manage sale activities when meeting customers.</li>
                      <li className='li-end'>- Skills: C#(DotNetNuke), MSSQL, ServiceStack.</li>

                      <li className='li-project'>Payment Gateway</li>
                      <li>- Role: Back-end Developer</li>
                      <li>- Timeline: 02/2020 - 05/2020</li>
                      <li>- Features: The gateway to receive all transaction queries, payment transactions, and cancel transactions of partners.</li>
                      <li className='li-end'>- Skills: MSSQL, C# Web Service.</li>

                      <li className='li-project'>ESB (Enterprise Service Bus)</li>
                      <li>- Role: Back-end Developer</li>
                      <li>- Timeline: 04/2020 - 06/2020</li>
                      <li>- Features: Transaction Navigator, Message Delivery Manager, Receiving Processing Unit convert transactions into CMS.</li>
                      <li className='li-end'>- Skills: MSSQL, C# Web Service.</li>

                      <li className='li-project'>Data Posting Tool</li>
                      <li>- Role: Back-end Developer</li>
                      <li>- Timeline: 05/2020 - 06/2020</li>
                      <li>- Features: Transfer transactions into the CMS system.</li>
                      <li className='li-end'>- Skills: MSSQL, C# Web Service.</li>

                      <li className='li-project'>GRAB, KBANK</li>
                      <li>- Role: Back-end Developer</li>
                      <li>- Timeline: 05/2020 - 06/2020</li>
                      <li>- Features:  To make a bulk loan card according to the merchant's list.</li>
                      <li>+ Convert file information of customers who need to open VietCredit card into the temporary system.</li>
                      <li>+ After a period of time, the schedule task runs to transfer the information previously imported by customers into the CAS profiling system and calculate Scoring and lookup PCBs. If data meet the requirements, It will create a card on CMS.</li>
                      <li className='li-end'>- Skills: MSSQL, C# Web Service.</li>

                      <li className='li-project'>Payment By VNPAY</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 10/2020 - 12/2020</li>
                      <li>- Features: Allows customers to pay their outstanding loans through VNPAY.</li>
                      <li className='li-end'>Skills: Angular, C# MVC, MSSQL, ServiceStack, System integration with VNPAY.</li>
                    </ul>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">11/2019 - 12/2019</h5>
                    <h4 className="event-name">TTC Land Corp</h4>
                    <span className="event-description">Web Application Developer</span>
                    <ul className='ul-resume'>
                      <li>- I have knowledge about CRM and ERP applications.</li>
                      <li>- Knowledge management model of a real estate company</li>
                      <li>- Building Portal of business Real Estate.</li>
                      <li>- System integration with FPT Soft.</li>
                      <li className='li-project'>Skills: ERP Software · Customer Relationship Management (CRM)</li>
                    </ul>
                  </div>
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">10/2018 - 10/2019</h5>
                    <h4 className="event-name">ATG - ALTTEK GLOBAL</h4>
                    <span className="event-description">Full Stack Developer</span>
                    <ul className='ul-resume'>
                      <li className='li-project'>Giftalk VST(Card Prepaid).</li>
                      <li>- Timeline: 01/2018 - 05/2018</li>
                      <li>- Features: Customers who buy prepaid cards can transact at all merchants affiliated with VST.</li>
                      <li>- Skills:</li>
                      <li>+ Portal: C# (DotNetNuke), MSSQL.</li>
                      <li className='li-end'>+ Services: Implement services API from ServiceStack.</li>


                      <li className='li-project'>IFind(Promotions, Attractive Offers)</li>
                      <li>- Timeline: 01/2018 - 05/2018</li>
                      <li>- Features: Allows customers to hunt for all IFind's partner's deals.</li>
                      <li className='li-end'>- Skills: C# (DotNetNuke), MSSQL.</li>

                      <li className='li-project'>DAMH(Digital Asset Management Holding)</li>
                      <li>- Timeline: 09/2018 - 12/2018</li>
                      <li>- Features: Allows customers to transact online, watch the exchange rate assets rise and fall.</li>
                      <li>- Skills:</li>
                      <li>+ Back-end: C# , MSSQL, Rabbit MQ, Redis.</li>
                      <li>+ Portal: C# (DotNetNuke) Configuration assets, fee transaction, limit transaction, settings for front-end, back-end ...v.v . Inquiries catalog of databases.</li>
                      <li>+ Stellar explorer: Construct and deploy an explorer based on an open source project.</li>
                      <li>+ Core blockchain: Build services based on SDKs of Stellar includes transaction, account, assets, customer. Docker is used to deploy to UAT and staging.</li>
                      <li className='li-end'>+ Front-end: Stellar-Term (Stellar Trading Client) build & customization assets management, authorize customer, exchange rate assets from opensource project (React js). Release & set up connect to services</li>

                      <li className='li-project'>Sacombank (Lottery Number)</li>
                      <li>- Timeline: 11/2018 - 12/2018</li>
                      <li>- Features: Promotion for customers using credit cards, each spending 1 million will get 1 spin.</li>
                      <li>- Skills: </li>
                      <li>+ Back-end: C# (DotNetNuke), MSSQL, System integration with Sacombank.</li>
                      <li>+ Front-end: HTML5, CSS, Javascript.</li>
                      <li>+ Deploy to Production.</li>

                      <li className='li-project'>VNPAY(POS)</li>
                      <li>- Timeline: 03/2019 - 09/2019</li>
                      <li>- Features: Build a service gateway's receive transactions from the POS machine, convert the transaction to ISO-8583 to send the endpoint of the bank. Then, receive information from the bank & respond to the client.</li>
                      <li>- Skills: </li>
                      <li>+ C#(DotNetNuke), MSSQL, ServiceStack, Message ISO-8583, Research & apply technology about HSM-Thales.</li>
                      <li>+ Deploy to UAT & Staging.</li>

                      <li className='li-project'>Various other outsourced tasks</li>
                      <li className='li-project'>Skills: C#, ServiceStack, Integration, Redis, RabbitMQ, Blockchain, jQuery, React.js, HTML, Cascading Style Sheets (CSS), JavaScript, DotNetNuke (DNN), Microsoft SQL Server</li>
                    </ul>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">10/2018 - 05/2019</h5>
                    <h4 className="event-name">Mentor</h4>
                    <span className="event-description">CyberSoft Academy</span>
                    <ul className='ul-resume'>
                      <li>- To guide the participants to understand the Front-end technologies.</li>
                      <li>- Grading and commenting on students' homework through error checking of homework.</li>
                      <li>- Support for activities of the center.</li>
                      <li>- In short, here I know how to impart knowledge and tutorials for Frontend developer beginners. In particular, I have an understanding of LMS (LEARNING MANAGEMENT SYSTEM)</li>
                      <li className='li-project'>Skills: Front-End Development</li>
                    </ul>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">01/2017 - 01/2018</h5>
                    <h4 className="event-name">Sacombank</h4>
                    <span className="event-description">Collaborator - Internship</span>
                    <ul className='ul-resume'>
                      <li className='li-project'>Checkout Gateway</li>
                      <li>- Features: Checkout Gateway that enables cardholders to process payments on merchant websites using their Visa, Master, JCB, or NAPAS cards issued by Sacombank or other banks.</li>
                      <li className='li-project'>Portal (branch Sacombank-Cambodia)</li>
                      <li>- Features: perform database searches and produce reports.</li>
                      <li className='li-project'>Checkout Gateway</li>
                      <li>- Features: Checkout Gateway that enables cardholders to process payments on merchant websites using their Visa, Master, JCB, or NAPAS cards issued by Sacombank or other banks. </li>
                      <li className='li-project'>Portal (branch Sacombank-Cambodia)</li>
                      <li>- Features: perform database searches and produce reports.</li>
                      <li className='li-project'>Skills: HTML · Cascading Style Sheets (CSS) · JavaScript · Angular · DotNetNuke (DNN) · Microsoft SQL Server </li>
                    </ul>
                  </div>

                  <div className="timeline-event te-primary">
                    <h5 className="event-date">08-2018 - Current</h5>
                    <h4 className="event-name">Freelancer</h4>
                    <ul className='ul-resume'>
                      <li className='li-project'>Google Custom Search API</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 08/2019 - 09/2019</li>
                      <li>- Features: Apply API of google search custom to project, it's show result from google-API & shows ads of google, research Elastic Search Engine (Logstash, Elastic, Kibana, Filebeat) and apply it to project search.</li>
                      <li className='li-end'>- Skills: Logstash, Elastic, Kibana, Filebeat, Angular 2, Ads Google from Third Party.</li>

                      <li className='li-project'>Dynamic Module</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 01/2019 - 06/2019</li>
                      <li>- Features: Participate in project development to create modules automatically product management, business management, warehouse management.</li>
                      <li className='li-end'>- Skills: C#, MSSQL, ServiceStack, Angular 2(Metronic Theme).</li>

                      <li className='li-project'>Checkout Payment</li>
                      <li>- Role: Front End Developer.</li>
                      <li>- Timeline: 03/2019 - 06/2019</li>
                      <li>- Features: Join payment integration, develop a shopping cart module</li>
                      <li className='li-end'>- Skills: Angular 2, Node js, MongoDB.</li>

                      <li className='li-project'>Ebook Reader</li>
                      <li>- Role: Mobile Developer.</li>
                      <li>- Timeline: 01/2019 - 04/2019</li>
                      <li>- Features: Develop application could management user role and read, edit file pdf from URL, file, file local. </li>
                      <li className='li-end'>- Skills:  Flutter, SQLite</li>

                      <li className='li-project'>Tap Hoa 4.0</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 01/2019 - 06/2019</li>
                      <li>- Features: Allows customers to order on the app and delivery groceries nearby</li>
                      <li>- Skills: </li>
                      <li>+ Back-end: C#(DotNetNuke), MSSQL, ServiceStack.</li>
                      <li>+ Front-end: React js.</li>
                      <li className='li-end'>+ Mobile: Flutter.</li>

                      <li className='li-project'>Real Estate</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 09/2019 - 10/2019</li>
                      <li>- Features:Allows posting of real estate rental.</li>
                      <li>- Skills: </li>
                      <li>+ Back-end: C#(DotNetNuke), MSSQL, ServiceStack.</li>
                      <li>+ Front-end: ASP.NET MVC.</li>
                      <li className='li-end'>+ Mobile: Flutter.</li>

                      <li className='li-project'>Auto Bot Game & Dashboard Management</li>
                      <li>- Role: Fullstack Developer.</li>
                      <li>- Timeline: 07/2021- 09/2021</li>
                      <li>- Features: Allows set up & autoplay game, play to earn token on the blockchain. Connect to marketplace Hive-Engine.</li>
                      <li>- Skills: </li>
                      <li>+ Back-end: Node js (Puppeteer Node library)</li>
                      <li className='li-end'>+ Front-end: React js.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline">
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">05/2018 - 10/2018</h5>
                    <h4 className="event-name">Cybersoft Academy</h4>
                    <span className="event-description">
                      Student
                    </span>
                    <p>
                    Learning more about web application technologies and earning an honors degree A few examples of simple to complex technology include HTML, CSS, Javascript/jQuery, Webpack, TypeScript, Angular 2, and Reactjs.
                    </p>
                  </div>
                  {/* Single event */}
                  <div className="timeline-event te-primary">
                    <h5 className="event-date">2013-2018</h5>
                    <h4 className="event-name">Can Tho University</h4>
                    <span className="event-description">
                      Student
                    </span>
                    <p>
                    General studies for developers include computer science, software engineering, web development, database management, programming, data science.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 subpage-block">
                <div className="block-title">
                  <h3>Coding Skills</h3>
                </div>
                <div className="skills-info">
                  <h4>Back-end (C#, Node js, Web Services, Gateway)</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-5" />
                  </div>
                  <h4>Front-end (React js, Angular)</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-6" />
                  </div>
                  <h4>Databases (MSSQL, MySQL, Oracle, MongoDB)</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-6" />
                  </div>
                  <h4>Mobile (Flutter, React Native)</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-7" />
                  </div>
                  <h4>Others (Redis, RabbitMQ, Git, Soft skills excel, ...)</h4>
                  <div className="skill-container">
                    <div className="skill-percentage skill-8" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="download-cv-block">
                  <a className="button" target="_blank" href="#">
                    Download CV
                  </a>
                </div>
              </div>
            </div> */}
          </section>
          {/* End Resume Subpage */}
          {/* Portfolio Subpage */}
          <section className="pt-page pt-page-3" data-id="portfolio">
            <div className="section-title-block">
              <h2 className="section-title">Portfolio</h2>
              <h5 className="section-description">My Best Works</h5>
            </div>
            {/* Portfolio Content */}
            <div className="portfolio-content">
              {/* Portfolio filter */}
              <ul id="portfolio_filters" className="portfolio-filters">
                <li className="active">
                  <a
                    className="filter btn btn-sm btn-link active"
                    data-group="all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="media">
                    Media
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="illustration"
                  >
                    Illustration
                  </a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="video">
                    Video
                  </a>
                </li>
              </ul>
              {/* End of Portfolio filter */}
              {/* Portfolio Grid */}
              <div
                id="portfolio_grid"
                className="portfolio-grid portfolio-masonry masonry-grid-3"
              >
                {/* Portfolio Item 1 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/1.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 1 */}
                {/* Portfolio Item 2 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Praesent Dolor Ex"
                    className="lightbox mfp-iframe"
                  >
                    <img src="images/portfolio/2.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 2 */}
                {/* Portfolio Item 3 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/3.jpg"
                    className="lightbox"
                    title="Duis Eu Eros Viverra"
                  >
                    <img src="images/portfolio/3.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 3 */}
                {/* Portfolio Item 4 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/4.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 4 */}
                {/* Portfolio Item 5 */}
                <figure className="item" data-groups='["all", "illustration"]'>
                  <a
                    href="images/portfolio/5.jpg"
                    className="lightbox"
                    title="Aliquam Condimentum Magna Rhoncus"
                  >
                    <img src="images/portfolio/5.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 5 */}
                {/* Portfolio Item 6 */}
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/6.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 6 */}
                {/* Portfolio Item 7 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Nulla Facilisi"
                    className="lightbox mfp-iframe"
                  >
                    <img src="images/portfolio/7.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 7 */}
                {/* Portfolio Item 8 */}
                <figure className="item" data-groups='["all",  "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/8.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 8 */}
                {/* Portfolio Item 9 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/9.jpg"
                    className="lightbox"
                    title="Mauris Neque Dolor"
                  >
                    <img src="images/portfolio/9.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 9 */}
                {/* Portfolio Item 10 */}
                <figure className="item" data-groups='["all", "video"]'>
                  <a
                    href="https://player.vimeo.com/video/97102654?autoplay=1"
                    title="Donec Lectus Arcu"
                    className="lightbox mfp-iframe"
                  >
                    <img src="images/portfolio/10.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="fa fa-video-camera" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 10 */}
                {/* Portfolio Item 11 */}
                <figure className="item" data-groups='["all","illustration"]'>
                  <a
                    href="images/portfolio/11.jpg"
                    className="lightbox"
                    title="Duis Eu Eros Viverra"
                  >
                    <img src="images/portfolio/11.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="fa fa-image" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 11 */}
                {/* Portfolio Item 12 */}
                <figure className="item" data-groups='["all","media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/12.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="fa fa-file-text-o" />
                    </div>
                  </a>
                </figure>
                {/* /Portfolio Item 12 */}
              </div>
              {/* /Portfolio Grid */}
            </div>
            {/* /Portfolio Content */}
          </section>
        </div>
      </div>
      {/* /Page changer wrapper */}
    </div>
    {/* /Main Content */}
  </div>
</>

  );
}

export default App;
