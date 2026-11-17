const carsDatabase = [
    {
        id: 1,
        name: "Koenigsegg Jesko 18:26",
        brand: "Koenigsegg",
        category: "hypercar",
        year: 2026,
        price: 3400000,
        hp: 1600,
        accel: "2.5s",
        topSpeed: 483,
        engine: "5.0L Twin-Turbo V8",
        transmission: "9-pog'onali LST",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=85",
        desc: "APEX 18:26 maxsus nashri. Aerodinamik bosim kuchi va 1600 ot kuchiga ega mutlaq rekordchi giperkar."
    },
    {
        id: 2,
        name: "Lamborghini Revuelto V12",
        brand: "Lamborghini",
        category: "hypercar",
        year: 2026,
        price: 608358,
        hp: 1015,
        accel: "2.5s",
        topSpeed: 350,
        engine: "6.5L V12 + 3 Elektro",
        transmission: "8-pog'onali DCT",
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=900&q=85",
        desc: "Afsonaviy V12 atmosferali dvigatel va uchta elektr motor uyg'unligidagi birinchi HPEV gibrid superkar."
    },
    {
        id: 3,
        name: "Ferrari SF90 Stradale",
        brand: "Ferrari",
        category: "hypercar",
        year: 2025,
        price: 524815,
        hp: 986,
        accel: "2.5s",
        topSpeed: 340,
        engine: "4.0L Twin-Turbo V8 Hybrid",
        transmission: "8-pog'onali F1 DCT",
        image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=900&q=85",
        desc: "Maranello muhandislik cho'qqisi. Formula-1 texnologiyalari asosida yaratilgan gibrid superkar."
    },
    {
        id: 4,
        name: "Porsche 911 GT3 RS",
        brand: "Porsche",
        category: "supercar",
        year: 2026,
        price: 241300,
        hp: 518,
        accel: "3.2s",
        topSpeed: 296,
        engine: "4.0L Boxer-6",
        transmission: "7-pog'onali PDK",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
        desc: "Poyga trassalari uchun yaratilgan, faol DRS qanotiga ega eng mukammal boshqariladigan Porsche."
    },
    {
        id: 5,
        name: "Rimac Nevera 18:26",
        brand: "Rimac",
        category: "electric",
        year: 2026,
        price: 2200000,
        hp: 1826,
        accel: "1.85s",
        topSpeed: 412,
        engine: "4 ta Mustaqil Elektro Motor",
        transmission: "Bir pog'onali Reduktor",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=900&q=85",
        desc: "1826 ot kuchiga sozlangan maxsus APEX 18:26 versiyasi. Dunyodagi eng tez tezlanuvchi elektro-giperkar."
    },
    {
        id: 6,
        name: "McLaren 765LT Spider",
        brand: "McLaren",
        category: "supercar",
        year: 2025,
        price: 382500,
        hp: 755,
        accel: "2.7s",
        topSpeed: 330,
        engine: "4.0L Twin-Turbo V8",
        transmission: "7-pog'onali SSG",
        image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=900&q=85",
        desc: "Ultra yengil karbon korpus va titan gaz chiqarish tizimiga ega ochiq tomli Longtail superkari."
    },
    {
        id: 7,
        name: "Mercedes-AMG GT Black Series",
        brand: "Mercedes-AMG",
        category: "supercar",
        year: 2025,
        price: 325000,
        hp: 720,
        accel: "3.1s",
        topSpeed: 325,
        engine: "4.0L V8 Biturbo",
        transmission: "7-pog'onali AMG SPEEDSHIFT",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
        desc: "Nyurburgring trassasi rekordchisi. Har bir detalida poyga ruhi va nemis aniqligi mujassam."
    },
    {
        id: 8,
        name: "Audi R8 V10 Performance",
        brand: "Audi",
        category: "supercar",
        year: 2025,
        price: 209700,
        hp: 602,
        accel: "3.1s",
        topSpeed: 331,
        engine: "5.2L V10 FSI",
        transmission: "7-pog'onali S tronic",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=85",
        desc: "Quattro to'liq uzatmasi va 8700 aylana/daqiqagacha chiquvchi V10 dvigatelli kundalik superkar."
    },
    {
        id: 9,
        name: "Porsche Taycan Turbo GT",
        brand: "Porsche",
        category: "electric",
        year: 2026,
        price: 230000,
        hp: 1092,
        accel: "2.2s",
        topSpeed: 305,
        engine: "Dual-Motor 800V Elektro",
        transmission: "2-pog'onali Avtomat",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=85",
        desc: "Attack Mode funksiyasi bilan 10 soniya ichida 1092 ot kuchini beruvchi sport elektro-sedani."
    },
    {
        id: 10,
        name: "Lamborghini Urus Performante",
        brand: "Lamborghini",
        category: "suv",
        year: 2026,
        price: 269885,
        hp: 657,
        accel: "3.3s",
        topSpeed: 306,
        engine: "4.0L Twin-Turbo V8",
        transmission: "8-pog'onali Avtomat",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=85",
        desc: "Superkar dinamikasi va krossover qulayligini birlashtirgan eng agressiv sport SUV."
    },
    {
        id: 11,
        name: "Rolls-Royce Cullinan Black Badge",
        brand: "Rolls-Royce",
        category: "suv",
        year: 2026,
        price: 455000,
        hp: 600,
        accel: "4.9s",
        topSpeed: 250,
        engine: "6.75L Twin-Turbo V12",
        transmission: "8-pog'onali ZF",
        image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=900&q=85",
        desc: "Hashamat va sokinlik qiroli. Qo'l mehnati bilan yaratilgan yulduzli osmon shiftiga ega VIP SUV."
    },
    {
        id: 12,
        name: "Ferrari 488 Pista",
        brand: "Ferrari",
        category: "supercar",
        year: 2024,
        price: 350000,
        hp: 710,
        accel: "2.85s",
        topSpeed: 340,
        engine: "3.9L Twin-Turbo V8",
        transmission: "7-pog'onali F1 DCT",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=85",
        desc: "Ferrari Challenge poyga avtomobillaridan ilhomlangan, nihoyatda o'tkir boshqaruvga ega model."
    },
    {
        id: 13,
        name: "Aston Martin Vantage F1",
        brand: "Aston Martin",
        category: "supercar",
        year: 2026,
        price: 191000,
        hp: 656,
        accel: "3.4s",
        topSpeed: 325,
        engine: "4.0L Twin-Turbo V8",
        transmission: "8-pog'onali ZF",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85",
        desc: "Britaniya aristokratiyasi va Formula-1 xavfsizlik avtomobili tajribasi mujassam bo'lgan kupe."
    },
    {
        id: 14,
        name: "Tesla Roadster SpaceX Pack",
        brand: "Tesla",
        category: "electric",
        year: 2026,
        price: 250000,
        hp: 1100,
        accel: "1.9s",
        topSpeed: 400,
        engine: "Tri-Motor Plaid Architecture",
        transmission: "To'g'ridan-to'g'ri uzatma",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=85",
        desc: "Bir quvvatlanishda 1000 km masofa bosib o'tuvchi, aerodinamik futuristik rodster."
    },
    {
        id: 15,
        name: "Mercedes-AMG G 63 Grand Edition",
        brand: "Mercedes-AMG",
        category: "suv",
        year: 2026,
        price: 235000,
        hp: 585,
        accel: "4.5s",
        topSpeed: 240,
        engine: "4.0L V8 Biturbo Mild-Hybrid",
        transmission: "9-pog'onali AMG SPEEDSHIFT",
        image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=900&q=85",
        desc: "O'zgarmas klassik dizayn va oltin aksentlar bilan bezatilgan afsonaviy Gelendvagen."
    },
    {
        id: 16,
        name: "BMW M4 CSL 18:26",
        brand: "BMW",
        category: "supercar",
        year: 2025,
        price: 140895,
        hp: 543,
        accel: "3.6s",
        topSpeed: 307,
        engine: "3.0L M TwinPower Turbo",
        transmission: "8-pog'onali M Steptronic",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
        desc: "Orqa o'rindiqlari olib tashlangan va 100 kg yengillashtirilgan haqiqiy poyga kupesi."
    },
    {
        id: 17,
        name: "Lucid Air Sapphire",
        brand: "Lucid",
        category: "electric",
        year: 2026,
        price: 249000,
        hp: 1234,
        accel: "1.89s",
        topSpeed: 330,
        engine: "3 ta Elektro Dvigatel",
        transmission: "Avtomat",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
        desc: "1234 ot kuchiga ega bo'lgan dunyodagi eng tezkor va eng uzoq masofali hashamatli elektro-sedan."
    },
    {
        id: 18,
        name: "Bugatti Chiron Pur Sport",
        brand: "Bugatti",
        category: "hypercar",
        year: 2025,
        price: 3600000,
        hp: 1500,
        accel: "2.3s",
        topSpeed: 350,
        engine: "8.0L Quad-Turbo W16",
        transmission: "7-pog'onali DSG",
        image: "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?auto=format&fit=crop&w=900&q=85",
        desc: "16 silindrli W16 afsonasi. Burilishlarda maksimal ushlab turish va tengsiz nufuz timsoli."
    }
];

