import Image from "next/image";
import deals from "./components/deals.json"
//import Header from "./components/Header"

const Home = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    {deals.map((deal) => 
                        <li className="mb-2">
                            {deal.name}
                            <Image
                                className="dark:invert"
                                src={deal.img}
                                alt=""
                                width={180}
                                height={38}
                                priority
                            />
                        </li>
                    )}
                </ol>

                
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}

export default Home
