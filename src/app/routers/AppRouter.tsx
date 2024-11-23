import { Route, Routes, Navigate } from "react-router-dom";
import { privateRouters, publicRouters } from "./routers";
import { useAppSelector } from "../../hooks/redux";

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <div>
      <Routes>
        {publicRouters.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
          
        ))}
        {privateRouters.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              isAuth ? <route.component /> : <Navigate to="/authorization" />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
