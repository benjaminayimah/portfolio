// import router from '@/router'
export default {
    state: {
        intro: {h1: 'Hi', i1: '👋🏽', i2: '👩🏾‍💻👨🏽‍💻👨‍💻', h2: 'I\'m Ben', p1: 'A UI/UX Designer who focuses on crafting delightful digital experience for all users.', p2: 'Here are few of my works...'},
        project: { active: false, project: {}},
        projects: [
            { id: 1, color: '#566FF4', color2: '#566FF4', type: 'project', title: 'Flexsale', thumbnail: require('@/assets/images/flexsale_thumbnail.png'), banner: require('@/assets/images/flexsale_banner.png'), banner_2: '', description: 'A multi-platform point of sale and inventory management system for retail shops.',
                overview: { problem: 'Many local retailers still use physical books in keeping records of their stock.  This method is tedious, unreliable and overall inefficient.  Consumable products exceed their expiration dates without the owners knowledge, retail shop owner finds it impossible to accurately compute sale analysis on their stock, and theft are a few challenges that plummets the local retail industry.', product: 'Flexsale is a multi-platform application designed to uniquely help retail shops keep track of their inventory and perform everyday transaction with ease.', goal: 'Design a multi-platform application that will help retail shop owners to record their daily sales, keep track of their stock limits, get reminders on expiring products, and perform various sales analysis with ease.', role: 'UX designer designing the app for all screen sizes and devices.', responsibilities: 'Conducting user interviews, paper and digital wire-framing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.', duration: 'September, 2021 - December, 2021'},
                empathize: { overview: 'In order to understand the users I\'m designing for, I conducted a user research on 10 retail shops, and below are the insights drawn from the study;', pain_points: [ { id: 1, title: 'Mobile and accessibility', description: 'Most inventory management systems on the market are only desktop based and operates as a stand-alone application.', title2: 'Multi-platform app', opportunity: 'Design a multi-platform application that can be accessible from all devices.'}, { id: 2, title: 'Product expiration', description: 'Retails shop owners couldn\'t keep track of the expiration dates of consumable products.', title2: 'Notification prompt', opportunity: 'Include an active notification prompt that will constantly alert shop owners about the expiration  status of all their consumables.' }, { id: 3, title: 'Connectivity problem ', description: 'Some retail shops are located in places with poor network connectivity.', title2: 'Offline accessible feature', opportunity: 'Include an offline accessibility feature to enable users to seamlessly perform basic features and saving them locally in other to be synced with the cloud whenever they come online.'} ],
                    persona: [ {id: 1, person_name: 'Mary', problem_statement: 'Mary is a grocery shop owner who needs keep track of her inventory status and also record her daily sales because she wants to know how which products are performing well within a specific period or time, know the quality of new products to order for,  and know if a product if getting near to expiration.', persona_img: require('@/assets/images/persona_flexsale.png'), age: '28', education: 'BSc Business Administration', hometown: 'Ho, Ghana', family: 'Married with 3 Children', ocupation: 'Entrepreneur', headline: '“It\'s too exhausting doing everything manually in this day and age. I just need a system to automate all my tasks so that can free my time for other things“', goals: [{id: 1, data: 'A system to help me keep sales record, and keep track of my inventory.'}, {id: 2, data: 'I need to be able to access my inventory records and perform basic functions even when I\'m offline.'}, {id: 3, data: 'I need to be reminded of when products are near expiration.'}], frustrations: [{id: 1, data: 'Most systems I\'ve used in the past are ineffective because they are inaccessible remotely and aren\'t mobile compatible.'},{id: 2, data: 'My products expires without my knowledge.'}], scenario: ''}], competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: 'I started my ideation process by creating paper wire-frames using the \'how might we\' idea generation process to draw up multiple layouts and components that might be relevant to the project. I therefore used stars to mark the most important ones for the final layout.', paper_wireframe_img: require('@/assets/images/flexsale_paper_wireframe.png'), digital_wireframe: 'Once I got a rough perspective of how the design should look like: what components are relevant and those that are not, I proceeded to develop upon the paper wire-frame to a digital wire-frame. This further gave me a more closed-up look on how the layout of the design could look like.', digital_wireframe_img: require('@/assets/images/flexsale_digi_wireframe.png'), screen_variations: '', screen_variations_imgs: [], lofi_prototype: 'I went ahead to create a low fidelity prototype from the digital wire-frame. The reason for this is to quickly conduct a usability study with my primary user base, in order to be sure their pain points are being accounted for, and how easily they could navigate their way arround the app.', lofi_prototype_img: '', usability_study: 'A usability study was later conducted with the users from the lofi-protype. The following findings were discovered:', usability_study_fidings: [{ id: 1, title: 'Bulk upload', data: 'Users finds it tedious uploading their products one after the over. They want a more efficient way.'}, { id: 2, title: 'Activities log', data: 'Users expected to see a summary log of their activies on the home page.'}] },
                refining_the_design: { dsk: true, prelim: 'In refining the design, the following adjustments were made the mockup.', before_after: [{id: 1, description: 'All upload features now supports a seamless bulk upload capability. In addition, a quick upload button was introduced on the main home page for a faster access.', img: require('@/assets/images/before_after_flexsale_1.png')}, {id: 2, description: 'An at-a-glance activity log interface was added to the home page for users to view importance information about what actions were recently performed on the platform.', img: require('@/assets/images/before_after_flexsale_2.png')} ], accessibility_considerations: [{ id: 1, title: 'Language selection', description: 'Multiple language selection feature was added for users to choose their preferred option.'}, {id: 1, title: 'Icon', description: 'A very descriptive icons were included in the design to aid users in understanding what various features means.', }], hifi: 'Here are the final high fidelity designs starting with the desktop screen sizes;', refined_designs: [require('@/assets/images/flexsale_hifi_1.png'), require('@/assets/images/flexsale_hifi_2.png'), require('@/assets/images/flexsale_hifi_3.png')], screen_variations: 'Since this is multi-platform application, I proceeded to work on screen variations for both tablet and mobile phone display sizes.', screen_variations_imgs: [require('@/assets/images/flexsale-refined-1.png'), require('@/assets/images/flexsale-refined-2.png'), require('@/assets/images/flexsale-refined-3.png'), require('@/assets/images/flexsale-refined-4.png'), require('@/assets/images/flexsale-refined-5.png'), require('@/assets/images/flexsale-refined-6.png'), require('@/assets/images/flexsale-refined-7.png'), require('@/assets/images/flexsale-refined-8.png')], hifi_prototype: 'For testing purposes, I created a high fidelity prototype from the final design mockup so that users can properly test the final design and report their findings.', hifi_prototype_video: 'https://www.youtube.com/embed/A5idbGOWRgk?loop=1', video_title: 'Flexsale prototype'},
                going_forward: { takeaways: [], nextstep: [{id: 1, title: 'Testing', description: 'Conduct another round of usability studies to validate whether the user pain points were properly addressed.'}, {id: 2, title: 'User research', description: 'I planned to also conduct more user research as it can unlock more opportunities to explore.'}]}
            },
            { id: 2, color: '#95B1ED', color2: '#3C74EB', type: 'case study', title: 'Oculus Movie Trailer App', thumbnail: require('@/assets/images/sample.png'), banner: require('@/assets/images/project-2-banner.png'), banner_2: '', description: 'Movie trailer app for booking upcoming shows and streaming on-demand. ',
                overview: { problem: 'College students and busy workers needs to quickly book tickets for the movies.', product: 'Oculus Movie Theater is located in Accra, Ghana. They have a high capacity theater with ultra-modern equipments that delight users with superb viewing experience. Their target customers include working adults and college students who like to hang out during the weekends. Oculus Theater aims to become the preferred destination for movies lovers in and around the metropolis.', goal: 'Design an app for Oculus Theater to enable its users to watch movies trailers for upcoming movies and easily book their tickets.', role: 'UX designer, designing the app from conception to delivery.', responsibilities: 'Conducting user interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.', duration: 'June, 2021 - August, 2021'},
                empathize: { overview: 'I conducted interviews and created empathy maps in order to understand the users I\'m designing for and their needs. The primary user groups identified going into the research were college students and working adults. These user groups were confirmed during the research conducted on Oculus Theater customers. However, the research also revealed that not only do users want a quick and smooth platform to book ticket for the theater, but most working adults also prefers an in-app movie rentals.', pain_points: [{ id: 1, title: 'Accessibility', description: 'Most trailer apps do a poor job in considering users with special needs such as hearing impediment.', title2: 'Closed Caption', opportunity: 'Include a closed captioning feature for users with hearing problem.'}, { id: 2, title: 'Time', description: 'Most working adults and some students have limited time to keep up to date with theater schedules.', title2: 'In-app book', opportunity: 'Allow users to directly buy tickets from the app.'}, { id: 3, title: 'Flexibility', description: 'Movie trailer apps in the metropolis only provide users with one type of service only thus, either booking tickets or in-app streaming but not both.', title2: '', opportunity: 'Introduce an in-app streaming feature for users who cannot visit the theater.' } ],
                    persona: [{ id: 1, person_name: 'Tyler', problem_statement: 'Tyler is a full time student who needs a convenient way to book tickets for the movies from his dormitory room because he has limited time to do it in-person.', persona_img: require('@/assets/images/persona_oculus.png'), age: '19', education: 'BSc. Mathematics', hometown: 'Accra, Ghana', family: 'Single, leaves alone', ocupation: 'student', headline: '"I need a place to watch good movies, but it will be nice if I could browse the trailers first before booking my ticket."', goals: [{id: 1, data: 'I need to watch latest movie trailers.'}, { id: 2, data: 'I prefer to watch especially action movies.'}, {id: 3, data: 'To watch movies in comfortable seats.'}], frustrations: [{id: 1, data: 'Movie trailer apps sometimes show old movies.'}, {id: 2, data: 'Trailer buffers and take way too long to play.'}, {id: 3, data: 'The theater seats are terrible, it is frustrating.'}], scenario: 'Tyler is a level 400 student studying Mathematics at the University of Ghana. He likes to take his head off studying on Friday night and enjoy some movies at the theater. He usually browses through movie trailers and book his seat at the directly from the app. Tyler gets frustrated whenever the app pops displays old movies. Tyler wants to see latest action movie trailers. He also prefers attend the theater on Fridays.'}], competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: 'I created paper wire-frames first because it\'s easier to quickly ideate through and gather all my thoughts before moving to digital wire-frames. I used the crazy eight idea generation principle to come up with eight posible layouts for the home page, and subsequently all the other pages.', paper_wireframe_img: require('@/assets/images/oculus_paper_wireframe.png'), digital_wireframe: 'The paper wire-frames were converted in to digital wire-frames with some few modifications.', digital_wireframe_img: require('@/assets/images/oculus_digi_wireframe.png'), screen_variations: '', screen_variations_imgs: [], lofi_prototype: 'The low-fidelity prototype connected the primary user flow of browsing a trailer and booking tickets. This consequently would enable usability study to be conducted on the prototype.', lofi_prototype_img: require('@/assets/images/oculus_lofi_prototype.png'), usability_study: 'A usability study was conducted on potential users and the main findings uncovered during the study are as follows:', usability_study_fidings: [{ id: 1, title: 'Seat selection', data: 'Users want to be able to select from a wide range of viewing time.'}, { id: 2, title: 'Navigation', data: 'Users find it difficult locating their account information.'}, { id: 3, title: 'More payment options', data: 'Users want more payment options.'}] },
                refining_the_design: { dsk: false, prelim: '', before_after: [{id: 1, description: 'The initial design only allow the user to select the day in which they would like to visit the theater. So, after the usability study I added the ability to visualize and select specific seat.', img: require('@/assets/images/oculus_before_after_1.png')}, { id: 2, description: 'The second usability study revealed users were finding issues with the initial navigation. I introduced a bottom-placed navigation system as well as in-app streaming option.', img: require('@/assets/images/oculus_before_after_2.png')}], accessibility_considerations: [{id: 1, title: 'Close-captioning', description: 'I provided close-caption controls for all movies for users with hearing impaired. This would enable them to follow through all movies.'}, { id: 2, title: 'Icons', description: 'I used icons to help improve navigation throughout the app'}], hifi: 'The final fidelity mockups are as follows;', refined_designs: [require('@/assets/images/oculus_hifi_1.png'), require('@/assets/images/oculus_hifi_2.png'), require('@/assets/images/oculus_hifi_3.png'), require('@/assets/images/oculus_hifi_4.png'), require('@/assets/images/oculus_hifi_5.png'), require('@/assets/images/oculus_hifi_6.png'), require('@/assets/images/oculus_hifi_7.png'), require('@/assets/images/oculus_hifi_8.png'), require('@/assets/images/oculus_hifi_9.png')], screen_variations: '', screen_variations_imgs: [], hifi_prototype: 'The final high-fidelity prototype ensures a smooth user flow for viewing and booking of movie trailers. It also delivers an intuitive navigation that meet users needs.', hifi_prototype_video: 'https://www.youtube.com/embed/3GmEjJgwlvw', video_title: 'Oculus trailer app prototype'},
                going_forward: { takeaways: [{id: 1, title: 'Impact', p1: 'The app puts Oculus Theater on the map as the go to app for users who want to enjoy good movies either in theater or on-demand.', p2: 'One quote from peer feedback:', p3: '“Finally, I can quickly watch trailers of upcoming movies and book my tickets. This would definitely be my go-to app”'}, {id: 2, title: 'What I learned', p1: 'In designing the app, I found out that my initial ideas about what I thought users needed were totally in contrast to what they really need. Usability studies and peer feedback helped greatly in iterating on the initial design and crafting a better user experience.', p2: '', p3: ''},], nextstep: [{id: 1, title: 'Testing', description: 'Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed. Also, to ascertain if the in-app streaming feature is well optimized.'}, {id: 2, title: 'User research', description: 'Conduct more user research to determine any new areas of need.'}]}
            },
            { id: 3, color: '#95B1ED', color2: '#3C74EB', type: 'case study', title: 'Mergdata Reporting Dashboard', thumbnail: require('@/assets/images/mergdata_thumbnail.png'), banner: require('@/assets/images/mergdata_banner.png'), banner_2: '', description: 'A reporting dashboard that help Farmerline Ltd. to monitor activities on several of their services.',
                overview: { problem: 'Farmerline needs an integrated way to monitor all of Mergdata\'s services including; voice gateways (Phone numbers), data collection activities, SMS sent and USSD interactions.', product: 'Mergdata is a platform used by multiple organisations particularly in the agriculture sector to manage various business activities such as;', li: [{id: 1, data: 'Creating online surveys and gathering responses via a smart phone app, USSD or IVR Menu.'}, { id: 2, data: 'Mass audio messages via audio calls or SMS.'}, { id: 3, data: 'USSD short code services, and,'}, { id: 4, data: 'Remote helpline services.'}], goal: 'To design a comprehensive dashboard for Mergdata administrators to monitor all of its activities at a glance.', role: 'UX designer designing the dashboard from conception to delivery.', responsibilities: 'Conducting user research, paper and digital wire-framing, high-fidelity mockup and prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.', duration: 'October 19, 2022 - October 24, 2022'},
                empathize: { overview: 'I conducted a secondary research, created user persona and empathy maps. The primary user groups identified from the research were Farmerline internal staff/administrators. Furthermore, the research suggested another user group that may have keen interest in the dashboard analytic data are top management such the CEO, CTO or the COO.', pain_points: [ { id: 1, title: 'Activity status', description: 'Users finds it difficult computing the statuses of the various Mergdata services, namely; SMS, USSD, Voice call, and Survey response.', title2: '', opportunity: 'Make sure the display is compact and is able to show status from all services without scrolling.'}, { id: 2, title: 'Meta-information', description: 'Users want to see meta-information on specific activities. These meta-information may include; time of call, USSD code dials, SMS sent time etc.', title2: '', opportunity: 'Include all relevant meta-informantion.'}, { id: 3, title: 'Real-time update', description: 'Users need the information on the  dashboard to update itself in real-time without having to manually refresh the page all the time.', title2: '', opportunity: 'Introduce a real-time update feature.'} ], 
                    persona: [{ id: 1, person_name: 'Samuel', problem_statement: 'Samuel is a busy data analyst who needs a concise dashboard because he needs to be able to view and analyze multiple user activities from different services on a big screen monitor.', persona_img: require('@/assets/images/persona_oculus.png'), age: '34', education: 'BSc Computer Science', hometown: 'Tamale, Ghana', family: 'Married with 2 Children', ocupation: 'Data Analyst', headline: '“I spend my day analyzing lots of data from different platforms. I wonder if that could be done in a more efficient manner…“', goals: [{id: 1, data: 'I need a simple but concise interface that has all the important details I need.'}, { id: 2, data: 'I need an interface that I wouldn\'t need to alway navigate too much in order to find information.'}], frustrations: [{id: 1, data: 'Data from all our services are overwhelming.'}, { id: 2, data: 'It\'s difficult to skim through analytics tools.'}], scenario: 'Samuel is an employee of Farmerline Ltd who works as a data analyst on the Mergdata platform. He together with his team are responsible for analyzing data from Mergedata\'s various services, and synthesising the data obtained to draw useful insights. Samuel and his team finds it difficult visualizing multiple services at the same time. Also,  they would like a way to project the entire system on a large screen monitor so that the entire team can glance at it in real-time without much user interactions like scrolling and clicking through.'},
                    {id: 2, person_name: 'Katherine', problem_statement: 'Katherine is a busy professional who needs a system to monitor activities on Mergdata platforms because she needs to be able view system updates especially when she\'s on-the- go.', persona_img: require('@/assets/images/persona_oculus.png'), age: '52', education: 'Ba in Management', hometown: 'Accra, Ghana', family: 'Married with 3 Children', ocupation: 'COO, Farmerline', headline: '“I am a very busy person but also would like to keep updated on every major happenings on our platforms especially whiles on-the-go“', goals: [{id: 1, data: 'I need a system that will be able to adapt to mobile usage.'}], frustrations: [{id: 1, data: 'It is difficult get access to Mergdata analytic information when I\'m away from the office and on the go because the system isn\'t mobile compatible.'}], scenario: 'Katherine is the COO of Farmerline Ltd, a company that provides various agricultural tools to help make farmers more efficient through its flagship product called Mergdata. Katherine is a very busy person, as COO, she is constantly engaged in external meetings and seminars. As such, whiles on-the-go she needs a system to be able to view Mergdata analytic data whenever she wants. More importantly the system should be able to adapt to mobile use case.'}], competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: 'I began my ideation my making paper wire-frames. I came out with four posible layouts for the dashboard and subsquently for the rest of the other pages.', paper_wireframe_img: require('@/assets/images/mergdata_paper_wireframe.png'), digital_wireframe: 'I proceeded to create a digital wire-frame.', digital_wireframe_img: require('@/assets/images/mergdata_digi_wireframe.png'), screen_variations: 'Since our user groups include people who would like to access the platform with mobile devices, I started working on variant screen sizes to make the dashboard  fully responsive.', screen_variations_imgs: [require('@/assets/images/mergdata_digi_variation_1.png'),require('@/assets/images/mergdata_digi_variation_2.png'), require('@/assets/images/mergdata_digi_variation_3.png')], lofi_prototyp: '', lofi_prototype_img: '', usability_study: 'A usability study conducted on the primary users revealed the following:', usability_study_fidings: [{id: 1, title: 'Inactivity status', data: 'Users finds it difficult noticing inactive gateways espectially if they are off the viewport.' }] },
                refining_the_design: { dsk: true, prelim: 'The wire-frames were refined into a high fidelity mockup. In addition, few changes were made to the left and top navigation bars.', before_after: [{id: 1, description: '', img: require('@/assets/images/mergdata_before_after_1.png')}, {id: 2, description: '', img: require('@/assets/images/mergdata_before_after_2.png')}], accessibility_considerations: [{ id: 1, title: 'Dark mode', description: 'I have introduced dark mode support to ensure the dashboard doesn\'t cause eye strain for users at night.'}, { id: 2, title: 'Multi Language Selection', description: 'I have also included a multiple language selection feature to ensure users have wide range of language options to choose from.'}], refined_designs: [require('@/assets/images/mergdata_hifi_1.png'),require('@/assets/images/mergdata_hifi_2.png'), require('@/assets/images/mergdata_hifi_3.png'), require('@/assets/images/mergdata_hifi_4.png'), require('@/assets/images/mergdata_hifi_5.png')], screen_variations: 'The mobile variatins are as follows;', screen_variations_imgs: [require('@/assets/images/mergdata_mob_1.png'), require('@/assets/images/mergdata_mob_2.png'),require('@/assets/images/mergdata_mob_3.png')], hifi_prototype: '', hifi_prototype_video: 'https://www.youtube.com/embed/iLwjECIBEZk', video_title: 'Mergdata reporting dashboard'},
                going_forward: { takeaways: [], nextstep: [{id: 1, title: 'Usability study', description: 'Conduct a round of usability studies to validate whether users\' pain points were addressed.'}, {id: 2, title: 'More user research', description: 'Conduct more user research to determine any new areas of need.'}]}
            },
            { id: 4, color: '#7582CC', color2: '#4B5FD1', type: 'case study', title: 'ShortCode Service Dashboard', thumbnail: require('@/assets/images/shortcode_thumbnail.png'), banner: require('@/assets/images/shortcode_banner.png'), banner_2: '', description: 'An ShortCode service dashboard designed for scheduling and managing SMS messages.',
                overview: { problem: 'After operating the current version of the shortcode scheduling portal for some years, it has become necessary to redevelop the system as the old design is no longer appealing.', product: 'NALO Solutions Ltd. needs to redesign its SMS short code service platform.', goal: 'Redesign NALO\'s short code message platform to a modern look.', role: 'Sole UX designer designing the dashboard from conception to delivery.', responsibilities: 'Conducting user research, paper and digital wire-framing, high-fidelity mockup and prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.', duration: 'November 5, 2022 - November 30, 2022'},
                empathize: { overview: 'The primary user groups identified from the research were NALO\'s internal staff/administrators.', pain_points: [ { id: 1, title: 'Dashboard', description: 'Users have difficulties keeping track of the statuses of scheduled messages.', title2: '', opportunity: 'Design a concise dashboard for easier visualization.'}, {id: 2, title: 'Reports', description: 'Users want easy way of filtering between various operator channels and their corresponding messages.', title2: '', opportunity: 'Include a flexible report filtering mechanism.'} ],
                    persona: [{id: 1, person_name: 'John', problem_statement: 'John is a content marketer who needs a concise dashboard because he needs to be able to manage and analyze data from multiple services.', persona_img: require('@/assets/images/persona_shortcode.png'), age: '30', education: 'BSc Marketing', hometown: 'Keta, Ghana', family: 'Maried', ocupation: 'Content Marketer', headline: '“I really need a modern platform with a simple and easy way to manage our various services“', goals: [{id: 1, data: 'I need an easy way to filter through data.'}, {id: 2, data: 'I need a concise interface to analyze and visualize data from all channels.'}], frustrations: [{id: 1, data: 'I find it difficult to filter among various operators.'}, { id: 2, data: 'It\'s difficult to analyze and skim data from our channels.'}], scenario: 'John is an employee of NALO Solutions Ltd who works as a content marketer. He and his team are responsible for scheduling short code messages to be sent out to subscribers. John and his team finds it difficult working with the old system as it is difficult to manage simple tasks like visualizing data, filtering and querying for reports. They would like a modern platform with much more flexibility.'}], competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: 'I started my ideation process by creating paper wire-frame. There were four variants created for each screen after which I selected the relevant components that should make it to the final design.', paper_wireframe_img: require('@/assets/images/shortcode_paper_wireframe.png'), digital_wireframe: 'Next, digital wire-frames.', digital_wireframe_img: require('@/assets/images/shortcode_digital_wireframe.png'), screen_variations: '', screen_variations_imgs: [], lofi_prototype: 'I went further to create a low fidelity prototype so as to help me conduct a usability study.', lofi_prototype_img: '', usability_study: 'A usability study conducted on the primary users revealed the following:', usability_study_fidings: [{id: 1, title: 'Subscription Activities', data: 'Users have no way of knowing about new subscribers.' }, { id: 2, title: 'Filters', data: 'Users expect filter through data on the dashboard as well.'}] },
                refining_the_design: { dsk: true, prelim: 'In refining the design, the following adjustments were made the mockup.', before_after: [{id: 1, description: 'Filters were added to the dashboard for users to filter through various channels. Also, a card was added to display latest subscriptions.', img: require('@/assets/images/shortcode_before_after_1.png')}], accessibility_considerations: [{id: 1, title: 'Multi-language', description: 'Multiple language selection feature was added for users to choose their preferred option.'}, {id: 2, title: 'Icons', description: 'A very descriptive icons were included in the design to aid users in understanding what various features means.'}], refined_designs: [require('@/assets/images/shortcode_hifi_1.png'), require('@/assets/images/shortcode_hifi_2.png'), require('@/assets/images/shortcode_hifi_3.png'),require('@/assets/images/shortcode_hifi_4.png'), require('@/assets/images/shortcode_hifi_5.png')], screen_variations: '', screen_variations_imgs: [], hifi_prototype: 'For testing purposes, I created a high fidelity prototype from the final design mockup so that users can properly test the final design and report their findings.', hifi_prototype_video: 'https://www.youtube.com/embed/iKmQG1nCzI0', video_title: 'Shortcode message management platform'},
                going_forward: { takeaways: [], nextstep: [{id: 1, title: 'Usability study', description: 'Conduct a round of usability studies to validate whether users\' pain points were addressed.'}, {id: 2, title: 'More user research', description: 'Conduct more user research to determine any new areas of need.'}]}
            }
        ]
    },
    mutations: {
        closeProject(state) {
            document.body.classList.remove('fixed-body')
            state.project.active = false
            state.project.project = {}
        },
        showProject(state, payload) {
            const thisProject = state.projects.find(p => p.id == payload)
            state.project.project = thisProject
            window.scrollTo(0,0)
            // console.log(router.currentRoute.value.name)
            // router.push({ name: router.currentRoute.value.name, params: { name: state.project.project.title }, replace: true }) 
        },
        findIndex(state, payload) {
            const prod = state.projects[payload]
            state.project.project = prod
        },
        showNext(state) {
            const length = state.projects.length -1
            const id = state.project.project.id
            const i = state.projects.findIndex(x => x.id === id)
            if(i < length) {
              this.commit('findIndex', i+1)
            }else {
              this.commit('findIndex', 0)
            }
      
        },
        showPrevious(state) {
            const length = state.projects.length
            const id = state.project.project.id
            const i = state.projects.findIndex(x => x.id === id)
            if(i > 0) {
              this.commit('findIndex', i-1)
            }else {
              this.commit('findIndex', length-1)
            }
        },
    },
    getters: {
        getProject: (state) => state.project,
        getProjects: (state) => state.projects,
        getIntro: (state) => state.intro
    },
}