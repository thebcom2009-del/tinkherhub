const products = [
    // Pickles
    {
        name: "Spicy Garlic Pickles", price: 99, category: "Pickles", img: "images/spicy_garlic_pickle.png",
        desc: "Handmade with fresh garlic cloves, red chillies, and a secret blend of spices. Perfectly fermented for a tangy, fiery kick.",
        rating: 4.5, reviews: [
            { user: "Priya S.", stars: 5, text: "Amazing taste! Reminds me of homemade pickles from my grandmother." },
            { user: "Rahul M.", stars: 4, text: "Great spice level. Perfect with rice and dal." }
        ]
    },
    {
        name: "Lemon Chilly Pickles", price: 89, category: "Pickles", img: "images/lemon_chilly_pickle.png",
        desc: "Zesty lemon wedges paired with green chillies, sun-dried and pickled in mustard oil with traditional south Indian spices.",
        rating: 4.3, reviews: [
            { user: "Anita R.", stars: 4, text: "Very tangy and flavorful. Love the authentic taste!" },
            { user: "Suresh K.", stars: 5, text: "Best lemon pickle I've ever had. Highly recommend." }
        ]
    },
    {
        name: "Carrot & Ginger Pickles", price: 99, category: "Pickles", img: "images/carrot_ginger_pickle.png",
        desc: "Fresh carrots and ginger sliced thin, marinated in aromatic spices. A crunchy, mildly spiced delight.",
        rating: 4.0, reviews: [
            { user: "Meena P.", stars: 4, text: "Unique combination. The ginger gives it a lovely warmth." }
        ]
    },

    // Sarees
    {
        name: "Premium Sheematti Saree", price: 1499, category: "Clothes", img: "images/sheematti_saree.png",
        desc: "Luxurious Sheematti silk saree with rich golden zari border and intricate weaving. Perfect for weddings and festive occasions.",
        rating: 4.8, reviews: [
            { user: "Lakshmi V.", stars: 5, text: "Absolutely stunning! The silk quality is superb." },
            { user: "Kavitha N.", stars: 5, text: "Wore it to a wedding. Got so many compliments!" }
        ]
    },
    {
        name: "Kanchipuram Silk Saree", price: 2999, category: "Clothes", img: "https://images.unsplash.com/photo-1621213009762-672e81af0c35?auto=format&fit=crop&q=80&w=600",
        desc: "Authentic Kanchipuram silk with traditional temple border zari work. Handwoven by master weavers of Tamil Nadu.",
        rating: 4.9, reviews: [
            { user: "Deepa S.", stars: 5, text: "Worth every rupee. A masterpiece of Indian weaving." },
            { user: "Revathi K.", stars: 5, text: "The quality and craftsmanship are unmatched." }
        ]
    },
    {
        name: "Banarasi Silk Saree", price: 1999, category: "Clothes", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=400",
        desc: "Elegant Banarasi silk saree featuring Mughal-inspired motifs and fine zari detailing. A timeless heritage piece.",
        rating: 4.7, reviews: [
            { user: "Sunita M.", stars: 5, text: "Such intricate work! A true collector's piece." }
        ]
    },
    {
        name: "Cotton Handloom Saree", price: 999, category: "Clothes", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=400",
        desc: "Lightweight cotton handloom saree with delicate hand-woven patterns. Ideal for everyday elegance and comfort.",
        rating: 4.2, reviews: [
            { user: "Geeta R.", stars: 4, text: "Very comfortable for daily wear. Beautiful subtle patterns." }
        ]
    },

    // Clothes
    {
        name: "Leather Jacket", price: 1299, category: "Clothes", img: "images/leather_jacket.png",
        desc: "Handcrafted genuine leather jacket with classic design. Features quality stitching, metal zippers, and a timeless silhouette.",
        rating: 4.6, reviews: [
            { user: "Arjun T.", stars: 5, text: "Premium leather feel. Fits perfectly and looks amazing." },
            { user: "Vikram D.", stars: 4, text: "Great quality for the price. Very stylish." }
        ]
    },

    // Shoes
    {
        name: "Leather Sandals", price: 599, category: "Shoes", img: "https://images.unsplash.com/photo-1562273103-91207b93144a?auto=format&fit=crop&q=80&w=400",
        desc: "Handcrafted leather sandals with traditional Kolhapuri-style design. Durable, comfortable, and stylish.",
        rating: 4.4, reviews: [
            { user: "Anil K.", stars: 4, text: "Very comfortable. Love the traditional design." }
        ]
    },
    {
        name: "Handcrafted Juttis", price: 449, category: "Shoes", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
        desc: "Traditional Rajasthani juttis handmade with fine embroidery. A blend of heritage craftsmanship and modern comfort.",
        rating: 4.3, reviews: [
            { user: "Neha S.", stars: 5, text: "Beautiful embroidery work. Very eye-catching!" }
        ]
    },
    {
        name: "Canvas Slip-ons", price: 349, category: "Shoes", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400",
        desc: "Casual canvas slip-on shoes. Lightweight, breathable, and perfect for everyday wear.",
        rating: 4.1, reviews: [
            { user: "Kiran P.", stars: 4, text: "Simple, comfortable, and great for daily use." }
        ]
    },

    // Jewellery
    {
        name: "Gold Hoop Earrings", price: 499, category: "Jewelry", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400",
        desc: "Elegant gold-plated hoop earrings with a polished finish. Lightweight and perfect for both casual and formal occasions.",
        rating: 4.5, reviews: [
            { user: "Riya A.", stars: 5, text: "So elegant! Goes with everything." },
            { user: "Pooja M.", stars: 4, text: "Beautiful design. Received lots of compliments." }
        ]
    },
    {
        name: "Silver Leaf Necklace", price: 399, category: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400",
        desc: "Delicate sterling silver necklace with a nature-inspired leaf pendant. Handcrafted with attention to fine detail.",
        rating: 4.6, reviews: [
            { user: "Sneha T.", stars: 5, text: "Absolutely beautiful! The detail on the leaf is amazing." }
        ]
    },
    {
        name: "Pearl Bracelet", price: 299, category: "Jewelry", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=400",
        desc: "Freshwater pearl bracelet with a dainty gold clasp. A timeless accessory that adds grace to any outfit.",
        rating: 4.4, reviews: [
            { user: "Divya L.", stars: 4, text: "Very elegant. Perfect for special occasions." }
        ]
    },
    {
        name: "Amethyst Ring", price: 699, category: "Jewelry", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400",
        desc: "Genuine amethyst gemstone set in a handcrafted silver band. Known for its calming energy and stunning purple hue.",
        rating: 4.7, reviews: [
            { user: "Maya R.", stars: 5, text: "The stone is gorgeous! Stunning craftsmanship." }
        ]
    },

    // Stationary
    {
        name: "Handmade Paper Journal", price: 149, category: "Stationary", img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400",
        desc: "Eco-friendly journal made from handmade cotton paper with a leather-look cover. 200 pages of pure writing bliss.",
        rating: 4.3, reviews: [
            { user: "Aditi G.", stars: 4, text: "Love the texture! Great for journaling and sketching." }
        ]
    },
    {
        name: "Washi Tape Set", price: 99, category: "Stationary", img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400",
        desc: "Set of 8 decorative washi tapes in floral and geometric patterns. Perfect for scrapbooking, gifts, and crafts.",
        rating: 4.2, reviews: [
            { user: "Shreya P.", stars: 5, text: "So many cute designs! Great for decorating my planner." }
        ]
    },
    {
        name: "Bamboo Pen Set", price: 199, category: "Stationary", img: "https://images.unsplash.com/photo-1583241801142-d1fa210a2977?auto=format&fit=crop&q=80&w=1000",
        desc: "Eco-friendly bamboo pen set with smooth ink flow. Includes 3 pens in a handcrafted bamboo case. Sustainable writing at its finest.",
        rating: 4.5, reviews: [
            { user: "Rohan V.", stars: 5, text: "Beautiful pens! The bamboo case is a lovely touch." }
        ]
    },

    // Beauty

    {
        name: "Velvet Cream Lipstick", price: 249, category: "Beauty", img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=600",
        desc: "Soft, creamy texture that glides on smoothly. Provides a velvet-satin finish with comfortable wear for hours.",
        rating: 4.5, reviews: [
            { user: "Meera R.", stars: 5, text: "So moisturizing! Love the nude shade." }
        ]
    },
    {
        name: "Organic Lip Tint", price: 349, category: "Beauty", img: "https://images.unsplash.com/photo-1591360236480-4ed861025a18?auto=format&fit=crop&q=80&w=600",
        desc: "Made with natural beet extracts and organic oils. Gives a beautiful berry flush while keeping lips healthy.",
        rating: 4.8, reviews: [
            { user: "Priya L.", stars: 5, text: "Finally an organic tint that actually lasts. Gorgeous color." }
        ]
    },
    {
        name: "Moisturizing Lip Gloss", price: 199, category: "Beauty", img: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?auto=format&fit=crop&q=80&w=600",
        desc: "High-shine gloss infused with Vitamin E. Wear it alone or over lipstick for a plump, juicy look.",
        rating: 4.4, reviews: [
            { user: "Ananya J.", stars: 4, text: "Very shiny and not sticky! Great value." }
        ]
    },

    {
        name: "Matte Nail Lacquer", price: 129, category: "Beauty", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600",
        desc: "Quick-drying formula with a sophisticated velvet matte finish. Perfect for a modern, edgy look.",
        rating: 4.3, reviews: [
            { user: "Ritu S.", stars: 4, text: "Dries very fast and the matte effect is really cool." }
        ]
    },
    {
        name: "Holographic Top Coat", price: 199, category: "Beauty", img: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&q=80&w=600",
        desc: "Transform any color with a multi-dimensional rainbow sparkle. Features high-density holographic glitter.",
        rating: 4.9, reviews: [
            { user: "Ishani M.", stars: 5, text: "So sparkly! Looks like diamonds on my nails." }
        ]
    },
    {
        name: "Organic Eco-Polish", price: 179, category: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
        desc: "Non-toxic, 10-free formula made with plant-based ingredients. Breathable and gentle on your nails.",
        rating: 4.5, reviews: [
            { user: "Sneha W.", stars: 5, text: "Finally a polish that doesn't smell like chemicals. Very healthy for nails." }
        ]
    },
    {
        name: "Ceramic Pro Hair Straightener", price: 899, category: "Beauty", img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
        desc: "Advanced ceramic plates for smooth, frizz-free hair. Features adjustable temperature control and quick heat-up technology for salon-like results at home.",
        rating: 4.6, reviews: [
            { user: "Tanya M.", stars: 5, text: "Heats up so fast! Best purchase for the price." },
            { user: "Rohan D.", stars: 4, text: "Got it for my sister, she loves how smooth it makes her hair." }
        ]
    }
];

