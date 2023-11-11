import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Download from "./pages/Download/Download";
import Products from "./pages/ChangeLogs/ChangeLogs";
import ScrollToTop from "./components/ScrollToTop";
import ChangeLogs from "./pages/ChangeLogs/ChangeLogs";
import PrivacyPolicy from "./pages/TermsOfUse/PrivacyPolicy/PrivacyPolicy";

const basename = process.env.PUBLIC_URL || '/daily-hyu-menu';

function App() {
  return (
    <Router basename={basename}>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/changelog" component={ChangeLogs} />
        <Route path="/terms-of-use/privacy-policy" component={PrivacyPolicy} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
