"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[649],{6034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"article/architecture-insight","title":"architecture-insight","description":"\ud83d\udcd8 \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435: \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043e\u0431\u0451\u0440\u0442\u043a\u0430","source":"@site/docs/article/architecture-insight.md","sourceDirName":"article","slug":"/article/architecture-insight","permalink":"/docs/article/architecture-insight","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/architecture-insight.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"History","permalink":"/docs/category/history"},"next":{"title":"\ud83d\udcdd \u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0434\u043b\u044f \u0425\u0430\u0431\u0440\u0430","permalink":"/docs/article/article-draft"}}');var i=s(4848),c=s(8453);const t={},l=void 0,d={},h=[{value:"\ud83d\udcd8 \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435: \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043e\u0431\u0451\u0440\u0442\u043a\u0430",id:"-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435-\u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435-\u044d\u0442\u043e-\u0431\u043e\u043b\u044c\u0448\u0435-\u0447\u0435\u043c-\u043e\u0431\u0451\u0440\u0442\u043a\u0430",level:2},{value:"\ud83e\udde0 \u0427\u0435\u043c \u043d\u0430\u0448 \u043f\u043e\u0434\u0445\u043e\u0434 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f?",id:"-\u0447\u0435\u043c-\u043d\u0430\u0448-\u043f\u043e\u0434\u0445\u043e\u0434-\u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f-\u043e\u0442-\u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",level:3},{value:"\ud83e\udde9 \u041a\u0430\u043a \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c?",id:"-\u043a\u0430\u043a-\u044d\u0442\u043e-\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c",level:3},{value:"\ud83d\udd2e \u0412 \u043a\u0430\u043a\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u044c\u0441\u044f?",id:"-\u0432-\u043a\u0430\u043a\u0443\u044e-\u0441\u0442\u043e\u0440\u043e\u043d\u0443-\u044d\u0442\u043e-\u043c\u043e\u0436\u0435\u0442-\u0440\u0430\u0437\u0432\u0438\u0442\u044c\u0441\u044f",level:3},{value:"\ud83e\udde0 \u0410 \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u043c Vitest?",id:"-\u0430-\u0447\u0442\u043e-\u0435\u0441\u043b\u0438-\u043c\u044b-\u043f\u0440\u043e\u0441\u0442\u043e-\u0437\u0430\u043c\u0435\u043d\u0438\u043c-vitest",level:3},{value:"\ud83d\udccc \u0412\u044b\u0432\u043e\u0434",id:"-\u0432\u044b\u0432\u043e\u0434",level:3}];function x(e){const n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435-\u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435-\u044d\u0442\u043e-\u0431\u043e\u043b\u044c\u0448\u0435-\u0447\u0435\u043c-\u043e\u0431\u0451\u0440\u0442\u043a\u0430",children:"\ud83d\udcd8 \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435: \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043e\u0431\u0451\u0440\u0442\u043a\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:['"\u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0431\u0451\u0440\u0442\u043a\u0430 \u043d\u0430\u0434 ',(0,i.jsx)(n.code,{children:"vitest"})," \u0438 ",(0,i.jsx)(n.code,{children:"allure"}),', \u0434\u0430?"']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0435\u0442. \u042d\u0442\u043e \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435.",(0,i.jsx)(n.br,{}),"\n","\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0451\u043c ",(0,i.jsx)(n.strong,{children:"DSL-\u0441\u043b\u043e\u0439"}),", \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-\u0447\u0435\u043c-\u043d\u0430\u0448-\u043f\u043e\u0434\u0445\u043e\u0434-\u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f-\u043e\u0442-\u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",children:"\ud83e\udde0 \u0427\u0435\u043c \u043d\u0430\u0448 \u043f\u043e\u0434\u0445\u043e\u0434 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f?"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u041f\u043e\u0434\u0445\u043e\u0434"}),(0,i.jsx)(n.th,{children:"\u0427\u0442\u043e \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442"}),(0,i.jsx)(n.th,{children:"\u041f\u0440\u0438\u043c\u0435\u0440"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Unit-\u0442\u0435\u0441\u0442"}),(0,i.jsx)(n.td,{children:"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"test('should format date', ...)"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BDD (Cucumber)"}),(0,i.jsx)(n.td,{children:"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 Gherkin"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Given-When-Then"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u041d\u0430\u0448 DSL"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"\u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441"})," \u0441 \u0448\u0430\u0433\u0430\u043c\u0438 \u0438 \u043c\u0435\u0442\u043a\u0430\u043c\u0438"]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"testCase({ id, feature }, () => ...)"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e. \u041c\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c ",(0,i.jsx)(n.strong,{children:"\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439"}),", \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0446\u0435\u043b\u0438 (\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, ",(0,i.jsx)(n.code,{children:"displayName"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["\u043c\u0435\u0442\u0430\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 (",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"severity"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0448\u0430\u0433\u043e\u0432 (",(0,i.jsx)(n.code,{children:"step"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (",(0,i.jsx)(n.code,{children:"attach"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"\u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-\u043a\u0430\u043a-\u044d\u0442\u043e-\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c",children:"\ud83e\udde9 \u041a\u0430\u043a \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DSL (Domain-Specific Language)"})," \u2014 \u0434\u0430, \u044d\u0442\u043e \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use-case based testing"})," \u2014 \u0434\u0430, \u043a\u0430\u0436\u0434\u044b\u0439 ",(0,i.jsx)(n.code,{children:"testCase"})," \u2014 \u044d\u0442\u043e \u0431\u0438\u0437\u043d\u0435\u0441-\u043a\u0435\u0439\u0441"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scenario-style API"})," \u2014 \u043a\u0430\u043a \u0432 Cypress \u0438\u043b\u0438 Playwright"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BDD?"})," \u2014 \u043f\u043e\u0447\u0442\u0438, \u043d\u043e \u043c\u044b \u0438\u0437\u0431\u0435\u0433\u0430\u0435\u043c ",(0,i.jsx)(n.code,{children:"Given-When-Then"})," \u0438 \u043e\u0441\u0442\u0430\u0451\u043c\u0441\u044f \u0432 TypeScript"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-\u0432-\u043a\u0430\u043a\u0443\u044e-\u0441\u0442\u043e\u0440\u043e\u043d\u0443-\u044d\u0442\u043e-\u043c\u043e\u0436\u0435\u0442-\u0440\u0430\u0437\u0432\u0438\u0442\u044c\u0441\u044f",children:"\ud83d\udd2e \u0412 \u043a\u0430\u043a\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u044c\u0441\u044f?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\ud83d\udce6 \u041c\u043e\u0434\u0443\u043b\u044c\u043d\u0430\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@casex/core"})," \u2014 DSL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@casex/runner-vitest"})," \u2014 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u043f\u043e\u0434 Vitest"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@casex/reporter-allure"})," \u2014 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 Allure"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@casex/reporter-console"})," \u2014 \u043f\u0440\u043e\u0441\u0442\u0430\u044f CLI-\u043e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\ud83d\udd0c \u041f\u043b\u0430\u0433\u0438\u043d\u044b:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"@casex/ci-github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"@casex/decorator-playwright"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"@casex/linter-rules"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-\u0430-\u0447\u0442\u043e-\u0435\u0441\u043b\u0438-\u043c\u044b-\u043f\u0440\u043e\u0441\u0442\u043e-\u0437\u0430\u043c\u0435\u043d\u0438\u043c-vitest",children:"\ud83e\udde0 \u0410 \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u043c Vitest?"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u0441\u0442\u0440\u0430\u0448\u043d\u043e\u0433\u043e. DSL \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f, \u0430 runner \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442\u044c."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u041c\u044b \u043e\u0442\u0434\u0435\u043b\u0438\u043b\u0438 ",(0,i.jsx)(n.strong,{children:"\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0435"})," (",(0,i.jsx)(n.code,{children:"testCase"}),") \u043e\u0442 ",(0,i.jsx)(n.strong,{children:"\u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f"})," (",(0,i.jsx)(n.code,{children:"test"}),"),",(0,i.jsx)(n.br,{}),"\n","\u0438 \u043e\u0442 ",(0,i.jsx)(n.strong,{children:"\u043e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438"})," (",(0,i.jsx)(n.code,{children:"allure"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u042d\u0442\u043e \u0438 \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b: \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-\u0432\u044b\u0432\u043e\u0434",children:"\ud83d\udccc \u0412\u044b\u0432\u043e\u0434"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scenax"})," \u2014 \u044d\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0430\u0445\u0430\u0440.",(0,i.jsx)(n.br,{}),"\n","\u042d\u0442\u043e ",(0,i.jsx)(n.strong,{children:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u0441\u0434\u0432\u0438\u0433 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432, \u0430 \u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."}),(0,i.jsx)(n.br,{}),"\n","\u0418 \u0442\u0435\u043f\u0435\u0440\u044c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0434\u0442\u0438 \u0434\u0430\u043b\u044c\u0448\u0435: \u043a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 beyond."]})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(6540);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);