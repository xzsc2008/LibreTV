const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
