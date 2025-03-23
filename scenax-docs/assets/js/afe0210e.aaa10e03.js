"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[9695],{2910:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"article/iteration-7","title":"\ud83e\uddec \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 7: @BeforeAll, @AfterAll, @Setup(params) \u2014 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432","description":"\ud83c\udfaf \u0426\u0435\u043b\u044c","source":"@site/docs/article/iteration-7.md","sourceDirName":"article","slug":"/article/iteration-7","permalink":"/scenax-docs/docs/article/iteration-7","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/iteration-7.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83e\uddec \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 6: @Setup, @Teardown, @Context, @Inject \u2014 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u0438 shared state","permalink":"/scenax-docs/docs/article/iteration-6"},"next":{"title":"\ud83c\udfaf \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 8: @Step, @AutoRun() \u0438 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b \u0448\u0430\u0433\u043e\u0432","permalink":"/scenax-docs/docs/article/iteration-8-autorun-steps"}}');var t=s(4848),l=s(8453);const c={},i="\ud83e\uddec \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 7: @BeforeAll, @AfterAll, @Setup(params) \u2014 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432",d={},h=[{value:"\ud83c\udfaf \u0426\u0435\u043b\u044c",id:"-\u0446\u0435\u043b\u044c",level:2},{value:"\ud83e\udde0 \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",level:2},{value:"\u2705 \u0427\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438",id:"-\u0447\u0442\u043e-\u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438",level:2},{value:"\ud83d\udce6 \u041f\u0440\u0438\u043c\u0435\u0440",id:"-\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\ud83e\udd14 \u0410 \u043e\u0442\u043a\u0443\u0434\u0430 <code>params</code> \u0432 <code>@Setup()</code>?",id:"-\u0430-\u043e\u0442\u043a\u0443\u0434\u0430-params-\u0432-setup",level:2},{value:"\ud83d\udcca \u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0435\u0439 6",id:"-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0441-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0435\u0439-6",level:2},{value:"\ud83d\udccc \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442",id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442",level:2},{value:"\ud83d\ude80 \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433",id:"-\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439-\u0448\u0430\u0433",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f-7-beforeall-afterall-setupparams--\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432",children:["\ud83e\uddec \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 7: ",(0,t.jsx)(n.code,{children:"@BeforeAll"}),", ",(0,t.jsx)(n.code,{children:"@AfterAll"}),", ",(0,t.jsx)(n.code,{children:"@Setup(params)"})," \u2014 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432"]})}),"\n",(0,t.jsx)(n.h2,{id:"-\u0446\u0435\u043b\u044c",children:"\ud83c\udfaf \u0426\u0435\u043b\u044c"}),"\n",(0,t.jsxs)(n.p,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 (",(0,t.jsx)(n.code,{children:"@BeforeAll"}),", ",(0,t.jsx)(n.code,{children:"@AfterAll"}),")",(0,t.jsx)(n.br,{}),"\n","\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 (",(0,t.jsx)(n.code,{children:"@Setup(params)"}),")."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",children:"\ud83e\udde0 \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"}),"\n",(0,t.jsx)(n.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0434\u0435\u0441\u044f\u0442\u043a\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u043c\u043d\u043e\u0433\u0438\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 (\u043d\u043e \u043d\u0435 \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f 10 \u0440\u0430\u0437)"}),"\n",(0,t.jsx)(n.li,{children:"\u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043c\u043e\u0436\u0435\u0442 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 (\u044e\u0437\u0435\u0440\u044b, \u0441\u0435\u0441\u0441\u0438\u0438)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Setup()"})," \u043d\u0435 \u0437\u043d\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,t.jsx)(n.code,{children:".each()"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438",children:"\u2705 \u0427\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@BeforeAll()"})," \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f ",(0,t.jsx)(n.strong,{children:"\u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0434\u043e \u0432\u0441\u0435\u0445 \u0442\u0435\u0441\u0442\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0430"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@AfterAll()"})," \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f ",(0,t.jsx)(n.strong,{children:"\u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043f\u043e\u0441\u043b\u0435 \u0432\u0441\u0435\u0445 \u0442\u0435\u0441\u0442\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0430"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Setup(params)"})," \u2014 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,t.jsxs)(n.strong,{children:["\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438\u0437 ",(0,t.jsx)(n.code,{children:"@TestCase.each([...])"})]})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u043f\u0440\u0438\u043c\u0435\u0440",children:"\ud83d\udce6 \u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Context()\nctx!: { email?: string; status?: number; token?: string; log?: string[] }\n\n@BeforeAll()\ninitSuite() {\n  this.ctx.log = ['\ud83d\ude80 \u041d\u0430\u0447\u0438\u043d\u0430\u0435\u043c']\n}\n\n@AfterAll()\nfinishSuite() {\n  this.ctx.log?.push('\ud83c\udfc1 \u041a\u043e\u043d\u0435\u0446')\n  attach('\u041b\u043e\u0433', this.ctx.log?.join('\\n') ?? '', 'text/plain')\n}\n\n@Setup()\nprepare([email, expectedStatus]) {\n  this.ctx.email = email\n  this.ctx.status = expectedStatus\n  this.ctx.token = email + '-token'\n  this.ctx.log?.push(`\ud83d\udd27 \u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430: ${email}`)\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"-\u0430-\u043e\u0442\u043a\u0443\u0434\u0430-params-\u0432-setup",children:["\ud83e\udd14 \u0410 \u043e\u0442\u043a\u0443\u0434\u0430 ",(0,t.jsx)(n.code,{children:"params"})," \u0432 ",(0,t.jsx)(n.code,{children:"@Setup()"}),"?"]}),"\n",(0,t.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,t.jsx)(n.code,{children:"@TestCase.each(...)"}),", \u043c\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u0440\u044f\u043c\u043e \u0432 ",(0,t.jsx)(n.code,{children:"@Setup()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Setup()\nprepare([email, status]) { ... } // email \u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u0438\u0437 each()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u0431\u044b\u0447\u043d\u044b\u0439 ",(0,t.jsx)(n.code,{children:"@TestCase(...)"})," \u2014 ",(0,t.jsx)(n.code,{children:"@Setup()"})," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435-\u0441-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0435\u0439-6",children:"\ud83d\udcca \u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u0441 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0435\u0439 6"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u0416\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u0439 \u0446\u0438\u043a\u043b"}),(0,t.jsx)(n.th,{children:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e"}),(0,t.jsx)(n.th,{children:"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Setup()"})}),(0,t.jsx)(n.td,{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u043a\u0430\u0436\u0434\u044b\u043c"}),(0,t.jsxs)(n.td,{children:["\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a ",(0,t.jsx)(n.code,{children:"beforeEach()"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Setup(params)"})}),(0,t.jsx)(n.td,{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438"}),(0,t.jsxs)(n.td,{children:["\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 ",(0,t.jsx)(n.code,{children:".each()"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@BeforeAll()"})}),(0,t.jsx)(n.td,{children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,t.jsx)(n.td,{children:"\u041e\u0434\u0438\u043d \u0440\u0430\u0437 \u043d\u0430 \u0432\u0435\u0441\u044c \u043a\u043b\u0430\u0441\u0441"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@AfterAll()"})}),(0,t.jsx)(n.td,{children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435, \u043e\u0447\u0438\u0441\u0442\u043a\u0430"}),(0,t.jsx)(n.td,{children:"\u041e\u0434\u0438\u043d \u0440\u0430\u0437 \u043f\u043e\u0441\u043b\u0435 \u0432\u0441\u0435\u0445"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442",children:"\ud83d\udccc \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0421\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u043c \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (",(0,t.jsx)(n.code,{children:"login"}),", ",(0,t.jsx)(n.code,{children:"createProject"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u041f\u043e\u0432\u044b\u0448\u0430\u0435\u043c \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c (",(0,t.jsx)(n.code,{children:"@Setup([email, status])"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"\u0421\u0442\u0440\u043e\u0438\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 e2e lifecycle"}),"\n",(0,t.jsxs)(n.li,{children:["\u0423\u043b\u0443\u0447\u0448\u0430\u0435\u043c Allure-\u0440\u0435\u043f\u043e\u0440\u0442\u044b \u0441 ",(0,t.jsx)(n.code,{children:"attach(log)"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439-\u0448\u0430\u0433",children:"\ud83d\ude80 \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Step()"})," \u0434\u043b\u044f \u043c\u0435\u0442\u043e\u0434\u043e\u0432"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@BeforeEachStep()"})," / ",(0,t.jsx)(n.code,{children:"@BeforeEachCase()"})]}),"\n",(0,t.jsx)(n.li,{children:"\u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0448\u0430\u0433\u0438 \u0432 \u0441\u0442\u0438\u043b\u0435 Playwright / Serenity"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const t={},l=r.createContext(t);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);