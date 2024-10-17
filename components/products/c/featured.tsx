import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image";
export default function Feature() {
    return (
        <>
            <div className="EMarketingSpotReact mid_promo_banner_hunting " id="EMarketingSpotReactMid_Promo_Banner_Hunting">
                <div className="dept-full-banner">
                    <div id="DepartmentMain1_Desktop" className="acol12 col12 ccol12 dept-bnr products desktop max-w-[640px]:hidden">
                        <a className="mid-promo-banner" href="/l/moultrie-mobile-cellular-trail-cameras">
                            <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1440/v1721759009/DigitalCreative/2024/Dept-Pages/Hunting/Hunt%20Page%20Moultrie%20Update/PLP-Moultrie_Topper.jpg" alt="Stealth Cam - New for 2024! Revolver 360° Cellular Trail Camera. Shop Now" width={'100%'} />
                        </a>
                    </div>
                    <div id="DepartmentMain1_Mobile" className="acol12 col6 ccol6 dept-bnr products mobile hidden max-w-[640px]:block">
                        <a className="mid-promo-banner" href="/shop/en/stealth-cam-revolver-360-cellular-trail-camera">
                            <img src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_700/v1721759009/DigitalCreative/2024/Dept-Pages/Hunting/Hunt%20Page%20Moultrie%20Update/PLP-Moultrie_Mobile.jpg" alt="Stealth Cam - New for 2024! Revolver 360° Cellular Trail Camera. Shop Now" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}