"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[802],{2911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(123),r=a(5005);a(7516);const o={slug:"how-to-collect-crash-dump",title:"\ud638\ub791\uc774\ub294 \uc8fd\uc5b4\uc11c \uac00\uc8fd\uc744 \ub0a8\uae30\uace0 \ud504\ub85c\uadf8\ub7a8\uc740 \uc8fd\uc5b4\uc11c \ub364\ud504\ub97c \ub0a8\uae34\ub2e4.",authors:["bahamoth"],tags:["crash","minidump","breakpad","crashpad","rust-minidump"]},s=void 0,i={permalink:"/01010011/blog/how-to-collect-crash-dump",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-19-how-to-collect-crash-dump/how-to-collect-crash-dump.mdx",source:"@site/blog/2024-11-19-how-to-collect-crash-dump/how-to-collect-crash-dump.mdx",title:"\ud638\ub791\uc774\ub294 \uc8fd\uc5b4\uc11c \uac00\uc8fd\uc744 \ub0a8\uae30\uace0 \ud504\ub85c\uadf8\ub7a8\uc740 \uc8fd\uc5b4\uc11c \ub364\ud504\ub97c \ub0a8\uae34\ub2e4.",description:"tiger",date:"2024-11-19T00:00:00.000Z",tags:[{inline:!0,label:"crash",permalink:"/01010011/blog/tags/crash"},{inline:!0,label:"minidump",permalink:"/01010011/blog/tags/minidump"},{inline:!0,label:"breakpad",permalink:"/01010011/blog/tags/breakpad"},{inline:!0,label:"crashpad",permalink:"/01010011/blog/tags/crashpad"},{inline:!0,label:"rust-minidump",permalink:"/01010011/blog/tags/rust-minidump"}],readingTime:19.255,hasTruncateMarker:!0,authors:[{name:"01010011",title:"Sr. Software Engineer, Engineering Manager",url:"https://01010011.blog",page:{permalink:"/01010011/blog/authors/bahamoth"},socials:{x:"https://x.com/010100111010",github:"https://github.com/bahamoth",linkedin:"https://www.linkedin.com/in/byeongsu-kang-38899b86/",blog:"https://01010011.blog"},imageURL:"https://gravatar.com/avatar/bb2519f8e198b51fdc396e8a9d5f475e?size=256",key:"bahamoth"}],frontMatter:{slug:"how-to-collect-crash-dump",title:"\ud638\ub791\uc774\ub294 \uc8fd\uc5b4\uc11c \uac00\uc8fd\uc744 \ub0a8\uae30\uace0 \ud504\ub85c\uadf8\ub7a8\uc740 \uc8fd\uc5b4\uc11c \ub364\ud504\ub97c \ub0a8\uae34\ub2e4.",authors:["bahamoth"],tags:["crash","minidump","breakpad","crashpad","rust-minidump"]},unlisted:!1,prevItem:{title:"macOS\uc5d0\uc11c \ud2b9\uc815 \ub2e8\ucd95\uc5b4\ub97c \ub204\ub97c \ub54c\ub9cc \ub4e4\ub9ac\ub294 beep\uc74c \uc5c6\uc560\uae30",permalink:"/01010011/blog/how-to-mute-the-weired-beep-sound"}},l={authorsImageUrls:[void 0]},c=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2}];function h(e){const t={a:"a",br:"br",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"tiger",src:a(2920).A+""})}),"\n",(0,n.jsx)(t.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,n.jsx)(t.p,{children:"\uc544\ubb34\ub9ac \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc798 \ub9cc\ub4e4\uc5c8\ub354\ub77c\ub3c4 \uad6c\ub3d9\uc911\uc778 \ud504\ub85c\uadf8\ub7a8\uc774 \uc0ac\uc6a9\uc790 \ud658\uacbd\uc5d0\uc11c \ube44\uc815\uc0c1 \uc885\ub8cc\ub418\ub294 \ubb38\uc81c\ub294 \ud544\uc5f0\uc801\uc774\ub2e4."}),"\n",(0,n.jsxs)(t.p,{children:["\uc18d\ub41c \ub9d0\ub85c '\ud504\ub85c\uadf8\ub7a8\uc774 \uc8fd\ub294' \ud604\uc0c1\uc774 \uc774\ub7ec\ud55c \ube44\uc815\uc0c1 \uc885\ub8cc\uc5d0 \ud574\ub2f9\ud558\ub294\ub370, \uac1c\ubc1c\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 \uc65c \uc774\ub7ec\ud55c '\uc8fd\uc74c'\uc774 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud30c\uc545\uc774 \uc5b4\ub835\ub2e4. \uc65c\ub0d0\ud558\uba74 \uac1c\ubc1c\uc790\uc758 PC\uc5d0\uc11c\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \uc8fd\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc774\ub2e4.(",(0,n.jsx)(t.a,{href:"https://www.amazon.com/works-Machine-Programming-T-Shirt/dp/B07C9FVM4R",children:"It works on my machine"}),")",(0,n.jsx)(t.br,{}),"\n","\ub108\ubb34\ub3c4 \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790 \ud658\uacbd\uc740 \uae30\uc0c1\ucc9c\uc678\ud55c \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a8\ub2e4.(",(0,n.jsx)(t.a,{href:"https://beza1e1.tuxen.de/lore/allergic_car.html",children:"\ubc14\ub2d0\ub77c \uc544\uc774\uc2a4\ud06c\ub9bc \uc54c\ub7ec\uc9c0\uac00 \uc788\ub294 \uc790\ub3d9\ucc28"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"\uc774\ub7ec\ud55c \uc548\ud0c0\uae4c\uc6b4 \uc8fd\uc74c\uc758 \uc6d0\uc778\uc744 \ubd80\uac80\ud558\uae30 \uc704\ud574, \uac1c\ubc1c\uc790\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \uc2e4\ud589\ub418\uc5c8\ub358 \uc8fc\ubcc0\ud658\uacbd\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud55c\ub2e4. \ud5c8\ub098 \uc544\ubb34\ub9ac \ub2e4\uc591\ud55c \uc8fc\ubcc0 \uc815\ubcf4\ub97c \uc218\uc9d1\ud55c\ub2e4 \ud558\ub354\ub77c\ub3c4 \uc9c1\uc811\uc801\uc778 \uc0ac\uc778\uc740 \uc2dc\uccb4\ub97c \ud655\uc778\ud574\uc57c\ub9cc \ud558\ub4ef, \ud504\ub85c\uadf8\ub7a8\uc774 \ube44\uc815\uc0c1 \uc885\ub8cc\ub41c \uc6d0\uc778\uc740 \ud06c\ub798\uc2dc\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uc810\uc5d0 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ub41c \uc2a4\ub0c5\uc0f7\uc744 \ud655\uc778\ud574\uc57c\ub9cc \ud55c\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\uadf8\ub807\ub2e4. \ud638\ub791\uc774\ub294 \uc8fd\uc5b4\uc11c \uac00\uc8fd\uc744 \ub0a8\uae30\uace0 \ud55c\uc6b0\ub294 \uc8fd\uc5b4\uc11c T\ubcf8 \uc2a4\ud14c\uc774\ud06c\ub97c \ub0a8\uae30\ub4ef, \ud504\ub85c\uadf8\ub7a8\uc740 \uc8fd\uc5b4\uc11c \uba54\ubaa8\ub9ac \ub364\ud504\ub97c \ub0a8\uae34\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \uba54\ubaa8\ub9ac \ub364\ud504\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uc544\ubcf4\uace0, \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790 \ud658\uacbd\uc5d0\uc11c \ub364\ud504\ub97c \uc218\uc9d1\ud558\uace0 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \uacfc\uc815\ub4e4\uc774 \uc774\ub904\uc9c0\ub294\uc9c0\ub97c \uc54c\uc544\ubcf4\uaca0\ub2e4."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7516:(e,t,a)=>{a.d(t,{A:()=>n});const n={table:"table__4f0"}},2920:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/tiger-5d0083e532ffc889503c91b5a976b4b2.png"},5005:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(1467);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);