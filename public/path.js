let pathToRegexp=require('path-to-regexp');
let keys=[];
//end = false 不必须结束
//end = true 必须结束
let reg1=pathToRegexp('/user/:id/:name',keys,{end:true});
// /^\/user(?:\/)?$/i
console.log(reg1);
console.log(keys);
console.log('/user/1/zfpx'.match(reg1));
let names=keys.map(key => key.name);//[id,name]
let result='/user/1/zfpx'.match(reg1);
console.log(names);//[id,name]
let params=names.reduce((memo,name,idx) => {
	memo[name]=result[idx+1];
	return memo;
},{});
console.log(params);
// parmas = {id:1,name:'zfpx'}
//[ '/user/1/zfpx', '1', 'zfpx', index: 0, input: '/user/1/zfpx' ]