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