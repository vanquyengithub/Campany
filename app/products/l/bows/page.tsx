import BreadcrumbL from "@/components/products/l/breadcrumbs";

export default function Page() {
    return (
        <>
            <div className="mb-10 px-4">
                <div className="PLPContentWrapper">
                    <div className="flex flex-col">
                        <div className="py-6">
                            <BreadcrumbL />
                        </div>
                        <div>
                            <div className="inline-block w-full">
                                <div className="mb-10 pt-6 pb-3 bg-[#F6F6F4] flex flex-col full-width">
                                    <div className="title-and-crumbs">
                                        <h2 className="slider-title text-5xl text-[#213629] font-normal">BOWS</h2>
                                    </div>
                                    <div className="slider-scrollview pt-6 flex scroll-smooth overflow-auto pb-[250px] mb-[-250px]" id="scroller">
                                        <a className="small-slider-card first-slider-card " href="/l/blackout-compound-bows">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1688677741/UX/Experience/Archery%20Key%20Category/Bows/Blackout.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">Blackout <br />Bows</p>

                                            </div>
                                        </a>

                                        <a className="small-slider-card" href="/l/cabelas-hunting-bows">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1688678147/UX/Experience/Archery%20Key%20Category/Bows/Cab.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">Cabela&apos;s <br />Bows</p>
                                            </div>
                                        </a>

                                        <a className="small-slider-card" href="/l/bear-archery-compound-bows">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1688678192/UX/Experience/Archery%20Key%20Category/Bows/Bear.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">Bear <br />Bows</p>
                                            </div>
                                        </a>

                                        <a className="small-slider-card" href="/l/diamond-archery-shop-all">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1688678333/UX/Experience/Archery%20Key%20Category/Bows/Diamond.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">Diamond by Bowtech <br />Bows</p>
                                            </div>
                                        </a>


                                        <a className="small-slider-card" href="/l/pse-archery-shop-all">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1688678357/UX/Experience/Archery%20Key%20Category/Bows/PSE.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">PSE Archery <br />Bows</p>
                                            </div>
                                        </a>

                                        <a className="small-slider-card" href="/l/genesis-archery">
                                            <img className="small-slider-card-img" src="https://assets.basspro.com/image/upload/v1696826179/UX/Experience/Archery%20Key%20Category/Bows/genesis.png" />
                                            <div className="carret-and-text-row">
                                                <p className="small-slider-card-text">Genesis Archery <br />Bows</p>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}