let wishlist = JSON.parse(localStorage.getItem("apex1826_wishlist")) || [];
let currentFilter = "all";
let searchQuery = "";
let currentSort = "default";

window.addEventListener("load", () => {
    const fill = document.getElementById("loadingFill");
    const preloader = document.getElementById("preloader");
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 25) + 15;
        if (progress >= 100) {
            progress = 100;
            fill.style.width = "100%";
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add("hidden");
                startCounters();
            }, 350);
        } else {
            fill.style.width = progress + "%";
        }
    }, 140);
});

const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

const navbar = document.getElementById("navbar");
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
        scrollTopBtn.classList.add("visible");
    } else {
        navbar.classList.remove("scrolled");
        scrollTopBtn.classList.remove("visible");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("mobileMenuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("gold-theme");
    const isGold = document.body.classList.contains("gold-theme");
    showToast(isGold ? "Oltin VIP (18:26 Gold) mavzusi yoqildi!" : "Neon Sport (Crimson) mavzusi yoqildi!");
});

document.getElementById("soundEngineBtn").addEventListener("click", () => {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sawtooth";
        osc2.type = "triangle";

        const now = ctx.currentTime;
        osc1.frequency.setValueAtTime(65, now);
        osc1.frequency.exponentialRampToValueAtTime(240, now + 0.55);
        osc1.frequency.exponentialRampToValueAtTime(95, now + 1.3);

        osc2.frequency.setValueAtTime(130, now);
        osc2.frequency.exponentialRampToValueAtTime(480, now + 0.55);
        osc2.frequency.exponentialRampToValueAtTime(190, now + 1.3);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.25);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.4);
        osc2.stop(now + 1.4);

        showToast("V12 Dvigatel ovozi ishga tushirildi! (7500 RPM)");
    } catch (err) {
        showToast("Dvigatel ovozi faollashtirildi!");
    }
});

