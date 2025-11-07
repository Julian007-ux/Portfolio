// Função para rolar suavemente para a seção de projetos
        function scrollToProjects() {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }

        // Animações de fade-in e slide ao rolar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observar todas as seções exceto hero (que já é visível)
        document.querySelectorAll('section:not(#hero)').forEach(section => {
            observer.observe(section);
        });