const productsContainer = document.getElementById('products-container');

// Cart state
let cart = [];

function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach((product, index) => {
        const stars = renderStars(product.rating);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-image" onclick="openProductDetail(${index})">
            <h3>${product.name}</h3>
            <div class="product-rating">${stars} <span>${product.rating}</span></div>
            <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            <div class="product-actions">
                <button class="btn-view-details" onclick="openProductDetail(${index})">View Details</button>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(card);
    });

    // Attach add-to-cart listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(e.target.dataset.index);
            addToCart(index);

            // Visual feedback
            const btn = e.target;
            btn.textContent = 'Added! ✓';
            btn.style.background = '#4CAF50';
            btn.style.borderColor = '#4CAF50';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.textContent = 'Add to Cart';
                btn.style.background = 'transparent';
                btn.style.borderColor = '#5D4037';
                btn.style.color = '#5D4037';
            }, 1200);
        });
    });
}

// Render star icons
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.3 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// Product Detail Modal
function openProductDetail(index) {
    const product = products[index];
    const modal = document.getElementById('product-modal');
    const stars = renderStars(product.rating);

    const reviewsHTML = product.reviews.map(r => `
        <div class="review-item">
            <div class="review-header">
                <strong>${r.user}</strong>
                <span class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>
            </div>
            <p>${r.text}</p>
        </div>
    `).join('');

    document.getElementById('modal-content-inner').innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="modal-info">
                <span class="modal-category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="modal-rating">${stars} <span>(${product.reviews.length} reviews)</span></div>
                <p class="modal-price">₹${product.price.toLocaleString('en-IN')}</p>
                <p class="modal-desc">${product.desc}</p>
                <button class="add-to-cart-modal" onclick="addToCart(${index}); this.textContent='Added! ✓'; this.style.background='#4CAF50'; setTimeout(()=>{this.textContent='Add to Cart'; this.style.background='var(--primary)';}, 1200);">Add to Cart</button>
            </div>
        </div>
        <div class="modal-reviews">
            <h3>Customer Reviews</h3>
            ${reviewsHTML}
            <div class="write-review">
                <h4>Write a Review</h4>
                <div class="review-form">
                    <input type="text" id="review-name" placeholder="Your Name" />
                    <div class="star-select" id="star-select">
                        <span data-star="1" onclick="selectStar(1)">☆</span>
                        <span data-star="2" onclick="selectStar(2)">☆</span>
                        <span data-star="3" onclick="selectStar(3)">☆</span>
                        <span data-star="4" onclick="selectStar(4)">☆</span>
                        <span data-star="5" onclick="selectStar(5)">☆</span>
                    </div>
                    <textarea id="review-text" placeholder="Write your review..." rows="3"></textarea>
                    <button class="btn-submit-review" onclick="submitReview(${index})">Submit Review</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
}

