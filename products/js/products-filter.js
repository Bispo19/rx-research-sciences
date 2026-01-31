// products/js/products-filter.js
class ProductFilter {
    constructor() {
        this.products = [];
        this.filteredProducts = [];
        this.currentCategory = 'all';
        this.currentType = 'all';
        this.currentSort = 'featured';
        this.searchTerm = '';
        this.init();
    }

    async init() {
        console.log('[ProductFilter] Inicializando...');
        
        // Aguardar carregamento dos dados
        if (typeof products === 'undefined') {
            console.log('[ProductFilter] Aguardando dados...');
            window.addEventListener('productsDataLoaded', () => {
                this.products = window.products || [];
                this.setup();
            });
            
            // Tentar carregar diretamente
            setTimeout(() => {
                if (typeof products !== 'undefined') {
                    this.products = window.products || [];
                    this.setup();
                } else {
                    console.error('[ProductFilter] Dados não carregados');
                    this.showError('Erro ao carregar produtos');
                }
            }, 2000);
        } else {
            this.products = window.products || [];
            this.setup();
        }
    }

    setup() {
        console.log('[ProductFilter] Configurando com', this.products.length, 'produtos');
        
        if (this.products.length === 0) {
            this.showError('Nenhum produto disponível');
            return;
        }

        this.filteredProducts = [...this.products];
        this.setupEventListeners();
        this.renderProducts();
        this.updateCartCount();
        
        console.log('[ProductFilter] Pronto!');
    }

    setupEventListeners() {
        // Eventos de categoria
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.setCategory(category);
            });
        });

        // Filtro de tipo
        const typeFilter = document.getElementById('type-filter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                this.currentType = e.target.value;
                this.applyFilters();
            });
        }

        // Ordenação
        const sortFilter = document.getElementById('sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.applyFilters();
            });
        }

        // Busca
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.applyFilters();
            });
        }

        // Limpar filtros
        const clearBtn = document.getElementById('clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }

        // Botão "Details" (se existir)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-details') || e.target.closest('.btn-details')) {
                const productId = e.target.dataset.id || e.target.closest('.btn-details').dataset.id;
                this.showProductDetails(parseInt(productId));
            }
            
            // Botão "Add to Cart"
            if (e.target.classList.contains('btn-cart') || e.target.closest('.btn-cart')) {
                const productId = e.target.dataset.id || e.target.closest('.btn-cart').dataset.id;
                this.addToCart(parseInt(productId));
            }
        });
    }

    setCategory(category) {
        this.currentCategory = category;
        
        // Atualizar botões ativos
        document.querySelectorAll('.category-btn').forEach(btn => {
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        this.applyFilters();
    }

    applyFilters() {
        console.log('[ProductFilter] Aplicando filtros...');
        
        // Filtro por categoria
        if (this.currentCategory === 'all') {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(p => p.category === this.currentCategory);
        }

        // Filtro por tipo
        if (this.currentType !== 'all') {
            this.filteredProducts = this.filteredProducts.filter(p => p.type === this.currentType);
        }

        // Filtro por busca
        if (this.searchTerm) {
            this.filteredProducts = this.filteredProducts.filter(p => 
                p.name.toLowerCase().includes(this.searchTerm) ||
                p.code.toLowerCase().includes(this.searchTerm) ||
                p.description.toLowerCase().includes(this.searchTerm) ||
                p.type.toLowerCase().includes(this.searchTerm)
            );
        }

        // Ordenação
        this.sortProducts();

        // Renderizar
        this.renderProducts();
        
        // Atualizar contador
        this.updateProductCount();
    }

    sortProducts() {
        switch (this.currentSort) {
            case 'price-low':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'featured':
                this.filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
            default:
                this.filteredProducts.sort((a, b) => b.id - a.id); // Mais novos primeiro
        }
    }

    renderProducts() {
        const grid = document.getElementById('products-grid');
        if (!grid) {
            console.error('[ProductFilter] Grid não encontrado');
            return;
        }

        if (this.filteredProducts.length === 0) {
            grid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search term</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredProducts.map(product => this.createProductCard(product)).join('');
    }

    createProductCard(product) {
        const color = window.categoryColors?.[product.category] || '#95a5a6';
        
        // Determinar ícone baseado no tipo
        let icon = 'fa-flask';
        if (product.type.includes('Tirzepatide') || product.type.includes('Retatrutide')) icon = 'fa-weight';
        if (product.type.includes('Semax') || product.type.includes('Selank') || product.type.includes('Noopept')) icon = 'fa-brain';
        if (product.type.includes('Epithalon')) icon = 'fa-clock';
        if (product.type.includes('BPC') || product.type.includes('TB')) icon = 'fa-heartbeat';
        if (product.category === 'coenzymes') icon = 'fa-bolt';
        if (product.category === 'nootropics') icon = 'fa-brain';
        
        return `
            <div class="product-card" data-category="${product.category}" data-type="${product.type}">
                ${product.featured ? '<div class="product-badge featured">FEATURED</div>' : ''}
                <div class="product-image" style="background: linear-gradient(135deg, ${color}40, ${color}80);">
                    <div class="molecule-icon">
                        <i class="fas ${icon}"></i>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        <span class="product-code">${product.code}</span>
                    </div>
                    <