const heroSlides = [
    {
        name: "Lamborghini Revuelto V12",
        spec: "1015 HP • 0-100 km/h: 2.5s • 350 km/h",
        price: "$608,358",
        img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Porsche 911 GT3 RS",
        spec: "518 HP • 0-100 km/h: 3.2s • 296 km/h",
        price: "$241,300",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
    },
    {
        name: "Ferrari SF90 Stradale",
        spec: "986 HP • 0-100 km/h: 2.5s • 340 km/h",
        price: "$524,815",
        img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=900&q=85"
    }
];

const slideDots = document.querySelectorAll(".slide-dot");
const bgImgs = document.querySelectorAll(".hero-bg-img");

function setHeroSlide(index) {
    slideDots.forEach((d, i) => d.classList.toggle("active", i === index));
    bgImgs.forEach((img, i) => img.classList.toggle("active", i === index));

    const item = heroSlides[index];
    document.getElementById("heroFeaturedName").textContent = item.name;
    document.getElementById("heroFeaturedSpec").textContent = item.spec;
    document.getElementById("heroFeaturedPrice").textContent = item.price;
    document.getElementById("heroFeaturedImg").src = item.img;
}

slideDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        setHeroSlide(Number(dot.dataset.slide));
    });
});

let autoSlideIdx = 0;
setInterval(() => {
    autoSlideIdx = (autoSlideIdx + 1) % heroSlides.length;
    setHeroSlide(autoSlideIdx);
}, 5500);

