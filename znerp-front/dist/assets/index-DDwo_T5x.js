import{bt as p}from"./index-CIfmhqRC.js";const a={getSupplierPage:async e=>await p.get({url:"/erp/supplier/page",params:e}),getSupplierSimpleList:async()=>await p.get({url:"/erp/supplier/simple-list"}),getSupplier:async e=>await p.get({url:"/erp/supplier/get?id="+e}),createSupplier:async e=>await p.post({url:"/erp/supplier/create",data:e}),updateSupplier:async e=>await p.put({url:"/erp/supplier/update",data:e}),deleteSupplier:async e=>await p.delete({url:"/erp/supplier/delete?id="+e}),exportSupplier:async e=>await p.download({url:"/erp/supplier/export-excel",params:e})};export{a as S};
