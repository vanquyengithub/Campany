import './products.css'
import Header from "@/components/utils/header";
import HeaderProduct from "@/components/products/c/header-product";
import Footer from "@/components/utils/footer";
export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row md:overflow-hidden">
            <div className='min-h-screen relative w-full overflow-x-hidden'>
                <Header />

                <HeaderProduct />
                <div className="flex-grow md:overflow-y-auto">{children}</div>
                <Footer />

            </div>
        </div>
    );
}