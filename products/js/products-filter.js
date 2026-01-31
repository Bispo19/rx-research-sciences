// products/js/products-filter.js - VERSÃO FINAL OTIMIZADA
class ProductFilter {
    constructor() {
        console.log('[ProductFilter] Inicializando...');
        
        // Dados dos produtos
        this.products = window.products || [];
        console.log('[ProductFilter] Produtos:', this.products.length);
        
        if (this.products.length === 0) {
            console.error('[ProductFilter] ERRO: Sem produtos!');
            return;
        }
        
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        // Inicializar
        this.init();
    }
    
    init() {
        console.log('[ProductFilter] Configurando...');
        
        // Verificar elementos
        if (!document.getElementById('products-grid')) {
            console.error('[ProductFilter] Elemento products-grid não encontrado');
            return;
        }
        
        // Configurar eventos
        this.setupEventListeners();
        
        // Renderizar inicial
        this.renderProducts();
        
        console.log('[ProductFilter] Pronto!');
    }
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        // Limpar
        container.innerHTML = '';
        
        // Sem produtos
        if (this.filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-flask fa-3x"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters</p>
                </div>
            `;
            this.updateProductCount(0);
            return;
        }
        
        // Renderizar cada produto
        this.filteredProducts.forEach(product => {
            container.appendChild(this.createProductCard(product));
        });
        
        this.updateProductCount(this.filteredProducts.length);
    }
    
    createProductCard(product) {
        const colors = {
            peptides: "#3498db",
            coenzymes: "#e74c3c",
            nootropics: "#f39c12",
            "small molecules": "#95a5a6"
        };
        
        const color = colors[product.category] || "#95a5a6";
        const darkColor = this.darkenColor(color);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" style="background: linear-gradient(135deg, ${color}, ${darkColor})">
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
        
        // Eventos dos botões
        card.querySelector('.btn-details')?.addEventListener('click', () => {
            this.showProductDetails(product.id);
        });
        
        card.querySelector('.btn-cart')?.addEventListener('click', () => {
            this.addToCart(product.id);
        });
        
        return card;
    }
    
    darkenColor(hex) {
        return hex.replace(/\d+/g, num => Math.max(0, parseInt(num) - 40));
    }
    
    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            // Categoria
            if (this.currentCategory !== 'all' && product.category !== this.currentCategory) {
                return false;
            }
            
            // Tipo
            if (this.currentType !== 'all' && product.type !== this.currentType) {
                return false;
            }
            
            // Busca
            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                return (
                    product.name.toLowerCase().includes(term) ||
                    product.code.toLowerCase().includes(term) ||
                    product.type.toLowerCase().includes(term) ||
                    product.description.toLowerCase().includes(term)
                );
            }
            
            return true;
        });
        
        // Ordenar
        this.sortProducts();
        
        // Renderizar
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
        const element = document.getElementById('product-count');
        if (element) {
            element.textContent = `Showing ${count} of ${this.products.length} products`;
        }
    }
    
    setupEventListeners() {
        // Categorias
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn) {
                this.currentCategory = btn.dataset.category;
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterProducts();
            }
        });
        
        // Tipo
        document.getElementById('type-filter')?.addEventListener('change', (e) => {
            this.currentType = e.target.value;
            this.filterProducts();
        });
        
        // Ordenação
        document.getElementById('sort-filter')?.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.filterProducts();
        });
        
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
        document.getElementById('clear-filters')?.addEventListener('click', () => {
            this.clearFilters();
        });
    }
    
    clearFilters() {
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        // UI
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.category-btn[data-category="all"]')?.classList.add('active');
        
        document.getElementById('type-filter').value = 'all';
        document.getElementById('sort-filter').value = 'name-asc';
        document.getElementById('product-search').value = '';
        
        this.filterProducts();
    }
    
    showProductDetails(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Remover modal existente
        document.querySelector('.product-modal')?.remove();
        
        // Criar modal
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); z-index: 10000;
            display: flex; justify-content: center; align-items: center; padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="background: white; border-radius: 15px; max-width: 500px; width: 100%; padding: 30px; position: relative;">
                <button style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;"
                        onclick="this.closest('.product-modal').remove()">&times;</button>
                
                <h2 style="color: #0d47a1; margin: 0 0 20px 0;">${product.name}</h2>
                
                <p><strong>Code:</strong> ${product.code}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                <p><strong>Purity:</strong> ${product.purity}</p>
                <p><strong>Type:</strong> ${product.type}</p>
                <p><strong>Dosage:</strong> ${product.dosage}</p>
                ${product.cas && product.cas !== "N/A" ? `<p><strong>CAS:</strong> ${product.cas}</p>` : ''}
                
                <p style="margin-top: 20px;"><strong>Description:</strong><br>${product.description}</p>
                
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button onclick="window.productFilter.addToCart(${product.id}); this.closest('.product-modal').remove();"
                            style="padding: 12px 24px; background: #2ecc71; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button onclick="this.closest('.product-modal').remove()"
                            style="padding: 12px 24px; background: #f5f5f5; color: #333; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        `;
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        document.body.appendChild(modal);
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Remover notificação existente
        document.querySelector('.cart-notification')?.remove();
        
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.style.cssText = `
            position: fixed; top: 100px; right: 20px; background: #2ecc71; color: white;
            padding: 15px 20px; border-radius: 5px; z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px;
            animation: slideInRight 0.3s ease;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Added <strong>${product.name}</strong> to cart!
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Inicializar quando dados estiverem prontos
if (window.products && window.products.length > 0) {
    window.productFilter = new ProductFilter();
}
