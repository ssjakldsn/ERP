import{bt as e}from"./index-CIfmhqRC.js";const i={getImagePageMy:async a=>await e.get({url:"/ai/image/my-page",params:a}),getImageMy:async a=>await e.get({url:`/ai/image/get-my?id=${a}`}),getImageListMyByIds:async a=>await e.get({url:"/ai/image/my-list-by-ids",params:{ids:a.join(",")}}),drawImage:async a=>await e.post({url:"/ai/image/draw",data:a}),deleteImageMy:async a=>await e.delete({url:`/ai/image/delete-my?id=${a}`}),midjourneyImagine:async a=>await e.post({url:"/ai/image/midjourney/imagine",data:a}),midjourneyAction:async a=>await e.post({url:"/ai/image/midjourney/action",data:a}),getImagePage:async a=>await e.get({url:"/ai/image/page",params:a}),updateImage:async a=>await e.put({url:"/ai/image/update",data:a}),deleteImage:async a=>await e.delete({url:"/ai/image/delete?id="+a})};export{i as I};
