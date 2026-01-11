import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";

function Router() {
  useScrollToTop();
  return (
    <Switch>
      <Route path={"/ "} component={Home} />
      <Route path={"/tours"} component={Tours} />
      <Route path={`/tour/:tourId`} component={TourDetail} />
      {/* Final fallback route */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
