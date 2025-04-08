import express from 'express';
import allpictures from '../config/database.js';

const router = express.Router();

let pictureData = [
    {
        id: 1,
        name: '自然风景',
        url: [
            { id: 1001, url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1002, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1003, url: 'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1004, url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1005, url: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1006, url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1007, url: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1008, url: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1009, url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1010, url: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1011, url: 'https://cdn.pixabay.com/photo/2019/02/04/21/15/sunset-3975374_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1012, url: 'https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1013, url: 'https://cdn.pixabay.com/photo/2019/08/01/12/36/mountain-4377306_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1014, url: 'https://cdn.pixabay.com/photo/2019/12/11/21/18/landscape-4689328_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1015, url: 'https://cdn.pixabay.com/photo/2020/02/13/10/29/sunset-4845850_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1016, url: 'https://cdn.pixabay.com/photo/2020/04/11/14/55/mountains-5030276_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1017, url: 'https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1018, url: 'https://cdn.pixabay.com/photo/2021/08/20/07/13/bird-6559677_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1019, url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 1020, url: 'https://cdn.pixabay.com/photo/2022/06/29/10/58/river-7291844_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 2,
        name: '海岸',
        url: [
            { id: 2001, url: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2002, url: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2003, url: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2004, url: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2005, url: 'https://cdn.pixabay.com/photo/2023/09/22/07/52/beach-8268375_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2006, url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2007, url: 'https://cdn.pixabay.com/photo/2016/11/19/11/32/sea-1838763_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2008, url: 'https://cdn.pixabay.com/photo/2019/12/02/08/42/lighthouse-4667507_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2009, url: 'https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2010, url: 'https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2011, url: 'https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2012, url: 'https://cdn.pixabay.com/photo/2020/04/16/11/41/beach-5049037_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2013, url: 'https://cdn.pixabay.com/photo/2018/10/19/12/14/greece-3758111_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2014, url: 'https://cdn.pixabay.com/photo/2019/11/05/00/53/cellular-4602489_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2015, url: 'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2016, url: 'https://cdn.pixabay.com/photo/2022/01/30/19/15/sea-6981997_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2017, url: 'https://cdn.pixabay.com/photo/2021/01/21/09/11/beach-5936734_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2018, url: 'https://cdn.pixabay.com/photo/2013/02/21/19/10/sea-84629_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2019, url: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 2020, url: 'https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 3,
        name: '沙漠',
        url: [
            { id: 3001, url: 'https://cdn.pixabay.com/photo/2016/11/21/15/43/desert-1845959_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3002, url: 'https://cdn.pixabay.com/photo/2017/06/05/16/06/las-cataratas-2374647_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3003, url: 'https://cdn.pixabay.com/photo/2018/01/17/17/16/desert-3088587_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3004, url: 'https://cdn.pixabay.com/photo/2019/04/12/14/18/sand-dunes-4122263_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3005, url: 'https://cdn.pixabay.com/photo/2023/12/04/19/45/camel-8430227_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3006, url: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3007, url: 'https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3008, url: 'https://cdn.pixabay.com/photo/2016/01/20/02/12/desert-1150767_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3009, url: 'https://cdn.pixabay.com/photo/2017/05/09/14/29/cactus-2298938_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3010, url: 'https://cdn.pixabay.com/photo/2015/07/01/18/56/desert-828646_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3011, url: 'https://cdn.pixabay.com/photo/2016/01/08/00/12/desert-1126899_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3012, url: 'https://cdn.pixabay.com/photo/2014/11/23/10/49/desert-542404_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3013, url: 'https://cdn.pixabay.com/photo/2016/11/23/17/08/death-valley-1853937_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3014, url: 'https://cdn.pixabay.com/photo/2017/08/02/20/24/landscape-2574055_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3015, url: 'https://cdn.pixabay.com/photo/2020/05/15/18/40/desert-5174064_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3016, url: 'https://cdn.pixabay.com/photo/2020/05/31/09/30/desert-5242696_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3017, url: 'https://cdn.pixabay.com/photo/2021/12/26/11/57/cacti-6894829_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3018, url: 'https://cdn.pixabay.com/photo/2021/08/02/11/03/rock-6516651_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3019, url: 'https://cdn.pixabay.com/photo/2018/11/06/14/01/salt-flat-3798395_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 3020, url: 'https://cdn.pixabay.com/photo/2013/04/03/12/05/sand-99748_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 4,
        name: '花卉',
        url: [
            { id: 4001, url: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4002, url: 'https://cdn.pixabay.com/photo/2018/01/05/16/24/rose-3063284_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4003, url: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4004, url: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4005, url: 'https://cdn.pixabay.com/photo/2017/07/24/12/43/schafgarbe-2534968_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4006, url: 'https://cdn.pixabay.com/photo/2022/02/17/07/54/white-flower-7018157_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4007, url: 'https://cdn.pixabay.com/photo/2023/03/19/12/44/higan-cherry-7862490_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4008, url: 'https://cdn.pixabay.com/photo/2021/12/07/16/43/christmas-rose-6853652_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4009, url: 'https://cdn.pixabay.com/photo/2020/07/17/18/26/flowers-5415011_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4010, url: 'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4011, url: 'https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4012, url: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4013, url: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/contemporary-4203279_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4014, url: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4015, url: 'https://cdn.pixabay.com/photo/2018/05/17/11/19/poppy-3408270_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4016, url: 'https://cdn.pixabay.com/photo/2018/05/12/03/18/blossom-3392465_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4017, url: 'https://cdn.pixabay.com/photo/2019/01/28/07/15/spring-3960345_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4018, url: 'https://cdn.pixabay.com/photo/2015/12/01/22/07/balloon-flower-1072626_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4019, url: 'https://cdn.pixabay.com/photo/2020/07/08/08/06/daisy-5383121_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 4020, url: 'https://cdn.pixabay.com/photo/2018/06/26/13/07/lotus-3499475_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 5,
        name: '夜景',
        url: [
            { id: 5001, url: 'https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5002, url: 'https://cdn.pixabay.com/photo/2015/10/12/14/55/milky-way-984050_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5003, url: 'https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5004, url: 'https://cdn.pixabay.com/photo/2021/12/01/17/28/city-6838430_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5005, url: 'https://cdn.pixabay.com/photo/2023/11/05/00/05/terrace-8366036_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5006, url: 'https://cdn.pixabay.com/photo/2023/10/03/09/59/bridge-8291058_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5007, url: 'https://cdn.pixabay.com/photo/2019/09/19/19/05/lake-4490068_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5008, url: 'https://cdn.pixabay.com/photo/2021/03/16/10/04/singapore-6099460_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5009, url: 'https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5010, url: 'https://cdn.pixabay.com/photo/2019/05/16/18/51/cliffs-4207637_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5011, url: 'https://cdn.pixabay.com/photo/2019/05/16/17/47/empire-state-building-4207377_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5012, url: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5013, url: 'https://cdn.pixabay.com/photo/2020/10/04/18/13/architecture-5627424_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5014, url: 'https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5015, url: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5016, url: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/new-york-1245985_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5017, url: 'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5018, url: 'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5019, url: 'https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 5020, url: 'https://cdn.pixabay.com/photo/2017/11/11/21/55/light-2940879_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 6,
        name: '动物',
        url: [
            { id: 6001, url: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6002, url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6003, url: 'https://cdn.pixabay.com/photo/2015/03/27/13/16/cat-694730_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6004, url: 'https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6005, url: 'https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6006, url: 'https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6007, url: 'https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6008, url: 'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6009, url: 'https://cdn.pixabay.com/photo/2018/04/04/10/11/cat-3289049_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6010, url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6011, url: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6012, url: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6013, url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6014, url: 'https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6015, url: 'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6016, url: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-516509_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6017, url: 'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6018, url: 'https://cdn.pixabay.com/photo/2020/11/06/08/33/bird-5717088_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6019, url: 'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 6020, url: 'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 7,
        name: '城市',
        url: [
            { id: 7001, url: 'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7002, url: 'https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7003, url: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7004, url: 'https://cdn.pixabay.com/photo/2019/09/12/15/21/museum-4471959_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7005, url: 'https://cdn.pixabay.com/photo/2021/03/16/10/04/singapore-6099460_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7006, url: 'https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7007, url: 'https://cdn.pixabay.com/photo/2016/03/09/09/43/new-york-1245985_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7008, url: 'https://cdn.pixabay.com/photo/2015/05/15/14/22/eiffel-tower-768501_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7009, url: 'https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7010, url: 'https://cdn.pixabay.com/photo/2020/07/22/15/04/skyscraper-5429865_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7011, url: 'https://cdn.pixabay.com/photo/2018/07/15/11/31/zakynthos-3539408_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7012, url: 'https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7013, url: 'https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7014, url: 'https://cdn.pixabay.com/photo/2019/05/19/10/40/bangkok-4213658_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7015, url: 'https://cdn.pixabay.com/photo/2020/04/17/12/28/architecture-5055267_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7016, url: 'https://cdn.pixabay.com/photo/2020/10/04/18/13/architecture-5627424_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7017, url: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7018, url: 'https://cdn.pixabay.com/photo/2015/07/02/10/29/spa-828675_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7019, url: 'https://cdn.pixabay.com/photo/2018/01/31/05/43/architecture-3120493_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 7020, url: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 8,
        name: '星空',
        url: [
            { id: 8001, url: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8002, url: 'https://cdn.pixabay.com/photo/2014/12/15/17/16/night-sky-569319_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8003, url: 'https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8004, url: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8005, url: 'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8006, url: 'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8007, url: 'https://cdn.pixabay.com/photo/2017/08/08/00/33/constellations-2609647_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8008, url: 'https://cdn.pixabay.com/photo/2021/11/11/09/12/lighthouse-6785763_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8009, url: 'https://cdn.pixabay.com/photo/2017/02/09/09/11/starry-sky-2051448_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8010, url: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/star-1979111_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8011, url: 'https://cdn.pixabay.com/photo/2018/05/11/19/12/galaxy-3391685_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8012, url: 'https://cdn.pixabay.com/photo/2020/03/08/15/27/namibia-4912944_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8013, url: 'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8014, url: 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8015, url: 'https://cdn.pixabay.com/photo/2017/03/29/15/05/milky-way-2185448_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8016, url: 'https://cdn.pixabay.com/photo/2021/01/21/15/54/orion-nebula-5937783_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8017, url: 'https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8018, url: 'https://cdn.pixabay.com/photo/2019/03/31/21/43/galaxy-4093333_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8019, url: 'https://cdn.pixabay.com/photo/2017/01/26/08/07/andromeda-galaxy-2010030_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 8020, url: 'https://cdn.pixabay.com/photo/2017/10/14/09/56/northern-lights-2850292_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 9,
        name: '黎明',
        url: [
            { id: 9001, url: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9002, url: 'https://cdn.pixabay.com/photo/2015/04/23/22/01/tree-736886_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9003, url: 'https://cdn.pixabay.com/photo/2018/08/21/22/55/sunset-3622729_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9004, url: 'https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9005, url: 'https://cdn.pixabay.com/photo/2013/11/12/16/37/sun-209495_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9006, url: 'https://cdn.pixabay.com/photo/2018/04/05/00/23/clouds-3291565_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9007, url: 'https://cdn.pixabay.com/photo/2018/02/19/22/36/mountain-3166443_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9008, url: 'https://cdn.pixabay.com/photo/2015/10/30/18/09/sunrise-1014550_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9009, url: 'https://cdn.pixabay.com/photo/2020/04/04/02/29/landscape-5000382_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9010, url: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9011, url: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9012, url: 'https://cdn.pixabay.com/photo/2013/04/04/12/34/sunrise-100367_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9013, url: 'https://cdn.pixabay.com/photo/2020/03/19/21/25/landscape-4948589_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9014, url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9015, url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/sunrise-1761777_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9016, url: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9017, url: 'https://cdn.pixabay.com/photo/2019/05/21/12/12/mountain-range-4218435_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9018, url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9019, url: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 9020, url: 'https://cdn.pixabay.com/photo/2018/07/05/22/16/panorama-3519309_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 10,
        name: '森林',
        url: [
            { id: 10001, url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10002, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10003, url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10004, url: 'https://cdn.pixabay.com/photo/2019/09/04/01/24/trees-4450514_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10005, url: 'https://cdn.pixabay.com/photo/2017/11/12/13/37/forest-2942477_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10006, url: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10007, url: 'https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10008, url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10009, url: 'https://cdn.pixabay.com/photo/2014/09/10/00/59/redwood-440476_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10010, url: 'https://cdn.pixabay.com/photo/2018/06/09/17/25/trees-3464777_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10011, url: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10012, url: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10013, url: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10014, url: 'https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10015, url: 'https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302025_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10016, url: 'https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10017, url: 'https://cdn.pixabay.com/photo/2021/01/21/15/54/trees-5928445_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10018, url: 'https://cdn.pixabay.com/photo/2015/07/02/10/29/spa-828675_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10019, url: 'https://cdn.pixabay.com/photo/2018/01/31/05/43/architecture-3120493_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 10020, url: 'https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 11,
        name: '美食',
        url: [
            { id: 11001, url: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11002, url: 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11003, url: 'https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11004, url: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11005, url: 'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11006, url: 'https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11007, url: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11008, url: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11009, url: 'https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11010, url: 'https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11011, url: 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11012, url: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11013, url: 'https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11014, url: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11015, url: 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11016, url: 'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11017, url: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11018, url: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11019, url: 'https://cdn.pixabay.com/photo/2016/01/03/17/59/cake-1119590_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 11020, url: 'https://cdn.pixabay.com/photo/2017/11/12/19/43/ingredients-2943584_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 12,
        name: '建筑',
        url: [
            { id: 12001, url: 'https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-381233_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12002, url: 'https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12003, url: 'https://cdn.pixabay.com/photo/2013/03/02/02/41/city-89197_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12004, url: 'https://cdn.pixabay.com/photo/2016/09/01/10/23/apartment-1635784_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12005, url: 'https://cdn.pixabay.com/photo/2017/01/18/17/14/louvre-1990670_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12006, url: 'https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12007, url: 'https://cdn.pixabay.com/photo/2018/05/12/19/16/architecture-3394554_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12008, url: 'https://cdn.pixabay.com/photo/2019/01/30/07/48/singapore-3963719_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12009, url: 'https://cdn.pixabay.com/photo/2016/08/25/17/33/budapest-1620115_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12010, url: 'https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12011, url: 'https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12012, url: 'https://cdn.pixabay.com/photo/2013/10/29/08/34/stonehenge-202503_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12013, url: 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014616_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12014, url: 'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12015, url: 'https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12016, url: 'https://cdn.pixabay.com/photo/2016/07/05/12/09/campus-1498497_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12017, url: 'https://cdn.pixabay.com/photo/2016/04/05/03/18/prayer-wheels-1308697_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12018, url: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12019, url: 'https://cdn.pixabay.com/photo/2015/11/16/18/05/florence-1046105_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 12020, url: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850181_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 13,
        name: '水景',
        url: [
            { id: 13001, url: 'https://cdn.pixabay.com/photo/2019/11/23/03/08/cascade-4646337_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13002, url: 'https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13003, url: 'https://cdn.pixabay.com/photo/2021/08/01/12/58/beach-6514331_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13004, url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13005, url: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13006, url: 'https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13007, url: 'https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13008, url: 'https://cdn.pixabay.com/photo/2018/01/21/19/57/lake-3097754_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13009, url: 'https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13010, url: 'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13011, url: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13012, url: 'https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2619048_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13013, url: 'https://cdn.pixabay.com/photo/2018/07/06/19/48/water-3521397_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13014, url: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13015, url: 'https://cdn.pixabay.com/photo/2019/08/19/15/13/eibsee-4416700_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13016, url: 'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13017, url: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13018, url: 'https://cdn.pixabay.com/photo/2022/01/30/19/15/sea-6981997_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13019, url: 'https://cdn.pixabay.com/photo/2022/03/09/23/52/island-7058873_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 13020, url: 'https://cdn.pixabay.com/photo/2018/05/10/23/04/giglio-3389078_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 14,
        name: '山脉',
        url: [
            { id: 14001, url: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14002, url: 'https://cdn.pixabay.com/photo/2019/12/11/21/18/landscape-4689328_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14003, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14004, url: 'https://cdn.pixabay.com/photo/2019/08/01/12/36/mountain-4377306_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14005, url: 'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14006, url: 'https://cdn.pixabay.com/photo/2016/11/06/05/36/landscape-1802337_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14007, url: 'https://cdn.pixabay.com/photo/2018/11/09/08/08/forest-3804001_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14008, url: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/boat-1014711_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14009, url: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14010, url: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14011, url: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14012, url: 'https://cdn.pixabay.com/photo/2020/04/11/14/55/mountains-5030276_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14013, url: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14014, url: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14015, url: 'https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14016, url: 'https://cdn.pixabay.com/photo/2016/01/19/17/29/blades-1149919_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14017, url: 'https://cdn.pixabay.com/photo/2016/11/21/16/36/cloud-1846517_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14018, url: 'https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14019, url: 'https://cdn.pixabay.com/photo/2016/09/19/22/46/mountains-1681654_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 14020, url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 15,
        name: '植物',
        url: [
            { id: 15001, url: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15002, url: 'https://cdn.pixabay.com/photo/2014/05/26/13/32/striped-core-354615_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15003, url: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/flowers-324175_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15004, url: 'https://cdn.pixabay.com/photo/2015/07/31/06/50/forest-868715_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15005, url: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15006, url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15007, url: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15008, url: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/infrared-815297_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15009, url: 'https://cdn.pixabay.com/photo/2013/11/15/13/57/california-210913_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15010, url: 'https://cdn.pixabay.com/photo/2017/07/24/12/43/schafgarbe-2534968_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15011, url: 'https://cdn.pixabay.com/photo/2017/05/09/14/29/cactus-2298938_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15012, url: 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15013, url: 'https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15014, url: 'https://cdn.pixabay.com/photo/2016/11/06/05/36/landscape-1802337_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15015, url: 'https://cdn.pixabay.com/photo/2016/01/19/17/29/blades-1149919_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15016, url: 'https://cdn.pixabay.com/photo/2016/03/17/05/21/dandelion-1262560_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15017, url: 'https://cdn.pixabay.com/photo/2018/01/28/11/24/sunflower-3113318_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15018, url: 'https://cdn.pixabay.com/photo/2016/07/11/15/43/wheat-field-1509817_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15019, url: 'https://cdn.pixabay.com/photo/2018/05/10/22/56/cactus-3389231_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 15020, url: 'https://cdn.pixabay.com/photo/2019/03/03/08/24/bougainvillea-spectabilis-4031352_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 16,
        name: '旅行',
        url: [
            { id: 16001, url: 'https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16002, url: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850181_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16003, url: 'https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16004, url: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/adventure-1836601_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16005, url: 'https://cdn.pixabay.com/photo/2015/07/11/23/02/plane-841441_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16006, url: 'https://cdn.pixabay.com/photo/2016/11/14/05/21/children-1822688_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16007, url: 'https://cdn.pixabay.com/photo/2018/07/31/11/14/highway-3574157_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16008, url: 'https://cdn.pixabay.com/photo/2016/01/19/16/50/adventure-1149894_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16009, url: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16010, url: 'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16011, url: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16012, url: 'https://cdn.pixabay.com/photo/2020/01/31/21/24/eiffel-tower-4809727_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16013, url: 'https://cdn.pixabay.com/photo/2016/11/18/15/38/beach-1835213_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16014, url: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16015, url: 'https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16016, url: 'https://cdn.pixabay.com/photo/2018/11/17/07/10/notebook-3820634_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16017, url: 'https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16018, url: 'https://cdn.pixabay.com/photo/2016/11/22/22/25/adventure-1850912_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16019, url: 'https://cdn.pixabay.com/photo/2016/11/29/09/22/woods-1868688_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 16020, url: 'https://cdn.pixabay.com/photo/2015/11/07/11/39/travel-1031080_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 17,
        name: '抽象',
        url: [
            { id: 17001, url: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17002, url: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17003, url: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17004, url: 'https://cdn.pixabay.com/photo/2017/08/24/03/41/milky-way-2675322_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17005, url: 'https://cdn.pixabay.com/photo/2019/08/08/11/42/butterfly-4392805_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17006, url: 'https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17007, url: 'https://cdn.pixabay.com/photo/2019/01/03/15/03/wave-3911336_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17008, url: 'https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17009, url: 'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17010, url: 'https://cdn.pixabay.com/photo/2017/11/04/21/09/textile-2918844_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17011, url: 'https://cdn.pixabay.com/photo/2019/03/31/13/36/panorama-4092279_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17012, url: 'https://cdn.pixabay.com/photo/2016/04/24/13/24/drop-of-water-1349633_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17013, url: 'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17014, url: 'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17015, url: 'https://cdn.pixabay.com/photo/2016/11/29/13/00/balloons-1869790_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17016, url: 'https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17017, url: 'https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17018, url: 'https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17019, url: 'https://cdn.pixabay.com/photo/2020/04/17/16/48/marguerite-5056063_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 17020, url: 'https://cdn.pixabay.com/photo/2016/06/18/17/29/fractal-1465313_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 18,
        name: '科技',
        url: [
            { id: 18001, url: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/programming-3007914_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18002, url: 'https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18003, url: 'https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18004, url: 'https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18005, url: 'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18006, url: 'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18007, url: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18008, url: 'https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18009, url: 'https://cdn.pixabay.com/photo/2017/10/24/07/12/hacking-2883632_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18010, url: 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18011, url: 'https://cdn.pixabay.com/photo/2017/04/23/19/30/earth-2254769_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18012, url: 'https://cdn.pixabay.com/photo/2015/11/15/21/31/smartphone-1044989_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18013, url: 'https://cdn.pixabay.com/photo/2017/12/22/08/01/paper-3033204_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18014, url: 'https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18015, url: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18016, url: 'https://cdn.pixabay.com/photo/2016/05/28/00/25/vr-1421110_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18017, url: 'https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18018, url: 'https://cdn.pixabay.com/photo/2013/12/22/14/35/binary-code-231794_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18019, url: 'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 18020, url: 'https://cdn.pixabay.com/photo/2016/02/19/10/56/fractal-1209413_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    },
    {
        id: 19,
        name: '人像',
        url: [
            { id: 19001, url: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19002, url: 'https://cdn.pixabay.com/photo/2016/11/29/13/00/balloons-1869790_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19003, url: 'https://cdn.pixabay.com/photo/2016/03/26/22/13/man-1281562_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19004, url: 'https://cdn.pixabay.com/photo/2018/01/15/22/25/gong-3084274_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19005, url: 'https://cdn.pixabay.com/photo/2016/11/29/11/04/woman-1869158_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19006, url: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19007, url: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19008, url: 'https://cdn.pixabay.com/photo/2014/11/14/21/24/young-girl-531252_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19009, url: 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19010, url: 'https://cdn.pixabay.com/photo/2014/07/10/11/15/strike-a-pose-388788_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19011, url: 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19012, url: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19013, url: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19014, url: 'https://cdn.pixabay.com/photo/2018/02/24/20/39/fashion-3179178_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19015, url: 'https://cdn.pixabay.com/photo/2014/09/20/05/17/girl-453797_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19016, url: 'https://cdn.pixabay.com/photo/2016/03/27/21/52/woman-1284411_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19017, url: 'https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597178_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19018, url: 'https://cdn.pixabay.com/photo/2018/03/26/02/07/child-3261485_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19019, url: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) },
            { id: 19020, url: 'https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg', isLiked: false, treasureNum: Math.floor(Math.random() * 100), clickNum: Math.floor(Math.random() * 100), mostNew: Math.floor(Math.random() * 10) }
        ]
    }
];

async function init() {
    try {
        // 开启事务
        const connection = await allpictures.getConnection();
        await connection.beginTransaction();
        try {
            // 先清空表
            await connection.execute('DELETE FROM pictures');
            await connection.execute('DELETE FROM categories');
            // 插入分类数据
            for (const category of pictureData) {
                // 插入分类
                const [categoryResult] = await connection.execute(
                    'INSERT INTO categories (id, name) VALUES (?, ?)',
                    [category.id, category.name]
                );
                // 插入该分类下的所有图片
                for (const picture of category.url) {
                    await connection.execute(
                        'INSERT INTO pictures (id, category_id, url, is_liked, treasure_num, click_num, most_new) VALUES (?, ?, ?, ?, ?, ?, ?)',
                        [
                            picture.id,
                            category.id,
                            picture.url,
                            picture.isLiked,
                            picture.treasureNum || 0,
                            picture.clickNum || 0,
                            picture.mostNew || 0
                        ]
                    );
                }
            }
            // 提交事务
            await connection.commit();
            console.log('数据初始化成功！');
        } catch (error) {
            // 如果出错，回滚事务
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('初始化数据失败:', error);
    }
}

// 数据更新时启动一次
// init();

// 获取图片列表路由（从数据库获取）
router.get('/homeShowPicture', async (req, res) => {
    try {
        // 获取所有分类和对应的图片
        const [categories] = await allpictures.execute('SELECT * FROM categories');
        const result = await Promise.all(categories.map(async (category) => {
            const [pictures] = await allpictures.execute(
                'SELECT id, url, is_liked as isLiked, treasure_num as treasureNum, click_num as clickNum, most_new as mostNew FROM pictures WHERE category_id = ?',
                [category.id]
            );
            return {
                id: category.id,
                name: category.name,
                url: pictures
            };
        }));
        res.json({
            code: 200,
            data: result
        });
    } catch (error) {
        console.error('获取图片数据失败:', error);
        res.status(500).json({
            code: 500,
            message: '获取数据失败'
        });
    }
});

// 更新图片点赞状态
router.put('/updateLikeStatus', async (req, res) => {
    try {
        const { id, isLiked } = req.body;
        await allpictures.execute(
            'UPDATE pictures SET is_liked = ? WHERE id = ?',
            [isLiked, id]
        );
        res.json({
            code: 200,
            message: '更新成功'
        });
    } catch (error) {
        console.error('更新点赞状态失败:', error);
        res.status(500).json({
            code: 500,
            message: '更新失败'
        });
    }
});


export default router; 