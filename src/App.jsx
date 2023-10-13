import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CourseList from "./components/CourseList/CourseList";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useJsonQuery } from "./utilities/fetch";
import CourseDisplay from "./components/CourseDisplay/CourseDisplay";
import Dispatcher from "./components/Dispatcher/Dispatcher";
import { useDbData } from "./utilities/firebase";

const Main = () => {
  const [data, error] = useDbData("/");

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (!data) return <h1>Loading user data...</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <Dispatcher courses={data.courses} />
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default App;
