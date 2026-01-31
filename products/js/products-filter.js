// products/js/products-filter.js - VERSÃO CORRIGIDA
// NÃO CRIA ELEMENTOS DE LAYOUT, APENAS GERENCIA PRODUTOS

class ProductFilter {
    constructor() {
        this.products = window.products || [];
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        // Aguardar DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            setTimeout(() => this.init(), 100);
        }
    }
    
    init() {
        // Verificar se elementos existem
        if (!document.getElementById('categories-filter') || 
            !document.getElementById('products-grid')) {
            console.error('Elementos do DOM não encontrados');
            return;
        }
        
        this.renderCategories();
        this.renderProducts();
        this.setupEventListeners();
        this.populateTypeFilter();
        console.log('ProductFilter inicializado com', this.products.length, 'produtos');
    }
    
    renderCategories() {
        const container = document.getElementById('categories-filter');
        if (!container) return;
        
        // Gerar categorias dos produtos
        const categories = [];
        const uniqueCats = [...new Set(this.products.map(p => p.category).filter(Boolean))];
        
        // Adicionar "All Products"
        categories.push({
            id: "all", 
            name: "All Products", 
            count: this.products.length
        });
        
        // Adicionar outras categorias
        uniqueCats.forEach(cat => {
            const count = this.products.filter(p => p.category === cat).length;
            const name = cat.charAt(0).toUpperCase() + cat.slice(1);
            categories.push({ 
                id: cat, 
                name: name, 
                count 
            });
        });
        
        // Renderizar botões
        let html = categories.map(cat => `
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
        
        // Extrair tipos únicos dos produtos
        const uniqueTypes = [...new Set(this.products.map(p => p.type).filter(Boolean))].sort();
        
        uniqueTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        // Mostrar loading se não houver produtos
        if (!this.filteredProducts || this.filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-flask fa-3x"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search term</p>
                </div>
            `;
            this.updateProductCount(0);
            return;
        }
        
        // Renderizar produtos
        let html = this.filteredProducts.map(product => {
            const categoryColor = this.getCategoryColor(product.category);
            
            return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
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
                            <button class="btn-details" onclick="productFilter.showProductDetails(${product.id})">
                                <i class="fas fa-info-circle"></i> Details
                            </button>
                            <button class="btn-cart" onclick="productFilter.addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');
        
        container.innerHTML = html;
        this.updateProductCount(this.filteredProducts.length);
    }
    
    getCategoryColor(category) {
        // Cores por categoria
        const colors = {
            peptides: "#3498db",
            coenzymes: "#e74c3c",
            nootropics: "#f39c12",
            "small molecules": "#95a5a6",
            default: "#95a5a6"
        };
        
        return colors[category] || colors.default;
    }
    
    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            // Filtrar por categoria
            if (this.currentCategory !== 'all' && product.category !== this.currentCategory) {
                return false;
            }
            
            // Filtrar por tipo
            if (this.currentType !== 'all' && product.type !== this.currentType) {
                return false;
            }
            
            // Filtrar por termo de busca
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
        
        // Ordenar produtos
        this.sortProducts();
        this.renderProducts();
    }
    
    sortProducts() {
        switch(this.currentSort) {
            case 'name-asc':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'price-asc':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'featured':
                this.filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }
    }
    
    updateProductCount(count) {
        const countElement = document.getElementById('product-count');
        if (countElement) {
            countElement.textContent = `Showing ${count} of ${this.products.length} products`;
        }
    }
    
    setupEventListeners() {
        // Filtro de categoria
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const btn = e.target.closest('.category-btn');
                this.currentCategory = btn.dataset.category;
                
                // Atualizar estado ativo
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.filterProducts();
            }
        });
        
        // Filtro de tipo
        const typeFilter = document.querySelector('.type-filter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.currentType = e.target.value;
                this.filterProducts();
            });
        }
        
        // Filtro de ordenação
        const sortFilter = document.querySelector('.sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.filterProducts();
            });
        }
        
        // Busca
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
        
        // Limpar filtros
        const clearBtn = document.getElementById('clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }
    }
    
    clearFilters() {
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        const allBtn = document.querySelector('.category-btn[data-category="all"]');
        if (allBtn) allBtn.classList.add('active');
        
        const typeFilter = document.querySelector('.type-filter');
        const sortFilter = document.querySelector('.sort-filter');
        const searchInput = document.getElementById('product-search');
        
        if (typeFilter) typeFilter.value = 'all';
        if (sortFilter) sortFilter.value = 'name-asc';
        if (searchInput) searchInput.value = '';
        
        this.filterProducts();
    }
    
    showProductDetails(productId) {
        // Implementação SIMPLES sem criar modais complexos
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        alert(`Product Details:\n\nName: ${product.name}\nPrice: $${product.price}\nCode: ${product.code}\nPurity: ${product.purity}\n\n${product.description}`);
    }
    
    addToCart(productId) {
        // Implementação SIMPLES
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Simples notificação
        const notification = document.createElement('div');
        notification.innerHTML = `Added ${product.name} to cart!`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #2ecc71;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            z-index: 1000;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se dados foram carregados
    if (!window.products || window.products.length === 0) {
        console.error('No products data loaded');
        return;
    }
    
    // Criar instância global
    window.productFilter = new ProductFilter();
});
