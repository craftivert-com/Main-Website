import About from "@/components/about";
import Contact from "@/components/contact";
import { Features } from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import { Projects } from "@/components/projects";
import { Team } from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<About />
				<Features />
				{/* <Projects /> */}
				<Team />
				<Journey />
				<Testimonials />
				<Contact /> 
				<Footer />
			</main>
		</>
	)
}
