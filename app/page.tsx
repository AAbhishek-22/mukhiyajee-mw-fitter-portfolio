import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Mail, MapPin, Phone, User, Wrench, Star, Award, Zap } from "lucide-react"
import { MechanicalBackground } from "@/components/mechanical-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <MechanicalBackground />
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-gray-800">Mukhiya Vishwakarma</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden border-blue-200 text-blue-600 hover:bg-blue-50">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">MW Fitter</Badge>
              <Badge variant="outline" className="border-orange-300 text-orange-600">
                Vishwakarma Heritage
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Mukhiya Vishwakarma
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master Craftsman & Mechanical Works Fitter carrying forward the legacy of Vishwakarma - the divine
              architect and engineer of precision machinery
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin className="h-4 w-4 text-blue-500" />
              <span>SGTPS, Madhya Pradesh</span>
            </div>
            <div className="flex gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Link href="#experience">View Experience</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-200 to-purple-200 shadow-2xl">
                <Image
                  src="/profile_image.png?height=320&width=320&text=Mukhiya+Vishwakarma+Professional+Portrait"
                  alt="Mukhiya Vishwakarma - Professional MW Fitter"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -right-4 p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Vishwakarma Heritage Section */}
        <section className="container py-16 md:py-20 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-100 rounded-3xl my-16 shadow-lg">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Vishwakarma Legacy - Divine Engineering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the footsteps of Lord Vishwakarma, the celestial architect and master craftsman, specializing in
              precision engineering and divine craftsmanship in modern industrial machinery
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <MachineCard
              title="Steam Turbines"
              image="/placeholder.svg?height=200&width=200&text=Steam+Turbine+500MW"
              description="High-pressure steam turbine maintenance & precision alignment"
            />
            <MachineCard
              title="Industrial Boilers"
              image="/placeholder.svg?height=200&width=200&text=Industrial+Boiler+System"
              description="Boiler installation, maintenance & efficiency optimization"
            />
            <MachineCard
              title="Centrifugal Pumps"
              image="/placeholder.svg?height=200&width=200&text=Centrifugal+Pump+Assembly"
              description="Pump maintenance, impeller balancing & seal replacement"
            />
            <MachineCard
              title="Generator Sets"
              image="/placeholder.svg?height=200&width=200&text=Power+Generator+250MW"
              description="Generator rotor maintenance & electrical-mechanical interface"
            />
          </div>
        </section>
      </section>

      {/* About Section */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-800">
              <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am Mukhiya Vishwakarma, a dedicated Mechanical Works Fitter carrying forward the ancient tradition of
              precision craftsmanship. Currently serving at Sanjay Gandhi Thermal Power Station (SGTPS) in Madhya
              Pradesh, I specialize in the installation, maintenance, and repair of critical industrial mechanical
              equipment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With the blessings of Lord Vishwakarma and years of hands-on experience, I ensure that all mechanical
              systems operate at optimal efficiency. My expertise encompasses precision fitting, complex
              troubleshooting, preventive maintenance protocols, and the divine art of mechanical engineering.
            </p>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Vishwakarma Tradition</p>
                <p className="text-sm text-gray-600">
                  Following the path of divine craftsmanship and precision engineering
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-2xl mb-2 text-blue-700">15+</h3>
                <p className="text-blue-600">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-2xl mb-2 text-green-700">100+</h3>
                <p className="text-green-600">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-2xl mb-2 text-purple-700">100%</h3>
                <p className="text-purple-600">Client Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-2xl mb-2 text-orange-700">24/7</h3>
                <p className="text-orange-600">Support Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard title="Equipment Installation" level={95} color="blue" />
            <SkillCard title="Preventive Maintenance" level={98} color="green" />
            <SkillCard title="Mechanical Repairs" level={90} color="purple" />
            <SkillCard title="Blueprint Reading" level={85} color="orange" />
            <SkillCard title="Precision Welding" level={80} color="red" />
            <SkillCard title="System Troubleshooting" level={92} color="cyan" />
            <SkillCard title="Quality Control" level={88} color="pink" />
            <SkillCard title="Safety Protocols" level={100} color="emerald" />
          </div>
        </div>
      </section>

      {/* Equipment Gallery Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Precision Machinery Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EquipmentCard
            title="CNC Lathe Machine"
            image="/placeholder.svg?height=300&width=400&text=CNC+Lathe+Machine+Industrial"
            specs={["Precision: ±0.005mm", "Max Diameter: 600mm", "Length: 2500mm", "Chuck Speed: 4000 RPM"]}
          />
          <EquipmentCard
            title="Hydraulic Press 300T"
            image="/placeholder.svg?height=300&width=400&text=Hydraulic+Press+300+Ton"
            specs={["Pressure: 300 Ton", "Stroke: 800mm", "Table: 1000x800mm", "Control: PLC Automated"]}
          />
          <EquipmentCard
            title="5-Axis Milling Center"
            image="/placeholder.svg?height=300&width=400&text=5+Axis+CNC+Milling+Machine"
            specs={["5-Axis Simultaneous", "Spindle: 12000 RPM", "Travel: 1200x600x500mm", "Tool Changer: 40 ATC"]}
          />
          <EquipmentCard
            title="TIG/MIG Welding Station"
            image="/placeholder.svg?height=300&width=400&text=Professional+Welding+Station"
            specs={["TIG/MIG/Stick Capable", "Current: 400A", "Duty Cycle: 100%", "Pulse Control: Digital"]}
          />
          <EquipmentCard
            title="Surface Grinder"
            image="/placeholder.svg?height=300&width=400&text=Precision+Surface+Grinder"
            specs={["Magnetic Chuck: 500x200mm", "Wheel: 400mm", "Precision: 0.0005mm", "Auto Feed: Available"]}
          />
          <EquipmentCard
            title="Radial Drill Press"
            image="/placeholder.svg?height=300&width=400&text=Radial+Drill+Press+Heavy+Duty"
            specs={["Capacity: 50mm", "Arm Reach: 1500mm", "Speed Range: 31-1400 RPM", "Tapping: Available"]}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-800">
            <div className="p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            Professional Journey
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Senior MW Fitter & Team Lead"
              company="Sanjay Gandhi Thermal Power Station (SGTPS)"
              location="Madhya Pradesh"
              period="2018 - Present"
              description="Leading a team of skilled fitters in critical power generation equipment maintenance. Responsible for 500MW steam turbine overhauls, generator rotor balancing, and implementing advanced predictive maintenance protocols. Achieved 99.8% equipment uptime through precision engineering."
            />
            <ExperienceCard
              title="MW Fitter - Specialist"
              company="Sanjay Gandhi Thermal Power Station (SGTPS)"
              location="Madhya Pradesh"
              period="2012 - 2018"
              description="Specialized in high-pressure boiler systems, centrifugal pump maintenance, and valve actuator installations. Conducted precision alignments using laser technology and implemented vibration analysis for rotating equipment. Reduced maintenance costs by 25% through preventive strategies."
            />
            <ExperienceCard
              title="Junior Fitter - Apprentice"
              company="Sanjay Gandhi Thermal Power Station (SGTPS)"
              location="Madhya Pradesh"
              period="2008 - 2012"
              description="Completed comprehensive training in mechanical fitting under master craftsmen. Learned precision measurement techniques, blueprint interpretation, and safety protocols. Specialized in hand tools, measuring instruments, and basic machining operations."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Notable Engineering Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="500MW Steam Turbine Overhaul"
            description="Complete precision overhaul including rotor balancing, blade inspection, and bearing replacement. Achieved 0.02mm alignment accuracy."
            image="/placeholder.svg?height=250&width=350&text=Steam+Turbine+500MW+Overhaul"
            equipment="Steam Turbine Generator"
            duration="45 days"
          />
          <ProjectCard
            title="Boiler Feed Pump Restoration"
            description="Critical pump system restoration with impeller machining, seal replacement, and performance optimization. Improved efficiency by 15%."
            image="/placeholder.svg?height=250&width=350&text=Boiler+Feed+Pump+System"
            equipment="Centrifugal Pump System"
            duration="20 days"
          />
          <ProjectCard
            title="Cooling Tower Upgrade"
            description="Complete cooling system modernization with new heat exchangers, piping, and control systems for enhanced thermal efficiency."
            image="/placeholder.svg?height=250&width=350&text=Cooling+Tower+Heat+Exchanger"
            equipment="Heat Exchanger Unit"
            duration="60 days"
          />
          <ProjectCard
            title="Generator Rotor Precision Balancing"
            description="High-precision dynamic balancing of 250MW generator rotor using advanced vibration analysis and correction weights."
            image="/placeholder.svg?height=250&width=350&text=Generator+Rotor+Balancing"
            equipment="Generator Rotor Assembly"
            duration="30 days"
          />
          <ProjectCard
            title="Pneumatic Valve Automation"
            description="Installation and calibration of 50+ pneumatic valve actuators with digital control systems for improved process automation."
            image="/placeholder.svg?height=250&width=350&text=Pneumatic+Valve+Actuator"
            equipment="Pneumatic Actuator System"
            duration="35 days"
          />
          <ProjectCard
            title="Coal Conveyor System Overhaul"
            description="Complete conveyor system renovation including belt replacement, roller alignment, and drive system upgrade for 2km conveyor line."
            image="/placeholder.svg?height=250&width=350&text=Industrial+Conveyor+Belt+System"
            equipment="Industrial Conveyor System"
            duration="90 days"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Connect with Master Craftsman</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">+91 98XXXXXXXX</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">mukhiya.vishwakarma@sgtps.co.in</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">SGTPS, Birsinghpur, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Project inquiry or consultation"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Describe your mechanical engineering requirements..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-gray-800">Mukhiya Vishwakarma</span>
                <p className="text-sm text-gray-500">Master Craftsman & MW Fitter</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Mukhiya Vishwakarma. Blessed by Vishwakarma. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, level, color }: { title: string; level: number; color: string }) {
  const colorClasses = {
    blue: "from-blue-400 to-blue-600",
    green: "from-green-400 to-green-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    cyan: "from-cyan-400 to-cyan-600",
    pink: "from-pink-400 to-pink-600",
    emerald: "from-emerald-400 to-emerald-600",
  }

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-gray-100">
      <CardContent className="p-6">
        <h3 className="font-medium mb-3 text-gray-800">{title}</h3>
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div
            className={`bg-gradient-to-r ${colorClasses[color]} h-3 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${level}%` }}
          />
        </div>
        <p className="text-right text-sm text-gray-600 mt-2 font-medium">{level}%</p>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: {
  title: string
  company: string
  location: string
  period: string
  description: string
}) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-100">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600">
              {company} | {location}
            </p>
          </div>
          <Badge className="mt-2 md:mt-0 w-fit bg-gradient-to-r from-blue-500 to-purple-600 text-white">{period}</Badge>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  image,
  equipment,
  duration,
}: {
  title: string
  description: string
  image: string
  equipment?: string
  duration?: string
}) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        {equipment && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            {equipment}
          </Badge>
        )}
        {duration && (
          <Badge variant="outline" className="absolute top-4 right-4 bg-white/90 text-gray-700 border-gray-300">
            {duration}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

function MachineCard({
  title,
  image,
  description,
}: {
  title: string
  image: string
  description: string
}) {
  return (
    <div className="text-center group cursor-pointer">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/60 group-hover:border-white/80 transition-all duration-300 shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function EquipmentCard({
  title,
  image,
  specs,
}: {
  title: string
  image: string
  specs: string[]
}) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-blue-50">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <div className="space-y-2">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
              <span className="text-sm text-gray-600">{spec}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
