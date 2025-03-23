
import { Helmet } from "react-helmet-async";

const Index = () => {
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
