import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import {FeatureCards} from "@/components/featureCard/FeatureCard";
import TestimonialSection from "@/components/testimonialSection/TestimoniaSection";
import CallToActionSection from "@/components/callToActionSection/CallToActionSection";
import Footer from "@/components/footer/Footer";

export default function IndexPage() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar/>
            {/* Padding Top Fixed Navbar */}
            <main className='flex-grow pt-16'>
                <Hero/>
                <FeatureCards/>
                <TestimonialSection/>
                <CallToActionSection/>
            </main>
            <Footer/>
        </div>
    );
}
