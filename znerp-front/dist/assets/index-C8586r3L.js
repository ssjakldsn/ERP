import{bt as e}from"./index-CIfmhqRC.js";const r={getProductCategoryList:async()=>await e.get({url:"/erp/product-category/list"}),getProductCategorySimpleList:async()=>await e.get({url:"/erp/product-category/simple-list"}),getProductCategory:async t=>await e.get({url:"/erp/product-category/get?id="+t}),createProductCategory:async t=>await e.post({url:"/erp/product-category/create",data:t}),updateProductCategory:async t=>await e.put({url:"/erp/product-category/update",data:t}),deleteProductCategory:async t=>await e.delete({url:"/erp/product-category/delete?id="+t}),exportProductCategory:async t=>await e.download({url:"/erp/product-category/export-excel",params:t})};export{r as P};
