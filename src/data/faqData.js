/**
 * ITETHIK Hierarchical & Context-Aware FAQ Data Registry
 * 
 * Simple, natural, and friendly questions that everyday customers,
 * homeowners, students, and business owners actually ask.
 */

export const FAQ_REGISTRY = {
  // =========================================================================
  // LEVEL 1: HOME PAGE — COMPANY LEVEL
  // =========================================================================
  'company': {
    level: 'company',
    badge: 'Company Overview',
    title: 'Frequently Asked Questions',
    subtitle: 'Quick and simple answers to common questions about our services and support.',
    theme: 'cyan',
    faqs: [
      {
        id: 'company-1',
        question: 'What services do you offer?',
        answer: 'We provide complete tech services including laptop and computer repair, custom and new PC builds, CCTV security cameras, intercom setups, website design, and local SEO.',
        intent: 'General / Overview'
      },
      {
        id: 'company-2',
        question: 'Where are you located and which areas do you serve?',
        answer: 'We are based in Ulwe, Navi Mumbai, and actively serve Ulwe, Seawoods, Nerul, Belapur, Kharghar, Panvel, and across the Mumbai MMR region.',
        intent: 'Location'
      },
      {
        id: 'company-3',
        question: 'Do you offer doorstep pickup or on-site visits?',
        answer: 'Yes! We offer convenient doorstep pickup and delivery for computer repairs, as well as on-site visits for CCTV installations, office setups, and troubleshooting.',
        intent: 'Convenience'
      },
      {
        id: 'company-4',
        question: 'How can I get a quote or book a service?',
        answer: 'You can call or WhatsApp us at +91 8976765350, or fill out our simple online form to get a quick, free estimate within hours.',
        intent: 'Booking'
      },
      {
        id: 'company-5',
        question: 'Do you give a warranty on repairs and parts?',
        answer: 'Yes, all our hardware repairs come with testing warranties (30 to 90 days), and new replacement parts carry official manufacturer warranties from 1 to 3 years.',
        intent: 'Warranty'
      },
      {
        id: 'company-6',
        question: 'What are your working hours?',
        answer: 'We are open Monday to Saturday from 9:30 AM to 8:30 PM, and available for scheduled emergency support on Sundays.',
        intent: 'Timing'
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: MAIN SERVICE PAGES — SERVICE CATEGORY LEVEL
  // =========================================================================

  // --- 2.1 General Services Index ---
  'services': {
    level: 'main-service',
    badge: '',
    title: 'Service & Pricing FAQs',
    subtitle: '',
    theme: 'cyan',
    faqs: [
      {
        id: 'services-1',
        question: 'How do I know which service is right for me?',
        answer: 'Just give us a quick call or message describing your requirement, and our team will recommend the most cost-effective solution with no pressure.',
        intent: 'Advice'
      },
      {
        id: 'services-2',
        question: 'Do you serve both homes and businesses?',
        answer: 'Yes, we help individual homeowners, students, and freelancers, as well as retail shops, schools, and corporate offices.',
        intent: 'Eligibility'
      },
      {
        id: 'services-3',
        question: 'How much time does a typical repair or service take?',
        answer: 'Most standard computer repairs and tune-ups are finished within 24 to 48 hours. Quick part replacements like SSD or screen swaps are often done the same day.',
        intent: 'Timing'
      },
      {
        id: 'services-4',
        question: 'Do you offer Annual Maintenance Contracts (AMC)?',
        answer: 'Yes, we have flexible AMC maintenance plans for computers, CCTV systems, and websites for homes, societies, and offices.',
        intent: 'Contracts'
      },
      {
        id: 'services-6',
        question: 'Can I get an upfront price estimate before work starts?',
        answer: 'Yes, we inspect the issue first, tell you the exact cost upfront, and only start work after you give us your green signal.',
        intent: 'Transparency'
      }
    ]
  },

  // --- 2.2 Maintenance Services (Main Category) ---
  'maintenance': {
    level: 'main-service',
    badge: 'IT Maintenance',
    title: 'Maintenance FAQs',
    subtitle: 'Simple answers on keeping your computers, CCTV, and systems running smoothly.',
    theme: 'purple',
    faqs: [
      {
        id: 'maint-1',
        question: 'Do you maintain systems for both homes and offices?',
        answer: 'Yes. We maintain computers and CCTV systems for home users, offices, and other business spaces.',
        intent: 'Coverage'
      },
      {
        id: 'maint-2',
        question: 'Why should I service my computer or CCTV regularly?',
        answer: 'Regular cleaning and checkups keep devices running cool and fast, preventing sudden breakdowns and saving you from costly replacement expenses.',
        intent: 'Benefits'
      },
      {
        id: 'maint-3',
        question: 'How often should my systems be serviced?',
        answer: 'We recommend servicing laptops and desktop PCs every 6 months, and checking CCTV camera networks every 3 to 6 months.',
        intent: 'Frequency'
      }
    ]
  },

  // --- 2.3 Computer Services (Main Category) ---
  'computer-services': {
    level: 'main-service',
    badge: 'Computer Solutions',
    title: 'Computer Assembly & Buying FAQs',
    subtitle: 'Helpful answers on custom desktops, new PCs, and certified refurbished systems.',
    theme: 'cyan',
    faqs: [
      {
        id: 'comp-serv-1',
        question: 'Can you help me build or buy a computer for my exact needs?',
        answer: 'Yes! Whether you need a PC for basic office work, school, gaming, video editing, or 3D design, we recommend the right parts that fit your budget.',
        intent: 'Guidance'
      },
      {
        id: 'comp-serv-2',
        question: 'Is a custom-built PC better than a ready-made branded computer?',
        answer: 'Yes, custom PCs give you better quality parts, better cooling, zero junk software, and the ability to easily upgrade parts in the future.',
        intent: 'Comparison'
      },
      {
        id: 'comp-serv-3',
        question: 'Do you sell certified refurbished laptops and desktops?',
        answer: 'Yes, we supply thoroughly tested, high-grade refurbished computers (Dell, HP, Lenovo) with new SSDs and warranty at 50% to 70% lower prices.',
        intent: 'Refurbished'
      },
      {
        id: 'comp-serv-4',
        question: 'How long does it take to assemble and deliver a PC?',
        answer: 'Once you finalize the parts, we assemble, stress-test, and deliver your ready-to-use PC within 24 to 48 hours.',
        intent: 'Delivery Time'
      },
      {
        id: 'comp-serv-5',
        question: 'Do brand-new computers come with a warranty?',
        answer: 'Yes, all individual parts come with 3 to 10 years of official brand warranties, plus 1 year of free service support from ITETHIK.',
        intent: 'Warranty'
      },
      {
        id: 'comp-serv-6',
        question: 'Can you supply bulk computers for offices and computer labs?',
        answer: 'Yes, we supply and set up multiple desktop systems for corporate offices, call centers, and schools with on-site installation.',
        intent: 'Bulk Orders'
      }
    ]
  },

  // --- 2.4 Repairing Services (Main Category) ---
  'repairing-services': {
    level: 'main-service',
    badge: 'Hardware Repairs',
    title: 'Computer Repair FAQs',
    subtitle: 'Straightforward answers about diagnosing problems, screen replacements, and costs.',
    theme: 'purple',
    faqs: [
      {
        id: 'repair-serv-1',
        question: 'What kinds of laptop and computer problems do you fix?',
        answer: 'We fix dead motherboards, broken screens, non-working keyboards, battery drain issues, slow performance, blue-screen errors, and liquid damage.',
        intent: 'Issues'
      },
      {
        id: 'repair-serv-2',
        question: 'How long does a diagnosis take?',
        answer: 'Basic diagnosis takes about 1 to 2 hours. For complex dead motherboards, we do an in-depth chip check within 24 hours.',
        intent: 'Diagnosis'
      },
      {
        id: 'repair-serv-3',
        question: 'Is my personal data safe while you repair my laptop?',
        answer: 'Yes, 100%. We never touch or delete your personal files and photos. We can also take a full backup before starting repairs if you prefer.',
        intent: 'Data Privacy'
      },
      {
        id: 'repair-serv-4',
        question: 'What is chip-level repair and how does it save money?',
        answer: 'Instead of replacing the expensive entire motherboard, our technician replaces only the tiny faulty chip or component, saving you up to 70% of the cost.',
        intent: 'Cost Savings'
      },
      {
        id: 'repair-serv-5',
        question: 'Do you pick up and deliver laptops at home?',
        answer: 'Yes, we provide free doorstep pickup and return delivery across Navi Mumbai with a safe receipt and tracking.',
        intent: 'Doorstep Pickup'
      },
      {
        id: 'repair-serv-6',
        question: 'Do you give a warranty on repaired parts?',
        answer: 'Yes, our repairs include a 30 to 90-day testing warranty, and new parts like screens or batteries include 1 to 3-year brand warranties.',
        intent: 'Warranty'
      }
    ]
  },

  // --- 2.5 Security Services (Main Category) ---
  'security-services': {
    level: 'main-service',
    badge: 'Security & Surveillance',
    title: 'Security & CCTV FAQs',
    subtitle: 'Clear answers on security camera types, phone viewing, and home intercoms.',
    theme: 'emerald',
    faqs: [
      {
        id: 'sec-serv-1',
        question: 'What types of CCTV cameras do you install?',
        answer: 'We install clear HD and 4K IP cameras, night-vision color cameras, Wi-Fi cameras for homes, and video door phones for apartments and offices.',
        intent: 'Products'
      },
      {
        id: 'sec-serv-2',
        question: 'Can I watch my CCTV camera footage on my phone?',
        answer: 'Yes! We configure a free mobile app on your Android or iPhone so you can view live video, playback past footage, and get alerts from anywhere.',
        intent: 'Mobile Access'
      },
      {
        id: 'sec-serv-3',
        question: 'How many cameras do I need for my home or shop?',
        answer: 'A typical 1-2 BHK home needs 2 to 3 cameras. A small shop or office usually needs 4 to 8 cameras to cover entrances, cash counters, and inventory.',
        intent: 'Camera Count'
      },
      {
        id: 'sec-serv-4',
        question: 'How many days of camera recording will be saved?',
        answer: 'Depending on the hard drive size (1TB to 4TB), recordings are typically stored safely for 15 to 45 days before automatically looping.',
        intent: 'Storage'
      },
      {
        id: 'sec-serv-5',
        question: 'Do you provide intercom and video door phones?',
        answer: 'Yes, we install color video door phones for flats and offices, as well as multi-flat intercom systems for residential societies.',
        intent: 'Intercom'
      },
      {
        id: 'sec-serv-6',
        question: 'Can you repair or upgrade my existing CCTV setup?',
        answer: 'Yes, we fix non-working cameras, replace power adapters, clean lenses, add extra cameras, and upgrade old analog systems to modern IP cameras.',
        intent: 'Repairs'
      }
    ]
  },

  // --- 2.6 Digital Solutions (Main Category) ---
  'digital-solutions': {
    level: 'main-service',
    badge: 'Digital Solutions',
    title: 'Web & Digital FAQs',
    subtitle: 'Answers about websites, local Google rankings, and digital business cards.',
    theme: 'blue',
    faqs: [
      {
        id: 'dig-serv-1',
        question: 'What web and digital services do you provide?',
        answer: 'We build modern business websites, optimize Google Business profiles for local SEO, and provide smart NFC digital business cards.',
        intent: 'Services'
      },
      {
        id: 'dig-serv-2',
        question: 'How long does it take to make a business website?',
        answer: 'A standard 5 to 7-page business website is ready to launch within 7 to 12 days, including testing and mobile optimization.',
        intent: 'Timeframe'
      },
      {
        id: 'dig-serv-3',
        question: 'How does local SEO help me get more local customers?',
        answer: 'Local SEO helps your business appear at the top of Google Maps and search results when nearby people search for the services you offer.',
        intent: 'Local SEO'
      },
      {
        id: 'dig-serv-4',
        question: 'What is a digital smart business card?',
        answer: 'It is an NFC card that shares your phone number, social links, and website with a single tap on any smartphone—no paper printing needed.',
        intent: 'Digital Cards'
      },
      {
        id: 'dig-serv-5',
        question: 'Will my website work smoothly on all mobile phones?',
        answer: 'Yes, 100% of our websites are mobile-friendly and look great on iPhones, Android phones, tablets, and laptops.',
        intent: 'Responsiveness'
      },
      {
        id: 'dig-serv-6',
        question: 'Do you help update the website after it launches?',
        answer: 'Yes, we provide easy maintenance packages to update text, photos, and offers whenever you need changes.',
        intent: 'Updates'
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: SUB-SERVICE PAGES — SPECIFIC SERVICE LEVEL
  // =========================================================================

  // --- 3.1 Computer & Laptop Maintenance ---
  'computer-laptop-maintenance': {
    level: 'sub-service',
    badge: 'PC & Laptop Care',
    title: 'Laptop & PC Servicing FAQs',
    subtitle: 'Simple answers on cooling, thermal paste, cleaning, and performance boosts.',
    theme: 'purple',
    faqs: [
      {
        id: 'clm-1',
        question: 'How often should I clean and service my laptop?',
        answer: 'It is best to service your laptop once every 6 to 12 months, or sooner if the fan is noisy, the body feels hot, or it starts running slowly.',
        intent: 'Frequency'
      },
      {
        id: 'clm-2',
        question: 'What is included in routine laptop servicing?',
        answer: 'We remove internal dust from fans, apply fresh thermal paste, clean ports, run virus scans, and clean up junk files to speed up boot times.',
        intent: 'Process'
      },
      {
        id: 'clm-3',
        question: 'Can servicing fix a slow or overheating laptop?',
        answer: 'Yes! Replacing dried thermal paste and cleaning the cooling fan drops temperatures significantly and stops the laptop from lagging.',
        intent: 'Overheating'
      },
      {
        id: 'clm-4',
        question: 'Do you do on-site maintenance for offices and schools?',
        answer: 'Yes, we visit offices, institutes, and shops to clean and tune up multiple computers in one visit.',
        intent: 'On-site'
      },
      {
        id: 'clm-5',
        question: 'Why does dust and dried thermal paste slow down my PC?',
        answer: 'When heat cannot escape, the processor automatically slows down to protect itself from burning out. Servicing restores normal fast speeds.',
        intent: 'Technical explanation'
      },
      {
        id: 'clm-6',
        question: 'Does servicing include virus removal and speed cleanup?',
        answer: 'Yes, we scan for malware, remove annoying popup software, and optimize startup apps so your computer turns on faster.',
        intent: 'Software cleanup'
      }
    ]
  },

  // --- 3.2 CCTV Maintenance ---
  'cctv-maintenance': {
    level: 'sub-service',
    badge: 'CCTV Servicing',
    title: 'CCTV Maintenance FAQs',
    subtitle: 'Helpful questions on camera clarity, recording checks, and maintenance visits.',
    theme: 'rose',
    faqs: [
      {
        id: 'cctvm-1',
        question: 'What is included in a CCTV maintenance check?',
        answer: 'We clean camera lenses, check night vision lights, test hard drive recording, inspect power adapters, and tighten loose wire connections.',
        intent: 'Checkup details'
      },
      {
        id: 'cctvm-2',
        question: 'Why is my camera video blurry or flickering at night?',
        answer: 'Blurriness or flickering is usually due to dust on the lens, weak power supplies, loose connectors, or failing night-vision infrared lights.',
        intent: 'Troubleshooting'
      },
      {
        id: 'cctvm-3',
        question: 'How often should CCTV cameras and hard drives be checked?',
        answer: 'We recommend checking security cameras every 3 to 6 months to make sure all cameras are recording properly and storing video.',
        intent: 'Frequency'
      },
      {
        id: 'cctvm-4',
        question: 'Do you offer CCTV maintenance contracts (AMC) for societies?',
        answer: 'Yes, we provide AMC plans for housing societies, shops, and warehouses with regular checkups and quick breakdown support.',
        intent: 'AMC'
      },
      {
        id: 'cctvm-5',
        question: 'Can you fix broken wires and camera connectors on-site?',
        answer: 'Yes, our technicians carry spare cables, power supplies, and connectors to fix video feed issues immediately at your location.',
        intent: 'On-site repairs'
      },
      {
        id: 'cctvm-6',
        question: 'What happens if a camera stops recording?',
        answer: 'We check whether the hard drive is full, faulty, or if the power supply has failed, and fix or replace the component quickly.',
        intent: 'Recording issues'
      }
    ]
  },

  // --- 3.3 Web Development Maintenance ---
  'web-maintenance': {
    level: 'sub-service',
    badge: 'Website Care',
    title: 'Website Maintenance FAQs',
    subtitle: 'Straightforward answers on website security, backups, speed, and updates.',
    theme: 'blue',
    faqs: [
      {
        id: 'web-maint-1',
        question: 'What is included in website maintenance?',
        answer: 'Our maintenance includes security updates, automated cloud backups, malware checks, uptime monitoring, and small monthly content updates.',
        intent: 'Features'
      },
      {
        id: 'web-maint-2',
        question: 'Why is regular website maintenance important?',
        answer: 'Without updates, websites can become slow, vulnerable to hackers, or break when browsers update. Maintenance keeps your site safe and fast.',
        intent: 'Value'
      },
      {
        id: 'web-maint-3',
        question: 'How often do you take backups of my website?',
        answer: 'We set up automated daily and weekly backups saved safely in the cloud so your website can be restored with one click if anything happens.',
        intent: 'Backups'
      },
      {
        id: 'web-maint-4',
        question: 'How fast do you fix website issues if my site goes down?',
        answer: 'We have 24/7 uptime alerts and usually investigate and fix server or website downtime issues within 1 to 2 hours.',
        intent: 'Downtime'
      },
      {
        id: 'web-maint-5',
        question: 'Can you make my website load faster?',
        answer: 'Yes, we compress heavy images, clean up unnecessary code, and enable caching so pages open quickly on mobile devices.',
        intent: 'Speed'
      },
      {
        id: 'web-maint-6',
        question: 'Do you help update text, images, and prices on my site?',
        answer: 'Yes, just send us the new text or photos via WhatsApp or email, and we update your website promptly.',
        intent: 'Content changes'
      }
    ]
  },

  // --- 3.4 Custom PC Building ---
  'custom-pc-building': {
    level: 'sub-service',
    badge: 'Custom PC Builds',
    title: 'Custom PC FAQs',
    subtitle: 'Useful details about warranty, future upgrades, and delivery timing.',
    theme: 'cyan',
    faqs: [
      {
        id: 'cpc-reuse-parts',
        question: 'Can I reuse parts from my current PC?',
        answer: 'Yes. We can check your existing components for condition and compatibility before recommending what to keep or replace in your new build.',
        intent: 'Compatibility'
      },
      {
        id: 'cpc-upgrades',
        question: 'Can I upgrade the PC in the future?',
        answer: 'Yes. Tell us about planned upgrades when we choose the parts, and we can recommend compatible components and a configuration that supports your upgrade goals.',
        intent: 'Upgrades'
      },
      {
        id: 'cpc-delivery-time',
        question: 'How long does it take to build and deliver my custom PC?',
        answer: 'Once parts are confirmed, we assemble, test, and deliver your computer to your home within 1 to 2 business days.',
        intent: 'Delivery timing'
      }
    ]
  },

  // --- 3.5 New PC Building ---
  'new-pc-building': {
    level: 'sub-service',
    badge: 'New Desktop PCs',
    title: 'Brand-New PC FAQs',
    subtitle: 'Simple answers on office PCs, home desktops, Windows setup, and delivery.',
    theme: 'cyan',
    faqs: [
      {
        id: 'npc-1',
        question: 'Which PC configuration is best for home or office work?',
        answer: 'For office work, accounting, Tally, and online classes, a modern Intel Core i3 or i5 processor with 16GB RAM and a fast SSD is ideal.',
        intent: 'Recommendation'
      },
      {
        id: 'npc-2',
        question: 'Do new PCs come with Windows and basic apps installed?',
        answer: 'Yes, we install genuine Windows 11, essential software, antivirus, and office tools so your PC is completely ready to plug and use.',
        intent: 'Software'
      },
      {
        id: 'npc-3',
        question: 'Can I customize the RAM and SSD storage?',
        answer: 'Yes, you can choose any amount of RAM (8GB, 16GB, 32GB) and storage (SSD or HDD) depending on your needs.',
        intent: 'Customization'
      },
      {
        id: 'npc-4',
        question: 'How quickly can you deliver a new PC in Navi Mumbai?',
        answer: 'Standard office and home desktops are assembled, tested, and delivered within 24 to 48 hours.',
        intent: 'Delivery'
      },
      {
        id: 'npc-5',
        question: 'What warranty comes with brand-new computers?',
        answer: 'All new PCs include 1 to 3 years of individual component warranties from the manufacturers, plus our 1-year free service support.',
        intent: 'Warranty'
      },
      {
        id: 'npc-6',
        question: 'Do you set up the computer, monitor, and printer on my desk?',
        answer: 'Yes, on delivery, our technician sets up the screen, keyboard, mouse, printer drivers, and Wi-Fi connection right at your desk.',
        intent: 'Installation'
      }
    ]
  },

  // --- 3.6 Refurbished PC Building ---
  'refurbished-pc-building': {
    level: 'sub-service',
    badge: 'Refurbished PCs',
    title: 'Certified Refurbished PC FAQs',
    subtitle: 'Answers on commercial grade refurbished desktops, testing, and savings.',
    theme: 'blue',
    faqs: [
      {
        id: 'rpc-1',
        question: 'What is a certified refurbished PC?',
        answer: 'It is a durable business desktop (Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre) that is thoroughly tested, cleaned, and upgraded with new parts.',
        intent: 'Definition'
      },
      {
        id: 'rpc-2',
        question: 'How much money can I save with a refurbished computer?',
        answer: 'You save 50% to 70% compared to buying a brand-new machine while getting reliable commercial-grade performance.',
        intent: 'Savings'
      },
      {
        id: 'rpc-3',
        question: 'Do refurbished PCs come with fast SSD storage?',
        answer: 'Yes, we replace old mechanical hard drives with brand-new SSDs and add new RAM so the PC boots up in under 10 seconds.',
        intent: 'Performance'
      },
      {
        id: 'rpc-4',
        question: 'Do you give a warranty on refurbished computers?',
        answer: 'Yes, all our refurbished systems come with a 6-month to 1-year hardware replacement warranty from ITETHIK.',
        intent: 'Warranty'
      },
      {
        id: 'rpc-5',
        question: 'Are refurbished computers good for daily office and Tally work?',
        answer: 'Yes! They are built for continuous business use and easily handle Excel sheets, Tally, GST filing, browsing, and billing software.',
        intent: 'Suitability'
      },
      {
        id: 'rpc-6',
        question: 'Can you provide bulk refurbished computers for offices or schools?',
        answer: 'Yes, we can supply matching sets of 5 to 50+ refurbished computers with Windows and full on-site setup.',
        intent: 'Bulk'
      }
    ]
  },

  // --- 3.7 Computer Repair ---
  'computer-repair': {
    level: 'sub-service',
    badge: 'Computer Repair',
    title: 'Laptop & Desktop Repair FAQs',
    subtitle: 'Clear answers on broken screens, slow PCs, water damage, and battery issues.',
    theme: 'purple',
    faqs: [
      {
        id: 'cr-1',
        question: 'How much does it cost to fix a broken laptop screen or keyboard?',
        answer: 'Cost depends on your laptop model and screen size. We check the model first, give you a clear exact price, and start only after your approval.',
        intent: 'Cost'
      },
      {
        id: 'cr-2',
        question: 'Can adding an SSD make my slow laptop faster?',
        answer: 'Yes! Upgrading an old hard drive to a fast SSD makes laptops 4x to 5x faster, fixing slow boot times and lagging instantly.',
        intent: 'Speed Upgrade'
      },
      {
        id: 'cr-3',
        question: 'What should I do if water or tea spills on my laptop?',
        answer: 'Immediately shut it down, unplug the charger, do NOT turn it back on, and bring it to us for ultrasonic cleaning before rust forms.',
        intent: 'Liquid Spill'
      },
      {
        id: 'cr-4',
        question: 'How fast can you replace a dead laptop battery or charging port?',
        answer: 'Battery replacements and charging port fixes for popular Dell, HP, Lenovo, and ASUS laptops are usually finished in 2 to 4 hours.',
        intent: 'Battery Repair'
      },
      {
        id: 'cr-5',
        question: 'Do you pick up and drop laptops from my home?',
        answer: 'Yes, we offer free safe doorstep pickup and return delivery across Ulwe, Nerul, Belapur, Seawoods, and Panvel.',
        intent: 'Pickup'
      },
      {
        id: 'cr-6',
        question: 'Will my files and photos stay completely safe?',
        answer: 'Yes, your data is 100% safe and private. We never format or touch your hard drive files without your explicit permission.',
        intent: 'Data Security'
      }
    ]
  },

  // --- 3.8 Chip Level Repair ---
  'chip-level-repair': {
    level: 'sub-service',
    badge: 'Micro-Soldering',
    title: 'Chip-Level Motherboard Repair FAQs',
    subtitle: 'Helpful answers on dead laptops, power short-circuits, and microscopic repairs.',
    theme: 'purple',
    faqs: [
      {
        id: 'clr-1',
        question: 'What is chip-level repair and when do I need it?',
        answer: 'Chip-level repair uses microscopes and soldering tools to replace tiny burnt ICs, diodes, or MOSFETs on a motherboard when a laptop is not turning on.',
        intent: 'Definition'
      },
      {
        id: 'clr-2',
        question: 'Can a completely dead laptop motherboard be fixed?',
        answer: 'Yes, over 85% of dead motherboards with power short circuits or charging failures can be restored to normal working condition.',
        intent: 'Dead PC Recovery'
      },
      {
        id: 'clr-3',
        question: 'Why is chip-level repair cheaper than replacing a motherboard?',
        answer: 'Because replacing only the 2 or 3 tiny faulty components costs a fraction of the price of purchasing a completely new original motherboard.',
        intent: 'Cost Advantage'
      },
      {
        id: 'clr-4',
        question: 'How do you find which tiny chip is faulty?',
        answer: 'Our lab uses digital multimeters, thermal cameras, and schematics to track power rails and locate the exact component that is overheating or shorted.',
        intent: 'Method'
      },
      {
        id: 'clr-5',
        question: 'How long does a chip-level repair take?',
        answer: 'Most chip-level motherboard diagnoses and micro-soldering repairs are completed within 24 to 48 hours.',
        intent: 'Duration'
      },
      {
        id: 'clr-6',
        question: 'Do you give a warranty on chip-level motherboard repairs?',
        answer: 'Yes, all chip-level motherboard repairs include a 30 to 90-day testing warranty covering the repaired circuit.',
        intent: 'Warranty'
      }
    ]
  },

  // --- 3.9 Home & Office Security ---
  'home-office-security': {
    level: 'sub-service',
    badge: 'CCTV Setup',
    title: 'Home & Office CCTV FAQs',
    subtitle: 'Direct answers on camera placement, phone viewing, night vision, and clean wiring.',
    theme: 'emerald',
    faqs: [
      {
        id: 'hos-1',
        question: 'How many CCTV cameras do I need for my home or office?',
        answer: 'For homes, 2 to 4 cameras (front door, balcony, hallway) are usually enough. For offices or shops, 4 to 8 cameras cover entrances, workspaces, and cash counters.',
        intent: 'Count'
      },
      {
        id: 'hos-2',
        question: 'Can I watch live camera video on my smartphone?',
        answer: 'Yes, we install a free mobile app on your phone so you can check live views, playback recordings, and get motion alerts from anywhere.',
        intent: 'Mobile app'
      },
      {
        id: 'hos-3',
        question: 'What is the difference between Wi-Fi cameras and wired CCTV?',
        answer: 'Wi-Fi cameras are quick to install for 1 room without wires, while wired IP systems are more reliable for continuous 24/7 recording across multiple areas.',
        intent: 'Comparison'
      },
      {
        id: 'hos-4',
        question: 'Do your cameras work clearly in dark night conditions?',
        answer: 'Yes, we install ColorVu and full-color night cameras that capture bright, clear video even in pitch-black darkness.',
        intent: 'Night vision'
      },
      {
        id: 'hos-5',
        question: 'How many days of video can be stored on a hard drive?',
        answer: 'A 1TB hard drive typically saves 15 to 20 days of video for 4 cameras, while a 2TB hard drive stores 30 to 45 days.',
        intent: 'Storage'
      },
      {
        id: 'hos-6',
        question: 'Do you hide the cables neatly without spoiling wall decor?',
        answer: 'Yes, our technicians use neat PVC casing and concealed conduits so all wiring stays hidden and looks clean on your walls.',
        intent: 'Neat wiring'
      }
    ]
  },

  // --- 3.10 Intercom Setup ---
  'intercom-setup': {
    level: 'sub-service',
    badge: 'Intercom & VDP',
    title: 'Intercom & Door Phone FAQs',
    subtitle: 'Helpful answers on video doorbells, electronic door locks, and society intercoms.',
    theme: 'emerald',
    faqs: [
      {
        id: 'ic-1',
        question: 'What is a Video Door Phone (VDP)?',
        answer: 'A Video Door Phone has an outdoor camera and an indoor color screen, letting you see and talk to visitors before opening your door.',
        intent: 'Definition'
      },
      {
        id: 'ic-2',
        question: 'Can I open the door lock directly from my video phone screen?',
        answer: 'Yes, when connected to an electronic door lock, you can unlock your door with a single tap on the indoor monitor or mobile app.',
        intent: 'Door Unlock'
      },
      {
        id: 'ic-3',
        question: 'Can I answer my door phone from my mobile when I am outside?',
        answer: 'Yes, smart Wi-Fi video door phones ring on your smartphone, letting you talk to delivery people and visitors from anywhere.',
        intent: 'Mobile answering'
      },
      {
        id: 'ic-4',
        question: 'Do you install intercom systems for residential buildings?',
        answer: 'Yes, we set up multi-flat EPABX intercom networks connecting every apartment with the security gate and society office.',
        intent: 'Societies'
      },
      {
        id: 'ic-5',
        question: 'How long does it take to install a video door phone?',
        answer: 'A standard home or office video door phone is installed and tested within 3 to 5 hours.',
        intent: 'Installation time'
      },
      {
        id: 'ic-6',
        question: 'What should I do if my intercom audio is noisy or not working?',
        answer: 'Noisy audio is usually due to loose wire junctions or adapter issues. Our technician can visit and fix the connection quickly.',
        intent: 'Troubleshooting'
      }
    ]
  },

  // --- 3.11 Web Development ---
  'web-development': {
    level: 'sub-service',
    badge: 'Web Engineering',
    title: 'Website Development FAQs',
    subtitle: 'Clear answers on build times, mobile design, WhatsApp buttons, and costs.',
    theme: 'blue',
    faqs: [
      {
        id: 'wd-1',
        question: 'How long does it take to make my website?',
        answer: 'A standard professional business website is designed, built, and launched in 7 to 14 days with regular draft reviews.',
        intent: 'Timeline'
      },
      {
        id: 'wd-2',
        question: 'Will my website work nicely on mobile phones and tablets?',
        answer: 'Yes, 100% of our websites are designed to look sharp, load fast, and work smoothly on all mobile devices and screen sizes.',
        intent: 'Mobile ready'
      },
      {
        id: 'wd-3',
        question: 'Can you add a WhatsApp chat button and contact form?',
        answer: 'Yes! We integrate direct 1-click WhatsApp buttons, contact forms, click-to-call buttons, and Google Maps location pins.',
        intent: 'Features'
      },
      {
        id: 'wd-4',
        question: 'Will I own my website files and domain name?',
        answer: 'Yes, you get 100% full ownership of your domain, website code, and hosting logins with complete control.',
        intent: 'Ownership'
      },
      {
        id: 'wd-5',
        question: 'Can I edit text and photos on the website myself later?',
        answer: 'Yes, we build easy-to-use panels so you can update text, phone numbers, prices, and photos easily without coding.',
        intent: 'Self editing'
      },
      {
        id: 'wd-6',
        question: 'How much does a basic business website cost?',
        answer: 'Our business website packages are very affordable with transparent pricing and no hidden yearly lock-in fees.',
        intent: 'Pricing'
      }
    ]
  },

  // --- 3.12 SEO Services ---
  'seo': {
    level: 'sub-service',
    badge: 'SEO & Growth',
    title: 'SEO & Google Ranking FAQs',
    subtitle: 'Simple answers on Google Maps rankings, local leads, and search visibility.',
    theme: 'cyan',
    faqs: [
      {
        id: 'seo-1',
        question: 'What is SEO and how does it help my business?',
        answer: 'SEO helps your business show up on Google search results and Google Maps when people look for the services you provide in your area.',
        intent: 'Overview'
      },
      {
        id: 'seo-2',
        question: 'How long does it take to see more customers from SEO?',
        answer: 'Google Maps optimizations usually start bringing more phone calls and visits within 30 to 60 days, while keyword rankings steadily grow over 3 to 6 months.',
        intent: 'Timeline'
      },
      {
        id: 'seo-3',
        question: 'How do you help my business show up on Google Maps?',
        answer: 'We optimize your Google Business Profile with the right categories, photos, customer review strategies, and localized keywords.',
        intent: 'Google Maps'
      },
      {
        id: 'seo-4',
        question: 'What is included in your monthly SEO work?',
        answer: 'We fix website keywords, improve page speed, build local directory citations, and optimize Google Business Profile updates.',
        intent: 'Tasks'
      },
      {
        id: 'seo-5',
        question: 'Do you send me progress reports on how my site is ranking?',
        answer: 'Yes, every month we send a clear, simple report showing your keyword positions, website visitors, and phone call clicks.',
        intent: 'Reports'
      },
      {
        id: 'seo-6',
        question: 'Can SEO help me get local customers in Navi Mumbai and Mumbai?',
        answer: 'Yes, targeting specific local keywords like "in Ulwe", "in Navi Mumbai", or "in Panvel" brings high-intent nearby customers to you.',
        intent: 'Local targeting'
      }
    ]
  },

  // --- 3.13 Digital Cards ---
  'digital-cards': {
    level: 'sub-service',
    badge: 'NFC Cards',
    title: 'Smart Digital Card FAQs',
    subtitle: 'Easy answers on tap-to-share NFC cards, contact saving, and edits.',
    theme: 'cyan',
    faqs: [
      {
        id: 'dc-1',
        question: 'What is a digital smart business card?',
        answer: 'It is a reusable premium card with an NFC chip that opens your digital profile on someone’s phone with a simple tap.',
        intent: 'Definition'
      },
      {
        id: 'dc-2',
        question: 'How does someone view my card without downloading an app?',
        answer: 'They just tap their phone on your card or scan the QR code. Your profile opens instantly in their mobile browser—no app required.',
        intent: 'No app needed'
      },
      {
        id: 'dc-3',
        question: 'Can I change my phone number or links without reprinting?',
        answer: 'Yes! You can update your phone, email, address, and links anytime from your dashboard, and your card updates instantly.',
        intent: 'Instant updates'
      },
      {
        id: 'dc-4',
        question: 'Does the card work on both Android and iPhone?',
        answer: 'Yes, it works seamlessly on all NFC-enabled iPhones and Android phones, plus has a backup QR code for older devices.',
        intent: 'Compatibility'
      },
      {
        id: 'dc-5',
        question: 'What details can I put on my digital card?',
        answer: 'You can add your name, photo, phone, WhatsApp button, website, social media handles, payment UPI QR, and Google Map location.',
        intent: 'Profile fields'
      },
      {
        id: 'dc-6',
        question: 'How quickly can I get my digital card ready?',
        answer: 'Your digital profile is activated within 24 hours, and your custom physical printed card is dispatched within 2 to 3 days.',
        intent: 'Delivery'
      }
    ]
  },

  // =========================================================================
  // LEVEL 4: GENERAL INFO PAGES
  // =========================================================================

  // --- 4.1 About Us Page ---
  'about': {
    level: 'company',
    badge: 'About ITETHIK',
    title: 'About Us FAQs',
    subtitle: 'Learn more about our team, background, and ethical commitment.',
    theme: 'purple',
    faqs: [
      {
        id: 'about-1',
        question: 'What is ITETHIK and what do you do?',
        answer: 'ITETHIK is a technology solutions provider in Navi Mumbai offering honest, high-quality computer repairs, PC building, CCTV security, and web development.',
        intent: 'Overview'
      },
      {
        id: 'about-2',
        question: 'Where are your services available?',
        answer: 'We provide doorstep and on-site services across Ulwe, Nerul, Belapur, Seawoods, Kharghar, Panvel, and across Navi Mumbai and Mumbai MMR.',
        intent: 'Locations'
      },
      {
        id: 'about-3',
        question: 'Why is your company named ITETHIK?',
        answer: 'Our name combines "IT" and "Ethics". We believe in honest diagnosis, transparent pricing with no hidden charges, and never replacing parts that are still good.',
        intent: 'Values'
      },
      {
        id: 'about-4',
        question: 'Are your technicians trained and experienced?',
        answer: 'Yes, our team consists of certified hardware technicians, chip-level engineers, CCTV specialists, and web developers with years of hands-on experience.',
        intent: 'Team'
      },
      {
        id: 'about-5',
        question: 'Do you work with individual customers as well as companies?',
        answer: 'Yes! We serve individual home users, students, freelancers, retail shops, clinics, schools, and corporate offices alike.',
        intent: 'Clients'
      },
      {
        id: 'about-6',
        question: 'How can I contact your support team?',
        answer: 'You can call or message us on WhatsApp at +91 8976765350 or email us at connect@itethik.com for fast responses.',
        intent: 'Contact'
      }
    ]
  },

  // --- 4.2 Contact Page ---
  'contact': {
    level: 'company',
    badge: 'Get in Touch',
    title: 'Contact & Support FAQs',
    subtitle: 'Quick answers about visiting us, booking a pickup, and support timings.',
    theme: 'cyan',
    faqs: [
      {
        id: 'contact-2',
        question: 'Can I visit your office in Ulwe, Navi Mumbai?',
        answer: 'Yes, you are welcome to visit our office in Sector 17, Ulwe, Navi Mumbai, during business hours for consultations or dropping off devices.',
        intent: 'Visit'
      },
      {
        id: 'contact-3',
        question: 'What are your business opening hours?',
        answer: 'We are open Monday to Saturday from 9:30 AM to 8:30 PM, and available on Sundays for scheduled appointments.',
        intent: 'Hours'
      },
      {
        id: 'contact-4',
        question: 'Do you provide emergency support on weekends?',
        answer: 'Yes, we provide emergency on-call support for critical business server issues or urgent security camera outages.',
        intent: 'Emergency'
      }
    ]
  },

  // --- 4.3 Portfolio Page ---
  'portfolio': {
    level: 'company',
    badge: 'Our Work',
    title: 'Portfolio & Projects FAQs',
    subtitle: 'Answers regarding our past installations, custom builds, and client projects.',
    theme: 'cyan',
    faqs: [
      {
        id: 'port-1',
        question: 'What kinds of projects have you completed?',
        answer: 'We have completed custom gaming PC builds, office computer setups, society CCTV networks, video door phones, and modern business websites.',
        intent: 'Project types'
      },
      {
        id: 'port-2',
        question: 'Can I see examples of websites or PC builds you made?',
        answer: 'Yes, browse our portfolio page to see photos of custom PC builds, live website links, and photos of our security installations.',
        intent: 'Examples'
      },
      {
        id: 'port-3',
        question: 'Do you have experience with residential society CCTV setups?',
        answer: 'Yes, we have designed and installed multi-camera CCTV and EPABX intercom networks for numerous housing societies in Navi Mumbai.',
        intent: 'Societies'
      },
      {
        id: 'port-4',
        question: 'Can I request a custom setup similar to one in your portfolio?',
        answer: 'Absolutely! Just point out any project you like, and we will build a customized package tailored to your exact budget and space.',
        intent: 'Customization'
      },
      {
        id: 'port-5',
        question: 'Do you provide testing and walkthroughs after project completion?',
        answer: 'Yes, once any installation or build is done, we demonstrate all features and teach you how to use mobile apps and controls.',
        intent: 'Walkthrough'
      },
      {
        id: 'port-6',
        question: 'How do I get a price estimate for a project like these?',
        answer: 'Click on any project to see its details, or click "Book Consultation" to get an exact itemized estimate for your requirement.',
        intent: 'Quotes'
      }
    ]
  },

  // --- 4.4 Consultation / Inquiry Page ---
  'consultation': {
    level: 'company',
    badge: 'IT Consultation',
    title: 'Consultation & Inquiry FAQs',
    subtitle: 'What to expect when you reach out for a consultation or free estimate.',
    theme: 'purple',
    faqs: [
      {
        id: 'consult-1',
        question: 'Is the initial consultation really free?',
        answer: 'Yes, our initial consultation and advice are 100% free with no charges and zero obligation to purchase.',
        intent: 'Free consultation'
      },
      {
        id: 'consult-2',
        question: 'Am I obligated to buy anything after the consultation?',
        answer: 'Not at all. We provide you with clear options and a quotation, and you are completely free to decide at your own pace.',
        intent: 'No obligation'
      },
      {
        id: 'consult-3',
        question: 'How quickly will you send me a price estimate?',
        answer: 'For standard repairs and PC builds, we send estimates within 2 hours. For CCTV and web projects, we send detailed quotes within 24 hours.',
        intent: 'Speed'
      },
      {
        id: 'consult-4',
        question: 'Can we do the consultation on WhatsApp or a quick phone call?',
        answer: 'Yes! We can chat on WhatsApp, talk over a phone call, or schedule a Google Meet video call based on your preference.',
        intent: 'Modes'
      },
      {
        id: 'consult-5',
        question: 'Can you help me decide whether to repair or replace my old PC?',
        answer: 'Yes, we check your current PC specs and give you honest advice on whether an inexpensive SSD/RAM upgrade makes sense or if buying new is better.',
        intent: 'Honest advice'
      },
      {
        id: 'consult-6',
        question: 'Do you do on-site visits to check my office or shop setup?',
        answer: 'Yes, we can visit your office or shop to check the layout, plan camera positions, and design the best computer and network setup.',
        intent: 'Site visit'
      }
    ]
  }
};

/**
 * Helper function to retrieve FAQ data safely with fallback to 'company'
 */
export function getFaqDataByCategory(categoryKey = 'company') {
  return FAQ_REGISTRY[categoryKey] || FAQ_REGISTRY['company'];
}
