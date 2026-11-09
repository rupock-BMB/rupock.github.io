/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Fields marked TODO are placeholders. They render as "To be confirmed" on the
 * site until you fill them in. Nothing here is invented: please only add details
 * you can verify.
 */

export const TBC = "To be confirmed";

export const profile = {
  name: "Md. Jobydul Islam Rupock",
  headline: "Biomedical Researcher | Molecular Biology | Computational Biology | Genomics",
  status: "MS Student / MS Researcher",
  institution: "Shahjalal University of Science and Technology (SUST), Bangladesh",
  department: "Department of Biochemistry and Molecular Biology",
  intro:
    "I am an MS student and emerging biomedical researcher in the Department of Biochemistry and Molecular Biology at Shahjalal University of Science and Technology, Bangladesh. My research interests span molecular genetics, cardiovascular biomarkers, transcriptomics, molecular diagnostics, and computational drug discovery. I am particularly interested in understanding disease-associated molecular mechanisms through the integration of experimental and computational approaches.",
  // Put your photo at public/images/portrait.jpg (see README). If missing, initials are shown.
  portrait: "images/portrait.jpg",
  // Put your CV at public/documents/CV_Md_Jobydul_Islam_Rupock.pdf. Until then the button explains how to add it.
  cv: "documents/CV_Md_Jobydul_Islam_Rupock.pdf",
};

export const links = {
  email: "mdjobydulislamr@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-jobydul-islam-rupock-a2b40234a/",
  orcid: "https://orcid.org/0009-0002-8285-5880",
  saLab: "https://sa-lab-demo.netlify.app/",
};

export const about = [
  "I am pursuing postgraduate study in Biochemistry and Molecular Biology at Shahjalal University of Science and Technology. My work sits at the interface of laboratory molecular biology and computational analysis, with a shared goal: to understand how molecular variation contributes to disease.",
  "My current MS research direction examines genetic variation in the LPA gene, including KIV-2 copy-number variation and its relationship with plasma lipoprotein(a), using PCR-based molecular techniques and Sanger sequencing. Alongside this, I have carried out transcriptomic and computational biology analyses, including a multi-cohort investigation of immune-related genes in ulcerative colitis and a computational drug-discovery study of the human metapneumovirus fusion protein.",
  "I am motivated by questions where careful experimental design and rigorous computational analysis reinforce each other, and I aim to pursue advanced biomedical research that contributes to a better understanding of disease mechanisms and diagnostics.",
];

export const aboutHighlights = [
  "Postgraduate study in Biochemistry and Molecular Biology",
  "Molecular genetics and disease-associated biomarkers",
  "Experimental molecular biology and PCR-based techniques",
  "Transcriptomic analysis and computational biology",
  "Computational drug discovery and molecular interaction analysis",
  "Aspiration to pursue advanced biomedical research",
];

export type Interest = { title: string; text: string; icon: string };

export const interests: Interest[] = [
  { icon: "dna", title: "Molecular Biology and Genetics", text: "Studying how DNA sequence and gene regulation shape cellular function and disease susceptibility." },
  { icon: "chart", title: "Molecular Genetics and Genomics", text: "Characterising genetic variants and genomic structure in the context of human disease." },
  { icon: "heart", title: "Cardiovascular Genetics and Biomarkers", text: "Linking inherited variation to circulating biomarkers relevant to cardiovascular risk." },
  { icon: "particle", title: "Lipoprotein(a) Biology", text: "Investigating Lp(a), a genetically determined lipoprotein built around apolipoprotein(a) and encoded by LPA." },
  { icon: "repeat", title: "KIV-2 Copy-Number Variation", text: "Examining the variable number of kringle IV type 2 repeats in LPA and how repeat number relates to Lp(a) concentration." },
  { icon: "activity", title: "Transcriptomics and Differential Gene Expression", text: "Using RNA-sequencing data to identify gene-expression changes and the pathways they implicate." },
  { icon: "shield", title: "Ulcerative Colitis and Immune-Related Mechanisms", text: "Exploring immune-gene signatures across blood, mucosal and single-cell data in inflammatory bowel disease." },
  { icon: "flask", title: "Molecular Diagnostics", text: "Applying PCR-based and sequencing approaches to detect and interpret disease-relevant molecular variation." },
  { icon: "cpu", title: "Computational Drug Discovery", text: "Using in silico screening and interaction analysis to prioritise candidate molecules for further study." },
  { icon: "atom", title: "Molecular Docking and Molecular Dynamics", text: "Modelling protein–ligand binding and the stability of complexes over simulated time." },
];

