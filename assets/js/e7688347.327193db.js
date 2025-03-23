"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[649],{6034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"article/architecture-insight","title":"Scenax \u2014 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e DSL: \u044d\u0442\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430","description":"\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f: \u201c\u041d\u0443, \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043e\u0431\u0451\u0440\u0442\u043a\u0443 \u043d\u0430\u0434 test() \u0438 allure.label(). \u0427\u0442\u043e \u0442\u0443\u0442 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0433\u043e?\u201d","source":"@site/docs/article/architecture-insight.md","sourceDirName":"article","slug":"/article/architecture-insight","permalink":"/docs/article/architecture-insight","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/architecture-insight.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"History","permalink":"/docs/category/history"},"next":{"title":"\ud83d\udcdd \u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0441\u0442\u0430\u0442\u044c\u0438 \u0434\u043b\u044f \u0425\u0430\u0431\u0440\u0430","permalink":"/docs/article/article-draft"}}');var c=s(4848),t=s(8453);const i={},l="Scenax \u2014 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e DSL: \u044d\u0442\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",d={},h=[{value:"\ud83e\udde0 \u0427\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u043c\u044b \u0438\u0437\u043e\u0431\u0440\u0435\u043b\u0438?",id:"-\u0447\u0442\u043e-\u0438\u043c\u0435\u043d\u043d\u043e-\u043c\u044b-\u0438\u0437\u043e\u0431\u0440\u0435\u043b\u0438",level:2},{value:"\u270d\ufe0f \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e",id:"\ufe0f-\u043f\u043e\u0447\u0435\u043c\u0443-\u044d\u0442\u043e-\u0432\u0430\u0436\u043d\u043e",level:2},{value:"\ud83d\udd0d Scenax = \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439",id:"-scenax--\u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f-\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439",level:2},{value:"\ud83d\ude80 \u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435?",id:"-\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"scenax--\u043d\u0435-\u043f\u0440\u043e\u0441\u0442\u043e-dsl-\u044d\u0442\u043e-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"Scenax \u2014 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e DSL: \u044d\u0442\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"})}),"\n",(0,c.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f: \u201c\u041d\u0443, \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043e\u0431\u0451\u0440\u0442\u043a\u0443 \u043d\u0430\u0434 ",(0,c.jsx)(n.code,{children:"test()"})," \u0438 ",(0,c.jsx)(n.code,{children:"allure.label()"}),". \u0427\u0442\u043e \u0442\u0443\u0442 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0433\u043e?\u201d"]}),"\n",(0,c.jsxs)(n.p,{children:["\u041c\u044b \u0442\u043e\u0436\u0435 \u0442\u0430\u043a \u0434\u0443\u043c\u0430\u043b\u0438. \u0410 \u043f\u043e\u0442\u043e\u043c \u043f\u043e\u043d\u044f\u043b\u0438: ",(0,c.jsx)(n.strong,{children:"\u044d\u0442\u043e \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0445\u0430\u0440. \u042d\u0442\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u043f\u0430\u0442\u0442\u0435\u0440\u043d."})]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0438\u043c\u0435\u043d\u043d\u043e-\u043c\u044b-\u0438\u0437\u043e\u0431\u0440\u0435\u043b\u0438",children:"\ud83e\udde0 \u0427\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u043c\u044b \u0438\u0437\u043e\u0431\u0440\u0435\u043b\u0438?"}),"\n",(0,c.jsx)(n.p,{children:"\u041c\u044b \u043e\u0442\u0434\u0435\u043b\u0438\u043b\u0438 3 \u0443\u0440\u043e\u0432\u043d\u044f:"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u0421\u043b\u043e\u0439"}),(0,c.jsx)(n.th,{children:"\u041e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"Scenax"})}),(0,c.jsx)(n.td,{children:"DSL, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f, \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"Vitest"})}),(0,c.jsx)(n.td,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435, \u0430\u0441\u0441\u0435\u0440\u0442\u044b, test-runner"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"Allure"})}),(0,c.jsx)(n.td,{children:"\u041e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c, \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f, TestOps"})]})]})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c ",(0,c.jsx)(n.code,{children:"allure.step()"}),". \u041c\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u044b \u0432 \u043b\u044e\u0431\u043e\u0439 \u0434\u0440\u0443\u0433\u043e\u0439 runtime."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441 \u0434\u0440\u0443\u0433\u0438\u043c ",(0,c.jsx)(n.code,{children:"runner"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,c.jsx)(n.code,{children:"Playwright"})," \u0438\u043b\u0438 ",(0,c.jsx)(n.code,{children:"Mocha"}),")"]}),"\n",(0,c.jsx)(n.li,{children:"\u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c Allure \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0442\u0447\u0451\u0442\u0447\u0438\u043a \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0435\u0441\u0442\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f"}),"\n",(0,c.jsx)(n.li,{children:"\u041e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 DSL \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0434\u043b\u044f API, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f UI \u0442\u0435\u0441\u0442\u043e\u0432"}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\ufe0f-\u043f\u043e\u0447\u0435\u043c\u0443-\u044d\u0442\u043e-\u0432\u0430\u0436\u043d\u043e",children:"\u270d\ufe0f \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e"}),"\n",(0,c.jsx)(n.p,{children:"\u041b\u044e\u0431\u0430\u044f \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u0420\u0430\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0432 \u0441\u0442\u0438\u043b\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432"}),"\n",(0,c.jsxs)(n.li,{children:["\u0414\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0448\u0430\u0433\u043e\u0432 (",(0,c.jsx)(n.code,{children:"copy-paste"}),")"]}),"\n",(0,c.jsx)(n.li,{children:"\u0420\u0430\u0437\u043d\u044b\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u043c\u0438 \u043e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u041c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u041e\u0434\u0438\u043d DSL \u0434\u043b\u044f \u0432\u0441\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),"\n",(0,c.jsx)(n.li,{children:"\u0415\u0434\u0438\u043d\u044b\u0439 \u0441\u043b\u043e\u0439 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0439 \u043e\u0442 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430"}),"\n",(0,c.jsx)(n.li,{children:"\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e QA, \u043d\u043e \u0438 \u0431\u0438\u0437\u043d\u0435\u0441\u0443"}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"-scenax--\u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f-\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439",children:"\ud83d\udd0d Scenax = \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0439"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"testCase('\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', async () => {\n  const res = await step('POST /users', () => api.createUser(...))\n  attach('\u041e\u0442\u0432\u0435\u0442', res.data)\n})\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0417\u0434\u0435\u0441\u044c ",(0,c.jsx)(n.strong,{children:"\u043d\u0435\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438"})," \u043a ",(0,c.jsx)(n.code,{children:"vitest"}),", ",(0,c.jsx)(n.code,{children:"jest"}),", ",(0,c.jsx)(n.code,{children:"cypress"})," \u0438\u043b\u0438 ",(0,c.jsx)(n.code,{children:"playwright"}),". \u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435",children:"\ud83d\ude80 \u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435?"}),"\n",(0,c.jsxs)(n.p,{children:["\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u044b \u043d\u0430\u0447\u043d\u0451\u043c \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0432 ",(0,c.jsx)(n.strong,{children:"\u0442\u0435\u0441\u0442-\u043a\u043b\u0430\u0441\u0441\u044b"})," \u0441 ",(0,c.jsx)(n.code,{children:"@TestCase"}),", ",(0,c.jsx)(n.code,{children:"@Feature"}),", ",(0,c.jsx)(n.code,{children:"@Severity"})," \u0438 \u043e\u0431\u0449\u0438\u043c ",(0,c.jsx)(n.code,{children:"runTestClass()"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["\u0422\u0435\u0441\u0442\u044b \u0441\u0442\u0430\u043d\u0443\u0442 \u0431\u043b\u0438\u0436\u0435 \u043a Cucumber, \u043d\u043e \u0431\u0435\u0437 Gherkin. \u0411\u0435\u0437 \u0448\u0430\u0433\u043e\u0432 ",(0,c.jsx)(n.code,{children:"Given/When/Then"}),", \u043d\u043e \u0441 \u0442\u043e\u0439 \u0436\u0435 \u043b\u043e\u0433\u0438\u043a\u043e\u0439: ",(0,c.jsx)(n.strong,{children:"\u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"\u27a1\ufe0f \u0413\u043e\u0442\u043e\u0432\u044b? \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043a\u043e \u0432\u0442\u043e\u0440\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438."})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(6540);const c={},t=r.createContext(c);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);