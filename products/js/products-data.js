// products/js/products-data.js
const products = [
    // ========== TIRZEPATIDE ==========
    {
        id: 1,
        name: "Tirzepatide 10mg",
        code: "CS-ze101208",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "10mg",
        price: 89.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: true
    },
    {
        id: 2,
        name: "Tirzepatide 15mg",
        code: "CS-ze151021",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "15mg",
        price: 119.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 3,
        name: "Tirzepatide 20mg",
        code: "CS-ze201124",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "20mg",
        price: 149.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 4,
        name: "Tirzepatide 30mg",
        code: "CS-ze30-0108",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "30mg",
        price: 179.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 5,
        name: "Tirzepatide 45mg",
        code: "CS-ze451115",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "45mg",
        price: 219.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 6,
        name: "Tirzepatide 60mg",
        code: "CS-ze60-1218",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "60mg",
        price: 259.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 7,
        name: "Tirzepatide 90mg",
        code: "CS-ze901103",
        category: "peptides",
        type: "Tirzepatide",
        dosage: "90mg",
        price: 329.99,
        purity: "99% HPLC",
        cas: "2023788-19-2",
        description: "Dual GIP and GLP-1 receptor agonist for metabolic research",
        color: "#3498db",
        stock: true,
        featured: true
    },

    // ========== RETATRUTIDE ==========
    {
        id: 8,
        name: "Retatrutide 10mg",
        code: "CS-re10-1220",
        category: "peptides",
        type: "Retatrutide",
        dosage: "10mg",
        price: 109.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: true
    },
    {
        id: 9,
        name: "Retatrutide 20mg",
        code: "CS-re20-1225",
        category: "peptides",
        type: "Retatrutide",
        dosage: "20mg",
        price: 189.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 10,
        name: "Retatrutide 30mg",
        code: "CS-re301107",
        category: "peptides",
        type: "Retatrutide",
        dosage: "30mg",
        price: 259.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 11,
        name: "Retatrutide 40mg",
        code: "CS-re401103",
        category: "peptides",
        type: "Retatrutide",
        dosage: "40mg",
        price: 319.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 12,
        name: "Retatrutide 50mg",
        code: "CS-re501130",
        category: "peptides",
        type: "Retatrutide",
        dosage: "50mg",
        price: 379.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 13,
        name: "Retatrutide 100mg",
        code: "CS-re100-1228",
        category: "peptides",
        type: "Retatrutide",
        dosage: "100mg",
        price: 699.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1, and glucagon receptor agonist for metabolic research",
        color: "#2ecc71",
        stock: true,
        featured: true
    },

    // ========== CAGRILINTIDE ==========
    {
        id: 14,
        name: "Cagrilintide 5mg",
        code: "CS-ca51021",
        category: "peptides",
        type: "Cagrilintide",
        dosage: "5mg",
        price: 79.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "GLP-1 receptor agonist for metabolic research",
        color: "#9b59b6",
        stock: true,
        featured: false
    },
    {
        id: 15,
        name: "Cagrilintide 10mg",
        code: "CS-ca101008",
        category: "peptides",
        type: "Cagrilintide",
        dosage: "10mg",
        price: 129.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "GLP-1 receptor agonist for metabolic research",
        color: "#9b59b6",
        stock: true,
        featured: false
    },

    // ========== MAZDUTIDE ==========
    {
        id: 16,
        name: "Mazdutide 10mg",
        code: "CS-maz101018",
        category: "peptides",
        type: "Mazdutide",
        dosage: "10mg",
        price: 139.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Dual GLP-1 and glucagon receptor agonist for metabolic studies",
        color: "#1abc9c",
        stock: true,
        featured: false
    },

    // ========== AOD 9604 ==========
    {
        id: 17,
        name: "AOD 9604 5mg",
        code: "CS-ad51018",
        category: "peptides",
        type: "AOD 9604",
        dosage: "5mg",
        price: 69.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Growth hormone fragment for metabolic research",
        color: "#e74c3c",
        stock: true,
        featured: false
    },

    // ========== SEMAX/SELANK ==========
    {
        id: 18,
        name: "Semax 10mg",
        code: "CS-sa101018",
        category: "nootropics",
        type: "Semax",
        dosage: "10mg",
        price: 89.99,
        purity: "98% HPLC",
        cas: "80714-61-0",
        description: "Nootropic peptide for cognitive research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 19,
        name: "Selank 10mg",
        code: "CS-sn101026",
        category: "nootropics",
        type: "Selank",
        dosage: "10mg",
        price: 79.99,
        purity: "98% HPLC",
        cas: "129954-34-3",
        description: "Anxiolytic peptide for neurological research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 20,
        name: "Na Semax 10mg",
        code: "CS-nasa10928",
        category: "nootropics",
        type: "NA Semax",
        dosage: "10mg",
        price: 99.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetylated Semax for enhanced stability in research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 21,
        name: "Na Selank 10mg",
        code: "CS-nasn101127",
        category: "nootropics",
        type: "NA Selank",
        dosage: "10mg",
        price: 89.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetylated Selank for neurological research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 22,
        name: "Na Semax 50mg",
        code: "CS-nasem501130",
        category: "nootropics",
        type: "NA Semax",
        dosage: "50mg",
        price: 399.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetylated Semax bulk for research studies",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 23,
        name: "Na Selank 50mg",
        code: "CS-nasel501130",
        category: "nootropics",
        type: "NA Selank",
        dosage: "50mg",
        price: 379.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetylated Selank bulk for research studies",
        color: "#f39c12",
        stock: true,
        featured: false
    },

    // ========== MELANOTAN ==========
    {
        id: 24,
        name: "MTI, Melanotan 1 10mg",
        code: "CS-mn1101018",
        category: "peptides",
        type: "Melanotan I",
        dosage: "10mg",
        price: 59.99,
        purity: "98% HPLC",
        cas: "75921-69-6",
        description: "Alpha-MSH analog for pigment research",
        color: "#8e44ad",
        stock: true,
        featured: false
    },
    {
        id: 25,
        name: "MTII, Melanotan 2 10mg",
        code: "CS-mn2101103",
        category: "peptides",
        type: "Melanotan II",
        dosage: "10mg",
        price: 49.99,
        purity: "98% HPLC",
        cas: "121062-08-6",
        description: "Melanocortin receptor agonist for pigment research",
        color: "#8e44ad",
        stock: true,
        featured: false
    },

    // ========== PT-141 ==========
    {
        id: 26,
        name: "PT141 10mg",
        code: "CS-pt101105",
        category: "peptides",
        type: "PT-141",
        dosage: "10mg",
        price: 89.99,
        purity: "98% HPLC",
        cas: "189691-06-3",
        description: "Bremelanotide analog for melanocortin research",
        color: "#8e44ad",
        stock: true,
        featured: false
    },

    // ========== NAD+ ==========
    {
        id: 27,
        name: "NAD+ 500mg",
        code: "CS-na500-1218",
        category: "coenzymes",
        type: "NAD+",
        dosage: "500mg",
        price: 199.99,
        purity: "99% HPLC",
        cas: "53-84-9",
        description: "Nicotinamide Adenine Dinucleotide for cellular research",
        color: "#e74c3c",
        stock: true,
        featured: true
    },

    // ========== SNAP-8 ==========
    {
        id: 28,
        name: "Snap-8 10mg",
        code: "CS-sp101026",
        category: "peptides",
        type: "Snap-8",
        dosage: "10mg",
        price: 69.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetyl octapeptide for cosmetic and dermatological research",
        color: "#3498db",
        stock: true,
        featured: false
    },

    // ========== EPITHALON ==========
    {
        id: 29,
        name: "Epithalon 10mg",
        code: "CS-ep10-1228",
        category: "peptides",
        type: "Epithalon",
        dosage: "10mg",
        price: 79.99,
        purity: "98% HPLC",
        cas: "307297-39-8",
        description: "Tetrapeptide for telomere and aging research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 30,
        name: "Epithalon 50mg",
        code: "CS-ei501018",
        category: "peptides",
        type: "Epithalon",
        dosage: "50mg",
        price: 299.99,
        purity: "98% HPLC",
        cas: "307297-39-8",
        description: "Tetrapeptide for telomere and aging research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 31,
        name: "NA Epithalon 20mg",
        code: "CS-naep20-1222",
        category: "peptides",
        type: "NA Epithalon",
        dosage: "20mg",
        price: 159.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Acetylated Epithalon for enhanced stability in research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },

    // ========== GHK-Cu ==========
    {
        id: 32,
        name: "GHK-Cu 50mg",
        code: "CS-gu50-1228",
        category: "peptides",
        type: "GHK-Cu",
        dosage: "50mg",
        price: 79.99,
        purity: "98% HPLC",
        cas: "130120-57-9",
        description: "Copper peptide for tissue repair and collagen research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 33,
        name: "GHK-Cu 100mg",
        code: "CS-gu100-1225",
        category: "peptides",
        type: "GHK-Cu",
        dosage: "100mg",
        price: 139.99,
        purity: "98% HPLC",
        cas: "130120-57-9",
        description: "Copper peptide for tissue repair and collagen research",
        color: "#f39c12",
        stock: true,
        featured: false
    },

    // ========== KISSPEPTIN ==========
    {
        id: 34,
        name: "Kisspeptin 10mg",
        code: "CS-ki10-0111",
        category: "peptides",
        type: "Kisspeptin",
        dosage: "10mg",
        price: 99.99,
        purity: "98% HPLC",
        cas: "374675-21-5",
        description: "Reproductive hormone research peptide",
        color: "#9b59b6",
        stock: true,
        featured: false
    },

    // ========== 5-AMINO-1MQ ==========
    {
        id: 35,
        name: "5-Amino-1MQ 10mg",
        code: "CS-5aq101018",
        category: "small molecules",
        type: "5-Amino-1MQ",
        dosage: "10mg",
        price: 89.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "NNMT inhibitor for metabolic and longevity research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    {
        id: 36,
        name: "5-Amino-1MQ 50mg",
        code: "CS-51q501022",
        category: "small molecules",
        type: "5-Amino-1MQ",
        dosage: "50mg",
        price: 349.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "NNMT inhibitor for metabolic and longevity research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },

    // ========== MOTS-c ==========
    {
        id: 37,
        name: "MOTS-c 10mg",
        code: "CS-mc101021",
        category: "peptides",
        type: "MOTS-c",
        dosage: "10mg",
        price: 109.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Mitochondrial peptide for metabolic and energy research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 38,
        name: "MOTS-c 20mg",
        code: "CS-mc20-1228",
        category: "peptides",
        type: "MOTS-c",
        dosage: "20mg",
        price: 199.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Mitochondrial peptide for metabolic and energy research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },
    {
        id: 39,
        name: "MOTS-c 40mg",
        code: "CS-mc40-1231",
        category: "peptides",
        type: "MOTS-c",
        dosage: "40mg",
        price: 379.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "Mitochondrial peptide for metabolic and energy research",
        color: "#2ecc71",
        stock: true,
        featured: false
    },

    // ========== SS-31 ==========
    {
        id: 40,
        name: "SS-31 (Elamipretide) 10mg",
        code: "CS-s3101103",
        category: "peptides",
        type: "SS-31",
        dosage: "10mg",
        price: 119.99,
        purity: "98% HPLC",
        cas: "736992-21-5",
        description: "Mitochondrial-targeted peptide for cellular research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 41,
        name: "SS-31 (Elamipretide) 30mg",
        code: "CS-s3301021",
        category: "peptides",
        type: "SS-31",
        dosage: "30mg",
        price: 299.99,
        purity: "98% HPLC",
        cas: "736992-21-5",
        description: "Mitochondrial-targeted peptide for cellular research",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 42,
        name: "SS-31 (Elamipretide) 50mg",
        code: "CS-ss501105",
        category: "peptides",
        type: "SS-31",
        dosage: "50mg",
        price: 449.99,
        purity: "98% HPLC",
        cas: "736992-21-5",
        description: "Mitochondrial-targeted peptide for cellular research",
        color: "#3498db",
        stock: true,
        featured: false
    },

    // ========== DSIP ==========
    {
        id: 43,
        name: "DSIP 5mg",
        code: "CS-dp51021",
        category: "peptides",
        type: "DSIP",
        dosage: "5mg",
        price: 59.99,
        purity: "98% HPLC",
        cas: "62568-57-4",
        description: "Delta sleep-inducing peptide for sleep research",
        color: "#9b59b6",
        stock: true,
        featured: false
    },
    {
        id: 44,
        name: "DSIP 10mg",
        code: "CS-dp101115",
        category: "peptides",
        type: "DSIP",
        dosage: "10mg",
        price: 99.99,
        purity: "98% HPLC",
        cas: "62568-57-4",
        description: "Delta sleep-inducing peptide for sleep research",
        color: "#9b59b6",
        stock: true,
        featured: false
    },

    // ========== TB-500 ==========
    {
        id: 45,
        name: "TB-500/thymosin beta 10mg",
        code: "CS-tb10-0111",
        category: "peptides",
        type: "TB-500",
        dosage: "10mg",
        price: 69.99,
        purity: "98% HPLC",
        cas: "77591-33-4",
        description: "Thymosin beta-4 fragment for tissue repair research",
        color: "#1abc9c",
        stock: true,
        featured: false
    },
    {
        id: 46,
        name: "TB-500/thymosin beta 20mg",
        code: "CS-tb201213",
        category: "peptides",
        type: "TB-500",
        dosage: "20mg",
        price: 129.99,
        purity: "98% HPLC",
        cas: "77591-33-4",
        description: "Thymosin beta-4 fragment for tissue repair research",
        color: "#1abc9c",
        stock: true,
        featured: false
    },
    {
        id: 47,
        name: "TB Frag",
        code: "CS-tbf101105",
        category: "peptides",
        type: "TB Frag",
        dosage: "10mg",
        price: 79.99,
        purity: "98% HPLC",
        cas: "N/A",
        description: "TB-500 active fragment for regenerative research",
        color: "#1abc9c",
        stock: true,
        featured: false
    },

    // ========== THYMOSIN ALPHA-1 ==========
    {
        id: 48,
        name: "Thymosin Alpha-1 10mg",
        code: "CS-ta110-0111",
        category: "peptides",
        type: "Thymosin α1",
        dosage: "10mg",
        price: 89.99,
        purity: "98% HPLC",
        cas: "62304-98-7",
        description: "Immunomodulatory peptide for immune system research",
        color: "#1abc9c",
        stock: true,
        featured: true
    }

    // ADICIONE MAIS PRODUTOS AQUI...
];

// Categorias disponíveis
const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "peptides", name: "Peptides", count: products.filter(p => p.category === "peptides").length },
    { id: "coenzymes", name: "Coenzymes", count: products.filter(p => p.category === "coenzymes").length },
    { id: "nootropics", name: "Nootropics", count: products.filter(p => p.category === "nootropics").length },
    { id: "small molecules", name: "Small Molecules", count: products.filter(p => p.category === "small molecules").length }
];

// Tipos disponíveis (extraídos automaticamente dos produtos)
const types = [...new Set(products.map(p => p.type))];

// Cores por categoria para placeholders
const categoryColors = {
    peptides: "#3498db",      // Azul
    coenzymes: "#e74c3c",     // Vermelho
    nootropics: "#f39c12",    // Laranja
    "small molecules": "#95a5a6", // Cinza
    default: "#95a5a6"
};

// ========== EXPORTAR PARA WINDOW ==========
window.products = products;
window.categories = categories;
window.types = types;
window.categoryColors = categoryColors;
