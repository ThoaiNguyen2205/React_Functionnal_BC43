import ReactDOM from "react-dom/client";
// Cấu hình react-router-dom
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login";
import UseStateDemo from "./pages/Hooks/UseStateDemo";
import Home from "./pages/Home";
import { UseEffectDemo } from "./pages/Hooks/UseEffectDemo";
import UseCallbackDemo from "./pages/Hooks/UseCallback/UseCallbackDemo";
import UseMemoDemo from "./pages/Hooks/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/Hooks/UseRefDemo/UseRefDemo";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoAppChat from "./pages/Hooks/ReduxHook/DemoAppChat";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Movie from "./pages/Hooks/Movie";
// Cài đặt antd
import "antd/dist/reset.css";
import "./index.css";
import DemonAntd from "./pages/DemonAntd";
import { createBrowserHistory } from "history";
import DemoHOC from "./pages/Hooks/DemoHOC";
import ContainerModal from "./HOC/ContainerModal";
import ResposiveTemplate from "./templates/ResposiveTemplate";
import HomeMobile from "./pages/HomeMoblie";

//Tạo ra 1 history tương tự useNavagate
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route
            index
            element={
              <ResposiveTemplate
                component={Home}
                mobileComponent={HomeMobile}
              />
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="usestate" element={<UseStateDemo />}></Route>
          <Route path="useeffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallbackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="demo-chat" element={<DemoAppChat />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="antd" element={<DemonAntd />}></Route>
          <Route path="hoc" element={<DemoHOC />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="movie" element={<Movie />}></Route>

          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
      <ContainerModal />
    </HistoryRouter>
  </Provider>
);
