"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[846],{8702:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(5893),i=s(1151);const a={},r="Steg Ultimate (450 points)",o={id:"writeups/CyberYoddha/2020/steg_ultimate",title:"Steg Ultimate (450 points)",description:"Description",source:"@site/docs/writeups/CyberYoddha/2020/steg_ultimate.md",sourceDirName:"writeups/CyberYoddha/2020",slug:"/writeups/CyberYoddha/2020/steg_ultimate",permalink:"/ctf-docs/docs/writeups/CyberYoddha/2020/steg_ultimate",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/CyberYoddha/2020/steg_ultimate.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Password 1 (125 points)",permalink:"/ctf-docs/docs/writeups/CyberYoddha/2020/password"},next:{title:"HID (300 points)",permalink:"/ctf-docs/docs/writeups/Syskron/2020/HID"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",strong:"strong"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"steg-ultimate-450-points",children:"Steg Ultimate (450 points)"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"You reached the final stage, can you unravel your way out of this one?"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{target:"_blank",href:s(8718).Z+"",children:"Attached image"})}),"\n",(0,n.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.p,{children:"Having tried all the standard steganography utilities, such as binwalk, strings, pngcheck, zsteg, I decided to try steghide without passphrase."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ steghide extract -sf stegultimate.jpg\nEnter passphrase:\nwrote extracted data to "steg3.jpg".\n'})}),"\n",(0,n.jsx)(t.p,{children:"Success! After another round of standard utilities, I came back to steghide."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ steghide extract -sf steg3.jpg\nEnter passphrase:\nwrote extracted data to "steganopayload473955.txt".\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ cat steganopayload473955.txt\nhttps://pastebin.com/YnKqT9s3\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Huge string. Let's just paste it into ",(0,n.jsx)(t.a,{href:"http://icyberchef.com/",children:"CyberChef"}),"\nThe first thing I see is that it is a png format. The recipe we need is ",(0,n.jsx)(t.strong,{children:"Render Image"})," input format: Raw. It outputs image with the flag."]}),"\n",(0,n.jsx)(t.p,{children:"Flag: CYCTF{2_f0r_th3_pr1c3_0f_1_b64}"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},8718:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/files/stegultimate-712b779791d1407f5e4b441124f5ea02.jpg"},1151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>a});var n=s(7294);const i=n.createContext({});function a(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:a(e),n.createElement(i.Provider,{value:o},t)}}}]);