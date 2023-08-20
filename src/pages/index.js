import { auth } from "@/firebase/firebase.config";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  // const { data: session } = useSession();
  // console.log(session)

  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h1 style={{ textAlign: "center" }}>{user?.email}</h1>
    </div>
  );
};

export default HomePage;
