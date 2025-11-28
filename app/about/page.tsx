import { Metadata } from "next";
import Link from "next/link";
import { Zap, Heart, BookOpen, Users, Leaf } from "lucide-react";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "About ev.makr.io - Built by a New EV Owner, For New EV Owners",
  description:
    "Learn about ev.makr.io - an educational resource created by a new 2026 Subaru Solterra owner to help other new EV owners navigate the transition to electric mobility.",
  keywords: ["about ev.makr.io", "new EV owner", "electric vehicle education"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-eco-green text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-eco-green/20 text-eco-green-light px-4 py-2 rounded-full mb-6">
            <Leaf size={16} />
            <span className="text-sm font-semibold">Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About ev.makr.io</h1>
          <p className="text-xl md:text-2xl text-white/90">
            An educational resource built by a new EV owner, for new EV owners
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal flex items-center gap-3">
            <Zap className="text-electric-blue" size={32} />
            The Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Hi! I'm a new EV owner who just purchased a 2026 Subaru Solterra Touring
              XT in November 2025. Like many first-time EV buyers, I was immediately
              overwhelmed by the sheer amount of information, apps, charging networks,
              and conflicting advice out there.
            </p>
            <p>
              I spent weeks researching charging levels, connector standards (NACS vs.
              CCS1), federal incentives (which ended in September 2025), state rebates,
              home charger installation requirements, essential apps (PlugShare, ABRP,
              network-specific apps), battery care best practices, real-world range
              expectations, and so much more.
            </p>
            <p>
              Here's what I realized: <strong>there wasn't a single, comprehensive,
              beginner-friendly resource</strong> that answered all my practical
              questions without trying to sell me something. Most content was either:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6">
              <li>Written by automotive journalists (not new owners)</li>
              <li>Sponsored by manufacturers or charging networks</li>
              <li>Too technical and assumed prior knowledge</li>
              <li>Outdated (still referencing tax credits that ended)</li>
              <li>Focused on selling vehicles rather than educating</li>
            </ul>
            <p>
              So I decided to create the resource I wish I had when I started:
              <strong> an honest, independent, beginner-friendly educational site
              </strong> written from the perspective of someone learning alongside you.
            </p>
          </div>
        </section>

        {/* The Mission */}
        <section className="mb-16 bg-neutral-light rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal flex items-center gap-3">
            <Heart className="text-electric-green" size={32} />
            The Mission
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              <strong>ev.makr.io exists to demystify electric vehicle ownership</strong>{" "}
              through practical guides, vehicle comparisons, and tools that build
              confidence in the transition to electric mobility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-neutral-charcoal">
                  ✓ What We Are
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Educational and independent</li>
                  <li>• Beginner-friendly</li>
                  <li>• Transparent about data sources</li>
                  <li>• Written by a new owner learning alongside you</li>
                  <li>• Free and accessible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-neutral-charcoal">
                  ✗ What We're Not
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Not affiliated with any manufacturer</li>
                  <li>• Not a sales or review site</li>
                  <li>• Not sponsored by charging networks</li>
                  <li>• Not professional automotive advice</li>
                  <li>• Not a substitute for your owner's manual</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Content Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal flex items-center gap-3">
            <BookOpen className="text-electric-yellow" size={32} />
            Content Philosophy
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="font-bold text-xl mb-2">Always Cite Sources</h3>
              <p className="text-gray-700">
                Every specification is verified from official manufacturer websites,
                EPA FuelEconomy.gov, or other authoritative sources. We include the data
                source and last verification date on every vehicle.
              </p>
            </div>
            <div className="border-l-4 border-electric-green pl-6">
              <h3 className="font-bold text-xl mb-2">Safety First</h3>
              <p className="text-gray-700">
                Electrical installation, battery care, and safety information always
                includes prominent disclaimers reminding you to consult professionals
                and your vehicle's owner's manual.
              </p>
            </div>
            <div className="border-l-4 border-electric-yellow pl-6">
              <h3 className="font-bold text-xl mb-2">Current & Accurate</h3>
              <p className="text-gray-700">
                We update content regularly to reflect changes (like the end of federal
                tax credits in September 2025, the adoption of NACS connectors in 2026
                models, etc.). Outdated information is corrected immediately.
              </p>
            </div>
            <div className="border-l-4 border-electric-blue pl-6">
              <h3 className="font-bold text-xl mb-2">Real-World Perspective</h3>
              <p className="text-gray-700">
                This isn't written by a professional reviewer. It's written by someone
                who just bought their first EV, made mistakes, learned lessons, and
                wants to help others avoid the same confusion.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal flex items-center gap-3">
            <Users className="text-electric-green" size={32} />
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-light rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Considering an EV</h3>
              <p className="text-sm text-gray-600">
                Learn about costs, range, charging infrastructure, and whether an EV
                fits your lifestyle before making the purchase.
              </p>
            </div>
            <div className="bg-neutral-light rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Just Got an EV</h3>
              <p className="text-sm text-gray-600">
                Your first week can be overwhelming. Our guides walk you through
                charging, apps, the 80% rule, and everything you need to know.
              </p>
            </div>
            <div className="bg-neutral-light rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Current EV Owners</h3>
              <p className="text-sm text-gray-600">
                Deep dives on battery care, road trip planning, home charging
                optimization, and advanced topics.
              </p>
            </div>
          </div>
        </section>

        {/* Built With */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-neutral-charcoal">Built With</h2>
          <p className="text-gray-700 mb-4">
            ev.makr.io is an open-source educational project built with:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Next.js 15</strong> - Modern React framework</li>
            <li>• <strong>TypeScript</strong> - Type-safe development</li>
            <li>• <strong>Tailwind CSS v4</strong> - Beautiful, responsive design</li>
            <li>• <strong>MDX</strong> - Rich content with React components</li>
            <li>• <strong>No external database</strong> - All data in version-controlled JSON files</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Part of the{" "}
            <a
              href="https://makr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-blue hover:underline font-semibold"
            >
              makr.io
            </a>{" "}
            family of projects.
          </p>
        </section>

        {/* Important Disclaimer */}
        <DisclaimerBox type="info">
          <p className="mb-2">
            <strong>About Data Accuracy:</strong> While I strive for accuracy, I'm a
            new EV owner, not a professional automotive expert. All vehicle
            specifications are verified from official manufacturer sources and EPA
            FuelEconomy.gov, but you should always verify current information directly
            with manufacturers before making purchasing decisions.
          </p>
          <p>
            This site is educational only and not a substitute for professional advice
            or your vehicle's owner's manual. Always consult qualified professionals for
            electrical work, mechanical service, and other technical matters.
          </p>
        </DisclaimerBox>

        {/* Contact/Feedback */}
        <section className="mt-12 bg-electric-blue text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="mb-6">
            Found an error? Have a suggestion? Want to contribute your own EV ownership
            experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://github.com/renedeanda/ev.makr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-electric-blue px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center"
            >
              View on GitHub
            </Link>
            <Link
              href="/guides"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Read the Guides
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
