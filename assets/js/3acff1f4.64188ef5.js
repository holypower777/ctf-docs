"use strict";(self.webpackChunkweb_ctf=self.webpackChunkweb_ctf||[]).push([[117],{8708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(5893),o=t(1151);const i={},s="Many Paths (500 points)",a={id:"writeups/X-MAS/2020/many_paths",title:"Many Paths (500 points)",description:"Description",source:"@site/docs/writeups/X-MAS/2020/many_paths.md",sourceDirName:"writeups/X-MAS/2020",slug:"/writeups/X-MAS/2020/many_paths",permalink:"/docs/docs/writeups/X-MAS/2020/many_paths",draft:!1,unlisted:!1,editUrl:"https://github.com/boyney123/eventcatalog/edit/master/website/docs/writeups/X-MAS/2020/many_paths.md",tags:[],version:"current",lastUpdatedBy:"kostezy",frontMatter:{},sidebar:"writeups",previous:{title:"Least Greatest (500 points)",permalink:"/docs/docs/writeups/X-MAS/2020/least_greatest"},next:{title:"PHP Master (50 points)",permalink:"/docs/docs/writeups/X-MAS/2020/php_master"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"many-paths-500-points",children:"Many Paths (500 points)"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Today in Santa's course in Advanced Graph Algorithms, Santa told us about the adjacency matrix of an undirected graph. I'm sure this last problem, he gave us is unsolvable, but I don't know much, maybe you do."}),"\n",(0,r.jsx)(n.p,{children:"Target: nc challs.xmas.htsp.ro 6053"}),"\n",(0,r.jsx)(n.p,{children:"Authors: Gabies, Nutu"}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ nc challs.xmas.htsp.ro 6053\nI swear that Santa is going crazy with those problems, this time we're really screwed!\nThe new problem asks us the following:\nGiven an undirected graph of size N by its adjacency matrix and a set of forbidden nodes, tell me how many paths from node 1 to node N of exactly length L that don't pass through any of the forbidden nodes exist (please note that a node can be visited multiple times)?\nAnd if that wasn't enough, we need to answer 40 of those problems in 45 seconds and to give each output modulo 666013. What does that even mean!?\n\nTest number: 1/40\nN = 5\nadjacency matrix:\n0,1,0,0,1\n1,0,0,1,1\n0,0,0,0,0\n0,1,0,0,1\n1,1,0,1,0\nforbidden nodes: [3]\nL = 4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["I found an article that solves that problem: ",(0,r.jsx)(n.a,{href:"https://cp-algorithms.com/graph/fixed_length_paths.html",children:"link"}),". So I need to raise the adjacency matrix to the power of the path length and the element (source, dest) % mod gonna be the answer. I tried to use numpy matrix_power function, but for me it doesn't work properly by some unknown reasons. So, i found another function how to raise matrix to the power, here it is (i modified it a little bit to optimise by using modulo):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import numpy as np\n\nclass Mat(list) :\n    def __matmul__(self, B) :\n        A = self\n        return Mat([[sum(A[i][k]*B[k][j] for k in range(len(B)))\n                    for j in range(len(B[0])) ] for i in range(len(A))])\n \n \ndef identity(size):\n    size = range(size)\n    return [[(i==j)*1 for i in size] for j in size]\n\ndef power(F, n):\n    mod = 666013\n    result = Mat(identity(len(F)))\n    b = Mat(F)\n    while n > 0:\n        if (n%2) == 0:\n            b = np.remainder(b @ b, mod)\n            n //= 2\n        else:\n            result = np.remainder(b @ result, mod)\n            b = np.remainder(b @ b, mod)\n            n //= 2\n    return np.remainder(result, mod)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now that we have a working function for raising a matrix to a power, I need to parse the server responses into the required types, and also remove the forbidden nodes, if they are present, here is the code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from pwn import *\n\nconn = remote('challs.xmas.htsp.ro', 6053)\n\nfor task in range(40):\n    conn.recvuntil(\"N = \")\n    N = int(conn.recvline().decode('utf-8'))\n\n    conn.recvline() #skips \"adjacency matrix\" line\n\n    recievedMatrix = []\n    for x in range(N):\n        recievedMatrix.append(conn.recvline().decode('utf-8').replace('\\n', '').split(','))\n    \n    # parses forbidden nodes\n    conn.recvuntil(\"forbidden nodes: \")\n    forbiddenLine = conn.recvline().decode('utf-8').strip()\n    forbidden = forbiddenLine[1:-1]\n    forbiddenNodes = []\n    if (len(forbidden) > 1):\n        forbidden = forbidden.split(',')\n        for x in forbidden:\n            forbiddenNodes.append(int(x))\n    elif (len(forbidden) == 1):\n        forbiddenNodes.append(int(forbidden))\n\n    forbiddenNodes.sort(reverse=True)\n\n    matrix = []\n    for x in range(len(recievedMatrix)):\n        matrix.append([])\n        for elem in range(len(recievedMatrix[x])):\n            matrix[x].append(int(recievedMatrix[x][elem]))\n\n    # remove forbidden nodes and corresponding elemetes from each node\n    for x in forbiddenNodes:\n        matrix.pop(x-1)\n        for node in matrix:\n            node.pop(x-1)\n\n    conn.recvuntil(\"L = \")\n    length = int(conn.recvline().decode('utf-8'))\n\n    matrixPower = power(matrix, length)\n\n    #format N if forbidden nodes are deleted\n    if (len(forbiddenNodes)):\n        N = N - len(forbiddenNodes)\n\n    \n    payload = matrixPower[0][N - 1]\n\n    conn.sendline(str(payload))\n    print(\"Current task: \", task)\nconn.interactive()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[*] Switching to interactive mode\nI cannot believe you figured this one out, how does this code even work?\nI'm baffled, here's the flag: X-MAS{n0b0dy_3xp3c73d_th3_m47r1x_3xp0n3n71a7i0n}\n[*] Got EOF while reading in interactive\n"})}),"\n",(0,r.jsx)(n.p,{children:"Flag: X-MAS{n0b0dy_3xp3c73d_th3_m47r1x_3xp0n3n71a7i0n}"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},1151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(7294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},n)}}}]);