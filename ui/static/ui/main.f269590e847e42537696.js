(self.webpackChunkui=self.webpackChunkui||[]).push([[179],{7539:(e,t,a)=>{"use strict";var s=a(7294),n=(a(3935),a(745)),l=a(9669),r=a.n(l),c=a(5692),o=a(3314),i=a(6968),m=a(786),d=a(682),u=a(4051),p=a(1555),j=a(3489),g=a(5961);const h=`${location.origin}/api`,E=e=>{const{project:t,setProject:a,setAppLoading:n,taskInProgress:l}=e,[c,i]=(0,s.useState)(sessionData.username),[m,d]=(0,s.useState)(sessionData.password),[u,p]=s.useState(!0),[j,g]=s.useState([]);return(0,s.useEffect)((()=>{let e=!1;return async function(){let t=`${h}/get_projects`;p(!0),n(!0);const a=await r().get(t,{auth:{username:c,password:m}}),s=await a.data;e||(g(s.map((e=>({label:e.name,value:e.id})))),p(!1),n(!1))}().catch((e=>{console.log(e),n(!1)})),()=>{e=!0}}),[]),s.createElement(o.Z.Select,{"aria-label":"Select project",autoFocus:!0,id:"formProjectSelect",disabled:u||l,onChange:e=>{a({id:e.currentTarget.value,name:e.currentTarget.options[e.currentTarget.selectedIndex].text})}},s.createElement("option",{key:"Select project",value:"Select project"},"Select project"),j.map((({label:e,value:t})=>s.createElement("option",{key:t,value:t},e))))},f=`${location.origin}/api`,b=e=>{const{project:t,setSuite:a,setAppLoading:n,taskInProgress:l}=e,[c,i]=(0,s.useState)(sessionData.username),[m,d]=(0,s.useState)(sessionData.password),[u,p]=s.useState(!0),[j,g]=s.useState([]);return(0,s.useEffect)((()=>{let e=!1;return"Select project"!==t.name?async function(){let s=`${f}/get_suites/${t.id}`;a({id:"Select suite",name:"Select suite"}),p(!0),n(!0);const l=await r().get(s,{auth:{username:c,password:m}}),o=await l.data;e||(g(o.map((e=>({label:e.name,value:e.id})))),p(!1),n(!1))}().catch((e=>{console.log(e),n(!1)})):(g([]),a({id:"Select suite",name:"Select suite"})),()=>{e=!0}}),[t]),s.createElement(o.Z.Select,{"aria-label":"Select suite",id:"formSuiteSelect",disabled:u||"Select project"===t.name||l,onChange:e=>a({id:e.currentTarget.value,name:e.currentTarget.options[e.currentTarget.selectedIndex].text})},s.createElement("option",{key:"Select suite",value:"Select suite"},"Select suite"),j.map((({label:e,value:t})=>s.createElement("option",{key:t,value:t},e))))},S=`${location.origin}/api`,v=e=>{const{project:t,suite:a,setSection:n,setAppLoading:l,taskInProgress:c}=e,[i,m]=(0,s.useState)(sessionData.username),[d,u]=(0,s.useState)(sessionData.password),[p,j]=s.useState(!0),[g,h]=s.useState([]);return(0,s.useEffect)((()=>{n({id:"Select top section",name:"Select top section"}),j(!0)}),[t]),(0,s.useEffect)((()=>{let e=!1;return"Select project"!==t.name&&"Select suite"!==a.name?async function(){let s=`${S}/get_sections/${t.id}&suite_id=${a.id}`;j(!0),l(!0);const n=await r().get(s,{auth:{username:i,password:d}}),c=await n.data;e||(h(c.map((e=>({label:e.name,value:e.id})))),j(!1),l(!1))}().catch((e=>{console.log(e),l(!1)})):(h([]),n({id:"Select top section",name:"Select top section"})),()=>{e=!0}}),[a]),s.createElement(o.Z.Select,{"aria-label":"Select top section",id:"formSectionSelect",disabled:p||"Select suite"===a.name||c,onChange:e=>n({id:e.currentTarget.value,name:e.currentTarget.options[e.currentTarget.selectedIndex].text})},s.createElement("option",{key:"Select top section",value:"Select top section"},"Select top section"),g.map((({label:e,value:t})=>s.createElement("option",{key:t,value:t},e))))},k=e=>{const{section:t,setIdFileName:a,taskInProgress:n}=e;return s.createElement(s.Fragment,null,s.createElement(o.Z.Label,null,"File containing QC test case ids.xlsx"),s.createElement(o.Z.Control,{type:"file",accept:".xlsx",disabled:"Select top section"===t.name||n,onChange:e=>a(e.target.files[0]?e.target.files[0]:"")}))},N=e=>{const{section:t,idFileName:a,setDetailFileName:n,taskInProgress:l}=e;return s.createElement(s.Fragment,null,s.createElement(o.Z.Label,null,"File containing QC test case with steps.xlsx"),s.createElement(o.Z.Control,{type:"file",accept:".xlsx",disabled:"Select top section"===t.name||void 0===a||""===a||l,onChange:e=>n(e.target.files[0]?e.target.files[0]:"")}))},y=e=>{const{section:t,idFileName:a,detailFileName:n,setAttachmentFileName:l,taskInProgress:r}=e;return s.createElement(s.Fragment,null,s.createElement(o.Z.Label,null,"File attachments.zip"),s.createElement(o.Z.Control,{type:"file",accept:".zip",disabled:"Select top section"===t.name||void 0===a||""===a||void 0===n||""===n||r,onChange:e=>l(e.target.files[0]?e.target.files[0]:"")}))},Z=e=>{const{section:t,idFileName:a,detailFileName:n,attachmentFileName:l,setRetrySwitch:r,taskInProgress:c}=e;return s.createElement(s.Fragment,null,s.createElement(o.Z.Label,null,"Re-upload test cases?"),s.createElement(o.Z.Check,{disabled:"Select top section"===t.name||void 0===a||""===a||void 0===n||""===n||void 0===l||""===l||c,type:"switch",label:"This will reprocess the test cases even if they have Testrail id populated in the test steps .xlsx file.",id:"formRetrywitchInput",defaultChecked:!0,onChange:e=>r(e.target.checked)}))};var w=a(1945);const x=e=>{const{section:t,idFileName:a,detailFileName:n,attachmentFileName:l,taskInProgress:r}=e;return s.createElement("div",{className:"d-grid"},s.createElement(w.Z,{if:"formUploadButton",variant:"dark",disabled:"Select top section"===t.name||void 0===a||""===a||void 0===n||""===n||void 0===l||""===l||r,size:"lg",type:"submit"},"Upload test cases to Testrail"))};var F=a(1479),_=a(381),I=a.n(_);const z=e=>{const{currentTask:t}=e;let a=0;0!==t.total_cases&&(a=(t.imported_cases/t.total_cases*100).toFixed(2));let n=s.createElement(s.Fragment,null),l=s.createElement(s.Fragment,null),r=s.createElement(s.Fragment,null),o=s.createElement(s.Fragment,null),m=s.createElement(s.Fragment,null);return"Complete"===t.status||"Failed"===t.status||"Cancelled"===t.status?(n=s.createElement(F.Z,{striped:!0,now:a,label:`${a}%`,visuallyHidden:!0}),"Complete"===t.status&&(m=s.createElement(s.Fragment,null,"d in ",(e=>{let t=[],a=(e=e.split(".")[0]).split(":")[0],s=e.split(":")[1],n=e.split(":")[2];return a="00"===a?"":a.startsWith("0")?a[1]+"h":a+"h",s="00"===s?"":s.startsWith("0")?s[1]+"m":s+"m",n="00"===n?"":n.startsWith("0")?n[1]+"s":n+"s",t.push(a),t.push(s),t.push(n),t.join(" ").trim()})(t.elapsed_time),"."),l=s.createElement("i",{className:"ps-1 fa fa-check","aria-hidden":"true"})),t.imported_cases>0&&(r=s.createElement(u.Z,{className:"mt-2"},s.createElement(p.Z,null,"Download processed file with Testrail information: ",s.createElement("a",{href:`${location.origin}${t.steps_file_name}`,className:"link-secondary"},t.steps_file_name.split("/").at(-1))," "))),"Failed"===t.status&&(l=s.createElement("i",{className:"ps-1 fa fa-exclamation-circle","aria-hidden":"true"}),o=s.createElement(u.Z,{className:"mt-2"},s.createElement(p.Z,{className:"text-danger"},"Error: ",t.status_message)))):"In Progress"===t.status?(n=s.createElement(F.Z,{animated:!0,now:a,label:`${a}%`,visuallyHidden:!0}),l=s.createElement(i.Z,{className:"ms-2",animation:"border",role:"status",size:"sm"})):n=s.createElement(F.Z,{striped:!0,now:a,label:`${a}%`,visuallyHidden:!0}),s.createElement("div",null,""!==t.session_id?s.createElement(c.Z,{className:"mb-2 pb-2"},s.createElement(c.Z.Body,null,s.createElement(u.Z,{className:"mb-2 align-middle"},s.createElement(p.Z,null,"Task Id: ",t.session_id),s.createElement(p.Z,{xs:6,className:"text-center"},"Status: ",t.status,m,l),s.createElement(p.Z,{style:{textAlign:"right"}},"Processed: ",t.imported_cases," of ",t.total_cases)),n,r,o)):s.createElement(s.Fragment,null))};function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},P.apply(this,arguments)}r().defaults.xsrfCookieName="csrftoken",r().defaults.xsrfHeaderName="X-CSRFToken";const T=`${location.origin}/api`,$=new EventSource(`${T}/events/${sessionData.username}/`),C=e=>s.createElement(j.Z,P({id:"project-tooltip"},e),s.createElement("div",{className:"mb-1"},"Test cases and sub-sections will be created under the section you select."),s.createElement("div",null,"If you can't find the required section, open Testrail and create it.")),D=e=>s.createElement(j.Z,P({id:"file-tooltip"},e),s.createElement("div",{className:"mb-2"},"Files must be in ",s.createElement("span",{className:"text-warning"},".xlsx")," format. ",s.createElement("br",null),"If you have files with .xls extension, don't just rename it to .xlsx. ",s.createElement("br",null),"Open the file in Microsoft Excel and save it in .xlsx format."),s.createElement("div",{className:"mb-2"},"The data must be in the ",s.createElement("span",{className:"text-warning"},"first")," worksheet in both excel files."),s.createElement("div",null,"Gather all the attachment folders under a folder named ",s.createElement("span",{className:"text-warning"},"attachments"),". ",s.createElement("br",null),"Then, convert the folder into ",s.createElement("span",{className:"text-warning"},"attachments.zip")," archive and upload.")),A=e=>{const[t,a]=(0,s.useState)(sessionData.username),[n,l]=(0,s.useState)(sessionData.password),[j,h]=(0,s.useState)({id:"Select project",name:"Select project"}),[f,S]=(0,s.useState)({id:"Select suite",name:"Select suite"}),[w,F]=(0,s.useState)({id:"Select top section",name:"Select top section"}),[_,I]=(0,s.useState)(),[P,A]=(0,s.useState)(),[L,O]=(0,s.useState)(),[B,G]=(0,s.useState)(!0),[R,H]=(0,s.useState)(!1),[q,M]=(0,s.useState)(sessionData.latest_task),[U,Y]=(0,s.useState)(!1);return $.onmessage=function(e){try{M(JSON.parse(e.data))}catch(e){}},$.onerror=function(e){console.log("Server closed event connection!")},(0,s.useEffect)((()=>{void 0!==q&&("In Progress"===q.status?Y(!0):Y(!1))})),s.createElement("div",null,t?s.createElement("div",null,s.createElement(z,{currentTask:q}),s.createElement(o.Z,{onSubmit:e=>{e.preventDefault(),e.stopPropagation();let a=new FormData;a.append("user",t),a.append("project_id",j.id),a.append("project_name",j.name),a.append("suite_id",f.id),a.append("suite_name",f.name),a.append("section_id",w.id),a.append("section_name",w.name),a.append("retry_import",B?"True":"False"),a.append("status","New"),a.append("id_file_name",_),a.append("steps_file_name",P),a.append("attachment_file_name",L),async function(e){H(!0);let a=`${T}/process_task/`;const s=btoa(`${t}:${n}`),l=await r()({method:"post",url:a,data:e,headers:{Authorization:`Basic ${s}`,"content-type":"multipart/form-data"}}),c=await l.data;H(!1),M(c)}(a).catch((e=>{console.log(e),H(!1)}))}},s.createElement(c.Z,null,s.createElement(c.Z.Body,null,s.createElement("legend",{className:"border-bottom mb-4 legend"},"Please select Testrail project, test suite and top section. ",s.createElement(g.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:C},s.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"}))),s.createElement(o.Z.Group,{className:"mb-4",controlId:"formProject"},s.createElement(E,{project:j,setProject:h,setAppLoading:H,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-4",controlId:"formSuite"},s.createElement(b,{project:j,setSuite:S,setAppLoading:H,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-4",controlId:"formSection"},s.createElement(v,{project:j,suite:f,setSection:F,setAppLoading:H,taskInProgress:U})),s.createElement("legend",{className:"border-bottom mb-4 legend"},"Please upload the spreadsheets and attachments exported from HP ALM. ",s.createElement(g.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:D},s.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"}))),s.createElement(o.Z.Group,{className:"mb-3",controlId:"formIdFile"},s.createElement(k,{section:w,setIdFileName:I,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-3",controlId:"formDetailFile"},s.createElement(N,{section:w,idFileName:_,setDetailFileName:A,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-3",controlId:"formAttachmentFile"},s.createElement(y,{section:w,idFileName:_,detailFileName:P,setAttachmentFileName:O,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-3",controlId:"formRetrySwitch"},s.createElement(Z,{section:w,idFileName:_,detailFileName:P,attachmentFileName:L,setRetrySwitch:G,taskInProgress:U})),s.createElement(o.Z.Group,{className:"mb-3",controlId:"formUpload"},s.createElement(x,{section:w,idFileName:_,detailFileName:P,attachmentFileName:L,taskInProgress:U}))))),s.createElement(m.Z,{show:R,backdrop:"static",keyboard:!1,animation:!1,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},s.createElement(m.Z.Body,null,s.createElement(d.Z,{fluid:!0},s.createElement(u.Z,null,s.createElement(p.Z,{className:"text-center align-middle"},s.createElement(i.Z,{animation:"border",role:"status"},s.createElement("span",{className:"visually-hidden"},"Loading...")))))))):s.createElement(s.Fragment,null))};var L=a(7908),O=a(7315);const B=e=>{const[t,a]=(0,s.useState)(!0);return s.createElement(s.Fragment,null,s.createElement(O.Z,{show:t,onClose:()=>a(!t),className:"w-100 mb-3"},s.createElement(O.Z.Header,{closeButton:!1},s.createElement("i",{className:"fa fa-comments me-2","aria-hidden":"true"}),s.createElement("strong",{className:"me-auto"},"Announcement"),s.createElement("small",null,I()("20220411","YYYYMMDD").fromNow())),s.createElement(O.Z.Body,null,"Importing is now allowed only for ",s.createElement("strong",null,"Siebel CRM")," project with custom fields. Test Cases will be created as Regression type.")),s.createElement(L.Z,null,s.createElement(L.Z.Item,{eventKey:"0"},s.createElement(L.Z.Header,null,s.createElement("legend",{className:"text-center ps-4"},"Technology stack")),s.createElement(L.Z.Body,null,s.createElement(u.Z,{className:"mt-4 mb-3"},s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/django_icon.png`})),s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/django_rest_framework_icon.png`})),s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/react_icon.png`}))),s.createElement(u.Z,{className:"mt-4 mb-3"},s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/bootstrap_icon.png`})),s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/docker_icon.png`})),s.createElement(p.Z,{className:"text-center"},s.createElement("img",{height:"60",src:`${static_root}images/mysql_icon.png`})))))))},G=document.getElementById("app");(0,n.s)(G).render(s.createElement(A,null));const R=document.getElementById("divTechnologyStack");(0,n.s)(R).render(s.createElement(B,null))},6700:(e,t,a)=>{var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id=6700}},e=>{e.O(0,[216],(()=>(7539,e(e.s=7539)))),e.O()}]);