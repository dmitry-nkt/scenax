"use strict";(self.webpackChunkscenax_docs=self.webpackChunkscenax_docs||[]).push([[895],{1805:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"article/iteration-2","title":"\ud83e\uddf1 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 runTestClass()","description":"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 testCase() \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438, \u0441\u0442\u0430\u043b\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u043e, \u0447\u0442\u043e \u0442\u0435\u0441\u0442\u044b \u043d\u0443\u0436\u043d\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c.","source":"@site/docs/article/iteration-2.md","sourceDirName":"article","slug":"/article/iteration-2","permalink":"/docs/article/iteration-2","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/article/iteration-2.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\ude80 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 1: DSL-\u043e\u0431\u0451\u0440\u0442\u043a\u0430 testCase, step, attach","permalink":"/docs/article/iteration-1"},"next":{"title":"iteration-3-each-vs-testeach","permalink":"/docs/article/iteration-3-each-vs-testeach"}}');var r=s(4848),a=s(8453);const i={},c="\ud83e\uddf1 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 runTestClass()",l={},o=[{value:"\ud83e\udde9 \u0426\u0435\u043b\u044c",id:"-\u0446\u0435\u043b\u044c",level:2},{value:"\ud83d\udce6 \u041f\u0440\u0438\u043c\u0435\u0440: \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0441 \u0442\u0440\u0435\u043c\u044f \u043a\u0435\u0439\u0441\u0430\u043c\u0438",id:"-\u043f\u0440\u0438\u043c\u0435\u0440-\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439-\u043a\u043b\u0430\u0441\u0441-\u0441-\u0442\u0440\u0435\u043c\u044f-\u043a\u0435\u0439\u0441\u0430\u043c\u0438",level:2},{value:"\u2699\ufe0f \u041f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c",id:"\ufe0f-\u043f\u043e\u0434-\u043a\u0430\u043f\u043e\u0442\u043e\u043c",level:2},{value:"\ud83d\udca1 \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e",id:"-\u043f\u043e\u0447\u0435\u043c\u0443-\u044d\u0442\u043e-\u0432\u0430\u0436\u043d\u043e",level:2},{value:"\ud83e\udde0 \u041f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c: \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u043d\u0435 <code>step</code>",id:"-\u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0439-\u043a\u0430\u043c\u0435\u043d\u044c-\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432\u043d\u0435-step",level:2},{value:"\u2705 \u0418\u0442\u043e\u0433",id:"-\u0438\u0442\u043e\u0433",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"-\u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f-2-\u043a\u043b\u0430\u0441\u0441\u044b-\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b-\u0438-runtestclass",children:["\ud83e\uddf1 \u0418\u0442\u0435\u0440\u0430\u0446\u0438\u044f 2: \u041a\u043b\u0430\u0441\u0441\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0438 ",(0,r.jsx)(n.code,{children:"runTestClass()"})]})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 ",(0,r.jsx)(n.code,{children:"testCase()"})," \u0432 \u043f\u0435\u0440\u0432\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438, \u0441\u0442\u0430\u043b\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u043e, \u0447\u0442\u043e ",(0,r.jsx)(n.strong,{children:"\u0442\u0435\u0441\u0442\u044b \u043d\u0443\u0436\u043d\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),".",(0,r.jsx)(n.br,{}),"\n","\u0412 \u044d\u0442\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 ",(0,r.jsx)(n.strong,{children:"\u043a\u043b\u0430\u0441\u0441-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b"}),", \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0451\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u0430\u043c\u0438 \u0438\u0437 NestJS, Playwright \u0438 BDD."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-\u0446\u0435\u043b\u044c",children:"\ud83e\udde9 \u0426\u0435\u043b\u044c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u044b \u043f\u043e \u043a\u043b\u0430\u0441\u0441\u0430\u043c"}),"\n",(0,r.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,r.jsx)(n.code,{children:"@TestCase()"})," \u0434\u043b\u044f \u043c\u0435\u0442\u043e\u0434\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,r.jsx)(n.code,{children:"@Feature()"})," \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c ",(0,r.jsx)(n.code,{children:"runTestClass()"})," \u2014 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 ",(0,r.jsx)(n.code,{children:"vitest.test(...)"})," \u0441 \u043d\u0443\u0436\u043d\u044b\u043c\u0438 \u043c\u0435\u0442\u043a\u0430\u043c\u0438"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-\u043f\u0440\u0438\u043c\u0435\u0440-\u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439-\u043a\u043b\u0430\u0441\u0441-\u0441-\u0442\u0440\u0435\u043c\u044f-\u043a\u0435\u0439\u0441\u0430\u043c\u0438",children:"\ud83d\udce6 \u041f\u0440\u0438\u043c\u0435\u0440: \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0441 \u0442\u0440\u0435\u043c\u044f \u043a\u0435\u0439\u0441\u0430\u043c\u0438"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"@Feature('\u041f\u0440\u043e\u0444\u0438\u043b\u044c')\nclass ProfileTests {\n  @TestCase('\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', {\n    id: 'API-CLASS-01',\n    severity: 'critical',\n  })\n  async getProfile() {\n    await step('GET /users/1', async () => {\n      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')\n      attach('\u041e\u0442\u0432\u0435\u0442 JSON', response.data, 'application/json')\n      if (response.data.username !== 'Bret') {\n        throw new Error(`\u041e\u0436\u0438\u0434\u0430\u043b\u0441\u044f username = Bret, \u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d ${response.data.username}`)\n      }\n    })\n  }\n\n  @TestCase('\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439', {\n    id: 'API-CLASS-02',\n    severity: 'normal',\n  })\n  async getUsersList() {\n    await step('GET /users', async () => {\n      const res = await axios.get('https://jsonplaceholder.typicode.com/users')\n      attach('\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439', res.data)\n      if (!Array.isArray(res.data)) throw new Error('\u041e\u0436\u0438\u0434\u0430\u043b\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439')\n    })\n  }\n\n  @TestCase('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f', {\n    id: 'API-CLASS-03',\n    severity: 'minor',\n  })\n  async getInvalidUser() {\n    await step('GET /users/9999', async () => {\n      try {\n        await axios.get('https://jsonplaceholder.typicode.com/users/9999')\n        throw new Error('\u041e\u0436\u0438\u0434\u0430\u043b\u0441\u044f 404, \u043d\u043e \u043e\u0442\u0432\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u0435\u043d')\n      } catch (error: any) {\n        attach('\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430', error.toJSON?.() || error.message)\n        if (!error.response || error.response.status !== 404) {\n          throw new Error('\u041e\u0436\u0438\u0434\u0430\u043b\u0441\u044f \u0441\u0442\u0430\u0442\u0443\u0441 404')\n        }\n      }\n    })\n  }\n}\n\nrunTestClass(ProfileTests)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-\u043f\u043e\u0434-\u043a\u0430\u043f\u043e\u0442\u043e\u043c",children:"\u2699\ufe0f \u041f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// @TestCase\nReflect.defineMetadata(TEST_CASES_KEY, [...], target)\n// @Feature\nReflect.defineMetadata(FEATURE_KEY, name, target.prototype)\n\n// runTestClass\ntest(meta.name, async () => {\n  await allure.feature(...)\n  await allure.label(...)\n  await allure.step(..., () => instance[method]())\n})\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-\u043f\u043e\u0447\u0435\u043c\u0443-\u044d\u0442\u043e-\u0432\u0430\u0436\u043d\u043e",children:"\ud83d\udca1 \u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0422\u0435\u0441\u0442\u044b \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044f\u043c (Profile, Auth \u0438 \u0442.\u0434.)"}),"\n",(0,r.jsx)(n.li,{children:"\u041c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438"}),"\n",(0,r.jsx)(n.li,{children:"\u0412\u0441\u0451 \u0447\u0438\u0442\u0430\u0435\u043c\u043e, \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e"}),"\n",(0,r.jsxs)(n.li,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0430\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(n.code,{children:"@BeforeEachCase()"}),", ",(0,r.jsx)(n.code,{children:"@Suite()"}),", \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044e"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"-\u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0439-\u043a\u0430\u043c\u0435\u043d\u044c-\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432\u043d\u0435-step",children:["\ud83e\udde0 \u041f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c: \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u043d\u0435 ",(0,r.jsx)(n.code,{children:"step"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"attach()"})," \u0438\u043b\u0438 ",(0,r.jsx)(n.code,{children:"label()"})," \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0435 ",(0,r.jsx)(n.code,{children:"step(...)"}),", \u043e\u043d\u0438 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 \u0448\u0430\u0433 \u0432 Allure."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0420\u0435\u0448\u0435\u043d\u0438\u0435: \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.code,{children:"attach()"})," ",(0,r.jsxs)(n.strong,{children:["\u0432\u043d\u0443\u0442\u0440\u0438 ",(0,r.jsx)(n.code,{children:"step()"})]})," \u2014 \u0442\u043e\u0433\u0434\u0430 \u0432\u0441\u0451 \u0431\u0443\u0434\u0435\u0442 \u043a\u0440\u0430\u0441\u0438\u0432\u043e."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-\u0438\u0442\u043e\u0433",children:"\u2705 \u0418\u0442\u043e\u0433"}),"\n",(0,r.jsx)(n.p,{children:"\u0412 \u044d\u0442\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u044b \u0432\u044b\u0448\u043b\u0438 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u0438 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ProfileTests"})," \u0441\u0442\u0430\u043b \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0431\u043b\u043e\u043a\u043e\u043c"]}),"\n",(0,r.jsxs)(n.li,{children:["\u041a\u0430\u0436\u0434\u044b\u0439 ",(0,r.jsx)(n.code,{children:"@TestCase"})," \u2014 \u044d\u0442\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439"]}),"\n",(0,r.jsxs)(n.li,{children:["\u0412\u0441\u0451 \u044d\u0442\u043e \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0432 TypeScript, \u0431\u0435\u0437 ",(0,r.jsx)(n.code,{children:"Given-When-Then"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433: ",(0,r.jsx)(n.strong,{children:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 data-driven \u043f\u043e\u0434\u0445\u043e\u0434"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);