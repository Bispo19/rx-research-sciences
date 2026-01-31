// products/js/products-filter.js - VERSÃO SIMPLIFICADA E SEGURA
// NÃO MODIFICA LAYOUT, APENAS FILTRA PRODUTOS

class ProductFilter {
    constructor() {
        console.log('ProductFilter inicializando...');
        
        // Usar dados do products-data.js
        this.products = window.products || [];
        console.log('Produtos carregados:', this.products.length);
        
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        // Inicializar quando DOM estiver pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    init() {
        console.log('ProductFilter.init() chamado');
        
        // Verificar elementos essenciais
        const categoriesContainer = document.getElementById('categories-filter');
        const productsGrid = document.getElementById('products-grid');
        
        if (!categoriesContainer || !productsGrid) {
            console.error('Elementos do DOM não encontrados!');
            console.log('categories-filter:', categoriesContainer);
            console.log('products-grid:', productsGrid);
            return;
        }
        
        // Configurar event listeners primeiro
        this.setupEventListeners();
        
        // Renderizar produtos iniciais
        this.renderProducts();
        
        console.log('ProductFilter inicializado com sucesso');
    }
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        // Limpar loading
        container.innerHTML = '';
        
        // Se não houver produtos
        if (this.filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                    <i class="fas fa-flask fa-3x" style="color: #95a5a6; margin-bottom: 20px;"></i>
                    <h3 style="color: #34495e; margin-bottom: 10px;">No products found</h3>
                    <p style="color: #7f8c8d;">Try adjusting your filters or search term</p>
                </div>
            `;
            this.updateProductCount(0);
            return;
        }
        
        // Renderizar produtos
        this.filteredProducts.forEach(product => {
            const productCard = this.createProductCard(product);
            container.appendChild(productCard);
        });
        
        this.updateProductCount(this.filteredProducts.length);
    }
    
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-type', product.type);
        
        // Cor da categoria
        const categoryColors = {
            peptides: "#3498db",
            coenzymes: "#e74c3c",
            nootropics: "#f39c12",
            "small molecules": "#95a5a6"
        };
        
        const categoryColor = categoryColors[product.category] || "#95a5a6";
        const darkenedColor = this.darkenColor(categoryColor);
        
        card.innerHTML = `
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
                        <button class="btn-details" data-id="${product.id}">
                            <i class="fas fa-info-circle"></i> Details
                        </button>
                        <button class="btn-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Adicionar event listeners aos botões
        const detailsBtn = card.querySelector('.btn-details');
        const cartBtn = card.querySelector('.btn-cart');
        
        if (detailsBtn) {
            detailsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showProductDetails(product.id);
            });
        }
        
        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addToCart(product.id);
            });
        }
        
        return card;
    }
    
    darkenColor(color) {
        // Simples função para escurecer cor
        return color.replace(/\d+/g, num => Math.max(0, parseInt(num) - 40));
    }
    
    filterProducts() {
        console.log('Filtrando produtos...');
        console.log('Categoria:', this.currentCategory);
        console.log('Tipo:', this.currentType);
        console.log('Busca:', this.searchTerm);
        
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
                const matches = 
                    (product.name && product.name.toLowerCase().includes(searchLower)) ||
                    (product.code && product.code.toLowerCase().includes(searchLower)) ||
                    (product.type && product.type.toLowerCase().includes(searchLower)) ||
                    (product.description && product.description.toLowerCase().includes(searchLower));
                
                if (!matches) return false;
            }
            
            return true;
        });
        
        console.log('Produtos filtrados:', this.filteredProducts.length);
        
        // Ordenar produtos
        this.sortProducts();
        
        // Renderizar produtos filtrados
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
        console.log('Configurando event listeners...');
        
        // Filtro de categoria
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const btn = e.target.closest('.category-btn');
                this.currentCategory = btn.dataset.category;
                
                // Atualizar estado ativo
                document.querySelectorAll('.category-btn').forEach(b => {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                
                this.filterProducts();
            }
        });
        
        // Filtro de tipo
        const typeFilter = document.getElementById('type-filter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.currentType = e.target.value;
                this.filterProducts();
            });
        }
        
        // Filtro de ordenação
        const sortFilter = document.getElementById('sort-filter');
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
        console.log('Limpando filtros...');
        
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        // Resetar UI
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        const allBtn = document.querySelector('.category-btn[data-category="all"]');
        if (allBtn) allBtn.classList.add('active');
        
        const typeFilter = document.getElementById('type-filter');
        const sortFilter = document.getElementById('sort-filter');
        const searchInput = document.getElementById('product-search');
        
        if (typeFilter) typeFilter.value = 'all';
        if (sortFilter) sortFilter.value = 'name-asc';
        if (searchInput) searchInput.value = '';
        
        this.filterProducts();
    }
    
    showProductDetails(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Modal simples
        const modalHtml = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px;">
                <div style="background: white; border-radius: 15px; max-width: 500px; width: 100%; padding: 30px; position: relative;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">&times;</button>
                    
                    <h2 style="color: #0d47a1; margin-top: 0;">${product.name}</h2>
                    <p><strong>Code:</strong> ${product.code}</p>
                    <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                    <p><strong>Purity:</strong> ${product.purity}</p>
                    <p><strong>Type:</strong> ${product.type}</p>
                    <p><strong>Dosage:</strong> ${product.dosage}</p>
                    ${product.cas && product.cas !== "N/A" ? `<p><strong>CAS:</strong> ${product.cas}</p>` : ''}
                    <p><strong>Description:</strong> ${product.description}</p>
                    
                    <div style="margin-top: 30px; display: flex; gap: 15px;">
                        <button onclick="window.productFilter.addToCart(${product.id}); this.closest('[style*=\"position: fixed\"]').remove();" style="padding: 12px 24px; background: #2ecc71; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="padding: 12px 24px; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        const modal = document.createElement('div');
        modal.innerHTML = modalHtml;
        document.body.appendChild(modal);
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Notificação simples
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="position: fixed; top: 100px; right: 20px; background: #2ecc71; color: white; padding: 15px 20px; border-radius: 5px; z-index: 1000; box-shadow: 0 5px 15px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px; animation: slideIn 0.3s ease;">
                <i class="fas fa-check-circle"></i>
                Added <strong>${product.name}</strong> to cart!
            </div>
        `;
        
        // Adicionar estilo de animação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 3000);
    }
}

// Inicializar automaticamente apenas uma vez
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.products && window.products.length > 0) {
            window.productFilter = new ProductFilter();
        }
    });
} else {
    if (window.products && window.products.length > 0) {
        window.productFilter = new ProductFilter();
    }
}
