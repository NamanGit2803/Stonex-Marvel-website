import React from 'react'
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import DimensionsPictures from "../components/DimensionsPictures";
import DreamTempleBudget from "../components/DreamTempleBudget";
import PoojaRoomJourney from "../components/PoojaRoomJourney";
import ComparisonTable from "../components/ComparisonTable";
import DesignSteps from "../components/DesignSteps";
import ProjectShowcase from "../components/ProjectShowcase";
import ClientCarousel from "../components/ClientCarousel";
import CitySection from "../components/CitySection";
import FAQ from "../components/FAQ";


const MarbleTemple = () => {
  return (
    <div>
        <Hero />

        <DreamTempleBudget />

        <ComparisonTable />

        <DimensionsPictures />

        <DesignSteps />

        <ProjectShowcase />

        <CitySection />


        <ClientCarousel />

        <FAQ />

        <PoojaRoomJourney />
    </div>
  )
}

export default MarbleTemple