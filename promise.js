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


/*
Layouts
 */
const layout = ({children} => {
        <div className='container'>
           <Header />
           <div className="content">
              {children}
           </div>
       </div>
    })

/*
Views
 */
@connect((state) => {
    //...
})

class HomeView extends Component {
    render() {
        const { sth,changeType } = this.props;
        const cardProps = { sth,changeType };

        return (
            <div className="page page-home">
               <Card {...cardProps} />
            </div>
        )

}

class Card extends Components {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(opts) {
        const {type} = opts;

        this.opts.changeType(type);
    }

    render() {
        const {sth} = this.props;

        return (
            <div className="mod-card">
               <Switch onChange={this.handleChange}>
                //...
               </Switch>
            </div>
        )
    }
}
}

var path = require('path');

module.exports = {
    entry:'src/app.js',
    output: {
        path:  path.join(__dirname,'build'),
        filename:'app.bundle.js',
        publicPath: '/build/',
    },
    module: {
        loaders:[{
            test:/\.js$/,
            include:path.join(__dirname,'src'),
            loader:'babel',
        }]
    }

}

class Nav extends Component {
    render() {
        return (
            <nav>
              <Link to="/">Home</Link>
            </nav>
        )
    }
}

class Frame extends Component {
    render() {
        return (
            <div className="frame">
               <section className="header">
                 <Nav />
               </section>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Frame}>
        <IndexRoute component={Home} />
          <Route path="detail/:id" component={Detail} />
      </Route>
    </Router>
);

export default routes;

import { combineReducers } from 'redux';

//引入 reducer 及 actionCreator
import list from '../components/Home';

if(process.env.NODE_ENV === 'production'){
    //这里的代码只会在生产环境运行
}else {
    //这里的代码之后再开发环境中运行
}

/*
一个简单的reducer
 */

const LOAD_DATA = 'LOAD_DATA';
const initialState = { };
function loadData() {
    return {
        type: LOAD_DATA,
    }
};

function reducer(state = initialState,action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default: return state;
    }
}

function generateReducer(prefix,state) {
    const LOAD_DATA = prefix + 'LOAD_DATA';

    const initialState = { ...state,... };

    return function reducer(state = initialState,action) {
        switch (action.type) {
            case LOAD_DATA:
                return {
                    ...state,
                    data: action.payload,
                };
            default:
                return state;
        }
    }
}

import React,{ Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeGender  = this.handleChangeGender.bind(this);

        this.state = {
            name:'',
            address:'',
            gender:'',
        };
    }

    handleChageName(e){
        this.setState({
            name:e.target.value,
        });
    }

    handleChangeAddress(e){
        this.setState({
            gender: e.target.value,
        })
    }


    handleChangeGender(e){
        this.setState({
            gender: e.target.value,
        });
    }

    render() {
        const { name,address,gender } = this.state;
        return (
            <form className="form">
                <input name="name" value={name} onChange={this.handleChageName} />
                <input name="gender" value={address} onChange={this.handleChangeAddress} />
                <select name="gender" value={gender} onChange={this.handleChangeGender}>
                  <option value="male" />
                    <option value="female" />
                </select>
        )
    }
}

/*
components/MyForm.js
 */
