// products/js/products-filter.js
class ProductFilter {
    constructor() {
        this.products = window.products || [];
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'name-asc';
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.renderCategories();
        this.renderProducts();
        this.setupEventListeners();
        this.populateTypeFilter();
    }
    
    renderCategories() {
        const container = document.getElementById('categories-filter');
        if (!container) return;
        
        let html = window.categories.map(cat => `
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
        
        // Adicionar tipos únicos ordenados
        const sortedTypes = [...window.types].sort();
        sortedTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }
    
    renderProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
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
        
        let html = this.filteredProducts.map(product => {
            const categoryColor = window.categoryColors[product.category] || window.categoryColors.default;
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
                            <button class="btn-details" data-id="${product.id}">
                                <i class="fas fa-info-circle"></i> Details
                            </button>
                            <button class="btn-cart" data-id="${product.id}">
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
                return product.name.toLowerCase().includes(searchLower) ||
                       product.code.toLowerCase().includes(searchLower) ||
                       product.type.toLowerCase().includes(searchLower) ||
                       (product.description && product.description.toLowerCase().includes(searchLower));
            }
            
            return true;
        });
        
        // Sort products
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
    
    updateProductCount() {
        const countElement = document.getElementById('product-count');
        if (countElement) {
            countElement.textContent = `Showing ${this.filteredProducts.length} of ${this.products.length} products`;
        }
    }
    
    darkenColor(color) {
        // Simple color darkening for gradient
        return color.replace(/\d+/g, num => Math.max(0, parseInt(num) - 40));
    }
    
    setupEventListeners() {
        // Category filter
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const btn = e.target.closest('.category-btn');
                this.currentCategory = btn.dataset.category;
                
                // Update active state
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.filterProducts();
            }
            
            // Product actions
            if (e.target.closest('.btn-details')) {
                const id = e.target.closest('.btn-details').dataset.id;
                this.showProductDetails(id);
            }
            
            if (e.target.closest('.btn-cart')) {
                const id = e.target.closest('.btn-cart').dataset.id;
                this.addToCart(id);
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
                document.querySelector('.category-btn[data-category="all"]').classList.add('active');
                
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
        
        const details = `
🏷️ <strong>${product.name}</strong>
📦 Code: ${product.code}
💰 Price: $${product.price.toFixed(2)}
🧪 Purity: ${product.purity}
⚗️ Type: ${product.type}
📏 Dosage: ${product.dosage}
${product.cas && product.cas !== "N/A" ? `🔬 CAS: ${product.cas}\n` : ''}
📝 ${product.description}
        `.trim();
        
        alert(details);
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id == productId);
        if (!product) return;
        
        // Simple cart notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
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
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add CSS for animation if not exists
        if (!document.querySelector('#cart-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'cart-notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
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
    window.productFilter = new ProductFilter();
});
