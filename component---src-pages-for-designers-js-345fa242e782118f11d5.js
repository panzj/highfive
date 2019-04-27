(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,t,n){"use strict";var i=n(8),a=n.n(i),r=(n(77),n(142)),s=n.n(r),o=n(6),l=n.n(o),c=n(0),m=n.n(c),p=n(3),d=n.n(p),u=n(148),g=n.n(u),h=n(143),f=n(149),y=n(162),b=n(206),v=n(209),E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e,n,i=this.props,a=i.theme,r=i.className,o=i.intent,l=i.height,c=i.isActive,p=i.children,d=i.disabled,u=i.appearance,h=i.isLoading,v=i.paddingRight,E=i.paddingLeft,k=i.paddingTop,w=i.paddingBottom,R=i.iconBefore,T=i.iconAfter,x=s()(i,["theme","className","intent","height","isActive","children","disabled","appearance","isLoading","paddingRight","paddingLeft","paddingTop","paddingBottom","iconBefore","iconAfter"]),M=a.getButtonClassName(u,o),C=a.getTextSizeForControlHeight(l),z=a.getBorderRadiusForControlHeight(l),B=a.getIconSizeForButton(l),N=void 0!==v?v:Math.round(l/2),L=void 0!==E?E:Math.round(l/2);return R&&(e=m.a.createElement(y.b,{icon:R,size:B,marginLeft:-Math.round(.2*L),marginRight:Math.round(.7*B)})),T&&(n=m.a.createElement(y.b,{icon:T,size:B,marginRight:-Math.round(.2*L),marginLeft:Math.round(.7*B)})),m.a.createElement(f.a,Object.assign({is:"button",className:g()(M,r),borderTopRightRadius:z,borderBottomRightRadius:z,borderTopLeftRadius:z,borderBottomLeftRadius:z,paddingTop:k,paddingBottom:w,paddingRight:N,paddingLeft:L,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,size:C,color:null,height:l,lineHeight:l+"px"},c?{"data-active":!0}:{},t.styles,x,{disabled:d||h}),h&&m.a.createElement(b.a,{marginLeft:-Math.round(l/8),marginRight:Math.round(l/4),size:Math.round(l/2)}),e||null,p,n||null)},t}(c.PureComponent);E.propTypes=a()({},h.dimensions.propTypes,h.spacing.propTypes,h.position.propTypes,h.layout.propTypes,{intent:d.a.oneOf(["none","success","warning","danger"]),appearance:d.a.oneOf(["default","minimal","primary"]).isRequired,isLoading:d.a.bool,isActive:d.a.bool,iconBefore:d.a.string,iconAfter:d.a.string,disabled:d.a.bool,theme:d.a.object.isRequired,className:d.a.string}),E.defaultProps={appearance:"default",height:32,intent:"none",isActive:!1,paddingBottom:0,paddingTop:0},E.styles={position:"relative",fontFamily:"ui",fontWeight:500,display:"inline-flex",alignItems:"center",flexWrap:"nowrap"},t.a=Object(v.a)(E)},206:function(e,t,n){"use strict";var i=n(8),a=n.n(i),r=(n(77),n(142)),s=n.n(r),o=n(6),l=n.n(o),c=n(0),m=n.n(c),p=n(3),d=n.n(p),u=n(143),g=n.n(u),h=n(209),f=u.css.keyframes("loading",{"0%":{transform:"rotate(0)"},"100%":{transform:"rotate(360deg)"}}),y=u.css.keyframes("loading-circle",{"0%":{strokeDashoffset:600},"100%":{strokeDashoffset:0}}),b={animation:f+" 2s linear infinite"},v=function(e){function t(t){var n,i=t.delay;return(n=e.call(this)||this).state={isVisible:0===i},n}l()(t,e);var n=t.prototype;return n.render=function(){if(!this.state.isVisible)return null;var e,t=this.props,n=t.theme,i=t.size,a=s()(t,["theme","size"]);return m.a.createElement(g.a,Object.assign({width:i,height:i,lineHeight:0},a),m.a.createElement(g.a,{is:"svg",css:b,x:"0px",y:"0px",viewBox:"0 0 150 150"},m.a.createElement(g.a,{is:"circle",css:(e=n.spinnerColor,{strokeDashoffset:600,strokeDasharray:300,strokeWidth:12,strokeMiterlimit:10,strokeLinecap:"round",animation:y+" 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite",stroke:e,fill:"transparent"}),cx:"75",cy:"75",r:"60"})))},n.componentDidMount=function(){var e=this,t=this.props.delay;t>0&&(this.delayTimer=setTimeout(function(){e.setState({isVisible:!0})},t))},n.componentWillUnmount=function(){clearTimeout(this.delayTimer)},t}(c.PureComponent);v.propTypes=a()({},g.a.propTypes,{delay:d.a.number,size:d.a.number.isRequired,theme:d.a.object.isRequired}),v.defaultProps={size:40,delay:0},t.a=Object(h.a)(v)},278:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),r=n(0),s=n.n(r),o=n(288),l=n.n(o),c=n(290),m=n(291),p=n(289),d=(n(77),n(156)),u=n(158),g=n(783),h=n.n(g),f=n(784),y=n.n(f),b=function(e){var t=Object.assign({},e);return s.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t))},v=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).trackDownload=function(){window.analytics.track("Download Sketch File")},t}return a()(t,e),t.prototype.render=function(){return s.a.createElement("section",{className:"Hero"},s.a.createElement("div",{className:"Hero-inner"},s.a.createElement("div",{className:"Hero-left"},s.a.createElement("h1",null,"Evergreen for Designers"),s.a.createElement("p",null,"Design products and side-projects with our official design resource for the Evergreen community."),s.a.createElement("div",null,s.a.createElement(u.a,{is:"a",onClick:this.trackDownload,href:Object(d.withPrefix)("/Evergreen v4 Community.sketch"),iconBefore:s.a.createElement("img",{src:y.a,height:"16",style:{marginRight:10,marginLeft:-2}}),height:40},"Download Sketch UI Kit")),s.a.createElement("div",{style:{marginTop:24,marginBottom:-32}},s.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},s.a.createElement("img",{alt:"Creative Commons License",style:{borderWidth:0},height:"15",src:"https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"})),s.a.createElement("p",{style:{fontSize:11}},s.a.createElement("br",null),"This work is licensed under a"," ",s.a.createElement(b,{className:"Link",rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),"."))),s.a.createElement("div",{className:"Hero-right",style:{marginBottom:-80}},s.a.createElement("img",{src:h.a,alt:"Evergreen spot illustration",style:{width:540}}))))},t}(s.a.PureComponent),E=n(452),k=n(785),w=n.n(k),R=n(786),T=n.n(R),x=n(787),M=n.n(x);n.d(t,"default",function(){return z});var C=[{title:"How we hire designers at Segment",image:w.a,published:"Oct, 2018",link:"https://medium.com/segment-design/how-we-hire-designers-at-segment-ec1f5a94b3fb"},{title:"10 Tips to Design Sketch Files at Scale",image:T.a,published:"August, 2018",link:"https://medium.com/segment-design/10-tips-to-design-sketch-files-at-scale-537614876c45"},{title:"3 Ways to Onboard onto a Design System Quickly",image:M.a,published:"July, 2018",link:"https://medium.com/segment-design/3-ways-to-onboard-onto-a-design-system-quickly-b829a9c47c3e"}],z=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){return s.a.createElement(m.a,null,s.a.createElement(l.a,null,s.a.createElement("title",null,"Designers · Evergreen")),s.a.createElement("div",null,s.a.createElement(c.a,null),s.a.createElement("main",null,s.a.createElement(v,null),s.a.createElement(E.a,{title:"From Our Design Blog",items:C}))),s.a.createElement(p.a,null))},t}(s.a.Component)},452:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(50),n(453);var i=n(6),a=n.n(i),r=(n(77),n(0)),s=n.n(r),o=n(3),l=n.n(o),c=function(e){return s.a.createElement("svg",Object.assign({width:"64px",height:"64px",viewBox:"0 0 64 64"},e),s.a.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},s.a.createElement("circle",{fillOpacity:"0.1",fill:"#47B881",fillRule:"nonzero",cx:32,cy:32,r:32}),s.a.createElement("path",{d:"M36.2 24.154l-14.4 5.4v4.892l14.4 5.4V24.154zm.52 17.595l-16-6A.8.8 0 0 1 20.2 35v-6a.8.8 0 0 1 .52-.75l16-6a.8.8 0 0 1 1.08.75v18a.8.8 0 0 1-1.08.75zm3.486-13.56a.8.8 0 0 1-.812-1.379l1.7-1a.8.8 0 0 1 .812 1.38l-1.7 1zm-.812 9a.8.8 0 0 1 .812-1.379l1.7 1a.8.8 0 0 1-.812 1.38l-1.7-1zM41 32.8a.8.8 0 1 1 0-1.6h2a.8.8 0 1 1 0 1.6h-2zM28.2 38a.8.8 0 1 1 1.6 0v3a.8.8 0 0 1-.932.79l-6-1A.8.8 0 0 1 22.2 40v-4.2a.8.8 0 1 1 1.6 0v3.522l4.4.734V38zm-4-10.5a.8.8 0 1 1 1.6 0v9a.8.8 0 1 1-1.6 0v-9z",fill:"#47B881",fillRule:"nonzero"})))},m=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).track=function(){window.analytics.track("Media Item Clicked",{title:t.props.title,link:t.props.link,published:t.props.published})},t}return a()(t,e),t.prototype.render=function(){return s.a.createElement("a",{href:this.props.link,className:"MediaItem",onClick:this.track},s.a.createElement("figure",null,s.a.createElement("img",{src:this.props.image,alt:this.props.title,className:"MediaItem-image"})),s.a.createElement("div",{className:"MediaItem-content"},s.a.createElement("h3",{className:"MediaItem-title"},this.props.title),s.a.createElement("p",{className:"MediaItem-published"},this.props.published)))},t}(s.a.PureComponent);m.propTypes={title:l.a.string.isRequired,published:l.a.string.isRequired,link:l.a.string.isRequired,image:l.a.string.isRequired};var p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return s.a.createElement("section",{className:"Media bg-tint2 clearfix"},s.a.createElement("div",{className:"Media-inner Container"},s.a.createElement("header",{style:{textAlign:"center",marginTop:64}},s.a.createElement(c,null),s.a.createElement("h2",{className:"h2",style:{marginTop:32}},this.props.title)),s.a.createElement("div",{className:"Media-grid"},this.props.items.map(function(e){return s.a.createElement(m,Object.assign({key:e.title},e))}))))},t}(s.a.PureComponent);p.propTypes={title:l.a.string.isRequired,items:l.a.array.isRequired}},453:function(e,t,n){"use strict";n(454)("link",function(e){return function(t){return e(this,"a","href",t)}})},454:function(e,t,n){var i=n(5),a=n(15),r=n(27),s=/"/g,o=function(e,t,n,i){var a=String(r(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),i(i.P+i.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},783:function(e,t,n){e.exports=n.p+"static/sketch-hero-918dae9055234454ad9ca794ef1cf729.png"},784:function(e,t,n){e.exports=n.p+"static/sketch-icon-0bb098259235afcfb93b017268701584.png"},785:function(e,t,n){e.exports=n.p+"static/hiring-c538ce76f91d90cc2bd24e07dd9c7ad7.png"},786:function(e,t,n){e.exports=n.p+"static/sketch-tips-2dc3cb2accc1a05313dfe1cac431536b.png"},787:function(e,t,n){e.exports=n.p+"static/use-system-cc1e4d9fe9733613acb323def5f6f368.png"}}]);
//# sourceMappingURL=component---src-pages-for-designers-js-345fa242e782118f11d5.js.map