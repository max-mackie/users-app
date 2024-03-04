import Footer from "./Footer";
import Header from "./Header";

export function MainLayout({ children }: any) {
    return (<>
        <header>
            <Header />
        </header>
        <div className="min-h-screen p-2">
            {children}
        </div>
        <footer>
            <Footer/>
        </footer>
    </>)
}

export default MainLayout;