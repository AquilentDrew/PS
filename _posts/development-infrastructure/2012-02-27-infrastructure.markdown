---

layout: interior-post

title: Infrastructure Configuration

categories: development-infrastructure

categoryheader: no

tags:
- Development Infrastructure

--- 

<p>Healthcare.gov architecture will follow CMS guidelines and will be in alignment with the CMS cloud technical reference architecture. &nbsp;Healthcare.gov will be part of the CMS private cloud at Terremark and follow appropriate process and procedures.</p>
<p>Healthcare.gov will have at minimum five different environments available i.e. &nbsp;Development, Testing, Implementation, Production and DR (clone of production). Healthcare.gov and Marketplace application will be strongly integrated to share various resources and backend services for various needs. Architecture for healthcare.gov should have the ability to horizontally scale (i.e. grow or shrink the number of running server resources) as the demands of your application site change over time. Monitoring should be in place for pre-defined conditions to help stay alert with system performance and usage. Redundancy should be built for key elements of the server eg: database, load balancers etc. There will be usage of CDN services like Akamai for caching some of the assets resources. Support services for Terremark will be available via URS to support all of the system support needs from firewall to baseline configurations.</p>
<h3>Goals</h3>
<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Aim for 60 minutes start up process to spin up new VM in various environments.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Aim for automation via scripting process. No more manual server administration; it should be managed via Puppet.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Have up to date images ready and document the image process. We should maintain catalog of images for various purpose</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;">Portable solution where we should be able replicate same process on the DR site.</span></li>
</ul>
<div id="TbsCollapseId-868011965" class="accordion ">
</div>
 <div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-480580223" data-parent="#TbsCollapseId-868011965" data-toggle="collapse" class="accordion-toggle">
Learn About Capacity Planning for the Site				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-480580223">
<div class="accordion-inner">

<p>To support current and future need of the website it is critical to have a plan in place to determine the hardware and software needs and in parallel to support any new needs may arise during the development process. Goal should be to have ability to scale the infrastructure to accommodate increasing site visitors and their needs. Plan should be based on needs of the site, industry trend, visiting user based on analytical data, user behavior, infrastructure data, have clear understand of integration points with various systems. Have some performance &amp; monitoring counters identified for initial benchmark and run some load &amp; performance test on the servers. Also have some network level test to make sure you have enough bandwidth in place. Usage of CDN caching services helps to offload some traffic on the site which should help. Based on some rough estimates and some set criteria and comparison with a different health care based sites we estimate combined learning and marketplace site having traffic range from 280 to 840 million page views over the course of 151 days of open enrollment starting October 1,2012 to February 28th, 2013.</p>
</div>
</div>
</div>

<h3>DR Site</h3>
<p>CMS Terremark private instance will have a DR site in place for learning &amp; marketplace site. During DR situation site will be functional for the consumer business needs. &nbsp;See proposed DR architecture diagram.<b id="internal-source-marker_0.9951131313573569"></b></p>
<h3>Supporting Services &amp; Tools</h3>
<p>Various tools have been identified across CMS OC, OIS &amp; HHS/ASPA team. There needs to be a narrowed set of tools identified for immediate business and operational needs. Tools should be categorized from needs and usage needed for various teams.</p>
<div id="TbsCollapseId-393809446" class="accordion ">
</div>
 <div class="accordion-group ">
<div class="accordion-heading">
<a href="#TbsCollapseGroupId-544614008" data-parent="#TbsCollapseId-393809446" data-toggle="collapse" class="accordion-toggle">
See a list of supporting services &amp; tools				</a>
</div>
<div class="accordion-body collapse " id="TbsCollapseGroupId-544614008">
<div class="accordion-inner">

<ul>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Server Monitoring:</strong> &nbsp;Pingdom, Newrelic, WebMetrics.com</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Server Administration:</strong> &nbsp;Puppet</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Web Analytics:</strong> Google Analytics, Chartbeat, Adobe Insight</span></li>
<li><strong>Social Media Analytics:&nbsp;</strong>Radian6, Measured Voice, HootSuite</li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Dashboard:</strong> Geckoboard, Tableau<br>
</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Log Processing:</strong> Splunk</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Section 508:</strong> &nbsp;ADDE, JAWS, WAVE</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Archive:</strong> Archive-IT</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Search:</strong> Google Search Appliance</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Marketplace Mobile Website:</strong> Adobe CQ</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Website Governance:</strong> Magus Active Standards</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Email Delivery:</strong> GovDelivery</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>FAQ’s:</strong> GovDelivery</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Feedback:</strong> Voice of Consumer</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>A/B &amp; Multivariate Testing:</strong> Optimizely</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Developer Tools:</strong> Firefox &amp; Chromes plugins.</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>Translation:</strong> TBD</span></li>
<li><span style="line-height: 1.714285714; font-size: 1rem;"><strong>PM/Agile/Tickets:</strong> JIRA/Confluence, CALT</span></li>
</ul>
</div>
</div>
</div>

<p>&nbsp;</p>
<p><a href="/development-infrastructure/content-management-system-cms/" title="Content Management System (CMS)"><button type="”button”" class="”btn”">Next: Content Management System (CMS)</button></a></p>
