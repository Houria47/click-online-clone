import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocaleProvider from "@/store/LocaleProvider";

import ScrollToAnchor from "@/components/Home/ScrollToAnchor";
import PagesFallback from "./components/ui/PagesFallback";

const RootLayout = lazy(() => import("./layout/"));
const Home = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/404"));

function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <Suspense fallback={<PagesFallback />}>
          <ScrollToAnchor />
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
