import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex flex-col flex-1 ml-52">
                <Header />

                {/* 메인 */}
                <main className="flex-1 overflow-y-auto p-4 mt-16">
                    {children}
                </main>
            </div>
        </div>
    );
}
