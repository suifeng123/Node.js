/**
 * Created by Administrator on 2017/7/14.
 */
const sequenceMiddleware = ({dispatch,getState}) => next => action => {
    if(!Array.isArray(action)){
        return next(action);
    }

    return action.reduce((result,currAction) => {
            return result.then(() => {
            return Array.isArray(currAction) ? Promise.all(currAction.map(item => dispatch(item))):
             dispatch(currAction);
        });
        },Promise.resolve());
}