let selectedStars = 0;

function selectStar(n) {
    selectedStars = n;
    const starSpans = document.querySelectorAll('#star-select span');
    starSpans.forEach((s, i) => {
        s.textContent = i < n ? '★' : '☆';
        s.style.color = i < n ? '#FF8F00' : '#ccc';
    });
}

function submitReview(productIndex) {
    const name = document.getElementById('review-name').value.trim();
    const text = document.getElementById('review-text').value.trim();

    if (!name || !text || selectedStars === 0) {
        alert('Please fill in your name, select a rating, and write a review.');
        return;
    }

    products[productIndex].reviews.push({ user: name, stars: selectedStars, text: text });

    // Recalculate rating
    const allStars = products[productIndex].reviews.map(r => r.stars);
    products[productIndex].rating = parseFloat((allStars.reduce((a, b) => a + b, 0) / allStars.length).toFixed(1));

    selectedStars = 0;
    openProductDetail(productIndex); // Re-render modal
    renderProducts(); // Update cards
    alert('Thank you for your review! 🎉');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
}

// Add item to cart
function addToCart(productIndex) {
    const product = products[productIndex];
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
}

// Remove item from cart
function removeFromCart(itemIndex) {
    cart.splice(itemIndex, 1);
    updateCartUI();
}

// Change quantity
function changeQty(itemIndex, delta) {
    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
    }
    updateCartUI();
}

