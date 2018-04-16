module.exports = [
    {
        path: '/book/:id',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/book/index').default)
            }, 'Book')
        },
    },
    {
        path: '/book/:id/category',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/book/category').default)
            }, 'BookCategory')
        }
    },
    {
        path: '/book/:id/comment',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/book/comment').default)
            }, 'BookComment')
        }
    },
    {
        path: '/book/:id/page',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/book/page').default)
            }, 'BookPage')
        }
    }
]