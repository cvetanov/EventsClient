import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path: 'events/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const EventContainer = require('./containers/EventContainer').default;
      const reducer = require('./modules/event').default;

      /*  Add the reducer to the store on key 'events'  */
      injectReducer(store, { key: 'detailedEvent', reducer });

      /*  Return getComponent   */
      cb(null, EventContainer);

      /* Webpack named bundle   */
    }, 'event')
  }
})
