// Content configuration for easy localization
export const content = {
  nav: {
    logo: "AlloyDX",
    menuItems: ["Product", "Dashboard", "Research", "For Clinics", "About", "Contact"],
    ctaPrimary: "Book a demo",
    ctaSecondary: "Login",
    dashboardUrl: "https://radiomed-frontend.wonderfulglacier-fa34419e.australiaeast.azurecontainerapps.io"
  },
  hero: {
    badge: "AI-First Radiology Platform",
    title: "Read Imaging Faster. More Consistently. With Confidence.",
    subtitle: "AlloyDX helps radiologists and ophthalmologists deliver accurate diagnoses with AI-powered analysis across CT, MRI, X-Ray, OCT, and more.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "View sample report",
    medicalImages: [
      {
        id: "ct",
        title: "CT Brain Scan",
        modality: "CT",
        imageUrl: "/ct.jpeg"
      },
      {
        id: "xray",
        title: "Chest X-Ray",
        modality: "X-Ray",
        imageUrl: "/cxr.jpg"
      },
      {
        id: "oct",
        title: "OCT Retinal Scan",
        modality: "OCT",
        imageUrl: "/oct.jpg"
      }
    ]
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
        title: "Robust Retinal Blood Vessel Segmentation Using Hybrid Active Contour Model",
        journal: "IET Image Processing",
        year: "2018",
        summary: "Our model achieved 97% accuracy in detecting blood vessels."
      },
      {
        title: "Advancing Ocular Imaging: A hybrid attention mechanism-based U-Net Model for precise segmentation of sub-retinal layers in OCT images",
        journal: "Bioengineering",
        year: "2024",
        summary: "Our model achieved 97% of Adjusted Rand Index (ARI), Dice score of 94.99% in segmentation of sub-retinal layers in Optical Coherence Tomography (OCT) images."
      },
      {
        title: "Generalized framework for liquid neural network upon sequential and non-sequential tasks",
        journal: "Mathematics",
        year: "2024",
        summary: "This research introduces a novel approach to neural networks: a Generalized Liquid Neural Network (GLNN) framework applicable for disease classification"
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
    title: "Built with clinicians, crafted with innovation.",
    name: "Dr. Prakash Karn, PhD",
    role: "Founder & Chief Technical Officer",
    bio: "Prakash Karn is a medical AI engineer committed to improving patient care through intelligent imaging tools. Motivated by the challenges clinicians face in high-pressure environments, he founded AlloyDx and developed Radiomed to streamline reporting, enhance diagnostic confidence, and bring AI-powered support directly into clinical practice."
  },
  academic_advisor: {
    name: "Associate Professor Waleed Abdula",
    role: "Academic Advisor, University of Auckland",
    bio: "Assoc. Professor Waleed Abdulla, a respected researcher at the University of Auckland, brings deep expertise in signal processing, biomedical imaging, and intelligent systems. As Academic Advisor to AlloyDx, he collaborates closely with the team to enhance the scientific foundation and clinical relevance of Radiomed, ensuring the platform reflects the highest standards of research and innovation."
  },
  clinical_advisor: {
    name: "Dr. Dipak Karn, MBBS, MD(Radiologist)",
    role: "Clinical Advisor, MIHS, Nepal",
    bio: "Dr. Dipak Karn, is a highly experienced radiologist at MIHS, Nepal, specializing in diagnostic imaging and clinical interpretation. With extensive expertise across CT, MRI, ultrasound, and X-ray modalities, he brings invaluable clinical insight to AlloyDx. As Clinical Advisor, Dr. Karn guides the development of Radiomed to ensure the platform aligns with real-world radiology workflows, enhances diagnostic accuracy, and addresses meaningful clinical challenges"
  },
  security: {
    title: "Security, Privacy & Regulatory",
    points: [
      "HIPAA and GDPR compliant",
      "End-to-end encryption for all data",
      "De-identification and anonymization built-in",
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
      email: "prakashkarn45@gmail.com",
      phone: "+64273794454",
      address: "46C Burswood Drive 2013 Auckland New Zealand"
    },
    copyright: "© 2024 AlloyDX. All rights reserved."
  }
};
