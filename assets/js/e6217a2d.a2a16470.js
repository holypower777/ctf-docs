"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[106],{2902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(5893),i=t(1151);const r={},o="Santa's ELF holomorphing machine (500 points)",a={id:"writeups/X-MAS/2020/holomorphing",title:"Santa's ELF holomorphing machine (500 points)",description:"Description",source:"@site/docs/writeups/X-MAS/2020/holomorphing.md",sourceDirName:"writeups/X-MAS/2020",slug:"/writeups/X-MAS/2020/holomorphing",permalink:"/docs/writeups/X-MAS/2020/holomorphing",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/X-MAS/2020/holomorphing.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Conversation (50 points)",permalink:"/docs/writeups/X-MAS/2020/conversation"},next:{title:"Least Greatest (500 points)",permalink:"/docs/writeups/X-MAS/2020/least_greatest"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",img:"img"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"santas-elf-holomorphing-machine-500-points",children:"Santa's ELF holomorphing machine (500 points)"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"We have intercepted the blueprints and a memory dump for another of Santa's wicked contraptions. What is the old man hiding this time around?"}),"\n",(0,s.jsx)(n.p,{children:"Author: PinkiePie1189"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank",href:t(4091).Z+"",children:"data"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{target:"_blank",href:t(9620).Z+"",children:"blueprint"})}),"\n",(0,s.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.p,{children:["The solution is ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Holomorphic_function",children:(0,s.jsx)(n.strong,{children:"here"})})]}),"\n",(0,s.jsx)(n.p,{children:"We just need to draw the plot using the Cauchy-Riemann condition."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import matplotlib.pyplot as plt\nimport re\n\ndata = open('data.txt', 'r') \nlines = data.readlines() \n\nx = []\ny = []\nfor line in lines:\n    parsed = re.findall(r\"[-+]?\\d*\\.?\\d+|[-+]?\\d+\", line)\n    parsed = list(map(float,parsed))\n\n    uOrV = line[0]\n    firstMult = int(parsed[0])\n    secondMult = int(parsed[1])\n    currX = parsed[2]\n    currY = parsed[3] \n\n    zx = 0\n    zy = 0\n\n    if (uOrV == 'u'):\n        zx = firstMult * currX + secondMult * currY\n        zy = firstMult * currY - secondMult * currX\n    else:\n        zy = firstMult * currX + secondMult * currY\n        zx = secondMult * currX - firstMult * currY\n\n\n    x.append(zx)\n    y.append(zy)\n\nplt.plot(x, y, '.')\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(714).Z+"",width:"1815",height:"410"})}),"\n",(0,s.jsx)(n.p,{children:"Looks like flag, but we need to flip the plot:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"plt.gca().invert_yaxis()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8433).Z+"",width:"1163",height:"90"})}),"\n",(0,s.jsx)(n.p,{children:"Flag: X-MAS{C4uchy_4nd_Ri3m4nn_ar3_c0ming_t0_t0wn}"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},9620:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/files/blueprint-1f2a35c5136b5236b485a3aac706eecb.pdf"},4091:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/files/data-ea9e901415f04a7a7c6e12925c84bdcc.txt"},8433:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/UgQ8e2XR73g-4adddee9433990ae3a02fd59db2a5fc2.jpg"},714:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/bbW2timQocA-2a8e095ddf1a1ff36b56d147252d2724.jpg"},1151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(7294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);