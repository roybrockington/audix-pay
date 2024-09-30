import Image from "next/image";
import deals from "./components/deals.json"
import Link from "next/link";

const Home = () => {

    const showInProgress = false
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 sm:p-20">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                    {showInProgress && 
                    <p className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    All deliveries 1st Oct
                    </p>
                    }
                    <p className="flex gap-2">Thanks for visiting us at the London Drum Show!</p>
                    <p className="flex">For more information on Audix Microphones head to <Link href="https://www.scvdistribution.co.uk" className="ml-2 font-bold underline">SCV Distribution</Link>.</p>
                {/*deals.map((deal) => 
                    <li key={deal.sku} className="mb-2 list-none flex flex-col items-center gap-4">
                        <h3 className="text-xl font-bold">{deal.name}</h3>
                        <div className="flex">
                            <Image
                                className="dark:invert"
                                src={deal.img}
                                alt=""
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p className="flex gap-4 items-center">
                            <span className="line-through">£{deal.ssp}</span>
                            <span className="text-xl font-bold">£{deal.promo}</span>
                        </p>
                        <Link className="py-4 px-8 uppercase bg-gradient-to-r bg-cyan-600 text-white rounded drop-shadow-lg" href={deal.link}>Buy</Link>
                    </li>
                )*/}


            </main>
            <footer className="row-start-3 text-bold text-xs mt-16 flex gap-4 flex-wrap items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
                Promotions end midnight on 29/09/24
            </footer>
        </div>
    );
}

export default Home
