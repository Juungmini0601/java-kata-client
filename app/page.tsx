'use client'

import Navbar from "@/components/header/Navbar";
import Hero from "@/components/hero/Hero";
import {FeatureCards} from "@/components/featureCard/FeatureCard";
import TestimonialSection from "@/components/testimonialSection/TestimoniaSection";
import CallToActionSection from "@/components/callToActionSection/CallToActionSection";
import Footer from "@/components/footer/Footer";
import {useAuthStore} from "@/stores/useAuthUserStore";
import {useEffect} from "react";
import {getAuthAPI, tokenRefreshAPI} from "@/lib/api/auth";
import {getToken, removeToken, setToken} from "@/lib/localStorage";

export default function IndexPage() {
    const {user, setUser} = useAuthStore();

    useEffect(() => {
        const {accessToken} = getToken() || null;
        if (!accessToken || user) return;

        const fetchUser = async () => {
            const {result, data, error} = await getAuthAPI();
            if (result === 'SUCCESS') {
                setUser(data);
                return;
            }

            if (error) {
                if (error.code === 'E401') {
                    const {result, data, error} = await tokenRefreshAPI(accessToken);
                    if (result === 'SUCCESS') {
                        setToken(data.accessToken, data.refreshToken);

                        const retry = await getAuthAPI()
                        if (retry.result === 'SUCCESS') {
                            setUser(retry.data);
                            return;
                        }

                        if (retry.error) {
                            removeToken();
                            setUser(null);
                        }
                    }

                    if (error) {
                        removeToken();
                        setUser(null);
                        return;
                    }
                }
            }
        }

        fetchUser();
    }, [user, setUser])

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
