import{d as h,F as y,Z as b,a5 as k,an as f,a8 as o,c as a,a9 as s,a7 as i,aw as w}from"./index-143d9389.js";import{u as C,g as v,_ as B,a as S}from"./data-46d1ced0.js";import"./cos-cea5bde9.js";import"./theme-aa338b11.js";import"./index-9e5ff404.js";import"./index-635a3c86.js";const z=["onClick"],T=["onClick"],j=h({__name:"fixed",setup(D){const d=y(()=>({})),{loading:p,data:l,pagination:e,init:c,onSearch:N}=C(v,{params:d,pagination:{pageSize:10}});b(async()=>{await c()});async function r(n){e.current=n.current,e.pageSize=n.pageSize,await c()}function _(){window.open("https://baidu.com")}function u(){window.open("https://baidu.com")}return(n,V)=>{const t=B,m=S,x=w;return k(),f(x,null,{default:o(()=>[a(m,{class:"content","row-key":"id",loading:i(p),"data-source":i(l),pagination:i(e),scroll:{y:"calc(100vh - 64px - 46px - 88px - 58px - 56px)"},onChange:r},{default:o(()=>[a(t,{key:"id",title:"ID","data-index":"id"}),a(t,{key:"name",title:"姓名","data-index":"name"}),a(t,{key:"age",title:"年龄","data-index":"age"}),a(t,{key:"hobby",title:"爱好","data-index":"hobby"}),a(t,{key:"phone",title:"手机号码","data-index":"hobby"}),a(t,{key:"email",title:"邮箱","data-index":"hobby"}),a(t,{key:"updateTime",title:"更新时间","data-index":"updateTime"}),a(t,{key:"operation",title:"操作",width:"150px"},{default:o(($,E)=>[s("span",{class:"text-btn",onClick:g=>_()},"编辑",8,z),s("span",{class:"text-btn",onClick:g=>u()},"预览",8,T)]),_:1})]),_:1},8,["loading","data-source","pagination","scroll"])]),_:1})}}});export{j as default};
