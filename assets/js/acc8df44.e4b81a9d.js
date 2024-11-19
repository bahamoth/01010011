"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[328],{1693:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=s(123),i=s(5005),l=s(7516);const d={slug:"how-to-collect-crash-dump",title:"How to Collect Crash Dump?",authors:["bahamoth"],tags:["crash","minidump","breakpad","crashpad","rust-minidump"]},t=void 0,c={permalink:"/01010011/blog/how-to-collect-crash-dump",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-19-how-to-collect-crash-dump/how-to-collect-crash-dump.mdx",source:"@site/blog/2024-11-19-how-to-collect-crash-dump/how-to-collect-crash-dump.mdx",title:"How to Collect Crash Dump?",description:"\uc11c\ub860",date:"2024-11-19T00:00:00.000Z",tags:[{inline:!0,label:"crash",permalink:"/01010011/blog/tags/crash"},{inline:!0,label:"minidump",permalink:"/01010011/blog/tags/minidump"},{inline:!0,label:"breakpad",permalink:"/01010011/blog/tags/breakpad"},{inline:!0,label:"crashpad",permalink:"/01010011/blog/tags/crashpad"},{inline:!0,label:"rust-minidump",permalink:"/01010011/blog/tags/rust-minidump"}],readingTime:19.3,hasTruncateMarker:!1,authors:[{name:"01010011",title:"Sr. Software Engineer, Engineering Manager",url:"https://01010011.blog",page:{permalink:"/01010011/blog/authors/bahamoth"},socials:{x:"https://x.com/010100111010",github:"https://github.com/bahamoth",linkedin:"https://www.linkedin.com/in/byeongsu-kang-38899b86/",blog:"https://01010011.blog"},imageURL:"https://gravatar.com/avatar/bb2519f8e198b51fdc396e8a9d5f475e?size=256",key:"bahamoth"}],frontMatter:{slug:"how-to-collect-crash-dump",title:"How to Collect Crash Dump?",authors:["bahamoth"],tags:["crash","minidump","breakpad","crashpad","rust-minidump"]},unlisted:!1},h={authorsImageUrls:[void 0]},a=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"\ud504\ub85c\uadf8\ub7a8\uc758 \uc0dd\uc560\uc8fc\uae30(\uc815\uc0c1\uc885\ub8cc vs \ube44\uc815\uc0c1\uc885\ub8cc)",id:"\ud504\ub85c\uadf8\ub7a8\uc758-\uc0dd\uc560\uc8fc\uae30\uc815\uc0c1\uc885\ub8cc-vs-\ube44\uc815\uc0c1\uc885\ub8cc",level:2},{value:"\uc608\uc678\ucc98\ub9ac",id:"\uc608\uc678\ucc98\ub9ac",level:2},{value:"OS \ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \ub364\ud504 \ud3ec\ub9f7",id:"os-\ubcc4\ub85c-\uc11c\ub85c-\ub2e4\ub978-\ub364\ud504-\ud3ec\ub9f7",level:2},{value:"Minidump Format \uacfc Chromium Breakpad Project",id:"minidump-format-\uacfc-chromium-breakpad-project",level:2},{value:"Breakpad\uc758 \ud55c\uacc4\uc640 \uc774\ub97c \uac1c\uc120\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub4e4(Crashpad, Rust-Minidump)",id:"breakpad\uc758-\ud55c\uacc4\uc640-\uc774\ub97c-\uac1c\uc120\ud558\ub294-\ud504\ub85c\uc81d\ud2b8\ub4e4crashpad-rust-minidump",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,r.jsx)(n.p,{children:"\uc544\ubb34\ub9ac \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uc798 \ub9cc\ub4e4\uc5c8\ub354\ub77c\ub3c4 \uad6c\ub3d9\uc911\uc778 \ud504\ub85c\uadf8\ub7a8\uc774 \uc0ac\uc6a9\uc790 \ud658\uacbd\uc5d0\uc11c \ube44\uc815\uc0c1 \uc885\ub8cc\ub418\ub294 \ubb38\uc81c\ub294 \ud544\uc5f0\uc801\uc774\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\uc18d\ub41c \ub9d0\ub85c '\ud504\ub85c\uadf8\ub7a8\uc774 \uc8fd\ub294' \ud604\uc0c1\uc774 \uc774\ub7ec\ud55c \ube44\uc815\uc0c1 \uc885\ub8cc\uc5d0 \ud574\ub2f9\ud558\ub294\ub370, \uac1c\ubc1c\uc790 \uc785\uc7a5\uc5d0\uc11c\ub294 \uc65c \uc774\ub7ec\ud55c '\uc8fd\uc74c'\uc774 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud30c\uc545\uc774 \uc5b4\ub835\ub2e4. \uc65c\ub0d0\ud558\uba74 \uac1c\ubc1c\uc790\uc758 PC\uc5d0\uc11c\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \uc8fd\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc774\ub2e4.(",(0,r.jsx)(n.a,{href:"https://www.amazon.com/works-Machine-Programming-T-Shirt/dp/B07C9FVM4R",children:"It works on my machine"}),")",(0,r.jsx)(n.br,{}),"\n","\ub108\ubb34\ub3c4 \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790 \ud658\uacbd\uc740 \uae30\uc0c1\ucc9c\uc678\ud55c \ubb38\uc81c\ub97c \uc77c\uc73c\ud0a8\ub2e4.(",(0,r.jsx)(n.a,{href:"https://beza1e1.tuxen.de/lore/allergic_car.html",children:"\ubc14\ub2d0\ub77c \uc544\uc774\uc2a4\ud06c\ub9bc \uc54c\ub7ec\uc9c0\uac00 \uc788\ub294 \uc790\ub3d9\ucc28"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uc548\ud0c0\uae4c\uc6b4 \uc8fd\uc74c\uc758 \uc6d0\uc778\uc744 \ubd80\uac80\ud558\uae30 \uc704\ud574, \uac1c\ubc1c\uc790\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \uc2e4\ud589\ub418\uc5c8\ub358 \uc8fc\ubcc0\ud658\uacbd\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \uc815\ubcf4\ub97c \uc218\uc9d1\ud55c\ub2e4. \ud5c8\ub098 \uc544\ubb34\ub9ac \ub2e4\uc591\ud55c \uc8fc\ubcc0 \uc815\ubcf4\ub97c \uc218\uc9d1\ud55c\ub2e4 \ud558\ub354\ub77c\ub3c4 \uc9c1\uc811\uc801\uc778 \uc0ac\uc778\uc740 \uc2dc\uccb4\ub97c \ud655\uc778\ud574\uc57c\ub9cc \ud558\ub4ef, \ud504\ub85c\uadf8\ub7a8\uc774 \ube44\uc815\uc0c1 \uc885\ub8cc\ub41c \uc6d0\uc778\uc740 \ud06c\ub798\uc2dc\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uc810\uc5d0 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ub41c \uc2a4\ub0c5\uc0f7\uc744 \ud655\uc778\ud574\uc57c\ub9cc \ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uadf8\ub807\ub2e4. \ud638\ub791\uc774\ub294 \uc8fd\uc5b4\uc11c \uac00\uc8fd\uc744 \ub0a8\uae30\uace0 \ud55c\uc6b0\ub294 \uc8fd\uc5b4\uc11c T\ubcf8 \uc2a4\ud14c\uc774\ud06c\ub97c \ub0a8\uae30\ub4ef, \ud504\ub85c\uadf8\ub7a8\uc740 \uc8fd\uc5b4\uc11c \uba54\ubaa8\ub9ac \ub364\ud504\ub97c \ub0a8\uae34\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \uba54\ubaa8\ub9ac \ub364\ud504\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc54c\uc544\ubcf4\uace0, \ub2e4\uc591\ud55c \uc0ac\uc6a9\uc790 \ud658\uacbd\uc5d0\uc11c \ub364\ud504\ub97c \uc218\uc9d1\ud558\uace0 \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc5b4\ub5a4 \uacfc\uc815\ub4e4\uc774 \uc774\ub904\uc9c0\ub294\uc9c0\ub97c \uc54c\uc544\ubcf4\uaca0\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ud504\ub85c\uadf8\ub7a8\uc758-\uc0dd\uc560\uc8fc\uae30\uc815\uc0c1\uc885\ub8cc-vs-\ube44\uc815\uc0c1\uc885\ub8cc",children:"\ud504\ub85c\uadf8\ub7a8\uc758 \uc0dd\uc560\uc8fc\uae30(\uc815\uc0c1\uc885\ub8cc vs \ube44\uc815\uc0c1\uc885\ub8cc)"}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub85c\uadf8\ub7a8\uc758 \ube44\uc815\uc0c1 \uc885\ub8cc\uac00 \ubb34\uc5c7\uc778\uc9c0 \uc124\uba85\ud558\ub824\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5b4 \uc885\ub8cc\ub418\ub294 \uc0c1\ud669\uc774 \uc5b4\ub5a4 \ud750\ub984\uc73c\ub85c \uc9c4\ud589\ub418\ub294\uc9c0 \uc54c\uc544\ub458 \ud544\uc694\uac00 \uc788\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["\uba3c\uc800 \uc18c\uc2a4\ucf54\ub4dc\uac00 \uc2e4\ud589\uac00\ub2a5\ud55c \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \ubcc0\ud658\ub418\ub294 \uacfc\uc815\uc744 \uac1c\ub7b5\uc801\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uc790. \ucef4\ud30c\uc77c\ub7ec\ub294 \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc5ed\ud560\uc5d0 \ub530\ub77c \ub2e4\uc591\ud55c \uc911\uac04\ud615\ud0dc(=Object File)\ub85c \ubcc0\ud658\ud55c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\ub2e4\uc74c\uc740 Linux\uc758 Object File \ud615\uc2dd\uc774\ub2e4. \ub2e4\ub978 \ud50c\ub7ab\ud3fc\uc758 \uacbd\uc6b0 \uba85\uce6d\uc774 \uc880 \ub2e4\ub97c \uc218 \uc788\uc73c\ub098 \uac1c\ub150\uc740 \ud06c\uac8c \ub2e4\ub974\uc9c0 \uc54a\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"elf overview",src:s(5184).A+"",title:"ELF Overview"}),"\n",(0,r.jsxs)(n.em,{children:["\ucd9c\ucc98: ",(0,r.jsx)(n.a,{href:"https://cs4157.github.io/www/2024-1/lect/15-elf-intro.html",children:"https://cs4157.github.io/www/2024-1/lect/15-elf-intro.html"})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"text section:"})," \ucef4\ud30c\uc77c \ud0c0\uac9f \uba38\uc2e0\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud55c \uae30\uacc4\uc5b4 \ucf54\ub4dc"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"data section:"})," \ucd08\uae30\ud654\ub41c \uc804\uc5ed\ubcc0\uc218/static \ubcc0\uc218"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"bss section:"})," \ucd08\uae30\ud654\ub418\uc9c0 \uc54a\uc740 \uc804\uc5ed\ubcc0\uc218\uc758 \uba54\ud0c0\uc815\ubcf4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\uadf8\ubc16\uc5d0:"})," \uc77d\uae30 \uc804\uc6a9(rodata)\ub098 \uc2ec\ubcfc\ud14c\uc774\ube14(symtab) relocation \uc815\ubcf4(rel.text/rel.data) \ub4f1\ub4f1"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \uc911\uac04\ud615\ud0dc\uc758 Object file\ub4e4\uc774 \uc2e4\ud589\uac00\ub2a5\ud55c \ud615\ud0dc\uc758 Executable file\ub85c \uacb0\ud569\uc774 \ub418\uc5b4\uc57c \ube44\ub85c\uc18c \ucd5c\uc885\uc801\uc778 \ud504\ub85c\uadf8\ub7a8\uc758 \ud615\ud0dc\uac00 \ub41c\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Java\ub098 Python, Typescript \uac19\uc740 Managed \ud658\uacbd\uc740 \ub3d9\uc791\ubc29\uc2dd\ub3c4 \ub2e4\ub974\uace0, \uc774 \uae00\uc758 \uba54\uc778 \uc8fc\uc81c\uc778 Crash Dump\ub97c (\uc6ec\ub9cc\ud558\uba74)\ub0a8\uae30\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc5ec\uae30\uc11c\ub294 \ub2e4\ub8e8\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub85c\uadf8\ub7a8\uc774 \uc2e4\ud589\ub418\uae30 \uc704\ud574\uc11c\ub294 Object file\ub4e4\uc744 \uacb0\ud569 \ud6c4 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ud558\uc5ec\uc57c \ud55c\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \ub9c1\ucee4\ub294 \uc5ec\ub7ec \uc624\ube0c\uc81d\ud2b8 \ud30c\uc77c\uc744 \ud558\ub098\uc758 \uc2e4\ud589 \ud30c\uc77c\ub85c \uacb0\ud569\ud558\uace0, \ub85c\ub354\ub294 \uc774 \uc2e4\ud589 \ud30c\uc77c\uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ud55c\ub2e4. \uc774 \uc2e4\ud589\ud30c\uc77c \ud615\uc2dd\uc740 \ud50c\ub7ab\ud3fc\uc5d0 \ub530\ub77c \ub2e4\ub974\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows:"})," PE(Portable Executable)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linux:"})," ELF(Executable and Linkable Format)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"macOS:"})," Mach-O(Mach Object)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub85c\uadf8\ub7a8\uc774 \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ub418\uc5c8\uc744 \ub54c text / data / bss \uac19\uc740 \uc601\uc5ed\uc758 \ud06c\uae30\ub294 \uace0\uc815\uc801\uc774\ub2e4. \ud55c\ud3b8, \ud504\ub85c\uadf8\ub7a8\uc774 \ub3d9\uc791\ud568\uc5d0 \ub530\ub77c \ub3d9\uc801\uc73c\ub85c \ud06c\uae30\uac00 \ub298\uc5c8\ub2e4 \uc904\uc5c8\ub2e4 \ud558\ub294 \uc601\uc5ed\uc774 \uc788\ub294\ub370, TLS(Thread Local Storage)\uc5d0\uc11c \uc790\ub77c\ub098\ub294 \ucf5c\uc2a4\ud0dd\uc774\ub098 \ud799\uc774 \uadf8\ub7ec\ud55c \uc608\uc774\ub2e4. \ucf5c\uc2a4\ud0dd\uc740 \ud568\uc218 \ud638\ucd9c \uc2dc \uc2a4\ud0dd \ud504\ub808\uc784\uc744 \ucd94\uac00\ud558\uace0, \ud568\uc218 \uc885\ub8cc \uc2dc \uc81c\uac70\ud558\ub294 \uad6c\uc870\ub2e4. \ud799\uc740 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc911 \uba54\ubaa8\ub9ac\ub97c \ud560\ub2f9\ud558\uace0 \ud574\uc81c\ud558\ub294 \uc601\uc5ed\uc774\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ud504\ub85c\uadf8\ub7a8\uc758 \ud2b9\uc815 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ubc84\ud2bc\uc744 \ub204\ub974\uac70\ub098, \ud654\uba74\uc744 \ud130\uce58\ud558\ub294 \ub4f1\uc758 \ud589\uc704\ub97c \ud558\uba74 \uadf8 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 \uad6c\uc131\ub41c \ud568\uc218\ub4e4\uc774 \ucc28\ub840\ub300\ub85c \ud638\ucd9c\ub41c\ub2e4. \ub54c\ub85c\ub294 \ud06c\uae30\uac00 \uc5bc\ub9c8\ub098 \ub420\uc9c0 \ubaa8\ub974\ub294 \ub370\uc774\ud130\ub97c \uc77d\uace0 \uc4f0\ub294 \uc791\uc5c5\uc774 \ud544\uc694\ud558\uae30\ub3c4 \ud558\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \ucf5c\uc2a4\ud0dd\uacfc \ud799\uc774 \uc790\ub77c\ub098\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\uc815\uc0c1\uc801\uc778 \uc0ac\uc6a9\uc790 \uc2dc\ub098\ub9ac\uc624\uc5d0\uc11c\ub294 \ud504\ub85c\uadf8\ub7a8\uc774 \ubaa8\ub4e0 \uc791\uc5c5\uc744 \ub9c8\uce58\uace0 \uc885\ub8cc\ub420 \ub54c, \ucf5c\uc2a4\ud0dd\uacfc \ud799\uc5d0 \ud560\ub2f9\ub41c \ubaa8\ub4e0 \uba54\ubaa8\ub9ac\uac00 \uc815\ub9ac\ub418\uace0, \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub294 OS\uc5d0 \ubc18\ud658\ub41c\ub2e4. \uc774\ub85c\uc368 \ud504\ub85c\uadf8\ub7a8\uc740 \uc815\uc0c1 \uc885\ub8cc \uc0c1\ud0dc\uc5d0 \uc9c4\uc785\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Alt + X"})," \ub098 ",(0,r.jsx)(n.code,{children:"Ctrl + C"})," \ub85c \ud504\ub85c\uc138\uc2a4\ub97c \uc911\ub2e8\uc2dc\ud0a4\ub294 \uac83\ub3c4 \uc815\uc0c1 \uc885\ub8cc\uc758 \ubc94\uc8fc\uc5d0 \ub4e4\uc5b4\uc57c \ud560\uae4c? \uad00\uc810\uc5d0 \ub530\ub77c \ub2e4\ub974\uaca0\uc9c0\ub9cc \uc77c\ub2e8 \ud544\uc790\uac00 \uae00\uc744 \ud1b5\ud574 \ub2e4\ub8e8\ub824\ub294\uac74 \ud68c\ubcf5 \ubd88\uac00\ub2a5\ud55c \uc0c1\ud0dc\uc5d0 \uc9c4\uc785\ud55c \ud504\ub85c\uadf8\ub7a8\uc774\ub2e4. ",(0,r.jsx)(n.code,{children:"Alt + X"})," \ub098 ",(0,r.jsx)(n.code,{children:"Ctrl + C"}),"\ub85c \ud504\ub85c\uadf8\ub7a8\uc744 \uc885\ub8cc\ud55c\ub2e4\ub294\uac74 \uc0ac\uc6a9\uc790\uc758 \uc758\ub3c4\uc5d0 \uc758\ud574 \ud504\ub85c\uadf8\ub7a8\uc774 \uc885\ub8cc\ub418\ub294 \uac83\uc774\ubbc0\ub85c \uc774 \uae00\uc5d0\uc11c\ub294 \uc815\uc0c1 \uc885\ub8cc\ub85c \uac04\uc8fc\ud55c\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc \ud504\ub85c\uadf8\ub7a8\uc774 \uc608\uae30\uce58 \ubabb\ud55c \uc0c1\ud669\uc5d0 \uc9c1\uba74\ud558\uba74 \ube44\uc815\uc0c1 \uc885\ub8cc\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4. \uc774\ub294 \ub9c8\uce58 \uc0ac\ub78c\uc774 \uac00\uc11c\ub294 \uc548 \ub418\ub294 \uacf3 - \uad70\uc0ac\ubd84\uacc4\uc120 \ubc14\uae65 \uc9c0\uc5ed\uc774\ub098 \uc740\ud589 \uae08\uace0 \ub4f1 -\uc5d0 \ubc1c\uc744 \ub4e4\uc774\uac70\ub098, \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uce58\uba85\uc801\uc778 \ud53c\ud574\ub97c \uc785\ud788\ub294 \ud589\uc704\ub97c \ud588\uc744 \ub54c \uc815\ubd80\uac00 \uc774\ub97c \uc81c\uc7ac\ud558\uace0 \uac10\uc625\uc73c\ub85c \ubcf4\ub0b4\ub294 \uac83\uacfc \ube44\uc2b7\ud558\ub2e4. \ub9c8\ucc2c\uac00\uc9c0\ub85c OS\ub3c4 \uc2dc\uc2a4\ud15c\uc758 \uc548\uc815\uc131\uc744 \uc704\ud574 \uacc4\uc57d\ub418\uc9c0 \uc54a\uc740 \ud589\uc704\ub97c \ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uac15\uc81c\ub85c \uc885\ub8cc\uc2dc\ud0a8\ub2e4. \uc2dc\uc2a4\ud15c \uba54\ubaa8\ub9ac\uc758 \ubcf4\ud638\ub41c \uc601\uc5ed \ub610\ub294 \uc798\ubabb\ub41c \uc8fc\uc18c\ub97c \ucc38\uc870\ud558\uac70\ub098, \ub9ac\uc18c\uc2a4\ub97c \uacfc\ub3c4\ud558\uac8c \uc810\uc720\ud558\ub294 \uacbd\uc6b0 \uc6b4\uc601\uccb4\uc81c\ub294 \ud574\ub2f9 \ud504\ub85c\uadf8\ub7a8\uc744 \uac15\uc81c\ub85c \uc885\ub8cc\ud558\ub294\ub370, \uc774\uac83\uc774 \uc6b0\ub9ac\uac00 \ud754\ud788 \ub9d0\ud558\ub294 \ud06c\ub798\uc2dc\uc774\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\uc608\uc678\ucc98\ub9ac",children:"\uc608\uc678\ucc98\ub9ac"}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uac11\uc791\uc2a4\ub7ec\uc6b4 \ube44\uc815\uc0c1 \uc885\ub8cc\ub97c \uc81c\uc5b4\ud558\uae30 \uc704\ud574 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc640 \uc6b4\uc601\uccb4\uc81c\ub294 \uc608\uc678\ucc98\ub9ac \uc218\ub2e8\uc744 \uc81c\uacf5\ud55c\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 OS \uc218\uc900\uc758 \uc608\uc678\ucc98\ub9ac\uc5d0 \ub300\ud574\uc11c\ub9cc \ub2e4\ub8ec\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows:"})," SEH(Structured Exception Handling)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Linux:"})," Signal"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"macOS:"})," Mach Exception & Signal(Mach Exception\uc758 \uc6b0\uc120\uc21c\uc704\uac00 \ub354 \ub192\uc74c)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ube44\uad50 \ud45c: \ud50c\ub7ab\ud3fc\ubcc4 \uad00\ub9ac \uc608\uc678/\uc2e0\ud638"})}),"\n",(0,r.jsx)("div",{className:l.A.table,children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\ubb38\uc81c \uc720\ud615"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Windows (SEH)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Linux (Signals)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"macOS (Mach + Signals)"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\uc798\ubabb\ub41c \uba54\ubaa8\ub9ac \uc811\uadfc"})}),(0,r.jsx)(n.td,{children:"STATUS_ACCESS_VIOLATION"}),(0,r.jsx)(n.td,{children:"SIGSEGV, SIGBUS"}),(0,r.jsx)(n.td,{children:"SIGSEGV, SIGBUS, EXC_BAD_ACCESS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uc6b0"})}),(0,r.jsx)(n.td,{children:"STATUS_STACK_OVERFLOW"}),(0,r.jsx)(n.td,{children:"SIGSEGV (\uac04\uc811\uc801\uc73c\ub85c \ubc1c\uc0dd)"}),(0,r.jsx)(n.td,{children:"SIGSEGV (\uac04\uc811\uc801\uc73c\ub85c \ubc1c\uc0dd)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\uc798\ubabb\ub41c \uba85\ub839\uc5b4"})}),(0,r.jsx)(n.td,{children:"STATUS_ILLEGAL_INSTRUCTION"}),(0,r.jsx)(n.td,{children:"SIGILL"}),(0,r.jsx)(n.td,{children:"SIGILL, EXC_BAD_INSTRUCTION"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"0\uc73c\ub85c \ub098\ub204\uae30 \ub4f1"})}),(0,r.jsx)(n.td,{children:"STATUS_FLOAT_DIVIDE_BY_ZERO"}),(0,r.jsx)(n.td,{children:"SIGFPE"}),(0,r.jsx)(n.td,{children:"SIGFPE, EXC_ARITHMETIC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\ub9ac\uc18c\uc2a4 \ucd08\uacfc"})}),(0,r.jsx)(n.td,{children:"STATUS_INSUFFICIENT_RESOURCES"}),(0,r.jsx)(n.td,{children:"SIGXCPU, SIGXFSZ"}),(0,r.jsx)(n.td,{children:"SIGXCPU, SIGXFSZ"})]})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"os-\ubcc4\ub85c-\uc11c\ub85c-\ub2e4\ub978-\ub364\ud504-\ud3ec\ub9f7",children:"OS \ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 \ub364\ud504 \ud3ec\ub9f7"}),"\n",(0,r.jsx)(n.p,{children:"\ud06c\ub798\uc2dc\uac00 \ubc1c\uc0dd\ud558\uba74 \uc6b4\uc601\uccb4\uc81c\ub294 \uba54\ubaa8\ub9ac \uc2a4\ub0c5\uc0f7\uc744 \uae30\ub85d\ud558\uc5ec \ub514\ubc84\uae45\uacfc \uc6d0\uc778 \ubd84\uc11d\uc5d0 \ud65c\uc6a9\ud55c\ub2e4. \uadf8\ub7ec\ub098 \uac01 \uc6b4\uc601\uccb4\uc81c\ub294 \ud06c\ub798\uc2dc \uc2dc\uc810\uc758 \uba54\ubaa8\ub9ac \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud558\ub294 \ubc29\uc2dd\uacfc \ud3ec\ub9f7\uc774 \uc11c\ub85c \ub2e4\ub974\ub2e4. \uac01 OS\ub294 \uace0\uc720\uc758 \ub364\ud504 \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud06c\ub798\uc2dc \uc0c1\ud669\uc744 \ubd84\uc11d\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. Windows"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Minidump"}),": Windows \uc6b4\uc601\uccb4\uc81c\ub294 Minidump \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4. Minidump\ub294 \ud06c\ub798\uc2dc \uc6d0\uc778\uc744 \ubd84\uc11d\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uba70, \ud30c\uc77c \ud06c\uae30\uac00 \uc791\uc544 \uc804\uc1a1\uacfc \ubd84\uc11d\uc774 \uc6a9\uc774\ud558\ub2e4. \ubcf4\ud1b5\uc740 \ud799\uc744 \ud3ec\ud568\ud558\uc9c0 \uc54a\uc73c\uba70, \uc635\uc158\uc73c\ub85c \ud799 \uc601\uc5ed\uc744 \ud3ec\ud568\uc2dc\ud0a4\ub354\ub77c\ub3c4 \uc804\uccb4 \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ud30c\uc77c \ud06c\uae30\uac00 \uc0c1\ub300\uc801\uc73c\ub85c \uc791\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Full Dump"}),": \uc804\uccb4 \uba54\ubaa8\ub9ac \ub364\ud504\ub97c \ud3ec\ud568\ud558\uc5ec \ud06c\ub798\uc2dc \uc2dc\uc810\uc758 \ubaa8\ub4e0 \uba54\ubaa8\ub9ac \uc0c1\ud0dc\ub97c \uae30\ub85d\ud55c\ub2e4. \ud799, \uc804\uc5ed\ubcc0\uc218, \ud655\uc7a5 \ub808\uc9c0\uc2a4\ud130, \uae30\ud0c0 \ub9ac\uc18c\uc2a4 \ub4f1\uc758 \ubaa8\ub4e0 \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud558\uc5ec \ud30c\uc77c \ud06c\uae30\uac00 \ud06c\uace0 \ubd84\uc11d\uc774 \ubcf5\uc7a1\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. Linux"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Core Dump"}),": Linux \uc6b4\uc601\uccb4\uc81c\ub294 Core Dump \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4. Core Dump\ub294 \ud504\ub85c\uc138\uc2a4\uc758 \uba54\ubaa8\ub9ac \uc774\ubbf8\uc9c0\uc640 \ub808\uc9c0\uc2a4\ud130 \uc0c1\ud0dc\ub97c \ud3ec\ud568\ud558\uba70, \ub514\ubc84\uae45\uc5d0 \uc720\uc6a9\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud55c\ub2e4. \uadf8\ub7ec\ub098 \ud30c\uc77c \ud06c\uae30\uac00 \ud06c\uace0 \ub2e4\ub8e8\uae30 \uc5b4\ub824\uc6b4 \uacbd\uc6b0\uac00 \ub9ce\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. macOS"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Apple Crash Report"}),": macOS\ub294 Apple Crash Report \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4. \uc774 \ud3ec\ub9f7\uc740 \ud06c\ub798\uc2dc \uc2dc\uc810\uc758 \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4, \uba54\ubaa8\ub9ac \ub0b4\uc6a9, \ub808\uc9c0\uc2a4\ud130 \uc0c1\ud0dc \ub4f1\uc744 \ud3ec\ud568\ud558\uba70, \ubd84\uc11d\uc744 \uc704\ud574 Xcode\uc640 \uac19\uc740 \ub3c4\uad6c\uc640 \ud568\uaed8 \uc0ac\uc6a9\ub41c\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. Android"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tombstone"}),": Android \uc6b4\uc601\uccb4\uc81c\ub294 Tombstone \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c\ub2e4. Tombstone\uc740 \ud06c\ub798\uc2dc \uc2dc\uc810\uc758 \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4, \uba54\ubaa8\ub9ac \ub0b4\uc6a9, \ub808\uc9c0\uc2a4\ud130 \uc0c1\ud0dc \ub4f1\uc744 \ud3ec\ud568\ud558\uba70, adb\uc640 \uac19\uc740 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubd84\uc11d\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub807\ub4ef \uac01 \uc6b4\uc601\uccb4\uc81c\uc758 \ub364\ud504 \ud3ec\ub9f7\uc740 \ud06c\ub798\uc2dc \uc6d0\uc778 \ubd84\uc11d\uc5d0 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uc9c0\ub9cc, \uadf8 \uad6c\uc870\uac00 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \ud06c\ub85c\uc2a4 \ud50c\ub7ab\ud3fc \ud658\uacbd\uc5d0\uc11c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ubc30\ud3ec\ud558\ub294 \uac1c\ubc1c\uc790\ub294 \ud30c\ud3b8\ud654\ub41c \ub364\ud504 \ud3ec\ub9f7\uc744 \uc77c\uc77c\uc774 \uad00\ub9ac\ud574\uc57c \ud55c\ub2e4. \uc774\ub294 \uace0\ud1b5\uc2a4\ub7ec\uc6b4 \uc791\uc5c5\uc774\uae30\uc5d0 \ub364\ud504\ub97c \ub2e4\ub8e8\ub294 \uc77c\uad00\ub41c \ubc29\ubc95\uc774 \ud544\uc694\ud574\uc9c0\ub294 \uc774\uc720\uac00 \ub41c\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"minidump-format-\uacfc-chromium-breakpad-project",children:"Minidump Format \uacfc Chromium Breakpad Project"}),"\n",(0,r.jsx)(n.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc6b0\ub9ac\uac00 \uc54c\uc544\ubcf8 \uac83\uc744 \uc694\uc57d\ud558\uba74,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud504\ub85c\uadf8\ub7a8\uc740 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub2e4\uac00 \uc608\uae30\uce58 \ubabb\ud55c \uc0c1\ud669\uc5d0 \uc9c1\uba74\ud558\uba74 \ube44\uc815\uc0c1 \uc885\ub8cc\ud55c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc6b4\uc601\uccb4\uc81c\ub294 \ube44\uc815\uc0c1 \uc885\ub8cc \uc2dc\uc810\uc758 \uba54\ubaa8\ub9ac \uc2a4\ub0c5\uc0f7\uc744 \uc800\uc7a5\ud558\uc5ec \ub514\ubc84\uae45\uacfc \uc6d0\uc778 \ubd84\uc11d\uc5d0 \ud65c\uc6a9\ud55c\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\uac01 \uc6b4\uc601\uccb4\uc81c\ub294 \ud504\ub85c\uadf8\ub7a8\uc758 \uba54\ubaa8\ub9ac \uc801\uc7ac \ubc29\uc2dd\uc774 \uc11c\ub85c \ub2e4\ub974\uba70, ",(0,r.jsx)(n.strong,{children:"\ud06c\ub798\uc2dc \ub364\ud504 \ud3ec\ub9f7\ub3c4 \ub2e4\ub974\ub2e4."})]}),"\n",(0,r.jsxs)(n.li,{children:["\ub610\ud55c \uac01 \uc6b4\uc601\uccb4\uc81c\ub9c8\ub2e4 ",(0,r.jsx)(n.strong,{children:"\uc608\uc678\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\ub3c4 \ub2e4\ub974\ub2e4."})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ube0c\ub77c\uc6b0\uc800\ub098 JVM, .NET \ucc98\ub7fc \ud06c\ub85c\uc2a4 \ud50c\ub7ab\ud3fc \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc758 \ub3d9\uc791\uc744 \ubcf4\uc7a5\ud558\ub294 \ub808\uc774\uc5b4\ub97c \uc9c0\ub2cc \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc704\uc640 \uac19\uc740 \ud06c\ub798\uc2dc \ub364\ud504\uc758 \uc218\uc9d1 \ubc0f \ubd84\uc11d \uc2dc \ud30c\ud3b8\ud654 \ubb38\uc81c\uac00 \ud06c\uac8c \uccb4\uac10\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4. \ud5c8\ub098 \uc5ec\ub7ec \ud50c\ub7ab\ud3fc \ud0c0\uac9f\uc744 \uc9c0\uc6d0\ud558\ub294 \ub124\uc774\ud2f0\ube0c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uacbd\uc6b0, \uc774\ub7ec\ud55c \ud06c\ub798\uc2dc \ud30c\ud3b8\ud654\ub294 \uac1c\ubc1c\uc790\uac00 \ubb38\uc81c\ub97c \ucc3e\uae30 \uc5b4\ub835\uac8c \ud55c\ub2e4."}),"\n",(0,r.jsxs)(n.p,{children:["2008\ub144 9\uc6d4, \uad6c\uae00\uc740 ",(0,r.jsx)(n.a,{href:"https://blog.chromium.org/2008/09/welcome-to-chromium_02.html",children:"Chromium\uc774\ub77c\ub294 \uc624\ud508\uc18c\uc2a4 \uc6f9\ube0c\ub77c\uc6b0\uc800 \ud504\ub85c\uc81d\ud2b8\ub97c \ubc1c\ud45c"}),"\ud558\uc600\ub294\ub370, \uc774 \ud504\ub85c\uc81d\ud2b8\uc758 \uc8fc\uc694 \ubaa9\ud45c \uc911 \ud558\ub098\ub294 \ubaa8\ub4e0 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc77c\uad00\ub41c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\ub294\ub370 \uc788\uc5c8\ub2e4. \ud544\uc5f0\uc801\uc73c\ub85c \uc5ec\ub7ec \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ud06c\ub798\uc2dc \uc815\ubcf4\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uc218\uc9d1\ud558\uace0 \ubd84\uc11d\ud558\uae30 \uc704\ud55c \uc218\ub2e8\uc774 \ud544\uc694\ud588\ub294\ub370, \uc774\ub97c \uc704\ud55c Chromium\uc758 \ud574\uacb0\ucc45\uc774 \ubc14\ub85c ",(0,r.jsx)(n.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/",children:(0,r.jsx)(n.strong,{children:"Breakpad Project"})}),"\uc774\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["Microsoft\uc758 Minidump \ud3ec\ub9f7\uc740 Breakpad\uc5d0\uc11c \ud06c\ub85c\uc2a4\ud50c\ub7ab\ud3fc \ud658\uacbd\uc5d0\uc11c \uc77c\uad00\ub41c \ud06c\ub798\uc2dc \ub364\ud504 \uc218\uc9d1\uc744 \uc704\ud574 \ucc44\ud0dd\ud55c \ud615\uc2dd\uc774\ub2e4. ",(0,r.jsx)(n.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/+/HEAD/docs/processor_design.md",children:"Breakpad Processor \ub514\uc790\uc778 \ubb38\uc11c"}),"\uc5d0 \ub530\ub974\uba74 \uc65c Minidump \ud3ec\ub9f7\uc744 \uc120\ud0dd\ud558\uc600\ub294\uc9c0\uc5d0 \ub300\ud55c \uc774\uc720\uac00 \uc790\uc138\ud788 \uae30\uc220\ub418\uc5b4 \uc788\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\uacbd\ub7c9\ud654\ub41c \ud3ec\ub9f7:"})," Minidump\ub294 \ud06c\ub798\uc2dc \uc6d0\uc778\uc744 \ubd84\uc11d\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c\ud55c\uc758 \uc815\ubcf4\ub9cc\uc744 \ud3ec\ud568\ud558\uba70, \ud30c\uc77c \ud06c\uae30\uac00 \uc791\uc544 \uc804\uc1a1\uacfc \ubd84\uc11d\uc774 \uc6a9\uc774\ud558\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\ud655\uc7a5\uc131:"})," \ub2e4\uc591\ud55c CPU \uc544\ud0a4\ud14d\ucc98 \ubc0f \uc6b4\uc601\uccb4\uc81c\ub97c \uc9c0\uc6d0\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc73c\uba70, \ub2e4\ub978 \ud3ec\ub9f7\ub4e4\uacfc\ub294 \ub2e4\ub974\uac8c \ud655\uc7a5\uc774 \uc6a9\uc774\ud558\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\uac80\uc99d\ub41c \ub3c4\uad6c:"})," Minidump \ud3ec\ub9f7\uc740 Windows \uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \uc218 \ub144\uac04 \uac80\uc99d\ub41c \ud3ec\ub9f7\uc774\uae30 \ub54c\ubb38\uc5d0 \uc548\uc815\uc131\uc774 \ub192\uc73c\uba70, MS\uc758 \ub514\ubc84\uae45 \ub3c4\uad6c\ub4e4\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ub208\uce58\ube60\ub978 \uc0ac\ub78c\ub4e4\uc740 \uc5ec\uae30\uc11c \uc544\uc9c1 \ud574\uacb0\ub418\uc9c0 \ubabb\ud55c \ud30c\ud3b8\ud654 \ubb38\uc81c\ub97c \uc54c\uc544\ucc4c \uac83\uc774\ub2e4. \ubc14\ub85c Debugging Symbol\uc778\ub370, Minidump\ub97c \uc4f0\ub354\ub77c\ub3c4 \ud50c\ub7ab\ud3fc \ubcc4\ub85c \uc11c\ub85c \ub2e4\ub978 Symbol \ud3ec\ub9f7\uc740 \uc5ec\uc804\ud788 \ubb38\uc81c\uac00 \ub41c\ub2e4.",(0,r.jsx)(n.br,{}),"\n","\uc774\uc5d0 \ub300\ud55c Breakpad\uc758 \ud574\ubc95\uc740 \uac01 \ud50c\ub7ab\ud3fc\uc758 Symbol\uc744 Breakpad \ub9cc\uc758 Human-Readable\ud55c ",(0,r.jsx)(n.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/+/HEAD/docs/symbol_files.md",children:"\uace0\uc720\uc758 Symbol Format"}),"\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uac83\uc774\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["\uc544\ub798 \uadf8\ub9bc\uc740 Breakpad \ud504\ub85c\uc81d\ud2b8\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uac1c\ub7b5\uc801\uc778 flow\ub97c \ubcf4\uc5ec\uc900\ub2e4.\n",(0,r.jsx)(n.img,{alt:"breakpad flow",src:s(3996).A+""})]}),"\n",(0,r.jsx)(n.p,{children:"\ub9c8\uc9d5\uac00Z \uc640 \uadf8\ub808\uc774\ud2b8 \ub9c8\uc9d5\uac00\uc758 \ubc14\ud1a4\ud130\uce58"}),"\n",(0,r.jsx)(n.h2,{id:"breakpad\uc758-\ud55c\uacc4\uc640-\uc774\ub97c-\uac1c\uc120\ud558\ub294-\ud504\ub85c\uc81d\ud2b8\ub4e4crashpad-rust-minidump",children:"Breakpad\uc758 \ud55c\uacc4\uc640 \uc774\ub97c \uac1c\uc120\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub4e4(Crashpad, Rust-Minidump)"}),"\n",(0,r.jsxs)(n.p,{children:["Breakpad Client\ub97c \uc0ac\uc6a9\ud574\ubcf4\uba74 \uac00\ub054\uc529 \uc81c\ub300\ub85c \ub41c \ub364\ud504\uac00 \uc218\uc9d1\ub418\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4. Breakpad Client\uac00 \ub364\ud504\ub97c \uc0dd\uc131\ud560 \ucda9\ubd84\ud55c \uc2dc\uac04\uc744 \ud655\ubcf4\ud558\uc9c0 \ubabb\ud558\uac70\ub098, \ub364\ud504 \uc0dd\uc131 \uc911\uc5d0 \ud504\ub85c\uc138\uc2a4\uac00 \ube44\uc815\uc0c1 \uc885\ub8cc\ub418\ub294 \uacbd\uc6b0\uac00 \uadf8 \uc608\uc774\ub2e4. \uc55e\uc11c \uadf8\ub9bc\uc744 \ubcf4\uba74 Breakpad Client\ub294 \uc0ac\uc6a9\uc790\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ud504\ub85c\uc138\uc2a4 \ub0b4\ubd80\uc5d0\uc11c \ub3d9\uc791\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \uc788\ub294\ub370, \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc885\ub8cc\ub418\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294 Breakpad Client\uac00 \ub364\ud504\ub97c \uc0dd\uc131\ud560 \ucda9\ubd84\ud55c \uc2dc\uac04\uc744 \ud655\ubcf4\ud558\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\ub2e4.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://chromium.googlesource.com/crashpad/crashpad",children:"Crashpad"}),"\ub294 \uc774\ub7ec\ud55c \ud55c\uacc4\ub97c \uadf9\ubcf5\ud558\uae30 \uc704\ud55c \uac1c\uc120 \ud504\ub85c\uc81d\ud2b8\ub85c, \ubcc4\ub3c4\uc758 Crash \uc218\uc9d1 \ubc0f \uc804\uc1a1\uc744 \ub2f4\ub2f9\ud558\ub294 Handler Process\ub97c \uad6c\uc131\ud558\uc5ec \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uc600\ub2e4.\n",(0,r.jsx)(n.img,{alt:"crashpad overview",src:s(6041).A+""})]}),"\n",(0,r.jsxs)(n.p,{children:["\ud55c\ud3b8, Chromium\uc758 Breakpad\uac00 \uc313\uc544\ub193\uc740 \uc720\uc0b0\uc744 \ud1a0\ub300\ub85c RIIR(Re-write It in Rust)\ud55c ",(0,r.jsx)(n.a,{href:"https://github.com/rust-minidump/rust-minidump",children:"Rust-Minidump"})," \ud504\ub85c\uc81d\ud2b8\ub3c4 \uc8fc\ubaa9\ud560 \ub9cc \ud558\ub2e4. 2017\ub144 luser\ub77c\ub294 \uac1c\ubc1c\uc790\uac00 Rust User Forum\uc5d0 \ucc98\uc74c\uc73c\ub85c \uc18c\uac1c\ud55c \uc774 \ud504\ub85c\uc81d\ud2b8\ub294 Rust \uc5b8\uc5b4\ub85c \uc791\uc131\ud558\uc600\ub2e4\ub294 \uac83 \ub9cc\uc73c\ub85c\ub3c4 \ub2e4\uc591\ud55c \uc7a5\uc810(\uba54\ubaa8\ub9ac \uc548\uc815\uc131, \uc18d\ub3c4, \uc0ac\uc6a9 \ud3b8\uc758\uc131)\uc744 \uac16\uace0 \uc788\uc744 \ubfd0 \uc544\ub2c8\ub77c Rust Crate\uc758 \ud655\uc7a5\uc131\uc744 \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \uae30\ub2a5\uc744 \uc27d\uac8c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\ub2e4. \ub364\ud504 \ubd84\uc11d \uacb0\uacfc\ubb3c\uc744 JSON \ud615\ud0dc\ub85c \ucd9c\ub825\ud574\uc8fc\ub294 \ud3b8\uc758 \uae30\ub2a5\uc774\ub098 cli \ub3c4\uad6c\ub3c4 \uc81c\uacf5\ud558\ubbc0\ub85c \ub364\ud504 \ubd84\uc11d\uc744 \uc6d0\ud558\ub294 \uac1c\ubc1c\uc790\ub4e4\uc740 \ub2e4\uc591\ud55c \uc6a9\ub3c4\ub85c \ud65c\uc6a9\uc774 \uac00\ub2a5\ud560 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,r.jsx)(n.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \ud06c\ub85c\uc2a4\ud50c\ub7ab\ud3fc \ud658\uacbd\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ub2e4\uc591\ud55c \ub364\ud504\ub97c \uc218\uc9d1\ud558\uae30 \uc704\ud574 \uc54c\uc544\uc57c \ud558\ub294 \ubc30\uacbd\uc9c0\uc2dd\uacfc, \ud30c\ud3b8\ud654 \ubb38\uc81c\ub97c \ud574\uacb0\ud574\uc8fc\ub294 Breakpad \ud504\ub85c\uc81d\ud2b8\ub97c \uc704\uc2dc\ud55c Crashpad, Rust-Minidump \ub4f1\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\ub2e4. \ub300\uac1c\ub294 Sentry\ub098 Google Crashlytics \ub4f1\uc758 Managed Service\ub97c \uc0ac\uc6a9\ud558\ub290\ub77c \uc9c1\uc811 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub364\ud504\ub97c \uc218\uc9d1\ud558\uace0 \ubd84\uc11d\ud560 \uc77c\uc774 \ub9ce\uc9c0 \uc54a\uaca0\uc9c0\ub9cc \uc5b4\ub290 \uc815\ub3c4 \uaddc\ubaa8\uac00 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \uc6b4\uc601, \uc9c1\uc811 \ub364\ud504\ub97c \uc218\uc9d1\ud558\uc5ec\uc57c\ub9cc \ud558\ub294 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc774 \uae00\uc774 \ub3c4\uc6c0\uc774 \ub418\uae38 \ubc14\ub780\ub2e4."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\uad50\uc591\uc73c\ub85c \uc54c\uc544\ub46c\ub3c4 \uad1c\ucc2e\uc9c0 \uc54a\uc744\uae4c?"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},7516:(e,n,s)=>{s.d(n,{A:()=>r});const r={table:"table__4f0"}},3996:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/breakpad-flow-3f2df50e8eabf9ea66f3882c014e5482.png"},6041:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/crashpad-overview-67ff10cd6f61eddca7160f3110892e13.png"},5184:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/elf-overview-d6d0d5dd85ffedfb37e5c2357752313d.png"},5005:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(1467);const i={},l=r.createContext(i);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);