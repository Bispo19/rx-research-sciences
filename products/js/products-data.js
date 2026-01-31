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
    // ... (todos os outros produtos do seu arquivo)
    // Adicione todos os 48 produtos aqui
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
