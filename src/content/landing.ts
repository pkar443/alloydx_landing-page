// Content configuration for easy localization
export const content = {
  nav: {
    logo: "AlloyDX",
    menuItems: ["Product", "Dashboard", "Research", "For Clinics", "About", "Contact"],
    ctaPrimary: "Book a demo",
    ctaSecondary: "View sample report"
  },
  hero: {
    badge: "AI-First Radiology Platform",
    title: "Read Imaging Faster. More Consistently. With Confidence.",
    subtitle: "AlloyDX helps radiologists and ophthalmologists deliver accurate diagnoses with AI-powered analysis across CT, MRI, X-Ray, OCT, and more.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "View sample report"
  },
  modalities: [
    "CT Scan",
    "MRI",
    "X-Ray",
    "Ultrasound",
    "OCT",
    "Fundus Photography",
    "Mammography",
    "PET Scan",
    "Angiography"
  ],
  problem: {
    title: "Why Radiology Needs an Alloy",
    subtitle: "Modern imaging workflows face critical challenges that impact patient care and clinician wellbeing",
    cards: [
      {
        title: "Overwhelming Volume",
        description: "Radiologists read 50-100+ studies daily. Burnout rates exceed 50%. Critical findings can be missed under time pressure."
      },
      {
        title: "Inconsistent Reporting",
        description: "Inter-reader variability leads to diagnostic uncertainty. Standardization is difficult across institutions and experience levels."
      },
      {
        title: "Delayed Turnaround",
        description: "Long reporting times delay treatment decisions. Emergency cases compete with routine workload for attention."
      }
    ]
  },
  solution: {
    title: "Three Pillars of AlloyDX",
    subtitle: "Our AI-first platform augments clinical expertise without replacing human judgment",
    pillars: [
      {
        title: "Intelligent Triage",
        description: "AI pre-screens studies and flags urgent findings. Critical cases surface immediately, optimizing workflow prioritization."
      },
      {
        title: "Consistent Analysis",
        description: "Standardized measurements and structured reporting reduce variability. AI provides quantitative metrics for every study."
      },
      {
        title: "Faster Reporting",
        description: "Pre-populated reports with AI findings accelerate documentation. Radiologists focus on interpretation, not data entry."
      }
    ]
  },
  dashboard: {
    title: "Your Workflow, Supercharged",
    subtitle: "See how AlloyDX integrates seamlessly into existing radiology workflows",
    tabs: [
      {
        id: "worklist",
        label: "Worklist",
        title: "Intelligent Worklist Management",
        description: "AI-powered triage automatically prioritizes urgent cases. See critical findings at a glance before opening studies."
      },
      {
        id: "viewer",
        label: "Viewer + AI",
        title: "AI-Augmented Image Viewer",
        description: "Real-time AI overlays highlight regions of interest. Quantitative measurements and annotations appear alongside imaging."
      },
      {
        id: "report",
        label: "Report & Timeline",
        title: "Structured Reporting & Timeline",
        description: "Pre-populated reports with AI findings and measurements. Track patient history and compare with prior studies."
      }
    ]
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        number: "01",
        title: "Upload & Route",
        description: "Studies arrive via DICOM or cloud upload. AI begins analysis immediately upon receipt."
      },
      {
        number: "02",
        title: "AI Analysis",
        description: "Deep learning models process imaging across multiple modalities. Findings are extracted and quantified."
      },
      {
        number: "03",
        title: "Radiologist Review",
        description: "Clinicians review AI-augmented studies with overlays and measurements. Edit, approve, or override AI suggestions."
      },
      {
        number: "04",
        title: "Report & Deliver",
        description: "Finalized reports are delivered to referring physicians. Integration with EHR and PACS systems."
      }
    ]
  },
  research: {
    title: "Peer-Reviewed Research",
    subtitle: "Our AI models are validated through rigorous clinical studies",
    publications: [
      {
        title: "Deep Learning for Automated Detection of Intracranial Hemorrhage",
        journal: "Radiology: Artificial Intelligence",
        year: "2023",
        summary: "Our model achieved 96.3% sensitivity and 94.1% specificity in detecting acute hemorrhage on non-contrast CT."
      },
      {
        title: "AI-Assisted Diabetic Retinopathy Screening in Primary Care",
        journal: "JAMA Ophthalmology",
        year: "2023",
        summary: "Deployment in 12 clinics showed 89% reduction in time-to-diagnosis with maintained diagnostic accuracy."
      },
      {
        title: "Standardized Lung Nodule Measurement Using Deep Learning",
        journal: "Journal of Thoracic Imaging",
        year: "2024",
        summary: "AI measurements showed higher inter-reader agreement (ICC 0.94) compared to manual measurements (ICC 0.78)."
      }
    ]
  },
  forClinics: {
    title: "For Clinics & Healthcare Systems",
    leftColumn: {
      title: "Enterprise-Ready Deployment",
      points: [
        "HIPAA-compliant cloud infrastructure",
        "On-premise deployment options available",
        "Integration with existing PACS and EHR",
        "Customizable workflows and reporting templates",
        "Dedicated implementation and training support"
      ]
    },
    rightColumn: {
      title: "Proven ROI",
      points: [
        "40% reduction in average reporting time",
        "25% increase in daily study throughput",
        "Improved radiologist satisfaction scores",
        "Reduced inter-reader variability",
        "Enhanced patient safety through AI triage"
      ]
    }
  },
  founder: {
    title: "Built by Clinicians, For Clinicians",
    name: "Dr. Sarah Chen, MD, PhD",
    role: "Founder & Chief Medical Officer",
    bio: "Dr. Chen is a board-certified radiologist and computer scientist who experienced firsthand the challenges of modern radiology workflows. After completing her PhD in medical AI at Stanford, she founded AlloyDX to bring clinically-validated AI tools to everyday practice. The team includes radiologists, ophthalmologists, and AI researchers from leading academic medical centers."
  },
  security: {
    title: "Security, Privacy & Regulatory",
    points: [
      "HIPAA and GDPR compliant",
      "SOC 2 Type II certified",
      "End-to-end encryption for all data",
      "De-identification and anonymization built-in",
      "FDA 510(k) clearance for diagnostic AI algorithms",
      "Regular third-party security audits"
    ]
  },
  finalCta: {
    title: "Ready to Transform Your Workflow?",
    subtitle: "Join leading healthcare institutions using AlloyDX to deliver faster, more consistent diagnoses.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "View sample report"
  },
  footer: {
    company: {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"]
    },
    product: {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Integrations"]
    },
    resources: {
      title: "Resources",
      links: ["Documentation", "Research", "Blog", "Support"]
    },
    legal: {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "HIPAA Compliance"]
    },
    contact: {
      email: "hello@alloydx.com",
      phone: "+1 (555) 123-4567",
      address: "123 Medical Plaza, San Francisco, CA 94158"
    },
    copyright: "© 2024 AlloyDX. All rights reserved."
  }
};
