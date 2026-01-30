// products/js/products-filter.js - VERSÃO COMPLETA CORRIGIDA
class ProductFilter {
    constructor() {
        // Usar fallback seguro para todas as variáveis
        this.products = window.products || [];
        this.categories = window.categories || this.generateDefaultCategories();
        this.types = window.types || this.generateDefaultTypes();
        this.categoryColors = window.categoryColors || this.generateDefaultColors();
        
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        this.init();
    }
    
    generateDefaultCategories() {
        const categories = [
            { id: "all", name: "All Products", count: this.products.length }
        ];
        
        if (this.products.length > 0) {
            // Extrair categorias únicas dos produtos
            const uniqueCats = [...new Set(this.products.map(p => p.category).filter(Boolean))];
            
            uniqueCats.forEach(cat => {
                const count = this.products.filter(p => p.category === cat).length;
                const name = cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Other';
                categories.push({ 
                    id: cat, 
                    name: name + (cat.endsWith('s') ? '' : 's'), 
                    count 
                });
            });
        }
        
        return categories;
    }
    
    generateDefaultTypes() {
        if (this.products.length === 0) return [];
        return [...new Set(this.products.map(p => p.type).filter(Boolean))];
    }
    
    generateDefaultColors() {
        return {
            peptides: "#3498db",
            coenzymes: "#e74c3c",
            nootropics: "#f39c12",
            "small molecules": "#95a5a6",
            default: "#95a5a6"
        };
    }
    
    init() {
        this.renderCategories();
        this.renderProducts();
        this.setupEventListeners();
        this.populateTypeFilter();
    }
    
    renderCategories() {
        const container = document.getElementById('categories-filter');
        if (!container) {
            console.warn('Categories filter container not found');
            return;
        }
        
        // Usar this.categories em vez de window.categories
        let html = this.categories.map(cat => `
            <button class="category-btn ${this.currentCategory === cat.id ? 'active' : ''}" 
                    data-category="${cat.id}">
                ${cat.name} <span class="count">(${cat.count})</span>
            </button>
        `).join('');
        
        container.innerHTML = html;
    }
    
