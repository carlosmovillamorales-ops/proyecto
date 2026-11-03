(() => {
  "use strict";

  /* ==========================================================================
     CONSTANTS & INITIAL DEFAULTS
     ========================================================================== */
  const STORAGE_KEY = "yulicsAcNailsData_v1";

  const DEFAULT_BUSINESS = {
    businessName: "Yulics Ac Nails",
    ownerName: "Yulics",
    phone: "573053769192",
    instagram: "@nails_yulics_ac",
    instagramUrl: "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq",
    city: "Santa Marta, Colombia",
    address: "Bonda, Santa Marta",
    hours: "Lunes a Sábado: 8:30 a. m. - 7:00 p. m.",
    homeService: "consultar",
    description: "Estudio especializado en uñas acrílicas esculpidas, kapping gel protector, esmaltado semipermanente de larga duración y nail art exclusivo a mano alzada."
  };

  const DEFAULT_HERO = {
    topBannerBadge: "✨ NOVEDAD",
    topBannerText: "¡Agenda tu cita esta semana con anticipación y luce uñas impecables!",
    heroBadge: "STUDIO PROFESIONAL DE UÑAS",
    heroTitleMain: "Arte, elegancia y",
    heroTitleItalic: "durabilidad en tus manos.",
    heroSubtitle: "Especialista en uñas acrílicas esculpidas, esmaltado semipermanente de alta retención, nivelación kapping y nail art personalizado. Creamos el estilo perfecto para resaltar tu belleza.",
    customLogo: ""
  };

  const DEFAULT_SERVICES = [
    {
      id: "srv-semi-liso",
      name: "Semi Manos Liso",
      category: "Semipermanente",
      price: "30000",
      duration: "1 hora",
      badge: "Básico",
      description: "Esmaltado semipermanente liso en manos con manicura rusa, limado y sellado de cutícula. Duración de hasta 21 días."
    },
    {
      id: "srv-semi-diseno",
      name: "Semi Manos con Diseño",
      category: "Semipermanente",
      price: "35000",
      duration: "1 hora 15 min",
      badge: "Favorito",
      description: "Esmaltado semipermanente en manos con diseño decorativo a elección, manicura rusa y sellado de cutícula."
    },
    {
      id: "srv-rubber-semi",
      name: "Base Rubber + Semi",
      category: "Semipermanente",
      price: "45000",
      duration: "1 hora 20 min",
      badge: "Más pedido",
      description: "Nivelación con base rubber para corregir irregularidades de la uña natural combinada con esmaltado semipermanente de alta fijación."
    },
    {
      id: "srv-dipping",
      name: "Dipping",
      category: "Nivelación / Kapping",
      price: "45000",
      duration: "1 hora 30 min",
      badge: "Resistente",
      description: "Sistema de inmersión en polvo acrílico que brinda dureza, color uniforme y larga duración sin necesidad de lámpara UV."
    },
    {
      id: "srv-softgel-liso",
      name: "Soft Gel Liso",
      category: "Soft Gel / Press On",
      price: "55000",
      duration: "1 hora 20 min",
      badge: "Tendencia",
      description: "Tips de gel flexible de cobertura completa con acabado liso a un solo color. Ligeras, confortables y con acabado ultra natural."
    },
    {
      id: "srv-softgel-diseno",
      name: "Soft Gel con Diseño",
      category: "Soft Gel / Press On",
      price: "65000",
      duration: "1 hora 30 min",
      badge: "Premium",
      description: "Tips de gel flexible con diseño decorativo personalizado. Incluye nail art, efectos o decoraciones a elección de la clienta."
    },
    {
      id: "srv-pies-semi",
      name: "Pies Semi",
      category: "Semipermanente",
      price: "30000",
      duration: "1 hora",
      badge: "Pedicure",
      description: "Esmaltado semipermanente en pies con limpieza, limado y cuidado de cutículas. Acabado duradero y prolijo."
    },
    {
      id: "srv-combo-manos-pies",
      name: "Combo Manos + Pies Semi",
      category: "Semipermanente",
      price: "60000",
      duration: "2 horas",
      badge: "⭐ Promo estrella",
      description: "Paquete especial: esmaltado semipermanente en manos y pies con manicura y pedicura completa. ¡El combo más solicitado!"
    },
    {
      id: "srv-retiro-propio",
      name: "Retiro Propio",
      category: "Mantenimiento / Retiro",
      price: "10000",
      duration: "20 min",
      badge: "Retiro",
      description: "Retiro seguro de esmaltado o sistema realizado previamente en nuestro estudio, sin daño a la uña natural."
    },
    {
      id: "srv-retiro-otro",
      name: "Retiro de Otro Lugar",
      category: "Mantenimiento / Retiro",
      price: "15000",
      duration: "30 min",
      badge: "Retiro",
      description: "Retiro cuidadoso de esmaltado o sistema aplicado en otro salón. Incluye limado, remoción y cuidado de la uña natural."
    },
    {
      id: "srv-decoracion",
      name: "Decoración por Uña",
      category: "Nail Art / Diseños",
      price: "6000",
      duration: "10 min por uña",
      badge: "Extra",
      description: "Decoración adicional por uña individual: nail art a mano alzada, cristales, foil, stickers o efectos especiales."
    }
  ];

  const DEFAULT_COTIZADOR_PRICES = {
    acrilicas: 45000,
    semipermanente: 30000,
    kapping: 45000,
    softgel: 55000,
    lenMedio: 10000,
    lenLargo: 20000,
    lenExtra: 30000,
    french: 6000,
    cromo: 6000,
    cristales: 6000,
    nailart: 6000,
    retiro: 10000,
    domicilio: 15000
  };

  const DEFAULT_GALLERY = [
    {
      id: "gal-1",
      title: "Glazed Donut & French Chic",
      category: "clean",
      categoryLabel: "Clean & Nude",
      img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
      desc: "Base nude traslúcida con efecto cromo aperlado suave y borde francés micro-fino.",
      technique: "Semipermanente con nivelación",
      time: "1 hora 30 min"
    },
    {
      id: "gal-2",
      title: "Acrílicas Coffin Glam & Cristales",
      category: "glam",
      categoryLabel: "Glam & Cristales",
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      desc: "Estructura esculpida número 3 en tono blush milky con incrustación de cristales y acabado brillante.",
      technique: "Acrílicas esculpidas",
      time: "2 horas"
    },
    {
      id: "gal-3",
      title: "French Moderno Minimalista",
      category: "french",
      categoryLabel: "French Moderno",
      img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
      desc: "Líneas geométricas sutiles con tono lila pastel sobre uña natural en forma almendrada.",
      technique: "Kapping gel + Nail art",
      time: "1 hora 30 min"
    },
    {
      id: "gal-4",
      title: "Mármol Cuarzo Rosa & Foil Dorado",
      category: "art",
      categoryLabel: "Artístico",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      desc: "Efecto piedra mármol cuarzo trabajado a pincel con destellos en hoja de oro y cápsula de brillo.",
      technique: "Acrílicas / Soft Gel",
      time: "1 hora 45 min"
    },
    {
      id: "gal-5",
      title: "Baby Boomer Clásico Difuminado",
      category: "clean",
      categoryLabel: "Clean & Nude",
      img: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=700&q=80",
      desc: "El degradé perfecto entre blanco lechoso y rosa translúcido, sin cortes ni marcas visibles.",
      technique: "Acrílico difuminado",
      time: "1 hora 45 min"
    },
    {
      id: "gal-6",
      title: "Cat Eye / Ojo de Gato Terciopelo",
      category: "glam",
      categoryLabel: "Glam & Cristales",
      img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80",
      desc: "Pigmentos magnéticos 9D que reflejan la luz como seda tornasolada en tonos lilas y malva.",
      technique: "Semipermanente magnético",
      time: "1 hora 20 min"
    }
  ];

  const DEFAULT_AFTERCARE = [
    {
      num: "01",
      icon: "💧",
      title: "Aceite de cutícula a diario",
      desc: "Aplica una gota de aceite hidratante cada noche. Mantendrá la flexibilidad del sistema acrílico o gel y evitará desprendimientos prematuros."
    },
    {
      num: "02",
      icon: "🧤",
      title: "Usa guantes protectores",
      desc: "Los detergentes, cloro y productos químicos debilitan el sellador del esmalte. Al lavar platos o hacer aseo, protege siempre tus manos."
    },
    {
      num: "03",
      icon: "🚫",
      title: "No uses las uñas como herramientas",
      desc: "Evita abrir latas, despegar etiquetas o hacer palanca con la punta de las uñas. La fuerza concentrada puede fracturar tu uña natural."
    },
    {
      num: "04",
      icon: "⏳",
      title: "Retoque cada 21 a 28 días",
      desc: "El crecimiento natural desplaza el punto de equilibrio (ápice). Un mantenimiento puntual previene rupturas dolorosas y conserva la estética perfecta."
    }
  ];

  const DEFAULT_TESTIMONIALS = [
    {
      id: "testi-1",
      name: "Camila Morales",
      service: "Cliente frecuente · Acrílicas esculpidas",
      stars: "★★★★★",
      quote: "“La delicadeza con la que trabaja Yulics es increíble. Me hizo unas acrílicas almendradas que me duraron intactas casi un mes sin desprendimientos. 100% recomendada.”",
      initials: "CM"
    },
    {
      id: "testi-2",
      name: "Valentina Rodríguez",
      service: "Cliente frecuente · Kapping Gel & Nail Art",
      stars: "★★★★★",
      quote: "“Tenía mis uñas naturales muy quebradizas y con el Kapping gel me crecieron divinas. El salón es súper limpio, todo esterilizado y la atención es un 10/10.”",
      initials: "VR"
    },
    {
      id: "testi-3",
      name: "Daniela Arismendi",
      service: "Diseño Especial de Novia",
      stars: "★★★★★",
      quote: "“Le mostré una foto de Pinterest para una boda y me hizo el diseño idéntico, súper prolijo y fino. Me encantó la puntualidad y amabilidad.”",
      initials: "DA"
    }
  ];

  /* ==========================================================================
     ACTIVE APPLICATION STATE
     ========================================================================== */
  let business = { ...DEFAULT_BUSINESS };
  let heroContent = { ...DEFAULT_HERO };
  let cotizadorPrices = { ...DEFAULT_COTIZADOR_PRICES };
  let services = [...DEFAULT_SERVICES];
  let galleryItems = [...DEFAULT_GALLERY];
  let aftercareTips = [...DEFAULT_AFTERCARE];
  let testimonials = [...DEFAULT_TESTIMONIALS];

  let isAdminMode = false;
  let activeCategoryFilter = "all";
  let activeSearchQuery = "";
  let toastTimer = null;

  // Scanner variables
  let cameraStream = null;
  let scanActive = false;
  let scanFrame = null;
  let detector = null;
  let jsQrFallbackTried = false;

  const $ = (id) => document.getElementById(id);

  /* ==========================================================================
     UTILITIES & HELPERS
     ========================================================================== */
  function safeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function showToast(message, duration = 3800) {
    const toast = $("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), duration);
  }

  function formatMoney(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "Consultar";
    const digits = raw.replace(/[^\d]/g, "");
    if (!digits) return raw;
    const amount = Number(digits);
    if (!Number.isFinite(amount)) return raw;
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(amount);
  }

  function sanitizePhone(phone) {
    let digits = String(phone || "").replace(/\D/g, "");
    if (digits.length === 10 && !digits.startsWith("57")) {
      digits = "57" + digits;
    }
    return digits;
  }

  function getWhatsAppBaseUrl() {
    const phone = sanitizePhone(business.phone);
    return phone.length >= 10 ? `https://wa.me/${phone}` : "";
  }

  // Automatic high quality image compression for localStorage
  function resizeImageFile(file, maxWidth = 800, maxHeight = 800, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let w = img.width;
          let h = img.height;
          if (w > h) {
            if (w > maxWidth) {
              h = Math.round((h * maxWidth) / w);
              w = maxWidth;
            }
          } else {
            if (h > maxHeight) {
              w = Math.round((w * maxHeight) / h);
              h = maxHeight;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /* ==========================================================================
     PERSISTENCE (LOCAL STORAGE)
     ========================================================================== */
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && typeof saved === "object") {
        business = { ...DEFAULT_BUSINESS, ...(saved.business || {}) };
        heroContent = { ...DEFAULT_HERO, ...(saved.hero || {}) };
        cotizadorPrices = { ...DEFAULT_COTIZADOR_PRICES, ...(saved.cotizadorPrices || {}) };
        services = Array.isArray(saved.services) && saved.services.length > 0
          ? saved.services
          : [...DEFAULT_SERVICES];
        galleryItems = Array.isArray(saved.gallery) && saved.gallery.length > 0
          ? saved.gallery
          : [...DEFAULT_GALLERY];
        aftercareTips = Array.isArray(saved.aftercare) && saved.aftercare.length > 0
          ? saved.aftercare
          : [...DEFAULT_AFTERCARE];
        testimonials = Array.isArray(saved.testimonials) && saved.testimonials.length > 0
          ? saved.testimonials
          : [...DEFAULT_TESTIMONIALS];

        // Ensure update to Santa Marta and 3053769192
        if (!business.phone || business.phone.includes("3001234567")) {
          business.phone = "573053769192";
        }
        if (!business.city || business.city.includes("Barranquilla")) {
          business.city = "Santa Marta, Colombia";
        }
        if (!business.address || business.address === "Atención en Estudio Privado") {
          business.address = "Bonda, Santa Marta";
        }
        if (!business.instagram || business.instagram === "@yulics_ac_nails") {
          business.instagram = "@nails_yulics_ac";
          business.instagramUrl = "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq";
        } else if (!business.instagramUrl) {
          business.instagramUrl = "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq";
        }

        saveState(false);
        return;
      }
    } catch (e) {
      console.warn("Error leyendo localStorage:", e);
    }

    business = { ...DEFAULT_BUSINESS };
    heroContent = { ...DEFAULT_HERO };
    cotizadorPrices = { ...DEFAULT_COTIZADOR_PRICES };
    services = [...DEFAULT_SERVICES];
    galleryItems = [...DEFAULT_GALLERY];
    aftercareTips = [...DEFAULT_AFTERCARE];
    testimonials = [...DEFAULT_TESTIMONIALS];
    saveState(false);
  }

  function saveState(notify = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        business,
        hero: heroContent,
        cotizadorPrices,
        services,
        gallery: galleryItems,
        aftercare: aftercareTips,
        testimonials
      }));
      if (notify) showToast("✓ ¡Cambios guardados en la web!");
      return true;
    } catch (e) {
      showToast("No se pudo guardar en el navegador. Revisa el almacenamiento.");
      return false;
    }
  }

  /* ==========================================================================
     ADMIN / EDIT MODE TOGGLING
     ========================================================================== */
  function setAdminMode(enable) {
    isAdminMode = enable;
    const adminBar = $("adminBar");
    const toggleText = $("adminToggleText");
    const adminActions = $("adminServicesActions");

    if (isAdminMode) {
      document.body.classList.add("admin-mode-active");
      if (adminBar) adminBar.hidden = false;
      if (adminActions) adminActions.style.display = "block";
      if (toggleText) toggleText.textContent = "Cerrar Modo Edición";
      showToast("Modo Edición Total Activo: Haz clic en los botones dorados de cualquier sección para modificarla.");
    } else {
      document.body.classList.remove("admin-mode-active");
      if (adminBar) adminBar.hidden = true;
      if (adminActions) adminActions.style.display = "none";
      if (toggleText) toggleText.textContent = "Modo Edición";
    }

    renderServices();
    renderGallery(activeCategoryFilter);
    renderTestimonials();
  }

  /* ==========================================================================
     RENDERERS FOR ALL SECTIONS
     ========================================================================== */
  // 1. Hero & Branding
  function renderHeroAndLogo() {
    const bannerBadge = $("topBannerBadge");
    if (bannerBadge) bannerBadge.textContent = heroContent.topBannerBadge || DEFAULT_HERO.topBannerBadge;

    const bannerText = $("topBannerText");
    if (bannerText) bannerText.textContent = heroContent.topBannerText || DEFAULT_HERO.topBannerText;

    const heroBadge = $("heroBadgeText");
    if (heroBadge) {
      heroBadge.innerHTML = `<span class="pulse-sparkle">✦</span> ${safeText(heroContent.heroBadge || DEFAULT_HERO.heroBadge)}`;
    }

    const titleMain = $("heroTitleMain");
    if (titleMain) titleMain.textContent = heroContent.heroTitleMain || DEFAULT_HERO.heroTitleMain;

    const titleItalic = $("heroTitleItalic");
    if (titleItalic) titleItalic.textContent = heroContent.heroTitleItalic || DEFAULT_HERO.heroTitleItalic;

    const subtitle = $("heroSubtitleText");
    if (subtitle) subtitle.textContent = heroContent.heroSubtitle || DEFAULT_HERO.heroSubtitle;

    // Custom Logo updates
    const logoSrc = heroContent.customLogo || "logo.png";
    const headerLogo = $("siteBrandLogo");
    if (headerLogo) headerLogo.src = logoSrc;

    const heroLogoImg = document.querySelector(".hero-logo-img");
    if (heroLogoImg) heroLogoImg.src = logoSrc;

    const qrSmallLogo = document.querySelector(".qr-small-logo");
    if (qrSmallLogo) qrSmallLogo.src = logoSrc;

    const footerLogo = document.querySelector(".footer-logo");
    if (footerLogo) footerLogo.src = logoSrc;

    const siteBrandTitle = $("siteBrandTitle");
    if (siteBrandTitle) siteBrandTitle.textContent = business.businessName;
  }

  // 2. Business Profile UI
  function populateBusinessUI() {
    const name = business.businessName || "Yulics Ac Nails";
    const phone = sanitizePhone(business.phone);
    const waUrl = getWhatsAppBaseUrl();

    renderHeroAndLogo();

    const heroCardName = $("heroCardBrandName");
    if (heroCardName) heroCardName.textContent = name;

    const heroCardBio = $("heroCardBio");
    if (heroCardBio) heroCardBio.textContent = business.description || "Tu estilo, tu esencia";

    const statCount = $("statServicesCount");
    if (statCount) statCount.textContent = `${services.length} Servicios Activos`;

    const statCity = $("statCityLocation");
    if (statCity) statCity.textContent = business.city ? `En ${business.city}` : "Santa Marta, Bonda";

    const statHome = $("statHomeService");
    if (statHome) {
      statHome.textContent = business.homeService === "si" 
        ? "Servicio a domicilio disponible" 
        : business.homeService === "consultar" 
          ? "Domicilio bajo consulta" 
          : "Atención solo en estudio";
    }

    const contactDesc = $("contactBandDesc");
    if (contactDesc && business.description) {
      contactDesc.textContent = business.description;
    }

    const contactPhoneDisp = $("contactPhoneDisplay");
    if (contactPhoneDisp) {
      contactPhoneDisp.textContent = phone ? `WhatsApp: +${phone}` : "WhatsApp Activo";
    }

    const contactLocDisp = $("contactLocationDisplay");
    if (contactLocDisp) {
      contactLocDisp.textContent = business.address || business.city || "Bonda, Santa Marta";
    }

    const contactHoursDisp = $("contactHoursDisplay");
    if (contactHoursDisp) {
      contactHoursDisp.textContent = business.hours || "Horarios flexibles";
    }

    const statHours = $("statHoursSubtitle");
    if (statHours) {
      statHours.textContent = business.hours || "Lunes a Sábado: 8:30 a. m. - 7:00 p. m.";
    }

    // Direct WhatsApp Buttons
    const directWaBtn = $("directWhatsAppBtn");
    if (directWaBtn) {
      directWaBtn.onclick = () => {
        if (!waUrl) return showToast("Configura un WhatsApp válido.");
        const text = encodeURIComponent(`¡Hola ${business.ownerName || name}! Te escribo desde tu página web y quisiera consultar por tus servicios de uñas.`);
        window.open(`${waUrl}?text=${text}`, "_blank", "noopener,noreferrer");
      };
    }

    const heroBookBtn = $("heroBookBtn");
    if (heroBookBtn) heroBookBtn.onclick = () => openBookingModal();

    const navBookBtn = $("navBookBtn");
    if (navBookBtn) navBookBtn.onclick = () => openBookingModal();

    const bannerBookBtn = $("bannerBookBtn");
    if (bannerBookBtn) {
      bannerBookBtn.onclick = (e) => {
        e.preventDefault();
        openBookingModal();
      };
    }

    const fabBtn = $("fabWhatsAppBtn");
    if (fabBtn) {
      fabBtn.onclick = () => {
        if (!waUrl) return openBookingModal();
        const text = encodeURIComponent(`¡Hola ${name}! Quisiera información sobre disponibilidad de citas en Santa Marta.`);
        window.open(`${waUrl}?text=${text}`, "_blank", "noopener,noreferrer");
      };
    }

    const footerWa = $("footerWhatsAppLink");
    if (footerWa) footerWa.href = waUrl ? `${waUrl}?text=Hola!` : "#contacto";

    const defaultIgUrl = "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq";
    const igUrl = business.instagramUrl || (business.instagram?.startsWith("http") 
      ? business.instagram 
      : (business.instagram ? `https://instagram.com/${business.instagram.replace(/^@/, "")}` : defaultIgUrl));

    const footerIg = $("footerInstagramLink");
    if (footerIg) footerIg.href = igUrl;

    // Section QR elements directly under the other QR
    const secIgBtn = $("sectionInstagramBtn");
    if (secIgBtn) secIgBtn.href = igUrl;

    const secIgQrLink = $("sectionInstagramQrLink");
    if (secIgQrLink) secIgQrLink.href = igUrl;

    const secIgHandle = $("sectionInstagramHandle");
    if (secIgHandle) {
      if (business.instagram && !business.instagram.startsWith("http")) {
        secIgHandle.textContent = business.instagram.startsWith("@") ? business.instagram : `@${business.instagram}`;
      } else {
        secIgHandle.textContent = "@nails_yulics_ac";
      }
    }

    const secIgQrImg = $("sectionInstagramQrImg");
    if (secIgQrImg) {
      secIgQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&data=${encodeURIComponent(igUrl)}`;
    }

    // Admin form inputs
    Object.keys(DEFAULT_BUSINESS).forEach((key) => {
      const el = $(key);
      if (el) el.value = business[key] ?? DEFAULT_BUSINESS[key];
    });

    const yearEl = $("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  // 3. Services Catalog
  function renderServices() {
    const list = $("serviceList");
    const emptyState = $("noServices");
    if (!list) return;

    list.innerHTML = "";

    const query = activeSearchQuery.toLowerCase().trim();
    const filtered = services.filter((srv) => {
      const matchesCategory = activeCategoryFilter === "all" || srv.category === activeCategoryFilter;
      const matchesQuery = !query || 
        (srv.name && srv.name.toLowerCase().includes(query)) ||
        (srv.description && srv.description.toLowerCase().includes(query)) ||
        (srv.category && srv.category.toLowerCase().includes(query)) ||
        (srv.badge && srv.badge.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });

    if (emptyState) emptyState.hidden = filtered.length > 0;

    const statCount = $("statServicesCount");
    if (statCount) statCount.textContent = `${services.length} Servicios Registrados`;

    filtered.forEach((service) => {
      const card = document.createElement("article");
      card.className = "service-card";
      
      const badgeHtml = service.badge 
        ? `<span class="service-featured-badge">${safeText(service.badge)}</span>` 
        : "";

      card.innerHTML = `
        <div class="service-card-header">
          <span class="service-category-tag">${safeText(service.category || "Servicio")}</span>
          ${badgeHtml}
        </div>
        <h3>${safeText(service.name)}</h3>
        <div class="service-price">
          ${safeText(formatMoney(service.price))}
          <small>COP</small>
        </div>
        <p class="service-desc">${safeText(service.description || "Servicio profesional de belleza y cuidado de uñas.")}</p>
        <div class="service-footer">
          <span class="service-duration-pill">
            <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${safeText(service.duration || "Aprox. 90 min")}
          </span>
          <button class="button button-gold button-sm book-this-service-btn" type="button" data-book-id="${safeText(service.id)}">
            Agendar
          </button>
        </div>
        <div class="admin-service-buttons">
          <button class="button button-outline button-xs edit-srv-btn" type="button" data-edit-id="${safeText(service.id)}">
            ✏️ Modificar
          </button>
          <button class="button button-danger button-xs delete-srv-btn" type="button" data-delete-id="${safeText(service.id)}">
            🗑️ Eliminar
          </button>
        </div>
      `;

      list.appendChild(card);
    });

    updateBookingServiceOptions();
  }

  function updateBookingServiceOptions() {
    const select = $("bookServiceSelect");
    if (!select) return;
    select.innerHTML = "";

    services.forEach((srv) => {
      const opt = document.createElement("option");
      opt.value = srv.id;
      opt.textContent = `${srv.name} — ${formatMoney(srv.price)}`;
      select.appendChild(opt);
    });

    const customOpt = document.createElement("option");
    customOpt.value = "custom";
    customOpt.textContent = "Otro diseño / Cotización personalizada";
    select.appendChild(customOpt);
  }

  // 4. Cotizador Dynamic Options & Calculation
  function updateCotizadorUIWithPrices() {
    // Base options
    const baseGrid = $("calcBaseGrid");
    if (baseGrid) {
      const acrilicasRadio = baseGrid.querySelector('input[value="acrilicas"]');
      if (acrilicasRadio) {
        acrilicasRadio.dataset.price = cotizadorPrices.acrilicas;
        acrilicasRadio.closest(".option-card").querySelector(".option-badge").textContent = `${formatMoney(cotizadorPrices.acrilicas)} COP`;
      }
      const semiRadio = baseGrid.querySelector('input[value="semipermanente"]');
      if (semiRadio) {
        semiRadio.dataset.price = cotizadorPrices.semipermanente;
        semiRadio.closest(".option-card").querySelector(".option-badge").textContent = `${formatMoney(cotizadorPrices.semipermanente)} COP`;
      }
      const kappingRadio = baseGrid.querySelector('input[value="kapping"]');
      if (kappingRadio) {
        kappingRadio.dataset.price = cotizadorPrices.kapping;
        kappingRadio.closest(".option-card").querySelector(".option-badge").textContent = `${formatMoney(cotizadorPrices.kapping)} COP`;
      }
      const softgelRadio = baseGrid.querySelector('input[value="softgel"]');
      if (softgelRadio) {
        softgelRadio.dataset.price = cotizadorPrices.softgel;
        softgelRadio.closest(".option-card").querySelector(".option-badge").textContent = `${formatMoney(cotizadorPrices.softgel)} COP`;
      }
    }

    // Length options
    const lenGrid = $("calcLengthGrid");
    if (lenGrid) {
      const medio = lenGrid.querySelector('input[value="medio"]');
      if (medio) {
        medio.dataset.price = cotizadorPrices.lenMedio;
        medio.closest(".option-card").querySelector("small").textContent = `+${formatMoney(cotizadorPrices.lenMedio)}`;
      }
      const largo = lenGrid.querySelector('input[value="largo"]');
      if (largo) {
        largo.dataset.price = cotizadorPrices.lenLargo;
        largo.closest(".option-card").querySelector("small").textContent = `+${formatMoney(cotizadorPrices.lenLargo)}`;
      }
      const extra = lenGrid.querySelector('input[value="extralargo"]');
      if (extra) {
        extra.dataset.price = cotizadorPrices.lenExtra;
        extra.closest(".option-card").querySelector("small").textContent = `+${formatMoney(cotizadorPrices.lenExtra)}`;
      }
    }

    // Addons options
    const addonsGrid = $("calcAddonsGrid");
    if (addonsGrid) {
      const map = {
        french: cotizadorPrices.french,
        cromo: cotizadorPrices.cromo,
        cristales: cotizadorPrices.cristales,
        nailart: cotizadorPrices.nailart,
        retiro: cotizadorPrices.retiro,
        domicilio: cotizadorPrices.domicilio
      };
      Object.keys(map).forEach((key) => {
        const input = addonsGrid.querySelector(`input[value="${key}"]`);
        if (input) {
          input.dataset.price = map[key];
          input.closest(".option-card").querySelector("small").textContent = `+${formatMoney(map[key])} COP`;
        }
      });
    }

    calculateQuote();
  }

  function calculateQuote() {
    let total = 0;
    const breakdown = [];

    const baseSelected = document.querySelector('input[name="calcBase"]:checked');
    if (baseSelected) {
      const basePrice = Number(baseSelected.dataset.price || 0);
      const baseName = baseSelected.dataset.name || "Técnica Base";
      total += basePrice;
      breakdown.push({ label: baseName, price: basePrice });
    }

    const lengthSelected = document.querySelector('input[name="calcLength"]:checked');
    if (lengthSelected) {
      const lenPrice = Number(lengthSelected.dataset.price || 0);
      const lenName = lengthSelected.dataset.name || "Largo";
      total += lenPrice;
      if (lenPrice > 0) {
        breakdown.push({ label: `Largo: ${lenName}`, price: lenPrice });
      }
    }

    const shapeSelected = document.querySelector('input[name="calcShape"]:checked');
    const shapeName = shapeSelected ? shapeSelected.dataset.name : "Cuadrada";

    const addonsChecked = document.querySelectorAll('input[name="calcAddon"]:checked');
    addonsChecked.forEach((addon) => {
      const addonPrice = Number(addon.dataset.price || 0);
      const addonName = addon.dataset.name || "Detalle adicional";
      total += addonPrice;
      breakdown.push({ label: addonName, price: addonPrice });
    });

    const totalEl = $("calcTotalAmount");
    if (totalEl) totalEl.textContent = formatMoney(total);

    const breakdownEl = $("calcBreakdown");
    if (breakdownEl) {
      breakdownEl.innerHTML = "";
      breakdown.forEach((item) => {
        const row = document.createElement("div");
        row.className = "breakdown-row";
        row.innerHTML = `
          <span>${safeText(item.label)}</span>
          <strong>${safeText(formatMoney(item.price))}</strong>
        `;
        breakdownEl.appendChild(row);
      });

      const shapeRow = document.createElement("div");
      shapeRow.className = "breakdown-row";
      shapeRow.innerHTML = `
        <span>Forma de uña: <em>${safeText(shapeName)}</em></span>
        <small style="color:var(--gold-600);font-weight:700">Incluido</small>
      `;
      breakdownEl.appendChild(shapeRow);
    }

    return { total, breakdown, shapeName };
  }

  function sendQuoteToWhatsApp() {
    const waUrl = getWhatsAppBaseUrl();
    if (!waUrl) return showToast("Configura un WhatsApp válido.");

    const { total, breakdown, shapeName } = calculateQuote();
    let msg = `¡Hola *${business.businessName}*! 👋💅\n`;
    msg += `Hice una cotización en tu cotizador web y me gustaría consultar disponibilidad:\n\n`;
    msg += `💎 *Detalle de mi diseño:*\n`;
    breakdown.forEach((b) => {
      msg += `• ${b.label}: ${formatMoney(b.price)}\n`;
    });
    msg += `• Forma: ${shapeName}\n\n`;
    msg += `🏷️ *Total Estimado:* ${formatMoney(total)} COP\n\n`;
    msg += `📍 *Ubicación:* ${business.city} (${business.address})\n`;
    msg += `¿Qué fechas o turnos tendrías disponibles? ¡Gracias!`;

    window.open(`${waUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  // 5. Gallery Rendering with Delete Support
  function renderGallery(filter = "all") {
    const grid = $("galleryGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = filter === "all" 
      ? galleryItems 
      : galleryItems.filter((item) => item.category === filter);

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "gallery-card";
      card.setAttribute("data-gallery-id", item.id);
      card.innerHTML = `
        <button class="gallery-card-delete-btn" type="button" data-del-gallery="${safeText(item.id)}" title="Eliminar foto">
          🗑️ Eliminar
        </button>
        <div class="gallery-thumb-wrap">
          <img src="${item.img}" alt="${safeText(item.title)}" loading="lazy">
          <span class="gallery-badge">${safeText(item.categoryLabel)}</span>
          <div class="gallery-overlay">
            <h4>${safeText(item.title)}</h4>
            <span>Toca para ver detalles ↗</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function openGalleryLightbox(item) {
    const dialog = $("galleryDialog");
    if (!dialog) return;

    $("lightboxTitle").textContent = item.title;
    $("lightboxCategory").textContent = item.categoryLabel;
    $("lightboxImg").src = item.img;
    $("lightboxImg").alt = item.title;
    $("lightboxDescription").textContent = item.desc || "Diseño exclusivo de Yulics Ac Nails.";
    $("lightboxTechnique").textContent = item.technique || "Acrílicas / Kapping";
    $("lightboxTime").textContent = item.time || "Aprox. 2 horas";

    const waBtn = $("lightboxWhatsAppBtn");
    if (waBtn) {
      waBtn.onclick = () => {
        const waUrl = getWhatsAppBaseUrl();
        if (!waUrl) return showToast("Configura un WhatsApp válido.");
        const text = `¡Hola *${business.businessName}*! Me encantó el diseño "${item.title}" de tu galería web (${item.technique}). ¿Tienes disponibilidad para hacerme este estilo en Bonda, Santa Marta?`;
        window.open(`${waUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      };
    }

    dialog.showModal();
  }

  // 6. Testimonials Rendering with Delete Support
  function renderTestimonials() {
    const grid = $("testimonialsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    testimonials.forEach((t) => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.style.position = "relative";
      card.innerHTML = `
        <button class="testimonial-delete-btn" type="button" data-del-testi="${safeText(t.id)}" title="Eliminar testimonio">
          🗑️ Eliminar
        </button>
        <div class="testi-stars">${safeText(t.stars)}</div>
        <p class="testi-quote">${safeText(t.quote)}</p>
        <div class="testi-author">
          <div class="testi-avatar">${safeText(t.initials || "CL")}</div>
          <div>
            <strong>${safeText(t.name)}</strong>
            <small>${safeText(t.service)}</small>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 7. Aftercare Tips Rendering
  function renderAftercare() {
    const grid = $("aftercareGrid");
    if (!grid) return;
    grid.innerHTML = "";

    aftercareTips.forEach((tip) => {
      const card = document.createElement("div");
      card.className = "aftercare-card";
      card.innerHTML = `
        <div class="aftercare-number">${safeText(tip.num)}</div>
        <div class="aftercare-icon">${safeText(tip.icon)}</div>
        <h3>${safeText(tip.title)}</h3>
        <p>${safeText(tip.desc)}</p>
      `;
      grid.appendChild(card);
    });
  }

  /* ==========================================================================
     SERVICE CRUD MODAL
     ========================================================================== */
  function openServiceModal(service = null) {
    const dialog = $("serviceDialog");
    const form = $("serviceForm");
    if (!dialog || !form) return;

    form.reset();
    $("serviceId").value = service ? service.id : "";
    $("serviceName").value = service?.name || "";
    $("serviceCategory").value = service?.category || "Acrílicas";
    $("servicePrice").value = service?.price || "";
    $("serviceDuration").value = service?.duration || "";
    $("serviceBadge").value = service?.badge || "";
    $("serviceDescription").value = service?.description || "";
    
    $("serviceDialogTitle").textContent = service ? "Modificar Servicio" : "Agregar Nuevo Servicio";
    dialog.showModal();
    $("serviceName").focus();
  }

  function closeServiceModal() {
    $("serviceDialog")?.close();
  }

  /* ==========================================================================
     BOOKING WIZARD MODAL
     ========================================================================== */
  function resetBookingForm() {
    const form = $("bookingForm");
    if (form) form.reset();

    const dateInput = $("bookDate");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    const previewEl = $("bookingPreviewText");
    if (previewEl) {
      previewEl.textContent = "Completa tus datos para previsualizar el mensaje de reserva.";
    }
  }

  function openBookingModal(preselectedServiceId = null) {
    const dialog = $("bookingDialog");
    if (!dialog) return;

    resetBookingForm();

    if (preselectedServiceId) {
      const select = $("bookServiceSelect");
      if (select) select.value = preselectedServiceId;
    }

    dialog.showModal();
    $("bookClientName")?.focus();
  }

  function updateBookingPreview() {
    const previewEl = $("bookingPreviewText");
    if (!previewEl) return;

    const name = $("bookClientName")?.value.trim() || "[Tu Nombre]";
    const phone = $("bookClientPhone")?.value.trim() || "";
    const select = $("bookServiceSelect");
    const serviceName = select?.options[select.selectedIndex]?.textContent || "Servicio";
    const date = $("bookDate")?.value || "[Fecha]";
    const time = $("bookTime")?.value || "Tarde";
    const location = $("bookLocation")?.value || "En el estudio (Bonda)";
    const previous = $("bookHasPrevious")?.value || "No";
    const notes = $("bookNotes")?.value.trim();

    let text = `¡Hola *${business.businessName}*! 👋💅\n`;
    text += `Me gustaría agendar una cita para arreglarme las uñas:\n\n`;
    text += `👤 *Clienta:* ${name}\n`;
    if (phone) text += `📱 *Teléfono de contacto:* ${phone}\n`;
    text += `💅 *Servicio:* ${serviceName}\n`;
    text += `📅 *Fecha deseada:* ${date}\n`;
    text += `⏰ *Franja horaria:* ${time}\n`;
    text += `📍 *Modalidad:* ${location}\n`;
    text += `🔄 *¿Trae retiro previo?:* ${previous}\n`;
    if (notes) text += `📝 *Detalles adicionales:* ${notes}\n`;
    text += `\n¿Me confirmas si tienes disponibilidad en este horario? ¡Muchas gracias!`;

    previewEl.textContent = text;
  }

  function handleBookingSubmit(e) {
    e.preventDefault();
    const waUrl = getWhatsAppBaseUrl();
    if (!waUrl) return showToast("Configura un WhatsApp válido en los datos del negocio.");

    const phone = $("bookClientPhone")?.value.trim();
    if (!phone) {
      $("bookClientPhone")?.focus();
      return showToast("Por favor escribe tu número de teléfono o WhatsApp.");
    }

    updateBookingPreview();
    const previewEl = $("bookingPreviewText");
    const msg = previewEl?.textContent || "Hola, quisiera agendar una cita.";
    window.open(`${waUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");

    // Reiniciar y limpiar el formulario para proteger la privacidad de la clienta
    resetBookingForm();
    $("bookingDialog")?.close();
    showToast("¡Redirigiendo a WhatsApp con los datos completos de tu cita!");
  }

  /* ==========================================================================
     HERO & LOGO EDIT MODAL
     ========================================================================== */
  function openHeroEditModal() {
    const dialog = $("heroEditDialog");
    if (!dialog) return;

    $("editTopBanner").value = heroContent.topBannerText || "";
    $("editHeroBadge").value = heroContent.heroBadge || "";
    $("editHeroTitle").value = heroContent.heroTitleMain || "";
    $("editHeroTitleItalic").value = heroContent.heroTitleItalic || "";
    $("editHeroSubtitle").value = heroContent.heroSubtitle || "";

    const previewBox = $("logoPreviewBox");
    const previewImg = $("logoPreviewImg");
    if (heroContent.customLogo) {
      previewImg.src = heroContent.customLogo;
      previewBox.style.display = "grid";
    } else {
      previewBox.style.display = "none";
    }

    dialog.showModal();
  }

  async function handleHeroEditSubmit(e) {
    e.preventDefault();
    heroContent.topBannerText = $("editTopBanner").value.trim() || DEFAULT_HERO.topBannerText;
    heroContent.heroBadge = $("editHeroBadge").value.trim() || DEFAULT_HERO.heroBadge;
    heroContent.heroTitleMain = $("editHeroTitle").value.trim() || DEFAULT_HERO.heroTitleMain;
    heroContent.heroTitleItalic = $("editHeroTitleItalic").value.trim() || DEFAULT_HERO.heroTitleItalic;
    heroContent.heroSubtitle = $("editHeroSubtitle").value.trim() || DEFAULT_HERO.heroSubtitle;

    const file = $("logoFileInput").files?.[0];
    if (file) {
      try {
        const compressed = await resizeImageFile(file, 400, 400, 0.85);
        heroContent.customLogo = compressed;
      } catch (_) {
        showToast("No se pudo procesar el archivo del logo.");
      }
    }

    saveState(true);
    renderHeroAndLogo();
    $("heroEditDialog")?.close();
  }

  /* ==========================================================================
     BUSINESS HOURS EDIT MODAL
     ========================================================================== */
  function openHoursEditModal() {
    const dialog = $("hoursEditDialog");
    if (!dialog) return;

    $("editHoursText").value = business.hours || "";
    dialog.showModal();
    $("editHoursText").focus();
  }

  function handleHoursEditSubmit(e) {
    e.preventDefault();
    const val = $("editHoursText").value.trim();
    if (!val) {
      $("editHoursText").focus();
      return showToast("Ingresa el horario de atención.");
    }

    business.hours = val;
    saveState(true);
    populateBusinessUI();
    $("hoursEditDialog")?.close();
    showToast("✓ ¡Horario de atención actualizado!");
  }

  /* ==========================================================================
     COTIZADOR PRICES EDIT MODAL
     ========================================================================== */
  function openCalcEditModal() {
    const dialog = $("calcEditDialog");
    if (!dialog) return;

    $("calcPriceAcrilicas").value = cotizadorPrices.acrilicas;
    $("calcPriceSemi").value = cotizadorPrices.semipermanente;
    $("calcPriceKapping").value = cotizadorPrices.kapping;
    $("calcPriceSoftgel").value = cotizadorPrices.softgel;

    $("calcPriceLenMedio").value = cotizadorPrices.lenMedio;
    $("calcPriceLenLargo").value = cotizadorPrices.lenLargo;
    $("calcPriceLenExtra").value = cotizadorPrices.lenExtra;

    $("calcPriceFrench").value = cotizadorPrices.french;
    $("calcPriceCromo").value = cotizadorPrices.cromo;
    $("calcPriceCristales").value = cotizadorPrices.cristales;
    $("calcPriceNailart").value = cotizadorPrices.nailart;
    $("calcPriceRetiro").value = cotizadorPrices.retiro;
    $("calcPriceDomicilio").value = cotizadorPrices.domicilio;

    dialog.showModal();
  }

  function handleCalcEditSubmit(e) {
    e.preventDefault();
    cotizadorPrices.acrilicas = Number($("calcPriceAcrilicas").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.acrilicas;
    cotizadorPrices.semipermanente = Number($("calcPriceSemi").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.semipermanente;
    cotizadorPrices.kapping = Number($("calcPriceKapping").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.kapping;
    cotizadorPrices.softgel = Number($("calcPriceSoftgel").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.softgel;

    cotizadorPrices.lenMedio = Number($("calcPriceLenMedio").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.lenMedio;
    cotizadorPrices.lenLargo = Number($("calcPriceLenLargo").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.lenLargo;
    cotizadorPrices.lenExtra = Number($("calcPriceLenExtra").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.lenExtra;

    cotizadorPrices.french = Number($("calcPriceFrench").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.french;
    cotizadorPrices.cromo = Number($("calcPriceCromo").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.cromo;
    cotizadorPrices.cristales = Number($("calcPriceCristales").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.cristales;
    cotizadorPrices.nailart = Number($("calcPriceNailart").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.nailart;
    cotizadorPrices.retiro = Number($("calcPriceRetiro").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.retiro;
    cotizadorPrices.domicilio = Number($("calcPriceDomicilio").value.replace(/\D/g, "")) || DEFAULT_COTIZADOR_PRICES.domicilio;

    saveState(true);
    updateCotizadorUIWithPrices();
    $("calcEditDialog")?.close();
  }

  /* ==========================================================================
     GALLERY UPLOAD PHOTO MODAL
     ========================================================================== */
  function openGalleryUploadModal() {
    const dialog = $("galleryUploadDialog");
    const form = $("galleryUploadForm");
    if (!dialog || !form) return;
    form.reset();
    $("galleryPhotoPreviewBox").style.display = "none";
    dialog.showModal();
  }

  async function handleGalleryUploadSubmit(e) {
    e.preventDefault();
    let imgSrc = $("galleryPhotoUrl").value.trim();
    const file = $("galleryPhotoFile").files?.[0];

    if (file) {
      try {
        imgSrc = await resizeImageFile(file, 800, 800, 0.82);
      } catch (_) {
        showToast("Error procesando la imagen seleccionada.");
        return;
      }
    }

    if (!imgSrc) {
      showToast("Selecciona una foto desde tu dispositivo o ingresa un enlace de imagen.");
      return;
    }

    const category = $("galleryPhotoCategory").value;
    const catLabels = {
      glam: "Glam & Cristales",
      clean: "Clean & Nude",
      french: "French Moderno",
      art: "Artístico"
    };

    const newItem = {
      id: `gal-${Date.now()}`,
      title: $("galleryPhotoTitle").value.trim(),
      category,
      categoryLabel: catLabels[category] || "Diseño",
      img: imgSrc,
      desc: $("galleryPhotoDesc").value.trim() || "Diseño personalizado realizado en Yulics Ac Nails.",
      technique: $("galleryPhotoTechnique").value.trim() || "Acrílicas / Kapping",
      time: $("galleryPhotoTime").value.trim() || "Aprox. 2 horas"
    };

    galleryItems.unshift(newItem);
    saveState(true);
    renderGallery(activeCategoryFilter);
    $("galleryUploadDialog")?.close();
  }

  /* ==========================================================================
     TESTIMONIALS MODAL
     ========================================================================== */
  function openTestimonialModal() {
    const dialog = $("testimonialDialog");
    const form = $("testimonialForm");
    if (!dialog || !form) return;
    form.reset();
    dialog.showModal();
  }

  function handleTestimonialSubmit(e) {
    e.preventDefault();
    const name = $("testiName").value.trim();
    const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "CL";

    const newTesti = {
      id: `testi-${Date.now()}`,
      name,
      service: $("testiService").value.trim(),
      stars: $("testiStars").value,
      quote: `“${$("testiQuote").value.trim()}”`,
      initials
    };

    testimonials.unshift(newTesti);
    saveState(true);
    renderTestimonials();
    $("testimonialDialog")?.close();
  }

  /* ==========================================================================
     AFTERCARE TIPS MODAL
     ========================================================================== */
  function openAftercareModal() {
    const dialog = $("aftercareDialog");
    if (!dialog) return;

    $("tip1Title").value = aftercareTips[0]?.title || "";
    $("tip1Desc").value = aftercareTips[0]?.desc || "";
    $("tip2Title").value = aftercareTips[1]?.title || "";
    $("tip2Desc").value = aftercareTips[1]?.desc || "";
    $("tip3Title").value = aftercareTips[2]?.title || "";
    $("tip3Desc").value = aftercareTips[2]?.desc || "";
    $("tip4Title").value = aftercareTips[3]?.title || "";
    $("tip4Desc").value = aftercareTips[3]?.desc || "";

    dialog.showModal();
  }

  function handleAftercareSubmit(e) {
    e.preventDefault();
    aftercareTips = [
      { num: "01", icon: "💧", title: $("tip1Title").value.trim(), desc: $("tip1Desc").value.trim() },
      { num: "02", icon: "🧤", title: $("tip2Title").value.trim(), desc: $("tip2Desc").value.trim() },
      { num: "03", icon: "🚫", title: $("tip3Title").value.trim(), desc: $("tip3Desc").value.trim() },
      { num: "04", icon: "⏳", title: $("tip4Title").value.trim(), desc: $("tip4Desc").value.trim() }
    ];

    saveState(true);
    renderAftercare();
    $("aftercareDialog")?.close();
  }

  /* ==========================================================================
     QR CODE SUITE: GENERATOR & SCANNER
     ========================================================================== */
  function generateQRCodeCanvas(text) {
    const container = $("qrCanvasContainer");
    if (!container) return;
    container.innerHTML = "";

    const encoded = encodeURIComponent(text);
    const img = document.createElement("img");
    img.alt = "Código QR de Yulics Ac Nails";
    img.crossOrigin = "anonymous";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=8&data=${encoded}`;
    img.onerror = () => {
      container.innerHTML = `
        <div style="padding:15px;text-align:center;font-size:0.8rem;color:var(--lilac-800)">
          <strong>Código QR generado:</strong><br>
          <span style="font-size:0.7rem;word-break:break-all">${safeText(text)}</span>
        </div>`;
    };
    container.appendChild(img);
  }

  function updateQrGenerator() {
    const selectedType = document.querySelector('input[name="qrTargetType"]:checked')?.value || "whatsapp";
    const customWrap = $("customQrWrap");
    let targetUrl = "";

    if (selectedType === "whatsapp") {
      if (customWrap) customWrap.hidden = true;
      const phone = sanitizePhone(business.phone);
      targetUrl = phone ? `https://wa.me/${phone}?text=Hola%20Yulics%20Ac%20Nails%20Santa%20Marta` : window.location.href;
    } else if (selectedType === "web") {
      if (customWrap) customWrap.hidden = true;
      targetUrl = window.location.href;
    } else if (selectedType === "instagram") {
      if (customWrap) customWrap.hidden = true;
      targetUrl = business.instagramUrl || "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq";
    } else {
      if (customWrap) customWrap.hidden = false;
      targetUrl = $("customQrUrl")?.value.trim() || window.location.href;
    }

    generateQRCodeCanvas(targetUrl);
  }

  function downloadQRCode() {
    const container = $("qrCanvasContainer");
    const img = container?.querySelector("img");
    if (!img) return showToast("No se pudo descargar la imagen del QR.");

    fetch(img.src)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `QR-YulicsAcNails.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast("✓ Imagen del código QR descargada.");
      })
      .catch(() => window.open(img.src, "_blank"));
  }

  function downloadInstagramQRCode() {
    const img = $("sectionInstagramQrImg");
    if (!img) return showToast("No se pudo descargar la imagen del QR de Instagram.");

    fetch(img.src)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `QR-Instagram-YulicsAcNails.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast("✓ ¡Descarga del QR de Instagram iniciada!");
      })
      .catch(() => window.open(img.src, "_blank"));
  }

  function showScanResult(value) {
    const resultBox = $("scanResult");
    if (!resultBox) return;

    let linkMarkup = "";
    try {
      const url = new URL(String(value).trim());
      if (url.protocol === "https:" || url.protocol === "http:") {
        linkMarkup = `<br><a href="${safeText(url.href)}" target="_blank" rel="noopener noreferrer" style="color:var(--lilac-700);font-weight:700;display:inline-block;margin-top:6px;">Abrir enlace leído ↗</a>`;
      }
    } catch (_) {}

    resultBox.innerHTML = `<strong>Contenido detectado:</strong><div style="margin-top:4px;">${safeText(value)}</div>${linkMarkup}`;
    const manualInput = $("manualQr");
    if (manualInput) manualInput.value = String(value);
  }

  async function loadJsQrFallback() {
    if (window.jsQR) return true;
    if (jsQrFallbackTried) return false;
    jsQrFallbackTried = true;
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js";
      script.onload = () => resolve(Boolean(window.jsQR));
      script.onerror = () => resolve(false);
      document.head.appendChild(script);
    });
  }

  async function startScanner() {
    if (!navigator.mediaDevices?.getUserMedia) {
      showToast("El navegador no permite acceso a la cámara. Prueba la opción 'Subir imagen con QR'.");
      return;
    }

    try {
      if ("BarcodeDetector" in window) {
        try { detector = new window.BarcodeDetector({ formats: ["qr_code"] }); }
        catch (_) { detector = null; }
      }
      if (!detector && !(await loadJsQrFallback())) {
        showToast("No se pudo iniciar el decodificador de cámara.");
        return;
      }

      cameraStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: "environment" } }
      });

      const video = $("cameraVideo");
      video.srcObject = cameraStream;
      video.classList.add("active");
      $("cameraPlaceholder").style.display = "none";
      $("scannerReticle").hidden = false;
      await video.play();

      scanActive = true;
      $("startScan").disabled = true;
      $("stopScan").disabled = false;
      $("scanResult").innerHTML = "<em>Buscando código QR con la cámara...</em>";
      scanLoop();
    } catch (err) {
      stopScanner();
      showToast("No se pudo activar la cámara. Revisa los permisos o sube una captura de pantalla.");
    }
  }

  async function scanLoop() {
    if (!scanActive) return;
    const video = $("cameraVideo");
    try {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        if (detector) {
          const codes = await detector.detect(video);
          if (codes?.length && codes[0].rawValue) {
            showScanResult(codes[0].rawValue);
            stopScanner();
            showToast("✓ ¡Código QR detectado!");
            return;
          }
        } else if (window.jsQR) {
          const canvas = scanLoop.canvas || (scanLoop.canvas = document.createElement("canvas"));
          const ctx = canvas.getContext("2d", { willReadFrequently: true });
          const w = video.videoWidth;
          const h = video.videoHeight;
          if (w && h) {
            canvas.width = w;
            canvas.height = h;
            ctx.drawImage(video, 0, 0, w, h);
            const imgData = ctx.getImageData(0, 0, w, h);
            const code = window.jsQR(imgData.data, imgData.width, imgData.height);
            if (code?.data) {
              showScanResult(code.data);
              stopScanner();
              showToast("✓ ¡Código QR detectado!");
              return;
            }
          }
        }
      }
    } catch (_) {}
    scanFrame = requestAnimationFrame(scanLoop);
  }

  function stopScanner() {
    scanActive = false;
    if (scanFrame) cancelAnimationFrame(scanFrame);
    scanFrame = null;
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      cameraStream = null;
    }
    const video = $("cameraVideo");
    if (video) {
      video.pause();
      video.srcObject = null;
      video.classList.remove("active");
    }
    const placeholder = $("cameraPlaceholder");
    if (placeholder) placeholder.style.display = "block";
    const reticle = $("scannerReticle");
    if (reticle) reticle.hidden = true;

    $("startScan").disabled = false;
    $("stopScan").disabled = true;
  }

  async function scanImageFile(file) {
    if (!file) return;
    try {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.src = url;
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = rej;
      });

      if ("BarcodeDetector" in window) {
        try {
          const d = new window.BarcodeDetector({ formats: ["qr_code"] });
          const codes = await d.detect(img);
          if (codes.length > 0) {
            showScanResult(codes[0].rawValue);
            showToast("✓ ¡Código QR leído desde la imagen!");
            URL.revokeObjectURL(url);
            return;
          }
        } catch (_) {}
      }

      await loadJsQrFallback();
      if (window.jsQR) {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const code = window.jsQR(imgData.data, imgData.width, imgData.height);
        if (code?.data) {
          showScanResult(code.data);
          showToast("✓ ¡Código QR leído desde la imagen!");
          URL.revokeObjectURL(url);
          return;
        }
      }

      showToast("No se detectó ningún código QR en la imagen.");
      URL.revokeObjectURL(url);
    } catch (e) {
      showToast("Error procesando la imagen del QR.");
    }
  }

  /* ==========================================================================
     GLOBAL RESET & RESTORE
     ========================================================================== */
  function resetAllToDefaults() {
    if (!confirm("¿Deseas restablecer TODO a los valores iniciales de fábrica? Esto reiniciará textos, precios y catálogo recomendado.")) {
      return;
    }
    business = { ...DEFAULT_BUSINESS };
    heroContent = { ...DEFAULT_HERO };
    cotizadorPrices = { ...DEFAULT_COTIZADOR_PRICES };
    services = [...DEFAULT_SERVICES];
    galleryItems = [...DEFAULT_GALLERY];
    aftercareTips = [...DEFAULT_AFTERCARE];
    testimonials = [...DEFAULT_TESTIMONIALS];

    saveState(true);
    populateBusinessUI();
    renderServices();
    renderGallery();
    renderAftercare();
    renderTestimonials();
    updateCotizadorUIWithPrices();
    updateQrGenerator();
    showToast("✓ Todos los elementos se restablecieron a los valores iniciales.");
  }

  /* ==========================================================================
     EVENT LISTENERS SETUP
     ========================================================================== */
  function setupEventListeners() {
    // Mobile navigation
    const mobileMenu = $("mobileMenu");
    const mainNav = $("mainNav");
    if (mobileMenu && mainNav) {
      mobileMenu.addEventListener("click", () => {
        const open = mainNav.classList.toggle("open");
        mobileMenu.setAttribute("aria-expanded", String(open));
      });
      mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mainNav.classList.remove("open");
          mobileMenu.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Admin Mode Toggles
    $("toggleAdminMode")?.addEventListener("click", () => setAdminMode(!isAdminMode));
    $("exitAdminMode")?.addEventListener("click", () => setAdminMode(false));
    $("footerToggleAdmin")?.addEventListener("click", () => {
      setAdminMode(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Admin Shortcuts Bar
    $("barEditHeroBtn")?.addEventListener("click", openHeroEditModal);
    $("barEditCalcBtn")?.addEventListener("click", openCalcEditModal);
    $("barAddPhotoBtn")?.addEventListener("click", openGalleryUploadModal);
    $("barAddReviewBtn")?.addEventListener("click", openTestimonialModal);
    $("barEditHoursBtn")?.addEventListener("click", openHoursEditModal);
    $("barResetAllBtn")?.addEventListener("click", resetAllToDefaults);

    // In-Section Edit Buttons
    $("editBannerBtn")?.addEventListener("click", openHeroEditModal);
    $("editHeroBtn")?.addEventListener("click", openHeroEditModal);
    $("editCalcPricesBtn")?.addEventListener("click", openCalcEditModal);
    $("addGalleryPhotoBtn")?.addEventListener("click", openGalleryUploadModal);
    $("addTestimonialBtn")?.addEventListener("click", openTestimonialModal);
    $("editAftercareBtn")?.addEventListener("click", openAftercareModal);
    $("editHoursBtn")?.addEventListener("click", openHoursEditModal);

    // Dialog close buttons
    $("closeHeroEditDialog")?.addEventListener("click", () => $("heroEditDialog")?.close());
    $("cancelHeroEdit")?.addEventListener("click", () => $("heroEditDialog")?.close());
    $("heroEditForm")?.addEventListener("submit", handleHeroEditSubmit);

    $("closeCalcEditDialog")?.addEventListener("click", () => $("calcEditDialog")?.close());
    $("cancelCalcEdit")?.addEventListener("click", () => $("calcEditDialog")?.close());
    $("calcEditForm")?.addEventListener("submit", handleCalcEditSubmit);

    $("closeHoursEditDialog")?.addEventListener("click", () => $("hoursEditDialog")?.close());
    $("cancelHoursEdit")?.addEventListener("click", () => $("hoursEditDialog")?.close());
    $("hoursEditForm")?.addEventListener("submit", handleHoursEditSubmit);

    // Quick presets for business hours
    const setHoursPreset = (val) => {
      const input = $("editHoursText");
      if (input) {
        input.value = val;
        input.focus();
      }
    };
    $("quickHoursPreset1")?.addEventListener("click", () => setHoursPreset("Lunes a Sábado: 8:30 a. m. - 7:00 p. m."));
    $("quickHoursPreset2")?.addEventListener("click", () => setHoursPreset("Lunes a Sábado: 9:00 a. m. - 6:00 p. m."));
    $("quickHoursPreset3")?.addEventListener("click", () => setHoursPreset("Martes a Domingo: 10:00 a. m. - 8:00 p. m."));
    $("quickHoursPreset4")?.addEventListener("click", () => setHoursPreset("Todos los días con cita previa"));

    $("closeGalleryUploadDialog")?.addEventListener("click", () => $("galleryUploadDialog")?.close());
    $("cancelGalleryUpload")?.addEventListener("click", () => $("galleryUploadDialog")?.close());
    $("galleryUploadForm")?.addEventListener("submit", handleGalleryUploadSubmit);

    // Image preview for logo and gallery
    $("logoFileInput")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        $("logoPreviewImg").src = url;
        $("logoPreviewBox").style.display = "grid";
      }
    });

    $("galleryPhotoFile")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        $("galleryPhotoPreviewImg").src = url;
        $("galleryPhotoPreviewBox").style.display = "grid";
      }
    });

    $("closeTestimonialDialog")?.addEventListener("click", () => $("testimonialDialog")?.close());
    $("cancelTestimonial")?.addEventListener("click", () => $("testimonialDialog")?.close());
    $("testimonialForm")?.addEventListener("submit", handleTestimonialSubmit);

    $("closeAftercareDialog")?.addEventListener("click", () => $("aftercareDialog")?.close());
    $("cancelAftercare")?.addEventListener("click", () => $("aftercareDialog")?.close());
    $("aftercareForm")?.addEventListener("submit", handleAftercareSubmit);

    // Catalog search & category filter
    const searchInput = $("serviceSearchInput");
    const clearSearchBtn = $("clearSearchBtn");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearchQuery = e.target.value;
        if (clearSearchBtn) clearSearchBtn.hidden = !activeSearchQuery;
        renderServices();
      });
    }
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        activeSearchQuery = "";
        clearSearchBtn.hidden = true;
        renderServices();
      });
    }

    const categoryBar = $("categoryFilterBar");
    if (categoryBar) {
      categoryBar.addEventListener("click", (e) => {
        const pill = e.target.closest(".category-pill");
        if (!pill) return;
        categoryBar.querySelectorAll(".category-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        activeCategoryFilter = pill.dataset.category || "all";
        renderServices();
      });
    }

    $("resetCatalogFilters")?.addEventListener("click", () => {
      activeCategoryFilter = "all";
      activeSearchQuery = "";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.hidden = true;
      categoryBar?.querySelectorAll(".category-pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.category === "all");
      });
      renderServices();
    });

    $("loadDefaultServicesBtn")?.addEventListener("click", () => {
      services = [...DEFAULT_SERVICES];
      saveState(true);
      renderServices();
    });

    // Service list delegation (Book, Edit, Delete)
    $("serviceList")?.addEventListener("click", (e) => {
      const bookBtn = e.target.closest(".book-this-service-btn");
      if (bookBtn) return openBookingModal(bookBtn.dataset.bookId);

      const editBtn = e.target.closest(".edit-srv-btn");
      if (editBtn) {
        const srv = services.find((s) => s.id === editBtn.dataset.editId);
        if (srv) openServiceModal(srv);
        return;
      }

      const deleteBtn = e.target.closest(".delete-srv-btn");
      if (deleteBtn) {
        const srv = services.find((s) => s.id === deleteBtn.dataset.deleteId);
        if (srv && confirm(`¿Seguro que deseas eliminar el servicio "${srv.name}"?`)) {
          services = services.filter((s) => s.id !== srv.id);
          saveState(true);
          renderServices();
        }
      }
    });

    $("addService")?.addEventListener("click", () => openServiceModal());
    $("closeServiceDialog")?.addEventListener("click", closeServiceModal);
    $("cancelService")?.addEventListener("click", closeServiceModal);

    $("serviceForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = $("serviceId").value;
      const newService = {
        id: id || `srv-${Date.now()}`,
        name: $("serviceName").value.trim(),
        category: $("serviceCategory").value,
        price: $("servicePrice").value.trim().replace(/[^\d]/g, ""),
        duration: $("serviceDuration").value.trim(),
        badge: $("serviceBadge").value.trim(),
        description: $("serviceDescription").value.trim()
      };

      if (id) {
        services = services.map((s) => s.id === id ? newService : s);
      } else {
        services.unshift(newService);
      }

      closeServiceModal();
      saveState(true);
      renderServices();
    });

    // Cotizador events
    $("cotizador")?.addEventListener("change", () => calculateQuote());
    $("sendQuoteWhatsApp")?.addEventListener("click", sendQuoteToWhatsApp);

    // Booking Wizard
    $("bookingForm")?.addEventListener("submit", handleBookingSubmit);
    $("bookingForm")?.addEventListener("input", updateBookingPreview);
    $("bookingForm")?.addEventListener("change", updateBookingPreview);
    $("closeBookingDialog")?.addEventListener("click", () => {
      resetBookingForm();
      $("bookingDialog")?.close();
    });
    $("cancelBooking")?.addEventListener("click", () => {
      resetBookingForm();
      $("bookingDialog")?.close();
    });
    $("bookingDialog")?.addEventListener("close", resetBookingForm);
    $("openBookingWizardBtn")?.addEventListener("click", () => openBookingModal());

    // Gallery Filters & Actions
    $("galleryFilterNav")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-filter-btn");
      if (!btn) return;
      $("galleryFilterNav").querySelectorAll(".gallery-filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });

    $("galleryGrid")?.addEventListener("click", (e) => {
      const delBtn = e.target.closest(".gallery-card-delete-btn");
      if (delBtn) {
        e.stopPropagation();
        const id = delBtn.dataset.delGallery;
        if (confirm("¿Eliminar esta foto de la galería?")) {
          galleryItems = galleryItems.filter((g) => g.id !== id);
          saveState(true);
          renderGallery(activeCategoryFilter);
        }
        return;
      }

      const card = e.target.closest(".gallery-card");
      if (!card) return;
      const item = galleryItems.find((g) => g.id === card.dataset.galleryId);
      if (item) openGalleryLightbox(item);
    });

    $("closeGalleryDialog")?.addEventListener("click", () => $("galleryDialog")?.close());

    // Testimonials Delete delegation
    $("testimonialsGrid")?.addEventListener("click", (e) => {
      const delBtn = e.target.closest(".testimonial-delete-btn");
      if (delBtn) {
        const id = delBtn.dataset.delTesti;
        if (confirm("¿Eliminar este testimonio?")) {
          testimonials = testimonials.filter((t) => t.id !== id);
          saveState(true);
          renderTestimonials();
        }
      }
    });

    // QR Tabs & Generation
    $("qrTabs")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (!btn) return;
      $("qrTabs").querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tab = btn.dataset.tab;
      if (tab === "generate") {
        $("tabGenerateQR").hidden = false;
        $("tabScanQR").hidden = true;
        stopScanner();
      } else {
        $("tabGenerateQR").hidden = true;
        $("tabScanQR").hidden = false;
      }
    });

    document.querySelectorAll('input[name="qrTargetType"]').forEach((radio) => {
      radio.addEventListener("change", updateQrGenerator);
    });
    $("regenerateQrBtn")?.addEventListener("click", updateQrGenerator);
    $("downloadQrBtn")?.addEventListener("click", downloadQRCode);
    $("downloadInstagramQrBtn")?.addEventListener("click", downloadInstagramQRCode);
    $("customQrUrl")?.addEventListener("input", updateQrGenerator);

    // QR Scanner
    $("startScan")?.addEventListener("click", startScanner);
    $("stopScan")?.addEventListener("click", stopScanner);
    $("qrImageFileInput")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) scanImageFile(file);
      e.target.value = "";
    });
    $("useManualQr")?.addEventListener("click", () => {
      const val = $("manualQr")?.value.trim();
      if (!val) return showToast("Escribe o pega el texto o enlace del QR.");
      showScanResult(val);
    });

    $("openScanner")?.addEventListener("click", () => {
      const qrSection = $("qr");
      if (qrSection) {
        qrSection.scrollIntoView({ behavior: "smooth" });
        $("qrTabs")?.querySelector('[data-tab="scan"]')?.click();
      }
    });

    // Business Profile Form Submit
    $("businessForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const rawIg = $("instagram").value.trim();
      let igUrl = business.instagramUrl || "https://www.instagram.com/nails_yulics_ac?mdxt=OXR3bjdmbHFrb3Rq";
      if (rawIg.startsWith("http")) {
        igUrl = rawIg;
      }
      business = {
        businessName: $("businessName").value.trim() || DEFAULT_BUSINESS.businessName,
        ownerName: $("ownerName").value.trim(),
        phone: $("phone").value.trim(),
        instagram: rawIg,
        instagramUrl: igUrl,
        city: $("city").value.trim(),
        address: $("address").value.trim(),
        hours: $("hours").value.trim(),
        homeService: $("homeService").value,
        description: $("description").value.trim()
      };
      saveState(true);
      populateBusinessUI();
      updateQrGenerator();
    });

    $("resetBusiness")?.addEventListener("click", () => {
      if (confirm("¿Restaurar los datos de contacto y negocio a los originales? Los servicios se mantendrán.")) {
        business = { ...DEFAULT_BUSINESS };
        saveState(true);
        populateBusinessUI();
        updateQrGenerator();
      }
    });

    $("copyShareLink")?.addEventListener("click", async () => {
      const url = window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        showToast("✓ ¡Enlace copiado al portapapeles! Listo para tu biografía de Instagram.");
      } catch (_) {
        prompt("Copia tu enlace:", url);
      }
    });

    // Backup Export & Import
    $("exportData")?.addEventListener("click", () => {
      const backup = {
        app: "Yulics Ac Nails",
        version: "3.0",
        exportedAt: new Date().toISOString(),
        business,
        hero: heroContent,
        cotizadorPrices,
        services,
        gallery: galleryItems,
        aftercare: aftercareTips,
        testimonials
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Respaldo-YulicsAcNails-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast("✓ Copia de seguridad JSON descargada.");
    });

    $("importFile")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!data || !data.business) {
          throw new Error("Formato inválido");
        }
        if (confirm("Esta importación reemplazará los servicios y datos actuales. ¿Deseas continuar?")) {
          business = { ...DEFAULT_BUSINESS, ...data.business };
          if (data.hero) heroContent = { ...DEFAULT_HERO, ...data.hero };
          if (data.cotizadorPrices) cotizadorPrices = { ...DEFAULT_COTIZADOR_PRICES, ...data.cotizadorPrices };
          if (Array.isArray(data.services)) services = data.services;
          if (Array.isArray(data.gallery)) galleryItems = data.gallery;
          if (Array.isArray(data.aftercare)) aftercareTips = data.aftercare;
          if (Array.isArray(data.testimonials)) testimonials = data.testimonials;

          saveState(false);
          populateBusinessUI();
          renderServices();
          renderGallery();
          renderAftercare();
          renderTestimonials();
          updateCotizadorUIWithPrices();
          updateQrGenerator();
          showToast("✓ Copia de seguridad importada con éxito.");
        }
      } catch (err) {
        alert("El archivo seleccionado no es un respaldo válido de Yulics Ac Nails.");
      } finally {
        e.target.value = "";
      }
    });

    // Close dialogs when clicking on backdrop
    document.querySelectorAll("dialog").forEach((dialog) => {
      dialog.addEventListener("click", (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) dialog.close();
      });
    });
  }

  /* ==========================================================================
     APP INITIALIZATION
     ========================================================================== */
  function init() {
    loadState();
    populateBusinessUI();
    renderServices();
    renderGallery();
    renderAftercare();
    renderTestimonials();
    updateCotizadorUIWithPrices();
    updateQrGenerator();
    setupEventListeners();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();