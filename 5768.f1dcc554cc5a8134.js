"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5768],{5768:(j,d,a)=>{a.r(d),a.d(d,{ProfilePage:()=>v});var c=a(467),u=a(177),p=a(4341),i=a(4742),e=a(3953),f=a(1043),h=a(9885),m=a(9139);function b(o,r){if(1&o){const l=e.RV6();e.j41(0,"ion-item",3),e.bIt("click",function(){const t=e.eBV(l).$implicit,s=e.XpG();return e.Njj(s.selected=t)}),e.nrm(1,"ion-icon",4),e.j41(2,"ion-label")(3,"h2"),e.EFF(4),e.k0s(),e.j41(5,"p"),e.EFF(6),e.k0s()()()}if(2&o){const l=r.$implicit,n=e.XpG();e.Y8G("button",!0),e.R7$(),e.Y8G("name",n.selected.id==l.id?"checkmark-circle":"ellipse-outline"),e.R7$(3),e.JRh(l.name),e.R7$(2),e.JRh(l.code)}}let F=(()=>{var o;class r{constructor(n,t){this.ln=n,this.mc=t,this.all=[],this.selected={}}ngOnInit(){this.load()}load(){var n=this;return(0,c.A)(function*(){n.all=yield n.ln.getall()})()}proceed(){this.mc.dismiss(this.selected,this.selected.id?"yes":"no")}}return(o=r).\u0275fac=function(n){return new(n||o)(e.rXU(g),e.rXU(m.W3))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-language-selector"]],standalone:!0,features:[e.aNF],decls:14,vars:1,consts:[["slot","end",1,"ion-margin-end",3,"click"],["name","close","slot","icon-only"],[3,"button","click",4,"ngFor","ngForOf"],[3,"click","button"],[1,"ion-margin-end","ion-margin-start",3,"name"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Select Language"),e.k0s(),e.j41(4,"ion-buttons",0),e.bIt("click",function(){return t.proceed()}),e.j41(5,"ion-button"),e.nrm(6,"ion-icon",1),e.k0s()()()(),e.j41(7,"ion-content"),e.DNE(8,b,7,4,"ion-item",2),e.k0s(),e.j41(9,"ion-footer")(10,"ion-toolbar")(11,"ion-button",0),e.bIt("click",function(){return t.proceed()}),e.j41(12,"ion-label"),e.EFF(13,"Proceed"),e.k0s()()()()),2&n&&(e.R7$(8),e.Y8G("ngForOf",t.all))},dependencies:[i.bv,i.Jm,i.QW,i.W9,i.M0,i.eU,i.iq,i.uz,i.he,i.BC,i.ai,u.MD,u.Sq]}),r})();var k=a(7907);let g=(()=>{var o;class r{constructor(n,t){this.api=n,this.mc=t,this.all=[]}add(n){var t=this;return(0,c.A)(function*(){return yield t.api.post("/language/add",n)})()}getall(){var n=this;return(0,c.A)(function*(){return 0==n.all.length&&(n.all=yield n.api.post("/language/getall",{})),n.all})()}select(){var n=this;return(0,c.A)(function*(){let t=yield n.mc.create({component:F});return yield t.present(),yield t.onDidDismiss()})()}}return(o=r).\u0275fac=function(n){return new(n||o)(e.KVO(k.G),e.KVO(m.W3))},o.\u0275prov=e.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),r})();function _(o,r){if(1&o){const l=e.RV6();e.j41(0,"ion-content")(1,"ion-item",15)(2,"ion-label"),e.EFF(3,"View Profile"),e.k0s(),e.nrm(4,"ion-icon",16),e.k0s(),e.j41(5,"ion-item",17),e.bIt("click",function(){e.eBV(l);const t=e.XpG();return e.Njj(t.update_profile())}),e.j41(6,"ion-label"),e.EFF(7,"Change Profile"),e.k0s(),e.nrm(8,"ion-icon",18),e.k0s(),e.j41(9,"ion-item",19)(10,"ion-label"),e.EFF(11,"Remove Profile"),e.k0s(),e.nrm(12,"ion-icon",20),e.k0s()()}2&o&&(e.R7$(),e.Y8G("button",!0)("detail",!1),e.R7$(4),e.Y8G("button",!0)("detail",!1),e.R7$(4),e.Y8G("button",!0)("detail",!1))}let v=(()=>{var o;class r{constructor(n,t,s){this.ut=n,this.us=t,this.ls=s,this.self={},this.profile=""}ngOnInit(){this.load()}load(){var n=this;return(0,c.A)(function*(){n.self=yield n.us.get_self(),n.profile=yield n.us.get_profile_self()})()}update_language(){var n=this;return(0,c.A)(function*(){let t=yield n.ls.select();"yes"==t.role&&(yield n.ut.show_loader("Updating..."),yield n.us.update_language_self(t.data.code),yield n.load(),yield n.ut.hide_loader(),yield n.ut.toast("Language updated"))})()}update_profile(){var n=this;return(0,c.A)(function*(){let t=yield n.ut.select_photo();yield n.ut.show_loader("Updating..."),yield n.us.update_profile_self(t.blob),yield n.load(),yield n.ut.hide_loader(),yield n.ut.toast("Profile updated")})()}}return(o=r).\u0275fac=function(n){return new(n||o)(e.rXU(f.a),e.rXU(h.D),e.rXU(g))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-profile"]],standalone:!0,features:[e.aNF],decls:47,vars:7,consts:[[3,"translucent"],["slot","start"],["defaultHref","/dashboard"],[1,"ion-padding",3,"fullscreen"],["collapse","condense"],["size","large"],["size-md","6"],["id","popover-button",2,"width","200px","height","200px","border-radius","50%",3,"src"],["trigger","popover-button",3,"dismissOnSelect"],[1,"ion-margin-top"],["name","person-circle-outline",1,"ion-margin-end"],["slot","icon-only","name","create-outline"],["name","mail-outline",1,"ion-margin-end"],["name","language-outline",1,"ion-margin-end"],[3,"click"],[3,"button","detail"],["slot","end","name","eye-outline"],[3,"click","button","detail"],["slot","end","name","create-outline"],["color","danger","fill","clear",3,"button","detail"],["slot","end","name","trash-outline"]],template:function(n,t){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"profile"),e.k0s()()(),e.j41(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),e.EFF(10,"profile"),e.k0s()()(),e.j41(11,"ion-grid")(12,"ion-row")(13,"ion-col",6),e.nrm(14,"img",7),e.j41(15,"ion-popover",8),e.DNE(16,_,13,6,"ng-template"),e.k0s(),e.j41(17,"ion-item",9),e.nrm(18,"ion-icon",10),e.j41(19,"ion-label")(20,"p"),e.EFF(21,"Name"),e.k0s(),e.j41(22,"h1"),e.EFF(23),e.k0s()(),e.j41(24,"ion-buttons")(25,"ion-button"),e.nrm(26,"ion-icon",11),e.k0s()()(),e.j41(27,"ion-item"),e.nrm(28,"ion-icon",12),e.j41(29,"ion-label")(30,"p"),e.EFF(31,"Email"),e.k0s(),e.j41(32,"h1"),e.EFF(33),e.k0s()(),e.j41(34,"ion-buttons")(35,"ion-button"),e.nrm(36,"ion-icon",11),e.k0s()()(),e.j41(37,"ion-item"),e.nrm(38,"ion-icon",13),e.j41(39,"ion-label")(40,"p"),e.EFF(41,"Language"),e.k0s(),e.j41(42,"h1"),e.EFF(43),e.k0s()(),e.j41(44,"ion-buttons")(45,"ion-button",14),e.bIt("click",function(){return t.update_language()}),e.nrm(46,"ion-icon",11),e.k0s()()()()()()()),2&n&&(e.Y8G("translucent",!0),e.R7$(6),e.Y8G("fullscreen",!0),e.R7$(8),e.Y8G("src",t.profile,e.B4B),e.R7$(),e.Y8G("dismissOnSelect",!0),e.R7$(8),e.JRh(t.self.name),e.R7$(10),e.JRh(t.self.email),e.R7$(10),e.JRh(t.self.language))},dependencies:[i.bv,i.Jm,i.QW,i.hU,i.W9,i.lO,i.eU,i.iq,i.uz,i.he,i.ln,i.BC,i.ai,i.CF,i.el,u.MD,p.YN]}),r})()}}]);