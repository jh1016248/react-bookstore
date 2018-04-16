module.exports = [
    {
        path: '/category',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/category').default)
            }, 'IndexCategory')
        }
    },
    {
        path: '/category/:keyword',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/categoryDetail').default)
            }, 'IndexCategoryDetail')
        }
    },
    {
        path: '/ranking',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/ranking').default)
            }, 'IndexRanking')
        }
    },
    {
        path: '/ranking/:keyword',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/rankingDetail').default)
            }, 'IndexRankingDetail')
        }
    },
    {
        path: '/recommend',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/recommend').default)
            }, 'IndexRecommend')
        }
    },
    {
        path: '/recommend/:keyword',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/recommendDetail').default)
            }, 'IndexRecommendDetail')
        }
    },
    {
        path: '/booklist',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/booklist').default)
            }, 'IndexBooklist')
        }
    },
    {
        path: '/booklist/:keyword',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/booklistDetail').default)
            }, 'IndexBooklistDetail')
        }
    },
    {
        path: '/search/:keyword',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/search').default)
            }, 'IndexSearch')
        }
    },
]