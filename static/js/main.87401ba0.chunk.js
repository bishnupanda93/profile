(this["webpackJsonpsingle-page-profile"]=this["webpackJsonpsingle-page-profile"]||[]).push([[0],[,function(e,a,n){e.exports={header:"Header_header__3rqBL","header-list-group-item":"Header_header-list-group-item__2NzhS","icon-style":"Header_icon-style__2wGps","linkedIn-style":"Header_linkedIn-style__2Y_uC"}},function(e,a,n){e.exports={"portfolio-container":"Portfolio_portfolio-container___K88-","skills-list":"Portfolio_skills-list__2sdTK","summary-text":"Portfolio_summary-text__1LVoc"}},function(e,a,n){e.exports={"bold-green-text":"SubTitle_bold-green-text__1WYeK","muted-grey-text":"SubTitle_muted-grey-text__Vxv1O","subtitle-wrapper":"SubTitle_subtitle-wrapper__1LMOF"}},function(e,a,n){e.exports={iconClass:"Title_iconClass__1HZLP","title-style":"Title_title-style__2f1xC"}},,,function(e,a,n){e.exports={"tenure-wrapper":"Tenure_tenure-wrapper__3sJuS"}},function(e,a,n){e.exports=n(14)},,,,,function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(6),s=n.n(i),l=(n(13),n(1)),o=n.n(l),c=function(e){return r.a.createElement("div",{className:[o.a.header,"row pb-4 px-4 px-sm-5 pt-5 mb-4"].join(" ")},r.a.createElement("div",{className:"col-md-9 d-flex flex-column-reverse"},r.a.createElement("h1",{className:"text-uppercase"},e.personDetails.name)),r.a.createElement("div",{className:"col-md-3 pt-2"},r.a.createElement("ul",{className:o.a["header-list-group-item"]},r.a.createElement("li",null,e.personDetails.address," ",r.a.createElement("i",{className:[o.a["icon-style"],"fa fa-home ml-1"].join(" "),"aria-hidden":"true"})),r.a.createElement("li",null,e.personDetails.phone," ",r.a.createElement("i",{className:["fa fa-phone ml-1",o.a["icon-style"]].join(" ")})),r.a.createElement("li",null,e.personDetails.email,r.a.createElement("i",{className:[o.a["icon-style"],"fa fa-envelope ml-1"].join(" ")})),r.a.createElement("li",null,r.a.createElement("a",{href:e.personDetails.linkedIn,className:o.a["linkedIn-style"]},"LinkedIn",r.a.createElement("i",{className:[o.a["icon-style"],"fa fa-linkedin ml-1"].join(" ")}))))))},m=n(4),d=n.n(m),u=function(e){var a=[d.a.iconClass,e.icon],n=[d.a["title-style"],"col pl-0 mx-5 mx-sm-auto"].join(" ");return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto d-none d-sm-block"},r.a.createElement("i",{className:a.join(" ")})),r.a.createElement("div",{className:n},r.a.createElement("h5",{className:"text-uppercase"},e.value)))},p=n(2),f=n.n(p),g=n(3),v=n.n(g),E=function(e){var a=[v.a["subtitle-wrapper"],"row no-gutters"];return r.a.createElement("div",{className:a.join(" ")},r.a.createElement("div",{className:"col col-sm-auto"},r.a.createElement("span",{className:v.a["bold-green-text"]},e.role)),r.a.createElement("div",{className:"d-none d-sm-flex"},"\xa0|\xa0"),r.a.createElement("div",{className:"w-100 d-flex d-sm-none"}),r.a.createElement("div",{className:"col col-sm-auto"},r.a.createElement("span",{className:v.a["muted-grey-text"]},e.organisation)))},b=n(7),h=n.n(b),y=function(e){return r.a.createElement("p",{className:h.a["tenure-wrapper"]},e.startDate,"\xa0-\xa0",e.endDate)},w=function(e){var a=e.experience.map((function(e,a){var n=e.role,t=e.organisation,i=e.tenureStart,s=e.tenureEnd,l=e.experienceDetail;return r.a.createElement("div",{key:a},r.a.createElement(E,{organisation:t,role:n}),r.a.createElement(y,{startDate:i,endDate:s}),r.a.createElement("ul",{className:f.a["skills-list"]},l.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("span",null,e))}))))})),n=[f.a["skills-list"],"row no-gutters"];return r.a.createElement("div",{className:f.a["portfolio-container"]},r.a.createElement("div",null,r.a.createElement(u,{value:"Summary",icon:"fa fa-bars"}),r.a.createElement("p",{className:f.a["summary-text"]},e.summary)),r.a.createElement("div",{className:"mt-4 pt-2"},r.a.createElement(u,{value:"Skills",icon:"fa fa-wrench"}),r.a.createElement("ul",{className:n.join(" ")},e.skills.map((function(e,a){return r.a.createElement("li",{key:a,className:"col-sm-4"},r.a.createElement("span",null,e))})))),r.a.createElement("div",{className:"mt-4 pt-2"},r.a.createElement(u,{value:"Experience",icon:"fa fa-briefcase"}),r.a.createElement(E,{organisation:"Tata Consultancy Services",role:"Frontend Developer"}),r.a.createElement(y,{startDate:"AUG 2015",endDate:"PRESENT"}),r.a.createElement("p",{className:f.a["summary-text"]},"IT Analyst at TCS and following are accounts/clients\u2019 projects that I have worked upon:"),a),r.a.createElement("div",{className:"mt-4 pt-2"},r.a.createElement(u,{value:"Education",icon:"fa fa-university"}),r.a.createElement(E,{organisation:"University of Mumbai",role:"Bachelor of Engineering"}),r.a.createElement(y,{startDate:"2011",endDate:"2015"})))};var x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(c,{personDetails:{name:"Bishnu Panda",address:"Amstelveen, NL",phone:"+31 645827857",email:"guptapriyab@gmail.com",linkedIn:"https://www.linkedin.com/in/priya-gupta-46549aab"}}),r.a.createElement(w,{skills:["HTML5, CSS3, JavaScript ","React, Redux, ES6, Jest","Vue.js, Vuex","AngularJs, Ionic, Protractor, Jasmine, Karma","Sass","jQuery","webpack, Git, Fiddler, Bitbucket, Jira","WebStorm, Visual Studio Code"],summary:"Highly creative, sassy and motivated front-end web developer with 4.5 years of experience in building and maintaining responsive websites. Passionate about building pixel perfect application, with focus on consistency and reusability of components. Proficient in modern libraries and frameworks and experience in Agile development method.",experience:[{role:"Frontend Developer",organisation:"ABN AMRO Bank",tenureStart:"JAN 2019",tenureEnd:"PRESENT",experienceDetail:["Developed React application for Employee Portal lite(CRM) wherein employee can search and view contracts of a bank customer.","Build reusable UI components required as per user experience design and specification.","Consumed RESTful API using axios and managed state application using Redux and managed routing using React Router.","Wrote maintainable, scalable, responsive, and cross-browser front end development code","Collaborated with user experience and business analyst for understanding requirements and found better viable solutions by involving with whole team.","Prepared technical implementation and design documents for the requirements given."]},{role:"Frontend Developer",organisation:"ABN AMRO Bank",tenureStart:"MAR 2017",tenureEnd:"JAN 2019",experienceDetail:["Developed Angular Js widgets for Employee Portal Journey Application for searching, viewing contact and contract details, history of the conversation and processes initiated for a bank customer.","Followed front-end standards as documented and developed new components required as per user experience design and specification.","Wrote maintainable, scalable, responsive, and cross-browser front end development code.","Also have written unit testing test cases in Jasmine and have written and performed functional end to end testing using protractor."]},{role:"Hybrid App Developer",organisation:"State Bank of India",tenureStart:"JUL 2016",tenureEnd:"MAR 2017",experienceDetail:["Developed hybrid mobile application for Task management for iOS and Android platforms. Used languages HTML5, CSS3 and framework like Angular Js and Ionic and Cordova.","Used Sass as CSS preprocessor for styling mobile app and developed responsive design to function across multiple devices.","Resolved technical issues through debugging, research, and investigation."]},{role:"Junior Front End Developer",organisation:"Generali Group",tenureStart:"NOV 2015",tenureEnd:"JUN 2016",experienceDetail:["Worked on enhancement and change requests in front end for Public Portal web application which showcased products and campaign.","Fixed bugs and tested code in multiple browsers to ensure cross-browser compatibility.","Also, developed prototype of mobile application using Hybrid App Technology using Ionic and Angular Js and as a vendor we were successful in winning the project deal."]}]}))};s.a.render(r.a.createElement(x,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.87401ba0.chunk.js.map