"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Menu",          id: "products"},
        {
          name: "About",          id: "about"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Exotica"
      button={{
        text: "Reserve a Table",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Experience the Soul of North Indian Cuisine"
      description="Perched high above the city, Exotica offers a refined fine-dining escape with traditional North Indian flavors, lush rooftop gardens, and a magical atmosphere."
      testimonials={[
        {
          name: "Ananya Reddy",          handle: "@ananya_foodie",          testimonial: "The best North Indian food in Banjara Hills. The rooftop setting is just magical.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-sitting-rooftop-restaurant_23-2147891180.jpg"},
        {
          name: "Vikram Sethi",          handle: "@vikram_dines",          testimonial: "Exceptional service and the butter chicken is to die for. Definitely coming back.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-couple-enjoying-restaurant_23-2147891129.jpg"},
        {
          name: "Priya Sharma",          handle: "@priya_sharma",          testimonial: "Stunning ambience for dinner with friends. Loved the kebabs!",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/candles-deers-statue-prepared-desk-waiting-food-visitors-evening-time_146671-14410.jpg"},
        {
          name: "Arjun Rao",          handle: "@arjun_rao",          testimonial: "A truly sophisticated dining experience under the stars.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-sitting-rooftop_23-2147891213.jpg"},
        {
          name: "Sneha K.",          handle: "@sneha_k",          testimonial: "Great staff and even better food. Highly recommended.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081852.jpg"},
      ]}
      buttons={[
        {
          text: "Reserve Now",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-table-arrangement-with-roses_23-2150737381.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-positive-young-man-holding-glass-wine_23-2148454112.jpg",          alt: "Ananya Reddy"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5625.jpg",          alt: "Vikram Sethi"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5658.jpg",          alt: "Priya Sharma"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-looking-away_23-2148454177.jpg",          alt: "Arjun Rao"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-blonde-woman-evening-dress-posing-holding-wine-glass_176420-3786.jpg",          alt: "Sneha K"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="The Art of Exotica"
      description="At Exotica, we blend culinary mastery with an unrivaled rooftop setting in Banjara Hills. Our philosophy revolves around honoring the rich culinary traditions of Northern India through authentic spices, handpicked ingredients, and a sophisticated presentation that elevates every dining moment."
      bulletPoints={[
        {
          title: "Traditional Recipes",          description: "Authentic flavors crafted by our expert chefs using time-honored techniques."},
        {
          title: "Rooftop Oasis",          description: "Dine under the stars in our lush, meticulously curated rooftop garden."},
        {
          title: "Impeccable Service",          description: "Warm, attentive hospitality designed to make every visit memorable."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/traditional-azerbaijani-lula-kebab-table_140725-865.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Panoramic City Views",          description: "Enjoy unmatched views of Banjara Hills while you enjoy your meal.",          imageSrc: "http://img.b2bpic.net/free-photo/laptop-digital-tablet-book-pot-plant-wooden-table-restaurant_23-2147936091.jpg"},
        {
          title: "Culinary Heritage",          description: "A curated menu featuring the finest dishes from the North of India.",          imageSrc: "http://img.b2bpic.net/free-photo/waiter-holding-tray-with-glasses-white-wine-it-serving-them-guests-balcony_181624-57937.jpg"},
        {
          title: "Relaxed Ambience",          description: "Perfect for romantic dinners, family gatherings, or formal meetings.",          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-3472.jpg"},
      ]}
      title="Why Experience Exotica"
      description="More than just a meal, it's a sensory experience built on quality and atmosphere."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Murgh Makhani",          price: "₹650",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-stew-goulash-with-vegetables-served-bowl_1220-7674.jpg"},
        {
          id: "p2",          name: "Dal Bukhara",          price: "₹450",          imageSrc: "http://img.b2bpic.net/free-photo/greenies-qutab-greens-herbs-dough-cook-brown-wood-rustic-desk_140725-14966.jpg"},
        {
          id: "p3",          name: "Paneer Tikka",          price: "₹550",          imageSrc: "http://img.b2bpic.net/free-photo/traditional-homemade-round-fresh-baked-breads-basket_23-2147975212.jpg"},
        {
          id: "p4",          name: "Gosht Dum Biryani",          price: "₹850",          imageSrc: "http://img.b2bpic.net/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-6270.jpg"},
        {
          id: "p5",          name: "Assorted Bread Basket",          price: "₹300",          imageSrc: "http://img.b2bpic.net/free-photo/hot-tendir-bread-table_140725-4758.jpg"},
        {
          id: "p6",          name: "Gulab Jamun",          price: "₹250",          imageSrc: "http://img.b2bpic.net/free-photo/oven-baked-meat-casserole-with-sauce_140725-1066.jpg"},
      ]}
      title="Chef's Signature Dishes"
      description="Explore our menu featuring refined North Indian specialties."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="blur-reveal"
      testimonials={[
        {
          id: "t1",          name: "Rahul Verma",          role: "Food Critic",          testimonial: "The balance of spices is perfection.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-holding-glass_23-2148965394.jpg"},
        {
          id: "t2",          name: "Sonia Mehta",          role: "Regular Guest",          testimonial: "Always a pleasure dining here.",          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196960.jpg"},
        {
          id: "t3",          name: "Amit K.",          role: "Corporate Client",          testimonial: "Excellent environment for meetings.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg"},
        {
          id: "t4",          name: "Neha P.",          role: "Celebration Guest",          testimonial: "Loved the anniversary surprise!",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-portrait_1303-11838.jpg"},
        {
          id: "t5",          name: "Arjun D.",          role: "Frequent Visitor",          testimonial: "Simply the best kebabs in Hyderabad.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-cup_23-2149005452.jpg"},
      ]}
      title="Guest Reflections"
      description="What our patrons say about their experience at Exotica."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="A Legacy of Excellence"
      tag="Trusted Quality"
      metrics={[
        {
          id: "m1",          value: "10,000+",          description: "Happy Guests Served"},
        {
          id: "m2",          value: "15+",          description: "Signature Dishes"},
        {
          id: "m3",          value: "5th",          description: "Floor View Excellence"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you accept reservations?",          content: "Yes, we strongly recommend reserving a table, especially on weekends."},
        {
          id: "q2",          title: "Is the restaurant wheelchair accessible?",          content: "Yes, our premises are fully accessible to ensure a comfortable visit for everyone."},
        {
          id: "q3",          title: "What are your operating hours?",          content: "We are open from 12 PM to 11 PM daily."},
      ]}
      sideTitle="Frequently Asked"
      sideDescription="Questions about our services, timings, and reservations."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      text="Ready to experience the magic of Exotica? Reserve your table today or reach out for special event inquiries."
      buttons={[
        {
          text: "Call Now: 096521 15500",          href: "tel:09652115500"},
        {
          text: "Book Table Online",          href: "https://zomato.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Menu",              href: "#products"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reservations",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
            {
              label: "TripAdvisor",              href: "#"},
          ],
        },
      ]}
      logoText="Exotica Banjara Hills"
      copyrightText="© 2025 Exotica Banjara Hills. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
