import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/body/Main";
import { useSession } from "next-auth/react";
export default function Home() {
 
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