export type Status = "Completed computational study" | "Ongoing MS research" | "Research interest" | "Planned work";

export type Project = {
  id: string;
  num: string;
  title: string;
  badge: string;
  status: string;
  statusKind: "done" | "ongoing" | "interest";
  overview: string;
  objectives: string[];
  methods: string[];
  findings?: string[];
  findingsTitle?: string;
  datasets?: { id: string; purpose: string }[];
  interpretation?: string;
  planned?: { title: string; items: string[] };
  notices: string[];
  graphic: "ncr3" | "lpa" | "hmpv" | "pcos";
  featured: boolean;
  documentUrl?: string; // set when you upload the presentation / PDF
};

export const projects: Project[] = [
  {
    id: "ncr3-ccl4",
    num: "01",
    featured: true,
    graphic: "ncr3",
    badge: "Major research project",
    title: "NCR3 and CCL4 in Ulcerative Colitis: An Integrated Multi-Cohort Transcriptomic Investigation",
    status: "Completed transcriptomic analysis; structural phase planned",
    statusKind: "done",
    overview:
      "An end-to-end multi-cohort analysis of immune-gene discovery, reproducibility, tissue context, pediatric disease activity and cell-type localization in ulcerative colitis, using public transcriptomic datasets and computational methods.",
    objectives: [
      "Identify differentially expressed genes associated with ulcerative colitis.",
      "Investigate immune-related biological pathways.",
      "Prioritize candidate genes using protein–protein interaction networks and machine learning.",
      "Examine the reproducibility of candidate genes in independent cohorts.",
      "Investigate tissue-specific expression differences.",
      "Explore associations with pediatric disease activity.",
      "Examine immune-cell localization using single-cell transcriptomic data.",
      "Develop a structural hypothesis for future NCR3-focused investigation.",
    ],
    methods: [
      "RNA-sequencing data analysis",
      "DESeq2 differential expression",
      "Gene Ontology and KEGG enrichment",
      "STRING protein–protein interaction networks",
      "Cytoscape and cytoHubba",
      "Random Forest",
      "XGBoost",
      "Repeated cross-validation and SHAP interpretation",
      "Independent cohort validation",
      "ROC analysis",
      "Spearman correlation",
      "Single-cell RNA-seq interpretation",
    ],
    datasets: [
      { id: "GSE112057", purpose: "Discovery blood cohort" },
      { id: "GSE186507", purpose: "Independent adult blood validation" },
      { id: "GSE92415", purpose: "Colonic mucosal expression" },
      { id: "PRJEB28822", purpose: "Pediatric disease activity" },
      { id: "GSE125527", purpose: "Rectal immune-cell context" },
    ],
    findingsTitle: "Key research findings",
    findings: [
      "Identified 894 differentially expressed genes in the discovery cohort: 586 upregulated and 308 downregulated.",
      "Identified 23 consensus protein-network hubs.",
      "Prioritized NCR3 and CCL4 through integrated PPI, Random Forest and XGBoost analyses.",
      "Observed reduced NCR3 and CCL4 expression in the discovery and independent adult blood cohorts.",
      "Observed increased expression of both genes in an independent colonic mucosal cohort.",
      "Observed an exploratory inverse association between NCR3 expression and pediatric ulcerative colitis activity.",
      "Found no comparable activity-related association for CCL4.",
      "Observed preferential NCR3 detection in annotated NK cells, whereas CCL4 showed broader immune-cell distribution.",
    ],
    interpretation:
      "NCR3 emerged as the principal candidate for further structural investigation, while CCL4 remains an important comparative immune-related gene. The study supports context-dependent immune-gene associations rather than a universal expression pattern or an established causal mechanism.",
    planned: {
      title: "Planned next phase (not yet performed)",
      items: [
        "NCR3/NKp30 structural analysis",
        "Molecular docking",
        "Ligand–receptor interaction assessment",
        "Proposed 200-ns molecular dynamics simulations",
        "RMSD, RMSF, radius of gyration, hydrogen-bond and contact-persistence analysis",
      ],
    },
    notices: [
      "The pediatric activity association is exploratory.",
      "NCR3 is not presented as a clinically validated biomarker or an established therapeutic target.",
      "Docking and molecular dynamics are planned work. No docking scores, simulation outcomes or therapeutic claims are reported.",
    ],
  },
  {
    id: "lpa-kiv2",
    num: "02",
    featured: true,
    graphic: "lpa",
    badge: "Current MS research direction",
    title: "LPA Genetic Variation, KIV-2 Copy Number, and Plasma Lipoprotein(a) Levels",
    status: "Ongoing: current postgraduate research direction",
    statusKind: "ongoing",
    overview:
      "My current postgraduate research direction investigates variation in the LPA gene, which encodes apolipoprotein(a), the defining protein component of lipoprotein(a). The work centres on the KIV-2 copy-number variation and how it relates to plasma Lp(a) concentration, using PCR-based molecular analysis and Sanger sequencing.",
    objectives: [
      "Investigate KIV-2 copy-number variation in the LPA gene.",
      "Relate KIV-2 repeat number to plasma lipoprotein(a) [Lp(a)] concentrations.",
      "Investigate LPA genetic polymorphisms, including rs9347440 as a variant of interest.",
      "Explore potential associations between genetic variation and disease status.",
    ],
    methods: [
      "Genomic DNA extraction",
      "Primer preparation and evaluation",
      "PCR optimization",
      "Gradient PCR",
      "Agarose gel electrophoresis",
      "Sanger sequencing",
      "Sequence analysis and genetic variant interpretation",
    ],
    notices: [
      "This is ongoing research. No sample numbers, results, statistics or conclusions are reported on this site.",
      "rs9347440 is listed as a variant of interest only; no claim about its significance is made.",
    ],
  },
  {
    id: "hmpv",
    num: "03",
    featured: true,
    graphic: "hmpv",
    badge: "Computational study",
    title: "Computational Drug Discovery for Human Metapneumovirus (HMPV) Fusion Protein Inhibitors: A Molecular Dynamics and Docking Study of Phytochemicals",
    status: "Computational study",
    statusKind: "done",
    overview:
      "A computational investigation of phytochemicals as potential inhibitors of the human metapneumovirus (HMPV) fusion protein, combining virtual screening, molecular docking, protein–ligand interaction analysis and molecular dynamics simulation.",
    objectives: [
      "Computationally screen phytochemicals against the HMPV fusion protein.",
      "Evaluate binding through molecular docking and protein–ligand interaction analysis.",
      "Assess candidate complexes with molecular dynamics simulation.",
      "Computationally evaluate potential inhibitor candidates.",
    ],
    methods: [
      "Computational screening of phytochemicals",
      "Molecular docking",
      "Protein–ligand interaction analysis",
      "Molecular dynamics simulation",
    ],
    findingsTitle: "Principal computational finding",
    findings: ["Licoflavanone emerged as a promising computational candidate."],
    notices: [
      "This is a computational finding. Licoflavanone has not been experimentally validated and is not presented as an antiviral drug.",
    ],
  },
  {
    id: "pcos",
    num: "04",
    featured: false,
    graphic: "pcos",
    badge: "Research involvement",
    title: "PCOS Biomarker Research",
    status: "Research interest and involvement",
    statusKind: "interest",
    overview:
      "My involvement in exploring molecular and biochemical biomarkers associated with polycystic ovary syndrome (PCOS), with attention to underlying molecular mechanisms and potential diagnostic relevance.",
    objectives: [
      "Biomarker identification.",
      "Molecular mechanisms associated with PCOS.",
      "Potential diagnostic relevance.",
    ],
    methods: ["Molecular and biochemical research approaches"],
    notices: [
      "Specific biomarkers, methods and outcomes will be added once confirmed. None are claimed here.",
    ],
  },
];

