import ActiveLink from "@/components/active-link/ActiveLink";
import Link from "next/link";



export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const navItems = [
    {path: '/about', text: "About"},
    {path: '/pricing', text: "Pricing"},
    {path: '/contact', text: "Contacto"}
  ]


  const Navbar = async () => {
    return (
      <nav className="flex bg-blue-800 text-white font-bold rounded p-2 m-2">

    <Link href={'/'}>
    <span className="">Home</span>
    </Link>


      <div className="flex flex-1">

      </div>

      {
        navItems.map(navItem => (
          <ActiveLink {...navItem} key={navItem.path}/>
        ))
      }

      
      </nav>
    );
  };
  return (
    <>
     <Navbar/>
      <div>
      <h1>Hola a todos</h1>
      {children}
      </div>
     
    </>
  );
}
