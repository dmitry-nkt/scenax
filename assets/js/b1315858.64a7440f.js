"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[676],{3198:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"article/iteration-3-each-vs-testeach","title":"iteration-3-each-vs-testeach","description":"\ud83d\udcad \xab\u041f\u043e\u0441\u0442\u043e\u0439\u0442\u0435\u2026 \u0410 \u0447\u0435\u043c \u044d\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e test.each?\xbb","source":"@site/docs/article/iteration-3-each-vs-testeach.md","sourceDirName":"article","slug":"/article/iteration-3-each-vs-testeach","permalink":"/docs/article/iteration-3-each-vs-testeach","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/iteration-3-each-vs-testeach.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddf1 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 runTestClass()","permalink":"/docs/article/iteration-2"},"next":{"title":"iteration-3-enhancement","permalink":"/docs/article/iteration-3-enhancement"}}');var c=n(4848),r=n(8453);const d={},i=void 0,l={},h=[{value:"\ud83d\udcad \xab\u041f\u043e\u0441\u0442\u043e\u0439\u0442\u0435\u2026 \u0410 \u0447\u0435\u043c \u044d\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e <code>test.each</code>?\xbb",id:"-\u043f\u043e\u0441\u0442\u043e\u0439\u0442\u0435-\u0430-\u0447\u0435\u043c-\u044d\u0442\u043e-\u043b\u0443\u0447\u0448\u0435-\u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e-testeach",level:2},{value:"\ud83e\udd1c test.each \u2014 \u044d\u0442\u043e \u0443\u0434\u043e\u0431\u043d\u043e. \u041d\u043e\u2026",id:"-testeach--\u044d\u0442\u043e-\u0443\u0434\u043e\u0431\u043d\u043e-\u043d\u043e",level:3},{value:"\ud83c\udfaf \u0410 \u0432\u043e\u0442 <code>@TestCase.each</code> \u2014 \u0443\u0436\u0435 \u043f\u0440\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438",id:"-\u0430-\u0432\u043e\u0442-testcaseeach--\u0443\u0436\u0435-\u043f\u0440\u043e-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438",level:2},{value:"\ud83d\udcca \u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435",id:"-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435",level:3},{value:"\ud83d\udca1 \u0412\u044b\u0432\u043e\u0434",id:"-\u0432\u044b\u0432\u043e\u0434",level:3}];function a(e){const s={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h2,{id:"-\u043f\u043e\u0441\u0442\u043e\u0439\u0442\u0435-\u0430-\u0447\u0435\u043c-\u044d\u0442\u043e-\u043b\u0443\u0447\u0448\u0435-\u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e-testeach",children:["\ud83d\udcad \xab\u041f\u043e\u0441\u0442\u043e\u0439\u0442\u0435\u2026 \u0410 \u0447\u0435\u043c \u044d\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e ",(0,c.jsx)(s.code,{children:"test.each"}),"?\xbb"]}),"\n",(0,c.jsx)(s.p,{children:"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441."}),"\n",(0,c.jsx)(s.p,{children:"\u0412\u044b, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u0443\u043c\u0430\u0435\u0442\u0435:"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsxs)(s.p,{children:["\xab\u041e\u043a\u0435\u0439, \u044f \u0432\u0438\u0436\u0443 ",(0,c.jsx)(s.code,{children:"@TestCase.each"}),", \u043a\u0440\u0430\u0441\u0438\u0432\u043e, \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u2026",(0,c.jsx)(s.br,{}),"\n","\u041d\u043e \u0432\u0435\u0434\u044c \u0443 Vitest \u0443\u0436\u0435 \u0435\u0441\u0442\u044c ",(0,c.jsx)(s.code,{children:"test.each(...)"})," \u2014 \u0440\u0430\u0437\u0432\u0435 \u043d\u0435 \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435?\xbb"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u0420\u0430\u0437\u0431\u0435\u0440\u0451\u043c \u043f\u043e \u043f\u043e\u043b\u043e\u0447\u043a\u0430\u043c."}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"-testeach--\u044d\u0442\u043e-\u0443\u0434\u043e\u0431\u043d\u043e-\u043d\u043e",children:"\ud83e\udd1c test.each \u2014 \u044d\u0442\u043e \u0443\u0434\u043e\u0431\u043d\u043e. \u041d\u043e\u2026"}),"\n",(0,c.jsx)(s.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u0432\u044b \u043f\u0438\u0448\u0435\u0442\u0435 \u0442\u0430\u043a:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ts",children:"test.each([\n  ['email1', 'pass1', 200],\n  ['email2', 'pass2', 401],\n])('Login for %s', ...)\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u2014 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u044b\u0439, \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u0441\u0442."}),"\n",(0,c.jsx)(s.p,{children:"\u041d\u043e \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u0438\u0442\u044c \u0444\u0438\u0447\u0443 (",(0,c.jsx)(s.code,{children:"@Feature('\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f')"}),")"]}),"\n",(0,c.jsxs)(s.li,{children:["\u041f\u043e\u0432\u0435\u0441\u0438\u0442\u044c ID \u043d\u0430 \u0442\u0435\u0441\u0442 (",(0,c.jsx)(s.code,{children:"AS_ID"}),", ",(0,c.jsx)(s.code,{children:"TMS"}),", ",(0,c.jsx)(s.code,{children:"Issue"}),")"]}),"\n",(0,c.jsx)(s.li,{children:"\u041f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c severity \u0438\u043b\u0438 owner"}),"\n",(0,c.jsx)(s.li,{children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0448\u0430\u0433\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0442\u0447\u0451\u0442\u0430"}),"\n",(0,c.jsx)(s.li,{children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0438\u0442\u044c response JSON \u0432 Allure"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u0412\u0441\u0451 \u044d\u0442\u043e \u0432\u0430\u043c \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0441 \u043a\u0443\u0447\u0435\u0439 ",(0,c.jsx)(s.code,{children:"allure.label(...)"}),", ",(0,c.jsx)(s.code,{children:"allure.step(...)"})," \u0438 ",(0,c.jsx)(s.code,{children:"allure.attachment(...)"}),"."]}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsxs)(s.h2,{id:"-\u0430-\u0432\u043e\u0442-testcaseeach--\u0443\u0436\u0435-\u043f\u0440\u043e-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438",children:["\ud83c\udfaf \u0410 \u0432\u043e\u0442 ",(0,c.jsx)(s.code,{children:"@TestCase.each"})," \u2014 \u0443\u0436\u0435 \u043f\u0440\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-ts",children:"@TestCase.each([\n  ['admin@example.com', 'admin123', 200],\n  ['user@example.com', 'user123', 200],\n])('\u041b\u043e\u0433\u0438\u043d \u0434\u043b\u044f %s', { severity: 'critical' })\nasync login(email, password, expectedStatus) {\n  ...\n}\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u0418 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u2705 \u041e\u0434\u0438\u043d \u043c\u0435\u0442\u043e\u0434 \u2192 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u0435\u0439\u0441\u043e\u0432"}),"\n",(0,c.jsxs)(s.li,{children:["\u2705 \u041c\u0435\u0442\u043a\u0438 (",(0,c.jsx)(s.code,{children:"severity"}),", ",(0,c.jsx)(s.code,{children:"feature"}),") \u2014 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u044b"]}),"\n",(0,c.jsx)(s.li,{children:"\u2705 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0435\u0439\u0441\u0430 \u2014 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u043e\u0435"}),"\n",(0,c.jsx)(s.li,{children:"\u2705 \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0432 Allure"}),"\n",(0,c.jsx)(s.li,{children:"\u2705 \u0412\u0435\u0441\u044c \u043e\u0442\u0447\u0451\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d: \u0448\u0430\u0433\u0438, \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\n"]}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435",children:"\ud83d\udcca \u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440"}),(0,c.jsx)(s.th,{children:(0,c.jsx)(s.code,{children:"test.each(...)"})}),(0,c.jsx)(s.th,{children:(0,c.jsx)(s.code,{children:"@TestCase.each(...)"})})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0441\u0442\u044c"}),(0,c.jsx)(s.td,{children:"\u2705"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0442\u0447\u0451\u0442\u0430"}),(0,c.jsx)(s.td,{children:"\u274c"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u041c\u0435\u0442\u043a\u0438, severity"}),(0,c.jsx)(s.td,{children:"\u274c"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f"}),(0,c.jsx)(s.td,{children:"\u2705"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432"}),(0,c.jsx)(s.td,{children:"\u274c"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0441\u0442\u044c"}),(0,c.jsx)(s.td,{children:"\u26a0\ufe0f \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430"}),(0,c.jsx)(s.td,{children:"\u2705 \u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u0430\u044f"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 TestOps"}),(0,c.jsx)(s.td,{children:"\u274c"}),(0,c.jsx)(s.td,{children:"\u2705"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"\ud83d\udca1 \u041c\u043e\u0434\u0435\u043b\u044c \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f"}),(0,c.jsx)(s.td,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f"}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.strong,{children:"\u0422\u0435\u0441\u0442-\u043a\u0435\u0439\u0441"})})]})]})]}),"\n",(0,c.jsx)(s.hr,{}),"\n",(0,c.jsx)(s.h3,{id:"-\u0432\u044b\u0432\u043e\u0434",children:"\ud83d\udca1 \u0412\u044b\u0432\u043e\u0434"}),"\n",(0,c.jsxs)(s.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0442\u0435\u0441\u0442 3 \u0440\u0430\u0437\u0430 \u2014 ",(0,c.jsx)(s.code,{children:"test.each"})," \u0432\u0430\u0441 \u0441\u043f\u0430\u0441\u0451\u0442.",(0,c.jsx)(s.br,{}),"\n","\u041d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0435 ",(0,c.jsx)(s.strong,{children:"\u0431\u0438\u0437\u043d\u0435\u0441-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438"}),", \u0445\u043e\u0442\u0438\u0442\u0435 ",(0,c.jsx)(s.strong,{children:"\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u0447\u0451\u0442\u044b"})," \u0438 ",(0,c.jsx)(s.strong,{children:"\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u044b\u0439 DSL"}),",",(0,c.jsx)(s.br,{}),"\n","\u0442\u043e ",(0,c.jsx)(s.code,{children:"@TestCase.each"})," \u2014 \u044d\u0442\u043e \u0443\u0436\u0435 \u044f\u0437\u044b\u043a, \u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0443\u0434\u043e\u0431\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f.",(0,c.jsx)(s.br,{}),"\n","\u041f\u043e \u0441\u0443\u0442\u0438, \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u0451\u043c ",(0,c.jsx)(s.strong,{children:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u043d\u0430 \u0431\u0430\u0437\u0435 Vitest"}),",\n\u043d\u0435 \u043a\u043e\u043d\u043a\u0443\u0440\u0438\u0440\u0443\u044f \u0441 \u043d\u0438\u043c, \u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044f \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043b\u043e\u0439."]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var t=n(6540);const c={},r=t.createContext(c);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);