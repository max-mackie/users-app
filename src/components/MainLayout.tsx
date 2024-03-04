import Footer from "./Footer";
import Header from "./Header";

export function MainLayout({ children }: any) {
    return (<>
        <div className="main">
            <div className="gradient"/>
        </div>
        <main className="app">
            <Header />
            {children}
            <Footer />
        </main>
    </>)
}

export default MainLayout;