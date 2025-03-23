
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home page since we're using Home as our main page
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Welcome | Hunter Way</title>
        <meta name="description" content="Welcome to Hunter Way's official website - professional comedy juggler and entertainer for hire." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Welcome to Hunter Way</h1>
          <p className="text-xl text-muted-foreground">Professional Comedy Juggler and Entertainer</p>
        </div>
      </div>
    </>
  );
};

export default Index;
