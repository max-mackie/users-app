import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
    // Defines the types of children that can be passed to MainLayout.
    children: React.ReactNode;
}

// MainLayout component wraps the application's content with a common header and footer.
export function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            {/* Background*/}
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Header />
                {children} // Primary content passed as children
                <Footer />
            </main>
        </>
    );
}

export default MainLayout;