import { AppRouter } from "./components/routers/App.routes"
import { Provider } from "react-redux";
import { store } from "./store/store";


export const JournalApp = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </div>
    )
}
