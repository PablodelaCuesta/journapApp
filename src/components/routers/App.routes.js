import { Route, 
            BrowserRouter as Router,
            Switch, 
            Redirect} from "react-router-dom"
import { JournalScreen } from "../journal/JournalScreen"
import { AuthRouter } from "./Auth.routes"

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>            
    )
}

