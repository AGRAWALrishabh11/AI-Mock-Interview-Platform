import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import {HomePage} from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth-layout";
import {MainLayout} from "@/layouts/main-layout";
import {SignInPage} from "./routes/sign-in";
import {SignUpPage} from "./routes/sign-up";
import ProtectRoutes from "./layouts/protected-routes";
import { Generate } from "./components/generate";
import {Dashboard} from "./routes/dashboard";
import {CreateEditPage} from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview";
import { Feedback } from "./routes/feedback";
const App = () => {
  return (
    <Router> 
      <Routes>
        {/* public routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
          </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
            <Route path="/signin/*" element={<SignInPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
        </Route>


        {/* protected routes */}
        <Route element={<ProtectRoutes>
          <MainLayout />
        </ProtectRoutes>}>


        {/* add all the protected routes */}
         <Route  element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            {/* create route */}
            <Route path=":interviewId" element={<CreateEditPage />} />
              <Route path="interview/:interviewId" element={<MockLoadPage />} /> 
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App