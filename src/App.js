import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Download from "./pages/Download/Download";
import ScrollToTop from "./components/ScrollToTop";
import ChangeLogs from "./pages/ChangeLogs/ChangeLogs";
import PrivacyPolicy from "./pages/TermsOfUse/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/changelog" component={ChangeLogs} />
        <Route path="/terms-of-use/privacy-policy" component={PrivacyPolicy} />
        {/* Backup */}
        <Route path="/downloads" component={Download} />
        <Route path="/changelogs" component={ChangeLogs} />
        <Route path="/terms-of-use" component={PrivacyPolicy} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