    populateTypeFilter() {
        const typeFilter = document.querySelector('.type-filter');
        if (!typeFilter) return;
        
        // Limpar opções existentes exceto "All Types"
        while (typeFilter.options.length > 1) {
            typeFilter.remove(1);
        }
        
        // Adicionar tipos
        if (this.types && this.types.length > 0) {
            const sortedTypes = [...this.types].sort();
            sortedTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeFilter.appendChild(option);
            });
        }
    }
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) {
            console.error('Products grid container not found');
            return;
        }
        
        // Se não houver produtos
        if (this.filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-flask fa-3x"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search term</p>
                </div>
            `;
            return;
        }
        
        // Renderizar produtos
        let html = this.filteredProducts.map(product => {
            const categoryColor = this.categoryColors[product.category] || this.categoryColors.default;
            const darkenedColor = this.darkenColor(categoryColor);
            
            return `
            <div class="product-card" data-category="${product.category}" data-type="${product.type}">
                <div class="product-image" style="background: linear-gradient(135deg, ${categoryColor}, ${darkenedColor})">
                    <div class="molecule-icon">⚗️</div>
                    <div class="product-badge ${product.featured ? 'featured' : ''}">
                        ${product.featured ? 'FEATURED' : product.purity}
                    </div>
                </div>
                
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        <span class="product-code">${product.code}</span>
                    </div>
                    
                    <div class="product-specs">
                        <div class="spec">
                            <span class="spec-label">Type:</span>
                            <span class="spec-value">${product.type}</span>
                        </div>
                        <div class="spec">
                            <span class="spec-label">Dosage:</span>
                            <span class="spec-value">${product.dosage}</span>
                        </div>
                        <div class="spec">
                            <span class="spec-label">Purity:</span>
                            <span class="spec-value">${product.purity}</span>
                        </div>
                        ${product.cas && product.cas !== "N/A" ? `
                        <div class="spec">
                            <span class="spec-label">CAS:</span>
                            <span class="spec-value">${product.cas}</span>
                        </div>` : ''}
                    </div>
                    
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-footer">
                        <div class="price">$${product.price.toFixed(2)}</div>
                        <div class="actions">
                            <button class="btn-details" data-id="${product.id}" onclick="window.productFilter.showProductDetails(${product.id})">
                                <i class="fas fa-info-circle"></i> Details
                            </button>
                            <button class="btn-cart" data-id="${product.id}" onclick="window.productFilter.addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');
        
        container.innerHTML = html;
        this.updateProductCount();
    }
    
    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            // Filter by category
            if (this.currentCategory !== 'all' && product.category !== this.currentCategory) {
                return false;
            }
            
            // Filter by type
            if (this.currentType !== 'all' && product.type !== this.currentType) {
                return false;
            }
            
            // Filter by search term
            if (this.searchTerm) {
                const searchLower = this.searchTerm.toLowerCase();
                return (
                    (product.name && product.name.toLowerCase().includes(searchLower)) ||
                    (product.code && product.code.toLowerCase().includes(searchLower)) ||
                    (product.type && product.type.toLowerCase().includes(searchLower)) ||
                    (product.description && product.description.toLowerCase().includes(searchLower))
                );
            }
            
            return true;
        });
        
        // Sort products
        this.sortProducts();
        this.renderProducts();
    }
    
    sortProducts() {
        if (!this.filteredProducts || this.filteredProducts.length === 0) return;
        
        switch(this.currentSort) {
            case 'name-asc':
                this.filteredProducts.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
                break;
            case 'name-desc':
                this.filteredProducts.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
                break;
            case 'price-asc':
                this.filteredProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
                break;
            case 'price-desc':
                this.filteredProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case 'featured':
                this.filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }
    }
    
    updateProductCount() {
        const countElement = document.getElementById('product-count');
        if (countElement) {
            countElement.textContent = `Showing ${this.filteredProducts.length} of ${this.products.length} products`;
        }
    }
    
    darkenColor(color) {
        if (!color) return '#95a5a6';
        return color.replace(/\d+/g, num => Math.max(0, parseInt(num) - 40));
    }
    
    setupEventListeners() {
        // Category filter - delegado
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const btn = e.target.closest('.category-btn');
                this.currentCategory = btn.dataset.category;
                
                // Update active state
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.filterProducts();
            }
        });
        
        // Type filter
        const typeFilter = document.querySelector('.type-filter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.currentType = e.target.value;
                this.filterProducts();
            });
        }
        
        // Sort filter
        const sortFilter = document.querySelector('.sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterProducts();
            });
        }
        
        // Search input
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            let timeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    this.searchTerm = e.target.value.trim().toLowerCase();
                    this.filterProducts();
                }, 300);
            });
        }
        
        // Clear filters
        const clearBtn = document.getElementById('clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.currentCategory = 'all';
                this.currentType = 'all';
                this.currentSort = 'name-asc';
                this.searchTerm = '';
                
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                const allBtn = document.querySelector('.category-btn[data-category="all"]');
                if (allBtn) allBtn.classList.add('active');
                
                if (typeFilter) typeFilter.value = 'all';
                if (sortFilter) sortFilter.value = 'name-asc';
                if (searchInput) searchInput.value = '';
                
                this.filterProducts();
            });
        }
    }
    
    showProductDetails(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Criar modal SIMPLES sem eval() - seguro para CSP
        const modal = document.createElement('div');
        modal.className = 'product-details-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 15px;
                max-width: 600px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                padding: 30px;
                position: relative;
            ">
                <button onclick="this.closest('.product-details-modal').remove()" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                ">&times;</button>
                
                <h2 style="color: #0d47a1; margin-top: 0;">${product.name}</h2>
                <p><strong>Code:</strong> ${product.code}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Purity:</strong> ${product.purity}</p>
                <p><strong>Type:</strong> ${product.type}</p>
                <p><strong>Dosage:</strong> ${product.dosage}</p>
                ${product.cas && product.cas !== "N/A" ? `<p><strong>CAS:</strong> ${product.cas}</p>` : ''}
                <p><strong>Description:</strong> ${product.description}</p>
                
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button onclick="window.productFilter.addToCart(${product.id}); this.closest('.product-details-modal').remove();" style="
                        padding: 12px 24px;
                        background: #2ecc71;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button onclick="this.closest('.product-details-modal').remove()" style="
                        padding: 12px 24px;
                        background: #f5f5f5;
                        color: #333;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        cursor: pointer;
                    ">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Simples notificação
        const notification = document.createElement('div');
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Added <strong>${product.name}</strong> to cart!
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ecc71;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            animation: slideInRight 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Adicionar CSS para animação se não existir
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // DEBUG: Verificar se os dados foram carregados
    console.log('DEBUG - Window.products:', window.products ? window.products.length : 'undefined');
    console.log('DEBUG - Window.categories:', window.categories ? window.categories.length : 'undefined');
    
    // Criar instância globalmente acessível
    window.productFilter = new ProductFilter();
    
    // Forçar renderização inicial
    setTimeout(() => {
        if (window.productFilter && window.productFilter.products.length === 0) {
            console.warn('No products loaded - checking data files');
            
            // Tentar recarregar dados
            if (typeof products !== 'undefined') {
                window.products = products;
                window.categories = categories;
                window.types = types;
                window.categoryColors = categoryColors;
                
                // Recriar o filtro
                window.productFilter = new ProductFilter();
            }
        }
    }, 1000);
});

// Adicionar estilos CSS básicos para modais
if (!document.querySelector('#product-filter-styles')) {
    const style = document.createElement('style');
    style.id = 'product-filter-styles';
    style.textContent = `
        .product-details-modal {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .loading {
            text-align: center;
            padding: 60px 20px;
            color: #666;
        }
        
        .loading i {
            display: block;
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);
}
