        const particleField = document.getElementById('particle-field');
        const particleCount = 120;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.4 + 0.1;
            p.className = 'absolute bg-white rounded-full pointer-events-none';
            p.style.opacity = opacity;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.filter = `blur(${Math.random() * 1.5}px)`;

            p.animate([
                { transform: 'translate(0, 0)', opacity: opacity },
                { transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`, opacity: 0.1 }
            ], {
                duration: Math.random() * 25000 + 15000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
            particleField.appendChild(p);
        }

        const sparkContainer = document.getElementById('repair-sparks');
        function createSpark() {
            const spark = document.createElement('div');
            spark.style.position = 'absolute';
            spark.style.width = '2px';
            spark.style.height = '2px';
            spark.style.backgroundColor = '#00f5ff';
            spark.style.boxShadow = '0 0 12px #00f5ff';
            spark.style.borderRadius = '50%';
            spark.style.left = `calc(65% + ${Math.random() * 12 - 6}px)`;
            spark.style.top = `${Math.random() * 80 + 10}%`;
            spark.animate([
                { opacity: 0, transform: 'scale(0)' },
                { opacity: 1, transform: 'scale(1.5)', offset: 0.2 },
                { opacity: 0, transform: 'scale(0)' }
            ], { duration: 400 + Math.random() * 600 });
            sparkContainer.appendChild(spark);
            setTimeout(() => spark.remove(), 1000);
        }
        setInterval(createSpark, 150);

        const tiltCards = document.querySelectorAll('.tilt-card');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });

        const reveals = document.querySelectorAll('.scroll-reveal');
        const observerOptions = { threshold: 0.15 };
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        reveals.forEach(el => revealObserver.observe(el));

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            document.querySelectorAll('.parallax-layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                layer.style.transform = `translateY(${scrollY * speed}px)`;
            });
        });

        function createBubbles() {
            const container = document.getElementById('bubble-container');
            if (!container) return;
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                const size = Math.random() * 8 + 4;
                const duration = Math.random() * 10 + 10;
                const drift = (Math.random() - 0.5) * 100;
                bubble.className = 'bubble';
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.setProperty('--duration', `${duration}s`);
                bubble.style.setProperty('--drift', `${drift}px`);
                bubble.style.animationDelay = `${Math.random() * 15}s`;
                container.appendChild(bubble);
            }
        }
        createBubbles();