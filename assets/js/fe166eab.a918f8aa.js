"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[895],{1805:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"article/iteration-2","title":"\u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 runTestClass()","description":"\ud83c\udfaf \u0426\u0435\u043b\u044c","source":"@site/docs/article/iteration-2.md","sourceDirName":"article","slug":"/article/iteration-2","permalink":"/docs/article/iteration-2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/iteration-2.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 1: DSL-\u043e\u0431\u0451\u0440\u0442\u043a\u0430 testCase, step, attach","permalink":"/docs/article/iteration-1"},"next":{"title":"\ud83d\udd01 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 3: \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0441 @TestCase.each","permalink":"/docs/article/iteration-3"}}');var t=s(4848),c=s(8453);const i={},l="\u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 runTestClass()",d={},h=[{value:"\ud83c\udfaf \u0426\u0435\u043b\u044c",id:"-\u0446\u0435\u043b\u044c",level:2},{value:"\ud83e\udd14 \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",level:2},{value:"\u2705 \u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u2014 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043a\u043b\u0430\u0441\u0441\u0430\u043c",id:"-\u0440\u0435\u0448\u0435\u043d\u0438\u0435--\u043f\u0435\u0440\u0435\u0439\u0442\u0438-\u043a-\u043a\u043b\u0430\u0441\u0441\u0430\u043c",level:2},{value:"\ud83d\udd27 \u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b\u0438",id:"-\u0447\u0442\u043e-\u0441\u0434\u0435\u043b\u0430\u043b\u0438",level:2},{value:"\ud83d\udcda \u041f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0441\u0442\u0438\u043b\u0435 Scenax",id:"-\u043f\u0440\u0438\u043c\u0435\u0440-\u0432-\u0441\u0442\u0438\u043b\u0435-scenax",level:2},{value:"\ud83e\udde9 \u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u043b\u0430\u0441\u0441 \u0432 Scenax?",id:"-\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u043a\u043b\u0430\u0441\u0441-\u0432-scenax",level:2},{value:"\u2733\ufe0f \u0424\u0438\u0447\u0430 \u0438\u043b\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c?",id:"\ufe0f-\u0444\u0438\u0447\u0430-\u0438\u043b\u0438-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c",level:3},{value:"\ud83d\udd27 \u0427\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0432\u0435\u0441\u0438\u0442\u044c \u043d\u0430 \u043a\u043b\u0430\u0441\u0441?",id:"-\u0447\u0442\u043e-\u043c\u043e\u0436\u043d\u043e-\u043f\u043e\u0432\u0435\u0441\u0438\u0442\u044c-\u043d\u0430-\u043a\u043b\u0430\u0441\u0441",level:3},{value:"\ud83d\udce6 \u041a\u043b\u0430\u0441\u0441 \u2014 \u044d\u0442\u043e:",id:"-\u043a\u043b\u0430\u0441\u0441--\u044d\u0442\u043e",level:3},{value:"\ud83e\udde0 \u041f\u043e\u0447\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u044b?",id:"-\u043f\u043e\u0447\u0435\u043c\u0443-\u043a\u043b\u0430\u0441\u0441\u044b",level:2},{value:"\ud83d\udcc8 \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435",id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442-\u043d\u0430-\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435",level:2},{value:"\ud83d\udd1c \u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435",id:"-\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435",level:2}];function a(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f-2-\u043a\u043b\u0430\u0441\u0441\u044b-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b-\u0438-runtestclass",children:["\u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 ",(0,t.jsx)(n.code,{children:"runTestClass()"})]})}),"\n",(0,t.jsx)(n.h2,{id:"-\u0446\u0435\u043b\u044c",children:"\ud83c\udfaf \u0426\u0435\u043b\u044c"}),"\n",(0,t.jsxs)(n.p,{children:["\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u0441\u0442\u044b \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0432 ",(0,t.jsx)(n.strong,{children:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u043b\u0430\u0441\u0441\u044b"}),", \u0447\u0442\u043e\u0431\u044b:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0433\u043e\u0432"}),"\n",(0,t.jsx)(n.li,{children:"\u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c"}),"\n",(0,t.jsx)(n.li,{children:"\u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",children:"\ud83e\udd14 \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u044b \u043f\u0438\u0441\u0430\u043b\u0438 \u0442\u0435\u0441\u0442\u044b \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"testCase('\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f', async () => {\n  const res = await step('GET /profile', () => api.getProfile())\n  attach('\u041e\u0442\u0432\u0435\u0442', res.data)\n  expect(res.status).toBe(200)\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u042d\u0442\u043e \u0447\u0438\u0442\u0430\u0435\u043c\u043e, \u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043b\u043e\u0433\u0438\u043a\u0438 \u2014 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0435\u0441\u043b\u0438 \u0432 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u043c\u043d\u043e\u0433\u043e \u0448\u0430\u0433\u043e\u0432 \u0438\u043b\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e."}),"\n",(0,t.jsx)(n.p,{children:"\u041d\u0430\u043c \u043d\u0443\u0436\u043d\u043e:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,t.jsx)(n.code,{children:"this.ctx"})]}),"\n",(0,t.jsx)(n.li,{children:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0433\u0438 \u043a\u0430\u043a \u043c\u0435\u0442\u043e\u0434\u044b"}),"\n",(0,t.jsx)(n.li,{children:"\u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u044b \u043f\u043e \u043a\u043b\u0430\u0441\u0441\u0430\u043c \u0438 feature"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0440\u0435\u0448\u0435\u043d\u0438\u0435--\u043f\u0435\u0440\u0435\u0439\u0442\u0438-\u043a-\u043a\u043b\u0430\u0441\u0441\u0430\u043c",children:"\u2705 \u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u2014 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043a\u043b\u0430\u0441\u0441\u0430\u043c"}),"\n",(0,t.jsxs)(n.p,{children:["\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432 ",(0,t.jsx)(n.code,{children:"@Feature"}),", ",(0,t.jsx)(n.code,{children:"@TestCase"}),", ",(0,t.jsx)(n.code,{children:"@Severity"})," \u0438 ",(0,t.jsx)(n.code,{children:"runTestClass()"})," \u043c\u044b \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043a\u0430\u0436\u0434\u044b\u0439 \u0442\u0435\u0441\u0442 \u0432 \u043c\u0435\u0442\u043e\u0434, \u0430 \u0432\u0435\u0441\u044c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u2014 \u0432 \u043a\u043b\u0430\u0441\u0441."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Feature('\u041f\u0440\u043e\u0444\u0438\u043b\u044c')\nclass ProfileTest {\n  @TestCase('\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f', { id: 'API-102', severity: 'critical' })\n  async testProfile() {\n    const res = await step('GET /profile', () => api.getProfile())\n    attach('\u041e\u0442\u0432\u0435\u0442', res.data)\n    expect(res.status).toBe(200)\n  }\n}\n\nrunTestClass(ProfileTest)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0441\u0434\u0435\u043b\u0430\u043b\u0438",children:"\ud83d\udd27 \u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b\u0438"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u043b\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,t.jsx)(n.code,{children:"@TestCase(name, meta)"})," \u0434\u043b\u044f \u043c\u0435\u0442\u043e\u0434\u0430"]}),"\n",(0,t.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u043b\u0438 ",(0,t.jsx)(n.code,{children:"@Feature"})," \u0438 ",(0,t.jsx)(n.code,{children:"@Severity"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u041d\u0430\u043f\u0438\u0441\u0430\u043b\u0438 ",(0,t.jsx)(n.code,{children:"runTestClass()"})," \u2014 \u0430\u0434\u0430\u043f\u0442\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0432 ",(0,t.jsx)(n.code,{children:"test()"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export function runTestClass(clazz) {\n  const instance = new clazz()\n  const proto = Object.getPrototypeOf(instance)\n\n  for (const key of Object.getOwnPropertyNames(proto)) {\n    const method = proto[key]\n    const meta = Reflect.getMetadata('testcase', instance, key)\n\n    if (typeof method === 'function' && meta) {\n      test(meta.name, async () => {\n        if (meta.id) await label('AS_ID', meta.id)\n        if (meta.severity) await severity(meta.severity)\n        await method.call(instance)\n      })\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u043f\u0440\u0438\u043c\u0435\u0440-\u0432-\u0441\u0442\u0438\u043b\u0435-scenax",children:"\ud83d\udcda \u041f\u0440\u0438\u043c\u0435\u0440 \u0432 \u0441\u0442\u0438\u043b\u0435 Scenax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Feature('\u041f\u0440\u043e\u0444\u0438\u043b\u044c')\nclass ProfileTest {\n  @TestCase('\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', { id: 'API-103', severity: 'normal' })\n  async checkName() {\n    const res = await step('GET /profile', () => api.getProfile())\n    expect(res.data.name).toBe('\u0418\u0432\u0430\u043d')\n  }\n\n  @TestCase('\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 email')\n  async checkEmail() {\n    const res = await step('GET /profile', () => api.getProfile())\n    expect(res.data.email).toMatch(/@example\\.com/)\n  }\n}\n\nrunTestClass(ProfileTest)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-\u043a\u043b\u0430\u0441\u0441-\u0432-scenax",children:"\ud83e\udde9 \u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043a\u043b\u0430\u0441\u0441 \u0432 Scenax?"}),"\n",(0,t.jsxs)(n.p,{children:["\u041a\u043b\u0430\u0441\u0441 \u0432 ",(0,t.jsx)(n.code,{children:"Scenax"})," \u2014 \u044d\u0442\u043e ",(0,t.jsx)(n.strong,{children:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u0430\u044f \u0435\u0434\u0438\u043d\u0438\u0446\u0430"}),", \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 ",(0,t.jsx)(n.strong,{children:"\u0431\u0438\u0437\u043d\u0435\u0441-\u0444\u0438\u0447\u0438"})," \u0438\u043b\u0438 ",(0,t.jsx)(n.strong,{children:"\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"\u0412 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u042d\u0442\u043e ",(0,t.jsx)(n.strong,{children:"\u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u043c\u0435\u0442\u043e\u0434\u043e\u0432"})," \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f"]}),"\n",(0,t.jsx)(n.li,{children:"\u041e\u043d \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0442\u0435\u0441\u0442-\u043a\u0435\u0439\u0441\u044b \u043f\u043e \u043b\u043e\u0433\u0438\u043a\u0435, \u0430 \u043d\u0435 \u043f\u043e \u0442\u0438\u043f\u0443"}),"\n",(0,t.jsx)(n.li,{children:"\u041e\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0438\u0446\u0435\u0439 \u0432 Allure-\u043e\u0442\u0447\u0451\u0442\u0435, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-\u0444\u0438\u0447\u0430-\u0438\u043b\u0438-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c",children:"\u2733\ufe0f \u0424\u0438\u0447\u0430 \u0438\u043b\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c?"}),"\n",(0,t.jsxs)(n.p,{children:["\u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u2014 ",(0,t.jsx)(n.strong,{children:"\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c"}),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,t.jsx)(n.code,{children:"ProfileTest"}),", ",(0,t.jsx)(n.code,{children:"AuthFlow"}),", ",(0,t.jsx)(n.code,{children:"PaymentChecks"}),".",(0,t.jsx)(n.br,{}),"\n","\u041d\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438 ",(0,t.jsx)(n.strong,{children:"\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0442\u0435\u0441\u0442\u043e\u0432"}),": ",(0,t.jsx)(n.code,{children:"RegressionSuite"}),", ",(0,t.jsx)(n.code,{children:"MobileAPITests"}),", ",(0,t.jsx)(n.code,{children:"UnauthorizedFlows"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-\u0447\u0442\u043e-\u043c\u043e\u0436\u043d\u043e-\u043f\u043e\u0432\u0435\u0441\u0438\u0442\u044c-\u043d\u0430-\u043a\u043b\u0430\u0441\u0441",children:"\ud83d\udd27 \u0427\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0432\u0435\u0441\u0438\u0442\u044c \u043d\u0430 \u043a\u043b\u0430\u0441\u0441?"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440"}),(0,t.jsx)(n.th,{children:"\u0413\u0434\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f"}),(0,t.jsx)(n.th,{children:"\u0427\u0442\u043e \u0437\u0430\u0434\u0430\u0451\u0442"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Feature('Profile')"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043a\u043b\u0430\u0441\u0441"}),(0,t.jsx)(n.td,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441-\u0444\u0438\u0447\u0438"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Suite('API')"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043a\u043b\u0430\u0441\u0441"}),(0,t.jsx)(n.td,{children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0432 Allure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@ParentSuite('E2E')"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043a\u043b\u0430\u0441\u0441"}),(0,t.jsx)(n.td,{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f (UI, e2e, regression \u0438 \u0442.\u043f.)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Layer('e2e')"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043a\u043b\u0430\u0441\u0441"}),(0,t.jsx)(n.td,{children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Context()"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043f\u043e\u043b\u0435"}),(0,t.jsx)(n.td,{children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0451\u0442 shared state \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@Inject()"})}),(0,t.jsx)(n.td,{children:"\u043d\u0430 \u043f\u043e\u043b\u0435"}),(0,t.jsx)(n.td,{children:"\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 step-\u043a\u043b\u0430\u0441\u0441\u044b"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-\u043a\u043b\u0430\u0441\u0441--\u044d\u0442\u043e",children:"\ud83d\udce6 \u041a\u043b\u0430\u0441\u0441 \u2014 \u044d\u0442\u043e:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0442\u0435\u0441\u0442\u043e\u0432"})," \u0441 \u0435\u0434\u0438\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u043c"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"\u041d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441"}),", \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c ",(0,t.jsx)(n.code,{children:"Feature"}),", ",(0,t.jsx)(n.code,{children:"Suite"}),", ",(0,t.jsx)(n.code,{children:"Layer"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"})," \u0434\u043b\u044f Lifecycle-\u0445\u0443\u043a\u043e\u0432 (",(0,t.jsx)(n.code,{children:"@BeforeAll"}),", ",(0,t.jsx)(n.code,{children:"@Setup"}),", ",(0,t.jsx)(n.code,{children:"@Teardown"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.strong,{children:"\u0415\u0434\u0438\u043d\u0438\u0446\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432 Allure \u043a\u0430\u043a \u043c\u043e\u0434\u0443\u043b\u044c"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ud83d\udca1 \u041a\u043b\u0430\u0441\u0441 \u0434\u0435\u043b\u0430\u0435\u0442 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 \u0442\u0435\u0441\u0442\u043e\u0432 \u044f\u0432\u043d\u043e\u0439, \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0439 \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u043e\u0439"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"-\u043f\u043e\u0447\u0435\u043c\u0443-\u043a\u043b\u0430\u0441\u0441\u044b",children:"\ud83e\udde0 \u041f\u043e\u0447\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u044b?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2705 \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0448\u0430\u0440\u0438\u0442\u044c ",(0,t.jsx)(n.code,{children:"this.ctx"}),", ",(0,t.jsx)(n.code,{children:"this.client"}),", ",(0,t.jsx)(n.code,{children:"this.steps"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 \u041b\u0435\u0433\u043a\u043e \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u044b \u043f\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (",(0,t.jsx)(n.code,{children:"@Feature('Profile')"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c lifecycle (",(0,t.jsx)(n.code,{children:"@BeforeAll"}),", ",(0,t.jsx)(n.code,{children:"@Setup"}),", ",(0,t.jsx)(n.code,{children:"@Teardown"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"\u2705 \u041f\u0440\u0438\u0432\u044b\u0447\u043d\u043e \u0434\u043b\u044f backend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440\u043e\u0432"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u041c\u044b \u043d\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c Vitest. \u041c\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u044d\u0442\u043e-\u0434\u0430\u0451\u0442-\u043d\u0430-\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435",children:"\ud83d\udcc8 \u0427\u0442\u043e \u044d\u0442\u043e \u0434\u0430\u0451\u0442 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u0411\u044b\u043b\u043e"}),(0,t.jsx)(n.th,{children:"\u0421\u0442\u0430\u043b\u043e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"testCase(name, fn)"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"@TestCase()"})," \u043d\u0430\u0434 \u043c\u0435\u0442\u043e\u0434\u043e\u043c"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u041c\u0435\u0442\u043a\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043b\u0430 \u0442\u0435\u0441\u0442\u0430"}),(0,t.jsx)(n.td,{children:"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u043d\u0430\u0434 \u043c\u0435\u0442\u043e\u0434\u043e\u043c/\u043a\u043b\u0430\u0441\u0441\u043e\u043c"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u041e\u0434\u0438\u043d \u0442\u0435\u0441\u0442 = \u043e\u0434\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f"}),(0,t.jsx)(n.td,{children:"\u041e\u0434\u0438\u043d \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 = \u043e\u0434\u0438\u043d \u043a\u043b\u0430\u0441\u0441"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"\u041d\u0435\u0442 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"this.ctx"}),", ",(0,t.jsx)(n.code,{children:"this.steps"}),", \u0438 \u0434\u0440."]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-\u0447\u0442\u043e-\u0434\u0430\u043b\u044c\u0448\u0435",children:"\ud83d\udd1c \u0427\u0442\u043e \u0434\u0430\u043b\u044c\u0448\u0435"}),"\n",(0,t.jsxs)(n.p,{children:["\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u2014 \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0442\u0435\u0441\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 ",(0,t.jsx)(n.code,{children:"@TestCase.each()"})," \u0438 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043f\u0435\u0440\u0432\u0443\u044e \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0443\u044e data-driven \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443."]}),"\n",(0,t.jsx)(n.p,{children:"\u27a1\ufe0f \u041a \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044e \u2014 \u043c\u043d\u043e\u0433\u043e \u0432\u0445\u043e\u0434\u043e\u0432. \u041c\u043d\u043e\u0433\u043e \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u0434\u0438\u043d \u0441\u0442\u0438\u043b\u044c."})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(6540);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);