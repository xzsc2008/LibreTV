const CUSTOMER_SITES = {
    dytt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源',
    },
};
// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
