import Layout from './layout/Layout.jsx';

const App = () => {
  return (
    <div className=" min-h-screen  w-full flex flex-col items-center">
      <div className="w-full lg:w-2xl min-h-screen flex flex-col p-8">
        <Layout />
      </div>
    </div>
  );
};

export default App;