function startCounters() {
    document.querySelectorAll(".counter").forEach((counter) => {
        const target = +counter.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 45);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = current;
            }
        }, 30);
    });
}

function formatPrice(num) {
    return "$" + num.toLocaleString("en-US");
}

const carsGrid = document.getElementById("carsGrid");

function renderCars() {
    let filtered = carsDatabase.filter((car) => {
        const matchCat = currentFilter === "all" || car.category === currentFilter;
        const matchSearch =
            car.name.toLowerCase().includes(searchQuery) ||
            car.brand.toLowerCase().includes(searchQuery) ||
            car.engine.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (currentSort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (currentSort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (currentSort === "hp-desc") filtered.sort((a, b) => b.hp - a.hp);
    if (currentSort === "speed-desc") filtered.sort((a, b) => b.topSpeed - a.topSpeed);

    if (filtered.length === 0) {
        carsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px;">So'rovingiz bo'yicha avtomobil topilmadi.</p>`;
        return;
    }

    carsGrid.innerHTML = filtered
        .map((car) => {
            const isLiked = wishlist.includes(car.id);
            return `
            <article class="car-card">
                <div class="car-img-box">
                    <img src="${car.image}" alt="${car.name}" loading="lazy">
                    <span class="car-category-badge">${car.category}</span>
                    <button class="like-card-btn ${isLiked ? "liked" : ""}" onclick="toggleWishlist(${car.id})" title="Tanlanganlarga qo'shish">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="car-card-body">
                    <div class="car-brand-row">
                        <span>${car.brand}</span>
                        <span>${car.year} yil</span>
                    </div>
                    <h3 class="car-title">${car.name}</h3>
                    <div class="car-specs-mini">
                        <div class="spec-pill">
                            <i class="fa-solid fa-horse-head"></i>
                            <span>${car.hp} HP</span>
                            <small>Quvvat</small>
                        </div>
                        <div class="spec-pill">
                            <i class="fa-solid fa-stopwatch"></i>
                            <span>${car.accel}</span>
                            <small>0-100 km/s</small>
                        </div>
                        <div class="spec-pill">
                            <i class="fa-solid fa-gauge-max fa-gauge-high"></i>
                            <span>${car.topSpeed} km/s</span>
                            <small>Maks. tezlik</small>
                        </div>
                    </div>
                    <div class="car-card-footer">
                        <div class="car-price-block">
                            <span>Boshlang'ich narx</span>
                            <strong>${formatPrice(car.price)}</strong>
                        </div>
                        <button class="details-btn" onclick="openCarModal(${car.id})">
                            Batafsil <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
        })
        .join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderCars();
    });
});

document.querySelectorAll("[data-footer-filter]").forEach((link) => {
    link.addEventListener("click", () => {
        const targetFilter = link.dataset.footerFilter;
        document.querySelectorAll(".filter-btn").forEach((b) => {
            b.classList.toggle("active", b.dataset.filter === targetFilter);
        });
        currentFilter = targetFilter;
        renderCars();
    });
});

document.getElementById("carSearchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderCars();
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCars();
});

const carModal = document.getElementById("carModal");
const modalBodyContent = document.getElementById("modalBodyContent");

window.openCarModal = function (id) {
    const car = carsDatabase.find((c) => c.id === id);
    if (!car) return;

    modalBodyContent.innerHTML = `
        <div class="modal-car-grid">
            <img src="${car.image}" alt="${car.name}">
            <div>
                <span class="section-eyebrow">${car.brand} • ${car.year}</span>
                <h2 style="margin-bottom: 10px;">${car.name}</h2>
                <p style="color: var(--text-muted); font-size: 0.94rem;">${car.desc}</p>
                <div class="modal-specs-table">
                    <div class="m-spec"><span>Dvigatel</span><strong>${car.engine}</strong></div>
                    <div class="m-spec"><span>Quvvat</span><strong>${car.hp} ot kuchi</strong></div>
                    <div class="m-spec"><span>0–100 km/soat</span><strong>${car.accel}</strong></div>
                    <div class="m-spec"><span>Maksimal tezlik</span><strong>${car.topSpeed} km/soat</strong></div>
                    <div class="m-spec"><span>Uzatmalar qutisi</span><strong>${car.transmission}</strong></div>
                    <div class="m-spec"><span>Narxi</span><strong style="color: var(--accent-2);">${formatPrice(car.price)}</strong></div>
                </div>
                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                    <a href="#testdrive" class="btn btn-primary" onclick="selectCarForTestDrive(${car.id})">
                        Test-Drayvga Yozilish
                    </a>
                    <button class="btn btn-glass" onclick="toggleWishlist(${car.id})">
                        <i class="fa-solid fa-heart"></i> Sevimlilarga
                    </button>
                </div>
            </div>
        </div>
    `;
    carModal.classList.add("open");
};

window.selectCarForTestDrive = function (id) {
    carModal.classList.remove("open");
    document.getElementById("tdCarSelect").value = id;
};

document.getElementById("closeCarModal").addEventListener("click", () => {
    carModal.classList.remove("open");
});

carModal.addEventListener("click", (e) => {
    if (e.target === carModal) carModal.classList.remove("open");
});

window.toggleWishlist = function (id) {
    const idx = wishlist.indexOf(id);
    if (idx === -1) {
        wishlist.push(id);
        showToast("Avtomobil tanlanganlar ro'yxatiga qo'shildi!");
    } else {
        wishlist.splice(idx, 1);
        showToast("Avtomobil tanlanganlardan olib tashlandi.");
    }
    localStorage.setItem("apex1826_wishlist", JSON.stringify(wishlist));
    updateWishlistUI();
    renderCars();
};

function updateWishlistUI() {
    document.getElementById("wishlistCount").textContent = wishlist.length;
    document.getElementById("drawerCount").textContent = wishlist.length;

    const container = document.getElementById("wishlistItemsContainer");
    if (wishlist.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); text-align:center; margin-top:40px;">Hozircha tanlangan avtomobillar yo'q.</p>`;
        return;
    }

    container.innerHTML = wishlist
        .map((id) => {
            const car = carsDatabase.find((c) => c.id === id);
            if (!car) return "";
            return `
            <div class="wish-item">
                <img src="${car.image}" alt="${car.name}">
                <div style="flex:1;">
                    <h4 style="font-size:0.95rem;">${car.name}</h4>
                    <span style="color: var(--accent-2); font-weight:700; font-size:0.88rem;">${formatPrice(car.price)}</span>
                </div>
                <button class="modal-close" style="position:static; width:34px; height:34px;" onclick="toggleWishlist(${car.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        })
        .join("");
}

const wishlistDrawer = document.getElementById("wishlistDrawer");
document.getElementById("openWishlistBtn").addEventListener("click", () => {
    wishlistDrawer.classList.add("open");
});
document.getElementById("closeWishlistBtn").addEventListener("click", () => {
    wishlistDrawer.classList.remove("open");
});
wishlistDrawer.addEventListener("click", (e) => {
    if (e.target === wishlistDrawer) wishlistDrawer.classList.remove("open");
});

const compareCarA = document.getElementById("compareCarA");
const compareCarB = document.getElementById("compareCarB");
const compareArena = document.getElementById("compareArena");

function initCompareSelectors() {
    const options = carsDatabase
        .map((car) => `<option value="${car.id}">${car.name} (${formatPrice(car.price)})</option>`)
        .join("");
    compareCarA.innerHTML = options;
    compareCarB.innerHTML = options;
    document.getElementById("tdCarSelect").innerHTML = options;

    compareCarA.value = "1";
    compareCarB.value = "5";
    renderComparison();
}

function renderComparison() {
    const car1 = carsDatabase.find((c) => c.id === Number(compareCarA.value));
    const car2 = carsDatabase.find((c) => c.id === Number(compareCarB.value));
    if (!car1 || !car2) return;

    const renderCol = (car) => {
        const hpPercent = Math.min(100, Math.round((car.hp / 1900) * 100));
        const speedPercent = Math.min(100, Math.round((car.topSpeed / 500) * 100));
        const pricePercent = Math.min(100, Math.round((car.price / 3700000) * 100));

        return `
            <div class="compare-col">
                <img src="${car.image}" alt="${car.name}">
                <h3 style="margin-bottom:6px;">${car.name}</h3>
                <p style="color: var(--accent-2); font-weight:800; margin-bottom:18px;">${formatPrice(car.price)}</p>

                <div class="compare-bar-item">
                    <div class="compare-bar-head"><span>Ot kuchi</span><strong>${car.hp} HP</strong></div>
                    <div class="compare-progress"><span style="width:${hpPercent}%"></span></div>
                </div>
                <div class="compare-bar-item">
                    <div class="compare-bar-head"><span>Maksimal tezlik</span><strong>${car.topSpeed} km/soat</strong></div>
                    <div class="compare-progress"><span style="width:${speedPercent}%"></span></div>
                </div>
                <div class="compare-bar-item">
                    <div class="compare-bar-head"><span>Narx darajasi</span><strong>${formatPrice(car.price)}</strong></div>
                    <div class="compare-progress"><span style="width:${pricePercent}%"></span></div>
                </div>
                <p style="font-size:0.85rem; color: var(--text-muted); margin-top:12px;">
                    Dvigatel: <strong style="color:#fff;">${car.engine}</strong> • 0-100: <strong style="color: var(--accent-cyan);">${car.accel}</strong>
                </p>
            </div>
        `;
    };

    compareArena.innerHTML = renderCol(car1) + renderCol(car2);
}

compareCarA.addEventListener("change", renderComparison);
compareCarB.addEventListener("change", renderComparison);

const calcPrice = document.getElementById("calcPrice");
const calcDown = document.getElementById("calcDown");
const calcMonths = document.getElementById("calcMonths");

function updateCalculator() {
    const price = Number(calcPrice.value);
    const downPercent = Number(calcDown.value);
    const months = Number(calcMonths.value);

    const downAmount = Math.round(price * (downPercent / 100));
    const loanAmount = price - downAmount;
    const annualRate = 0.085;
    const monthlyRate = annualRate / 12;

    const monthlyPayment = Math.round(
        (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
    );
    const totalPay = monthlyPayment * months + downAmount;

    document.getElementById("calcPriceVal").textContent = formatPrice(price);
    document.getElementById("calcDownPercent").textContent = downPercent;
    document.getElementById("calcDownVal").textContent = formatPrice(downAmount);
    document.getElementById("calcMonthsVal").textContent = months + " oy";
    document.getElementById("calcMonthlyResult").textContent = formatPrice(monthlyPayment) + " / oy";
    document.getElementById("calcLoanAmount").textContent = formatPrice(loanAmount);
    document.getElementById("calcTotalPay").textContent = formatPrice(totalPay);
}

[calcPrice, calcDown, calcMonths].forEach((el) => el.addEventListener("input", updateCalculator));

const lightboxModal = document.getElementById("lightboxModal");
document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
        const img = item.querySelector("img");
        document.getElementById("lightboxImg").src = img.src;
        document.getElementById("lightboxCaption").textContent = item.dataset.caption;
        lightboxModal.classList.add("open");
    });
});
document.getElementById("closeLightbox").addEventListener("click", () => {
    lightboxModal.classList.remove("open");
});

document.getElementById("testDriveForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("tdName").value;
    const carId = Number(document.getElementById("tdCarSelect").value);
    const car = carsDatabase.find((c) => c.id === carId);
    showToast(`Rahmat, ${name}! ${car ? car.name : "Avtomobil"} uchun VIP Test-Drayv bron qilindi.`);
    e.target.reset();
});

function showToast(msg) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-bolt" style="color: var(--accent-2); margin-right:8px;"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 350);
    }, 3500);
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal-up, .reveal-right").forEach((el) => revealObserver.observe(el));

/* Initialize App */
renderCars();
updateWishlistUI();
initCompareSelectors();
updateCalculator();
