import Hero from "@/components/hero";
import performaceImg from "@/assets/performance.jpg";

export default function PerformacePage() {
    return (
        <div>
            <Hero imgData={performaceImg}
                imgAlt="welding"
                title="We Serve High Performance Applications" />
        </div>);
}