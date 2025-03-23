"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[8875],{4455:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"article/scenax-integration","title":"scenax-integration","description":"\ud83d\udee0\ufe0f \u041a\u0430\u043a scenax \u0432\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0442\u0435\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439","source":"@site/docs/article/scenax-integration.md","sourceDirName":"article","slug":"/article/scenax-integration","permalink":"/scenax-docs/docs/article/scenax-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/scenax-integration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udfc1 \u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: \u043f\u043e\u0447\u0435\u043c\u0443 scenax \u2014 \u044d\u0442\u043e \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 \u0434\u043b\u044f API-\u0442\u0435\u0441\u0442\u043e\u0432 \u043d\u0430 Vitest","permalink":"/scenax-docs/docs/article/scenax-conclusion"},"next":{"title":"whats-next","permalink":"/scenax-docs/docs/article/whats-next"}}');var t=s(4848),r=s(8453);const i={},l=void 0,d={},a=[{value:"\ud83d\udee0\ufe0f \u041a\u0430\u043a <code>scenax</code> \u0432\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0442\u0435\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",id:"\ufe0f-\u043a\u0430\u043a-scenax-\u0432\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f-\u0432-\u0441\u0442\u0435\u043a-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",level:2},{value:"\ud83d\udd01 \u0410 \u0447\u0442\u043e \u043d\u0430\u0441\u0447\u0451\u0442 Playwright, Jest, \u0434\u0440\u0443\u0433\u0438\u0445?",id:"-\u0430-\u0447\u0442\u043e-\u043d\u0430\u0441\u0447\u0451\u0442-playwright-jest-\u0434\u0440\u0443\u0433\u0438\u0445",level:3},{value:"\ud83d\udccc \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442?",id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"\ufe0f-\u043a\u0430\u043a-scenax-\u0432\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f-\u0432-\u0441\u0442\u0435\u043a-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",children:["\ud83d\udee0\ufe0f \u041a\u0430\u043a ",(0,t.jsx)(n.code,{children:"scenax"})," \u0432\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0442\u0435\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scenax"})," \u043d\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438 \u2014 \u043e\u043d \u043d\u0430\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f ",(0,t.jsx)(n.strong,{children:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e"})," \u043d\u0430\u0434 \u043d\u0438\u043c\u0438, \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0435\u0441\u0442\u044b \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[ NodeJS / TypeScript runtime ]\n       \u2191\n    [ Vitest ]          \u2014 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0442\u0435\u0441\u0442\u044b, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438\n       \u2191\n[ allure-vitest ]       \u2014 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 Allure \u043e\u0442\u0447\u0451\u0442\u0430\u043c\u0438\n       \u2191\n      scenax            \u2014 DSL, \u0448\u0430\u0433\u0438, \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vitest"})," \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a, \u0442\u0430\u0439\u043c\u0438\u043d\u0433, \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0442\u0435\u0441\u0442\u043e\u0432."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Allure"})," \u0434\u0430\u0451\u0442 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0447\u0451\u0442."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scenax"})," \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0448\u0430\u0433\u0438, \u043c\u0435\u0442\u0430\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-\u0430-\u0447\u0442\u043e-\u043d\u0430\u0441\u0447\u0451\u0442-playwright-jest-\u0434\u0440\u0443\u0433\u0438\u0445",children:"\ud83d\udd01 \u0410 \u0447\u0442\u043e \u043d\u0430\u0441\u0447\u0451\u0442 Playwright, Jest, \u0434\u0440\u0443\u0433\u0438\u0445?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scenax"})," \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u043a\u0430\u043a ",(0,t.jsx)(n.strong,{children:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439"}),", \u0430 \u043d\u0435 \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0430\u043d\u043d\u0435\u0440\u0430."]}),"\n",(0,t.jsx)(n.p,{children:"\ud83d\udca1 \u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@scenax/core"})," \u2014 \u0434\u0432\u0438\u0436\u043e\u043a, \u043d\u0435 \u0437\u0430\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 Vitest"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@scenax/vitest"})," \u2014 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043f\u043e\u0434 Vitest"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@scenax/playwright"})," \u2014 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043f\u043e\u0434 Playwright (\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 ",(0,t.jsx)(n.code,{children:"test.step(...)"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0430\u0432\u0442\u043e\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u044b (",(0,t.jsx)(n.code,{children:"vitest"}),", ",(0,t.jsx)(n.code,{children:"playwright"}),") \u0447\u0435\u0440\u0435\u0437 ",(0,t.jsx)(n.code,{children:"runTestClass()"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442",children:"\ud83d\udccc \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0441\u0442\u0435\u043a"}),"\n",(0,t.jsx)(n.li,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432, \u0448\u0430\u0433\u043e\u0432 \u0438 \u043b\u043e\u0433\u0438\u043a\u0438"}),"\n",(0,t.jsx)(n.li,{children:"\u041e\u0442\u0432\u044f\u0437\u043a\u0430 \u043e\u0442 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u0445 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 \u0440\u0430\u043d\u043d\u0435\u0440\u0430"}),"\n",(0,t.jsx)(n.li,{children:"\u041f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b \u0434\u043b\u044f \u0435\u0434\u0438\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 ",(0,t.jsx)(n.code,{children:"scenax"})," \u043c\u044b \u0441\u0442\u0440\u043e\u0438\u043c ",(0,t.jsx)(n.strong,{children:"\u043d\u0435 \u0444\u043e\u0440\u043c\u0430\u0442"}),", \u0430 ",(0,t.jsx)(n.strong,{children:"\u043f\u043e\u0434\u0445\u043e\u0434"})," \u2014 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0433\u0434\u0435 \u0443\u0433\u043e\u0434\u043d\u043e, \u0433\u0434\u0435 \u043d\u0443\u0436\u043d\u044b \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u0448\u0430\u0433\u0438 \u0438 \u043e\u0442\u0447\u0451\u0442\u044b."]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var c=s(6540);const t={},r=c.createContext(t);function i(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);