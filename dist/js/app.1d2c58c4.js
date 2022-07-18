(function(){"use strict";var e={647:function(e,o,r){var t=r(9242),a=r(3396);function s(e,o){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}var l=r(89);const n={},i=(0,l.Z)(n,[["render",s]]);var c=i,d=r(678);const _={class:"home"};function u(e,o,r,t,s,l){const n=(0,a.up)("nav-bar"),i=(0,a.up)("side-drawer"),c=(0,a.up)("banner-component"),d=(0,a.up)("about-section"),u=(0,a.up)("projects-section"),m=(0,a.up)("contact-section"),p=(0,a.up)("footer-component"),h=(0,a.up)("video-container"),k=(0,a.up)("loader-component"),f=(0,a.up)("alert-success"),b=(0,a.up)("alert-error");return(0,a.wg)(),(0,a.iD)("div",_,[(0,a.Wm)(n),(0,a.Wm)(i),(0,a.Wm)(c),(0,a.Wm)(d),(0,a.Wm)(u),(0,a.Wm)(m),(0,a.Wm)(p),(0,a.Wm)(h),(0,a.Wm)(k),(0,a.Wm)(f),(0,a.Wm)(b)])}var m=r(7139);const p=(0,a.Uk)("IN");function h(e,o,r,t,s,l){const n=(0,a.up)("router-link"),i=(0,a.up)("nav-items"),c=(0,a.up)("theme-toggle-button"),d=(0,a.up)("nav-button");return(0,a.wg)(),(0,a.iD)("header",{class:(0,m.C_)(["nav-bar transition-mode",{"dark-nav-bar":e.darkMode}])},[(0,a.Wm)(n,{class:"nav-bar__logo",to:"/"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(i,{class:"d-none d-md-flex"}),(0,a.Wm)(c,{class:"d-none d-md-flex"}),(0,a.Wm)(d,{onClick:e.toggleDrawer,class:"d-md-none"},null,8,["onClick"])],2)}const k={class:"list-items"},f=(0,a.Uk)("Home"),b=(0,a.Uk)("About"),g=(0,a.Uk)("Portfolio"),v=(0,a.Uk)("Contact"),w=(0,a._)("a",{class:"list-items__btn-resume",href:"https://drive.google.com/file/d/1a1K4LlqyIjXkc5uz19ET12Rijyzr3oVk/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Resume",-1);function C(e,o,r,t,s,l){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",k,[(0,a._)("li",null,[(0,a.Wm)(n,{class:(0,m.C_)(["list-items__link",{active:""===s.hash,"dark-list-items__link":e.darkMode}]),onClick:e.closeDrawer,to:"/"},{default:(0,a.w5)((()=>[f])),_:1},8,["onClick","class"])]),(0,a._)("li",null,[(0,a.Wm)(n,{class:(0,m.C_)(["list-items__link",{active:"#about"===s.hash,"dark-list-items__link":e.darkMode}]),onClick:e.closeDrawer,to:"#about"},{default:(0,a.w5)((()=>[b])),_:1},8,["onClick","class"])]),(0,a._)("li",null,[(0,a.Wm)(n,{class:(0,m.C_)(["list-items__link",{active:"#portfolio"===s.hash,"dark-list-items__link":e.darkMode}]),onClick:e.closeDrawer,to:"#portfolio"},{default:(0,a.w5)((()=>[g])),_:1},8,["onClick","class"])]),(0,a._)("li",null,[(0,a.Wm)(n,{class:(0,m.C_)(["list-items__link",{active:"#contact"===s.hash,"dark-list-items__link":e.darkMode}]),onClick:e.closeDrawer,to:"#contact"},{default:(0,a.w5)((()=>[v])),_:1},8,["onClick","class"])]),w])}var M=r(65),y={name:"NavItems",data(){return{hash:this.$route.hash}},computed:{...(0,M.rn)(["darkMode"])},watch:{$route(e){this.hash=e.hash}},methods:{...(0,M.OI)(["closeDrawer"])}};const j=(0,l.Z)(y,[["render",C]]);var D=j;const S={key:0,class:"fi fi-rr-moon d-flex"},I={key:1,class:"fi fi-rr-sun d-flex dark-mode-color"};function A(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("button",{onClick:o[0]||(o[0]=(...o)=>e.toggleMode&&e.toggleMode(...o)),class:"theme-toggle-button"},[e.darkMode?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("i",S)),e.darkMode?((0,a.wg)(),(0,a.iD)("i",I)):(0,a.kq)("",!0)])}var N={name:"ThemeToggleButton",computed:{...(0,M.rn)(["darkMode"])},methods:{...(0,M.OI)(["toggleMode"])}};const x=(0,l.Z)(N,[["render",A]]);var L=x;const E={class:"nav-button"};function V(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("span",{class:(0,m.C_)(["bar top",{"dark-bar":e.darkMode}])},null,2),(0,a._)("span",{class:(0,m.C_)(["bar middle",{"dark-bar":e.darkMode}])},null,2),(0,a._)("span",{class:(0,m.C_)(["bar bottom",{"dark-bar":e.darkMode}])},null,2)])}var O={name:"NavButton",data(){return{}},computed:{...(0,M.rn)(["darkMode"])},mounted(){const e=document.querySelector(".nav-button");e.addEventListener("click",(()=>{e.classList.toggle("close")}))}};const W=(0,l.Z)(O,[["render",V]]);var T=W,P={name:"NavBar",components:{NavItems:D,ThemeToggleButton:L,NavButton:T},computed:{...(0,M.rn)(["darkMode"])},methods:{...(0,M.OI)(["toggleDrawer"])}};const B=(0,l.Z)(P,[["render",h]]);var U=B;function Z(e,o,r,t,s,l){const n=(0,a.up)("nav-items"),i=(0,a.up)("theme-toggle-button");return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["side-drawer d-md-none",{"show-drawer":e.showDrawer,"dark-show-drawer":e.showDrawer&&e.darkMode,"dark-side-drawer":e.darkMode}])},[(0,a.Wm)(n),(0,a.Wm)(i)],2)}var H={name:"SideDrawer",components:{NavItems:D,ThemeToggleButton:L},computed:{...(0,M.rn)(["showDrawer","darkMode"])}};const q=(0,l.Z)(H,[["render",Z]]);var F=q;const R={class:"banner"},z=(0,a._)("h6",{class:"banner__greetings"},"HELLO THERE I’M",-1),J=(0,a.Uk)("Contact Me");function Y(e,o,r,t,s,l){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",R,[z,(0,a._)("h1",{class:(0,m.C_)(["banner__name transition-mode",{"dark-mode-color":e.darkMode}])},"Isaac Ndala",2),(0,a._)("h3",{class:(0,m.C_)(["banner__title transition-mode",{"dark-mode-color":e.darkMode}])},"Full Stack Web Developer",2),(0,a._)("p",{class:(0,m.C_)(["banner__description mt-3 transition-mode",{"dark-mode-color":e.darkMode}])},"I’m a developer who loves to solve real problems by code and to delivery exceptional digital experiences.",2),(0,a.Wm)(n,{class:"banner__btn mt-5",to:"/#contact"},{default:(0,a.w5)((()=>[J])),_:1})])}var G={name:"BannerComponent",computed:{...(0,M.rn)(["darkMode"])}};const Q=(0,l.Z)(G,[["render",Y]]);var K=Q,$=r.p+"img/image.0b1cb38a.jpg";const X={id:"about",class:"about"},ee={class:"container"},oe=(0,a._)("div",{class:"section-title-line"},null,-1),re={class:"container"},te={class:"row"},ae={class:"col-md-7 py-4"},se={class:"row"},le={class:"col-6"},ne={class:"col-6"},ie={class:"row mt-4"},ce={class:"col-6"},de={class:"col-6"},_e={class:"col-md-5 about-img-col pt-5"},ue=(0,a._)("div",{class:"about-img-container"},[(0,a._)("img",{src:$,alt:""})],-1),me={class:"about-img-col__social-container"},pe=(0,a._)("i",{class:"fi fi-brands-github"},null,-1),he=[pe],ke=(0,a._)("i",{class:"fi fi-brands-linkedin"},null,-1),fe=[ke],be=(0,a._)("i",{class:"fi fi-brands-twitter"},null,-1),ge=[be],ve=(0,a._)("i",{class:"fi fi-brands-instagram"},null,-1),we=[ve];function Ce(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("section",X,[(0,a._)("div",ee,[(0,a._)("h2",{class:(0,m.C_)(["section-title transition-mode",{"dark-mode-color":e.darkMode}])},"About Me",2),oe]),(0,a._)("div",re,[(0,a._)("div",te,[(0,a._)("div",ae,[(0,a._)("p",{class:(0,m.C_)(["about-p transition-mode",{"dark-mode-color":e.darkMode}])}," Hello! My name is Isaac Ndala and I enjoy creating things that live on the internet. My interest in web development started back in 2018, in that time I was at high school and there was an initiative called CODIP, there I had the opportunity to learn the basic of HTML, CSS, JavaScript and PHP. ",2),(0,a._)("p",{class:(0,m.C_)(["about-p transition-mode",{"dark-mode-color":e.darkMode}])},"In my first work experience I had the opportunity to work as a frontend developer with a team that build management app based on web, where my role was to build and improve the UI of the products that were delivered to the clients.",2),(0,a._)("p",{class:(0,m.C_)(["about-p transition-mode",{"dark-mode-color":e.darkMode}])},"Now I’m looking for a new opportunity, I’m open for frontend, backend and full stack position.",2),(0,a._)("p",{class:(0,m.C_)(["about-p transition-mode",{"dark-mode-color":e.darkMode}])},"Actually I’ve been using a lot Node.js and Vue.js for creating full stack web applications. Here is a full list of my skills: ",2),(0,a._)("div",se,[(0,a._)("div",le,[(0,a._)("span",{class:(0,m.C_)(["about__skill-title transition-mode",{"dark-mode-color":e.darkMode}])},"Languages:",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"HTML",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"CSS",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"JavaScript",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"PHP",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"C",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"C++",2)]),(0,a._)("div",ne,[(0,a._)("span",{class:(0,m.C_)(["about__skill-title transition-mode",{"dark-mode-color":e.darkMode}])},"Frameworks and Libraries:",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Vue.js",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Vuex",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Node.js",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Express",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"jQuery",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Bootstrap",2)])]),(0,a._)("div",ie,[(0,a._)("div",ce,[(0,a._)("span",{class:(0,m.C_)(["about__skill-title transition-mode",{"dark-mode-color":e.darkMode}])},"Databases:",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"MySQL",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"MongoDB",2)]),(0,a._)("div",de,[(0,a._)("span",{class:(0,m.C_)(["about__skill-title transition-mode",{"dark-mode-color":e.darkMode}])},"Others:",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Git",2),(0,a._)("li",{class:(0,m.C_)(["about__skill-list transition-mode",{"dark-mode-color":e.darkMode}])},"Command line",2)])])]),(0,a._)("div",_e,[ue,(0,a._)("div",me,[(0,a._)("a",{href:"https://github.com/IsaacNdala",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},he,2),(0,a._)("a",{href:"https://www.linkedin.com/in/isaacndala",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},fe,2),(0,a._)("a",{href:"https://twitter.com/IsaacNdala11",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},ge,2),(0,a._)("a",{href:"https://www.instagram.com/isaac.ndala111/",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},we,2)])])])])])}var Me={name:"AboutComponent",computed:{...(0,M.rn)(["darkMode"])}};const ye=(0,l.Z)(Me,[["render",Ce]]);var je=ye,De=r.p+"img/wherechat.8de87c10.png",Se=r.p+"img/schoolg.2443afb9.jpg",Ie=r.p+"img/chocolife.3295d7ba.png",Ae=r.p+"img/cortex.c533cc9e.png";const Ne={id:"portfolio",class:"projects"},xe={class:"container"},Le=(0,a._)("div",{class:"section-title-line mb-2"},null,-1),Ee={class:"container"},Ve={class:"row"},Oe={class:"col-md-6 col-lg-3 pt-4"},We={class:"projects__card"},Te=(0,a.uE)('<img src="'+De+'" alt="" class="projects__card__img"><h3 class="projects__card__title">WhereChat</h3><p class="projects__card__description"> Wherechat is a chat application that allows users to find and meet each other through their location on the map. </p><ul><li class="projects__card__built-with">Vue.js</li><li class="projects__card__built-with">Node.js</li><li class="projects__card__built-with">Mongo DB</li><li class="projects__card__built-with">Socket.IO</li><li class="projects__card__built-with">Google Maps API</li></ul>',4),Pe={class:"projects__card__links"},Be=(0,a._)("a",{href:"https://github.com/IsaacNdala/wherechat",target:"_blank",rel:"noopener noreferrer"},[(0,a._)("i",{class:"fi fi-brands-github"})],-1),Ue=(0,a._)("i",{class:"fi fi-rr-video-camera"},null,-1),Ze=[Ue],He=(0,a._)("a",{href:"https://wherechat.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},[(0,a._)("i",{class:"fi fi-rr-link"})],-1),qe={class:"col-md-6 col-lg-3 pt-4"},Fe={class:"projects__card"},Re=(0,a.uE)('<img src="'+Se+'" alt="" class="projects__card__img"><h3 class="projects__card__title">School G</h3><p class="projects__card__description"> Schoolg is a basic school management application that allow users to manage information of a educational instituation. </p><ul><li class="projects__card__built-with">Node.js</li><li class="projects__card__built-with">MySQL</li><li class="projects__card__built-with">JavaScript</li><li class="projects__card__built-with">CSS</li><li class="projects__card__built-with">Bootstrap</li><li class="projects__card__built-with">PDFKit</li></ul>',4),ze={class:"projects__card__links"},Je=(0,a._)("a",{href:"https://github.com/IsaacNdala/schoolg",target:"_blank",rel:"noopener noreferrer"},[(0,a._)("i",{class:"fi fi-brands-github"})],-1),Ye=(0,a._)("i",{class:"fi fi-rr-video-camera"},null,-1),Ge=[Ye],Qe=(0,a._)("a",{href:"https://schoolgnet.herokuapp.com/login",target:"_blank",rel:"noopener noreferrer"},[(0,a._)("i",{class:"fi fi-rr-link"})],-1),Ke={class:"col-md-6 col-lg-3 pt-4"},$e={class:"projects__card"},Xe=(0,a.uE)('<img src="'+Ie+'" alt="" class="projects__card__img"><h3 class="projects__card__title">Chocolife</h3><p class="projects__card__description"> Chocolife is a template for an online chocolate candy shop. The application also focuses on sharing tips and advices to take care of mouth hygiene in addition to sell candies. </p><ul><li class="projects__card__built-with">HTML</li><li class="projects__card__built-with">CSS</li><li class="projects__card__built-with">JavaScript</li><li class="projects__card__built-with">Bootstrap</li></ul><div class="projects__card__links"><a href="https://github.com/IsaacNdala/chocolife" target="_blank" rel="noopener noreferrer"><i class="fi fi-brands-github"></i></a><a href="https://chocolifenet.netlify.app/index.html" target="_blank" rel="noopener noreferrer"><i class="fi fi-rr-link"></i></a></div>',5),eo={class:"col-md-6 col-lg-3 pt-4"},oo={class:"projects__card"},ro=(0,a.uE)('<img src="'+Ae+'" alt="" class="projects__card__img"><h3 class="projects__card__title">Córtex Website</h3><p class="projects__card__description"> This is the website of Cortéx Tecnologias a company focused on implementation of communications systems, information management and software development. </p><ul><li class="projects__card__built-with">PHP</li><li class="projects__card__built-with">CSS</li><li class="projects__card__built-with">JavaScript</li><li class="projects__card__built-with">Bootstrap</li></ul><div class="projects__card__links"><a href="https://www.cortextecnologias.com/" target="_blank" rel="noopener noreferrer"><i class="fi fi-rr-link"></i></a></div>',5);function to(e,o,r,s,l,n){return(0,a.wg)(),(0,a.iD)("section",Ne,[(0,a._)("div",xe,[(0,a._)("h2",{class:(0,m.C_)(["section-title transition-mode",{"dark-mode-color":e.darkMode}])},"My Portfolio",2),Le,(0,a._)("p",{class:(0,m.C_)(["projects__title-description transition-mode",{"dark-mode-color":e.darkMode}])},"Here is some of my projects, some of them are open source you can contribute or show your suport o github. ",2)]),(0,a._)("div",Ee,[(0,a._)("div",Ve,[(0,a._)("div",Oe,[(0,a._)("div",We,[(0,a._)("a",{href:"https://wherechat.herokuapp.com/",class:(0,m.C_)(["card__link-overlay",{"dark__card__link-overlay":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},null,2),Te,(0,a._)("div",Pe,[Be,(0,a._)("a",{href:"#",onClick:o[0]||(o[0]=(0,t.iM)((o=>e.openVideoContainer("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6932077302415568896?compact=1")),["prevent"]))},Ze),He])])]),(0,a._)("div",qe,[(0,a._)("div",Fe,[(0,a._)("a",{href:"https://schoolgnet.herokuapp.com/login",class:(0,m.C_)(["card__link-overlay",{"dark__card__link-overlay":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},null,2),Re,(0,a._)("div",ze,[Je,(0,a._)("a",{href:"#",onClick:o[1]||(o[1]=(0,t.iM)((o=>e.openVideoContainer("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6913879432206118912?compact=1")),["prevent"]))},Ge),Qe])])]),(0,a._)("div",Ke,[(0,a._)("div",$e,[(0,a._)("a",{href:"https://chocolifenet.netlify.app/index.html",class:(0,m.C_)(["card__link-overlay",{"dark__card__link-overlay":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},null,2),Xe])]),(0,a._)("div",eo,[(0,a._)("div",oo,[(0,a._)("a",{href:"https://www.cortextecnologias.com/",class:(0,m.C_)(["card__link-overlay",{"dark__card__link-overlay":e.darkMode}]),target:"_blank",rel:"noopener noreferrer"},null,2),ro])])])])])}var ao={name:"ProjectSetion",computed:{...(0,M.rn)(["darkMode"])},methods:{...(0,M.OI)(["openVideoContainer"])}};const so=(0,l.Z)(ao,[["render",to]]);var lo=so;const no={id:"contact",class:"contact"},io={class:"container"},co={class:"contact__title-container"},_o=(0,a._)("div",{class:"section-title-line mb-2"},null,-1),uo=(0,a.Uk)("You can also send me an email at "),mo=(0,a._)("a",{href:"mailto:isaacndala111@gmail.com",class:"text-success"},"isaacndala111@gmail.com",-1),po=[uo,mo],ho={class:"col-md-6"},ko={class:"col-md-6"},fo={class:"col-12"},bo={class:"col-12"},go=(0,a._)("div",{class:"col-12"},[(0,a._)("button",{class:"btn btn-success contact__btn"},"Enviar")],-1);function vo(e,o,r,s,l,n){return(0,a.wg)(),(0,a.iD)("section",no,[(0,a._)("div",io,[(0,a._)("div",co,[(0,a._)("h2",{class:(0,m.C_)(["section-title text-center transition-mode",{"dark-mode-color":e.darkMode}])},"Contact Me",2),_o,(0,a._)("p",{class:(0,m.C_)(["contact__title-description text-center transition-mode",{"dark-mode-color":e.darkMode}])},' Get In touch. I’m currently looking for new opportunity and also open for freelance projects. Or if just want to say "hi 👋" feel free! ',2),(0,a._)("p",{class:(0,m.C_)(["contact__title-description text-center transition-mode",{"dark-mode-color":e.darkMode}])},po,2)]),(0,a._)("form",{onSubmit:o[4]||(o[4]=(0,t.iM)(((...e)=>n.postContact&&n.postContact(...e)),["prevent"])),class:"row g-3"},[(0,a._)("div",ho,[(0,a.wy)((0,a._)("input",{type:"text",required:"",class:(0,m.C_)(["form-control",{"dark-form-control":e.darkMode}]),"onUpdate:modelValue":o[0]||(o[0]=e=>l.formData.firstName=e),id:"inputAddress",placeholder:"First Name"},null,2),[[t.nr,l.formData.firstName]])]),(0,a._)("div",ko,[(0,a.wy)((0,a._)("input",{type:"text",required:"",class:(0,m.C_)(["form-control",{"dark-form-control":e.darkMode}]),"onUpdate:modelValue":o[1]||(o[1]=e=>l.formData.lastName=e),id:"inputAddress",placeholder:"Last Name"},null,2),[[t.nr,l.formData.lastName]])]),(0,a._)("div",fo,[(0,a.wy)((0,a._)("input",{type:"email",required:"",class:(0,m.C_)(["form-control",{"dark-form-control":e.darkMode}]),"onUpdate:modelValue":o[2]||(o[2]=e=>l.formData.email=e),placeholder:"Your email address"},null,2),[[t.nr,l.formData.email]])]),(0,a._)("div",bo,[(0,a.wy)((0,a._)("textarea",{class:(0,m.C_)(["form-control",{"dark-form-control":e.darkMode}]),required:"","onUpdate:modelValue":o[3]||(o[3]=e=>l.formData.message=e),placeholder:"Write a your message",rows:"7"},null,2),[[t.nr,l.formData.message]])]),go],32)])])}var wo=r(6265),Co=r.n(wo),Mo={name:"ContactSection",data(){return{formData:{firstName:"",lastName:"",email:"",message:""}}},computed:{...(0,M.rn)(["darkMode"])},methods:{...(0,M.OI)(["openLoader","closeLoader","openAlertSuccess","openAlertSuccess","openAlertError","closeAlertSuccess","closeAlertError"]),async postContact(){this.openLoader();try{const e=await Co().post("http://localhost:3000/contact/post-contact",this.formData);e&&setTimeout((()=>{this.closeLoader(),this.openAlertSuccess("I will reach you as soon as possible!"),this.formData.firstName="",this.formData.lastName="",this.formData.email="",this.formData.message="",setTimeout((()=>{this.closeAlertSuccess()}),5e3)}),2e3)}catch(e){setTimeout((()=>{this.closeLoader(),e.response&&422===e.response.status?this.openAlertError(e.response.data.msg):this.openAlertError("This an error ocured!")}),2e3)}}}};const yo=(0,l.Z)(Mo,[["render",vo]]);var jo=yo;const Do={class:"footer"},So={class:"container d-flex flex-column align-items-center"},Io={class:"footer__social-media"},Ao=(0,a._)("i",{class:"fi fi-brands-github"},null,-1),No=[Ao],xo=(0,a._)("i",{class:"fi fi-brands-linkedin"},null,-1),Lo=[xo],Eo=(0,a._)("i",{class:"fi fi-brands-twitter"},null,-1),Vo=[Eo],Oo=(0,a._)("i",{class:"fi fi-brands-instagram"},null,-1),Wo=[Oo],To=(0,a._)("a",{href:"https://github.com/IsaacNdala",target:"_blank",class:"text-success",rel:"noopener noreferrer"},"Isaac Ndala",-1);function Po(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("footer",Do,[(0,a._)("div",So,[(0,a._)("div",Io,[(0,a._)("a",{href:"https://github.com/IsaacNdala",target:"_blank",rel:"noopener noreferrer",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}])},No,2),(0,a._)("a",{href:"https://www.linkedin.com/in/isaacndala",target:"_blank",rel:"noopener noreferrer",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}])},Lo,2),(0,a._)("a",{href:"https://twitter.com/IsaacNdala11",target:"_blank",rel:"noopener noreferrer",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}])},Vo,2),(0,a._)("a",{href:"https://www.instagram.com/isaac.ndala111/",target:"_blank",rel:"noopener noreferrer",class:(0,m.C_)(["transition-mode",{"dark-mode":e.darkMode}])},Wo,2)]),(0,a._)("p",{class:(0,m.C_)(["footer__p transition-mode",{"dark-mode":e.darkMode}])},[(0,a.Uk)(" © "+(0,m.zw)(l.year)+" - Designed & Built by ",1),To],2)])])}var Bo={name:"FooterComponent",computed:{...(0,M.rn)(["darkMode"]),year(){return(new Date).getFullYear()}}};const Uo=(0,l.Z)(Bo,[["render",Po]]);var Zo=Uo;const Ho=(0,a._)("i",{class:"fi fi-br-cross d-flex"},null,-1),qo=[Ho],Fo=(0,a._)("div",{class:"container"},[(0,a._)("div",{class:"row justify-content-center"},[(0,a._)("div",{class:"col-lg-8"},[(0,a._)("div",{class:"ratio ratio-16x9"},[(0,a._)("iframe",{src:"",title:"YouTube video",id:"project-video",allowfullscreen:""})])])])],-1);function Ro(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["video-container",{"show-video-container":e.showVideoContainer}])},[(0,a._)("div",{onClick:o[0]||(o[0]=(...o)=>e.closeVideoContainer&&e.closeVideoContainer(...o)),class:"overlay"}),(0,a._)("button",{onClick:o[1]||(o[1]=(...o)=>e.closeVideoContainer&&e.closeVideoContainer(...o)),class:"video-container__btn-close"},qo),Fo],2)}var zo={name:"VideoContainer",computed:{...(0,M.rn)(["showVideoContainer","projectVideoURL"])},methods:{...(0,M.OI)(["closeVideoContainer"])}};const Jo=(0,l.Z)(zo,[["render",Ro]]);var Yo=Jo;const Go={key:0,class:"loader"},Qo=(0,a._)("div",{class:"cube"},"I",-1),Ko=(0,a._)("div",{class:"cube"},null,-1),$o=(0,a._)("div",{class:"cube"},"N",-1),Xo=[Qo,Ko,$o];function er(e,o,r,t,s,l){return e.showLoader?((0,a.wg)(),(0,a.iD)("div",Go,Xo)):(0,a.kq)("",!0)}var or={name:"LoaderComponent",computed:{...(0,M.rn)(["showLoader"])}};const rr=(0,l.Z)(or,[["render",er]]);var tr=rr;const ar=(0,a._)("i",{class:"fi fi-br-cross d-flex"},null,-1),sr=[ar],lr={class:"alert-s__description-container"},nr=(0,a._)("h5",null,"Thanks You!",-1);function ir(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["alert-s",{"show-alert-success":e.showAlertSuccess}])},[(0,a._)("button",{class:"alert-s__btn-close",onClick:o[0]||(o[0]=(...o)=>e.closeAlertSuccess&&e.closeAlertSuccess(...o))},sr),(0,a._)("div",lr,[nr,(0,a._)("p",null,(0,m.zw)(e.alertMessage),1)])],2)}var cr={name:"AlertSuccess",computed:{...(0,M.rn)(["showAlertSuccess","alertMessage"])},methods:{...(0,M.OI)(["closeAlertSuccess"])}};const dr=(0,l.Z)(cr,[["render",ir]]);var _r=dr;const ur=(0,a._)("i",{class:"fi fi-br-cross d-flex"},null,-1),mr=[ur],pr={class:"alert-error__description-container"},hr=(0,a._)("h5",null,"Upps!",-1);function kr(e,o,r,t,s,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["alert-error",{"show-alert-error":e.showAlertError}])},[(0,a._)("button",{class:"alert-error__btn-close",onClick:o[0]||(o[0]=(...o)=>e.closeAlertError&&e.closeAlertError(...o))},mr),(0,a._)("div",pr,[hr,(0,a._)("p",null,(0,m.zw)(e.alertMessage),1)])],2)}var fr={name:"AlertError",computed:{...(0,M.rn)(["showAlertError","alertMessage"])},methods:{...(0,M.OI)(["closeAlertError"])}};const br=(0,l.Z)(fr,[["render",kr]]);var gr=br,vr={name:"HomeView",components:{NavBar:U,SideDrawer:F,BannerComponent:K,AboutSection:je,ProjectsSection:lo,ContactSection:jo,FooterComponent:Zo,VideoContainer:Yo,LoaderComponent:tr,AlertSuccess:_r,AlertError:gr},computed:{...(0,M.rn)(["darkMode"])},mounted(){!0===this.darkMode&&document.body.classList.add("dark-mode-bg-color"),!1===this.darkMode&&document.body.classList.remove("dark-mode-bg-color")}};const wr=(0,l.Z)(vr,[["render",u]]);var Cr=wr;const Mr=[{path:"/",name:"home",component:Cr}],yr=(0,d.p7)({history:(0,d.PO)("/"),routes:Mr,scrollBehavior(e,o,r){return e.hash?(console.log(e.hash),{el:e.hash,behavior:"smooth"}):{top:0}}});var jr=yr;const Dr=localStorage.getItem("darkMode"),Sr=Dr||!1;var Ir=(0,M.MT)({state:{alertMessage:"",showAlertSuccess:!1,showAlertError:!1,showLoader:!1,projectVideoURL:"",showVideoContainer:!1,showDrawer:!1,darkMode:"true"===Sr},getters:{},mutations:{openAlertSuccess(e,o){e.showAlertSuccess=!0,e.alertMessage=o},closeAlertSuccess(e){e.showAlertSuccess=!1},openAlertError(e,o){e.showAlertError=!0,e.alertMessage=o},closeAlertError(e){e.showAlertError=!1},openLoader(e){e.showLoader=!0},closeLoader(e){e.showLoader=!1},openVideoContainer(e,o){e.showVideoContainer=!0,e.projectVideoURL=o,document.body.style.overflow="hidden",document.getElementById("project-video").setAttribute("src",o)},closeVideoContainer(e){e.showVideoContainer=!1,document.body.style.overflow="auto",document.getElementById("project-video").setAttribute("src","")},toggleDrawer(e){e.showDrawer=!e.showDrawer},closeDrawer(e){document.querySelector(".nav-button").classList.remove("close"),e.showDrawer=!1},toggleMode(e){e.darkMode=!e.darkMode,document.body.classList.toggle("dark-mode-bg-color"),localStorage.setItem("darkMode",e.darkMode)}},actions:{},modules:{}});r(8937);(0,t.ri)(c).use(Ir).use(jr).mount("#app")}},o={};function r(t){var a=o[t];if(void 0!==a)return a.exports;var s=o[t]={exports:{}};return e[t](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(o,t,a,s){if(!t){var l=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],s=e[d][2];for(var n=!0,i=0;i<t.length;i++)(!1&s||l>=s)&&Object.keys(r.O).every((function(e){return r.O[e](t[i])}))?t.splice(i--,1):(n=!1,s<l&&(l=s));if(n){e.splice(d--,1);var c=a();void 0!==c&&(o=c)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[t,a,s]}}(),function(){r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,{a:o}),o}}(),function(){r.d=function(e,o){for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(o){return 0===e[o]};var o=function(o,t){var a,s,l=t[0],n=t[1],i=t[2],c=0;if(l.some((function(o){return 0!==e[o]}))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(i)var d=i(r)}for(o&&o(t);c<l.length;c++)s=l[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},t=self["webpackChunkisaacndala_portfolio"]=self["webpackChunkisaacndala_portfolio"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(647)}));t=r.O(t)})();
//# sourceMappingURL=app.1d2c58c4.js.map