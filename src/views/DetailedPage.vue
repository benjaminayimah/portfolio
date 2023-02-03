<template>
    <div class="main-section">
        <div class="main-row">
            <div class="section-wrapper">
                <div class="fx gap-50 main-body-flx">
                    <div class="fx-shrink-0">
                        <nav class="sticky-top fx vertical-nav">
                            <ul>
                                <li v-for="tab in tabs" :key="tab.id">
                                    <a :id="'tab_'+tab.id" :href="tab.url" :class="{ 'tab-active': tab.active}" class="fx ai-c blur blur-2">{{ tab.name }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="detailed_body" class="fx-grow-1 ovf-hidden">
                        <div class="project-body">
                            <section id="overview">
                                <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+getProject.project.banner+')'}"></div>
                                <img v-if="getProject.project.banner_2" class="w-100" :src="getProject.project.banner_2" alt="Project image"/>
                                <h1>Overview</h1>
                                <div>
                                    <div class="inner-row">
                                        <h2>The problem</h2>
                                        <div>{{ getProject.project.overview.problem }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>The product</h2>
                                        <div>{{ getProject.project.overview.product }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Goal</h2>
                                        <div>{{ getProject.project.overview.goal }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>My role</h2>
                                        <div>{{ getProject.project.overview.role }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Project duration</h2>
                                        <div>{{ getProject.project.overview.duration }}</div>
                                    </div>
                                </div>
                            </section>
                            <section id="empathy-with-the-user">
                                <h1>Empathizing with the users</h1>
                                <div class="inner-row">
                                    <div>{{ getProject.project.empathize.overview }}</div>
                                </div>
                                <div class="sub-sec">
                                    <h2>User pain points</h2>
                                    <div class="row grid col-3 gap-8">
                                        <div v-for="painpoints in getProject.project.empathize.pain_points" :key="painpoints.id">
                                            <span class="ellipse jc-c ai-c br-50">{{ painpoints.id }}</span>
                                            <h3>{{ painpoints.title }}</h3>
                                            <div>{{ painpoints.description }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Persona & problem statement</h2>
                                    <h3>{{ getProject.project.empathize.person_name }}</h3>
                                    <div class="mb-32">{{ getProject.project.empathize.problem_statement }}</div>
                                    <img class="person-img mb-16" :src="getProject.project.empathize.persona_img" :alt="getProject.project.empathize.person_name">
                                    <div class="fx gap-8"><label class="fw-600">Age:</label><div>{{ getProject.project.empathize.age }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Education:</label><div>{{ getProject.project.empathize.education }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Hometown:</label><div>{{ getProject.project.empathize.hometown }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Family:</label><div>{{ getProject.project.empathize.family }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Ocupation:</label><div>{{ getProject.project.empathize.ocupation }}</div></div>
                                    <h3 class="headline">{{getProject.project.empathize.person_name }}'s headline</h3>
                                    <i>{{ getProject.project.empathize.headline }}</i>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3 class="success">Goals</h3>
                                            <li v-for="goal in getProject.project.empathize.goals" :key="goal.id">{{ goal }}</li>
                                        </div>
                                        <div>
                                            <h3 class="danger">Frustrations</h3>
                                            <li v-for="frustration in getProject.project.empathize.frustrations" :key="frustration.id">{{ frustration }}</li>
                                        </div>
                                    </div>
                                    <h3 class="headline">Scenario</h3>
                                    <div>{{ getProject.project.empathize.scenario }}</div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Competitive audit</h2>
                                    <div>{{ getProject.project.empathize.competitive_audit }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.audit_img" alt="competitive audit">
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>
                                            Ideation
                                        </h2>
                                        <div>{{ getProject.project.empathize.ideation }}</div>
                                        <div>
                                            <img class="w-100" :src="getProject.project.empathize.ideation_img" alt="ideation">
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>User journey map</h2>
                                    <div>{{ getProject.project.empathize.user_journey_map }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.user_journey_map_img" alt="user journey map">
                                    </div>
                                </div>
                            </section>
                            <section id="starting-the-design">
                                <h1>Starting The Design</h1>
                                <div class="sub-sec">
                                    <h2>Sitemap</h2>
                                    <div>
                                        I constructed a sitemap to ensure the information architecture of the website is clearly laid out. The structure I chose was designed to make things simple and easy.
                                    </div>
                                    <div>
                                        <img class="w-100" src="../assets/images/sitemap.png" alt="Sitemap">
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Paper wireframes</h2>
                                    <div class="inner-row">
                                        <div>
                                            Paper wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                        </div>
                                        <div>
                                            <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Digital wireframes</h2>
                                    <div class="inner-row">
                                        <div>
                                                Digital wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                            </div>
                                        <div>
                                            <h3>Wireframes</h3>
                                            <div>
                                                <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Screen size variations</h3>
                                            <div>
                                                <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>
                                            Low-fidelity prototype
                                        </h2>
                                        <div>
                                            The low-fidelity prototype connected the primary user flow of choosing a career and obtaining guidance from mentors. This would enable usability study to be conducted on the prototype.
                                        </div>
                                        <div>
                                            <img class="w-100" src="../assets/images/lo-fi.png" alt="Low-fidelity prototype">
                                        </div>
                                        <a href="#">View the App's low-fidelity protoype here.</a>
                                    </div>
                                </div>
                            </section>
                            <section id="useability-study">
                                <h1>Usability study</h1>
                                <div class="sub-sec">
                                    <h2> Findings</h2>
                                    <div>
                                        A useability study was conducted on potential users and the main findings uncovered during the study are as follows:
                                    </div>
                                    <div class="row grid col-3 gap-8">
                                        <div>
                                            <h3>1. Learn new skills</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>2. Trust</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>3. Find job</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="refining-the-design">
                                <h1>Refining the design</h1>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>Mockups</h2>
                                        <div>
                                            Based on insights from the usability study, the search filter was enhanced with advanced filter system where users are given the option to filter based on their experience level and specific search parameters.
                                        </div>
                                        <div>
                                            images here
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>Accessibility considerations</h2>
                                        <div class="row grid col-3 gap-8">
                                            <div>
                                                <h3>1. Close-captioning</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                            <div>
                                                <h3>2. Landmarks</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                            <div>
                                                <h3>3. Screen reader</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="hi-fi-design">
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h1>Refined designs</h1>
                                        <div class="v-scroll fx gap-8 refined-holder">
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-1.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-2.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-3.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-4.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-5.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-6.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-7.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-8.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-9.png" alt="">
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>Screen size variations</h2>
                                        <div>
                                            I included considerations for additional screen sizes in my mockups based on my earlier wireframes. Because users browse from a variety of devices, I felt it was important to optimize the browsing experience for a range of device sizes, such as mobile and tablet so users have the smoothest experience possible.
                                        </div>
                                    </div>
                                    <div>
                                        <img class="w-100" src="../assets/images/screen_variations.png" alt="Screen variations">
                                    </div>
                                </div>
                            </section>
                            <section id="hi-fi-prototype">
                                <h1>High fidelity prototype</h1>
                                <div>
                                    The final high-fidelity prototype ensures a smooth user flow for finding and viewing of tutorials.
                                </div>
                                <p>Click into the video below to watch the prototype.</p>
                                <iframe height="416" src="https://www.youtube.com/embed/A5idbGOWRgk?loop=1" title="Flexsale prototype" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </section>
                            <section id="going-forward">
                                <h1>Going forward</h1>
                                <div class="sub-sec">
                                    <h2>Takeaways</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3>Impact:</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>What I learned:</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Next step:</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3>1. Testing</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>2. User research</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <detail-project-footer v-bind:id="getProject.project.id" />
                    </div>
                </div>

            </div>
        </div>
    </div>
        <!-- <div class="section-wrapper">
            <div class="fx gap-50 main-body-flx">
                <div class="fx-shrink-0">
                    <nav class="sticky-top fx vertical-nav">
                        <ul>
                            <li v-for="tab in tabs" :key="tab.id">
                                <a :id="'tab_'+tab.id" :href="tab.url" class="fx ai-c blur blur-2">{{ tab.name }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="detailed_body" class="fx-grow-1 ovf-hidden">
                    <div class="project-body">
                        <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+getProject.project.banner+')'}"></div>
                        <img v-if="getProject.project.banner_2" class="w-100" :src="getProject.project.banner_2" alt="Project image">
                        <div>
                            <div class="section">
                                <h1>Overview</h1>
                                <div>
                                    <div class="inner-row">
                                        <h2>The problem</h2>
                                        <div>{{ getProject.project.overview.problem }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>The product</h2>
                                        <div>{{ getProject.project.overview.product }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Goal</h2>
                                        <div>{{ getProject.project.overview.goal }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>My role</h2>
                                        <div>{{ getProject.project.overview.role }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Project duration</h2>
                                        <div>{{ getProject.project.overview.duration }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="section">
                                <h1 id="empathy-with-the-user">Empathizing with the users</h1>
                                <div class="inner-row">
                                    <div>{{ getProject.project.empathize.overview }}</div>
                                </div>
                                <h2>User pain points</h2>
                                <div class="row grid col-3 gap-8">
                                    <div v-for="painpoints in getProject.project.empathize.pain_points" :key="painpoints.id">
                                        <span class="ellipse jc-c ai-c br-50">{{ painpoints.id }}</span>
                                        <h3>{{ painpoints.title }}</h3>
                                        <div>{{ painpoints.description }}</div>
                                    </div>
                                </div>
                                <div id="persona" class="section">
                                    <h2>Persona & problem statement</h2>
                                    <h3>{{ getProject.project.empathize.person_name }}</h3>
                                    <div class="mb-32">{{ getProject.project.empathize.problem_statement }}</div>
                                    <img class="person-img mb-16" :src="getProject.project.empathize.persona_img" :alt="getProject.project.empathize.person_name">
                                    <div class="fx gap-8"><label class="fw-600">Age:</label><div>{{ getProject.project.empathize.age }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Education:</label><div>{{ getProject.project.empathize.education }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Hometown:</label><div>{{ getProject.project.empathize.hometown }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Family:</label><div>{{ getProject.project.empathize.family }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Ocupation:</label><div>{{ getProject.project.empathize.ocupation }}</div></div>
                                    <h3 class="headline">{{getProject.project.empathize.person_name }}'s headline</h3>
                                    <i>{{ getProject.project.empathize.headline }}</i>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3 class="success">Goals</h3>
                                            <li v-for="goal in getProject.project.empathize.goals" :key="goal.id">{{ goal }}</li>
                                        </div>
                                        <div>
                                            <h3 class="danger">Frustrations</h3>
                                            <li v-for="frustration in getProject.project.empathize.frustrations" :key="frustration.id">{{ frustration }}</li>
                                        </div>
                                    </div>
                                    <h3 class="headline">Scenario</h3>
                                    <div>{{ getProject.project.empathize.scenario }}</div>
                                </div>

                                <div id="competitive_audit" class="section">
                                    <h2>Competitive audit</h2>
                                    <div>{{ getProject.project.empathize.competitive_audit }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.audit_img" alt="competitive audit">
                                    </div>
                                </div>
                                <div id="ideation">
                                    <div class="inner-row">
                                        <h2>
                                            Ideation
                                        </h2>
                                        <div>{{ getProject.project.empathize.ideation }}</div>
                                        <div>
                                            <img class="w-100" :src="getProject.project.empathize.ideation_img" alt="ideation">
                                        </div>
                                    </div>
                                </div>
                                <div id="user_journey_map" class="section">
                                    <h2>User journey map</h2>
                                    <div>{{ getProject.project.empathize.user_journey_map }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.user_journey_map_img" alt="user journey map">
                                    </div>
                                </div>

                                <h1 id="starting-the-design">Starting The Design</h1>
                                <div id="site_map" class="section">
                                    <h2>Sitemap</h2>
                                    <div>
                                        I constructed a sitemap to ensure the information architecture of the website is clearly laid out. The structure I chose was designed to make things simple and easy.
                                    </div>
                                    <div>
                                        <img class="w-100" src="../assets/images/sitemap.png" alt="Sitemap">
                                    </div>
                                </div>

                                <div id="paper_wirefram" class="section">
                                    <h2>Paper wireframes</h2>
                                    <div class="inner-row">
                                        <div>
                                            Paper wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                        </div>
                                        <div>
                                            <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div id="digital_wirefram" class="section">
                                    <h2>Digital wireframes</h2>
                                    <div class="inner-row">
                                        <div>
                                                Digital wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                            </div>
                                        <div>
                                            <h3>Wireframes</h3>
                                            <div>
                                                <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                            </div>
                                        </div>
                                        <div>
                                            <h3>Screen size variations</h3>
                                            <div>
                                                <img class="w-100" src="../assets/images/paper_wireframes.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="lo_fi_prototype" class="section">
                                    <div class="inner-row">
                                        <h2>
                                            Low-fidelity prototype
                                        </h2>
                                        <div>
                                            The low-fidelity prototype connected the primary user flow of choosing a career and obtaining guidance from mentors. This would enable usability study to be conducted on the prototype.
                                        </div>
                                        <div>
                                            <img class="w-100" src="../assets/images/lo-fi.png" alt="Low-fidelity prototype">
                                        </div>
                                        <a href="#">View the App's low-fidelity protoype here.</a>
                                    </div>
                                </div>
                                <div id="useability_fidings" class="section">
                                    <h2>
                                            Usability study
                                        </h2>
                                    <div>
                                        These are the main findings uncovered by the usability study:
                                    </div>
                                    <div class="row grid col-3 gap-8">
                                    <div>
                                            <h3>1. Learn new skills</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                    </div>
                                    <div>
                                            <h3>2. Trust</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                    </div>
                                    <div>
                                            <h3>3. Find job</h3>
                                            <div>
                                                Users want to quickly browse through careers and learn new skills.
                                            </div>
                                    </div>
                                    </div>
                                </div>
                                <h1 id="refining-the-design">Refining the design</h1>
                                <div id="mockups" class="section">
                                    <div class="inner-row">
                                        <h2>Mockups</h2>
                                        <div>
                                            Based on insights from the usability study, the search filter was enhanced with advanced filter system where users are given the option to filter based on their experience level and specific search parameters.
                                        </div>
                                        <div>
                                            images here
                                        </div>
                                    </div>
                                </div>
                                <div id="accessibility" class="section">
                                    <div class="inner-row">
                                        <h2>Accessibility considerations</h2>
                                        <div class="row grid col-3 gap-8">
                                            <div>
                                                <h3>1. Close-captioning</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                            <div>
                                                <h3>2. Landmarks</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                            <div>
                                                <h3>3. Screen reader</h3>
                                                <div>
                                                    I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="hi-fi-design" class="section">
                                    <div class="inner-row">
                                        <h2>Refined designs</h2>
                                        <div class="v-scroll fx gap-8 refined-holder">
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-1.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-2.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-3.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-4.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-5.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-6.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-7.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-8.png" alt="">
                                            </div>
                                            <div>
                                                <img class="w-100" src="../assets/images/flexsale-refined-9.png" alt="">
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div id="screens_size_variations" class="section">
                                    <div class="inner-row">
                                        <h2>Screen size variations</h2>
                                        <div>
                                            I included considerations for additional screen sizes in my mockups based on my earlier wireframes. Because users browse from a variety of devices, I felt it was important to optimize the browsing experience for a range of device sizes, such as mobile and tablet so users have the smoothest experience possible.                                    </div>
                                        </div>
                                        <div>
                                            <img class="w-100" src="../assets/images/screen_variations.png" alt="Screen variations">
                                        </div>
                                </div>
                                <div id="hi-fi-prototype">
                                    <div>
                                        The final high-fidelity prototype ensures a smooth user flow for finding and viewing of tutorials.
                                    </div>
                                    <p>Click into the video below to watch the prototype.</p>
                                    <iframe height="416" src="https://www.youtube.com/embed/A5idbGOWRgk?loop=1" title="Flexsale prototype" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <h1 id="going-forward">Going forward</h1>
                                <div id="takeaways" class="section">
                                    <h2>Takeaways</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3>Impact:</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>What I learned:</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="next_step" class="section">
                                    <h2>Next step:</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3>1. Testing</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>2. User research</h3>
                                            <div>
                                                Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <detail-project-footer v-bind:id="getProject.project.id" />
                    </div>
                </div>
            </div>
        </div> -->
</template>
<script>
import { mapGetters } from 'vuex';
import DetailProjectFooter from '../components/includes/DetailProjectFooter.vue';

export default {
  components: { DetailProjectFooter },
    name: 'DetailPage',
    computed: {
        ...mapGetters(['getProject']),
    },
    data() {
        return {
            tabs: [
                { id: 1, name: 'Overview', url: '#overview', active: true},
                { id: 2, name: 'Empathizing with the user', url: '#empathy-with-the-user'},
                { id: 3, name: 'Starting the design', url: '#starting-the-design'},
                { id: 4, name: 'Useability study', url: '#useability-study'},
                { id: 5, name: 'Refining the design', url: '#refining-the-design'},
                { id: 6, name: 'Hi-Fi design', url: '#hi-fi-design'},
                { id: 7, name: 'Hi-Fi prototype', url: '#hi-fi-prototype'},
                { id: 8, name: 'Going forward', url: '#going-forward'}
            ]
        }
    },
    created() {
        this.$store.commit('showProject', this.$route.params.id)
        document.addEventListener('scroll', this.spyScroll )
    },
    unmounted() {
        document.removeEventListener('scroll', this.spyScroll )
    },
    methods: {
        spyScroll() {
        let section = document.querySelectorAll('section')
        let navLinks = document.querySelectorAll('nav a')

        section.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 150
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')
            if( top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('tab-active')
                    document.querySelector('nav a[href*=' + id + ']').classList.add('tab-active')
                })
            }
        })
        }
    }
   
}
</script>

<style lang="scss" scoped>
ul{
    padding: 0;
    margin: 0 0 0 -16px;

    li {
        height: 55px;
        display: flex;
        &:hover a{
            background-color: #EAEAEA;
        }
        a{
            height: inherit;
            padding: 0 16px;
            border-radius: 32px;
            transition: 0.2s linear;
        }
    }
}
.dark-mode li:hover a{
    background-color: #292A2D;
}
nav{
    top: 120px !important;
}

.gap-50{
    gap: 50px;
}
.project-banner{
    border-radius: 16px;
}
iframe{
    width: 100%
}
section{
    margin: 20px 0;
}
.main-section{
    padding: 40px 0
}
h1{
    padding: 50px 0 8px 0;
    color: $primary-color;
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 900;
}
h2{
    margin: 16px 0 12px 0;
}
h3{
    margin-bottom: 8px;
}
.inner-row{
    margin-bottom: 24px;
}
.col-3{
    grid-template-columns: 1fr 1fr 1fr;
}
.col-2 {
    grid-template-columns: 1fr 1fr;
}
.ellipse{
    display: flex;
    height: 50px;
    width: 50px;
    background-color: $primary-color;
}
.v-scroll{
  overflow-x: auto;
  &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
}
.person-img{
    height: 200px;
    border-radius: 50%;
}

@media screen and (max-width: 990px){
    .main-section{
        padding: 16px 0
    }
    .main-body-flx{
        gap: 16px;
        flex-direction: column;
            .fx-shrink-0 {
                display: flex;
                overflow-x: auto;
                position: sticky;
                top: 80px;
                margin: 0 -20px;
                padding: 0 20px;
                &::-webkit-scrollbar {
                    display: none;
                    -ms-overflow-style: none; 
                    scrollbar-width: none; 
                }
            }
        ul{
            display: flex;
            gap: 8px;
            margin: 0;
            li {
                height: 48px;
                a {
                    white-space: nowrap;
                    background-color: #EAEAEA;
                    &:hover {
                        background-color: #EAEAEA;
                    }
                }
            }
            // &::-webkit-scrollbar {
            //     display: none;
            //     -ms-overflow-style: none; 
            //     scrollbar-width: none; 
            // }
        }
    }
}

</style>