// Update cart UI (badge, sidebar items, total)
function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('cart-total-price');

    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalItems;
    badge.classList.toggle('has-items', totalItems > 0);

    // Update cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</p>
                </div>
                <div class="cart-item-qty">
                    <button onclick="changeQty(${index}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">🗑️</button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalPrice.textContent = `₹${total.toLocaleString('en-IN')}`;

    // Animate cart icon
    const cartIcon = document.getElementById('cart-toggle');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => { cartIcon.style.transform = 'scale(1)'; }, 200);
}

// Cart sidebar toggle
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Checkout
document.getElementById('btn-checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some products first.');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const itemList = cart.map(item => `${item.name} x${item.qty} = ₹${(item.price * item.qty).toLocaleString('en-IN')}`).join('\n');
    alert(`🛒 Order Summary:\n\n${itemList}\n\n💰 Total: ₹${total.toLocaleString('en-IN')}\n\nThank you for shopping with us!`);
});

// Initial render
renderProducts();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Authentication Toggle
const authBtn = document.getElementById('auth-btn');
let isLoggedIn = false;

authBtn.addEventListener('click', () => {
    isLoggedIn = !isLoggedIn;
    if (isLoggedIn) {
        authBtn.textContent = 'Sign Out';
        alert('Welcome! You have signed in successfully.');
    } else {
        authBtn.textContent = 'Sign In';
        alert('You have signed out.');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 5%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '1.5rem 5%';
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});
