(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,a){"use strict";a.r(t);a(160),a(46);var n=a(0),l=a.n(n),s=a(152),o=(a(197),a(50),a(154),a(7)),r=a.n(o),i=a(47),c=a.n(i),m=a(4),p=a.n(m),u=a(161),d=a.n(u),g=a(177),h=a(211),v=a(212),f=a(213),w=a(214),E=a(162),b=a(176),y=(a(277),function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=a.handleScroll.bind(c()(c()(a))),g.c.add(h.faBars,v.faAngleDoubleDown,w.c,w.a,w.b,f.a,f.b),g.a.watch(),a.state={stickyMenu:!1,displayCookieBanner:!1},a}r()(t,e);var a=t.prototype;return a.getCookie=function(){var e=document.cookie.match(new RegExp("(^| )=([^;]+)"));return!!e&&e[2]},a.componentDidMount=function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){window.cookieconsent&&!e.state.displayCookieBanner&&(e.setState({displayCookieBanner:!0}),console.log("yes"),window.cookieconsent.initialise({palette:{popup:{background:"#252525",text:"#ffffff"},button:{background:"#ffffff",text:"#252525"}},showLink:!1,law:{regionalLaw:!1},theme:"edgeless",type:"opt-in",content:{message:"Ce site utilise des cookies à des fins d'analyse du trafic uniquement.",deny:"Refuser",allow:"OK"},onStatusChange:function(e,t){this.close(),this.hasConsented()||(window.gaOptout&&window.gaOptout(),document.cookie="_ga=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="_gat=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="_gid=; Path=/; Domain=.rgoncalves.fr; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")}}))},2e3)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.handleScroll=function(e){var t=e.srcElement.scrollingElement.scrollTop>100;this.state.stickyMenu!==t&&this.setState({stickyMenu:t})},a.render=function(){return l.a.createElement("div",null,l.a.createElement(b.a,null),l.a.createElement(E.a,{sticky:this.state.stickyMenu}),l.a.createElement("div",null,this.props.children),l.a.createElement(d.a,null,l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"}),l.a.createElement("script",{src:"//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"})))},t}(l.a.Component));y.propTypes={children:p.a.array};var N=y,k=a(144),x=a.n(k),S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={shown:!1},a}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{href:"#",className:"btn btn-default btn-lg",onClick:function(t){return e.setState({shown:!e.state.shown})}},l.a.createElement(s.a,{icon:"envelope"+(this.state.shown?"-open":""),fixedWidth:!0}),l.a.createElement("span",{className:"network-name"},this.state.shown?"La voici :":"Obtenir mon adresse")),this.state.shown?l.a.createElement("a",{href:"mailto:"+x.a.contactEmail,className:"pl-3"},x.a.contactEmail):"")},t}(l.a.Component),j=(a(32),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"row experience-row"},l.a.createElement("div",{className:"col-md-3 col-sm-12"},l.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer",className:"d-flex img-wrapper justify-content-center align-content-center"},l.a.createElement("img",{className:"align-self-start mr-3 main-logo",src:"static/logos/"+this.props.logo,alt:this.props.name+" logo",title:this.props.name+" logo"}))),l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("h5",{className:"d-none d-md-block"},l.a.createElement("strong",null,this.props.start," - ",this.props.end)," : ",this.props.name),l.a.createElement("h5",{className:"d-md-none text-center mt-4"},l.a.createElement("strong",null,this.props.start," - ",this.props.end),l.a.createElement("br",null),this.props.name),l.a.createElement("p",{className:"lead"},this.props.job),l.a.createElement("dl",{className:"row"},this.props.history.map(function(e,t){return"string"==typeof e||e instanceof String?l.a.createElement("div",{key:"histItem-"+t,className:"row"},l.a.createElement("dt",{className:"d-none"}," "),l.a.createElement("dd",{key:"histItem-"+t,className:"col-sm-12 orphan"},l.a.createElement("p",null,e))):l.a.createElement("div",{key:"histItem-"+t,className:"action-row row"},l.a.createElement("dt",{className:"col-md-3 col-sm-12"},l.a.createElement("div",{className:"d-flex img-wrapper justify-content-center align-content-center text-center"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"small",src:"static/logos/"+e.logo,alt:e.client+" logo",title:e.client+" logo"}),l.a.createElement("br",null),l.a.createElement("div",{className:"my-2"},l.a.createElement("small",null,e.client))))),l.a.createElement("dd",{className:"col-md-9 col-sm-12"},l.a.createElement("ul",null,e.actions.map(function(e,t){return l.a.createElement("li",{key:"actItem-"+t},e)}))))}))))},t}(l.a.Component)),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,this.props.items.map(function(e,t){return l.a.createElement(j,Object.assign({key:"item-"+t},e))}))},t}(l.a.Component),D=a(280),L=a.n(D),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={screenType:a.getScreenType(t.screenWidth)},a}r()(t,e);var a=t.prototype;return a.getScreenType=function(e){return e<768?"xs":e>=768&&e<992?"sm":"lg"},a.UNSAFE_componentWillReceiveProps=function(e){var t=this.getScreenType(e.screenWidth);this.state.screenType!==t&&this.setState({screenType:t})},a.render=function(){var e="d-flex flex-column techitem";return"xs"===this.state.screenType?e+=" mx-1 mb-0 xsmall":"sm"===this.state.screenType?e+=" mx-2 mb-0 small":e+=" mx-3 mb-2",l.a.createElement("div",{className:e},l.a.createElement("div",{className:"px-2 d-flex img-wrapper justify-content-center align-content-center"},l.a.createElement("img",{src:"static/logos/"+this.props.logo,alt:this.props.name+" logo",title:this.props.name+" logo"})),l.a.createElement("div",{className:"px-0 text-center"},l.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},this.props.name)),l.a.createElement("div",{className:"mx-auto"},l.a.createElement(L.a,{count:5,value:this.props.level,size:12,edit:!1})))},t}(l.a.Component),q=function(e){function t(t){var a;return(a=e.call(this,t)||this).updateDimensions=a.updateDimensions.bind(c()(c()(a))),a}r()(t,e);var a=t.prototype;return a.render=function(){var e=this;return l.a.createElement("div",null,this.props.items.map(function(t,a){return l.a.createElement("div",{key:"row-"+a,className:"d-flex justify-content-around techitem-row"},t.map(function(t,n){return l.a.createElement(T,Object.assign({key:"row-"+a+"-"+n},t,{screenWidth:e.state.width}))}))}))},a.updateDimensions=function(){this.setState({width:window.innerWidth,height:window.innerHeight})},a.UNSAFE_componentWillMount=function(){"undefined"!=typeof window?this.updateDimensions():this.setState({width:1024,height:768})},a.componentDidMount=function(){window.addEventListener("resize",this.updateDimensions)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t}(l.a.Component);t.default=function(){return l.a.createElement(N,null,l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"intro-body"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h1",{className:"brand-heading"},x.a.siteTitle),l.a.createElement("p",{className:"intro-text"},x.a.siteDescription),l.a.createElement("a",{href:"#about",className:"btn btn-circle js-scroll-trigger"},l.a.createElement(s.a,{icon:"angle-double-down"}))))))),l.a.createElement("section",{id:"about",className:"content-section text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",null,"À propos de moi"),x.a.content.about.map(function(e,t){return l.a.createElement("p",{key:t},e)}))))),l.a.createElement("section",{id:"technologies",className:"content-section text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",null,"Technologies"),l.a.createElement(q,{items:x.a.content.technologies}))))),l.a.createElement("section",{id:"experiences",className:"content-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",null,"Expériences"),l.a.createElement(C,{items:x.a.content.experiences}))))),l.a.createElement("section",{id:"training",className:"content-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",null,"Formation"),l.a.createElement("dl",null,x.a.content.training.map(function(e,t){return l.a.createElement("div",{key:"training-"+t,className:"row"},l.a.createElement("dt",{className:"col-sm-3"},e.period),l.a.createElement("dd",{className:"col-sm-9"},l.a.createElement("p",null,l.a.createElement("strong",null,e.title),", ",e.location),e.hasOwnProperty("spec")?l.a.createElement("p",{className:"small"},"Spécialité : ",e.spec):""))})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",null,"Langues"),l.a.createElement("dl",null,x.a.content.languages.map(function(e,t){return l.a.createElement("div",{key:"language-"+t,className:"row"},l.a.createElement("dt",{className:"col-sm-3"},e.name),l.a.createElement("dd",{className:"col-sm-9"},l.a.createElement("p",null,e.level),e.hasOwnProperty("misc")?l.a.createElement("p",{className:"small"},e.misc):""))})))))),l.a.createElement("section",{id:"contact",className:"content-section text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mb-4"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",{className:"mb-2"},"Réseaux Sociaux"),l.a.createElement("ul",{className:"list-inline banner-social-buttons mt-0"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:x.a.content.social.twitter,target:"_blank",rel:"noopener noreferrer",className:"btn btn-default btn-lg"},l.a.createElement(s.a,{icon:["fab","twitter"],fixedWidth:!0}),l.a.createElement("span",{className:"network-name"},"Twitter"))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:x.a.content.social.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-default btn-lg"},l.a.createElement(s.a,{icon:["fab","github"],fixedWidth:!0}),l.a.createElement("span",{className:"network-name"},"Github"))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:x.a.content.social.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-default btn-lg"},l.a.createElement(s.a,{icon:["fab","linkedin"],fixedWidth:!0}),l.a.createElement("span",{className:"network-name"},"LinkedIn")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-10 mx-auto"},l.a.createElement("h2",{className:"mb-2"},"E-Mail"),l.a.createElement(S,null))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container text-center"},l.a.createElement("p",{className:"lead"},"Copyright © rgoncalves.fr ",2018!==(new Date).getFullYear()?"2018 - "+(new Date).getFullYear():"2018"," - ",l.a.createElement("a",{href:"/legal"},"Mentions Légales")),l.a.createElement("p",{className:"font-weight-light"},l.a.createElement("small",null,"Built with ",l.a.createElement("a",{href:"https://gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby"),", ",l.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React")," and ",l.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap"),".",l.a.createElement("br",null),"Based on ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/BlackrockDigital/startbootstrap-grayscale"},"Greyscale theme by Start Bootstrap"))))))}},144:function(e,t){e.exports={siteTitle:"Romain GONÇALVES",siteDescription:"Ingénieur en développement Web",siteUrl:"https://3rgo.me",siteImage:"preview.jpg",siteLanguage:"fr",contactEmail:"contact@rgoncalves.fr",content:{about:["J'ai découvert l'informatique à l'âge de 12 ans à la bibliothèque municipale. À 14 ans, j'apprenais le HTML et le CSS afin de réaliser mes premières pages statiques, et à 17 ans j'y ajoutais le PHP pour dynamiser l'ensemble.","Depuis, je ne cesse de vouloir toujours en apprendre plus sur le monde du développement. Majoritairement auto-didacte, je prends plaisir à explorer de nouveaux langages et de nouvelles manières de solutionner les problèmes.","Mes études supérieures, composées d'une classe préparatoire scientifique et d'une école d'ingénieurs m'ont apporté la rigueur et les méthodologies de travail, nécessaires afin d'être totalement autonome.","Au travers mes expériences professionnelles, j'ai pu participer à des projets variés, tant par leur ampleur que par leur complexité, m'enrichissant toujours plus du contact avec d'autres développeurs et avec les équipes métier de tous secteurs d'activité.","Tout ceci en gardant en tête ma passion première : améliorer la manière dont les autres travaillent."],technologies:[[{name:"PHP",logo:"php.svg",url:"http://php.net",level:5}],[{name:"Laravel",logo:"laravel.svg",url:"https://laravel.com",level:4},{name:"Symfony",logo:"symfony.svg",url:"https://symfony.com",level:4},{name:"Slim",logo:"slim.svg",url:"https://www.slimframework.com",level:4},{name:"Zend",logo:"zend.svg",url:"https://framework.zend.com",level:2},{name:"Lumen",logo:"lumen.svg",url:"https://lumen.laravel.com",level:5}],[{name:"Javascript",logo:"javascript.svg",url:"https://www.javascript.com",level:5}],[{name:"jQuery",logo:"jquery.svg",url:"http://jquery.com",level:5},{name:"React",logo:"react.svg",url:"https://reactjs.org",level:3},{name:"AngularJS",logo:"angularjs.svg",url:"https://angularjs.org",level:2},{name:"Node.js",logo:"nodejs.svg",url:"https://nodejs.org",level:1},{name:"MeteorJS",logo:"meteorjs.svg",url:"https://www.meteor.com",level:2}],[{name:"MySQL",logo:"mysql.svg",url:"https://www.mysql.com",level:4},{name:"PostgreSQL",logo:"pgsql.svg",url:"https://www.postgresql.org",level:3},{name:"SQLite",logo:"sqlite.svg",url:"https://www.sqlite.org",level:5},{name:"MongoDB",logo:"mongodb.svg",url:"https://www.mongodb.com",level:2},{name:"MSSQL",logo:"mssql.svg",url:"https://www.microsoft.com/sql-server/",level:3}],[{name:"HTML 5",logo:"html5.svg",url:"https://www.w3.org/html/",level:5},{name:"CSS 3",logo:"css3.svg",url:"https://www.w3.org/Style/CSS/",level:4},{name:"SASS",logo:"sass.svg",url:"https://sass-lang.com",level:4},{name:"Bootstrap",logo:"bootstrap.svg",url:"https://getbootstrap.com",level:5}],[{name:"Python",logo:"python.svg",url:"https://www.python.org",level:2},{name:"Ruby",logo:"ruby.svg",url:"https://www.ruby-lang.org",level:2},{name:"Bash",logo:"bash.svg",url:"https://www.gnu.org/software/bash",level:4}],[{name:"Git",logo:"git.svg",url:"https://git-scm.com",level:4},{name:"Mercurial",logo:"mercurial.svg",url:"https://www.mercurial-scm.org",level:3},{name:"Jenkins",logo:"jenkins.svg",url:"https://jenkins.io",level:3},{name:"Ansible",logo:"ansible.svg",url:"https://www.ansible.com",level:2},{name:"Webpack",logo:"webpack.svg",url:"https://webpack.js.org",level:3}],[{name:"Apache",logo:"apache.svg",url:"https://httpd.apache.org",level:4},{name:"Nginx",logo:"nginx.svg",url:"https://nginx.org",level:3},{name:"PHP Unit",logo:"phpunit.svg",url:"https://phpunit.de",level:4},{name:"Jasmine",logo:"jasmine.svg",url:"https://jasmine.github.io",level:2}],[{name:"Windows",logo:"windows.svg",url:"https://www.microsoft.com/windows/",level:5},{name:"macOS",logo:"macos.svg",url:"https://www.apple.com/macos",level:4},{name:"GNU/Linux",logo:"linux.svg",url:"https://www.gnu.org/",level:3}],[{name:"JIRA",logo:"jira.svg",url:"https://www.atlassian.com/software/jira",level:4},{name:"Redmine",logo:"redmine.svg",url:"https://www.redmine.org",level:4},{name:"Microsoft Office",logo:"office.svg",url:"https://www.office.com/",level:4}]],experiences:[{start:"Avril 2016",end:"maintenant",name:"DECASOFT",logo:"decasoft.png",url:"http://www.decasoft.fr",job:"Chef de projets / Responsable TMA",history:[{client:"CCI Paris Île-de-France",url:"https://www.cci-paris-idf.fr",logo:"ccip.png",actions:["Pilotage d'une équipe de 5 à 8 personnes pour la maintenance d'un parc d'une trentaine de sites (PHP, Drupal 7/8 et Wordpress)","Réalisation d'indicateurs mensuels et semestriels, et animation des comités de pilotage","Réalisation des devis et suivi de la facturation","Suivi qualité, veille sécurité, conseil sur l'orientation des développements","Maintenance et développement sur les sujets DevOps (Jenkins, Ansible)","Réalisation de spécifications fonctionnelles","Développement Drupal 8"]},{client:"Parkéon France",logo:"parkeon.png",url:"https://www.parkeon.fr",actions:["Réalisation des devis et suivi de la facturation",'Développement d\'applications "machine à machine" (PHP5, TDD et intégration continue)']},{client:"Altempo",logo:"altempo.png",url:"http://www.altempo.com",actions:["Réalisation des devis et suivi de la facturation","Suivi des développements (équipe de 1 à 3 personnes)","Réalisation de user stories et de requirements techniques pour l'implémentation d'une pseudo-agilité"]},"Entretiens techniques aux candidats potentiels","Avant-vente avec les ingénieurs d'affaires","Configuration et maintenance des serveurs","Mise en place de process DevOps (GitLab, Jenkins, Ansible)","Support technique aux développeurs de l'agence","Gestion du matériel informatique"]},{start:"Août 2011",end:"Avril 2016",name:"ALTEN Sud-Ouest",url:"http://www.alten.fr",logo:"alten.svg",job:"Ingénieur d'applications",history:[{client:"Airbus France",url:"https://www.airbus.com",logo:"airbus.svg",actions:["Développement d'outils Intranet de capitalisation de connaissances","Développement d'une API centrale (PHP 5, composants Symfony2)","Développement d'applications single-page Javascript (ExtJS 4.x) composées de graphiques et de vues complexes","Développement d'une application d'ordonnancement (Ruby 2) afin de désynchroniser les traitements longs","Import/Export de fichiers Excel complexes (Standard OpenXML)","Participation aux phases de conception et d'arbitrage avec le client","Process pseudo-AGILE à sprint mensuel (équipe de 3 personnes)","Interface avec le client et les équipes off-shore pour le support opérationnel"]}]}],training:[{period:"2017 & 2018",title:"Formations Git, Jenkins et Ansible",location:"Objis Formation, Paris (75)"},{period:"2015",title:"Formation Symfony 2",location:"Orsys Formation, Toulouse (31)"},{period:"2008 - 2011",title:"Ingénieur en Sciences Informatiques",location:"3iL, Limoges (87)",spec:"Développement Web avancé"},{period:"2005 - 2008",title:"Classe préparatoire aux grandes écoles",location:"Lycée Alain-Fournier, Bourges (18)",spec:"Physique-Chimie"},{period:"2005",title:"Baccalauréat Scientique",location:"Lycée Saint-Cyr, Issoudun (36)"}],languages:[{name:"Anglais",level:"Bilingue (Écrit/Oral/Technique)",misc:"TOEIC: 990/990 (Mai 2010)"},{name:"Allemand",level:"Bases scolaires"},{name:"Espagnol",level:"Bases scolaires"}],social:{github:"https://github.com/3rgo",linkedin:"https://www.linkedin.com/in/romain-gonçalves-83214423",twitter:"https://twitter.com/3rgo_"}}}},162:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(46),a(72),a(48),a(179),a(73),a(154);var n=a(7),l=a.n(n),s=a(47),o=a.n(s),r=a(0),i=a.n(r),c=a(196),m=a(180),p=a.n(m),u=a(195),d=a.n(u),g=a(144),h=a.n(g),v=a(152),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(o()(o()(a))),a.handleLinkClick=a.handleLinkClick.bind(o()(o()(a))),a.state={isOpen:!1},a}l()(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isOpen:!this.state.isOpen})},a.handleLinkClick=function(e){if(this.setState({isOpen:!1}),this.props.minimal)return!0;var t=e.target.id.split("-").pop(),a=document.querySelector("#"+t);e.preventDefault(),d()(a,500,function(){window.location.hash=t})},a.render=function(){var e=this,t=this.props.sticky||this.props.minimal?"navbar-shrink":"",a=this.props.minimal?{home:"Accueil"}:{about:"À propos",technologies:"Technologies",experiences:"Expériences",training:"Formation & Langues",contact:"Contact"};return i.a.createElement(c.d,{light:!0,expand:"lg",fixed:"top",id:"mainNav",className:t},i.a.createElement(c.e,{href:this.props.minimal?"/":"#pagetop",onClick:this.handleLinkClick,id:"linkto-pagetop"},h.a.siteTitle),i.a.createElement(c.f,{onClick:this.toggleNavbar,className:"navbar-toggle"},"Menu ",i.a.createElement(v.a,{icon:"bars",fixedWidth:!0})),i.a.createElement(c.a,{isOpen:this.state.isOpen,navbar:!0,id:"navbarResponsive"},i.a.createElement(p.a,{items:Object.keys(a),currentClassName:"active",componentTag:"Nav",className:"navbar-nav ml-auto"},Object.keys(a).map(function(t,n){return i.a.createElement(c.b,{key:n,tag:"div"},i.a.createElement(c.c,{onClick:e.handleLinkClick,id:"linkto-"+t,href:e.props.minimal?"/":"#"+t},a[t]))}))))},t}(i.a.Component)},176:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(161),o=a.n(s),r=a(144),i=a.n(r);t.a=function(){var e=i.a.siteTitle,t=i.a.siteDescription,a=i.a.siteUrl,n=i.a.siteImage;return l.a.createElement(o.a,null,l.a.createElement("html",{lang:"fr"}),l.a.createElement("title",null,e),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),l.a.createElement("meta",{name:"description",content:t}),l.a.createElement("meta",{property:"og:url",content:a}),l.a.createElement("meta",{property:"og:title",content:e}),l.a.createElement("meta",{property:"og:description",content:t}),l.a.createElement("meta",{property:"og:image",content:n}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("body",{id:"pagetop"}))}},277:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-fb95d08fefb34d3eaa71.js.map