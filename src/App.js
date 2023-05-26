import { Routes, Route } from "react-router-dom";
import {Layout} from "antd";
import { Users } from "./pages";
import { Header } from "./components";
import { Cards } from "./components";


export const App = () => {
    return (
        <Layout>
          <Layout.Header>
            <Header/>
          </Layout.Header>
          <Layout.Content>
            <Cards></Cards>
            <Routes>
                <Route path="/" element={<Users />}/>
            </Routes>
          </Layout.Content>
        </Layout>
    );
};
