
const home = document.getElementById('home')
const saludo = document.getElementById('saludo')
const projec = document.getElementById('projec')
const habilidad = document.getElementById('habilidad')
const acerca = document.getElementById('acerca')
const contac = document.getElementById('contac')
const descarga = document.getElementById('descarga')
const aboutMe = document.getElementById('aboutMe')
const meDescription = document.getElementById('meDescription')
const languageSelect = document.getElementById('language-select');
const aboutLang = document.getElementById('aboutLang');
const skil = document.getElementById('skil');
const skilldes = document.getElementById('skilldes');
const htm = document.getElementById('htm');
const react = document.getElementById('react');
const css3 = document.getElementById('css3');
const equipo = document.getElementById('equipo');
const autodi = document.getElementById('autodi');
const puntual = document.getElementById('puntual');
const proact = document.getElementById('proact');
const pro = document.getElementById('pro');
const blanda = document.getElementById('blanda');
const proj = document.getElementById('proj');
const creative = document.getElementById('creative');
const contacte = document.getElementById('contacte');
const contactInfo = document.getElementById('contactInfo');
const directInfo = document.getElementById('directInfo');
const socialNet = document.getElementById('socialNet');
const buil = document.getElementById('build');

    languageSelect.addEventListener('click', function () {
        if (languageSelect.value === 'en') {
            home.textContent = 'Home';
            projec.textContent = 'Projects';
            habilidad.textContent = 'Skills';
            acerca.textContent = 'About';
            contac.textContent = 'Contact';
            saludo.textContent = "Hello, I'am Elias";
            descarga.textContent = "Download CV";
            aboutMe.textContent = "About me";
            skil.textContent = "Skills";
            react.textContent = "With the React library, I look for the best design patterns to combine speed and robustness";
            skilldes.textContent = "I have a strong self-taught and collaborative approach, extensive experience in the Front-end area, seeking constant excellence";
            meDescription.textContent = "I am a passionate person in the technology industry, I love to innovate and generate good products. I use research and constant training as a basis, which allows me to analyze, apply and maintain long-term improvements.";
            aboutLang.innerHTML = 'Full Stack Developer. I love the process, design and analysis with a collaborative approach to address the final solution';
            htm.innerHTML='Moving on from classic HTML, its foundations and the new approaches to HTML5';
            css3.innerHTML='Css3 has come a long way, with new advances, I use the agility and speed it offers to integrate the best designs on the web, in a competitive and fast market';
            blanda.innerHTML='Soft Skills';
            equipo.innerHTML='Collaborative Working';
            autodi.innerHTML='Autodidac';
            proact.innerHTML='Proactive';
            puntual.innerHTML='Puntual';
            proj.innerHTML='Projects';
            creative.innerHTML='Creative';
            contacte.innerHTML='Contact';
            contactInfo.innerHTML='Contact Info';
            directInfo.innerHTML='Direct Contact info';
            contacte.innerHTML='Contact';
            socialNet.innerHTML='Social Network';
            buil.innerHTML='Built by Elias Alonzo 2024';

        } else if (languageSelect.value === 'es') {
          home.textContent = 'Inicio';
          projec.textContent = 'Projectos';
          habilidad.textContent = 'Habilidades';
          acerca.textContent = 'Acerca de mi';
          contac.textContent = 'Contacto';
          saludo.textContent = "Hola, soy Elias Alonzo";
          descarga.textContent = "Descargar CV";
          aboutMe.textContent = "Sobre Mi";
          skil.textContent = "Habilidades";
          react.textContent = "Con la librería de React, busco los mejores patrones de diseño para combinar rapidez y solidez";
          skilldes.textContent = "Tengo un fuerte enfoque autodidacta y colaborativo, amplia experiencia en el area de Front-end, buscando la exelencia constante";
          meDescription.textContent = "Soy una persona apasionada en la industria tecnológica, me encanta innovar y generar buenos productos. Utilizo la investigación y la formación constante como base, lo cuál me permite analizar, aplicar y mantener mejoras a largo plazo.";
          aboutLang.innerHTML = 'Desarrollador FullStack. Me encanta el proceso , el diseño y el análisis con un enfoque colaborativo para abordar la solución final';
          htm.innerHTML='Pasando desde html clásico , sus fundamentos y los nuevos enfoques de HTML5';
          css3.innerHTML='Css3 ha avanzado mucho, con los nuevos avances, utilizo la agilidad y rapidez que esta ofrece para integrar los mejores diseños en la web, en un mercado competitivo y veloz';
          blanda.innerHTML='Habilidades Blandas';
          equipo.innerHTML='Trabajo colaborativo';
          autodi.innerHTML='Autodidacta';
          proact.innerHTML='Proactivo';
          puntual.innerHTML='Puntual';
          proj.innerHTML='Projectos';
          creative.innerHTML='Creativo';
          contacte.innerHTML='Contacto';
          contactInfo.innerHTML='Información de contacto';
          directInfo.innerHTML='Información de contacto directo';
          contacte.innerHTML='Contacto';
          socialNet.innerHTML='Redes Sociales';
          buil.innerHTML='Construido por Elias Alonzo 2024';
        }

    });
    

    function myFunction() {
      document.getElementById("homeSection").classList.toggle("dark");
    }
    document.getElementById("darkmode-toggle").onclick = function() {myFunction()};
