import Hero from "@/components/hero";
import scaleImg from "@/assets/scale.jpg";


export default function ScalePage() {
    return (
        <div>
            <Hero imgData={scaleImg}
                imgAlt="steel factory"
                title="Scale your App to Infinity"/>
        </div>
    );
}