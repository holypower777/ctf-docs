"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[562],{9650:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(5893),o=t(1151);const i={},r="Least Greatest (500 points)",c={id:"cheatsheet/gg",title:"Least Greatest (500 points)",description:"Description",source:"@site/docs/cheatsheet/gg.md",sourceDirName:"cheatsheet",slug:"/cheatsheet/gg",permalink:"/docs/cheatsheet/gg",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/cheatsheet/gg.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"cheatsheet",next:{title:"Support",permalink:"/docs/cheatsheet/kek"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,o.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"least-greatest-500-points",children:"Least Greatest (500 points)"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Today in Santa's course in Introduction to Algorithms, Santa told us about the greatest common divisor and the least common multiple.\nHe this gave the following problem as homework and I don't know how to solve it.\nCan you please help me with it?"}),"\n",(0,s.jsx)(e.p,{children:"Target: nc challs.xmas.htsp.ro 6050"}),"\n",(0,s.jsx)(e.p,{children:"Authors: Gabies, Nutu"}),"\n",(0,s.jsx)(e.h2,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ nc challs.xmas.htsp.ro 6050\nHey, you there! You look like you know your way with complex alogrithms.\nThere's this weird task that I can't get my head around. It goes something like this:\nGiven two numbers g and l, tell me how many pairs of numbers (x, y) exist such that gcd(x, y) = g and lcm(x, y) = l\nAlso, i have to answer 100 such questions in at most 90 seconds.\n\nTest number: 1/100\ngcd(x, y) = 87641\nlcm(x, y) = 750862998151937487679256930365054379979841\n"})}),"\n",(0,s.jsxs)(e.p,{children:["I found a ready-made function for the same task: ",(0,s.jsx)(e.a,{href:"https://www.geeksforgeeks.org/given-gcd-g-lcm-l-find-number-possible-pairs-b/",children:"link"}),". But this code gave errors on 3-4 tests. It was only necessary to add a second slash to divide large integers. Here is the finished code:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'from pwn import *\n\nconn = remote(\'challs.xmas.htsp.ro\', 6050)\n\ndef totalPrimeFactors(n):  \n    count = 0;  \n\n    if ((n % 2) == 0):  \n        count += 1;  \n        while ((n % 2) == 0):  \n            n //= 2;  \n  \n    i = 3; \n    while (i * i <= n):  \n        if ((n % i) == 0):  \n            count += 1;  \n            while ((n % i) == 0):  \n                n //= i;  \n        i += 2; \n\n    if (n > 2):  \n        count += 1;  \n  \n    return count;  \n  \ndef countPairs(G, L):  \n    if (L % G != 0):  \n        return 0;  \n  \n    div = int(L // G);  \n\n    return (1 << totalPrimeFactors(div)); \n\nconn.recvuntil("Test number")\n\nfor x in range (100):\n    conn.recvuntil("gcd(x, y) = ")\n    g = conn.recvline()\n    conn.recvuntil("lcm(x, y) = ")\n    l = conn.recvline()\n\n    payload = countPairs(int(g), int(l))\n    conn.sendline(str(int(payload)))\n    print(x+1, conn.recvline().decode("utf-8"))\n\nconn.interactive()\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"[*] Switching to interactive mode\nWow, you really know this kind of weird math?\nHere's your flag: X-MAS{gr347es7_c0mm0n_d1v1s0r_4nd_l345t_c0mmon_mult1pl3_4r3_1n73rc0nn3ct3d}\n[*] Got EOF while reading in interactive\n"})}),"\n",(0,s.jsx)(e.p,{children:"Flag: X-MAS{gr347es7_c0mm0n_d1v1s0r_4nd_l345t_c0mmon_mult1pl3_4r3_1n73rc0nn3ct3d}"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},1151:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>i});var s=t(7294);const o=s.createContext({});function i(n){const e=s.useContext(o);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||r:i(n),s.createElement(o.Provider,{value:c},e)}}}]);