
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Welcome | Hunter Way</title>
        <meta name="description" content="Welcome to Hunter Way's official website - professional comedy juggler and entertainer for hire." />
      </Helmet>
      {/* Use Navigate component instead of useNavigate hook with useEffect */}
      <Navigate to="/" replace />
    </>
  );
};

export default Index;