export const labExperience = {
  name: "SA Lab",
  url: links.saLab,
  intro:
    "I have been involved in research activity with SA Lab, which has given me practical exposure to laboratory-based research and scientific collaboration.",
  fields: [
    { label: "Position / role", value: TBC },
    { label: "Supervisor / principal investigator", value: TBC },
    { label: "Dates", value: TBC },
    { label: "Institutional affiliation", value: TBC },
  ],
  pillars: [
    { title: "Laboratory research involvement", text: "Hands-on exposure to experimental research practice." },
    { title: "Scientific collaboration", text: "Working with a research group on shared scientific questions." },
    { title: "Practical research exposure", text: "Applying molecular and computational methods in a lab setting." },
  ],
};

export type SkillGroup = { title: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Molecular Biology and Laboratory Techniques",
    icon: "flask",
    items: [
      "DNA Extraction",
      "Conventional PCR",
      "Gradient PCR",
      "Reverse Transcription PCR (RT-PCR)",
      "Agarose Gel Electrophoresis",
      "PCR Optimization",
      "Primer Preparation and Working-Solution Preparation",
      "Genomic DNA Analysis",
    ],
  },
  {
    title: "Computational Biology and Bioinformatics",
    icon: "dna",
    items: [
      "Transcriptomic Data Analysis",
      "Differential Gene Expression Analysis",
      "Gene Ontology and KEGG Enrichment",
      "Protein–Protein Interaction Analysis",
      "Molecular Docking",
      "Molecular Dynamics Simulation",
      "Protein–Ligand Interaction Analysis",
      "Genetic Variant Interpretation",
    ],
  },
  {
    title: "Programming and Data Science",
    icon: "code",
    items: ["Python Programming", "Data Science", "Data Analysis", "Computational Research Workflows"],
  },
];

