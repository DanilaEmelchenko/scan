import { Route, Routes, Navigate } from "react-router-dom";
import { routers } from "./routers";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {routers.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
