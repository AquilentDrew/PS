---

layout: interior-post

title: Development Principles

categories: development-infrastructure

categoryheader: no

tags:
- Development Infrastructure

--- 

<h3>Agile Process Needs</h3>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Identify the team &ndash; stakeholders, product owners, Scrum master(s), execution teams etc.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Define and agree upon the following:</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Product backlog</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Release backlog</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Iteration timeframe (a two or a three week iteration)</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Retrospectives</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Demos</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Based on the product backlog, identify iteration plan by decomposing requirements into user stories.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Estimate the level of effort for these user stories (preferably in terms of user story points).</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Based on the release timeline and plan, identify the number of iterations needed (including iteration 0 and clean up iteration if possible).</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Identify tools to measure capacity, velocity and burn down charts to measure progress and to identify opportunities to improve after each iteration.</span></li>
</ul>
<h3>Get agreement from the responsible team leads</h3>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Use an issue and project tracking system to manage team and projects</span></li>
</ul>
<p>Learn more about our design principles:</p>
<div id="TbsCollapseId-1683064322" class="accordion ">
</div>
 			<div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-10887900" data-parent="#TbsCollapseId-1683064322" data-toggle="collapse" class="accordion-toggle">
Usage of Common Share UI libraries				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-10887900">
<div class="accordion-inner">

<p>Use of existing frameworks, libraries, resources, and controls to facilitate presentation layer/UI development to achieve consistency, standardization and efficiency.</p>
<ul>
<li>Identify opportunities to leverage established frameworks such as Assets.cms.gov. Marketplace UI developers already using it.</li>
<li>Identify global UI libraries for example jQuery UI (different versions), jQuery UI CSS, and other external proven JS libraries.</li>
<li>Utilize existing UI framework features. These include eg: HTML5 Shiv, CSS3, Twitter Bootstrap Responsive Design, etc. wherever applicable.</li>
<li>Look at existing UI controls to be utilized for UI development purposes.</li>
<li>Identify need to support mobile framework/platforms.</li>
<li>Identify best practices to be followed for 508 compliance and web accessibility standards.</li>
<li>Testing and Validation process should be established for development as well as for the quality control team.</li>
<li>This should also include testing methodologies for cross-browser compatibilities and cross-platform/cross-device testing.</li>
</ul>
</div>
</div>
</div>

<div id="TbsCollapseId-1574094015" class="accordion ">
</div>
 			<div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-1194604106" data-parent="#TbsCollapseId-1574094015" data-toggle="collapse" class="accordion-toggle">
Front-end optimization for performance				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-1194604106">
<div class="accordion-inner">

<p>All front-end code should be optimized using below industry practice and more.</p>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Minify JS.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Optimize images.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Usage of various compression techniques.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Optimizing pages for caching</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Optimize Browser Rendering</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Optimize for Mobile</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Usage of CDN capabilities</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Utilization of libraries like YUI compressor, Mod Page Speed.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Testing on developers’ platform via Chrome &amp; Firefox plug-in tools.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Identify tools to measure front-end optimization for performance.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">See Numbers PowerPoint presentation</span></li>
</ul>
</div>
</div>
</div>

<div id="TbsCollapseId-897082807" class="accordion ">
</div>
 			<div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-1387211595" data-parent="#TbsCollapseId-897082807" data-toggle="collapse" class="accordion-toggle">
Support of business &amp; functional requirements				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-1387211595">
<div class="accordion-inner">

<p dir="ltr">It is important for the business &amp; functional team members to work very closely and collaboratively with the technical and quality team members, to use pair programming (part of agile process) in order to achieve optimum efficiency for every user story worked on.</p>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Promote pair programming during iteration. Categorize modules/components such that a Technical, Business, Functional, and Quality team member’s work on similar set of user stories.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Developers to seek help from the functional team while designing and developing during iteration.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Acceptance criteria of all user stories should be agreed upon by the technical, business, functional, and quality team members in a given iteration.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Provide other artifacts (wherever applicable) besides the mockups and user story description to the developers to ensure the understanding of the business, functional and system requirements.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">The functional team should actively participate during development process.</span></li>
</ul>
</div>
</div>
</div>

<div id="TbsCollapseId-2145187083" class="accordion ">
</div>
 			<div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-1745692517" data-parent="#TbsCollapseId-2145187083" data-toggle="collapse" class="accordion-toggle">
Section 508				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-1745692517">
<div class="accordion-inner">

<p>Define the web accessibility best practices and standards that need to be followed in order to develop a 508 compliant product. Identify the testing methodologies to accomplish this.</p>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">What standards should be followed for different types of artifacts: web pages, HTML forms, PDF files, Video/Multimedia, Email, Excel, and other documents etc.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Look at HHS guidelines to incorporate similar type of 508 scans to meet the requirement.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Define “Must” tests and “Should” tests to prioritize the scope of 508 and web accessibility testing. Gets a consensus regarding the threshold of 508 compliance</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Identify which compliance tools (with appropriate versions) should be employed to perform unit and system testing such as Accenture Digital Diagnostics, WAVE, WAT (IE), JAWS, Firebug (Firefox), Pixlr, Juicy Studio Accessibility Toolbar etc.</span></li>
</ul>
</div>
</div>
</div>

<div id="TbsCollapseId-628704390" class="accordion ">
</div>
 			<div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-966181339" data-parent="#TbsCollapseId-628704390" data-toggle="collapse" class="accordion-toggle">
Testing Process				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-966181339">
<div class="accordion-inner">

<p>Define testing strategy for various phases of development process to be achieved to incorporate into the Agile methodology and practices. Identify the different types of testing methods, environments, tools, and processes as part of the overall validation and verification of the system/product.</p>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Following are the different phases of testing:</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Iteration/Sprint Testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">System Testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Pre-deployment testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">UAT</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Production</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Following types of testing methods should be evaluated:</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Unit Testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Integration Testing &ndash; with internal and external interfaces</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Functional testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Web services testing (if applicable with Marketplace)</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Regression Testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Smoke testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Security testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Performance testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">508 testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Failover testing to DR?</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Browser testing</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Identify appropriate categories for test plans and test cases &ndash; static, data verification, dynamic functionality, page design, multi-lingual support, etc.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Appropriate testing environments need to be defined to support ongoing development at all times.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Employ automation and automated scripts wherever applicable.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Utilize appropriate tools to manage test plans, test cases, defect management, capturing metrics, generating reports, etc. JIRA tool recommended for this process.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">First round of validation and testing should happen on the developer’s machine itself to get quality lead approval, even before checking the code into the source code repository.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">The functional team should actively participate to verify the code implemented by doing high level testing (not necessarily running the test cases defined by the QC team).</span></li>
</ul>
</div>
</div>
</div>

<p>&nbsp;</p>
<p><a href="/development-infrastructure/infrastructure/" title="Infrastructure Configuration"><button type="button" class="btn">Next: Infrastructure Configuration</button></a></p>
