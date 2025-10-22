import Footer from "@/components/Footer";

export const metadata = {
  title: "George | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
