(this["webpackJsonppraveenorugantitech-tv-series"]=this["webpackJsonppraveenorugantitech-tv-series"]||[]).push([[0],{80:function(e,t,n){},81:function(e,t,n){},86:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var s=n(4),r=n(0),i=n(10),c=n.n(i),a=(n(80),n(33)),o=(n(81),n(130)),j=n(134),l=n(49),h=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(o.a,{position:"static",children:Object(s.jsx)(j.a,{children:Object(s.jsx)(l.a,{variant:"h6",color:"inherit",align:"center",style:{flex:1},children:"TV Series List"})})})})},u=n(11),d=n(36),b=n(23),p=n(27),x=n(48),O=n(47),v=n(142),f=n(138),m=n(137),g=n(135),y=n(136),C=(n(86),function(e){var t=e.series;return Object(s.jsx)(a.b,{to:"/praveenorugantitech-tv-series-reactjs/series/".concat(t.show.id),children:Object(s.jsx)(g.a,{button:!0,children:Object(s.jsx)(y.a,{primary:t.show.name})})})}),w=function(e){return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(m.a,{component:"nav",children:e.list.map((function(e){return Object(s.jsx)(C,{series:e},e.show.id)}))})})},S=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).onSeriesInputChange=function(e){e.preventDefault(),s.setState({seriesName:e.target.value,isFetching:!0}),fetch("https://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){return s.setState({series:e,isFetching:!1})})).catch((function(e){return console.log(e)}))},s.state={series:[],seriesName:"",isFetching:!1},s.onSeriesInputChange=s.onSeriesInputChange.bind(Object(p.a)(s)),s}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,r=e.isFetching;return Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{variant:"h6",gutterBottom:!0,align:"center",children:"Here you can find all of your most loved series"}),Object(s.jsx)(v.a,{id:"search",label:"Search Series",defaultValue:n,helperText:r||0!==t.length||""!==n.trim()?r||0!==t.length||""===n.trim()?"":"No tv series found":"Please enter a name",margin:"normal",onChange:this.onSeriesInputChange}),r&&Object(s.jsx)("div",{style:{flex:1},children:Object(s.jsx)(f.a,{size:30})}),!r&&Object(s.jsx)(w,{list:t})]})}}]),n}(r.Component),I=n(61),k=n(144),N=n(141),B=n(140),F=n(62),z=n.n(F),D=n(139),T={appBar:{position:"relative"},flex:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}};function E(e){return Object(s.jsx)(D.a,Object(I.a)({direction:"up"},e))}var J=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={open:!1,show:null},e.handleClose=function(){e.setState({open:!1})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(this.props),fetch("https://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then((function(e){return e.json()})).then((function(t){return e.setState({show:t,open:!0})}))}},{key:"render",value:function(){var e=this.state.show;return Object(s.jsx)("div",{children:null!==e&&Object(s.jsxs)(k.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:E,children:[Object(s.jsx)(o.a,{style:T.appBar,children:Object(s.jsxs)(j.a,{children:[Object(s.jsx)(a.b,{to:"/praveenorugantitech-tv-series-reactjs/",children:Object(s.jsx)(B.a,{color:"default",onClick:this.handleClose,"aria-label":"Close",children:Object(s.jsx)(z.a,{})})}),Object(s.jsx)(l.a,{variant:"title",color:"inherit",style:T.flex,children:e.name})]})}),Object(s.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(s.jsx)("div",{children:Object(s.jsx)(g.a,{button:!0,children:null!=e.image&&Object(s.jsx)("img",{alt:"Show",src:e.image.medium})})}),Object(s.jsx)("div",{children:Object(s.jsxs)(m.a,{children:[Object(s.jsx)(g.a,{button:!0,children:Object(s.jsx)(y.a,{primary:"Premiered",secondary:e.premiered})}),Object(s.jsx)(N.a,{}),Object(s.jsx)(g.a,{button:!0,children:Object(s.jsx)(y.a,{primary:"Rating",secondary:e.rating.average})}),Object(s.jsx)(N.a,{}),Object(s.jsx)(g.a,{button:!0,children:Object(s.jsx)(y.a,{primary:"Episodes",secondary:e._embedded.episodes.length})}),Object(s.jsx)(N.a,{})]})})]})]})})}}]),n}(r.Component),P=function(e){return Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/praveenorugantitech-tv-series-reactjs",component:S}),Object(s.jsx)(u.a,{path:"/praveenorugantitech-tv-series-reactjs/series/:id",component:J})]})};var V=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(h,{}),Object(s.jsx)(P,{})]})};c.a.render(Object(s.jsx)(a.a,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[96,1,2]]]);