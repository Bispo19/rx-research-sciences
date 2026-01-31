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
        code: "CS-ze200923",
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
    
    // ========== RETATRUTIDE ==========
    {
        id: 4,
        name: "Retatrutide 10mg",
        code: "CS-re101210",
        category: "peptides",
        type: "Retatrutide",
        dosage: "10mg",
        price: 109.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1 and glucagon receptor agonist",
        color: "#3498db",
        stock: true,
        featured: true
    },
    {
        id: 5,
        name: "Retatrutide 15mg",
        code: "CS-re151128",
        category: "peptides",
        type: "Retatrutide",
        dosage: "15mg",
        price: 139.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Triple GIP, GLP-1 and glucagon receptor agonist",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== CJC-1295 ==========
    {
        id: 6,
        name: "CJC-1295 2mg",
        code: "CS-cj020501",
        category: "peptides",
        type: "CJC-1295",
        dosage: "2mg",
        price: 29.99,
        purity: "99% HPLC",
        cas: "863288-34-0",
        description: "Growth hormone releasing hormone analog",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 7,
        name: "CJC-1295 5mg",
        code: "CS-cj050312",
        category: "peptides",
        type: "CJC-1295",
        dosage: "5mg",
        price: 49.99,
        purity: "99% HPLC",
        cas: "863288-34-0",
        description: "Growth hormone releasing hormone analog",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== IPAMORELIN ==========
    {
        id: 8,
        name: "Ipamorelin 2mg",
        code: "CS-ip020715",
        category: "peptides",
        type: "Ipamorelin",
        dosage: "2mg",
        price: 24.99,
        purity: "99% HPLC",
        cas: "170851-70-4",
        description: "Growth hormone secretagogue",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 9,
        name: "Ipamorelin 5mg",
        code: "CS-ip050128",
        category: "peptides",
        type: "Ipamorelin",
        dosage: "5mg",
        price: 39.99,
        purity: "99% HPLC",
        cas: "170851-70-4",
        description: "Growth hormone secretagogue",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== SEMAX ==========
    {
        id: 10,
        name: "Semax 3mg",
        code: "CS-se030409",
        category: "peptides",
        type: "Semax",
        dosage: "3mg",
        price: 34.99,
        purity: "99% HPLC",
        cas: "80714-61-0",
        description: "Neuroprotective peptide with nootropic effects",
        color: "#3498db",
        stock: true,
        featured: true
    },
    {
        id: 11,
        name: "Semax 5mg",
        code: "CS-se050322",
        category: "peptides",
        type: "Semax",
        dosage: "5mg",
        price: 44.99,
        purity: "99% HPLC",
        cas: "80714-61-0",
        description: "Neuroprotective peptide with nootropic effects",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== SELANK ==========
    {
        id: 12,
        name: "Selank 3mg",
        code: "CS-sl030518",
        category: "peptides",
        type: "Selank",
        dosage: "3mg",
        price: 32.99,
        purity: "99% HPLC",
        cas: "129954-34-3",
        description: "Anxiolytic peptide with nootropic properties",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 13,
        name: "Selank 5mg",
        code: "CS-sl050611",
        category: "peptides",
        type: "Selank",
        dosage: "5mg",
        price: 42.99,
        purity: "99% HPLC",
        cas: "129954-34-3",
        description: "Anxiolytic peptide with nootropic properties",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== BPC-157 ==========
    {
        id: 14,
        name: "BPC-157 5mg",
        code: "CS-bp050823",
        category: "peptides",
        type: "BPC-157",
        dosage: "5mg",
        price: 39.99,
        purity: "99% HPLC",
        cas: "137525-51-0",
        description: "Pentadecapeptide with regenerative properties",
        color: "#3498db",
        stock: true,
        featured: true
    },
    {
        id: 15,
        name: "BPC-157 10mg",
        code: "CS-bp100714",
        category: "peptides",
        type: "BPC-157",
        dosage: "10mg",
        price: 69.99,
        purity: "99% HPLC",
        cas: "137525-51-0",
        description: "Pentadecapeptide with regenerative properties",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== TB-500 ==========
    {
        id: 16,
        name: "TB-500 2mg",
        code: "CS-tb020916",
        category: "peptides",
        type: "TB-500",
        dosage: "2mg",
        price: 29.99,
        purity: "99% HPLC",
        cas: "77591-33-4",
        description: "Thymosin beta-4 fragment for tissue repair",
        color: "#3498db",
        stock: true,
        featured: false
    },
    {
        id: 17,
        name: "TB-500 5mg",
        code: "CS-tb050327",
        category: "peptides",
        type: "TB-500",
        dosage: "5mg",
        price: 49.99,
        purity: "99% HPLC",
        cas: "77591-33-4",
        description: "Thymosin beta-4 fragment for tissue repair",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== EPITHALON ==========
    {
        id: 18,
        name: "Epithalon 10mg",
        code: "CS-ep100101",
        category: "peptides",
        type: "Epithalon",
        dosage: "10mg",
        price: 49.99,
        purity: "99% HPLC",
        cas: "307297-39-8",
        description: "Telomerase activator peptide",
        color: "#3498db",
        stock: true,
        featured: true
    },
    {
        id: 19,
        name: "Epithalon 50mg",
        code: "CS-ep500523",
        category: "peptides",
        type: "Epithalon",
        dosage: "50mg",
        price: 199.99,
        purity: "99% HPLC",
        cas: "307297-39-8",
        description: "Telomerase activator peptide",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== MOTS-C ==========
    {
        id: 20,
        name: "MOTS-c 10mg",
        code: "CS-mc100429",
        category: "peptides",
        type: "MOTS-c",
        dosage: "10mg",
        price: 79.99,
        purity: "99% HPLC",
        cas: "N/A",
        description: "Mitochondrial-derived peptide for metabolic regulation",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== PT-141 (BREMELANOTIDE) ==========
    {
        id: 21,
        name: "PT-141 10mg",
        code: "CS-pt101215",
        category: "peptides",
        type: "PT-141",
        dosage: "10mg",
        price: 59.99,
        purity: "99% HPLC",
        cas: "189691-06-3",
        description: "Melanocortin receptor agonist",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== TESAMORELIN ==========
    {
        id: 22,
        name: "Tesamorelin 2mg",
        code: "CS-te020830",
        category: "peptides",
        type: "Tesamorelin",
        dosage: "2mg",
        price: 89.99,
        purity: "99% HPLC",
        cas: "218949-48-5",
        description: "Growth hormone releasing hormone analog",
        color: "#3498db",
        stock: true,
        featured: false
    },
    
    // ========== ADENOSINE ==========
    {
        id: 23,
        name: "Adenosine 1g",
        code: "CS-ad100001",
        category: "coenzymes",
        type: "Adenosine",
        dosage: "1g",
        price: 29.99,
        purity: "99% HPLC",
        cas: "58-61-7",
        description: "Nucleoside involved in cellular energy transfer",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    {
        id: 24,
        name: "Adenosine 5g",
        code: "CS-ad500002",
        category: "coenzymes",
        type: "Adenosine",
        dosage: "5g",
        price: 99.99,
        purity: "99% HPLC",
        cas: "58-61-7",
        description: "Nucleoside involved in cellular energy transfer",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    
    // ========== NAD+ (NICOTINAMIDE ADENINE DINUCLÉOTIDO) ==========
    {
        id: 25,
        name: "NAD+ 100mg",
        code: "CS-na010003",
        category: "coenzymes",
        type: "NAD+",
        dosage: "100mg",
        price: 49.99,
        purity: "99% HPLC",
        cas: "53-84-9",
        description: "Coenzyme central to metabolism",
        color: "#e74c3c",
        stock: true,
        featured: true
    },
    {
        id: 26,
        name: "NAD+ 1g",
        code: "CS-na100004",
        category: "coenzymes",
        type: "NAD+",
        dosage: "1g",
        price: 199.99,
        purity: "99% HPLC",
        cas: "53-84-9",
        description: "Coenzyme central to metabolism",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    
    // ========== NMN (NICOTINAMIDE MONONUCLÉOTIDO) ==========
    {
        id: 27,
        name: "NMN 1g",
        code: "CS-nm010005",
        category: "coenzymes",
        type: "NMN",
        dosage: "1g",
        price: 39.99,
        purity: "99% HPLC",
        cas: "1094-61-7",
        description: "NAD+ precursor for cellular energy research",
        color: "#e74c3c",
        stock: true,
        featured: true
    },
    {
        id: 28,
        name: "NMN 10g",
        code: "CS-nm100006",
        category: "coenzymes",
        type: "NMN",
        dosage: "10g",
        price: 299.99,
        purity: "99% HPLC",
        cas: "1094-61-7",
        description: "NAD+ precursor for cellular energy research",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    
    // ========== NR (NICOTINAMIDE RIBOSIDE) ==========
    {
        id: 29,
        name: "Nicotinamide Riboside 1g",
        code: "CS-nr010007",
        category: "coenzymes",
        type: "NR",
        dosage: "1g",
        price: 44.99,
        purity: "99% HPLC",
        cas: "1341-23-7",
        description: "NAD+ precursor with high bioavailability",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    {
        id: 30,
        name: "Nicotinamide Riboside 10g",
        code: "CS-nr100008",
        category: "coenzymes",
        type: "NR",
        dosage: "10g",
        price: 349.99,
        purity: "99% HPLC",
        cas: "1341-23-7",
        description: "NAD+ precursor with high bioavailability",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    
    // ========== COENZYME Q10 ==========
    {
        id: 31,
        name: "Coenzyme Q10 100mg",
        code: "CS-cq010009",
        category: "coenzymes",
        type: "CoQ10",
        dosage: "100mg",
        price: 24.99,
        purity: "99% HPLC",
        cas: "303-98-0",
        description: "Electron carrier in mitochondrial electron transport",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    {
        id: 32,
        name: "Coenzyme Q10 1g",
        code: "CS-cq100010",
        category: "coenzymes",
        type: "CoQ10",
        dosage: "1g",
        price: 149.99,
        purity: "99% HPLC",
        cas: "303-98-0",
        description: "Electron carrier in mitochondrial electron transport",
        color: "#e74c3c",
        stock: true,
        featured: false
    },
    
    // ========== ALPHA-GPC ==========
    {
        id: 33,
        name: "Alpha-GPC 100mg",
        code: "CS-ag010011",
        category: "nootropics",
        type: "Alpha-GPC",
        dosage: "100mg",
        price: 19.99,
        purity: "99% HPLC",
        cas: "28319-77-9",
        description: "Cholinergic compound for cognitive research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 34,
        name: "Alpha-GPC 1g",
        code: "CS-ag100012",
        category: "nootropics",
        type: "Alpha-GPC",
        dosage: "1g",
        price: 89.99,
        purity: "99% HPLC",
        cas: "28319-77-9",
        description: "Cholinergic compound for cognitive research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    
    // ========== LION'S MANE EXTRACT ==========
    {
        id: 35,
        name: "Lion's Mane Extract 500mg",
        code: "CS-lm050013",
        category: "nootropics",
        type: "Lion's Mane",
        dosage: "500mg",
        price: 29.99,
        purity: "30% polysaccharides",
        cas: "N/A",
        description: "Hericium erinaceus extract for neural research",
        color: "#f39c12",
        stock: true,
        featured: true
    },
    {
        id: 36,
        name: "Lion's Mane Extract 1g",
        code: "CS-lm100014",
        category: "nootropics",
        type: "Lion's Mane",
        dosage: "1g",
        price: 49.99,
        purity: "30% polysaccharides",
        cas: "N/A",
        description: "Hericium erinaceus extract for neural research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    
    // ========== BACOPA MONNIERI ==========
    {
        id: 37,
        name: "Bacopa Monnieri Extract 500mg",
        code: "CS-bm050015",
        category: "nootropics",
        type: "Bacopa Monnieri",
        dosage: "500mg",
        price: 24.99,
        purity: "20% bacosides",
        cas: "N/A",
        description: "Ayurvedic herb for cognitive function research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    
    // ========== L-THEANINE ==========
    {
        id: 38,
        name: "L-Theanine 100mg",
        code: "CS-lt010016",
        category: "nootropics",
        type: "L-Theanine",
        dosage: "100mg",
        price: 14.99,
        purity: "99% HPLC",
        cas: "3081-61-6",
        description: "Amino acid from green tea for relaxation research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    {
        id: 39,
        name: "L-Theanine 1g",
        code: "CS-lt100017",
        category: "nootropics",
        type: "L-Theanine",
        dosage: "1g",
        price: 49.99,
        purity: "99% HPLC",
        cas: "3081-61-6",
        description: "Amino acid from green tea for relaxation research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    
    // ========== NOOPEPT ==========
    {
        id: 40,
        name: "Noopept 10mg",
        code: "CS-no010018",
        category: "nootropics",
        type: "Noopept",
        dosage: "10mg",
        price: 19.99,
        purity: "99% HPLC",
        cas: "157115-85-0",
        description: "Synthetic nootropic peptide for cognitive research",
        color: "#f39c12",
        stock: true,
        featured: true
    },
    {
        id: 41,
        name: "Noopept 100mg",
        code: "CS-no100019",
        category: "nootropics",
        type: "Noopept",
        dosage: "100mg",
        price: 79.99,
        purity: "99% HPLC",
        cas: "157115-85-0",
        description: "Synthetic nootropic peptide for cognitive research",
        color: "#f39c12",
        stock: true,
        featured: false
    },
    
    // ========== PHENIBUT ==========
    {
        id: 42,
        name: "Phenibut HCl 1g",
        code: "CS-ph100020",
        category: "small molecules",
        type: "Phenibut",
        dosage: "1g",
        price: 29.99,
        purity: "99% HPLC",
        cas: "1078-21-3",
        description: "GABA analog for neurological research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    {
        id: 43,
        name: "Phenibut HCl 10g",
        code: "CS-ph100021",
        category: "small molecules",
        type: "Phenibut",
        dosage: "10g",
        price: 199.99,
        purity: "99% HPLC",
        cas: "1078-21-3",
        description: "GABA analog for neurological research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    
    // ========== TIANEPTINE ==========
    {
        id: 44,
        name: "Tianeptine Sodium 1g",
        code: "CS-ti100022",
        category: "small molecules",
        type: "Tianeptine",
        dosage: "1g",
        price: 39.99,
        purity: "99% HPLC",
        cas: "30123-17-2",
        description: "Atypical antidepressant for neurological research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    
    // ========== MODAFINIL ==========
    {
        id: 45,
        name: "Modafinil 100mg",
        code: "CS-mo010023",
        category: "small molecules",
        type: "Modafinil",
        dosage: "100mg",
        price: 49.99,
        purity: "99% HPLC",
        cas: "68693-11-8",
        description: "Wakefulness-promoting agent for sleep research",
        color: "#95a5a6",
        stock: true,
        featured: true
    },
    {
        id: 46,
        name: "Modafinil 1g",
        code: "CS-mo100024",
        category: "small molecules",
        type: "Modafinil",
        dosage: "1g",
        price: 299.99,
        purity: "99% HPLC",
        cas: "68693-11-8",
        description: "Wakefulness-promoting agent for sleep research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    
    // ========== KAVA EXTRACT ==========
    {
        id: 47,
        name: "Kava Extract 500mg",
        code: "CS-ka050025",
        category: "small molecules",
        type: "Kava",
        dosage: "500mg",
        price: 34.99,
        purity: "30% kavalactones",
        cas: "N/A",
        description: "Piper methysticum extract for anxiety research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    
    // ========== 5-HTP ==========
    {
        id: 48,
        name: "5-HTP 100mg",
        code: "CS-5h010026",
        category: "small molecules",
        type: "5-HTP",
        dosage: "100mg",
        price: 24.99,
        purity: "99% HPLC",
        cas: "4350-09-8",
        description: "Serotonin precursor for mood research",
        color: "#95a5a6",
        stock: true,
        featured: false
    },
    {
        id: 49,
        name: "5-HTP 1g",
        code: "CS-5h100027",
        category: "small molecules",
        type: "5-HTP",
        dosage: "1g",
        price: 99.99,
        purity: "99% HPLC",
        cas: "4350-09-8",
        description: "Serotonin precursor for mood research",
        color: "#95a5a6",
        stock: true,
        featured: false
    }
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

// Log para debug
console.log('[DEBUG] products-data.js carregado');
console.log('[DEBUG] Total produtos:', products.length);
console.log('[DEBUG] Categorias:', categories.length);
console.log('[DEBUG] Tipos:', types.length);

// Adicionar um evento para quando os dados estiverem prontos
window.dispatchEvent(new Event('productsDataLoaded'));