export const education = [
  {
    level: "Master of Science (MS)",
    field: "Biochemistry and Molecular Biology",
    institution: "Shahjalal University of Science and Technology, Bangladesh",
    detail: "Department of Biochemistry and Molecular Biology",
    fields: [
      { label: "Academic years", value: TBC },
      { label: "CGPA", value: TBC },
      { label: "Thesis / research direction", value: "LPA variation, KIV-2 copy number and plasma Lp(a)" },
    ],
  },
  {
    level: "Undergraduate Education",
    field: "Biochemistry and Molecular Biology",
    institution: TBC,
    detail: "",
    fields: [
      { label: "Institution", value: TBC },
      { label: "Degree title", value: TBC },
      { label: "Academic years", value: TBC },
      { label: "CGPA", value: TBC },
      { label: "Relevant coursework", value: TBC },
      { label: "Academic achievements", value: TBC },
    ],
  },
];

export const achievements = {
  poster: {
    title: "BMB Symposium: Molecules of Life 2023",
    text: "Participated in a poster presentation at the BMB Symposium: Molecules of Life 2023.",
    fields: [
      { label: "Poster title", value: TBC },
      { label: "Symposium details", value: TBC },
      { label: "Poster image / PDF", value: "Add to public/documents (see README)" },
      { label: "Certificate image", value: "Optional" },
    ],
  },
  python: {
    title: "Python Programming and Data Science",
    text: "Achievement in Python programming and data science.",
    fields: [
      { label: "Course provider / certificate", value: TBC },
      { label: "Completion date", value: TBC },
      { label: "Certificate link", value: TBC },
    ],
  },
  german: { language: "German", level: "A1 – Beginner" },
};

export const publications = {
  categories: [
    "Peer-reviewed articles",
    "Manuscripts under review",
    "Preprints",
    "Conference abstracts",
    "Scientific posters",
  ],
  // Add verified entries here, e.g.
  // { category: "Preprints", citation: "Authors. Title. Server. Year. DOI", url: "https://doi.org/..." }
  entries: [] as { category: string; citation: string; url?: string }[],
  empty: "Research publications and scientific contributions will be updated as my work progresses.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "interests", label: "Interests" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];
