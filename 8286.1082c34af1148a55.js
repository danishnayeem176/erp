"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8286],{8286:(v,_,s)=>{s.r(_),s.d(_,{AppsPage:()=>m});var u=s(467),r=s(177),E=s(4341),o=s(4742),c=s(5873),d=s(5079),p=s(4212),n=s(3953),P=s(9885),O=s(1043);function g(e,l){if(1&e&&(n.j41(0,"ion-col",5)(1,"ion-item",6),n.nrm(2,"ion-icon",7),n.j41(3,"ion-label")(4,"h2"),n.EFF(5),n.k0s(),n.j41(6,"p"),n.EFF(7),n.k0s()()()()),2&e){const a=l.$implicit;n.R7$(),n.Y8G("routerLink",a.path),n.R7$(),n.Y8G("name",a.icon),n.R7$(3),n.JRh(a.title),n.R7$(2),n.JRh(a.subtitle)}}function D(e,l){if(1&e&&(n.j41(0,"div")(1,"ion-item",3)(2,"ion-label")(3,"p"),n.EFF(4),n.k0s()()(),n.j41(5,"ion-grid")(6,"ion-row"),n.DNE(7,g,8,4,"ion-col",4),n.k0s()()()),2&e){const a=l.$implicit;n.R7$(4),n.JRh(a.title),n.R7$(3),n.Y8G("ngForOf",a.apps)}}let m=(()=>{var e;class l{constructor(i,t){this.us=i,this.uts=t,this.all=[],this.busy=!0,(0,d.a)({...c})}ngOnInit(){this.load()}load(){var i=this;return(0,u.A)(function*(){i.busy=!0;let t=yield i.us.get_allowed_apps();console.log(t),t.ok?i.all=t.apps:i.uts.toast("Error: cannot load apps"),i.busy=!1})()}}return(e=l).\u0275fac=function(i){return new(i||e)(n.rXU(P.D),n.rXU(O.a))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-apps"]],standalone:!0,features:[n.aNF],decls:6,vars:3,consts:[[3,"translucent"],[1,"ion-padding",3,"fullscreen"],[4,"ngFor","ngForOf"],["color","none","lines","none"],["size","12","size-md","4",4,"ngFor","ngForOf"],["size","12","size-md","4"],["lines","none",3,"routerLink"],[1,"ion-margin-end",3,"name"]],template:function(i,t){1&i&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Apps"),n.k0s()()(),n.j41(4,"ion-content",1),n.DNE(5,D,8,2,"div",2),n.k0s()),2&i&&(n.Y8G("translucent",!0),n.R7$(4),n.Y8G("fullscreen",!0),n.R7$(),n.Y8G("ngForOf",t.all))},dependencies:[o.bv,o.hU,o.W9,o.lO,o.eU,o.iq,o.uz,o.he,o.ln,o.BC,o.ai,o.N7,r.MD,r.Sq,E.YN,p.iI,p.Wk]}),l})()}}]);