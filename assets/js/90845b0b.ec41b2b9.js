"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[281],{7370:(D,x,e)=>{e.r(x),e.d(x,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=e(5893),n=e(1151);const i={},s="Reflections",r={id:"writeups/DEADFACE/2023/reflections",title:"Reflections",description:"Description",source:"@site/docs/writeups/DEADFACE/2023/reflections.md",sourceDirName:"writeups/DEADFACE/2023",slug:"/writeups/DEADFACE/2023/reflections",permalink:"/docs/docs/writeups/DEADFACE/2023/reflections",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/DEADFACE/2023/reflections.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"The Pearl of Wisdom of Eliphaz",permalink:"/docs/docs/writeups/DEADFACE/2023/pearl"},next:{title:"HID (300 points)",permalink:"/docs/docs/writeups/Syskron/2020/HID"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Flag",id:"flag",level:2}];function d(D){const x=Object.assign({h1:"h1",h2:"h2",admonition:"admonition",p:"p",pre:"pre",code:"code",blockquote:"blockquote",a:"a"},(0,n.ah)(),D.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.h1,{id:"reflections",children:"Reflections"}),"\n",(0,t.jsx)(x.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(x.admonition,{title:"Category",type:"note",children:(0,t.jsx)(x.p,{children:"cryptography"})}),"\n",(0,t.jsx)(x.p,{children:"Apparently one of the DEADFACE members disclosed their public key in some fashion on GhostTown. We tried to decipher the contents but we can\u2019t seem to figure it out. If you can figure out how to decode this public key, it might come in handy later!"}),"\n",(0,t.jsx)(x.pre,{children:(0,t.jsx)(x.code,{className:"language-text",children:"(D+V(D+V(D+V(D+V(D+V(D.+(D./(D.,(D.%(D.W(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(V(D(Q(D.V(D.%(D.,(D--(D.V(D.)(D*((D.,(D.*(D/*(D,)(D.,(D/*(D.%(D-+(D**(D..(D/)(D./(D.+(D.)(D/)(D//(D.)(D.)(D*.(D.,(D.W(D.)(D..(D.*(D.+(D-%(D/)(D.S(D.+(D-,(D/)(D.*(D*-(D.+(D/*(D*%(D/$(D.,(D-Q(D/-(D/((D,Q(D-/(D-S(D-*(D-U(D-,(D*+(D,+(D.Q(D*.(D-S(D.*(D-V(D-Q(D.,(D,$(D(V(D(Q(D*/(D.-(D.+(D+U(D.$(D-U(D-/(D-U(D*)(D,((D-S(D.$(D*)(D**(D.%(D.%(D.-(D/Q(D-R(D-Q(D.$(D*%(D.U(D..(D.*(D,.(D,-(D.V(D,,(D/((D//(D**(D-V(D//(D.%(D*.(D.U(D.U(D-/(D*,(D/*(D,%(D-.(D*((D-V(D,%(D.S(D-/(D/$(D.R(D-*(D+S(D-V(D,)(D*+(D.%(D,.(D-/(D,)(D-.(D..(D-,(D-)(D/+(D(V(D(Q(D*)(D*.(D,/(D.$(D,*(D.,(D/%(D-R(D.W(D-+(D-)(D-U(D.)(D*,(D,+(D.-(D+S(D/((D--(D-*(D,,(D/-(D.+(D,((D,%(D-/(D*+(D/.(D+U(D.%(D-+(D.%(D/Q(D/,(D-W(D/Q(D*/(D*.(D/-(D/%(D-/(D.+(D.-(D.*(D*((D.U(D/%(D*/(D/$(D-.(D/+(D/,(D/.(D,Q(D+U(D,)(D*,(D.S(D-,(D.*(D.S(D,)(D,-(D*$(D(V(D(Q(D-R(D*.(D-U(D,/(D-)(D.W(D..(D/.(D..(D,%(D-.(D-$(D.S(D.V(D+U(D/)(D//(D/)(D.%(D..(D.)(D/)(D.)(D.+(D(V(D(Q(D+V(D+V(D+V(D+V(D+V(D./(D.W(D..(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(Q(D(Q(D--(D-R(D-)(D-,(D,S(D*+(D--(D*)(D-*(D**(D-.(D*)(D-.(D-)(D-*(D**(D-*(D*.(D--(D*/(D-+(D*+(D-+(D**(D*$(D*/(D*-(D*,(D*.(D*/(D*%(D-.(D*-(D-*(D*.(D**(D*((D,V\n"})}),"\n",(0,t.jsx)(x.h2,{id:"solution",children:"Solution"}),"\n",(0,t.jsx)(x.p,{children:"The task description mentions some forum discussion about a public key. I found a thread where they were talking about this cipher and there was the following text there:"}),"\n",(0,t.jsxs)(x.blockquote,{children:["\n",(0,t.jsx)(x.p,{children:"It uses some sequence from Bell Labs in the 1940s. I just learned about it in my comp sci class and thought I\u2019d try it out. I think it\u2019s called like reflected binary or something like that."}),"\n"]}),"\n",(0,t.jsxs)(x.p,{children:["one google search ",(0,t.jsx)(x.code,{children:"reflected binary"})," tells us that this is all about ",(0,t.jsx)(x.a,{href:"https://en.wikipedia.org/wiki/Gray_code",children:"Gray code"}),". Since this is all about binary representation, let's translate this obscure string into binary form. I found a Python library literally called graycode and wrote a simple script."]}),"\n",(0,t.jsx)(x.pre,{children:(0,t.jsx)(x.code,{className:"language-py",children:"import graycode\n\ns = \"(D+V(D+V(D+V(D+V(D+V(D.+(D./(D.,(D.%(D.W(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(V(D(Q(D.V(D.%(D.,(D--(D.V(D.)(D*((D.,(D.*(D/*(D,)(D.,(D/*(D.%(D-+(D**(D..(D/)(D./(D.+(D.)(D/)(D//(D.)(D.)(D*.(D.,(D.W(D.)(D..(D.*(D.+(D-%(D/)(D.S(D.+(D-,(D/)(D.*(D*-(D.+(D/*(D*%(D/$(D.,(D-Q(D/-(D/((D,Q(D-/(D-S(D-*(D-U(D-,(D*+(D,+(D.Q(D*.(D-S(D.*(D-V(D-Q(D.,(D,$(D(V(D(Q(D*/(D.-(D.+(D+U(D.$(D-U(D-/(D-U(D*)(D,((D-S(D.$(D*)(D**(D.%(D.%(D.-(D/Q(D-R(D-Q(D.$(D*%(D.U(D..(D.*(D,.(D,-(D.V(D,,(D/((D//(D**(D-V(D//(D.%(D*.(D.U(D.U(D-/(D*,(D/*(D,%(D-.(D*((D-V(D,%(D.S(D-/(D/$(D.R(D-*(D+S(D-V(D,)(D*+(D.%(D,.(D-/(D,)(D-.(D..(D-,(D-)(D/+(D(V(D(Q(D*)(D*.(D,/(D.$(D,*(D.,(D/%(D-R(D.W(D-+(D-)(D-U(D.)(D*,(D,+(D.-(D+S(D/((D--(D-*(D,,(D/-(D.+(D,((D,%(D-/(D*+(D/.(D+U(D.%(D-+(D.%(D/Q(D/,(D-W(D/Q(D*/(D*.(D/-(D/%(D-/(D.+(D.-(D.*(D*((D.U(D/%(D*/(D/$(D-.(D/+(D/,(D/.(D,Q(D+U(D,)(D*,(D.S(D-,(D.*(D.S(D,)(D,-(D*$(D(V(D(Q(D-R(D*.(D-U(D,/(D-)(D.W(D..(D/.(D..(D,%(D-.(D-$(D.S(D.V(D+U(D/)(D//(D/)(D.%(D..(D.)(D/)(D.)(D.+(D(V(D(Q(D+V(D+V(D+V(D+V(D+V(D./(D.W(D..(D+((D/((D//(D.+(D.R(D.%(D.*(D+((D.S(D./(D/%(D+V(D+V(D+V(D+V(D+V(D(Q(D(Q(D--(D-R(D-)(D-,(D,S(D*+(D--(D*)(D-*(D**(D-.(D*)(D-.(D-)(D-*(D**(D-*(D*.(D--(D*/(D-+(D*+(D-+(D**(D*$(D*/(D*-(D*,(D*.(D*/(D*%(D-.(D*-(D-*(D*.(D**(D*((D,V\"\n\nbyte_arr = bytearray(s, 'utf-8')\nres = []\nfor byte in byte_arr:\n    decoded = graycode.gray_code_to_tc(byte)\n    res.append(chr(decoded))\n\nres_s = ''.join(res)\nprint(res_s)\n"})}),"\n",(0,t.jsx)(x.p,{children:"It results into:"}),"\n",(0,t.jsx)(x.pre,{children:(0,t.jsx)(x.code,{className:"language-text",children:"0x2d0x2d0x2d0x2d0x2d0x420x450x470x490x4e0x200x500x550x420x4c0x490x430x200x4b0x450x590x2d0x2d0x2d0x2d0x2d0x0d0x0a0x4d0x490x470x660x4d0x410x300x470x430x530x710x470x530x490x620x330x440x510x450x420x410x510x550x410x410x340x470x4e0x410x440x430x420x690x510x4b0x420x670x510x430x360x420x530x390x580x470x6a0x560x500x7a0x650x6b0x630x6f0x670x320x720x4a0x340x6b0x430x6d0x6a0x470x780x0d0x0a0x350x460x420x2f0x480x6f0x650x6f0x310x700x6b0x480x310x330x490x490x460x5a0x6c0x6a0x480x390x4f0x440x430x740x760x4d0x770x500x550x330x6d0x550x490x340x4f0x4f0x650x370x530x790x640x300x6d0x790x4b0x650x580x4c0x630x2b0x6d0x710x320x490x740x650x710x640x440x670x610x520x0d0x0a0x310x340x750x480x730x470x590x6c0x4e0x620x610x6f0x410x370x720x460x2b0x500x660x630x770x560x420x700x790x650x320x540x2f0x490x620x490x5a0x570x6e0x5a0x350x340x560x590x650x420x460x430x300x4f0x590x350x580x640x520x570x540x7a0x2f0x710x370x4b0x670x430x4b0x710x760x380x0d0x0a0x6c0x340x6f0x750x610x4e0x440x540x440x790x640x680x4b0x4d0x2f0x510x550x510x490x440x410x510x410x420x0d0x0a0x2d0x2d0x2d0x2d0x2d0x450x4e0x440x200x500x550x420x4c0x490x430x200x4b0x450x590x2d0x2d0x2d0x2d0x2d0x0a0x0a0x660x6c0x610x670x7b0x320x660x310x630x330x640x310x640x610x630x330x630x340x660x350x620x320x620x330x380x350x360x370x340x350x390x640x360x630x340x330x300x7d\n"})}),"\n",(0,t.jsxs)(x.p,{children:["Let's use ",(0,t.jsx)(x.a,{href:"https://gchq.github.io/CyberChef/#recipe=Magic(3,true,false,'')",children:"CyberChef and its magic function"})," to convert it into something we desire."]}),"\n",(0,t.jsx)(x.p,{children:"Here we are, from hex('0x'):"}),"\n",(0,t.jsx)(x.pre,{children:(0,t.jsx)(x.code,{className:"language-text",children:"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6BS9XGjVPzekcog2rJ4kCmjGx\n5FB/Hoeo1pkH13IIFZljH9ODCtvMwPU3mUI4OOe7Syd0myKeXLc+mq2IteqdDgaR\n14uHsGYlNbaoA7rF+PfcwVBpye2T/IbIZWnZ54VYeBFC0OY5XdRWTz/q7KgCKqv8\nl4ouaNDTDydhKM/QUQIDAQAB\n-----END PUBLIC KEY-----\n\nflag{2f1c3d1dac3c4f5b2b38567459d6c430}\n"})}),"\n",(0,t.jsx)(x.h2,{id:"flag",children:"Flag"}),"\n",(0,t.jsx)(x.admonition,{title:"Flag",type:"tip",children:(0,t.jsx)(x.p,{children:"flag{2f1c3d1dac3c4f5b2b38567459d6c430}"})})]})}const a=function(D={}){const{wrapper:x}=Object.assign({},(0,n.ah)(),D.components);return x?(0,t.jsx)(x,Object.assign({},D,{children:(0,t.jsx)(d,D)})):d(D)}},1151:(D,x,e)=>{e.d(x,{Zo:()=>r,ah:()=>i});var t=e(7294);const n=t.createContext({});function i(D){const x=t.useContext(n);return t.useMemo((()=>"function"==typeof D?D(x):{...x,...D}),[x,D])}const s={};function r({components:D,children:x,disableParentContext:e}){let r;return r=e?"function"==typeof D?D({}):D||s:i(D),t.createElement(n.Provider,{value:r},x)}}}]);