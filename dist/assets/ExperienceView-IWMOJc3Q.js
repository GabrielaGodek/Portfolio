import{d,_ as m,e as o,f as i,F as l,E as $,g as e,G as c,H as w,I as x,p as E,k as S,r as f,c as a,h as r,w as D,S as H,D as T,i as n}from"./vendor-y6hibt0b.js";const k=d({name:"TimeLine",props:{items:{type:Array,required:!0}}}),y=t=>(E("data-v-87d14b20"),t=t(),S(),t),j={class:"timeline"},A=y(()=>e("span",{class:"timeline__line"},null,-1)),V={class:"timeline__date"},P=y(()=>e("span",{class:"timeline__event"},null,-1)),J={class:"timeline__details"},M={class:"timeline__title"},B={class:"timeline__company"};function C(t,p,u,g,_,h){return o(),i("div",j,[A,(o(!0),i(l,null,$(t.items,s=>(o(),i(l,{key:s.header},[e("p",V,c(s.date),1),P,e("div",J,[e("h2",M,c(s.header),1),w(e("h3",{class:"timeline__additional"},c(s.subHeader),513),[[x,s.isSubHeader]]),e("h4",B,c(s.company),1)])],64))),128))])}const v=m(k,[["render",C],["__scopeId","data-v-87d14b20"]]),N=d({name:"ExperienceItem",components:{TimelineItem:v},setup(){return{timelineItem:f([{date:"11.22 - 10.23",header:"Junior Web Developer",company:"Marketing Investment Group",subHeader:"",isSubHeader:!1},{date:"03.22 - 11.22",header:"Assistant Web Developer",company:"Marketing Investment Group",subHeader:"",isSubHeader:!1}])}}}),F=e("h1",null,"Experience",-1),W={class:"timeline-wrapper"};function G(t,p,u,g,_,h){const s=a("TimelineItem");return o(),i(l,null,[F,e("div",W,[r(s,{items:t.timelineItem},null,8,["items"])])],64)}const L=m(N,[["render",G]]),R=d({name:"EducationItem",components:{TimelineItem:v},setup(){return{timelineItem:f([{date:"10.22 - ongoing",header:"Master's Degree",company:"Applied Informatics",subHeader:"University of Economics at Cracow",isSubHeader:!0},{date:"2018 - 02.22",header:"Bachelor's Degree",company:"Physics",subHeader:"University of Technology at Cracow",isSubHeader:!0}])}}}),U=e("h1",null,"Education",-1),q={class:"timeline-wrapper"};function Q(t,p,u,g,_,h){const s=a("TimelineItem");return o(),i(l,null,[U,e("div",q,[r(s,{items:t.timelineItem},null,8,["items"])])],64)}const X=m(R,[["render",Q]]),z=d({name:"ExperienceView",components:{ScrollParallax:H,Education:X,Experience:L}}),K={class:"wrapper"},O=e("div",{class:"text"},[e("p",null,[n(" In my role as a "),e("strong",null,"Web Developer"),n(", my primary responsibilities revolved around creating, implementing, and maintaining features using "),e("strong",null,"PHP"),n(", "),e("strong",null,"JinJava"),n(" and "),e("strong",null,"JavaScript"),n(", alongside open-source libraries such as "),e("strong",null,"jQuery"),n(". I also mastered coding campaign landing pages based on projects designed in "),e("strong",null,"Figma"),n(", "),e("strong",null,"Adobe XD"),n(", or "),e("strong",null,"Adobe Photoshop"),n(". "),e("br"),n(" A noteworthy achievement includes my "),e("strong",null," significant contribution to the successful implementation "),n(" of a new e-commerce website. Throughout this long-term project, I took on a"),e("strong",null," mentoring role, guiding and supporting"),n(" new members of the team. I conducted "),e("strong",null,"onboarding trainings"),n(" for the newest members of the team. ")]),e("p",null,[n(" At present, I am actively engaged in mastering "),e("strong",null,"TypeScript"),n(" and "),e("strong",null,"Node.js"),n(", including "),e("strong",null,"Express"),n(", and refining my proficiency in "),e("strong",null,"unit testing"),n(" with "),e("strong",null,"Jest"),n(" and "),e("strong",null,"Vitest"),n(", with a strong dedication to "),e("strong",null,"frontend development"),n(". This pursuit is complemented by my exploration of "),e("strong",null,"MongoDB"),n(" with "),e("strong",null,"Mongoose"),n(", further broadening my skill set. Additionally, I am delving into the realms of Mobile and Web Design. ")]),e("p",null," I believe that this comprehensive knowledge will not only facilitate improved communication among teams but also significantly contribute to the primary objective of enhancing overall team growth and performance. ")],-1),Y={class:"wrapper education"},Z=T('<div class="text"><p> During my engineering studies, I conducted many simulations of physical phenomena using the <strong>Python</strong> language. Throughout master&#39;s studies, I mainly use <strong>JavaScript</strong> and <strong>Python</strong>. For individual projects also <strong>R</strong>, <strong>Vue.js</strong> or <strong>React.js</strong></p></div>',1);function ee(t,p,u,g,_,h){const s=a("Experience"),b=a("scroll-parallax"),I=a("Education");return o(),i(l,null,[r(b,{down:!0,direction:"y",speed:.5},{default:D(()=>[e("section",K,[r(s),O])]),_:1}),e("section",Y,[r(I),Z])],64)}const te=m(z,[["render",ee]]);export{te as default};