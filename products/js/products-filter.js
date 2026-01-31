addToCart(productId) {
    const product = this.products.find(p => p.id == productId);
    if (!product) return;
    
    // Obter carrinho atual do localStorage
    let cart = JSON.parse(localStorage.getItem('rxCart')) || [];
    
    // Verificar se produto já está no carrinho
    const existingItem = cart.find(item => item.id == productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            code: product.code,
            price: product.price,
            quantity: 1,
            category: product.category,
            type: product.type,
            dosage: product.dosage,
            purity: product.purity
        });
    }
    
    // Salvar no localStorage
    localStorage.setItem('rxCart', JSON.stringify(cart));
    
    // Atualizar contador do carrinho em todas as páginas
    this.updateCartCount();
    
    // Mostrar notificação
    this.showCartNotification(product.name);
}

updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('rxCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Atualizar todos os elementos com classe .cart-count
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = totalItems;
    });
}

showCartNotification(productName) {
    // Remover notificação existente
    document.querySelector('.cart-notification')?.remove();
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Added <strong>${productName}</strong> to cart!
        <a href="cart.html" style="margin-left: 10px; color: white; text-decoration: underline;">
            View Cart
        </a>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar ao init() para atualizar contador quando página carrega
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
    
    // Atualizar contador do carrinho
    this.updateCartCount();
    
    console.log('[ProductFilter] Pronto!');
}
