import{bt as e}from"./index-CIfmhqRC.js";const i={getApiKeyPage:async a=>await e.get({url:"/ai/api-key/page",params:a}),getApiKeySimpleList:async()=>await e.get({url:"/ai/api-key/simple-list"}),getApiKey:async a=>await e.get({url:"/ai/api-key/get?id="+a}),createApiKey:async a=>await e.post({url:"/ai/api-key/create",data:a}),updateApiKey:async a=>await e.put({url:"/ai/api-key/update",data:a}),deleteApiKey:async a=>await e.delete({url:"/ai/api-key/delete?id="+a})};export{i as A};
