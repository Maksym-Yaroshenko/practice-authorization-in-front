import NavHeader from "../NavHeader/NavHeader";

export default function Layout({ children }) {
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}
